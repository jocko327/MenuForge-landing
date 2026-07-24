/*
 * Google Ads conversion configuration for MenuForge paid-search landing pages.
 *
 * HOW TO FILL THIS IN (one-time, after creating the conversion action in Google Ads):
 *   1. Google Ads -> Goals -> Conversions -> + New conversion action -> "Website".
 *   2. Create an action (category "Submit lead form" / "Sign-up"). Choose
 *      "Use Google tag" -> install manually. Google shows two values:
 *        - Conversion ID    e.g.  AW-123456789
 *        - Conversion label e.g.  AbC-D_efG-h12_34-567
 *   3. Paste them below. That's it - lp-recipe-costing.html loads the tag and
 *      lp-thank-you.html fires the conversion using these values.
 *
 * Until both values are set, the GA4 tag still fires but the Google Ads
 * conversion is skipped (no errors, no phantom conversions).
 */
window.MF_ADS_CONVERSION_ID = 'AW-18099085313';        // Google Ads conversion ID
window.MF_ADS_CONVERSION_LABEL = 'kzHQCI2Og7kcEIHAqLZD'; // 'Ad Lead - Free Signup' conversion label
window.MF_GA4_ID = 'G-BVJ0H65CZ8';
// Cross-domain linker: ad clicks land on menuforge.ai; social signup finishes on app.menuforge.ai
window.MF_ADS_LINKER_DOMAINS = ['menuforge.ai', 'www.menuforge.ai', 'app.menuforge.ai'];

/*
 * Meta (Facebook) Pixel ID. Used by the inline Meta Pixel base code on the
 * marketing/funnel pages: PageView fires on every page, and lp-thank-you.html
 * additionally fires a 'Lead' event. Leave blank to disable the pixel.
 */
window.MF_FB_PIXEL_ID = '1564507615096204';

/*
 * LinkedIn Insight Tag Partner ID (numeric). Leave blank until you create the
 * Insight Tag in LinkedIn Campaign Manager (Analyze -> Insight Tag).
 */
window.MF_LINKEDIN_PARTNER_ID = '9513276';

// Note: social sign-in buttons on get-started.html are gated at runtime via the
// backend GET /auth/config (OAUTH_GOOGLE_ENABLED / OAUTH_FACEBOOK_ENABLED), not
// a static flag here.
