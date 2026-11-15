/* Santiago Pirez Velasco — site behavior (no build step, no dependencies) */
(function () {
  'use strict';

  /*
   * Contact form endpoint.
   * Uses FormSubmit (https://formsubmit.co), which forwards submissions by email and needs no account.
   * The first message sends an activation email to this address; after you confirm it, FormSubmit gives
   * you a random alias. Replace the address below with that alias so your email isn't in the page source.
   */
  var CONTACT_ENDPOINT = 'https://formsubmit.co/ajax/santiagopirezvelasco@gmail.com';

  /* Old single-page links (/#project/milo) → new pages */
  var LEGACY = {
    'milo': '/apps/milo/', 'cards-of-chaos': '/apps/cards-of-chaos/', 'pace-chase': '/apps/pacechase/',
    'pacechase': '/apps/pacechase/', 'hackers-golf': '/apps/hackers-golf/', 'beagle-bounce': '/apps/beagle-bounce/',
    'statements-transactions-payments': '/work/billing/', 'purchase-controls': '/work/purchase-controls/',
    'cityscout': 'https://tigermindlabs.com/cityscout/'
  };
  var legacy = location.hash.match(/^#project\/([\w-]+)/);
  if (legacy) { location.replace(LEGACY[legacy[1]] || '/#work'); return; }

  /* ---------- Contact modal ---------- */
  var modal = document.getElementById('contact-modal');
  var lastFocus = null;
  if (modal) {
    var form = modal.querySelector('[data-contact-form]');
    var formView = modal.querySelector('[data-view="form"]');
    var sentView = modal.querySelector('[data-view="sent"]');
    var greeting = modal.querySelector('[data-greeting]');
    var subline = modal.querySelector('[data-subline]');
    var thanks = modal.querySelector('[data-thanks]');
    var sendBtn = modal.querySelector('[data-send]');
    var sendLabel = modal.querySelector('[data-send-label]');
    var errorMsg = modal.querySelector('[data-form-error]');
    var panel = modal.querySelector('.spv-modal');
    var nameInput = form.querySelector('[name="name"]');

    var firstName = function () { return (nameInput.value || '').trim().split(/\s+/)[0]; };
    var updateGreeting = function () {
      var n = firstName();
      greeting.textContent = n ? 'Hi, ' + n + '!' : 'Say hi';
      subline.textContent = n ? 'Nice to meet you. What’s on your mind?' : 'I read every message myself.';
    };
    nameInput.addEventListener('input', updateGreeting);

    var open = function (trigger) {
      lastFocus = trigger || document.activeElement;
      form.reset(); updateGreeting();
      formView.hidden = false; sentView.hidden = true; errorMsg.hidden = true;
      sendBtn.classList.remove('is-sending'); sendLabel.textContent = 'Send note';
      modal.hidden = false;
      document.documentElement.style.overflow = 'hidden';
      setTimeout(function () { nameInput.focus(); }, 60);
    };
    var close = function () {
      modal.hidden = true;
      document.documentElement.style.overflow = '';
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    };

    document.querySelectorAll('[data-open-contact]').forEach(function (btn) {
      btn.addEventListener('click', function (e) { e.preventDefault(); open(btn); });
    });
    modal.addEventListener('click', function (e) {
      if (e.target === modal) return close();
      var c = e.target.closest('[data-close-contact]');
      if (c && c !== modal) close();
    });
    document.addEventListener('keydown', function (e) {
      if (modal.hidden) return;
      if (e.key === 'Escape') { close(); return; }
      if (e.key === 'Tab') { /* keep focus inside the dialog */
        var f = panel.querySelectorAll('button, [href], input:not([name="_honey"]), textarea');
        var vis = Array.prototype.filter.call(f, function (el) { return el.offsetParent !== null; });
        if (!vis.length) return;
        var first = vis[0], last = vis[vis.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      errorMsg.hidden = true;
      sendBtn.classList.add('is-sending'); sendLabel.textContent = 'Sending…';
      var f = form.elements;
      var data = {
        name: f.namedItem('name').value, email: f.namedItem('email').value, message: f.namedItem('note').value,
        _subject: 'New note from your portfolio: ' + f.namedItem('name').value,
        _replyto: f.namedItem('email').value, _template: 'table', _captcha: 'false', _honey: f.namedItem('_honey').value
      };
      var minDelay = new Promise(function (r) { setTimeout(r, 1000); }); /* let the paper plane fly */
      var req = fetch(CONTACT_ENDPOINT, {
        method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      }).then(function (r) { if (!r.ok) throw new Error('send failed'); return r.json(); });
      Promise.all([req, minDelay]).then(function () {
        var n = firstName();
        thanks.textContent = n ? 'Thanks, ' + n + '!' : 'Thanks!';
        formView.hidden = true; sentView.hidden = false;
        var back = sentView.querySelector('[data-close-contact]'); if (back) back.focus();
        if (window.gtag) gtag('event', 'contact_submit');
      }).catch(function () {
        sendBtn.classList.remove('is-sending'); sendLabel.textContent = 'Send note';
        errorMsg.hidden = false;
      });
    });
  }


  /* ---------- Mobile menu ---------- */
  var nav = document.querySelector('[data-nav]');
  var toggle = document.querySelector('[data-nav-toggle]');
  if (nav && toggle) {
    var setMenu = function (open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    toggle.addEventListener('click', function () { setMenu(!nav.classList.contains('is-open')); });
    nav.querySelectorAll('#nav-menu a, #nav-menu button').forEach(function (el) {
      el.addEventListener('click', function () { setMenu(false); });
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('is-open')) { setMenu(false); toggle.focus(); } });
    document.addEventListener('click', function (e) { if (nav.classList.contains('is-open') && !nav.contains(e.target)) setMenu(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 760) setMenu(false); });
  }

  /* ---------- Nav: highlight the section in view ---------- */
  var links = document.querySelectorAll('.spv-nav__link[href^="#"]');
  if (links.length && 'IntersectionObserver' in window) {
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var setActive = function (id) {
      links.forEach(function (a) { a.removeAttribute('aria-current'); });
      if (byId[id]) byId[id].setAttribute('aria-current', 'location');
    };
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) setActive(en.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['work', 'building', 'approach', 'about', 'contact'].forEach(function (id) {
      var el = document.getElementById(id); if (el) io.observe(el);
    });
    window.addEventListener('scroll', function () { if (window.scrollY < 200) setActive(''); }, { passive: true });
  }

  /* ---------- Track resume downloads and outbound store links ---------- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a'); if (!a || !window.gtag) return;
    if (/resume/.test(a.href)) gtag('event', 'resume_download');
    else if (/apps\.apple\.com|play\.google\.com/.test(a.href)) gtag('event', 'store_click', { link_url: a.href });
  });
})();
