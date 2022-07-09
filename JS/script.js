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
  origin : 'top',
  delay    : 200,
  distance : '120px',
  easing   : 'ease-in-out',
  reset    : true,
}).reveal(`.introTitle, .introText, .introList, .introBtn, .introPic`);

ScrollReveal({
  origin : 'left',
  delay    : 200,
  distance : '120px',
  easing   : 'ease-in-out',
  reset    : true,
}).reveal(`.aboutMe h2, .aboutMe p`);

ScrollReveal({
  origin : 'right',
  delay    : 200,
  distance : '120px',
  easing   : 'ease-in-out',
  reset    : true,
}).reveal(`.skills h2, .skills h3`);

ScrollReveal({
  origin : 'right',
  delay    : 600,
  distance : '120px',
  easing   : 'ease-in-out',
  reset    : true,
}).reveal(`.skillsList`);

ScrollReveal({
  origin : 'left',
  delay    : 200,
  distance : '120px',
  easing   : 'ease-in-out',
  reset   : true,
}).reveal(`.portfolio h2, .project1`);

ScrollReveal({
  origin : 'right',
  delay    : 200,
  distance : '120px',
  easing   : 'ease-in-out',
  reset   : true,
}).reveal(`.portfolio h2, .project2`);

ScrollReveal({
  origin : 'left',
  delay    : 200,
  distance : '120px',
  easing   : 'ease-in-out',
  reset   : true,
}).reveal(`.portfolio h2, .project3`);

ScrollReveal({
  origin : 'right',
  delay    : 200,
  distance : '120px',
  easing   : 'ease-in-out',
  reset   : true,
}).reveal(`.portfolio h2, .project4`);

ScrollReveal({
  origin : 'bottom',
  delay    : 200,
  distance : '120px',
  easing   : 'ease-in-out',
  reset    : true,
}).reveal(`.otherProjects`);

ScrollReveal({
  origin : 'bottom',
  delay    : 100,
  distance : '120px',
  easing   : 'ease-in-out',
  reset    : true,
}).reveal(`.footer h2, .footerItems`);