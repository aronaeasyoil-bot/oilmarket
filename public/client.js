const originalHome = home;
const originalInquiryPage = inquiryPage;
const originalNewsPage = newsPage;

copy.en.announcement = 'GLOBAL OIL TRADE · MARKET DATA · DIRECTORIES';
copy.fr.announcement = 'COMMERCE PÉTROLIER · DONNÉES DE MARCHÉ · ANNUAIRES';
copy.en.heroEyebrow = 'OIL INDUSTRY INFORMATION & TRADE PORTAL';
copy.fr.heroEyebrow = 'INFORMATION ET COMMERCE DE L’INDUSTRIE PÉTROLIÈRE';
copy.en.hero1 = 'Everything the'; copy.en.hero2 = 'oil trade needs,'; copy.en.hero3 = 'in one place.';
copy.fr.hero1 = 'Tout le nécessaire'; copy.fr.hero2 = 'au commerce pétrolier,'; copy.fr.hero3 = 'au même endroit.';
copy.en.heroText = 'A daily oil price board, global directories of refineries, traders and storage terminals, and energy news from LE BRIEF — all in one portal.';
copy.fr.heroText = 'Les prix quotidiens du pétrole, les annuaires de raffineries, négociants et terminaux, et les actualités énergie de LE BRIEF — réunis sur une plateforme.';
copy.en.explorePrices = 'See today’s prices'; copy.fr.explorePrices = 'Voir les prix du jour';
copy.en.findSuppliers = 'Explore directories'; copy.fr.findSuppliers = 'Explorer les annuaires';
copy.en.benchTitle = 'MARKET SNAPSHOT'; copy.fr.benchTitle = 'APERÇU DU MARCHÉ';
copy.en.noFeed = 'Daily spot · EIA via FRED'; copy.fr.noFeed = 'Cours quotidiens · EIA via FRED';
copy.en.directoriesEyebrow = 'INDUSTRY DIRECTORIES'; copy.fr.directoriesEyebrow = 'ANNUAIRES PROFESSIONNELS';
copy.en.directoryTitle = 'Who refines it, who trades it, where it sits.';
copy.fr.directoryTitle = 'Qui raffine, qui négocie et où se trouvent les infrastructures.';
copy.en.directorySub = 'Every listing links to a public operator source. OilMarket does not certify suppliers or commercial availability.';
copy.fr.directorySub = 'Chaque fiche renvoie à une source publique de l’opérateur. OilMarket ne certifie ni les fournisseurs ni les disponibilités commerciales.';
copy.en.priceTitle = 'Today’s assessed prices'; copy.fr.priceTitle = 'Prix de référence du jour';
copy.en.priceIntro = 'Daily spot prices and trends for Brent, WTI, ultra-low-sulfur diesel and Henry Hub gas. Values are delayed and attributed to EIA via FRED.';
copy.fr.priceIntro = 'Prix et tendances spot quotidiens du Brent, WTI, diesel à très basse teneur en soufre et gaz Henry Hub. Données différées, source EIA via FRED.';
copy.en.methodologyText = 'Brent, WTI, New York Harbor ultra-low-sulfur diesel and Henry Hub gas are daily EIA spot series distributed by FRED. They are delayed and do not represent OilMarket cargo offers or real-time prices. Bonny Light, Dubai/Oman and EN590 assessments require separate licensed sources.';
copy.fr.methodologyText = 'Brent, WTI, diesel ULSD de New York Harbor et gaz Henry Hub sont des séries spot quotidiennes de l’EIA relayées par FRED. Elles sont différées et ne constituent ni des prix en temps réel ni des offres de cargaisons OilMarket. Bonny Light, Dubai/Oman et EN590 nécessitent des sources sous licence.';
copy.en.market = 'Basis'; copy.fr.market = 'Base';
copy.en.newsPageIntro = 'Latest headlines from LE BRIEF, loaded from its public RSS feed. Full stories open on the publisher’s website.';
copy.fr.newsPageIntro = 'Les derniers titres de LE BRIEF, chargés depuis son flux RSS public. Les articles complets s’ouvrent sur le site de l’éditeur.';
copy.en.requestIntro = 'Share your requirement. OilMarket stores the inquiry privately so the team can follow up. Do not include confidential documents.';
copy.fr.requestIntro = 'Présentez votre besoin. OilMarket enregistre la demande de façon privée afin que l’équipe puisse y donner suite. N’ajoutez aucun document confidentiel.';
copy.en.privacyBody = 'Trade inquiry details are submitted to OilMarket and stored in a private Cloudflare D1 database for follow-up. No document uploads are accepted. Contact OilMarket to request access, correction or deletion.';
copy.fr.privacyBody = 'Les demandes commerciales sont transmises à OilMarket et conservées dans une base privée Cloudflare D1 pour leur suivi. Aucun document ne peut être joint. Contactez OilMarket pour demander l’accès, la rectification ou la suppression de vos données.';
copy.en.directoryNote = 'Entries link to public operator information. OilMarket has not verified mandates, availability, commercial terms or supplier status.';
copy.fr.directoryNote = 'Les fiches renvoient aux informations publiques des opérateurs. OilMarket ne vérifie ni mandats, ni disponibilités, ni conditions commerciales, ni statut de fournisseur.';
copy.en.emptyNews = 'Headlines and summaries are provided by LE BRIEF. Full articles remain on lebrief.energy.';
copy.fr.emptyNews = 'Les titres et résumés sont fournis par LE BRIEF. Les articles complets restent sur lebrief.energy.';
copy.en.footerNote = 'Daily Brent and WTI · EIA via FRED · Delayed spot data';
copy.fr.footerNote = 'Brent et WTI quotidiens · EIA via FRED · données différées';
copy.en.requestSaved = 'Your inquiry has been sent to OilMarket.';
copy.fr.requestSaved = 'Votre demande a été envoyée à OilMarket.';
copy.en.consentText = 'I agree that OilMarket may store and use these details to respond to my inquiry.';
copy.fr.consentText = 'J’accepte qu’OilMarket conserve et utilise ces informations pour répondre à ma demande.';
copy.en.chartUnavailable = 'Loading Brent daily history…';
copy.fr.chartUnavailable = 'Chargement de l’historique quotidien Brent…';

