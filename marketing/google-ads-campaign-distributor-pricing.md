# MenuForge Google Ads — Search Campaign C (Distributor Top 10)

**Companion to:** [google-ads-campaign-v2.md](./google-ads-campaign-v2.md) (First Recipe + Book Demo). Do **not** merge this into those campaigns. Different intent, different landing page, different promise.

**UI checklist:** [google-ads-ui-distributor-pricing.md](./google-ads-ui-distributor-pricing.md)

**Credit plan:** Keep combined Search spend near the existing ~$35/day unless Search Terms on this campaign stay operator-heavy for a week. Fund this at **$10–12/day** by dropping First Recipe from $32–35 to **$22–25**, or by pausing overlapping Book Demo keywords. Do **not** add this on top of a full $35/day burn if credit is tight.

**North-star funnel:** Ad click → this case-study page → **book a 20-min walkthrough** → show invoice-backed Top 10 / drift → paid upgrade (AI+ / Unlimited, where Receipts live).

**Product truth (do not lie in ads):**
- Receipts / Top 10 spend is **not** on Free or Essentials.
- Do **not** say “start free and see your Top 10.”
- Free tier is still 5 costed recipes. That is a sitelink, not this campaign’s offer.
- $8,800 / ~14% is **Presidential Brewing Company’s** result, not a guarantee.

**Primary conversion:** `MenuForge — Demo booked` (same Cal.com action as Book Demo).  
**Observe only:** Account created, First recipe saved, LP email lead, Stripe purchase.

**Landing page (final URL):**
`https://menuforge.ai/negotiate-distributor-pricing.html`

Tracking template / UTMs:

```
https://menuforge.ai/negotiate-distributor-pricing.html?utm_source=google&utm_medium=cpc&utm_campaign=mf-search-distributor-top10&utm_content={adgroupid}&utm_term={keyword}
```

Do **not** use `index.html` or `lp-recipe-costing.html` as this campaign’s final URL.

---

## Why this campaign exists

v2 buys “food cost software / plate cost.” This page buys a sharper pain:

Most distributors do not give you a Top 10 or a spend list. Operators hunt invoice by invoice. MenuForge already ranked it. Presidential emailed that list and came back about 14% tighter on the ten they buy the most, about $8,800 in a year.

That is a different searcher than someone looking for a recipe cost calculator.

---

## Campaign settings — `MF Search — Distributor Top 10`

- **Type:** Search only. **No** PMax, Display, Search partners, or Demand Gen.
- **Locations:** United States — **Presence: people in or regularly in targeted locations**.
- **Language:** English.
- **Budget:** **$10–12/day** to start.
- **Bidding:** **Maximize conversions**. **No target CPA** yet (a CPA target with zero bookings will stall spend). **No max CPC cap.** Conversion used for bidding: **`MenuForge — Demo booked` only.** Account created, first recipe, and the old email lead stay observe-only so the algorithm cannot chase them.
- **Devices:** Mobile **−50%**. Desktop 0%. Tablet −50% to −100%. This page is screenshot-heavy; desktop is the better walkthrough, but a −100% mobile cut kills the auction.
- **Schedule:** All day to start.
- **Conversion goal (campaign):** **`MenuForge — Demo booked` only.**
- **Ad rotation:** Optimize.
- Turn off AI Max / auto-created assets where Google offers them.

We are bidding on conversions from day one on purpose. The win is a booked call, not a cheap click. Expect uneven spend in the first 1–2 weeks while Google has no demo history. If impressions die or you see “limited by bid strategy,” do **not** add a Target CPA. Check that Demo booked is the only campaign goal, then wait or raise budget slightly. Review Search Terms at 48 hours so it does not learn on login / invoice-template junk.

Do **not** raise this above ~$15/day until Search Terms look like restaurants, taprooms, and purchasing — not accounting, invoice templates, or Sysco login.

---

## Ad group A — Hunt invoices / Top 10 spend

**Name:** `A — Invoice top 10 spend`

Keywords — phrase `"..."` and exact `[...]` where listed:

```
"restaurant invoice tracking"
[restaurant invoice tracking]
"restaurant food cost invoices"
"ingredient cost tracking restaurant"
"restaurant vendor spend"
"food cost from invoices"
"track food invoices restaurant"
"restaurant invoice software"
"ingredient price tracking restaurant"
```

**Responsive Search Ad**

- Final URL: `https://menuforge.ai/negotiate-distributor-pricing.html`
- Paths: `top-10` / `invoices`

Headlines (15, ≤30 chars). Pain or the $8,800 win. No process lines.

```
You Are Paying Too Much
You Pay Too Much On Top 10
Paying Too Much For Cases
Your Top 10 Cost Too Much
Overpaying On What You Buy
Stop Overpaying On Top Items
Cases You Buy Cost Too Much
You Can Save $8,800/Year
You Can Save $8,800 Per Year
Save $8,800 Per Year
Save About $8,800 A Year
$8,800 A Year On Your Top 10
Paying Too Much. Save $8,800
Book 20 Min. Stop Overpaying
One Kitchen: $8,800 A Year
```

Descriptions (4, ≤90 chars):

```
You are paying too much on the items you order most. See the Top 10 and the drift.
You can save about $8,800 a year. Presidential cut ~14% on the ten they buy most.
Most kitchens overpay and never see a Top 10. Book 20 minutes and walk the list.
Stop hunting invoices. You are paying too much on volume you already buy.
```

---

## Ad group B — Distributor / vendor pricing

