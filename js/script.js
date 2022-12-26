const btnMobile = document.getElementById('btnMobile');
const divSite = document.getElementById('site');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  divSite.classList.toggle('active');
  btnMobile.classList.toggle('is-active');
}

function closeMenu() {
  const nav = document.getElementById('nav');
  nav.classList.remove('active');
  divSite.classList.remove('active');
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
  delay: 100
});

typewriter.typeString("<strong>Hello, <strong>")
  .pauseFor(1000)
  .typeString("<strong>I'm Mateus<strong>")
  .pauseFor(5000)
  .start();

// AOS ANIMATION

AOS.init(
  {
    duration: 1200,
    once: true,
  }
);