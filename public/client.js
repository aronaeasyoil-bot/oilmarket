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
copy.en.priceTitle = 'Today’s spot benchmarks'; copy.fr.priceTitle = 'Références spot du jour';
copy.en.priceIntro = 'Daily Brent and WTI spot observations from the U.S. EIA through FRED. Values are delayed; other instruments are shown without invented quotes.';
copy.fr.priceIntro = 'Observations quotidiennes Brent et WTI de l’EIA américaine via FRED. Les données sont différées ; aucune valeur n’est inventée pour les autres instruments.';
copy.en.methodologyText = 'Brent and WTI are daily spot observations published by the U.S. Energy Information Administration and distributed by FRED. They are delayed and are not real-time or physical cargo quotations. Other grades require a separately licensed source.';
copy.fr.methodologyText = 'Brent et WTI sont des observations quotidiennes de l’EIA américaine distribuées par FRED. Elles sont différées et ne constituent ni des cotations en temps réel ni des offres de cargaisons physiques. Les autres qualités nécessitent une source sous licence.';
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
  { code:'DCOILBRENTEU', name:'Crude Oil (Brent)', basis:'EIA Europe Brent · FOB spot', id:'DCOILBRENTEU', unit:'USD/bbl' },
  { code:'DCOILWTICO', name:'Crude Oil (WTI)', basis:'EIA Cushing · daily spot', id:'DCOILWTICO', unit:'USD/bbl' },
  { code:'DME DUBAI', name:'Crude Oil (Dubai/Oman)', basis:'DME Dubai · no connected feed', unit:'USD/bbl' },
  { code:'BONNY LIGHT', name:'Crude Oil (Bonny Light)', basis:'Nigeria · no public feed', unit:'USD/bbl' },
  { code:'EN590 · NWE', name:'Diesel EN590', basis:'Northwest Europe · licensed quote required', unit:'USD/MT' },
  { code:'JET A-1', name:'Jet Fuel (Jet A-1)', basis:'Regional · licensed quote required', unit:'USD/MT' },
  { code:'HENRY HUB', name:'Natural Gas (Henry Hub)', basis:'NYMEX · separate series required', unit:'USD/MMBtu' },
];
const directoryMeta = {
  refineries: { eyebrow:'01 / REFINERIES', title:'Global Refineries', titleFr:'Raffineries mondiales', description:'Refining operators, locations and public company information.', descriptionFr:'Opérateurs de raffinage, implantations et informations publiques.' },
  traders: { eyebrow:'02 / TRADERS', title:'Oil Traders', titleFr:'Négociants pétroliers', description:'Energy and commodity trading companies with public operator sources.', descriptionFr:'Sociétés de négoce énergie et matières premières avec sources publiques.' },
  storage: { eyebrow:'03 / STORAGE', title:'Storage Terminals', titleFr:'Terminaux de stockage', description:'Terminal operators and public storage infrastructure information.', descriptionFr:'Opérateurs de terminaux et informations publiques sur les infrastructures.' },
  shipping: { eyebrow:'04 / SHIPPING', title:'Shipping & Logistics', titleFr:'Transport maritime et logistique', description:'Tanker operators and published fleet information.', descriptionFr:'Opérateurs de navires-citernes et informations publiques sur leurs flottes.' },
};

