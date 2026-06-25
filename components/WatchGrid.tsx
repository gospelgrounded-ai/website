'use client';

import { useState } from 'react';

type Video = {
  id: string;
  title: string;
  duration: string;
  category: string;
  views: string;
};

const videos: Video[] = [
  { id: 'ph1', title: 'Who Is Jesus, Really? A Gospel Primer', duration: '18:24', category: 'Teaching', views: '12K' },
  { id: 'ph2', title: 'Grace That Goes All The Way Down', duration: '24:10', category: 'Theology', views: '8.4K' },
  { id: 'ph3', title: 'How To Read Your Bible And Enjoy It', duration: '15:47', category: 'Discipleship', views: '20K' },
  { id: 'ph4', title: 'The Cross Was Not Plan B', duration: '21:02', category: 'Theology', views: '6.1K' },
  { id: 'ph5', title: 'Prayer When You Have No Words', duration: '12:38', category: 'Discipleship', views: '9.9K' },
  { id: 'ph6', title: 'Answering The Hardest Question About Suffering', duration: '27:15', category: 'Apologetics', views: '15K' },
  { id: 'ph7', title: 'What Is The Gospel In One Sentence?', duration: '09:51', category: 'Teaching', views: '31K' },
  { id: 'ph8', title: 'Doubt Is Not The Opposite Of Faith', duration: '19:33', category: 'Apologetics', views: '7.2K' },
  { id: 'ph9', title: 'Why The Resurrection Changes Everything', duration: '22:46', category: 'Theology', views: '11K' },
];

const categories = ['All', 'Teaching', 'Theology', 'Discipleship', 'Apologetics'];

function Thumb({ duration }: { duration: string }) {
  return (
    <div className="group relative aspect-video overflow-hidden rounded-2xl border border-line bg-surface">
      <div className="absolute inset-0 bg-gradient-to-br from-surface2 to-bg" />
      <div className="absolute inset-0 bg-teal-glow opacity-40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-bg transition-transform duration-300 group-hover:scale-110">
          <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-6 w-6">
            <path d="M8 5v14l11-7L8 5Z" />
          </svg>
        </span>
      </div>
      <span className="absolute bottom-3 right-3 rounded-md bg-bg/80 px-2 py-1 text-xs font-medium text-white backdrop-blur">
        {duration}
      </span>
    </div>
  );
}

export default function WatchGrid() {
  const [filter, setFilter] = useState('All');

  const filtered =
    filter === 'All' ? videos : videos.filter((v) => v.category === filter);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              filter === cat
                ? 'border-brand bg-brand text-bg'
                : 'border-line bg-surface text-muted hover:border-muted2 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((v) => (
          <a key={v.id} href="#" className="group block">
            <Thumb duration={v.duration} />
            <div className="mt-4">
              <div className="flex items-center gap-2 text-xs text-muted2">
                <span className="font-semibold uppercase tracking-wider text-brand">
                  {v.category}
                </span>
                <span>·</span>
                <span>{v.views} views</span>
              </div>
              <h3 className="mt-1.5 text-lg font-semibold leading-snug transition-colors group-hover:text-brand">
                {v.title}
              </h3>
            </div>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-muted">
          No videos in this category yet — check back soon.
        </p>
      )}
    </>
  );
}
