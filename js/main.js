/**
 * Al Mikat — Developer Portfolio
 * Minimal & Modern Vanilla JavaScript
 * - Mobile Navigation Menu with auto-close
 * - ScrollSpy for active nav link highlighting (Home, About, Skills, Projects, Education, Contact)
 * - Header dynamic elevation on scroll
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. Mobile Navigation Menu
  // =========================================================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  const navLinkItems = document.querySelectorAll('.nav-link');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      mobileMenuBtn.classList.toggle('open', isOpen);
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Auto-close menu when clicking any nav link
    navLinkItems.forEach(function (link) {
      link.addEventListener('click', function () {
        if (navLinks.classList.contains('open')) {
          navLinks.classList.remove('open');
          mobileMenuBtn.classList.remove('open');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (
        navLinks.classList.contains('open') &&
        !navLinks.contains(e.target) &&
        !mobileMenuBtn.contains(e.target)
      ) {
        navLinks.classList.remove('open');
        mobileMenuBtn.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // =========================================================================
  // 2. Active Nav Link ScrollSpy (IntersectionObserver)
  // =========================================================================
  const sections = document.querySelectorAll('section[id]');
  
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -55% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinkItems.forEach(function (link) {
            if (link.getAttribute('href') === '#' + currentId) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  // =========================================================================
  // 3. Header Dynamic Elevation on Scroll
  // =========================================================================
  const siteHeader = document.getElementById('siteHeader');
  if (siteHeader) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // =========================================================================
  // 4. Theme Switcher (Dark / Light & Cream)
  // =========================================================================
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const metaThemeColor = document.getElementById('metaThemeColor');
  const storedTheme = localStorage.getItem('portfolio-theme') || 'dark';

  function updateThemeMeta(theme) {
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'light' ? '#faf6ee' : '#0d0d12');
    }
  }

  // Apply initial theme
  document.documentElement.setAttribute('data-theme', storedTheme);
  updateThemeMeta(storedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
      updateThemeMeta(newTheme);
    });
  }

})();
