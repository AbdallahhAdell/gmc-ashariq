// GMC Ashariq — main.js
// Header, mobile menu, reveal animations, stat counters.
(function () {
  'use strict';

  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.querySelector('.nav-links');

  // ---------------------------------------------------------------------------
  // Sticky header: add .scrolled class once the page has been scrolled a bit.
  // ---------------------------------------------------------------------------
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 24) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---------------------------------------------------------------------------
  // Mobile menu
  //
  // Behaviour:
  //   • Sheet slides in from the right with a backdrop covering the rest of the
  //     viewport. Backdrop click, X button, ESC, link click, or width > 1024px
  //     all close it.
  //   • Body scroll is locked while open using the position:fixed pattern so
  //     it works on iOS Safari.
  //   • Focus moves to the close button on open and returns to the toggle on
  //     close. Tab is trapped inside the panel.
  //
  // The close button and backdrop are injected at runtime — no HTML edits are
  // required across the page set.
  // ---------------------------------------------------------------------------
  if (toggle && nav) {
    // ARIA wiring
    if (!nav.id) nav.id = 'primary-nav';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', nav.id);
    toggle.setAttribute('aria-label', 'Open menu');
    toggle.setAttribute('type', 'button');

    // Inject backdrop (sibling of <body>'s children)
    let backdrop = document.querySelector('.nav-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'nav-backdrop';
      backdrop.setAttribute('aria-hidden', 'true');
      document.body.appendChild(backdrop);
    }

    // Inject close (X) button inside the panel
    let closeBtn = nav.querySelector('.nav-close');
    if (!closeBtn) {
      closeBtn = document.createElement('button');
      closeBtn.type = 'button';
      closeBtn.className = 'nav-close';
      closeBtn.setAttribute('aria-label', 'Close menu');
      closeBtn.innerHTML =
        '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">' +
          '<path d="M5 5l14 14M19 5L5 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>' +
        '</svg>';
      nav.prepend(closeBtn);
    }

    const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    let scrollLockY = 0;
    let lastFocused = null;

    const isOpen = () => nav.classList.contains('mobile-open');

    const lockScroll = () => {
      scrollLockY = window.scrollY || document.documentElement.scrollTop;
      const body = document.body;
      body.style.position = 'fixed';
      body.style.top = `-${scrollLockY}px`;
      body.style.left = '0';
      body.style.right = '0';
      body.style.width = '100%';
    };

    const unlockScroll = () => {
      const body = document.body;
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.width = '';
      window.scrollTo(0, scrollLockY);
    };

    const openMenu = () => {
      if (isOpen()) return;
      lastFocused = document.activeElement;
      document.body.classList.add('nav-open');
      nav.classList.add('mobile-open');
      toggle.classList.add('open');
      backdrop.classList.add('show');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
      nav.setAttribute('role', 'dialog');
      nav.setAttribute('aria-modal', 'true');
      lockScroll();
      // Wait one frame so the panel is positioned before focus moves into it.
      requestAnimationFrame(() => closeBtn.focus());
    };

    const closeMenu = () => {
      if (!isOpen()) return;
      nav.classList.remove('mobile-open');
      toggle.classList.remove('open');
      backdrop.classList.remove('show');
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      nav.removeAttribute('role');
      nav.removeAttribute('aria-modal');
      unlockScroll();
      // Return focus to the toggle (or whatever was focused before opening)
      const target = lastFocused && lastFocused.focus ? lastFocused : toggle;
      target.focus();
    };

    // Listeners
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      isOpen() ? closeMenu() : openMenu();
    });
    closeBtn.addEventListener('click', closeMenu);
    backdrop.addEventListener('click', closeMenu);

    // Close menu when any nav link is clicked (covers anchors + page links)
    nav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        if (isOpen()) closeMenu();
      });
    });

    // ESC closes; Tab is trapped inside the panel
    document.addEventListener('keydown', (e) => {
      if (!isOpen()) return;
      if (e.key === 'Escape' || e.key === 'Esc') {
        e.preventDefault();
        closeMenu();
        return;
      }
      if (e.key === 'Tab') {
        const focusables = nav.querySelectorAll(FOCUSABLE);
        if (!focusables.length) return;
        const first = focusables[0];
        const last  = focusables[focusables.length - 1];
        const active = document.activeElement;
        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    // Auto-close on resize past the desktop breakpoint
    let resizeRaf;
    window.addEventListener('resize', () => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        if (window.innerWidth > 1024 && isOpen()) closeMenu();
      });
    });
  }

  // ---------------------------------------------------------------------------
  // Reveal on scroll
  // ---------------------------------------------------------------------------
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('in'));
  }

  // ---------------------------------------------------------------------------
  // Stat counters
  // ---------------------------------------------------------------------------
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target;
          const target   = parseFloat(el.dataset.count);
          const suffix   = el.dataset.suffix || '';
          const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals, 10) : 0;
          const dur = 1600;
          const start = performance.now();
          const step = (t) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            const val = target * eased;
            el.textContent = val.toFixed(decimals) + suffix;
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          co.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach((c) => co.observe(c));
  }
})();
