// hamburgerMenu.js
// hamburgerOverlay.js
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.querySelector('#hamburgerBtn');
  const mobileOverlay = document.querySelector('#mobileOverlay');
  const overlayLinks = document.querySelectorAll('.overlayNavLink');

  // Toggle menu open/close
  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    mobileOverlay.classList.toggle('open');
  });

  // Close menu on link click
  overlayLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburgerBtn.classList.remove('active');
      mobileOverlay.classList.remove('open');
    });
  });

  // Optional: Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hamburgerBtn.classList.remove('active');
      mobileOverlay.classList.remove('open');
    }
  });
});
