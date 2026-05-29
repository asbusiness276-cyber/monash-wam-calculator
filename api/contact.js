function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, topic, message, pageUrl, company } = req.body || {};

  if (company) {
    return res.status(200).json({ success: true });
  }

  const trimmedEmail = String(email || '').trim();
  const trimmedMessage = String(message || '').trim();
  const trimmedName = String(name || '').trim();
  const trimmedTopic = String(topic || 'General Feedback').trim();

  if (!trimmedEmail || !trimmedMessage) {
    return res.status(400).json({ success: false, message: 'Email and message are required.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || 'monashwamcalculator@gmail.com';
  const from =
    process.env.CONTACT_FROM_EMAIL || 'Monash WAM Calculator <onboarding@resend.dev>';

  if (!apiKey) {
    return res.status(503).json({
      success: false,
      message:
        'Email service is not configured. Please email monashwamcalculator@gmail.com directly.',
    });
  }

  const safeName = escapeHtml(trimmedName || 'Website visitor');
  const safeEmail = escapeHtml(trimmedEmail);
  const safeTopic = escapeHtml(trimmedTopic);
  const safeMessage = escapeHtml(trimmedMessage).replace(/\n/g, '<br />');
  const safePage = escapeHtml(pageUrl || 'Unknown page');

  try {
    const sendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: trimmedEmail,
        subject: `[${trimmedTopic}] New message from ${trimmedName || 'Website visitor'}`,
        html: `
          <h2>New contact form message</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Topic:</strong> ${safeTopic}</p>
          <p><strong>Page:</strong> ${safePage}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        `,
      }),
    });

    if (!sendResponse.ok) {
      const errorText = await sendResponse.text();
      console.error('Resend error:', sendResponse.status, errorText);
      return res.status(502).json({
        success: false,
        message: 'Could not send email. Please try again or email us directly.',
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return res.status(500).json({
      success: false,
      message: 'Could not send email. Please try again or email us directly.',
    });
  }
}
