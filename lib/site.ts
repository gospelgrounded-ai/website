// Central site config — socials, channel, and headline stats.
// This is the kind of data that will move into the CMS in Phase 2.

export const site = {
  name: 'Gospel Grounded',
  founder: 'Webster',
  domain: 'gospelgrounded.com.au',
  youtubeChannel: 'https://www.youtube.com/@GospelGrounded',
};

// Absolute base URL of the live site, used for Snipcart product validation
// (the crawl URL must be reachable). Override with NEXT_PUBLIC_SITE_URL once
// the custom domain is live.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://website-ten-roan-97.vercel.app'
).replace(/\/+$/, '');

// Snipcart public API key — safe to expose (it ships in the page source).
// An env var override wins if set, so it can be rotated without a code change.
export const snipcartPublicKey =
  process.env.NEXT_PUBLIC_SNIPCART_API_KEY ??
  'ZDU0YTcwNzktYzlkNS00MzMyLTljOWMtOWNkODFlM2M5MDgyNjM5MTgwMzg2MzE1OTQ4MDE5';

export const socials = [
  { label: 'YouTube', handle: '@GospelGrounded', href: 'https://www.youtube.com/@GospelGrounded', icon: 'youtube' },
  { label: 'Instagram', handle: '@gospelgrounded', href: 'https://www.instagram.com/gospelgrounded/', icon: 'instagram' },
  { label: 'Facebook', handle: 'Gospel Grounded', href: 'https://www.facebook.com/profile.php?id=100089835280726', icon: 'facebook' },
];

// Product descriptions, keyed by the exact Printful product name (Printful's
// API doesn't provide descriptions for sync products, so they live here).
// Edit these freely — they appear under each product in the shop. A product
// with no entry simply shows no description.
export const productDescriptions: Record<string, string> = {
  'Holy Ground 5 Panel Mid-Profile Baseball Cap':
    'A clean, structured 5-panel cap with the embroidered ‘Holy Ground’ mark — everyday headwear made to start conversations.',
  'Holy Ground Hoodie (White)':
    'A soft, heavyweight hoodie carrying the ‘Holy Ground’ design. Comfortable, considered, and made to wear often.',
  "'Holy Ground' Men’s box hoodie (Black)":
    'A premium boxy-fit hoodie with the ‘Holy Ground’ print — a relaxed silhouette with an elevated feel.',
};

export const stats = [
  { value: '500+', label: 'Teachings published' },
  { value: '240K+', label: 'Views and counting' },
  { value: 'Daily', label: 'New teaching' },
  { value: '1', label: 'Gospel, unchanging' },
];
