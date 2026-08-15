# MenuForge Google Ads — Search Campaign v2 (First Recipe) + Book Demo

**Replaces:** [google-ads-campaign.md](./google-ads-campaign.md) (v1 lead-capture campaign — pause, do not edit).

**Credit plan:** Spend ~$1000 Google Ads credit over ~4–5 weeks across **two Search campaigns** (70% self-serve / 30% demo). Do **not** revive v1. No PMax, Display, or Search partners.

**North-star funnels:**

1. **Self-serve:** Ad click → LP account → first **real** saved recipe → habit → paid upgrade.
2. **Demo:** Ad click → book 15-min walkthrough → show → paid upgrade.

**Offer (product truth):** Free tier = **up to 5 costed recipes** + unlimited ingredients, no card.

**Primary conversion (v2 First Recipe):** `MenuForge — Account created` (Google-Free social or email register from LP).  
**Secondary (observe until ~15–20 account conversions):** `MenuForge — First recipe saved`.  
**Demoted to observe-only:** LP email thank-you lead (`lp-thank-you.html`).  
**Primary conversion (Book Demo):** Calendly booking (website conversion on embed success / thank-you).

Landing pages (final URLs):

- Self-serve: `https://menuforge.ai/lp-recipe-costing.html`
- Demo: `https://menuforge.ai/lp-book-demo.html`

Tracking templates / UTMs:

```
https://menuforge.ai/lp-recipe-costing.html?utm_source=google&utm_medium=cpc&utm_campaign=mf-search-v2-first-recipe&utm_content={adgroupid}&utm_term={keyword}

https://menuforge.ai/lp-book-demo.html?utm_source=google&utm_medium=cpc&utm_campaign=mf-search-book-demo&utm_content={adgroupid}&utm_term={keyword}
```

---

## What v1 taught us

| Signal | v1 result |
|---|---|
| Spend / clicks | ~$566 / 309 @ $1.83 CPC |
| Intent | free / calculator / baking — tool seekers |
| Device | ~90% mobile |
| Ads email leads | 15 (~$38/lead) |
| Ads → registered | 1 (~$566/account) |
| Ads → first recipe | **0** |
| Optimized for | Thank-you **email lead** (wrong goal) |

## What early v2 delivery taught us (Aug 9–15, 2026)

| Signal | Result |
|---|---|
| Spend / clicks / impr. | ~$68 / 14 / 352 |
| CPC | ~$4.89 |
| Google diagnostics | Unable to spend daily budget; limited audience; **bidding limited by max bid** |
| Constraint | Max CPC ~$4.50–$6 + Mobile −80%/−100% + $20–25/day starved the auction |

v2 buys operator intent and measures activation — but **must unstick delivery** so the $1000 credit actually spends.

---

## Campaign A — `MF Search v2 — First Recipe` (~70% of spend)

- **Type:** Search only — **no** PMax, Display, or Search partners.
- **Locations:** United States — **Presence: people in or regularly in targeted locations**.
- **Language:** English.
- **Budget:** **$32–35/day** (~$1000 over ~4–5 weeks when combined with Demo at $10/day, including early spend).
- **Bidding:** **Maximize clicks**. **Raise or remove the max CPC cap** until Search Terms stay operator-heavy. Start **uncapped** or **$8–12** on Ad group A; tighten later if junk appears. The “limited by maximum bid limit” alert is why impressions die.
- **Devices:** **Mobile −50%** (not −100%). Desktop 0%. Tablet −50% to −100%. LP says “best on desktop”; total mobile exclusion starves the auction.
- **Schedule:** All day to start; bias to restaurant hours after 2 weeks if data supports.
- **Conversion goals (campaign):** **`MenuForge — Account created` only.** First recipe + old Ad Lead = observe-only.

Do **not** raise budget above ~$35/day until Search terms look like restaurants/breweries, not home cooks.

Step-by-step Google Ads UI checklist: [google-ads-ui-v2-checklist.md](./google-ads-ui-v2-checklist.md).

### Ad group A — Restaurant food cost (core)

Keywords — phrase `"..."` and exact `[...]` where listed:

```
"restaurant food cost software"
[restaurant food cost software]
"menu costing software"
[menu costing software]
"restaurant recipe costing"
"plate cost calculator restaurant"
"food cost percentage calculator"
```

**Responsive Search Ad**

- Final URL: `https://menuforge.ai/lp-recipe-costing.html`
- Paths: `food-cost` / `5-free`

Headlines (15, ≤30 chars):

