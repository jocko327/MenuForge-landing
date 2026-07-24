/*
 * Persist Google Ads click IDs + UTMs across the landing -> OAuth -> app path.
 *
 * Auto-tagging lands gclid/UTMs on menuforge.ai; social sign-in then jumps to
 * app.menuforge.ai. This script stores those params in sessionStorage and
 * appends them to Continue-with-Google/Facebook hrefs so the backend can
 * sign them into OAuth state.
 */
(function () {
  var KEYS = ['gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  var STORE = 'mf_ad_attr';

  function readStored() {
    try {
      return JSON.parse(sessionStorage.getItem(STORE) || '{}') || {};
    } catch (e) {
      return {};
    }
  }

  function writeStored(obj) {
    try {
      sessionStorage.setItem(STORE, JSON.stringify(obj));
    } catch (e) { /* private mode / quota — ignore */ }
  }

  var params = new URLSearchParams(window.location.search);
  var stored = readStored();
  KEYS.forEach(function (k) {
    var v = params.get(k);
    if (v) stored[k] = v;
  });
  writeStored(stored);

  function appendTracking(anchor) {
    if (!anchor || !anchor.getAttribute) return;
    var href = anchor.getAttribute('href');
    if (!href || href.charAt(0) === '#') return;
    try {
      var url = new URL(href, window.location.href);
      KEYS.forEach(function (k) {
        if (stored[k] && !url.searchParams.get(k)) {
          url.searchParams.set(k, stored[k]);
        }
      });
      anchor.setAttribute('href', url.toString());
    } catch (e) { /* ignore bad hrefs */ }
  }

  function applyAll() {
    var nodes = document.querySelectorAll(
      '#socialGoogle, #socialFacebook, a.social-btn, a[href*="/auth/oauth/"]'
    );
    for (var i = 0; i < nodes.length; i++) appendTracking(nodes[i]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyAll);
  } else {
    applyAll();
  }
})();
