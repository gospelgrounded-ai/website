import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Subscribe an email to the Kit (ConvertKit) form. Needs KIT_API_KEY and
// KIT_FORM_ID in the environment; if they're missing we accept the signup so
// the visitor never sees an error, and log a warning to fix later.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === 'string' ? body.email.trim() : '';

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 });
  }

  const apiKey = process.env.KIT_API_KEY;
  const formId = process.env.KIT_FORM_ID;

  if (!apiKey || !formId) {
    console.warn('Newsletter not configured: set KIT_API_KEY and KIT_FORM_ID.');
    return NextResponse.json({ ok: true, configured: false });
  }

  try {
    const res = await fetch(
      `https://api.kit.com/v4/forms/${formId}/subscribers`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Kit-Api-Key': apiKey,
        },
        body: JSON.stringify({ email_address: email }),
      }
    );

    if (!res.ok) {
      console.error('Kit subscribe failed', res.status, await res.text().catch(() => ''));
      return NextResponse.json({ error: 'Could not subscribe right now.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true, configured: true });
  } catch (e) {
    console.error('Kit subscribe error', e);
    return NextResponse.json({ error: 'Could not subscribe right now.' }, { status: 502 });
  }
}