**Name:** `B — Distributor pricing`

Keywords:

```
"negotiate distributor pricing"
"restaurant distributor pricing"
"food distributor price increase"
"vendor price tracking restaurant"
"restaurant purchasing software"
"food cost drift restaurant"
"restaurant vendor price tracking"
"distributor case price increase"
```

**Responsive Search Ad**

- Final URL: same
- Paths: `pricing` / `top-10`

Headlines (15, ≤30 chars). Same two ideas, different wording so Google does not flag duplicates.

```
You Are Paying Too Much
You Pay Too Much For Cases
Paying Too Much Every Week
Distributor Bills Run High
Overpaying On Your Top Cases
Stop Overpaying On Volume
You Overpay On What You Order
You Can Save $8,800/Year
Save $8,800 Per Year
You Can Save $8,800 A Year
About $8,800 Back In A Year
$8,800 Less On The Top 10
Cut About 14%. Save $8,800
Book Time. Stop Overpaying
A Kitchen Saved $8,800
```

Descriptions (4, ≤90 chars):

```
You are paying too much for the cases you buy every week. That is the meeting.
One kitchen saved about $8,800 a year after they sent their Top 10 spend list.
Distributors will not show your Top 10. You keep overpaying invoice by invoice.
Book 20 minutes. See if you are paying too much, and what $8,800 a year looks like.
```

---

## Ad group C — Sysco / US Foods (optional, pause-ready)

**Name:** `C — Broadline invoices`

Bid on the brands. **Do not** put Sysco or US Foods in headlines or descriptions (trademark).

Keywords:

```
"sysco invoice tracking"
"sysco price increase restaurant"
"us foods invoice tracking"
"us foods price increase"
"broadline invoice tracking"
```

**Campaign negatives for this group (add as ad-group negatives if C is on):**

```
login
pay
payment
careers
jobs
jobs near me
driver
delivery
order guide
cut off
```

Use the same RSA as Ad group A. Pause C after 7 days if Search Terms are “sysco login,” “pay my bill,” or driver jobs.

---

## Campaign-level negative keywords

Attach the shared `MF junk intent v2` list if it exists. Also add these (this campaign is invoice-shaped and will attract accounting / AP junk):

```
[free]
[calculator]
app
apk
home
how to
formula
excel
template
jobs
salary
youtube
pdf
invoice template
invoice generator
create invoice
send invoice
free invoice
quickbooks
xero
bill.com
accounts payable
ap clerk
payroll
accounting software
bookkeeping
tax
irs
login
pay invoice
pay my bill
customer service
phone number
careers
driver
cdl
warehouse
home cook
meal prep
calorie
grocery
nutrition
culinary school
recipe ideas
baking
```

Review **Search terms** at 48 hours, then every 3–5 days. Add negatives aggressively.

**Do not** add bare `invoice` as a negative (it will wipe the campaign). Prefer `invoice template`, `create invoice`, `pay invoice`.

---

## Assets

**Sitelinks**

- Book a walkthrough → `https://menuforge.ai/lp-book-demo.html`
- Pricing → `https://menuforge.ai/pricing.html`
- This case study → `https://menuforge.ai/negotiate-distributor-pricing.html`

**Callouts:** `Invoice-backed Top 10`, `No hunting invoices`, `Restaurants & breweries`, `Built by an operator`, `Case counts and drift`

**Do not** sitelink “free calculator.” **Do not** promise receipts on the free plan.

---

## Conversion tracking

Same stack as v2. No new conversion action.

| Conversion | Campaign use |
|---|---|
| `MenuForge — Demo booked` | **Primary** |
| Account created | Observe |
| First recipe saved | Observe |
| LP email lead | Observe |
| Stripe purchase | Observe |

The case-study page embeds the same Cal.com / Calendly widget as `lp-book-demo.html` (full width). `booking-embed.js` fires **`MenuForge — Demo booked`** on this page when the booking succeeds. `ads-attribution.js` keeps `gclid` / UTMs on `menuforge.ai`.

Verify once with Tag Assistant: ad preview or `?gclid=test` on the case-study URL → Book a walkthrough → complete a test Cal.com book → `Demo booked` recorded.

---

## What not to copy from v1 / v2

- Do not optimize this campaign toward Account created or thank-you email leads.
- Do not reuse “Cost up to 5 dishes free” as the hero line. Wrong offer.
- Do not point First Recipe keywords at this page (splits data, mismatches the free-tier promise).
- Do not enable Search partners to “help spend the credit.”

---

## Success criteria (first 14 days)

- Spend actually happens (~$70–85/week at $10–12/day)
- Search Terms: restaurant / taproom / purchasing / invoices — not login, pay bill, invoice templates
- CTR not the goal; **demo booked** is
- Cost per booked demo: track, no hard kill number in week 1
- At least one show where the walkthrough opens Receipts / Top 10

**Kill / reshape:** If after ~$150 spend the terms are accounting/AP or Sysco login, pause C, add negatives, keep A+B only. If demos book but no-show, keep spend and fix the booking reminder — do not widen keywords.

---

## Weekly review

Use [google-ads-weekly-scorecard.md](./google-ads-weekly-scorecard.md). Add a row block for **`MF Search — Distributor Top 10`**: spend, CPC, Demo booked, cost/demo, Search Terms.

---

## Out of scope

- PMax / Display / YouTube / Demand Gen
- Meta or LinkedIn budget
- Bidding on “recipe cost calculator” here
- Homepage as final URL
- Claiming every kitchen will save $8,800
