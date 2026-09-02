/**
 * Rachel Marty — Personal Website JavaScript
 * Interactive Navigation, Scroll Animations, Filtering & Utilities
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollObserver();
  initProjectFiltering();
  initCurrentYear();
  initCopyEmail();
});

/* ---------- Navbar Scroll Effect ---------- */
function initNavbar() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ---------- Mobile Navigation Toggle ---------- */
function initMobileMenu() {
  const toggle = document.querySelector('.nav__toggle');
  const navLinks = document.querySelector('.nav__links');
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu on link click
  navLinks.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* ---------- Scroll Reveal (Intersection Observer) ---------- */
function initScrollObserver() {
  const animatedElements = document.querySelectorAll('.fade-in');
  if (!animatedElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    });

    animatedElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    animatedElements.forEach(el => el.classList.add('visible'));
  }
}

/* ---------- Project Category Filtering ---------- */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.work-filter__btn');
  const projectCards = document.querySelectorAll('.project-item');
  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');

      // Update active button state
      filterBtns.forEach(b => b.classList.remove('work-filter__btn--active'));
      btn.classList.add('work-filter__btn--active');

      // Filter project cards
      projectCards.forEach(card => {
        const itemCategories = card.getAttribute('data-category') || '';
        if (category === 'all' || itemCategories.includes(category)) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ---------- Dynamic Copyright Year ---------- */
function initCurrentYear() {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

/* ---------- Copy Email to Clipboard ---------- */
function initCopyEmail() {
  const copyButtons = document.querySelectorAll('[data-copy-email]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-copy-email') || 'rachelelisemarty@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = '✓ Copied to clipboard!';
        btn.classList.add('btn--copied');
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove('btn--copied');
        }, 2500);
      }).catch(err => {
        window.location.href = `mailto:${email}`;
      });
    });
  });
}
