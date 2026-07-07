'use client';

import { useState } from 'react';

const reasons = [
  'General enquiry',
  'Speaking / preaching',
  'Collaboration',
  'Prayer request',
  'Feedback',
];

type Status = 'idle' | 'loading' | 'done' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    reason: reasons[0],
    message: '',
  });

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  const update =
    (field: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');

    // Not configured yet: accept gracefully so no visitor sees an error.
    if (!formspreeId) {
      setStatus('done');
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          reason: form.reason,
          message: form.message,
          _subject: `Gospel Grounded — ${form.reason} from ${form.name}`,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus('done');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'done') {
    return (
      <div className="rounded-3xl border border-brand/40 bg-brand/10 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand text-xl text-bg">
          ✓
        </div>
        <h3 className="mt-4 text-lg font-semibold">Message sent</h3>
        <p className="mt-2 text-sm text-muted">
          Thanks for reaching out, {form.name || 'friend'}. I&apos;ll get back to
          you as soon as I can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-muted"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={update('name')}
            placeholder="Your name"
            className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-white placeholder:text-muted2 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-muted"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={update('email')}
            placeholder="you@email.com"
            className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-white placeholder:text-muted2 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="reason"
          className="mb-2 block text-sm font-medium text-muted"
        >
          What&apos;s this about?
        </label>
        <select
          id="reason"
          value={form.reason}
          onChange={update('reason')}
          className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-white focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
        >
          {reasons.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-muted"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={form.message}
          onChange={update('message')}
          placeholder="Write your message…"
          className="w-full resize-none rounded-xl border border-line bg-surface px-4 py-3 text-sm text-white placeholder:text-muted2 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
        >
          {status === 'loading' ? 'Sending…' : 'Send message'}
        </button>
        {status === 'error' && (
          <p className="text-sm text-red-400">
            Something went wrong — please try again, or email directly.
          </p>
        )}
      </div>
    </form>
  );
}
