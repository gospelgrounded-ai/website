export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

// Sanity project ID. Lowercase alphanumeric. Override via env in Vercel; the
// fallback is set here once confirmed from manage.sanity.io.
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ojqponpej';
