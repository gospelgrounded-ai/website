// Real videos from the Gospel Grounded YouTube channel.
// In Phase 2 these will be managed in the CMS (or pulled live from YouTube).

export type Video = {
  id: string;
  title: string;
  publishedAt: string;
};

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
