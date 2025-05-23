// hamburgerMenu.js
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.querySelector('#hamburgerBtn');
  const mobileOverlay = document.querySelector('#mobileOverlay');

  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    mobileOverlay.classList.toggle('open');
  });
});
