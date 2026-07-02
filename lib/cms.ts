import { client } from '@/sanity/lib/client';

// All helpers fail soft: if Sanity is unreachable or the document doesn't
// exist yet, they return null/[] and the pages fall back to built-in copy.

export type SiteSettings = {
  heroBadge?: string;
  heroHeading?: string;
  heroHeadingAccent?: string;
  heroSubtext?: string;
  stats?: { value: string; label: string }[];
};

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    return await client.fetch(
      `*[_type == "siteSettings"][0]{
        heroBadge, heroHeading, heroHeadingAccent, heroSubtext, stats
      }`,
      {},
      { next: { revalidate: 60 } }
    );
  } catch {
    return null;
  }
}

export type AboutContent = {
  heading?: string;
  intro?: string;
  bio?: string[];
  values?: { title: string; body: string }[];
  beliefs?: string[];
};

export async function getAboutContent(): Promise<AboutContent | null> {
  try {
    return await client.fetch(
      `*[_type == "aboutPage"][0]{ heading, intro, bio, values, beliefs }`,
      {},
      { next: { revalidate: 60 } }
    );
  } catch {
    return null;
  }
}

/** Map of Printful product name → description, managed in the dashboard. */
export async function getProductDescriptionOverrides(): Promise<
  Record<string, string>
> {
  try {
    const docs: { productName: string; description?: string }[] =
      await client.fetch(
        `*[_type == "productDescription" && defined(description)]{ productName, description }`,
        {},
        { next: { revalidate: 60 } }
      );
    const map: Record<string, string> = {};
    for (const d of docs) {
      if (d.productName && d.description) map[d.productName] = d.description;
    }
    return map;
  } catch {
    return {};
  }
}

export type BlogPostSummary = {
  title: string;
  slug: string;
  excerpt?: string;
  category?: string;
  publishedAt?: string;
  coverImage?: unknown;
};

export async function getBlogPosts(): Promise<BlogPostSummary[]> {
  try {
    return await client.fetch(
      `*[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc){
        title, "slug": slug.current, excerpt, category, publishedAt, coverImage
      }`,
      {},
      { next: { revalidate: 60 } }
    );
  } catch {
    return [];
  }
}

export type BlogPostFull = BlogPostSummary & { body?: unknown };

export async function getBlogPost(slug: string): Promise<BlogPostFull | null> {
  try {
    return await client.fetch(
      `*[_type == "blogPost" && slug.current == $slug][0]{
        title, "slug": slug.current, excerpt, category, publishedAt, coverImage, body
      }`,
      { slug },
      { next: { revalidate: 60 } }
    );
  } catch {
    return null;
  }
}

export async function getBlogSlugs(): Promise<string[]> {
  try {
    return await client.fetch(
      `*[_type == "blogPost" && defined(slug.current)].slug.current`,
      {},
      { next: { revalidate: 60 } }
    );
  } catch {
    return [];
  }
}
