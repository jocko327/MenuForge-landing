# MenuForge Google Ads - Search Campaign Spec ($1000/mo)

Everything below is ready to paste into Google Ads (or Google Ads Editor). Character
limits are respected: headlines <= 30, descriptions <= 90, paths <= 15.

Landing page (final URL):
`https://menuforge.ai/lp-recipe-costing.html`
With tracking template / UTMs:
`https://menuforge.ai/lp-recipe-costing.html?utm_source=google&utm_medium=cpc&utm_campaign=recipe-costing&utm_content={adgroupid}&utm_term={keyword}`

---

## Campaign settings

- Campaign type: **Search** only.
- Networks: **uncheck** "Search partners" and **uncheck** "Display network expansion" (avoid low-quality clicks on a small budget).
- Locations: **United States** (set targeting to "Presence: people in your targeted locations", not "presence or interest").
- Language: **English**.
- Budget: **$33/day** (= ~$1,000/mo). One shared campaign budget across all ad groups.
- Bidding: start **Maximize clicks with a max CPC limit of $4.50**. After ~20 conversions accrue, switch to **Maximize conversions** (and later Target CPA once stable).
- Ad rotation: Optimize.
- Ad schedule: all day to start; tighten to business hours after 2-3 weeks of data.
- Conversion: the primary conversion action is the lead captured on `lp-thank-you.html`
  (see "Conversion tracking" at the bottom). Set this campaign to optimize for that action.

---

## Ad group A - Recipe Costing Software

Keywords (add as listed; `[...]` = exact, `"..."` = phrase):
```
"recipe costing software"
[recipe costing software]
"recipe cost calculator"
"food costing software"
"plate cost calculator"
"recipe costing tool"
```

Responsive Search Ad
- Final URL: `https://menuforge.ai/lp-recipe-costing.html`
- Paths: `/recipe-costing` `/free`

Headlines (15):
```
Recipe Costing Software
Know Your True Plate Cost
Recipe Cost Calculator
Stop Guessing Food Cost
Plate Cost in Minutes
Free Recipe Costing Tool
Cost Every Recipe Exactly
Live Ingredient Costing
Built for Restaurants
For Restaurants & Breweries
Try Free - No Credit Card
Suggested Menu Pricing
Recipe Costing Made Simple
See Your Real Food Cost %
Cost, Price, Profit
```

Descriptions (4):
```
Document recipes and see true plate cost, food cost %, and suggested menu price.
Live ingredient prices flow into every recipe. Stop guessing your food cost.
Start free in minutes. No credit card. Built by a real food-service operator.
Plate cost, margins, build sheets, and AI recipes in one tool. Try it free.
```

---

## Ad group B - Restaurant Food Cost

Keywords:
```
"restaurant food cost software"
"menu costing software"
[menu costing software]
"food cost management software"
"restaurant food costing"
"food cost software"
```

Responsive Search Ad
- Final URL: `https://menuforge.ai/lp-recipe-costing.html`
- Paths: `/food-cost` `/restaurants`

Headlines (15):
```
Restaurant Food Cost Tool
Menu Costing Software
Control Your Food Cost
Food Cost Management
Know Your Plate Cost
Stop Menu Margin Leaks
Price Your Menu Right
Free Food Cost Software
For Restaurants & Bars
True Cost Per Plate
Try Free - No Card Needed
Recipe & Menu Costing
Food Cost % at a Glance
Built by an Operator
Protect Your Margins
```

Descriptions (4):
```
See real food cost % per dish and the menu price that hits your target margin.
Live ingredient costs, sub-recipes, and build sheets for the whole menu.
Start free - unlimited ingredients and real costing, no expiration.
Built for restaurants and breweries. Cost, price, and profit with confidence.
```

---

## Ad group C - Recipe Management (add if budget allows)

Keywords:
```
"recipe management software"
"restaurant recipe software"
"digital recipe book for restaurants"
"recipe software for restaurants"
```

