// hamburgerMenu.js
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.querySelector('#hamburgerBtn');
  const mainNav = document.querySelector('#mainNav');

  hamburgerBtn.addEventListener('click', () => {
    mainNav.classList.toggle('navOpen');
    hamburgerBtn.classList.toggle('isActive');
  });
});