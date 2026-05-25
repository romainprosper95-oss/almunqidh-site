const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const mobileNav = document.getElementById('mobileNav');
const backTop = document.getElementById('backTop');

function openMenu() {
  mobileNav.style.display = 'flex';
  mobileNav.setAttribute('aria-hidden', 'false');
}

function closeMenu() {
  mobileNav.style.display = 'none';
  mobileNav.setAttribute('aria-hidden', 'true');
}

menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

mobileNav.addEventListener('click', e => {
  if (e.target === mobileNav) closeMenu();
});

window.addEventListener('scroll', () => {
  backTop.style.display = window.scrollY > 500 ? 'inline-flex' : 'none';
});

backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', closeMenu);
});
