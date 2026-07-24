(function() {
  'use strict';

  var API_BASE = 'https://app.menuforge.ai';
  var SUPPRESS_COOKIE = 'mf_guide_popup_shown';
  var USER_COOKIE = 'mf_user';
  var SUBMITTED_KEY = 'mf_guide_submitted';
  var TEN_DAYS_SECONDS = 10 * 24 * 60 * 60;
  var dwellComplete = false;
  var popupShown = false;
  var pendingNavigation = null;
  var lastScrollY = window.scrollY || 0;
  var scrollUpDistance = 0;

  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : '';
  }

  function setCookie(name, value, maxAgeSeconds) {
    document.cookie = name + '=' + encodeURIComponent(value) + '; Path=/; Max-Age=' + maxAgeSeconds + '; SameSite=Lax; Secure';
  }

  function shouldSuppress() {
    try {
      return getCookie(USER_COOKIE) === '1' ||
        !!getCookie(SUPPRESS_COOKIE) ||
        window.localStorage.getItem(SUBMITTED_KEY) === '1';
    } catch (error) {
      return getCookie(USER_COOKIE) === '1' || !!getCookie(SUPPRESS_COOKIE);
    }
  }

  function suppressForTenDays() {
    setCookie(SUPPRESS_COOKIE, '1', TEN_DAYS_SECONDS);
  }

  function markSubmitted() {
    suppressForTenDays();
    try {
      window.localStorage.setItem(SUBMITTED_KEY, '1');
    } catch (error) {
      // Ignore private-mode storage failures.
    }
  }

  function createPopup() {
    var overlay = document.createElement('div');
    overlay.className = 'mf-popup-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'mf-popup-title');
    overlay.innerHTML = [
      '<div class="mf-popup">',
      '  <button class="mf-popup-close" type="button" aria-label="Close guide popup">&times;</button>',
      '  <section class="mf-popup-visual">',
      '    <div class="mf-popup-brand"><img src="assets/images/menuforge-icon-192.png" alt=""><span>MenuForge<span>.ai</span></span></div>',
      '    <div class="mf-popup-kicker">Free recipe-costing guide</div>',
      '    <h2 id="mf-popup-title">Know your true cost per plate.</h2>',
      '    <p>Get the practical MenuForge guide to costing raw ingredients, nested batch recipes, yield loss, and tricky unit conversions.</p>',
      '    <div class="mf-popup-guide-card">',
      '      <strong>Inside the guide:</strong>',
      '      <ul>',
      '        <li>Batch recipes used as ingredients</li>',
      '        <li>Bottom-up recipe cost propagation</li>',
      '        <li>Spices bought by weight but used by volume</li>',
      '        <li>Density bridges, yield factors, and common pitfalls</li>',
      '      </ul>',
      '    </div>',
      '  </section>',
      '  <section class="mf-popup-content">',
      '    <form class="mf-popup-form" novalidate>',
      '      <h3>Send me the guide</h3>',
      '      <div class="mf-popup-field"><label for="mf-first-name">First name</label><input id="mf-first-name" name="first_name" autocomplete="given-name" required></div>',
      '      <div class="mf-popup-field"><label for="mf-last-name">Last name</label><input id="mf-last-name" name="last_name" autocomplete="family-name" required></div>',
      '      <div class="mf-popup-field"><label for="mf-company">Company</label><input id="mf-company" name="company" autocomplete="organization" required></div>',
      '      <div class="mf-popup-field"><label for="mf-email">Email</label><input id="mf-email" name="email" type="email" autocomplete="email" required></div>',
      '      <div class="mf-popup-error" role="alert"></div>',
      '      <button class="mf-popup-submit" type="submit">Get the Free Guide</button>',
      '      <p class="mf-popup-note">No spam. We will send the guide and may follow up with helpful recipe-costing resources.</p>',
      '    </form>',
      '    <div class="mf-popup-success" aria-live="polite">',
      '      <h3>Check your email.</h3>',
      '      <p>The recipe costing guide is on its way. You can also download it now.</p>',
      '      <a class="mf-popup-download" href="assets/downloads/menuforge-recipe-costing-guide.pdf" target="_blank" rel="noopener">Download the Guide</a>',
      '    </div>',
      '  </section>',
      '</div>'
    ].join('');

    document.body.appendChild(overlay);
    return overlay;
  }

  function getFocusable(overlay) {
    return Array.prototype.slice.call(overlay.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'));
  }

  function showPopup(reason) {
    if (popupShown || !dwellComplete || shouldSuppress()) return false;
    popupShown = true;
    suppressForTenDays();

    var overlay = document.querySelector('.mf-popup-overlay') || createPopup();
    var form = overlay.querySelector('.mf-popup-form');
    var success = overlay.querySelector('.mf-popup-success');
    var errorBox = overlay.querySelector('.mf-popup-error');
    var closeButton = overlay.querySelector('.mf-popup-close');
    var firstInput = overlay.querySelector('#mf-first-name');
    var lastFocused = document.activeElement;

    if (form) form.style.display = '';
    if (success) success.classList.remove('is-visible');
    if (errorBox) errorBox.classList.remove('is-visible');

    overlay.classList.add('is-visible');
    document.body.classList.add('mf-popup-open');
    overlay.setAttribute('data-reason', reason || 'exit');
    setTimeout(function() { firstInput && firstInput.focus(); }, 30);

    function closePopup(continueNavigation) {
      overlay.classList.remove('is-visible');
      document.body.classList.remove('mf-popup-open');
      document.removeEventListener('keydown', handleKeydown);
      if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
      if (continueNavigation && pendingNavigation) {
        var href = pendingNavigation;
        pendingNavigation = null;
        window.location.href = href;
      }
    }

    function handleKeydown(event) {
      if (event.key === 'Escape') {
        closePopup(false);
        return;
      }
      if (event.key !== 'Tab') return;
      var focusable = getFocusable(overlay);
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    closeButton.addEventListener('click', function() { closePopup(false); }, { once: true });
    overlay.addEventListener('click', function(event) {
      if (event.target === overlay) closePopup(false);
    });
    document.addEventListener('keydown', handleKeydown);

    if (form && !form.dataset.bound) {
      form.dataset.bound = '1';
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        var button = form.querySelector('.mf-popup-submit');
        var error = form.querySelector('.mf-popup-error');
        var payload = {
          first_name: form.first_name.value.trim(),
          last_name: form.last_name.value.trim(),
          company: form.company.value.trim(),
          email: form.email.value.trim()
        };

        if (!payload.first_name || !payload.last_name || !payload.company || !payload.email) {
          error.textContent = 'Please complete every field so we can send the guide.';
          error.classList.add('is-visible');
          return;
        }

        button.disabled = true;
        button.textContent = 'Sending...';
        error.classList.remove('is-visible');

        fetch(API_BASE + '/leads/guide-request', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })
          .then(function(response) {
            if (!response.ok) throw new Error('Request failed');
            return response.json();
          })
          .then(function(data) {
            var link = overlay.querySelector('.mf-popup-download');
            if (data.download_url && link) link.href = data.download_url;
            markSubmitted();
            form.style.display = 'none';
            success.classList.add('is-visible');
          })
          .catch(function() {
            error.textContent = 'Something went wrong sending the guide. Please try again.';
            error.classList.add('is-visible');
          })
          .finally(function() {
            button.disabled = false;
            button.textContent = 'Get the Free Guide';
          });
      });
    }

    return true;
  }

  function isTrackedNavigation(link) {
    if (!link || !link.href || link.target === '_blank' || link.hasAttribute('download')) return false;
    var href = link.getAttribute('href') || '';
    if (href.charAt(0) === '#') return false;
    try {
      var url = new URL(link.href, window.location.href);
      return url.href !== window.location.href;
    } catch (error) {
      return false;
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    if (shouldSuppress()) return;

    window.setTimeout(function() {
      dwellComplete = true;
    }, 10000);

    document.addEventListener('mouseleave', function(event) {
      if (event.clientY <= 0) showPopup('mouseleave');
    });

    document.addEventListener('visibilitychange', function() {
      if (document.visibilityState === 'hidden') showPopup('visibility');
    });

    window.addEventListener('beforeunload', function() {
      showPopup('beforeunload');
    });

    document.addEventListener('click', function(event) {
      var link = event.target.closest ? event.target.closest('a') : null;
      if (!isTrackedNavigation(link)) return;
      if (showPopup('navigation')) {
        event.preventDefault();
        pendingNavigation = link.href;
      }
    }, true);

    window.addEventListener('scroll', function() {
      var current = window.scrollY || 0;
      if (current < lastScrollY) {
        scrollUpDistance += lastScrollY - current;
      } else {
        scrollUpDistance = 0;
      }
      lastScrollY = current;
      if (scrollUpDistance > 260 && current > 180) showPopup('mobile-scroll');
    }, { passive: true });
  });
})();
