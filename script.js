/* Layout logic only. Update research, teaching and biography in profile.js. */
(() => {
  'use strict';
  const p = window.SONAM_PROFILE;
  if (!p) return;
  const $ = id => document.getElementById(id);
  const node = (tag, className, text) => { const el = document.createElement(tag); if (className) el.className = className; if (text != null) el.textContent = String(text); return el; };
  const add = (parent, child) => { parent.appendChild(child); return child; };
  const put = (id,text) => { if ($(id) && text) $(id).textContent = text; };
  put('position', p.position); put('institution',p.institution);put('location',p.location);put('introduction',p.introduction);put('teaching-philosophy',p.teachingPhilosophy);
  const portrait = $('portrait-img');
  portrait.addEventListener('load', () => { $('portrait-fallback').hidden = true; portrait.style.display='block'; });
  portrait.addEventListener('error', () => { $('portrait-fallback').hidden = false; portrait.style.display='none'; });
  portrait.src = p.photo || 'assets/portrait.jpg';
  (p.bio || []).forEach(par => add($('bio'),node('p','',par)));
  (p.interests||[]).forEach(x => add($('interests'),node('span','interest',x)));
  function makePub(item,i,kind) {
    const article=node('article',`pub-item pub-${kind}`);
    add(article,node('span','pub-index',String(i+1).padStart(2,'0')));
    const body=add(article,node('div','pub-body'));
    add(body,node('h4','pub-title',item.title));
    add(body,node('p','pub-authors',item.authors+' ('+item.year+').'));
    const journal=add(body,node('p','pub-journal'));
    add(journal,node('em','',item.journal));
    if(item.detail) add(journal,node('span','',', '+item.detail));
    if(item.status && kind!=='report') add(body,node('span','status',item.status));
    if(item.doi && /^https:\/\//.test(item.doi)) { const link=add(body,node('a','doi-link','Read paper ↗'));link.href=item.doi;link.target='_blank';link.rel='noopener noreferrer'; }
    return article;
  }
  [['published-list',p.published,'published'],['revision-list',p.revision,'revision'],['review-list',p.review,'review'],['reports-list',p.reports,'report']].forEach(([id,items,kind])=> (items||[]).forEach((item,i)=>add($(id),makePub(item,i,kind))));
  (p.teaching||[]).forEach((item,i)=>{
    const card=add($('teaching-list'),node('article','teaching-item'));
    const side=add(card,node('div','teaching-side'));add(side,node('span','small-num',String(i+1).padStart(2,'0')));add(side,node('span','teaching-period',item.period));
    const content=add(card,node('div','teaching-content'));add(content,node('h3','',item.institution));add(content,node('p','teaching-role',item.role));
    const course=add(content,node('p','courses',(item.courses||[]).join('  ·  ')));
    if(item.note) add(content,node('p','teaching-note',item.note));
  });
  function timeline(id,items){ (items||[]).forEach(item=>{const card=add($(id),node('div','timeline-item'));add(card,node('p','timeline-period',item.period));add(card,node('h4','',item.title));add(card,node('p','timeline-place',item.where));}); }
  timeline('experience-list',p.experience);timeline('education-list',p.education);
  (p.awards||[]).forEach(a=>add($('awards-list'),node('p','',a)));
  if (p.contact && p.contact.email) { $('email-link').href='mailto:'+encodeURIComponent(p.contact.email).replace('%40','@'); }
  if(p.contact && /^https:\/\//.test(p.contact.linkedin||'')) $('linkedin-link').href=p.contact.linkedin;
  $('year').textContent=String(new Date().getFullYear());
  const toggle=$('nav-toggle'),nav=$('nav-links');
  toggle.addEventListener('click',()=>{ const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open); });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
})();
