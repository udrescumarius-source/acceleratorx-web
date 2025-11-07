import {NextResponse} from 'next/server';
import {Resend} from 'resend';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {name, email, message} = body || {};
    if (!name || !email || !message) {
      return NextResponse.json({error: 'Missing fields'}, {status: 400});
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO || '';
    const from = process.env.CONTACT_FROM || 'web@localhost';

    if (!apiKey || !to) {
      // Fallback: accept request without sending (dev/local)
      return NextResponse.json({ok: true, delivered: false});
    }

    const resend = new Resend(apiKey);
    await resend.emails.send({
      from,
      to,
      subject: `Contact AcceleratorX: ${name}`,
      replyTo: email,
      text: message
    });

    return NextResponse.json({ok: true, delivered: true});
  } catch (e) {
    return NextResponse.json({error: 'Server error'}, {status: 500});
  }
}