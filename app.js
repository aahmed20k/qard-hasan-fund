// scroll reveal
const io = new IntersectionObserver((es)=>{
  es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach((el,i)=>{
  el.style.transitionDelay=(i%3*70)+'ms'; io.observe(el);
});

// mobile nav
const burger=document.getElementById('burger');
if(burger){burger.addEventListener('click',()=>document.getElementById('navlinks').classList.toggle('open'));}

// donor amount chips
document.querySelectorAll('.amt').forEach(a=>{
  a.addEventListener('click',()=>{
    a.parentElement.querySelectorAll('.amt').forEach(x=>x.classList.remove('sel'));
    a.classList.add('sel');
    const custom=document.getElementById('customAmt'); if(custom) custom.value=a.dataset.v;
  });
});

// designation toggle
document.querySelectorAll('.toggle button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    btn.parentElement.querySelectorAll('button').forEach(x=>x.classList.remove('on'));
    btn.classList.add('on');
    const note=document.getElementById('desigNote');
    if(note){
      note.textContent = btn.dataset.k==='zakat'
        ? 'Zakat is held separately and given only as outright grants or to forgive eligible borrowers — never lent. Validity confirmed by our Shariah board.'
        : 'General gifts fund the revolving interest-free loan pool and grow the permanent endowment. Tax-deductible under our 501(c)(3).';
    }
  });
});

// fake submit handlers
function fakeSubmit(formId,alertId){
  const f=document.getElementById(formId); if(!f) return;
  f.addEventListener('submit',e=>{
    e.preventDefault();
    const a=document.getElementById(alertId);
    a.classList.add('show');
    a.scrollIntoView({behavior:'smooth',block:'center'});
  });
}
fakeSubmit('donateForm','donateAlert');
fakeSubmit('applyForm','applyAlert');