const safe = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const priceRows = [
  { code:'DCOILBRENTEU', name:'Crude Oil (Brent)', basis:'EIA Europe Brent · FOB spot', id:'DCOILBRENTEU', key:'brent', unit:'USD/bbl' },
  { code:'DCOILWTICO', name:'Crude Oil (WTI)', basis:'EIA Cushing · daily spot', id:'DCOILWTICO', key:'wti', unit:'USD/bbl' },
  { code:'DDFUELNYH', name:'ULSD Diesel (New York Harbor)', basis:'EIA ultra-low-sulfur diesel · daily spot', id:'DDFUELNYH', key:'diesel', unit:'USD/gal' },
  { code:'DHHNGSP', name:'Natural Gas (Henry Hub)', basis:'EIA Henry Hub · daily spot', id:'DHHNGSP', key:'gas', unit:'USD/MMBtu' },
  { code:'DME DUBAI', name:'Crude Oil (Dubai/Oman)', basis:'No connected public daily series', id:null, key:null, unit:'USD/bbl' },
  { code:'BONNY LIGHT', name:'Crude Oil (Bonny Light)', basis:'Licensed price assessment required', id:null, key:null, unit:'USD/bbl' },
];

const directoryMeta = {
  refineries: { eyebrow:'01 / REFINERIES', title:'Global Refineries', titleFr:'Raffineries mondiales', description:'Refining operators, locations and public company information.', descriptionFr:'Opérateurs de raffinage, implantations et informations publiques.' },
  traders: { eyebrow:'02 / TRADERS', title:'Oil Traders', titleFr:'Négociants pétroliers', description:'Energy and commodity trading companies with public operator sources.', descriptionFr:'Sociétés de négoce énergie et matières premières avec sources publiques.' },
  storage: { eyebrow:'03 / STORAGE', title:'Storage Terminals', titleFr:'Terminaux de stockage', description:'Terminal operators and public storage infrastructure information.', descriptionFr:'Opérateurs de terminaux et informations publiques sur les infrastructures.' },
  shipping: { eyebrow:'04 / SHIPPING', title:'Shipping & Logistics', titleFr:'Transport maritime et logistique', description:'Tanker operators and published fleet information.', descriptionFr:'Opérateurs de navires-citernes et informations publiques sur leurs flottes.' },
};

