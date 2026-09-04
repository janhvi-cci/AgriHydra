/* =========================================================================
   GOOGLE FORM URLS — paste your Google Form links below.
   These three URLs power every registration / enquiry button on the site.
   ========================================================================= */
const GOOGLE_FORMS = {
  farmer:  "https://forms.gle/RFDNdFHRuziS9F1PA",
  project: "https://forms.gle/3d5FNsaBwKqJKzbTA",
  partner: "https://forms.gle/PvDu8Eii9a4eVVqC7"
};

/* ---------- Government Schemes data ---------- */
const schemesData = {
  pmksy: {
    badge: 'Central Scheme',
    title: 'PMKSY – Per Drop More Crop (PDMC)',
    desc: 'The micro-irrigation component of Pradhan Mantri Krishi Sinchayee Yojana, run by the Department of Agriculture & Farmers Welfare. It promotes drip and sprinkler irrigation to raise water-use efficiency and cut input costs at the farm level, converging with State Irrigation Plans under the "Har Khet Ko Pani" vision.',
    meta: ['Launched 2015-16','Ministry of Agriculture & FW','Drip & Sprinkler Irrigation'],
    benefits: [
      'Subsidy of up to 55% of system cost for small & marginal farmers, and up to 45% for other farmers (norms vary by state).',
      'Cuts water consumption by up to 40–50% compared to flood irrigation.',
      'Improves fertiliser-use efficiency when combined with fertigation.',
      'Priority convergence with MIDH for polyhouse and horticulture projects.',
      'Coverage extends to individual farmers, FPOs, cooperatives and registered institutions.'
    ],
    link: 'https://pmksy.gov.in/microirrigation/'
  },
  midh: {
    badge: 'Central Scheme',
    title: 'MIDH – Protected Cultivation (Polyhouse)',
    desc: 'Mission for Integrated Development of Horticulture is a Centrally Sponsored Scheme for holistic growth of the horticulture sector — fruits, vegetables, spices, flowers and plantation crops. Its Protected Cultivation component funds greenhouses, shade-net houses, plastic mulching and precision farming infrastructure.',
    meta: ['Launched 2014','Ministry of Agriculture & FW','Polyhouse & Shade-net'],
    benefits: [
      'Assistance of up to 50% of project cost for polyhouse/greenhouse structures (general states), higher in North-East & Himalayan states.',
      'Also covers shade-net houses, plastic mulching and plant material subsidy.',
      'Central share up to 60% of outlay in most states, 100% in NE & Himalayan states, balance from State Government.',
      'Supports post-harvest management and cold-chain infrastructure alongside cultivation.',
      'Open to farmers, FPOs, SHGs, cooperatives and agri-entrepreneurs setting up commercial units.'
    ],
    link: 'https://midh.gov.in'
  },
  state: {
    badge: 'State Scheme',
    title: 'State Horticulture Mission Schemes',
    desc: 'Most state governments run their own horticulture/agriculture department schemes that top up central assistance from PMKSY and MIDH — sometimes covering the farmer\'s remaining share almost entirely. Norms, subsidy ceilings and crop focus vary from state to state.',
    meta: ['Varies by state', 'State Horticulture/Agri Dept.', 'Top-up on central schemes'],
    benefits: [
      'Additional state-share subsidy on top of central PMKSY/MIDH assistance — in several states, total support can exceed 70–75% of project cost.',
      'State-specific incentives for high-value crops, cold storage, pack-houses and farm ponds.',
      'Dedicated single-window portals in many states for online application and status tracking.',
      'Special enhanced norms for SC/ST farmers, women farmers and small & marginal land holders in most states.',
      'Local-language support and district-level facilitation through State Horticulture Mission offices.'
    ],
    link: 'https://www.india.gov.in/website-state-horticulture-departments'
  }
};
function openSchemeModal(key){
  const s = schemesData[key];
  if(!s) return;
  document.getElementById('scheme-modal-badge').textContent = s.badge;
  document.getElementById('scheme-modal-title').textContent = s.title;
  document.getElementById('scheme-modal-desc').textContent = s.desc;
  document.getElementById('scheme-modal-meta').innerHTML = s.meta.map(m=>'<span>'+m+'</span>').join('');
  document.getElementById('scheme-modal-benefits').innerHTML = s.benefits.map(b=>'<li><span class="tick">✓</span><span>'+b+'</span></li>').join('');
  document.getElementById('scheme-modal-link').href = s.link;
  document.getElementById('scheme-modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeSchemeModal(){
  document.getElementById('scheme-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', (e)=>{
  if(e.key==='Escape') closeSchemeModal();
});

/* ---------- Page routing ---------- */
function goPage(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l=>l.classList.toggle('active', l.dataset.page===name || (name==='polyhouse' && l.dataset.page==='services')));
  closeMobileMenu();
  const ddTrigger = document.getElementById('services-dd-trigger');
  if(ddTrigger) ddTrigger.classList.remove('dd-open');
  window.scrollTo({top:0,behavior:'instant'});
  document.getElementById('nav-book-btn').style.display = name==='home' ? '' : 'inline-flex';
  location.hash = name;
  requestAnimationFrame(revealCheck);
  if(name==='roi') calcROI();
}
window.addEventListener('hashchange', ()=>{
  const p = location.hash.replace('#','') || 'home';
  if(document.getElementById('page-'+p)) goPage(p);
});
const initial = location.hash.replace('#','') || 'home';
if(document.getElementById('page-'+initial)) goPage(initial); else goPage('home');


function toggleMobileMenu(){
  const menu = document.getElementById('mobile-menu');
  if(menu.classList.contains('open')) closeMobileMenu();
  else {
    menu.classList.add('open');
    document.body.classList.add('menu-open');
    document.querySelector('.hamburger').setAttribute('aria-expanded','true');
  }
}
function closeMobileMenu(){
  const menu = document.getElementById('mobile-menu');
  if(!menu) return;
  menu.classList.remove('open');
  document.body.classList.remove('menu-open');
  const hamburger = document.querySelector('.hamburger');
  if(hamburger) hamburger.setAttribute('aria-expanded','false');
}

/* ---------- Services dropdown (click + touch support) ---------- */
function toggleServicesDropdown(e){
  const trigger = document.getElementById('services-dd-trigger');
  const isOpen = trigger.classList.contains('dd-open');
  if(isOpen){
    trigger.classList.remove('dd-open');
  } else {
    trigger.classList.add('dd-open');
  }
  e.stopPropagation();
}
document.addEventListener('click', (e)=>{
  const trigger = document.getElementById('services-dd-trigger');
  if(!trigger) return;
  if(trigger.contains(e.target)) return;
  trigger.classList.remove('dd-open');
});

/* ---------- Theme ---------- */
function toggleTheme(){
  const html = document.documentElement;
  const dark = html.getAttribute('data-theme')==='dark';
  html.setAttribute('data-theme', dark?'light':'dark');
  document.getElementById('theme-icon').textContent = dark ? '🌙' : '☀️';
}

/* ---------- Google Form redirects (replaces the old built-in registration forms) ----------
   "Register Interest" / service cards / polyhouse & drip CTAs -> Polyhouse & Irrigation Project Google Form. */
function openServiceModal(serviceName){
  window.open(GOOGLE_FORMS.project, '_blank', 'noopener');
}

/* "Book Consultation" CTAs -> Farmer Registration Google Form. */
function openConsultationModal(){
  window.open(GOOGLE_FORMS.farmer, '_blank', 'noopener');
}

/* "Partner With Us" CTA -> Partner Registration Google Form. */
function openPartnerForm(){
  window.open(GOOGLE_FORMS.partner, '_blank', 'noopener');
}

/* ---------- FAQ ---------- */
function toggleFaq(el){
  const item = el.parentElement;
  const answer = item.querySelector('.faq-a');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i=>{i.classList.remove('open');i.querySelector('.faq-a').style.maxHeight=null;});
  if(!isOpen){item.classList.add('open');answer.style.maxHeight = answer.scrollHeight+'px';}
}