```
Know Your True Plate Cost
Restaurant Food Cost Software
Cost Up to 5 Dishes Free
Menu Price From Target Margin
Built by an Operator
Stop Guessing Food Cost
True Plate Cost in Minutes
For Restaurants & Breweries
No Credit Card Required
Live Ingredient Costing
See Your Real Food Cost %
Cost, Price, Profit
Menu Costing Software
5 Recipes Free Forever
Restaurant Recipe Costing
```

Descriptions (4, ≤90 chars):

```
Cost up to 5 menu items free — true plate cost, food cost %, and suggested price.
Live ingredient prices flow into every recipe. Built for restaurants & breweries.
Start free in minutes. No credit card. Unlimited ingredients, 5 costed recipes.
Document recipes, prep, and margins. Cost real dishes free before you upgrade.
```

### Ad group B — Taproom food & bar cocktails

**Positioning:** MenuForge costs **food and cocktail recipes** for breweries/bars — not beer brewing / batch beer recipes.

Keywords:

```
"taproom food cost"
"brewery food cost"
"brewpub food cost"
"bar menu costing software"
"cocktail cost calculator bar"
"bar food cost software"
"taproom menu costing"
```

**Campaign negatives to add (if not already):**  
`beer recipe`, `homebrew`, `brewing software`, `brew sheet`, `IBU`, `grain bill`

**Responsive Search Ad**

- Final URL: `https://menuforge.ai/lp-recipe-costing.html`
- Paths: `food-cost` / `taproom`

Headlines (≤30 chars):

```
Taproom Food Cost Tool
Brewery Kitchen Costing
Bar Food Cost Software
Cost Cocktails Accurately
Know Your True Plate Cost
Cost Up to 5 Dishes Free
Food Cost for Breweries
Bar Menu Costing Software
Menu Price From Margin
No Credit Card Required
True Plate Cost in Minutes
Stop Guessing Food Cost
5 Recipes Free Forever
Built for Bars & Breweries
Built by an Operator
```

Descriptions:

```
Cost taproom food and bar cocktails — true plate cost, food cost %, suggested price.
Built for brewery kitchens and bars. Not for beer brewing recipes — food & drinks.
Start free: up to 5 costed recipes. No credit card. Unlimited ingredients.
Price wings, pretzels, and cocktails with live ingredient costs. Try free today.
```

---

## Campaign B — `MF Search — Book Demo` (~30% of spend)

- **Budget:** **$10/day**
- **Type:** Search only — no PMax / Display / Search partners
- **Locations / language:** Same as v2 (US presence, English)
- **Bidding:** Maximize clicks; max CPC uncapped or **$8–12** until delivery is healthy
- **Devices:** Mobile −50%, Desktop 0%, Tablet −50% to −100%
- **Final URL:** `https://menuforge.ai/lp-book-demo.html`
- **Conversion goal:** **Calendly booking** only. Observe Account created; do not optimize toward signup.

Keywords (high-intent software only — not “calculator”):

```
"restaurant food cost software"
[restaurant food cost software]
"menu costing software"
[menu costing software]
"recipe costing software"
[recipe costing software]
"restaurant recipe costing software"
```

**Responsive Search Ad** — promise walkthrough / operator / no pitch deck:

Headlines (≤30 chars):

```
Book a 15-Min Cost Walkthrough
We'll Cost One of Your Dishes
Restaurant Food Cost Software
Menu Costing — Live Demo
Built by an Operator
See True Plate Cost Live
No Pitch Deck — Real Dish
Food Cost Software Demo
For Restaurants & Breweries
Stop Guessing Food Cost
```

Descriptions (≤90 chars):

```
Book 15 minutes. We'll cost one dish from your menu live — plate cost, food cost %, price.
Operator-built food cost software. See live ingredient prices update every recipe.
No pitch deck. Bring a dish name and a recent invoice if you have one.
Restaurants and breweries — true plate cost in one short walkthrough.
```

---

## Campaign-level negative keywords (both campaigns)

Add as **campaign negatives**. Prefer **exact** junk for `free` / `calculator` stems when they would block good phrases like “food cost percentage calculator” / “plate cost calculator restaurant”. Use broad for clear home-cook junk:

```
[free]
[calculator]
app
apk
baking
home
how to
formula
excel
template
jobs
salary
youtube
pdf
dinner
crock pot
air fryer
meal prep
calorie
culinary school
free recipes
recipe ideas
home cook
home cooking
cooking class
meal plan
grocery
nutrition
calories
job
hiring
resume
chef jobs
app store
android app
iphone app
template excel
pdf download
how to cook
```

Review **Search terms** every 3–5 days (especially first 48 hours after bid/budget changes); add negatives aggressively.

