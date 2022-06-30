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

