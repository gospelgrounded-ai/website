# Gospel Grounded

The official website for [gospelgrounded.com.au](https://gospelgrounded.com.au) —
a gospel-centred teaching ministry.

Built with **Next.js 14** (App Router), **TypeScript**, and **Tailwind CSS**.
Commerce is powered by **Snipcart** (cart/checkout/payments) with **Printful**
(print-on-demand fulfilment).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
app/
  layout.tsx                  Root layout — Poppins font, Nav, Footer, Snipcart
  globals.css                 Tailwind base + scroll-reveal + scrollbar utilities
  page.tsx                    Home
  about/                      About (bio, values, beliefs)
  watch/                      Watch (latest videos → YouTube)
  shop/                       Shop (real Printful products, ISR-cached)
  contact/                    Contact (form, prayer, socials, newsletter)
  api/snipcart/webhook/       Fulfilment webhook: Snipcart order → Printful order
components/
  Nav.tsx / Footer.tsx        Chrome + cart button + social links
  VideoCard.tsx               YouTube video card
  ProductCard.tsx             Shop product w/ variant select + Snipcart buttons
  Reveal.tsx                  Scroll-reveal wrapper (IntersectionObserver)
  NewsletterForm.tsx / ContactForm.tsx
lib/
  site.ts                     Socials, stats, Snipcart public key, product copy
  videos.ts                   YouTube video list
  printful.ts                 Printful API: fetch products + create orders
```

Content pages are Server Components; interactive pieces (`Nav`, forms,
`ProductCard`, `Reveal`) are `'use client'`.

## Design system

| Token           | Value                 |
| --------------- | --------------------- |
| Primary (brand) | `#01BAB4` (teal)      |
| Background      | `#0A0A0A`             |
| Surface / cards | `#141414` / `#1E1E1E` |
| Border          | `#252525`             |
| Text            | `#FFFFFF` / muted `#777` `#555` |
| Font            | Poppins (400–800)     |

Defined in `tailwind.config.ts` as `brand`, `bg`, `surface`, `surface2`,
`line`, `muted`, `muted2`.

## Environment variables (set in Vercel → Settings → Environment Variables)

| Name                          | Purpose                                                        | Secret? |
| ----------------------------- | -------------------------------------------------------------- | ------- |
| `PRINTFUL_API_TOKEN`          | Printful API token. Must have access to the Manual/API store.  | 🔒 yes  |
| `PRINTFUL_STORE_ID`           | Printful store to sell from. Defaults to `18407396` in code.   | no      |
| `SNIPCART_SECRET_KEY`         | Snipcart Secret API key — validates the fulfilment webhook.    | 🔒 yes  |
| `NEXT_PUBLIC_SNIPCART_API_KEY`| Snipcart **public** key (optional; a default is in `lib/site.ts`). | no  |
| `NEXT_PUBLIC_SITE_URL`        | Absolute site URL used for Snipcart product validation.        | no      |
| `PRINTFUL_AUTO_CONFIRM`       | `true` = auto-submit orders to Printful; unset = create drafts.| no      |
| `NEXT_PUBLIC_SANITY_PROJECT_ID`| Sanity project ID (defaults to `b3j7gdut` in code).           | no      |
| `KIT_API_KEY`                 | Kit (ConvertKit) API key for newsletter signups.              | 🔒 yes  |
| `KIT_FORM_ID`                 | Kit form ID new subscribers are added to.                     | no      |
| `NEXT_PUBLIC_FORMSPREE_ID`    | Formspree form ID the contact form posts to.                  | no      |

Forms fail soft: without `KIT_*` / `NEXT_PUBLIC_FORMSPREE_ID` set, submissions
show success to the visitor but aren't delivered until the keys are added. Set
them, then redeploy.

## SEO & marketing

Auto-generated: `app/sitemap.ts` (`/sitemap.xml`, includes blog slugs),
`app/robots.ts` (blocks `/studio`), `app/opengraph-image.tsx` (social share
card), `app/icon.svg` + `app/apple-icon.tsx` (favicons). JSON-LD structured
data (`components/JsonLd.tsx`) is emitted for Organization/WebSite (site-wide),
BlogPosting (posts), and Product (shop). Analytics + Speed Insights via
`@vercel/analytics` and `@vercel/speed-insights` in `app/layout.tsx` (free,
cookieless — dashboards appear in Vercel).

## How the shop works

1. `/shop` fetches products from the Printful **Manual/API** store
   (`lib/printful.ts`) and renders them (ISR, `revalidate = 300`).
2. Each variant is a Snipcart buy button carrying its Printful **sync variant
   ID** as the item id.
3. On checkout, Snipcart validates prices by crawling the product's
   `data-item-url` (the absolute `/shop` URL), takes payment via Stripe, then
   POSTs the completed order to `/api/snipcart/webhook`.
4. The webhook validates the request (Snipcart Secret key, HTTP Basic auth) and
   creates a Printful order — a **draft** by default, or auto-confirmed if
   `PRINTFUL_AUTO_CONFIRM=true`.

### Printful requirement

Products **must** live in a store of type **"Manual order / API platform"**.
Printful's API blocks selling platform-connected stores (Wix, Etsy) from an
outside site. Copy products across via **⋯ → Save as template → Add to store**.

### Snipcart dashboard settings

- **Domains & URLs:** add the live host (e.g. `website-ten-roan-97.vercel.app`,
  and `gospelgrounded.com.au` once live). Required, or checkout can't validate.
- **Regional settings:** currency **AUD** (must match Printful prices).
- **Webhooks:** set the URL to `https://<your-domain>/api/snipcart/webhook`.

### Editing product descriptions

Printful's API doesn't return descriptions, so they live in
`productDescriptions` in `lib/site.ts`, keyed by exact product name. Edit there.

## ⚠️ Vercel Deployment Protection must stay OFF

Snipcart's server crawls `/shop` to validate products. If **Vercel
Authentication / Deployment Protection** is on, that crawl hits a login wall and
checkout fails with *"URL of some products could not be reached."* Keep it
disabled for Production (Settings → Deployment Protection).

## Going live (Test → Live)

The store currently runs in Snipcart **Test mode** (orders arrive in Printful as
**drafts**). To start taking real orders:

1. **Snipcart → Live mode.** Copy the **Live** Public and Secret API keys.
2. In Vercel, update `SNIPCART_SECRET_KEY` to the **Live** secret (and
   `NEXT_PUBLIC_SNIPCART_API_KEY` to the Live public key, or update the default
   in `lib/site.ts`). Redeploy so the new env vars load.
3. **Stripe → live mode** (connected inside the Snipcart dashboard).
4. Confirm the Snipcart **Domains** and **Webhook URL** point at the live domain.
5. (Optional) Set `PRINTFUL_AUTO_CONFIRM=true` in Vercel so paid orders submit to
   Printful automatically instead of waiting as drafts.
6. Place one real (small) order end-to-end to confirm before announcing.

## Still to wire up

- [ ] Connect `NewsletterForm` to an email provider (Mailchimp, ConvertKit, Resend…)
- [ ] Connect `ContactForm` to a backend (Formspree, Resend…)
- [ ] Point the custom domain `gospelgrounded.com.au` at Vercel (leave email MX records untouched)

Both forms currently `preventDefault()` and show a success state without sending
anything — they just need a submit handler pointed at a service.