**Kill v1 themes:** bare `recipe cost calculator`, `baking cost calculator`, soft `recipe management / free tool`.

---

## Assets (recommended)

**Sitelinks** (avoid “free calculator” messaging):

- Pricing → `https://menuforge.ai/pricing.html`
- How It Works → `https://menuforge.ai/index.html#how-it-works`
- Start Free → `https://menuforge.ai/lp-recipe-costing.html`
- Book a demo → `https://menuforge.ai/lp-book-demo.html`

**Callouts:** `No credit card`, `True plate cost`, `Restaurants & breweries`, `Built by an operator`, `Up to 5 recipes free`.

**Do not** sitelink to soft “free calculator” pages. **Do not** use `index.html` as a campaign final URL.

---

## Conversion tracking (required)

| Conversion | Where it fires | Campaign use |
|---|---|---|
| Account created | App after Google-Free social signup or email register (`source=Google-Free`) | **Primary** for First Recipe |
| First recipe saved | App on first real recipe save (attributed users) | Secondary / optimize later |
| Calendly booking | Demo LP embed success / thank-you | **Primary** for Book Demo |
| LP email lead | `lp-thank-you.html` | Observe only |
| Purchase | Stripe | Observe only until volume |

### One-time env config (preferred)

After creating conversion actions in Google Ads, put labels in **`backend/.env`**:

```bash
MF_ADS_CONVERSION_ID=AW-18099085313
MF_ADS_LEAD_CONVERSION_LABEL=kzHQCI2Og7kcEIHAqLZD
MF_ADS_ACCOUNT_CONVERSION_LABEL=PASTE_ACCOUNT_LABEL_HERE
MF_ADS_FIRST_RECIPE_CONVERSION_LABEL=PASTE_FIRST_RECIPE_LABEL_HERE
MF_GA4_ID=G-BVJ0H65CZ8
```

Served at runtime by `GET /auth/config`. Restart backend after editing `.env`.

### Verify with Tag Assistant

1. **Social signup:** LP → Continue with Google → complete company name → **Account created** on `app.menuforge.ai`.
2. **Email path:** LP email → **register** with `?src=Google-Free` (not thank-you-only lead) → **Account created**.
3. **First recipe:** Save first real recipe as attributed user → **First recipe saved** fires once.
4. **Demo:** Complete Calendly book on `lp-book-demo.html` → booking conversion fires.

---

## Product video shot list (costing LP)

Record once (desktop, no face required), 45–60s, 1080p mp4, captions on, no stock music. Host at `landing/assets/video/cost-first-dish.mp4`.

1. **0–5s** — Blank MenuForge recipe. Name a real dish (beer-cheese soup or house burger).
2. **5–20s** — Add 4–5 ingredients with pack cost → plate cost and food cost % appear.
3. **20–35s** — Change one ingredient price; show the plate cost move live.
4. **35–50s** — Target margin → suggested menu price.
5. **50–60s** — End card: “Cost up to 5 dishes free. No card.” + menuforge.ai

Embed on `lp-recipe-costing.html` above the fold after the file is recorded.

---

## Success criteria (4 weeks)

- Combined spend ~**$200–250/week** (credit actually used)
- Search terms mostly restaurant / menu / brewery (not baking / free calculator)
- Account create rate from clicks (First Recipe): **≥ 5%**
- Of Google-Free accounts: **≥ 40%** create a real recipe in 7 days
- Cost per account **< ~$80–100** early; cost per first-recipe account trending down
- Demo campaign: booked calls + show rate tracked
- ≥ 1 paid upgrade is a stretch goal

**Kill switch:** If first-recipe rate stays **< 20%** after intent cleanup → pause First Recipe self-serve, keep Demo only, fix activation.

---

## Weekly review

Use [google-ads-weekly-scorecard.md](./google-ads-weekly-scorecard.md) every week (both campaigns).

---

## Budget math (credit reset)

- First Recipe **$25/day** + Book Demo **$10/day** ≈ **$35/day** ≈ **$1000 / ~29 days**
- Or First Recipe **$32/day** + Demo **$10/day** if you want faster credit burn after Search Terms look clean
- Operator-intent CPC often **$5–12** once the bid cap is raised — expect fewer, better clicks than v1
- Compare campaigns side-by-side by name — do not merge

---

## Out of scope

- Meta / LinkedIn paid budget (pixels stay)
- PMax / Display / YouTube
- Multiple feature LPs (receipts, Facebook, AI) for Search ads
- Homepage as ad final URL
- Full Mailchimp journey rebuild
- Stripe pricing changes
