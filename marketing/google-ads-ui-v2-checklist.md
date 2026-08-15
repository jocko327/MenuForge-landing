# Google Ads UI — v2 + Book Demo checklist

Do this **after** the costing LP and demo LP are live and **Account created** fires once in Tag Assistant.

Reference spec: [google-ads-campaign-v2.md](./google-ads-campaign-v2.md)

**Goal:** Spend ~$1000 credit with healthy delivery (fix “limited by maximum bid limit”).

---

## A. Pause v1 (keep for history)

1. Google Ads → **Campaigns**
2. Find the existing MenuForge Search campaign (v1)
3. **Pause** — do not remove or change keywords/budget after pausing
4. Optional: rename suffix `[v1 PAUSED]` or label `v1-lead-capture`

---

## B. Conversion actions

1. **Goals → Conversions → Summary**
2. Open v1 lead action (likely “Ad Lead” / thank-you lead):
   - Set to **Secondary / Observe** — do not use as campaign goal for v2
3. Confirm **`MenuForge — Account created`** exists (Sign-up, Count One, 30-day click window)
4. Confirm **`MenuForge — First recipe saved`** exists (Secondary until volume)
5. **+ New conversion action → Website** for demo:
   - Name: `MenuForge — Demo booked`
   - Category: **Submit lead form** or **Book appointment**
   - Count: **One**
   - Fire on Cal.com booking success (GTM / Cal.com → Google Ads tag, or thank-you page hit)
6. On **First Recipe** campaign: Goals = **`MenuForge — Account created` only**
7. On **Book Demo** campaign: Goals = **`MenuForge — Demo booked` only**

---

## C. Unstick existing `MF Search v2 — First Recipe` (do today)

If the campaign already exists, **edit settings** (do not recreate):

1. **Budget:** set **$32–35/day** (or $25/day if Demo also runs at $10/day for ~$35 combined)
2. **Bidding:** Maximize clicks — **raise max CPC to $8–12 or remove the cap** until Search Terms stay operator-heavy
3. **Devices:** Mobile **−50%** (was −80%/−100%). Desktop 0%. Tablet −50% to −100%
4. After **48 hours:** Review **Search terms** for this campaign only; add negatives
5. Do **not** raise above ~$35/day until Search terms look restaurant/brewery

If creating from scratch:

1. **Campaigns → + New campaign**
2. Objective: **Create a campaign without a goal’s guidance**
3. Type: **Search**
4. Conversion goals: **`MenuForge — Account created` only**
5. Name: **`MF Search v2 — First Recipe`**
6. Networks: Search ON | Search partners OFF | Display OFF
7. Locations: **United States** → Presence only
8. Languages: **English**
9. Budget: **$32–35/day**
10. Bidding: **Maximize clicks** | Max CPC **$8–12** or uncapped
11. Turn off AI Max / auto-created assets where offered

---

## D. Ad group A — Restaurant food cost

1. Name: `A — Restaurant food cost`
2. Keywords from v2 spec (phrase + exact pairs)
3. One RSA — final URL `https://menuforge.ai/lp-recipe-costing.html`, paths `food-cost` / `5-free`
4. Paste headlines/descriptions from v2 spec

---

## E. Ad group B — Brewery / bar

1. Name: `B — Brewery bar costing`
2. Brewery keywords from v2 spec
3. Same final URL; brewery-tilted headlines where they fit

---

## F. Campaign negative keywords

Campaign-level negatives from v2 spec. Prefer **exact** match for `[free]` / `[calculator]` so phrase keywords like “plate cost calculator restaurant” still serve.

Optional: shared list `MF junk intent v2` attached to First Recipe + Book Demo.

---

## G. Device bid adjustments (First Recipe)

| Device | Adjustment |
|---|---|
| Mobile | **−50%** |
| Desktop | 0% |
| Tablet | −50% to −100% |

---

## H. Create `MF Search — Book Demo` (~$10/day)

1. New Search campaign, same networks/location/language rules
2. Name: **`MF Search — Book Demo`**
3. Budget: **$10/day**
4. Bidding: Maximize clicks, max CPC **$8–12** or uncapped
5. Conversion goal: **`MenuForge — Demo booked` only**
6. One ad group: high-intent software keywords from v2 Book Demo section
7. Final URL: `https://menuforge.ai/lp-book-demo.html`
8. RSA headlines/descriptions from v2 Book Demo section
9. Mobile −50%

Requires Cal.com live on `lp-book-demo.html` first.

---

## I. Extensions (optional)

- Sitelinks: Pricing, How it works, Start free (costing LP), Book a demo
- Callouts: No credit card, True plate cost, Restaurants & breweries, Built by an operator
- **No** “free calculator” sitelinks
- **No** homepage (`index.html`) as final URL

---

## J. Launch / delivery checklist

- [ ] Tag Assistant: **Account created** recorded
- [ ] Costing LP loads; Google OAuth includes `source=Google-Free` + gclid
- [ ] Email path goes to **register**, not thank-you-only lead
- [ ] v1 **Paused** | First Recipe **Enabled**
- [ ] Budget $32–35/day (or $25 + $10 Demo) confirmed
- [ ] Max CPC raised/removed; “limited by maximum bid” cleared or improved
- [ ] Mobile −50% (not −100%)
- [ ] After 48h: Search terms review; negatives added
- [ ] Demo LP + Cal.com live before enabling Book Demo campaign
- [ ] Demo booked conversion fires once in a test book

---

## K. Compare campaigns

1. Campaigns report — date range covering v1 / First Recipe / Book Demo
2. Segment by campaign name
3. First Recipe: cost, CPC, Account created rate, cost/account
4. Book Demo: cost, CPC, Demo booked, show rate (manual)
5. Downstream: Mailchimp `Google-Free` signups and first recipes per dollar

---

## Do not

- Edit v1 keywords in place to “fix” the campaign
- Enable Search partners or Display
- Use Performance Max or YouTube for this credit
- Optimize First Recipe toward thank-you email lead
- Keep Mobile at −100% or max CPC at $4.50–$6 while delivery is starved
- Raise combined budget above ~$35/day until Search Terms look operator-heavy
- Point Search ads at `index.html`
