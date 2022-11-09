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
  .typeString("<strong>I am Mateus<strong>")
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
  easing: 'ease-in-out',
}).reveal(`.header-bg`);

ScrollReveal({
  origin: 'top',
  delay: 800,
  distance: '80px',
  easing: 'ease-in-out',
}).reveal(`#introducao`);

ScrollReveal({
  origin: 'top',
  delay: 1000,
  distance: '80px',
  easing: 'ease-in-out',
}).reveal(`#projetos`);

ScrollReveal({
  origin: 'bottom',
  delay: 1200,
  distance: '80px',
  easing: 'ease-in-out',
}).reveal(`#footer`);