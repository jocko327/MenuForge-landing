/*
 * HeyCatch analytics for MenuForge landing pages.
 *
 * Loaded as <script type="module"> from the <head> of every public page so
 * init runs on whichever page the visitor lands on first. Autocapture handles
 * pageviews and clicks from here; do not hand-instrument those.
 *
 * The SDK version is pinned on purpose. esm.sh re-resolves a bare specifier on
 * every page load, and the newest npm upload is often an internal -dev build
 * wired to a non-production backend, whose events never reach the dashboard.
 * When bumping, resolve the stable release with `npm view @heycatch/sdk
 * version` and keep the x.y.z form (a "-" suffix is always wrong here).
 *
 * The project key is publishable, so it is inlined rather than plumbed
 * through ads-config.js like the Google/Meta IDs.
 */
import { analytics } from 'https://esm.sh/@heycatch/sdk@0.7.0';

analytics.init({
  projectKey: 'hck_pk_VwaeUndfs-AaCtls0J_hiVIUT-a4P6SD',
  install: {
    framework: 'web',
    agent: 'cursor',
  },
});
