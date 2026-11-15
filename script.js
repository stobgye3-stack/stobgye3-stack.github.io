(()=>{'use strict';const d=window.SONAM_PROFILE;if(!d)return;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const find=id=>document.getElementById(id);
const set=(id,content)=>{const e=find(id);if(e)e.innerHTML=content};
set('interests',d.interests.map(t=>`<span class="topic">${esc(t)}</span>`).join(''));
set('teaching-grid',d.teaching.map(x=>`<article class="teaching-card"><div class="card-top"><span>${esc(x.period)}</span><span class="mini-arrow">↗</span></div><h3>${esc(x.institution)}</h3><p class="card-role">${esc(x.role)}</p><ul>${x.courses.map(c=>`<li>${esc(c)}</li>`).join('')}</ul>${x.note?`<p class="card-foot">${esc(x.note)}</p>`:''}</article>`).join(''));
function publication(x){let doi=x.doi&&/^https:\/\/doi\.org\//.test(x.doi)?` <a href="${esc(x.doi)}" target="_blank" rel="noopener noreferrer">DOI ↗</a>`:'';return `<article class="pub-entry"><div class="pub-entry-main"><h4>${esc(x.title)}</h4><p class="pub-authors">${esc(x.authors)} (${esc(x.year)})</p><p class="pub-journal"><em>${esc(x.journal)}</em>${x.detail?`, ${esc(x.detail)}`:''}.${doi}</p></div>${x.status?`<span class="status-label">${esc(x.status)}</span>`:''}</article>`}
['published','revision','review','reports'].forEach(k=>set(k+'-list',d[k].map(publication).join('')));
const timeline=xs=>xs.map(x=>`<div class="time-entry"><div class="time-date">${esc(x.period)}</div><div><h4>${esc(x.title)}</h4><p>${esc(x.where)}</p></div></div>`).join('');
set('experience-list',timeline(d.experience));set('education-list',timeline(d.education));set('awards-list',d.awards.map(t=>`<p>${esc(t)}</p>`).join(''));
const email=find('email-link');if(email)email.href='mailto:'+encodeURIComponent(d.contact.email);
const linkedin=find('linkedin-link');if(linkedin)linkedin.href=d.contact.linkedin;
const y=find('year');if(y)y.textContent=new Date().getFullYear();
const toggle=find('menu-toggle'),nav=find('site-nav');toggle?.addEventListener('click',()=>{const active=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!active));nav?.classList.toggle('open',!active)});nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));
})();
