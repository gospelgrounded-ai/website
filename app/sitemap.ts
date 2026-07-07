import type { MetadataRoute } from 'next';
import { getBlogSlugs } from '@/lib/cms';

const BASE = 'https://gospelgrounded.com.au';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    '',
    '/watch',
    '/listen',
    '/blog',
    '/about',
    '/shop',
    '/contact',
    '/privacy',
    '/shipping-returns',
  ];

  const now = new Date();
  const staticEntries = routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: now,
  }));

  const slugs = await getBlogSlugs();
  const blogEntries = slugs.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
  }));

  return [...staticEntries, ...blogEntries];
}
