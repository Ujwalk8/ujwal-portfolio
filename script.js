const btn=document.querySelector('.menu'),list=document.getElementById('nav-list');
btn.addEventListener('click',()=>{const o=list.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
list.addEventListener('click',e=>{if(e.target.tagName==='A'){list.classList.remove('open');btn.setAttribute('aria-expanded','false')}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){list.classList.remove('open');btn.setAttribute('aria-expanded','false')}});
document.getElementById('yr').textContent=new Date().getFullYear();
const els=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});els.forEach(e=>io.observe(e))}
else els.forEach(e=>e.classList.add('in'));