home = function () {
  const directoryCards = Object.entries(directoryMeta).map(([type, meta]) => `<a class="directory-card reference-directory-card" href="#/${type}"><span class="directory-index">${meta.eyebrow}</span><h3>${lang==='fr'?meta.titleFr:meta.title}</h3><p>${lang==='fr'?meta.descriptionFr:meta.description}</p><div class="directory-card-foot"><span>${dirs[type].length} ${lang==='fr'?'sources publiques':'public sources'}</span><b>${lang==='fr'?'Explorer':'Explore'} →</b></div></a>`).join('');
  const newsPlaceholder = `<article class="news-card"><div class="news-content"><div class="eyebrow">LE BRIEF</div><h3>${lang==='fr'?'Chargement des actualités…':'Loading latest headlines…'}</h3></div></article>`;
  const snapshot = [
    ['EIA BRENT','Crude Oil (Brent)','DCOILBRENTEU','USD/bbl'],
    ['EIA WTI','Crude Oil (WTI)','DCOILWTICO','USD/bbl'],
    ['DME DUBAI','Crude Oil (Dubai/Oman)',null,'USD/bbl'],
    ['BONNY LIGHT','Crude Oil (Bonny Light)',null,'USD/bbl'],
    ['EN590 · NWE','Diesel EN590',null,'USD/MT'],
  ].map(([code,name,id,unit])=>`<div class="snapshot-row"><div><span class="snapshot-code">${code}</span><b>${name}</b></div><strong ${id?`data-benchmark="${id}"`:''} class="${id?'':'snapshot-unavailable'}">${id?'—':(lang==='fr'?'NON COTÉ':'NOT QUOTED')}</strong><span class="snapshot-unit">${unit}</span></div>`).join('');
  return `<section class="hero reference-hero"><div class="hero-copy"><div class="eyebrow">${t('heroEyebrow')}</div><h1>${t('hero1')}<br><em>${t('hero2')}</em><br>${t('hero3')}</h1><p>${t('heroText')}</p><p class="hero-secondary">${lang==='fr'?'Prix du pétrole, raffineries, négociants et terminaux — réunis sur une plateforme.':'Oil prices, refineries, traders and storage terminals — all in one portal.'}</p><div class="hero-buttons"><a class="button button-blue" href="#/prices">${t('explorePrices')} <span>→</span></a><a class="button button-outline" href="#/refineries">${t('findSuppliers')} <span>↗</span></a></div></div><aside class="market-snapshot"><div class="snapshot-heading"><div><span class="snapshot-kicker">${t('benchTitle')}</span><span class="snapshot-updated" id="market-date">${lang==='fr'?'Dernière publication':'Latest publication'} · —</span></div><a href="#/prices">${lang==='fr'?'TOUS LES PRIX':'ALL PRICES'} →</a></div>${snapshot}</aside></section><div class="market-strip reference-ticker"><div class="ticker-label">OILMARKET · ${lang==='fr'?'MARCHÉ':'MARKET'}</div><div class="ticker">${[['Brent Crude','DCOILBRENTEU'],['WTI Crude','DCOILWTICO'],['Dubai / Oman',null],['Bonny Light',null],['Diesel EN590',null]].map(([name,id])=>`<div class="ticker-item"><b>${name}</b><span ${id?`data-benchmark="${id}"`:''}>${id?'—':(lang==='fr'?'Source non connectée':'Source not connected')}</span></div>`).join('')}</div><a class="strip-link" href="#/prices">${lang==='fr'?'Voir le tableau':'Full price board'} →</a></div><section class="section reference-directories"><div class="section-head"><div><div class="eyebrow">${t('directoriesEyebrow')}</div><h2>${t('directoryTitle')}</h2><p>${t('directorySub')}</p></div></div><div class="cards reference-directory-grid">${directoryCards}</div></section><section class="section section-tight reference-news"><div class="section-head"><div><div class="eyebrow">${t('briefEyebrow')}</div><h2>${t('newsTitle')}</h2><p>${t('newsSub')}</p></div><a class="text-link" href="#/news">${t('viewNews')} →</a></div><div class="news-grid" data-news-feed>${newsPlaceholder}</div><p class="data-note" data-news-attribution>${t('emptyNews')}</p></section><section class="inquiry-band"><div><div class="eyebrow">OILMARKET · B2B</div><h2>${t('ctaTitle')}</h2><p>${t('ctaText')}</p></div><a href="#/inquiry" class="button button-blue">${t('submitInquiry')} <span>↗</span></a></section>`;
};

