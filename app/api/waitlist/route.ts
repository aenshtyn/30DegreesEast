import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const parseEmails = (value?: string | null) =>
  value
    ?.split(',')
    .map((email) => email.trim())
    .filter(Boolean)

const getWaitlistRecipients = () => {
  const waitlistEmails = parseEmails(process.env.RESEND_WAITLIST_TO_EMAIL)
  if (waitlistEmails && waitlistEmails.length > 0) {
    return waitlistEmails
  }

  const defaultEmails = parseEmails(process.env.RESEND_TO_EMAIL)
  if (defaultEmails && defaultEmails.length > 0) {
    return defaultEmails
  }

  return ['hello@30degreeseast.com']
}

export async function POST(request: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured')
    return NextResponse.json(
      { error: 'Email service is not configured. Please contact us directly.' },
      { status: 503 }
    )
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const body = await request.json()
    const { name, email } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Both name and email are required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    const recipients = getWaitlistRecipients()

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: recipients,
      replyTo: email,
      subject: 'New Waitlist Signup',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <style>
              body {
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                margin: 0;
                padding: 24px;
                background: #f5f5f5;
                color: #111827;
              }
              .card {
                max-width: 560px;
                margin: 0 auto;
                background: #ffffff;
                border-radius: 16px;
                border: 1px solid #e5e7eb;
                padding: 32px;
              }
              h1 {
                font-size: 22px;
                margin-bottom: 24px;
              }
              .item {
                margin-bottom: 16px;
              }
              .label {
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.08em;
                color: #6b7280;
                margin-bottom: 4px;
              }
              .value {
                font-size: 16px;
                color: #111827;
              }
              .footer {
                margin-top: 32px;
                font-size: 13px;
                color: #6b7280;
              }
            </style>
          </head>
          <body>
            <div class="card">
              <h1>New Waitlist Signup</h1>
              <div class="item">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="item">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="footer">
                This signup came from the homepage waitlist form.
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend waitlist error:', error)
      return NextResponse.json(
        { error: 'Unable to submit waitlist entry right now. Please try again soon.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: 'Added to waitlist successfully', id: data?.id })
  } catch (error) {
    console.error('Waitlist submission error:', error)
    return NextResponse.json(
      { error: 'Unable to submit waitlist entry right now. Please try again soon.' },
      { status: 500 }
    )
  }
}