/* ---------- Scroll progress + back to top ---------- */
window.addEventListener('scroll', ()=>{
  const h = document.documentElement;
  const pct = (h.scrollTop)/(h.scrollHeight-h.clientHeight)*100;
  document.getElementById('progress-bar').style.width = pct+'%';
  document.getElementById('totop-fab').classList.toggle('show', h.scrollTop>500);
});

/* ---------- Reveal on scroll ---------- */
function revealCheck(){
  document.querySelectorAll('.reveal:not(.in)').forEach(el=>{
    const r = el.getBoundingClientRect();
    if(r.top < window.innerHeight-60) el.classList.add('in');
  });
}
window.addEventListener('scroll', revealCheck);
window.addEventListener('resize', revealCheck);

/* ---------- Counters ---------- */
let countersRun = false;
function runCounters(){
  if(countersRun) return;
  const band = document.querySelector('.stats-band');
  if(!band) return;
  const r = band.getBoundingClientRect();
  if(r.top > window.innerHeight) return;
  countersRun = true;
  document.querySelectorAll('.counter').forEach(el=>{
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix||'';
    let cur = 0;
    const step = Math.max(1, target/40);
    const t = setInterval(()=>{
      cur += step;
      if(cur>=target){cur=target;clearInterval(t);}
      el.textContent = Math.floor(cur)+suffix;
    },30);
  });
}
window.addEventListener('scroll', runCounters);