pricesPage = function () {
  const rows = priceRows.map(row => `<tr data-search="${safe(`${row.code} ${row.name} ${row.basis}`.toLowerCase())}" data-series="${row.id||''}"><td class="price-code">${row.code}</td><td class="product-name">${row.name}</td><td>${row.basis}</td><td class="price-value" data-price>—</td><td class="price-change" data-change>—</td><td>${row.unit}</td><td class="price-date" data-price-status>${row.id?'EIA via FRED':'—'}</td></tr>`).join('');
  return `<section class="price-board-intro"><div class="eyebrow">OILMARKET · ${lang==='fr'?'MARCHÉ':'MARKET'}</div><h1>${lang==='fr'?'Références spot du jour':'Today’s spot benchmarks'}</h1><p>${t('priceIntro')}</p><a href="#/prices" class="text-link">${lang==='fr'?'Tableau complet des prix':'Full price board'} →</a></section><section class="content-wrap price-board-content"><div class="price-board-heading"><span>${lang==='fr'?'TABLEAU DES PRIX':'PRICE BOARD'}</span><button id="csv-button">↓ ${t('csv')}</button></div><div class="directory-table-wrap"><table class="benchmark-table reference-price-table" id="price-table"><thead><tr><th>${lang==='fr'?'Code':'Code'}</th><th>${t('instrument')}</th><th>${t('market')}</th><th>${t('price')}</th><th>${t('change')}</th><th>${t('unit')}</th><th>${lang==='fr'?'Dernière mise à jour':'Last updated'}</th></tr></thead><tbody>${rows}</tbody></table></div><p class="data-note">${t('methodologyText')}</p><div class="chart-box" style="margin-top:28px"><div class="chart-head"><h3>${t('chartTitle')} — Brent</h3><div class="chart-period">${['7','30','90','365'].map(period=>`<button data-period="${period}">${t(`period${period}`)}</button>`).join('')}</div></div><svg class="chart-svg" id="price-chart" viewBox="0 0 900 180" preserveAspectRatio="none" aria-label="${t('chartUnavailable')}"><path d="M0 146H900M0 102H900M0 58H900M0 14H900" stroke="#e7eae8" fill="none"/><text x="50%" y="96" text-anchor="middle" fill="#919a99" font-size="13" data-chart-status>${t('chartUnavailable')}</text></svg><div class="data-note">${t('methodologyText')}</div></div></section>`;
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
const formatPrice=value=>Number(value).toLocaleString(lang==='fr'?'fr-FR':'en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
function updateLivePrices() {
  fetch('/api/prices').then(response=>{if(!response.ok)throw Error('Price source unavailable');return response.json()}).then(data=>{
    latestPrices=data;const byId=Object.fromEntries(data.series.map(item=>[item.seriesId,item]));
    document.querySelectorAll('[data-benchmark]').forEach(element=>{const quote=byId[element.dataset.benchmark];if(quote?.value!=null)element.textContent=`$${formatPrice(quote.value)} · ${quote.date}`});
    const lastDate=data.series.find(item=>item.value!=null)?.date;const dateElement=document.getElementById('market-date');if(dateElement&&lastDate)dateElement.textContent=`${lang==='fr'?'DERNIÈRE PUBLICATION':'LATEST PUBLICATION'} · ${lastDate}`;
    document.querySelectorAll('#price-table tbody tr').forEach(row=>{const quote=byId[row.dataset.series];if(!quote)return;row.querySelector('[data-price]').textContent=`$${formatPrice(quote.value)}`;row.querySelector('[data-change]').textContent=quote.change==null?'—':`${quote.change>0?'+':''}${formatPrice(quote.change)} ${quote.change>0?'▲':quote.change<0?'▼':'–'}`;row.querySelector('[data-price-status]').textContent=quote.date});
    drawBrentHistory(data.history||[]);
  }).catch(()=>{const status=document.querySelector('[data-chart-status]');if(status)status.textContent=lang==='fr'?'Source temporairement indisponible.':'Price source temporarily unavailable.'});
}
function drawBrentHistory(history) {
  const svg=document.getElementById('price-chart');if(!svg||history.length<2)return;const values=history.map(point=>point.brent).filter(Number.isFinite),min=Math.min(...values),range=Math.max(...values)-min||1;const points=history.map((point,index)=>point.brent==null?null:`${(index/(history.length-1)*900).toFixed(1)},${(160-(point.brent-min)/range*136).toFixed(1)}`).filter(Boolean).join(' ');svg.querySelector('[data-chart-status]')?.remove();svg.insertAdjacentHTML('beforeend',`<polyline points="${points}" fill="none" stroke="#48b9cf" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>`);
}
function wireConnectedFilters() {
  const search=document.getElementById('directory-search'),locationFilter=document.getElementById('location-filter'),productFilter=document.getElementById('product-filter');
  const apply=()=>document.querySelectorAll('.directory-entry[data-search]').forEach(card=>card.hidden=!(card.dataset.search.includes((search?.value||'').toLowerCase())&&(!locationFilter?.value||card.dataset.location===locationFilter.value)&&(!productFilter?.value||card.dataset.products.includes(productFilter.value.toLowerCase()))));
  search?.addEventListener('input',apply);locationFilter?.addEventListener('change',apply);productFilter?.addEventListener('change',apply);document.getElementById('clear-filters')?.addEventListener('click',()=>{search.value='';locationFilter.value='';productFilter.value='';apply()});
  const priceSearch=document.getElementById('price-search'),priceFilter=document.getElementById('price-filter');
  const applyPrice=()=>document.querySelectorAll('#price-table tbody tr').forEach(row=>row.hidden=!(row.dataset.search.includes((priceSearch?.value||'').toLowerCase())&&(!priceFilter?.value||row.dataset.category===priceFilter.value)));
  priceSearch?.addEventListener('input',applyPrice);priceFilter?.addEventListener('change',applyPrice);
  document.querySelectorAll('.chart-period button').forEach(button=>button.addEventListener('click',event=>{event.stopPropagation();document.querySelectorAll('.chart-period button').forEach(item=>item.classList.remove('active'));button.classList.add('active');drawBrentHistory((latestPrices?.history||[]).slice(-Number(button.dataset.period||365)))}));
  const csvButton=document.getElementById('csv-button');csvButton?.addEventListener('click',()=>{const rows=[['Code','Instrument','Basis','Price','Change','Unit','Source'],...priceRows.map(row=>{const quote=latestPrices?.series.find(item=>item.seriesId===row.id);return[row.code,row.name,row.basis,quote?.value??'Not available',quote?.change??'Not available',row.unit,quote?'EIA via FRED':'No connected quotation']})];const csv=rows.map(row=>row.map(value=>'"'+String(value).replaceAll('"','""')+'"').join(',')).join('\r\n');const link=document.createElement('a');link.href=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));link.download='oilmarket-price-board.csv';link.click();URL.revokeObjectURL(link.href)});
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
