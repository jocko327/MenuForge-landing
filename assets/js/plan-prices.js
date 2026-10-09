/* Hydrate marketing prices from CRM-backed GET /auth/plan-info.
   Marks: data-plan-price="ai_plus" | "ai_plus-annual" | "basic"
          data-plan-name="ai_plus"
          data-compare-price="meez" */
(function () {
  var API_BASE_URL = 'https://app.menuforge.ai';

  function moneyText(value) {
    var n = Number(value);
    if (!isFinite(n)) return '';
    return (Math.round(n * 100) % 100 === 0) ? String(Math.round(n)) : n.toFixed(2);
  }

  function dollar(value) {
    var text = moneyText(value);
    return text ? ('$' + text) : '';
  }

  function parseSpec(spec) {
    var raw = String(spec || '').trim();
    if (raw.slice(-7) === '-annual') return { key: raw.slice(0, -7), period: 'annual' };
    if (raw.slice(-8) === '-monthly') return { key: raw.slice(0, -8), period: 'monthly' };
    return { key: raw, period: 'monthly' };
  }

  function vendorMap(list) {
    var out = {};
    (list || []).forEach(function (v) {
      if (v && v.key) out[v.key] = v;
    });
    return out;
  }

  function apply(data) {
    var plans = (data && data.plans) || {};
    var vendors = vendorMap(data && data.compare_vendors);

    document.querySelectorAll('[data-plan-price]').forEach(function (el) {
      var spec = parseSpec(el.getAttribute('data-plan-price'));
      var plan = plans[spec.key];
      if (!plan || !plan.prices) return;
      var raw = spec.period === 'annual' && Number(plan.prices.monthly) > 0
        ? Math.round(Number(plan.prices.monthly) * 0.9 * 100) / 100
        : plan.prices[spec.period];
      var formatted = dollar(raw);
      if (!formatted) return;
      el.textContent = formatted;
    });

    document.querySelectorAll('[data-plan-name]').forEach(function (el) {
      var key = el.getAttribute('data-plan-name');
      var plan = plans[key];
      if (plan && plan.display_name) el.textContent = plan.display_name;
    });

    document.querySelectorAll('[data-compare-price]').forEach(function (el) {
      var vendor = vendors[el.getAttribute('data-compare-price')];
      if (vendor && vendor.price_display) el.textContent = vendor.price_display;
    });

    document.querySelectorAll('[data-compare-name]').forEach(function (el) {
      var vendor = vendors[el.getAttribute('data-compare-name')];
      if (vendor && vendor.name) el.textContent = vendor.name;
    });

    function quota(value) {
      return value === null || value === undefined ? 'Unlimited' : Number(value).toLocaleString('en-US');
    }
    [['data-plan-users', 'max_users'], ['data-plan-recipes', 'max_recipes'], ['data-plan-ai', 'max_ai_recipes_per_month']]
      .forEach(function (pair) {
        document.querySelectorAll('[' + pair[0] + ']').forEach(function (el) {
          var plan = plans[el.getAttribute(pair[0])];
          if (plan && pair[1] in plan) el.textContent = quota(plan[pair[1]]);
        });
      });

    var addons = (data && data.recipe_addons) || {};
    var addonMap = {
      'pack500-extra': addons.recipe_pack_500 && addons.recipe_pack_500.extra_recipes,
      'pack500-price': addons.recipe_pack_500 && addons.recipe_pack_500.price_monthly,
      'pack1000-extra': addons.recipe_pack_1000 && addons.recipe_pack_1000.extra_recipes,
      'pack1000-price': addons.recipe_pack_1000 && addons.recipe_pack_1000.price_monthly
    };
    document.querySelectorAll('[data-addon]').forEach(function (el) {
      var v = addonMap[el.getAttribute('data-addon')];
      if (v !== undefined && v !== null) el.textContent = Number(v).toLocaleString('en-US');
    });

    var trial = (data && data.trial) || {};
    var days = Number(trial.trial_days);
    var receipts = Number(trial.receipt_limit);
    var ai = Number(trial.ai_recipe_limit);
    if (days > 0) {
      document.querySelectorAll('[data-trial-days]').forEach(function (el) {
        el.textContent = String(days);
      });
      document.querySelectorAll('[data-trial-cta]').forEach(function (el) {
        var compact = el.classList.contains('nav-cta')
          || el.classList.contains('nav-cta-signup')
          || el.classList.contains('lp-header-cta');
        el.textContent = compact
          ? 'Start free trial'
          : ('Start ' + days + '-day free trial');
      });
    }
    if (receipts >= 0) {
      document.querySelectorAll('[data-trial-receipts]').forEach(function (el) {
        el.textContent = String(receipts);
      });
    }
    if (ai >= 0) {
      document.querySelectorAll('[data-trial-ai-recipes]').forEach(function (el) {
        el.textContent = String(ai);
      });
    }
  }

  var request = fetch(API_BASE_URL + '/auth/plan-info')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      apply(data);
      return data;
    })
    .catch(function () { return null; });

  window.MenuForgePlanInfo = request;
})();
