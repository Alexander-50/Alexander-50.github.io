/* Minimal progressive-enhancement JS.
   No eval, no dynamic script injection, no innerHTML with untrusted data,
   no third-party calls, no tracking. */

(function () {
  'use strict';

  // Footer year — plain textContent, no HTML construction.
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Highlight the active nav link on scroll using IntersectionObserver.
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.site-nav__links a');

  if ('IntersectionObserver' in window && sections.length && navLinks.length) {
    var linkById = {};
    navLinks.forEach(function (link) {
      var href = link.getAttribute('href') || '';
      if (href.charAt(0) === '#') {
        linkById[href.slice(1)] = link;
      }
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = linkById[entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach(function (l) { l.style.color = ''; });
            link.style.color = 'var(--text)';
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach(function (section) { observer.observe(section); });
  }
})();
