/*
 * Google Ads / GA4 / pixel config for MenuForge landing pages.
 *
 * Preferred source: production backend .env via GET /auth/config
 * (MF_ADS_* vars — gitignored, survives app pulls). This file applies that
 * response onto window.MF_* and keeps static fallbacks if the API is down.
 *
 * Pixel IDs below are landing-only (not in app .env).
 */
(function () {
  var API = 'https://app.menuforge.ai';

  // Static fallbacks (last known good) — used only if /auth/config fails.
  window.MF_ADS_CONVERSION_ID = window.MF_ADS_CONVERSION_ID || 'AW-18099085313';
  window.MF_ADS_LEAD_CONVERSION_LABEL = window.MF_ADS_LEAD_CONVERSION_LABEL || 'kzHQCI2Og7kcEIHAqLZD';
  window.MF_ADS_ACCOUNT_CONVERSION_LABEL = window.MF_ADS_ACCOUNT_CONVERSION_LABEL || 'ipseCL70zdUcEIHAqLZD';
  window.MF_ADS_FIRST_RECIPE_CONVERSION_LABEL = window.MF_ADS_FIRST_RECIPE_CONVERSION_LABEL || 'MsInCOK1-9UcEIHAqLZD';
  // Paste Google Ads label for "MenuForge — Demo booked" when created (optional until Book Demo campaign launches).
  window.MF_ADS_DEMO_CONVERSION_LABEL = window.MF_ADS_DEMO_CONVERSION_LABEL || '';
  window.MF_ADS_CONVERSION_LABEL = window.MF_ADS_LEAD_CONVERSION_LABEL;
  window.MF_GA4_ID = window.MF_GA4_ID || 'G-BVJ0H65CZ8';
  window.MF_ADS_LINKER_DOMAINS = ['menuforge.ai', 'www.menuforge.ai', 'app.menuforge.ai'];
  window.MF_FB_PIXEL_ID = '1564507615096204';
  window.MF_LINKEDIN_PARTNER_ID = '9513276';
  // Calendly inline embed for lp-book-demo.html — replace with your real scheduling URL.
  window.MF_CALENDLY_URL = window.MF_CALENDLY_URL || 'https://calendly.com/PLACEHOLDER/menuforge-demo';

  function apply(data) {
    if (!data) return;
    if (data.ads_conversion_id) window.MF_ADS_CONVERSION_ID = data.ads_conversion_id;
    if (data.ads_lead_conversion_label) {
      window.MF_ADS_LEAD_CONVERSION_LABEL = data.ads_lead_conversion_label;
      window.MF_ADS_CONVERSION_LABEL = data.ads_lead_conversion_label;
    }
    if (data.ads_account_conversion_label) {
      window.MF_ADS_ACCOUNT_CONVERSION_LABEL = data.ads_account_conversion_label;
    }
    if (data.ads_first_recipe_conversion_label) {
      window.MF_ADS_FIRST_RECIPE_CONVERSION_LABEL = data.ads_first_recipe_conversion_label;
    }
    if (data.ga4_id) window.MF_GA4_ID = data.ga4_id;
  }

  window.MF_ADS_CONFIG_READY = fetch(API + '/auth/config', { credentials: 'omit' })
    .then(function (res) { return res.ok ? res.json() : null; })
    .then(apply)
    .catch(function () { /* keep fallbacks */ });
})();
