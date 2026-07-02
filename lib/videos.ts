// Videos from the Gospel Grounded YouTube channel.
//
// `getLatestVideos()` pulls the channel's most recent uploads live from its
// public RSS feed (no API key needed). The hardcoded `videos` list below is a
// fallback used only if the feed is unreachable.

export type Video = {
  id: string;
  title: string;
  publishedAt: string;
};

// Gospel Grounded YouTube channel ID.
const CHANNEL_ID = 'UC52heP592AzdlBOwZ86jrrQ';

function decodeXmlEntities(input: string): string {
  return input
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex: string) =>
      String.fromCharCode(parseInt(hex, 16))
    );
}

// Heuristic: treat anything tagged #short(s) as a Short and exclude it.
const isShort = (title: string) => /#shorts?\b/i.test(title);

/**
 * Fetch the channel's latest long-form uploads from its public YouTube RSS
 * feed (Shorts filtered out), cached hourly (ISR). Because the feed only
 * exposes ~15 recent uploads, the curated `videos` list tops up the result so
 * the page always looks full; the hardcoded list is also the fallback if the
 * feed is unreachable.
 */
export async function getLatestVideos(limit = 12): Promise<Video[]> {
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return videos.slice(0, limit);

    const xml = await res.text();
    const live: Video[] = [];

    for (const entry of xml.split('<entry>').slice(1)) {
      const id = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1];
      const rawTitle = entry.match(/<title>([\s\S]*?)<\/title>/)?.[1];
      const published = entry.match(/<published>(.*?)<\/published>/)?.[1];
      if (!id || !rawTitle) continue;
      const title = decodeXmlEntities(rawTitle).trim();
      if (isShort(title)) continue;
      live.push({ id, title, publishedAt: (published ?? '').slice(0, 10) });
    }

    // New long-form uploads first, then the curated list (deduped) to fill.
    const merged = [...live];
    for (const v of videos) {
      if (!merged.some((m) => m.id === v.id)) merged.push(v);
    }
    return merged.slice(0, limit);
  } catch {
    return videos.slice(0, limit);
  }
}

export const videos: Video[] = [
  { id: 'M3BXa54xRQ4', title: 'Did God Actually Change Between the Old and New Testament?', publishedAt: '2026-05-29' },
  { id: '7XPDkkXZDE8', title: 'The First Sinner Jesus Ever Forgave', publishedAt: '2026-05-28' },
  { id: '69-KDrT7v9U', title: 'What Satan Got Terribly Wrong in the Wilderness (And What It Means For You)', publishedAt: '2026-05-27' },
  { id: 'qBsnH_N7JkY', title: 'Why Jesus Had to Be Baptized', publishedAt: '2026-05-27' },
  { id: 'qRdweHQuxZM', title: 'Simeon and Anna Waited Their Whole Lives for THIS', publishedAt: '2026-05-26' },
  { id: 'SR03hTEo2bM', title: 'Luke Chapter 1: God Breaks 400 Years of Silence', publishedAt: '2026-05-25' },
  { id: 'tLqRhJtmHvo', title: 'Why God Chose a Gentile Doctor to Write This Gospel', publishedAt: '2026-05-24' },
  { id: 'WeiO6IqXIyg', title: 'The Tomb Is Empty and You Have Been Sent', publishedAt: '2026-05-10' },
  { id: '77R-0Tj4tsw', title: 'This Was Jesus’ Hardest Moment', publishedAt: '2026-05-07' },
  { id: 'LlxfT1FJI7w', title: 'Betrayed. Abandoned. Beaten. And He Knew It Was Coming', publishedAt: '2026-05-06' },
  { id: 'PZaZuPIpzKw', title: 'What Did Jesus Actually Say About the End Times?', publishedAt: '2026-05-05' },
  { id: 'llkKhDk5Hsk', title: 'Why This One Parable Caused Such Outrage', publishedAt: '2026-05-04' },
];

export const youtubeWatchUrl = (id: string) =>
  `https://www.youtube.com/watch?v=${id}`;

export const youtubeThumb = (id: string) =>
  `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
