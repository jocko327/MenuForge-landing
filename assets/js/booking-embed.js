/**
 * Inline Cal.com / Calendly booking + Google Ads "Demo booked" conversion.
 * Used on lp-book-demo.html and negotiate-distributor-pricing.html.
 * Expects #calendlyEmbed and optional #calendlyPlaceholder.
 */
(function () {
  function fireDemoBooked() {
    if (typeof gtag === 'function') {
      gtag('event', 'generate_lead', { event_category: 'ads', event_label: 'book-demo' });
      var label = window.MF_ADS_DEMO_CONVERSION_LABEL;
      if (window.MF_ADS_CONVERSION_ID && label) {
        gtag('event', 'conversion', {
          send_to: window.MF_ADS_CONVERSION_ID + '/' + label
        });
      }
    }
    if (typeof fbq === 'function') {
      fbq('track', 'Schedule');
    }
  }

  function bindBookingMessages(isCalCom) {
    window.addEventListener('message', function (e) {
      if (!e.data) return;
      if (isCalCom) {
        if (String(e.origin || '').indexOf('cal.com') === -1) return;
        var t = e.data.type || e.data.event || (e.data.data && e.data.data.type);
        if (t === 'bookingSuccessful' || t === 'bookingSuccessfulV2' || t === '__bookingSuccessful') {
          fireDemoBooked();
        }
        return;
      }
      if (String(e.origin || '').indexOf('calendly.com') === -1) return;
      if (e.data.event === 'calendly.event_scheduled') {
        fireDemoBooked();
      }
    });
  }

  function loadCalCom(url, wrap) {
    var src = url;
    try {
      var u = new URL(url);
      if (!u.searchParams.has('embed')) u.searchParams.set('embed', 'true');
      if (!u.searchParams.has('layout')) u.searchParams.set('layout', 'month_view');
      src = u.toString();
    } catch (err) {
      src = 'https://cal.com/menuforge/20min?embed=true&layout=month_view';
    }
    wrap.innerHTML = '';
    var iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.title = 'Book a MenuForge demo';
    iframe.loading = 'lazy';
    iframe.allow = 'payment';
    wrap.appendChild(iframe);

    var fallback = document.createElement('p');
    fallback.className = 'booking-fallback';
    fallback.innerHTML = 'Calendar not showing? <a href="' + url.replace(/"/g, '') + '" target="_blank" rel="noopener">Open booking in a new tab →</a>';
    wrap.parentNode.insertBefore(fallback, wrap.nextSibling);

    bindBookingMessages(true);
  }

  function loadCalendly(url, wrap) {
    var css = document.createElement('link');
    css.href = 'https://assets.calendly.com/assets/external/widget.css';
    css.rel = 'stylesheet';
    document.head.appendChild(css);
    var s = document.createElement('script');
    s.src = 'https://assets.calendly.com/assets/external/widget.js';
    s.async = true;
    s.onload = function () {
      if (window.Calendly && wrap) {
        window.Calendly.initInlineWidget({
          url: url,
          parentElement: wrap,
          prefill: {},
          utm: {}
        });
      }
    };
    document.body.appendChild(s);
    bindBookingMessages(false);
  }

  function loadBooking(url) {
    var wrap = document.getElementById('calendlyEmbed');
    var placeholder = document.getElementById('calendlyPlaceholder');
    if (!wrap) return;
    if (!url || /PLACEHOLDER|YOUR_|example\.com/i.test(url)) {
      if (placeholder) placeholder.classList.add('is-visible');
      return;
    }
    if (placeholder) placeholder.classList.remove('is-visible');
    if (/cal\.com/i.test(url)) {
      loadCalCom(url, wrap);
    } else {
      loadCalendly(url, wrap);
    }
  }

  function start() {
    var url = window.MF_BOOKING_URL || window.MF_CALENDLY_URL || '';
    loadBooking(url);
  }

  if (window.MF_ADS_CONFIG_READY && typeof window.MF_ADS_CONFIG_READY.then === 'function') {
    window.MF_ADS_CONFIG_READY.then(start).catch(start);
  } else if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
