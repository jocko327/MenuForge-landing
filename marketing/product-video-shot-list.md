# Product video — Cost first dish (ads LP)

Record once for `https://menuforge.ai/lp-recipe-costing.html`.

**File to upload:** `landing/assets/video/cost-first-dish.mp4`  
**Deploy:** push to MenuForge-landing `main`, then `scripts/deploy-landing.sh`.

## Specs

- Length: **45–60 seconds**
- Resolution: **1080p** mp4
- Desktop only, **no face required**
- **Captions on** (ads traffic is often muted)
- No stock music
- Use a real dish (beer-cheese soup or house burger)

## Shot list

| Time | Action |
|---|---|
| **0–5s** | Blank MenuForge recipe. Type the dish name. |
| **5–20s** | Add 4–5 ingredients with pack cost → plate cost and food cost % appear. |
| **20–35s** | Change one ingredient price; show the plate cost move live. |
| **35–50s** | Set target margin → show suggested menu price. |
| **50–60s** | End card on screen or title: “Cost up to 5 dishes free. No card.” + menuforge.ai |

## After recording

1. Export `cost-first-dish.mp4`
2. Place at `landing/assets/video/cost-first-dish.mp4`
3. Commit + push MenuForge-landing; run `deploy-landing.sh`
4. Hard-refresh the LP — the video player replaces the “coming soon” fallback

See also: [google-ads-campaign-v2.md](./google-ads-campaign-v2.md) (Video section).