home = function () {
  const directoryCards=Object.entries(directoryMeta).map(([type,meta])=>`<a class="directory-card reference-directory-card" href="#/${type}"><span class="directory-index">${meta.eyebrow}</span><h3>${lang==='fr'?meta.titleFr:meta.title}</h3><p>${lang==='fr'?meta.descriptionFr:meta.description}</p><div class="directory-card-foot"><span>${dirs[type].length} ${lang==='fr'?'sources publiques':'public sources'}</span><b>${lang==='fr'?'Explorer':'Explore'} →</b></div></a>`).join('');
  const newsPlaceholder=`<article class="news-card"><div class="news-content"><div class="eyebrow">LE BRIEF</div><h3>${lang==='fr'?'Chargement des actualités…':'Loading latest headlines…'}</h3></div></article>`;
  const snapshot=[['EIA BRENT','Crude Oil (Brent)','DCOILBRENTEU','USD/bbl'],['EIA WTI','Crude Oil (WTI)','DCOILWTICO','USD/bbl'],['ULSD · NY HARBOR','ULSD Diesel (New York Harbor)','DDFUELNYH','USD/gal'],['HENRY HUB','Natural Gas (Henry Hub)','DHHNGSP','USD/MMBtu'],['DUBAI / OMAN','Crude Oil (Dubai/Oman)',null,'USD/bbl']].map(([code,name,id,unit])=>`<div class="snapshot-row"><div><span class="snapshot-code">${code}</span><b>${name}</b></div><strong ${id?`data-benchmark="${id}"`:''} class="${id?'':'snapshot-unavailable'}">${id?'—':(lang==='fr'?'NON COTÉ':'NOT QUOTED')}</strong><span class="snapshot-unit">${unit}</span></div>`).join('');
  const benchmarkRows=priceRows.filter(row=>row.id).map(row=>`<tr data-series="${row.id}"><td class="price-code">${row.code}</td><td class="product-name">${row.name}</td><td data-price>—</td><td data-change>—</td><td>${row.unit}</td><td data-price-status>—</td></tr>`).join('');
  return `<section class="hero reference-hero"><div class="hero-copy"><div class="eyebrow">${t('heroEyebrow')}</div><h1>${t('hero1')}<br><em>${t('hero2')}</em><br>${t('hero3')}</h1><p>${t('heroText')}</p><p class="hero-secondary">${lang==='fr'?'Prix du pétrole, raffineries, négociants et terminaux — réunis sur une plateforme.':'Oil prices, refineries, traders and storage terminals — all in one portal.'}</p><div class="hero-buttons"><a class="button button-blue" href="#/prices">${t('explorePrices')} <span>→</span></a><a class="button button-outline" href="#/refineries">${t('findSuppliers')} <span>↗</span></a></div></div><aside class="market-snapshot"><div class="snapshot-heading"><div><span class="snapshot-kicker">${lang==='fr'?'APERÇU DU MARCHÉ':'MARKET SNAPSHOT'}</span><span class="snapshot-updated" id="market-date">${lang==='fr'?'Dernière publication':'Latest publication'} · —</span></div><a href="#/prices">${lang==='fr'?'TOUS LES PRIX':'ALL PRICES'} →</a></div>${snapshot}</aside></section><div class="market-strip reference-ticker"><div class="ticker-label">OILMARKET · ${lang==='fr'?'MARCHÉ':'MARKET'}</div><div class="ticker">${[['Brent Crude','DCOILBRENTEU'],['WTI Crude','DCOILWTICO'],['ULSD · NY Harbor','DDFUELNYH'],['Henry Hub Gas','DHHNGSP']].map(([name,id])=>`<div class="ticker-item"><b>${name}</b><span data-benchmark="${id}">—</span></div>`).join('')}</div><a class="strip-link" href="#/prices">${lang==='fr'?'Tableau complet':'Full price board'} →</a></div><section class="section reference-benchmarks"><div class="benchmarks-top"><div><div class="eyebrow">BENCHMARKS</div><h2>${lang==='fr'?'Prix de référence du jour':'Today’s assessed prices'}</h2><p>${lang==='fr'?'Références spot quotidiennes publiées par l’EIA et relayées par FRED.':'Daily spot benchmarks published by the EIA and distributed by FRED.'}</p></div><a class="text-link" href="#/prices">${lang==='fr'?'Tableau complet des prix':'Full price board'} →</a></div><div class="directory-table-wrap"><table class="benchmark-table home-benchmark-table"><thead><tr><th>Code</th><th>${t('instrument')}</th><th>${t('price')}</th><th>${t('change')}</th><th>${t('unit')}</th><th>${lang==='fr'?'Mise à jour':'Updated'}</th></tr></thead><tbody>${benchmarkRows}</tbody></table></div><div class="home-trend"><div><span class="snapshot-code">${lang==='fr'?'TENDANCE BRENT · 30 JOURS':'BRENT TREND · 30 DAYS'}</span><span class="home-trend-caption">${lang==='fr'?'Cours spot quotidien · USD/baril':'Daily spot · USD/barrel'}</span></div><svg class="chart-svg" id="home-price-chart" viewBox="0 0 900 180" preserveAspectRatio="none" aria-label="Brent daily spot trend"></svg></div><p class="data-note">${t('methodologyText')}</p></section><section class="section reference-directories"><div class="section-head"><div><div class="eyebrow">${t('directoriesEyebrow')}</div><h2>${t('directoryTitle')}</h2><p>${t('directorySub')}</p></div></div><div class="cards reference-directory-grid">${directoryCards}</div></section><section class="section section-tight reference-news"><div class="section-head"><div><div class="eyebrow">${t('briefEyebrow')}</div><h2>${t('newsTitle')}</h2><p>${t('newsSub')}</p></div><a class="text-link" href="#/news">${t('viewNews')} →</a></div><div class="news-grid" data-news-feed>${newsPlaceholder}</div><p class="data-note" data-news-attribution>${t('emptyNews')}</p></section><section class="inquiry-band"><div><div class="eyebrow">OILMARKET · B2B</div><h2>${t('ctaTitle')}</h2><p>${t('ctaText')}</p></div><a href="#/inquiry" class="button button-blue">${t('submitInquiry')} <span>↗</span></a></section>`;
};

