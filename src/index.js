const JSON_HEADERS = { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' };
const json = (body, status = 200, headers = {}) => new Response(JSON.stringify(body), { status, headers: { ...JSON_HEADERS, ...headers } });
const clean = (value, max = 300) => String(value ?? '').trim().replace(/[\u0000-\u001f\u007f]/g, '').slice(0, max);

function decodeXml(value = '') {
  return value.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([\da-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/<[^>]*>/g, '').trim();
}
function tag(item, name) {
  const match = item.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, 'i'));
  return match ? decodeXml(match[1]) : '';
}
async function news() {
  const response = await fetch('https://www.lebrief.energy/rss.xml', {
    headers: { 'user-agent': 'OilMarket/1.0 (+https://oilmarket-portal.arona-easyoil.workers.dev)' },
    cf: { cacheTtl: 900, cacheEverything: true },
  });
  if (!response.ok) throw new Error(`LE BRIEF RSS returned ${response.status}`);
  const xml = await response.text();
  const items = [...xml.matchAll(/<item(?:\s[^>]*)?>([\s\S]*?)<\/item>/gi)].slice(0, 12).map(([, item]) => ({
    title: tag(item, 'title'), link: tag(item, 'link'), description: tag(item, 'description'),
    publishedAt: tag(item, 'pubDate'), category: tag(item, 'category'), source: 'LE BRIEF',
  })).filter(item => item.title && /^https:\/\//.test(item.link));
  return { source: 'LE BRIEF', sourceUrl: 'https://www.lebrief.energy/', updatedAt: new Date().toISOString(), items };
}
async function prices() {
  const url = 'https://fred.stlouisfed.org/graph/fredgraph.csv?id=DCOILBRENTEU,DCOILWTICO,DDFUELNYH,DHHNGSP';
  const response = await fetch(url, { cf: { cacheTtl: 900, cacheEverything: true } });
  if (!response.ok) throw new Error('FRED returned ' + response.status);
  const lines = (await response.text()).trim().split(/\r?\n/);
  const records = lines.slice(1).map(line => {
    const [date, brent, wti, diesel, gas] = line.split(',');
    const numeric = value => value == null || value.trim() === '' || value.trim() === '.' ? null : Number(value);
    return { date, brent: numeric(brent), wti: numeric(wti), diesel: numeric(diesel), gas: numeric(gas) };
  }).filter(row => row.date && Object.values(row).slice(1).some(Number.isFinite));
  if (!records.length) throw new Error('FRED returned no observations');
  const definitions = [
    { name: 'Brent Crude', key: 'brent', id: 'DCOILBRENTEU', unit: 'USD/bbl' },
    { name: 'WTI Crude', key: 'wti', id: 'DCOILWTICO', unit: 'USD/bbl' },
    { name: 'Ultra-Low-Sulfur Diesel · NY Harbor', key: 'diesel', id: 'DDFUELNYH', unit: 'USD/gal' },
    { name: 'Henry Hub Natural Gas', key: 'gas', id: 'DHHNGSP', unit: 'USD/MMBtu' },
  ];
  const series = definitions.map(({ name, key, id, unit }) => {
    const observations = records.filter(row => Number.isFinite(row[key]));
    const latest = observations.at(-1);
    const previous = observations.at(-2);
    return { name, seriesId: id, date: latest?.date ?? null, value: latest?.[key] ?? null,
      change: latest && previous ? Number((latest[key] - previous[key]).toFixed(3)) : null,
      changePercent: latest && previous && previous[key] !== 0 ? Number(((latest[key] - previous[key]) / previous[key] * 100).toFixed(2)) : null, unit };
  });
  return {
    source: 'U.S. Energy Information Administration via FRED',
    sourceUrl: 'https://fred.stlouisfed.org/', updatedAt: new Date().toISOString(), delayed: true,
    series, history: records.slice(-365).map(row => ({ date: row.date, brent: row.brent, wti: row.wti, diesel: row.diesel, gas: row.gas })),
  };
}
async function submitInquiry(request, env) {
  if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405, { allow: 'POST' });
  const length = Number(request.headers.get('content-length') || 0);
  if (length > 12000) return json({ error: 'Request is too large' }, 413);
  let body;
  try { const raw = await request.text(); if (raw.length > 12000) return json({ error: 'Request is too large' }, 413); body = JSON.parse(raw); } catch { return json({ error: 'Invalid JSON' }, 400); }
  if (clean(body.website, 120)) return json({ ok: true }); // honeypot
  const fields = {
    name: clean(body.name, 120), email: clean(body.email, 254), company: clean(body.company, 160),
    role: clean(body.role, 60), product: clean(body.product, 120), specification: clean(body.specification, 200),
    volume: clean(body.volume, 80), destination: clean(body.destination, 160), incoterm: clean(body.incoterm, 40),
    delivery: clean(body.delivery, 120), payment: clean(body.payment, 160), details: clean(body.message, 2000),
    locale: body.locale === 'fr' ? 'fr' : 'en',
  };
  const required = ['name', 'email', 'company', 'role', 'product', 'volume', 'destination', 'delivery'];
  if (required.some(key => !fields[key]) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email) || body.consent !== true) {
    return json({ error: 'Please complete the required fields and consent.' }, 400);
  }
  if (!env.DB) return json({ error: 'Inquiry storage is unavailable.' }, 503);
  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const recent = await env.DB.prepare('SELECT COUNT(*) AS total FROM inquiries WHERE business_email = ? AND created_at >= ?').bind(fields.email.toLowerCase(), since).first();
  if ((recent?.total || 0) >= 5) return json({ error: 'Too many inquiries from this email. Please try again later.' }, 429);
  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();
  await env.DB.prepare(`INSERT INTO inquiries (id, created_at, consent_at, full_name, business_email, company, role, product, specification, volume_mt, destination, incoterm, delivery_period, payment_terms, details, locale, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'new')`)
    .bind(id, createdAt, createdAt, fields.name, fields.email.toLowerCase(), fields.company, fields.role, fields.product, fields.specification, fields.volume, fields.destination, fields.incoterm, fields.delivery, fields.payment, fields.details, fields.locale).run();
  return json({ ok: true, id }, 201);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/news') {
      try { return json(await news(), 200, { 'cache-control': 'public, max-age=300, s-maxage=900' }); }
      catch (error) { return json({ error: 'News feed is temporarily unavailable', detail: String(error?.message || error) }, 502); }
    }
    if (url.pathname === '/api/prices') {
      try { return json(await prices(), 200, { 'cache-control': 'public, max-age=300, s-maxage=3600' }); }
      catch (error) { return json({ error: 'Price source is temporarily unavailable', detail: String(error?.message || error) }, 502); }
    }
    if (url.pathname === '/api/inquiries') return submitInquiry(request, env);
    return env.ASSETS.fetch(request);
  },
};
