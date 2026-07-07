'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'done' | 'error';

export default function NewsletterForm({
  variant = 'default',
}: {
  variant?: 'default' | 'inline';
}) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || status === 'loading') return;
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus('done');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'done') {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-brand/40 bg-brand/10 px-5 py-4 text-sm text-brand-100">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-bg">
          ✓
        </span>
        You&apos;re in. Watch your inbox for what&apos;s next.
      </div>
    );
  }

  return (
    <div className={variant === 'inline' ? 'w-full' : 'w-full max-w-md'}>
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-3 sm:flex-row"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="w-full flex-1 rounded-full border border-line bg-surface px-5 py-3 text-sm text-white placeholder:text-muted2 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="shrink-0 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
        </button>
      </form>
      {status === 'error' && (
        <p className="mt-2 px-2 text-sm text-red-400">
          Something went wrong — please try again.
        </p>
      )}
    </div>
  );
}