Responsive Search Ad
- Final URL: `https://menuforge.ai/lp-recipe-costing.html`
- Paths: `/recipes` `/free`

Headlines (15):
```
Recipe Management Software
Recipes for Restaurants
Digital Recipe Book
One Home for Every Recipe
Recipes, Costs, Prep
Keep Recipes Consistent
Build Sheets for the Line
AI Recipe Generation
Never Lose a Recipe Again
Costed Recipe Library
Free to Start
For Restaurants & Breweries
Standardize Your Kitchen
Recipes + Plate Costing
Try Free - No Credit Card
```

Descriptions (4):
```
Store every recipe with prep steps, costs, and scaling in one place.
When staff leave, your recipes stay. Consistent prep and real plate cost.
Describe a dish and AI drafts a full costed recipe. Start free today.
Build sheets for the line, costing for the office. Try free, no card.
```

---

## Campaign-level negative keywords

Add these as a **campaign negative keyword list** to keep home cooks, job seekers,
and free-content browsers out:
```
free recipes
recipe ideas
dinner recipes
home cook
home cooking
cooking class
culinary school
meal plan
meal prep
grocery
nutrition
calorie
calories
jobs
job
salary
hiring
resume
chef jobs
app store
android app
iphone app
template excel
youtube
pdf download
how to cook
crock pot
air fryer
```
Tip: review the **Search terms report** every 3-5 days for the first month and add
any irrelevant queries as negatives.

---

## Assets (recommended, raise CTR + Quality Score)

Sitelinks (point all to menuforge.ai pages):
- "Pricing" -> `https://menuforge.ai/pricing.html`
- "How It Works" -> `https://menuforge.ai/index.html#how-it-works`
- "AI Features" -> `https://menuforge.ai/index.html#ai-features`
- "Start Free" -> `https://menuforge.ai/lp-recipe-costing.html`

Callouts: `Free Plan`, `No Credit Card`, `True Plate Cost`, `Built by an Operator`,
`For Restaurants & Breweries`, `AI Recipe Generation`.

Structured snippet (Header: "Features"): Recipe Costing, Menu Pricing, Build Sheets,
Dietary Flags, AI Recipes, Vendor Costs.

---

## Budget math / expectations (month 1)

- $33/day x ~30 days = ~$1,000.
- B2B CPCs in this niche typically run ~$4-6 -> ~170-250 clicks/month.
- At ~8-12% landing page conversion -> roughly **15-30 leads** in month 1.
- Treat month 1 as a learning test: prune weak keywords, keep winners, then move to
  conversion-based bidding once you have ~20 conversions.

---

## Conversion tracking (one-time setup, REQUIRED before launch)

1. Google Ads -> Goals -> Conversions -> + New conversion action -> "Website".
2. Category: "Submit lead form" (or "Sign-up"). Tracking method: "Use Google tag" ->
   install manually. Google shows a **Conversion ID** (`AW-XXXXXXXXX`) and
   **Conversion label**.
3. Paste both into `landing/assets/js/ads-config.js` **and**
   `frontend/public/ads-config.js` (keep in sync):
   - `window.MF_ADS_CONVERSION_ID = 'AW-XXXXXXXXX';`
   - `window.MF_ADS_CONVERSION_LABEL = 'your-label';`
4. Publish production marketing pages via the **MenuForge-landing** repo
   (`scripts/deploy-landing.sh`) — not via app `deploy-production.sh`.
   App-side conversion support ships with the normal frontend deploy.
5. Verify with Google Tag Assistant:
   - Email form: conversion on `lp-thank-you.html`
   - Social signup from the ads LP (`source=Google-Free`): conversion on
     `app.menuforge.ai` after company-name completion (same conversion action).
   - `gclid` + UTMs are appended to social OAuth links via
     `landing/assets/js/ads-attribution.js`.

Until step 3 is filled in, GA4 still records the lead (`generate_lead` event) but the
Google Ads conversion is skipped (no errors, no phantom conversions).
