
// This will apply the .active class to the correct link based on current URL
window.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navLink');
  const currentPage = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});