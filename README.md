# MenuForge Marketing Site

Static marketing website for MenuForge at **menuforge.ai**

## Overview

This is a modern, SEO-optimized static marketing site featuring:
- Landing page showcasing AI-powered recipe management
- Pricing page with Stripe integration for subscriptions
- Dark theme with animated gradients matching the login page
- Fully responsive design for mobile, tablet, and desktop

## File Structure

```
marketing-site/
├── index.html              # Landing page
├── pricing.html            # Pricing page with subscription tiers
├── robots.txt              # SEO: Search engine directives
├── sitemap.xml             # SEO: Site structure for crawlers
├── assets/
│   ├── css/
│   │   └── main.css        # Core styles and animations
│   ├── js/
│   │   ├── main.js         # Navigation and interactions
│   │   └── pricing.js      # Billing toggle and Stripe checkout
│   └── images/
│       ├── menuforge-icon-192.png  # Brand logo (small)
│       ├── menuforge-icon-512.png  # Brand logo (large)
│       └── favicon.ico             # Browser icon
└── README.md               # This file
```

## Features

### Landing Page (`index.html`)
- **SEO Optimized**: All 7 target keywords integrated naturally
- **Hero Section**: Animated logo with call-to-action buttons
- **Features Grid**: 8 feature cards highlighting:
  - AI Recipe Generation
  - Recipe Pricing & Cost Analysis
  - Recipe Creation & Management
  - Ingredients Management
  - Team Collaboration
  - Cost Analytics
  - Custom Branding
- **How It Works**: 3-step workflow visualization
- **App Screenshots**: Placeholder sections for interface mockups
- **Schema.org Markup**: Structured data for search engines

### Pricing Page (`pricing.html`)
- **Billing Toggle**: Monthly vs Annual (10% savings)
- **Three Tiers**:
  - **Free**: 1 user, 5 recipes
  - **Basic**: $69.95/mo, 3 users, unlimited recipes
  - **Premium**: $129.95/mo, 10 users, AI features
- **Stripe Integration**: Direct checkout flow
- **FAQ Section**: Common questions about billing and features

### Design System
- **Colors**:
  - Background: `#0f0f23` to `#1a1a2e` gradient
  - Primary Accent: `#F1C671` (gold)
  - Secondary Accent: `#198754` (green)
- **Typography**:
  - Headings: Playfair Display
  - Body: Open Sans
- **Animations**:
  - Floating gradient orbs
  - Smooth transitions on hover
  - Fade-in effects on scroll

## SEO Keywords (Integrated)

1. Recipe Management
2. Recipe Pricing
3. AI Recipe Generation
4. Recipe Creation
5. Ingredients Management
6. Recipe Generation

## Deployment

### Option 1: Netlify (Recommended)
1. Connect your repository
2. Build command: (none - static site)
3. Publish directory: `marketing-site`
4. Set custom domain: `menuforge.ai`

### Option 2: Vercel
1. Import project from Git
2. Framework preset: Other
3. Root directory: `marketing-site`
4. Deploy

### Option 3: AWS S3 + CloudFront
```bash
# Build/deploy
aws s3 sync . s3://menuforge.ai --exclude "README.md"
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

### Option 4: Any Static Host
Simply upload all files (except README.md) to your web server's public directory.

## DNS Configuration

Point your domain to the static site:
```
A Record:  @ → [Static Host IP]
CNAME:     www → menuforge.ai
```

Subdomain for app:
```
CNAME:     app → [Digital Ocean App Domain]
```

## Backend Integration

The pricing page connects to Stripe endpoints at `app.menuforge.ai`:
- `POST /stripe/create-checkout-session` - Creates Stripe checkout
- `POST /stripe/webhook` - Handles subscription events

### Required Environment Variables

Backend needs these Stripe variables (see `../.env.example`):
```
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRICE_BASIC_MONTHLY=price_...
STRIPE_PRICE_BASIC_ANNUAL=price_...
STRIPE_PRICE_PREMIUM_MONTHLY=price_...
STRIPE_PRICE_PREMIUM_ANNUAL=price_...
```

### Setting Up Stripe

1. Create Stripe account at dashboard.stripe.com
2. Create Products:
   - Basic Plan - $69.95/month, $62.96/month (annual)
   - Premium Plan - $129.95/month, $116.96/month (annual)
3. Copy Price IDs to environment variables
4. Set up webhook endpoint at `https://app.menuforge.ai/stripe/webhook`
5. Copy webhook signing secret to `STRIPE_WEBHOOK_SECRET`

## Testing Locally

```bash
# Simple HTTP server (Python)
cd marketing-site
python3 -m http.server 8080

# Or with Node.js
npx http-server -p 8080
```

Visit: `http://localhost:8080`

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Target Lighthouse score: 90+
- Page load: <2 seconds
- First Contentful Paint: <1.5 seconds

## Maintenance

### Updating Prices
Edit `pricing.html`:
- Lines 189-191: Free tier details
- Lines 204-224: Basic tier (monthly/annual prices)
- Lines 238-258: Premium tier (monthly/annual prices)

### Adding Screenshots
1. Place images in `assets/images/screenshots/`
2. Replace placeholder divs in `index.html` (lines 339-372)
3. Update alt text with SEO keywords

### Modifying SEO
- **Title**: Line 6 in `index.html`
- **Description**: Line 7 in `index.html`
- **Keywords**: Line 8 in `index.html`
- **Structured Data**: Lines 35-62 in `index.html`

## Support

For questions or issues:
- Email: support@menuforge.ai
- Repository: [Your repo URL]

## License

Copyright © 2026 MenuForge. All rights reserved.

## Separate git repository (no app staging cycle)

This directory is its **own git repo** (`MenuForge-landing`), independent of the
MenuForge app repo (`MenuForge`).

| | App (`MenuForge`) | Marketing (`MenuForge-landing`) |
|---|---|---|
| Path on prod | `/opt/recipe-app` | `/opt/recipe-app/landing` |
| Branch model | `staging` → `main` | `main` only (ship directly) |
| Deploy | `scripts/deploy-production.sh` | `scripts/deploy-landing.sh` |
| Site | `app.menuforge.ai` | `menuforge.ai` |

App deploys must never overwrite this tree. The app repo gitignores `/landing/`
and production app deploy preserves/restores it around `git pull`.

### Publish a marketing change

```bash
cd /opt/recipe-app/landing   # or your local clone
# edit pages…
git add -A
git commit -m "Describe the marketing change"
git push origin main
# on the production box:
/opt/recipe-app/scripts/deploy-landing.sh
```

Do **not** put marketing HTML through app `staging` → `main` promotion.

### Ads attribution helpers

- `assets/js/ads-config.js` — Google Ads / Meta / LinkedIn IDs
- `assets/js/ads-attribution.js` — persists `gclid` + UTMs onto social OAuth links
- `lp-recipe-costing.html` — paid search LP (`source=Google-Free` on social buttons)
- `lp-thank-you.html` — fires Ads conversion for **email** form leads

Social signups from the ads LP complete on `app.menuforge.ai` and fire the same
conversion from the React app when `signup_source` is `Google-Free`.
