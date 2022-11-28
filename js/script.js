const btnMobile = document.getElementById('btnMobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  btnMobile.classList.toggle('is-active');
}

function closeMenu() {
  const nav = document.getElementById('nav');
  nav.classList.remove('active');
  btnMobile.classList.remove('is-active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

const handleScroll = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  })
}

// TYPEWRITER EFFECT

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 110
});

typewriter.typeString("<strong>Hello, <strong>")
  .pauseFor(1500)
  .typeString("<strong>I'm Mateus<strong>")
  .pauseFor(5000)
  .start();

// SCROLLREVEAL EFFECT

window.sr = ScrollReveal({
  reset: false,
})

ScrollReveal({
  origin: 'top',
  delay: 200,
  distance: '80px',
  easing: 'ease',
}).reveal(`.header-bg`);

ScrollReveal({
  origin: 'top',
  delay: 1800,
  distance: '80px',
  easing: 'ease',
}).reveal(`.introducao-botoes`);

ScrollReveal({
  origin: 'top',
  delay: 2000,
  distance: '80px',
  easing: 'ease',
}).reveal(`#projetos`);

ScrollReveal({
  origin: 'bottom',
  delay: 2200,
  distance: '80px',
  easing: 'ease',
}).reveal(`#footer`);