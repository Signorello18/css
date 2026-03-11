const toggle = document.querySelector('[data-nav-toggle]');
const mobile = document.querySelector('[data-nav-mobile]');

if (toggle && mobile){
  toggle.addEventListener('click', ()=>{
    const open = mobile.getAttribute('data-open') === 'true';
    mobile.setAttribute('data-open', String(!open));
    toggle.setAttribute('aria-expanded', String(!open));
  });
}

const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('is-visible');
  });
},{threshold:.12});

document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

document.querySelectorAll('[data-tilt]').forEach(card=>{
  card.addEventListener('mousemove', (e)=>{
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left)/r.width - .5;
    const y = (e.clientY - r.top)/r.height - .5;
    card.style.transform = `translateY(-3px) rotateX(${(-y*6).toFixed(2)}deg) rotateY(${(x*8).toFixed(2)}deg)`;
  });
  card.addEventListener('mouseleave', ()=>{
    card.style.transform = '';
  });
});