const toggle = document.querySelector('.menu-toggle');
const panel = document.querySelector('.mobile-panel');
const links = document.querySelectorAll('.mobile-panel a');

if (toggle && panel) {
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
}
