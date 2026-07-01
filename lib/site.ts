// Central site config — socials, channel, and headline stats.
// This is the kind of data that will move into the CMS in Phase 2.

export const site = {
  name: 'Gospel Grounded',
  founder: 'Webster',
  domain: 'gospelgrounded.com.au',
  youtubeChannel: 'https://www.youtube.com/@GospelGrounded',
};

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

export const stats = [
  { value: '500+', label: 'Teachings published' },
  { value: '240K+', label: 'Views and counting' },
  { value: 'Daily', label: 'New teaching' },
  { value: '1', label: 'Gospel, unchanging' },
];