pricesPage = function () {
  const rows=priceRows.map(row=>`<tr data-search="${safe(`${row.code} ${row.name} ${row.basis}`.toLowerCase())}" data-series="${row.id||''}"><td class="price-code">${row.code}</td><td class="product-name">${row.name}</td><td>${row.basis}</td><td class="price-value" data-price>${row.id?'—':(lang==='fr'?'Non coté':'Not quoted')}</td><td class="price-change" data-change>—</td><td>${row.unit}</td><td class="price-date" data-price-status>${row.id?'EIA via FRED':(lang==='fr'?'Source à connecter':'Source not connected')}</td></tr>`).join('');
  const graphControls=`<div class="chart-series-switch">${priceRows.filter(row=>row.id).map((row,index)=>`<button data-chart-series="${row.id}" class="${index===0?'active':''}">${row.name}</button>`).join('')}</div><div class="chart-period">${['7','30','90','365'].map(period=>`<button data-period="${period}" class="${period==='30'?'active':''}">${t(`period${period}`)}</button>`).join('')}</div>`;
  return `<section class="price-board-intro"><div class="eyebrow">OILMARKET · BENCHMARKS</div><h1>${lang==='fr'?'Prix de référence du jour':'Today’s assessed prices'}</h1><p>${t('priceIntro')}</p><a href="#price-board" class="text-link">${lang==='fr'?'Tableau complet des prix':'Full price board'} ↓</a></section><section class="content-wrap price-chart-first"><div class="chart-box"><div class="chart-head"><div><div class="eyebrow">${lang==='fr'?'TENDANCES':'PRICE TRENDS'}</div><h2 id="chart-title">${lang==='fr'?'Brent · tendance quotidienne':'Brent · daily trend'}</h2></div><span class="chart-source-label">EIA via FRED</span></div><div class="chart-controls">${graphControls}</div><svg class="chart-svg" id="price-chart" viewBox="0 0 900 240" preserveAspectRatio="none" aria-label="${t('chartUnavailable')}"><path d="M0 190H900M0 140H900M0 90H900M0 40H900" stroke="#e7eae8" fill="none"/><text x="50%" y="125" text-anchor="middle" fill="#919a99" font-size="13" data-chart-status>${t('chartUnavailable')}</text></svg><div class="chart-axis"><span id="chart-start-date">—</span><span id="chart-end-date">—</span></div><p class="data-note">${t('methodologyText')}</p></div></section><section id="price-board" class="content-wrap price-board-content"><div class="price-board-heading"><div><span class="eyebrow">BENCHMARKS</span><h2>${lang==='fr'?'Tableau complet des prix':'Full price board'}</h2></div><button id="csv-button">↓ ${t('csv')}</button></div><div class="filter-row"><div class="search-box"><input id="price-search" placeholder="${t('search')}" aria-label="${t('search')}"></div></div><div class="directory-table-wrap"><table class="benchmark-table reference-price-table" id="price-table"><thead><tr><th>Code</th><th>${t('instrument')}</th><th>${t('market')}</th><th>${t('price')}</th><th>${t('change')}</th><th>${t('unit')}</th><th>${lang==='fr'?'Dernière mise à jour':'Last updated'}</th></tr></thead><tbody>${rows}</tbody></table></div><p class="data-note">${t('methodologyText')}</p></section>`;
};

