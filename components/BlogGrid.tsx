'use client';

import { useState } from 'react';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
};

const posts: Post[] = [
  {
    slug: 'habits-that-shape-faith',
    title: 'Three Habits That Quietly Shape Your Faith',
    excerpt:
      'Discipleship is rarely dramatic. It is the small, repeated things that form us most over time.',
    category: 'Discipleship',
    readTime: '4 min',
    date: 'Jun 2026',
  },
  {
    slug: 'cross-and-your-worth',
    title: 'What The Cross Says About Your Worth',
    excerpt:
      'Your value was never up for debate. Calvary settled the question once and for all.',
    category: 'Gospel',
    readTime: '5 min',
    date: 'Jun 2026',
  },
  {
    slug: 'reading-bible-well',
    title: 'A Simple Framework For Reading The Bible Well',
    excerpt:
      'Four questions that turn confusing passages into clear, applicable truth.',
    category: 'Discipleship',
    readTime: '6 min',
    date: 'May 2026',
  },
  {
    slug: 'doubt-and-faith',
    title: 'Why Doubt Is Not The Enemy Of Faith',
    excerpt:
      'Honest questions, brought to God, are often the doorway to deeper trust.',
    category: 'Apologetics',
    readTime: '7 min',
    date: 'May 2026',
  },
  {
    slug: 'grace-misunderstood',
    title: 'The Most Misunderstood Word In Christianity',
    excerpt:
      'Grace is bigger, freer, and more scandalous than most of us dare to believe.',
    category: 'Theology',
    readTime: '5 min',
    date: 'Apr 2026',
  },
  {
    slug: 'prayer-when-stuck',
    title: 'How To Pray When You Feel Stuck',
    excerpt:
      'A few honest patterns for the seasons when prayer feels hard or dry.',
    category: 'Discipleship',
    readTime: '4 min',
    date: 'Apr 2026',
  },
];

const categories = ['All', 'Gospel', 'Theology', 'Discipleship', 'Apologetics'];

export default function BlogGrid() {
  const [filter, setFilter] = useState('All');

  const filtered =
    filter === 'All' ? posts : posts.filter((p) => p.category === filter);

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

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <a
            key={p.slug}
            href="#"
            className="group flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-muted2"
          >
            <div className="flex items-center gap-3 text-xs text-muted2">
              <span className="font-semibold uppercase tracking-wider text-brand">
                {p.category}
              </span>
              <span>·</span>
              <span>{p.readTime} read</span>
              <span>·</span>
              <span>{p.date}</span>
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-snug transition-colors group-hover:text-brand">
              {p.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {p.excerpt}
            </p>
            <span className="mt-4 text-sm font-semibold text-brand">
              Read article →
            </span>
          </a>
        ))}
      </div>
    </>
  );
}
