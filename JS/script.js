const btnMobile = document.getElementById('btnMobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

function closeMenu() {
  const nav = document.getElementById('nav');
  nav.classList.remove('active');
  document.getElementById('btnMobile').checked = false;
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


// SCROLL REVEAL  
window.sr = ScrollReveal({
  reset: true
})

ScrollReveal({
  origin : 'left',
  delay    : 200,
  distance : '120px',
  easing   : 'ease-in-out',
  reset    : false,
}).reveal(`.header a, .menuNav`);

ScrollReveal({
  origin : 'left',
  delay    : 200,
  distance : '120px',
  easing   : 'ease-in-out',
}).reveal(`.introTitle, .introText, .introList, .introBtn, .introPic`);

ScrollReveal({
  origin : 'left',
  delay    : 200,
  distance : '120px',
  easing   : 'ease-in-out',
}).reveal(`.aboutMe h2, .aboutMe p`);

ScrollReveal({
  origin : 'left',
  delay    : 200,
  distance : '120px',
  easing   : 'ease-in-out',
}).reveal(`.skills h2, .skills h3`);

ScrollReveal({
  origin : 'left',
  delay    : 600,
  distance : '120px',
  easing   : 'ease-in-out',
}).reveal(`.skillsList`);

ScrollReveal({
  origin : 'left',
  delay    : 200,
  distance : '120px',
  easing   : 'ease-in-out',
  reset   : true,
}).reveal(`.portfolio h2, .project1, .project2, .project3, .project4`);

ScrollReveal({
  origin : 'left',
  delay    : 200,
  distance : '120px',
  easing   : 'ease-in-out',
}).reveal(`.footer h2, .footerItems`);