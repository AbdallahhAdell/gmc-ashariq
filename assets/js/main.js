// GMC Ashariq — main.js
// Header · Mobile menu (sheet) · Reveal animations · Stat counters
//
// Mobile menu refactor notes:
//   • Scroll lock uses `overflow: hidden` on <html> and <body> rather than
//     `position: fixed` — preserves scroll position naturally, no 1-frame snap,
//     and `window.scrollY` doesn't change so the sticky header doesn't
//     re-animate during open.
//   • Header scroll handler is short-circuited while the menu is open (extra
//     safety).
//   • Single class-based state (`nav-open` on <html> and <body>) — every
//     interaction routes through openMenu/closeMenu, so state can't drift.
//   • Focus uses `{preventScroll:true}` to avoid scroll-into-view shifts.
//   • `inert` is applied to the panel while it's closed on mobile, removed on
//     open — keeps the off-screen panel out of the tab order and the
//     accessibility tree.
(function () {
  'use strict';

  const html   = document.documentElement;
  const body   = document.body;
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.querySelector('.nav-links');

  const mqMobile = window.matchMedia('(max-width: 1024px)');

  // ---------------------------------------------------------------------------
  // Sticky header
  // ---------------------------------------------------------------------------
  if (header) {
    let scrolled = false;
    const onScroll = () => {
      // Don't react to scroll while the menu is open — the menu owns the screen.
      if (body.classList.contains('nav-open')) return;
      const should = window.scrollY > 24;
      if (should !== scrolled) {
        scrolled = should;
        header.classList.toggle('scrolled', should);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---------------------------------------------------------------------------
  // Mobile menu
  // ---------------------------------------------------------------------------
  if (toggle && nav) {
    // --- ARIA wiring -----------------------------------------------------------
    if (!nav.id) nav.id = 'primary-nav';
    toggle.setAttribute('type', 'button');
    toggle.setAttribute('aria-controls', nav.id);
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');

    // --- Inject backdrop ------------------------------------------------------
    let backdrop = document.querySelector('.nav-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'nav-backdrop';
      backdrop.setAttribute('aria-hidden', 'true');
      body.appendChild(backdrop);
    }

    // --- Inject close (X) button inside the panel -----------------------------
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

    // --- State helpers --------------------------------------------------------
    const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    let lastFocused = null;

    const isOpen   = () => nav.classList.contains('mobile-open');
    const isMobile = () => mqMobile.matches;

    // Make the panel inert on mobile when closed (out of tab order + AT tree).
    const syncInert = () => {
      if (isMobile() && !isOpen()) {
        nav.setAttribute('inert', '');
        nav.setAttribute('aria-hidden', 'true');
      } else {
        nav.removeAttribute('inert');
        nav.removeAttribute('aria-hidden');
      }
    };
    syncInert();
    mqMobile.addEventListener
      ? mqMobile.addEventListener('change', syncInert)
      : mqMobile.addListener(syncInert); // Safari < 14

    // --- Open / close ---------------------------------------------------------
    const openMenu = () => {
      if (isOpen()) return;
      lastFocused = document.activeElement;

      // Apply classes to html + body in the same paint frame.
      html.classList.add('nav-open');
      body.classList.add('nav-open');
      nav.classList.add('mobile-open');
      toggle.classList.add('open');
      backdrop.classList.add('show');

      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
      nav.setAttribute('role', 'dialog');
      nav.setAttribute('aria-modal', 'true');
      nav.removeAttribute('inert');
      nav.removeAttribute('aria-hidden');

      // Defer focus by one frame so the slide animation has started.
      // preventScroll:true is critical — without it iOS Safari scrolls the
      // focused element into view and shifts layout mid-animation.
      requestAnimationFrame(() => {
        try { closeBtn.focus({ preventScroll: true }); }
        catch (e) { closeBtn.focus(); }
      });
    };

    const closeMenu = () => {
      if (!isOpen()) return;

      nav.classList.remove('mobile-open');
      toggle.classList.remove('open');
      backdrop.classList.remove('show');
      html.classList.remove('nav-open');
      body.classList.remove('nav-open');

      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      nav.removeAttribute('role');
      nav.removeAttribute('aria-modal');

      // Re-inert the panel after the slide-out completes.
      syncInert();

      // Return focus to the original trigger (or hamburger as fallback).
      const target = (lastFocused && document.body.contains(lastFocused))
        ? lastFocused
        : toggle;
      try { target.focus({ preventScroll: true }); }
      catch (e) { target.focus(); }
    };

    // --- Wire interactions ----------------------------------------------------
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      isOpen() ? closeMenu() : openMenu();
    });
    closeBtn.addEventListener('click', closeMenu);
    backdrop.addEventListener('click', closeMenu);

    // Close on any link tap inside the panel.
    nav.addEventListener('click', (e) => {
      const link = e.target.closest('a[href]');
      if (link && isOpen()) closeMenu();
    });

    // ESC closes; Tab is trapped inside the panel while open.
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
        const first  = focusables[0];
        const last   = focusables[focusables.length - 1];
        const active = document.activeElement;
        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus({ preventScroll: true });
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus({ preventScroll: true });
        }
      }
    });

    // Auto-close on resize past the desktop breakpoint (rAF-coalesced).
    let resizeRaf;
    window.addEventListener('resize', () => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        if (!isMobile() && isOpen()) closeMenu();
        syncInert();
      });
    }, { passive: true });

    // Safety: if the page becomes hidden while open (tab change), close.
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && isOpen()) closeMenu();
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
        if (!e.isIntersecting) return;
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
      });
    }, { threshold: 0.4 });
    counters.forEach((c) => co.observe(c));
  }
})();
