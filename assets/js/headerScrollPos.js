const header = document.querySelector('.homeHeader');
const open = document.querySelector('.ri-menu-3-line');
const close = document.querySelector('.ri-close-fill');
const menu = document.querySelector('.mobileMenu');


window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY;

  if (scrollPos > 20) {
    header.classList.add('headerScrolled');
  }
  else {
    header.classList.remove('headerScrolled');
  }
});

open.addEventListener('click', () => {
  menu.style.transform="translateX(0%)"
});

close.addEventListener('click', () => {
  menu.style.transform="translateX(100%)"
});