directoryPage = function (type) {
  const meta=directoryMeta[type], entries=dirs[type];
  const cards=entries.map(entry=>`<article class="directory-entry reference-entry" data-search="${safe(entry.join(' ').toLowerCase())}" data-location="${safe(entry[1])}" data-products="${safe(entry[3].toLowerCase())}"><span class="directory-index">${safe(entry[2])} / ${safe(entry[1])}</span><h3>${safe(entry[0])}</h3><p>${safe(entry[6])}</p><div class="entry-tags">${entry[3].split(', ').map(tag=>`<span>${safe(tag)}</span>`).join('')}</div><div class="entry-foot"><span>${safe(entry[1])}</span><a class="text-link" href="${safe(entry[5])}" target="_blank" rel="noopener noreferrer">${safe(entry[4])} ↗</a></div><span class="status">${t('notVerified')}</span></article>`).join('');
  return `<section class="directory-page-intro"><div class="eyebrow">${meta.eyebrow}</div><h1>${lang==='fr'?meta.titleFr:meta.title}</h1><p>${lang==='fr'?meta.descriptionFr:meta.description}</p><p class="directory-source-intro">${t('directoryNote')}</p></section><section class="content-wrap"><div class="filter-row"><div class="search-box"><input id="directory-search" placeholder="${t('search')}" aria-label="${t('search')}"></div><select id="location-filter"><option value="">${t('allCountries')}</option>${[...new Set(entries.map(entry=>entry[1]))].map(location=>`<option>${safe(location)}</option>`).join('')}</select><select id="product-filter"><option value="">${t('allProducts')}</option>${[...new Set(entries.flatMap(entry=>entry[3].split(', ')))].map(product=>`<option>${safe(product)}</option>`).join('')}</select><button id="clear-filters">${t('clearFilters')}</button></div><div class="directory-grid" id="directory-grid">${cards}</div></section>`;
};

