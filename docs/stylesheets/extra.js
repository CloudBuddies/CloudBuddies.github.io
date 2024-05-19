// scripts/extra.js

document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
      const toc = document.querySelector('.md-sidebar--secondary');
      if (toc) {
          toc.style.display = 'none';
      }
  }
});
