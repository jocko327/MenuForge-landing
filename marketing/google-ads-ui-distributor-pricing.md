# Google Ads UI — Distributor Top 10 checklist

Do this **after** `negotiate-distributor-pricing.html` is live and **`MenuForge — Demo booked`** already fires from `lp-book-demo.html` (same action as Book Demo).

Reference spec: [google-ads-campaign-distributor-pricing.md](./google-ads-campaign-distributor-pricing.md)

**Goal:** A third Search campaign for invoice / Top 10 / distributor-pricing intent. Do not merge into First Recipe or Book Demo.

---

## A. Budget so credit still lasts

1. If First Recipe + Book Demo already total ~$35/day, **cut First Recipe to $22–25/day** before enabling this.
2. Set this campaign to **$10–12/day**.
3. Combined should stay near **$35–37/day** until Search Terms on this campaign look clean.

---

## B. Create the campaign

1. **Campaigns → + New campaign**
2. Objective: **Create a campaign without a goal’s guidance**
3. Type: **Search**
4. Conversion goals: **`MenuForge — Demo booked` only** (uncheck Account created / Ad Lead)
5. Name: **`MF Search — Distributor Top 10`**
6. Networks: Search ON | Search partners OFF | Display OFF
7. Locations: **United States** → Presence only
8. Languages: **English**
9. Budget: **$10–12/day**
10. Bidding: **Maximize clicks** | Max CPC **$8–12** or uncapped
11. Turn off AI Max / auto-created assets where offered
12. Devices after create: Mobile **−50%**, Desktop 0%, Tablet −50% to −100%

---

## C. Ad group A — Invoice top 10 spend

1. Name: `A — Invoice top 10 spend`
2. Keywords from spec (phrase + exact pairs)
3. One RSA
4. Final URL: `https://menuforge.ai/negotiate-distributor-pricing.html`
5. Paths: `top-10` / `invoices`
6. Paste headlines and descriptions from spec Ad group A

---

## D. Ad group B — Distributor pricing

1. Name: `B — Distributor pricing`
2. Keywords from spec
3. Same final URL; paths `pricing` / `top-10`
4. Paste headlines and descriptions from spec Ad group B

---

## E. Ad group C — optional

1. Create only if you want broadline-brand queries
2. Name: `C — Broadline invoices`
3. Keywords from spec; **no** Sysco / US Foods in ad copy
4. Add the ad-group login/pay/careers negatives from the spec
5. Pause after 7 days if Search Terms are login / pay bill / jobs

---

## F. Negatives and extensions

1. Attach shared list `MF junk intent v2` if it exists
2. Add the invoice/accounting negatives from the spec at **campaign** level
3. Sitelinks: Book a walkthrough, Pricing, this case study. No Start free sitelink on this campaign.
4. Callouts from spec
5. No homepage final URL. No “free calculator.” No “free Top 10.”

---

## G. Launch checklist

- [ ] Case-study page live at `/negotiate-distributor-pricing.html`
- [ ] Tag Assistant: `gclid` on that URL persists to Book a walkthrough
- [ ] Test Cal.com book still records **`MenuForge — Demo booked`**
- [ ] First Recipe budget reduced if needed so combined stay ~$35/day
- [ ] This campaign **Enabled**; Search partners / Display **off**
- [ ] Max CPC $8–12 or uncapped (not $4.50)
- [ ] Mobile −50% (not −100%)
- [ ] After 48h: Search terms review; add negatives
- [ ] No $8,800 claim written as a guarantee in sitelinks or callouts

---

## Do not

- Point First Recipe ads at this page
- Optimize toward Account created or thank-you email lead
- Promise receipts on the free plan
- Enable PMax / Display / Search partners
- Use `index.html` as the final URL