newsPage = function () {
  return `<section class="directory-page-intro"><div class="eyebrow">LE BRIEF · ${t('navNews')}</div><h1>${t('newsPageTitle')}</h1><p>${t('newsPageIntro')}</p></section><section class="content-wrap"><div class="news-grid reference-news-grid" data-news-feed><article class="news-card"><div class="news-content"><h3>${lang==='fr'?'Chargement…':'Loading…'}</h3></div></article></div><p class="data-note" data-news-attribution>${t('emptyNews')}</p></section>`;
};

inquiryPage = function () {
  const html=originalInquiryPage();
  return html.replace('<p class="form-note">',`<div class="field honeypot" aria-hidden="true"><label for="f-website">Website</label><input id="f-website" name="website" tabindex="-1" autocomplete="off"></div><label class="consent-row"><input type="checkbox" name="consent" value="yes" required><span>${t('consentText')}</span></label><p class="form-note">`);
};

function renderConnectedNews() {
  const grids=[...document.querySelectorAll('[data-news-feed]')]; if(!grids.length)return;
  fetch('/api/news').then(response=>{if(!response.ok)throw Error('LE BRIEF unavailable');return response.json()}).then(feed=>{
    const cards=feed.items.map(item=>{const date=item.publishedAt?new Date(item.publishedAt).toLocaleDateString(lang==='fr'?'fr-FR':'en-GB',{day:'numeric',month:'short',year:'numeric'}):'';return `<article class="news-card"><div class="news-content"><div class="eyebrow">LE BRIEF${item.category?' · '+safe(item.category):''}${date?' · '+date:''}</div><h3>${safe(item.title)}</h3><p>${safe(item.description)}</p><a class="text-link" href="${safe(item.link)}" target="_blank" rel="noopener noreferrer">${lang==='fr'?'Lire l’article':'Read article'} ↗</a></div></article>`}).join('');grids.forEach(grid=>grid.innerHTML=cards);const note=document.querySelector('[data-news-attribution]');if(note)note.innerHTML=`${lang==='fr'?'Source :':'Source:'} <a href="https://www.lebrief.energy/" target="_blank" rel="noopener noreferrer">LE BRIEF</a> · ${lang==='fr'?'flux RSS public':'public RSS feed'}`;
  }).catch(()=>grids.forEach(grid=>grid.innerHTML=`<article class="news-card"><div class="news-content"><h3>${lang==='fr'?'Flux temporairement indisponible':'Feed temporarily unavailable'}</h3><a class="text-link" href="https://www.lebrief.energy/" target="_blank" rel="noopener noreferrer">LE BRIEF ↗</a></div></article>`));
}
let latestPrices=null;
let selectedPriceSeries='DCOILBRENTEU';
let selectedPricePeriod=30;
const formatPrice=value=>Number(value).toLocaleString(lang==='fr'?'fr-FR':'en-US',{minimumFractionDigits:2,maximumFractionDigits:3});
function updateLivePrices() {
  fetch('/api/prices').then(response=>{if(!response.ok)throw Error('Price source unavailable');return response.json()}).then(data=>{
    latestPrices=data;const byId=Object.fromEntries(data.series.map(item=>[item.seriesId,item]));
    document.querySelectorAll('[data-benchmark]').forEach(element=>{const quote=byId[element.dataset.benchmark];if(quote?.value!=null)element.textContent=`${formatPrice(quote.value)} ${quote.unit} · ${quote.date}`});
    const lastDate=data.series.filter(item=>item.value!=null).map(item=>item.date).sort().at(-1);const dateElement=document.getElementById('market-date');if(dateElement&&lastDate)dateElement.textContent=`${lang==='fr'?'DERNIÈRE PUBLICATION':'LATEST PUBLICATION'} · ${lastDate}`;
    document.querySelectorAll('tr[data-series]').forEach(row=>{const quote=byId[row.dataset.series];if(!quote)return;const price=row.querySelector('[data-price]'),change=row.querySelector('[data-change]'),date=row.querySelector('[data-price-status]');if(price)price.textContent=`${formatPrice(quote.value)}`;if(change){const direction=quote.change>0?'positive':quote.change<0?'negative':'flat';change.classList.remove('positive','negative','flat');change.classList.add(direction);change.textContent=quote.changePercent==null?'—':`${quote.changePercent>0?'+':''}${quote.changePercent.toFixed(2)}% ${quote.change>0?'▲':quote.change<0?'▼':'–'}`;}if(date)date.textContent=`${quote.date} · EIA/FRED`});
    drawSelectedPriceHistory();drawPriceHistory(data.history||[],'brent','home-price-chart',30);
  }).catch(()=>{document.querySelectorAll('[data-chart-status]').forEach(status=>status.textContent=lang==='fr'?'Source temporairement indisponible.':'Price source temporarily unavailable.')});
}
function drawSelectedPriceHistory() { if(!latestPrices)return;drawPriceHistory(latestPrices.history||[],selectedPriceSeries,'price-chart',selectedPricePeriod); }
function drawPriceHistory(history,seriesId,targetId,days) {
  const svg=document.getElementById(targetId);if(!svg||!history.length)return;const row=priceRows.find(item=>item.id===seriesId);if(!row)return;
  const visible=history.slice(-days),values=visible.map(point=>point[row.key]).filter(Number.isFinite);if(values.length<2)return;
  const min=Math.min(...values),max=Math.max(...values),range=max-min||1,height=targetId==='home-price-chart'?180:240,top=targetId==='home-price-chart'?20:24,bottom=targetId==='home-price-chart'?160:210;
  const points=visible.map((point,index)=>point[row.key]==null?null:`${(index/(visible.length-1)*900).toFixed(1)},${(bottom-(point[row.key]-min)/range*(bottom-top)).toFixed(1)}`).filter(Boolean).join(' ');
  svg.querySelector('[data-chart-status]')?.remove();svg.querySelectorAll('polyline').forEach(line=>line.remove());const color=seriesId==='DCOILWTICO'?'#39a4c8':seriesId==='DDFUELNYH'?'#d88b35':seriesId==='DHHNGSP'?'#4ba77b':'#287fbe';svg.insertAdjacentHTML('beforeend',`<polyline points="${points}" fill="none" stroke="${color}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>`);
  const start=document.getElementById('chart-start-date'),end=document.getElementById('chart-end-date');if(targetId==='price-chart'){if(start)start.textContent=visible[0].date;if(end)end.textContent=visible.at(-1).date;const title=document.getElementById('chart-title');if(title)title.textContent=`${row.name} · ${lang==='fr'?'tendance quotidienne':'daily trend'}`;svg.setAttribute('aria-label',`${row.name} price trend from ${visible[0].date} to ${visible.at(-1).date}`)}
}

