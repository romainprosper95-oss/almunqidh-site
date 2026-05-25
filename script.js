const toggle = document.querySelector('.menu-toggle');
const panel = document.querySelector('.mobile-panel');
const links = document.querySelectorAll('.mobile-panel a');
const topBtn = document.querySelector('.to-top');

toggle.addEventListener('click', () => {
  const open = panel.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
  panel.setAttribute('aria-hidden', !open);
});

links.forEach(link => {
  link.addEventListener('click', () => {
    panel.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    panel.setAttribute('aria-hidden', 'true');
  });
});

window.addEventListener('scroll', () => {
  const show = window.scrollY > 300;
  topBtn.style.opacity = show ? '1' : '0.35';
  topBtn.style.transform = show ? 'translateY(0)' : 'translateY(4px)';
});
