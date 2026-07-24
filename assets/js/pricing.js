// MenuForge Pricing Page JavaScript

// API Configuration
const API_BASE_URL = 'https://app.menuforge.ai';  // Update with actual production URL

document.addEventListener('DOMContentLoaded', function() {
  const billingToggle = document.getElementById('billingToggle');
  const monthlyLabel = document.getElementById('monthlyLabel');
  const annualLabel = document.getElementById('annualLabel');
  const priceMonthly = document.querySelectorAll('.price-monthly');
  const priceAnnual = document.querySelectorAll('.price-annual');
  const pricePeriodTexts = document.querySelectorAll('.price-period-text');

  // Billing toggle functionality
  if (billingToggle) {
    billingToggle.addEventListener('click', toggleBilling);
    billingToggle.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleBilling();
      }
    });
  }

  function toggleBilling() {
    const isAnnual = billingToggle.classList.toggle('annual');
    billingToggle.setAttribute('aria-checked', isAnnual);
    
    // Update labels
    if (isAnnual) {
      monthlyLabel.classList.remove('active');
      annualLabel.classList.add('active');
      
      // Show annual prices
      priceMonthly.forEach(el => el.style.display = 'none');
      priceAnnual.forEach(el => el.style.display = 'inline');
      
      // Update period text
      pricePeriodTexts.forEach(el => {
        el.textContent = 'Billed annually';
      });
    } else {
      monthlyLabel.classList.add('active');
      annualLabel.classList.remove('active');
      
      // Show monthly prices
      priceMonthly.forEach(el => el.style.display = 'inline');
      priceAnnual.forEach(el => el.style.display = 'none');
      
      // Update period text
      pricePeriodTexts.forEach(el => {
        el.textContent = 'Billed monthly';
      });
    }
  }

  // Initialize monthly as active
  monthlyLabel.classList.add('active');

  // Fetch plan limits from backend and populate dynamic elements
  fetch(API_BASE_URL + '/auth/plan-info')
    .then(function(r) { return r.json(); })
    .then(function(data) {
      var plans = data.plans;
      if (!plans) return;

      var fmt = function(v) { return (v === null || v === undefined) ? 'Unlimited' : String(v); };

      var cardMap = {
        'free-users': function() { return fmt(plans.free.max_users) + ' user account'; },
        'free-recipes': function() { return 'Up to ' + fmt(plans.free.max_recipes) + ' recipes'; },
        'basic-users': function() { return 'Up to ' + fmt(plans.basic.max_users) + ' users'; },
        'basic-recipes': function() { return 'Up to ' + fmt(plans.basic.max_recipes) + ' recipes'; },
        'ai_plus-users': function() { return 'Up to ' + fmt(plans.ai_plus.max_users) + ' users'; },
        'ai_plus-recipes': function() { return 'Up to ' + fmt(plans.ai_plus.max_recipes) + ' recipes'; },
        'ai_plus-ai': function() { return '<strong>' + fmt(plans.ai_plus.max_ai_recipes_per_month) + ' AI Recipes per month</strong>'; },
      };

      document.querySelectorAll('[data-plan-limit]').forEach(function(el) {
        var key = el.getAttribute('data-plan-limit');
        if (cardMap[key]) el.innerHTML = cardMap[key]();
      });

      var faqMap = {
        'basic-recipes': function() { return fmt(plans.basic.max_recipes); },
        'basic-users': function() { return fmt(plans.basic.max_users); },
        'ai_plus-ai': function() { return fmt(plans.ai_plus.max_ai_recipes_per_month); },
        'ai_plus-users': function() { return fmt(plans.ai_plus.max_users); },
      };

      document.querySelectorAll('[data-faq-limit]').forEach(function(el) {
        var key = el.getAttribute('data-faq-limit');
        if (faqMap[key]) el.textContent = faqMap[key]();
      });

      // Populate add-on and AI credit bundle values
      var ra = data.recipe_addons || {};
      var ai = data.ai_credit_bundles || {};
      var addonMap = {
        'pack500-extra': ra.recipe_pack_500 ? ra.recipe_pack_500.extra_recipes.toLocaleString() : null,
        'pack500-price': ra.recipe_pack_500 ? String(ra.recipe_pack_500.price_monthly) : null,
        'pack1000-extra': ra.recipe_pack_1000 ? ra.recipe_pack_1000.extra_recipes.toLocaleString() : null,
        'pack1000-price': ra.recipe_pack_1000 ? String(ra.recipe_pack_1000.price_monthly) : null,
        'ai-small-credits': ai.ai_5 ? String(ai.ai_5.credits) : null,
        'ai-small-price': ai.ai_5 ? String(ai.ai_5.price_cents / 100) : null,
        'ai-large-credits': ai.ai_10 ? String(ai.ai_10.credits) : null,
        'ai-large-price': ai.ai_10 ? String(ai.ai_10.price_cents / 100) : null,
      };
      document.querySelectorAll('[data-addon]').forEach(function(el) {
        var key = el.getAttribute('data-addon');
        if (addonMap[key]) el.textContent = addonMap[key];
      });
    })
    .catch(function() { /* keep fallback HTML values */ });
});

/**
 * Subscribe to a plan
 * @param {string} plan - 'essentials', 'ai_plus', or 'unlimited'
 * @param {boolean} isAnnual - true for annual billing, false for monthly
 */
async function subscribeToPlan(plan, isAnnual) {
  const button = event.target;
  const originalText = button.textContent;
  button.disabled = true;
  button.textContent = 'Processing...';
  
  try {
    const response = await fetch(`${API_BASE_URL}/stripe/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        plan: plan,
        billing_period: isAnnual ? 'annual' : 'monthly'
      })
    });
    
    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }
    
    const data = await response.json();
    
    if (data.checkout_url) {
      window.location.href = data.checkout_url;
    } else {
      throw new Error('No checkout URL received');
    }
    
  } catch (error) {
    console.error('Subscription error:', error);
    alert('Unable to process subscription. Please try again or contact support.');
    button.disabled = false;
    button.textContent = originalText;
  }
}

window.subscribeToPlan = subscribeToPlan;