/* ---------- Land unit conversion (acres <-> gaj) ---------- */
function syncGajFromAcres(){
  const gajEl = document.getElementById('roi-land-gaj');
  if(!gajEl) return;
  const acres = parseFloat(document.getElementById('roi-land').value)||0;
  gajEl.value = Math.round(acres*4840);
}
function syncAcresFromGaj(){
  const acresEl = document.getElementById('roi-land');
  if(!acresEl) return;
  const gaj = parseFloat(document.getElementById('roi-land-gaj').value)||0;
  acresEl.value = (gaj/4840).toFixed(2);
}

/* ---------- ROI Calculator ---------- */
const ROI_CROP_DATA = {
  'tomato': [4.5, 4200000],
  'capsicum': [5, 4800000],
  'cucumber': [4.5, 4400000],
  'leafy greens': [3, 2800000],
  'brinjal': [4, 3200000],
  'cauliflower': [3.2, 2600000],
  'cabbage': [3, 2400000],
  'strawberry': [4.8, 5200000],
  'green chilli': [3.8, 3000000],
  'watermelon': [3.5, 2600000],
  'muskmelon': [3.5, 2700000],
  'okra': [3.6, 2600000]
};
const ROI_CROP_DEFAULT = [4, 3800000]; // illustrative fallback for any custom/unlisted crop typed in

function calcROI(){
  const land = parseFloat(document.getElementById('roi-land').value)||0;

  if(land<=0){
    document.getElementById('out-yield').textContent = '+0%';
    document.getElementById('out-water').textContent = '0.0 L (lakh)';
    document.getElementById('out-invest').textContent = '₹0';
    document.getElementById('out-subsidy').textContent = '₹0';
    document.getElementById('out-net').textContent = '₹0';
    document.getElementById('out-payback').textContent = '0.0 yrs';
    return;
  }

  const cropName = (document.getElementById('roi-crop').value||'').trim().toLowerCase();
  const [mult, incomePerAcre] = ROI_CROP_DATA[cropName] || ROI_CROP_DEFAULT;
  const methodFactor = parseFloat(document.getElementById('roi-method').value);
  const investPerAcre = 1800000;
  const subsidyRate = 0.6;

  const totalInvest = land*investPerAcre;
  const subsidy = totalInvest*subsidyRate;
  const net = totalInvest-subsidy;
  const yieldIncreasePct = Math.round((mult*methodFactor-1)*100);
  const waterSaved = Math.round(land*2800000*0.4); // litres/year illustrative
  const annualIncomeGain = land*incomePerAcre*0.35; // illustrative net gain
  const payback = annualIncomeGain>0 ? (net/annualIncomeGain).toFixed(1) : '0.0';

  document.getElementById('out-yield').textContent = '+'+yieldIncreasePct+'%';
  document.getElementById('out-water').textContent = (waterSaved/100000).toFixed(1)+' L (lakh)';
  document.getElementById('out-invest').textContent = '₹'+totalInvest.toLocaleString('en-IN');
  document.getElementById('out-subsidy').textContent = '₹'+subsidy.toLocaleString('en-IN');
  document.getElementById('out-net').textContent = '₹'+net.toLocaleString('en-IN');
  document.getElementById('out-payback').textContent = payback+' yrs';
}
document.addEventListener('DOMContentLoaded', ()=>{revealCheck();calcROI();syncGajFromAcres();});

/* ---------- Language toggle (EN / HI) ---------- */
function googleTranslateElementInit(){
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'en,hi',
    autoDisplay: false
  }, 'google_translate_element');

  // once the widget's hidden <select> exists, re-apply any saved language
  const saved = localStorage.getItem('site_lang');
  if (saved === 'hi') setGoogleTranslateLanguage('hi');
}

function setGoogleTranslateLanguage(lang){
  let tries = 0;
  const timer = setInterval(()=>{
    const combo = document.querySelector('#google_translate_element select.goog-te-combo');
    tries++;
    if (combo){
      if (combo.value !== lang){
        combo.value = lang;
        combo.dispatchEvent(new Event('change'));
      }
      clearInterval(timer);
    } else if (tries > 60){ // ~15s timeout
      clearInterval(timer);
    }
  }, 250);
}

function updateLangButtonUI(lang){
  const current = lang === 'hi' ? 'हिं' : 'EN';
  const desktop = document.getElementById('lang-current');
  const mobile = document.getElementById('lang-current-mobile');
  if (desktop) desktop.textContent = current;
  if (mobile) mobile.textContent = current;
}

function toggleLanguage(){
  const currentLang = localStorage.getItem('site_lang') || 'en';
  const nextLang = currentLang === 'en' ? 'hi' : 'en';
  localStorage.setItem('site_lang', nextLang);
  updateLangButtonUI(nextLang);

  if (nextLang === 'en'){
    // Google Translate's own reset requires clearing its cookie, easiest is to
    // switch the combo back to the original language value.
    setGoogleTranslateLanguage('en');
  } else {
    setGoogleTranslateLanguage('hi');
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  const saved = localStorage.getItem('site_lang') || 'en';
  updateLangButtonUI(saved);
});