function wireConnectedFilters() {
  const search=document.getElementById('directory-search'),locationFilter=document.getElementById('location-filter'),productFilter=document.getElementById('product-filter');
  const applyDirectory=()=>document.querySelectorAll('.directory-entry[data-search]').forEach(card=>card.hidden=!(card.dataset.search.includes((search?.value||'').toLowerCase())&&(!locationFilter?.value||card.dataset.location===locationFilter.value)&&(!productFilter?.value||card.dataset.products.includes(productFilter.value.toLowerCase()))));
  search?.addEventListener('input',applyDirectory);locationFilter?.addEventListener('change',applyDirectory);productFilter?.addEventListener('change',applyDirectory);document.getElementById('clear-filters')?.addEventListener('click',()=>{if(search)search.value='';if(locationFilter)locationFilter.value='';if(productFilter)productFilter.value='';applyDirectory()});
  const priceSearch=document.getElementById('price-search');priceSearch?.addEventListener('input',()=>document.querySelectorAll('#price-table tbody tr').forEach(row=>row.hidden=!row.dataset.search.includes(priceSearch.value.toLowerCase())));
  document.querySelectorAll('[data-chart-series]').forEach(button=>button.addEventListener('click',event=>{event.stopPropagation();selectedPriceSeries=button.dataset.chartSeries;document.querySelectorAll('[data-chart-series]').forEach(item=>item.classList.toggle('active',item===button));drawSelectedPriceHistory()}));
  document.querySelectorAll('.chart-period button').forEach(button=>button.addEventListener('click',event=>{event.stopPropagation();selectedPricePeriod=Number(button.dataset.period||30);document.querySelectorAll('.chart-period button').forEach(item=>item.classList.toggle('active',item===button));drawSelectedPriceHistory()}));
  document.getElementById('csv-button')?.addEventListener('click',()=>{const rows=[['Code','Instrument','Basis','Price','Change','Unit','Source'],...priceRows.map(row=>{const quote=latestPrices?.series.find(item=>item.seriesId===row.id);return[row.code,row.name,row.basis,quote?.value??'Not quoted',quote?.change??'Not quoted',row.unit,quote?'EIA via FRED':'No connected quotation']})];const csv=rows.map(row=>row.map(value=>'"'+String(value).replaceAll('"','""')+'"').join(',')).join('\r\n');const link=document.createElement('a');link.href=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));link.download='oilmarket-price-board.csv';link.click();URL.revokeObjectURL(link.href)});
  document.getElementById('inquiry-form')?.addEventListener('submit',submitInquiry);
}

