# Gospel Grounded

The official website for [gospelgrounded.com.au](https://gospelgrounded.com.au) — a
gospel-centred teaching ministry (YouTube, blog, podcast).

Built with **Next.js 14** (App Router), **TypeScript**, and **Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build (all routes prerender as static)
npm run start    # serve the production build
npm run lint
```

## Project structure

```
app/
  layout.tsx       Root layout — Poppins font, Nav, Footer, metadata
  globals.css      Tailwind base + custom scrollbar / selection / grid utility
  page.tsx         Home
  about/           About
  watch/           Watch (filterable video grid)
  blog/            Blog (featured post + filterable grid)
  podcast/         Podcast (latest episode + episode list)
  shop/            Shop (product grid)
  contact/         Contact (form, prayer, socials, newsletter)
components/
  Nav.tsx          Sticky nav — transparent → blur on scroll, mobile menu
  Footer.tsx       Logo, link columns, social icons
  NewsletterForm.tsx   Reusable email capture form
  ContactForm.tsx      Full contact form with reason selector
  WatchGrid.tsx        Client-side category filter for videos
  BlogGrid.tsx         Client-side category filter for articles
```

All content pages are Server Components; only interactive pieces (`Nav`,
forms, the filter grids) are `'use client'`.

## Design system

| Token            | Value                         |
| ---------------- | ----------------------------- |
| Primary (brand)  | `#01BAB4` (teal)              |
| Background       | `#0A0A0A`                     |
| Surface / cards  | `#141414`                     |
| Surface 2        | `#1E1E1E`                     |
| Border           | `#252525`                     |
| Text primary     | `#FFFFFF`                     |
| Text muted       | `#777777` / `#555555`         |
| Font             | Poppins (400–800)             |

These are defined in `tailwind.config.ts` as `brand`, `bg`, `surface`,
`surface2`, `line`, `muted`, `muted2`.

## Deploy (Vercel)

1. Push this repo to GitHub (already configured).
2. [vercel.com](https://vercel.com) → **Add New Project** → import this repo.
3. Vercel auto-detects Next.js — no root directory change needed.
4. **Deploy.**

## Content is placeholder — what to wire up next

The site is fully built but intentionally seeded with placeholder content,
ready to be replaced:

- [ ] Real YouTube video IDs in `components/WatchGrid.tsx` and `app/page.tsx`
- [ ] Real social URLs in `components/Footer.tsx` and `app/contact/page.tsx`
- [ ] A real headshot on Home and About (currently placeholder blocks)
- [ ] Personalised copy / bio in `app/about/page.tsx`
- [ ] Connect `NewsletterForm` to an email provider (Mailchimp, ConvertKit, Resend…)
- [ ] Connect `ContactForm` to a backend (Formspree, Resend…)

Both forms currently call `e.preventDefault()` and show a success state without
sending anything — they just need a submit handler pointed at a service.
