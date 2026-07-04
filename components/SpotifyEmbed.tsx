const EMBEDDABLE = ['playlist', 'album', 'track', 'episode', 'show', 'artist'];

// Turn a Spotify share link (any locale, with or without ?si=…) into its
// embeddable player URL. Returns null if it isn't a recognisable Spotify link.
function toEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url);
    if (!u.hostname.endsWith('spotify.com')) return null;
    const parts = u.pathname.split('/').filter(Boolean); // e.g. ['intl-en','playlist','ID']
    for (let i = 0; i < parts.length - 1; i++) {
      if (EMBEDDABLE.includes(parts[i])) {
        return `https://open.spotify.com/embed/${parts[i]}/${parts[i + 1]}?utm_source=generator`;
      }
    }
    return null;
  } catch {
    return null;
  }
}

export default function SpotifyEmbed({ url }: { url: string }) {
  const embed = toEmbedUrl(url);
  if (!embed) return null;

  return (
    <iframe
      src={embed}
      title="Spotify player"
      width="100%"
      height={352}
      loading="lazy"
      style={{ border: 0, borderRadius: 12 }}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      allowFullScreen
    />
  );
}
