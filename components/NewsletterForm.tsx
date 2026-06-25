'use client';

import { useState } from 'react';

export default function NewsletterForm({
  variant = 'default',
}: {
  variant?: 'default' | 'inline';
}) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to email provider (Mailchimp, ConvertKit, Resend, etc.)
    if (email.trim()) setSubmitted(true);
  };

  if (submitted) {
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
    <form
      onSubmit={handleSubmit}
      className={
        variant === 'inline'
          ? 'flex w-full flex-col gap-3 sm:flex-row'
          : 'flex w-full max-w-md flex-col gap-3 sm:flex-row'
      }
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
        className="shrink-0 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
      >
        Subscribe
      </button>
    </form>
  );
}