async function submitInquiry(event) {
  event.preventDefault();const form=event.currentTarget;if(!form.reportValidity())return;const data=Object.fromEntries(new FormData(form));const payload={name:data.name,email:data.email,company:data.company,role:data.role,product:data.product,specification:data.specification,volume:data.volume,destination:data.destination,incoterm:data.incoterm,delivery:data.delivery,payment:data.payment,message:data.message,website:data.website,consent:data.consent==='yes',locale:lang};const button=form.querySelector('[type=submit]');button.disabled=true;
  try{const response=await fetch('/api/inquiries',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(payload)});const result=await response.json();if(!response.ok)throw Error(result.error);toast(t('requestSaved'));form.reset()}catch{toast(lang==='fr'?'Envoi impossible. Réessayez dans un instant.':'Unable to send. Please try again shortly.')}finally{button.disabled=false}
}
render = function () {
  const route=location.hash.replace(/^#\/?/,'').split('/')[0]||'home';headerActive(route);
  const page=route==='home'?home():route==='prices'?pricesPage():['refineries','traders','storage','shipping'].includes(route)?directoryPage(route):route==='inquiry'?inquiryPage():route==='news'?newsPage():route==='insights'?insightsPage():route==='products'?productsPage():route==='listings'?listingsPage():route==='about'?aboutPage():['privacy','terms'].includes(route)?legalPage(route):home();
  app.innerHTML=page;document.querySelectorAll('[data-i18n]').forEach(element=>element.textContent=t(element.dataset.i18n));document.querySelectorAll('.lang-toggle').forEach(button=>button.textContent=lang==='en'?'FR':'EN');document.getElementById('year').textContent=new Date().getFullYear();wireConnectedFilters();if(route==='home'||route==='news')renderConnectedNews();if(route==='home'||route==='prices')updateLivePrices();
};
render();
