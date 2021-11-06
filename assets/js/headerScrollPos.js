const header = document.querySelector('.homeHeader');

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY;

  if (scrollPos > 20) {
    header.classList.add('headerScrolled');
  }
  else {
    header.classList.remove('headerScrolled');
  }
})