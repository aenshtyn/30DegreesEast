import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

import {
  escapeHtml,
  getContactEmailConfig,
  getResendApiKey,
  hasHoneypotContent,
  isMissingEnvVarError,
  isValidEmail,
  trimFormValue,
} from '@/lib/server/form-utils'

const serviceNames: Record<string, string> = {
  'coaching-english': 'Earn Online by Teaching English',
  'strategy-session': 'Thinking / Strategy Session',
  'teaching-audit': 'Teaching System Audit',
  'coaches-educators': 'Coaching for Coaches & Educators',
  'partner-with-swaleh': 'Partner with Swaleh',
  'other': 'Other / General Inquiry',
}

const sharedEmailStyles = `
  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    margin: 0;
    padding: 24px;
    background: #f5f5f5;
    color: #171717;
  }
  .card {
    max-width: 640px;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 24px;
    border: 1px solid #e5e5e5;
    overflow: hidden;
  }
  .hero {
    padding: 28px 32px 24px;
    background: linear-gradient(135deg, #171717 0%, #2b2628 100%);
    color: #ffffff;
  }
  .eyebrow {
    margin: 0 0 10px;
    font-size: 12px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #f7b34b;
  }
  h1 {
    margin: 0;
    font-size: 28px;
    line-height: 1.15;
  }
  .hero-copy {
    margin: 12px 0 0;
    color: rgba(255, 255, 255, 0.82);
    font-size: 15px;
    line-height: 1.6;
  }
  .content {
    padding: 32px;
  }
  .summary-grid {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin-bottom: 24px;
  }
  .summary-grid td {
    padding: 14px 16px;
    border-bottom: 1px solid #ececec;
    vertical-align: top;
  }
  .summary-grid tr:last-child td {
    border-bottom: none;
  }
  .label {
    width: 34%;
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #737373;
    font-weight: 700;
  }
  .value {
    font-size: 15px;
    color: #171717;
    line-height: 1.6;
  }
  .value a {
    color: #171717;
    text-decoration: underline;
  }
  .section-title {
    margin: 28px 0 10px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #737373;
  }
  .message-box {
    background: #faf8f4;
    border: 1px solid #ece6da;
    border-radius: 18px;
    padding: 18px;
    font-size: 15px;
    line-height: 1.7;
    white-space: pre-wrap;
  }
  .footer {
    margin-top: 28px;
    padding-top: 18px;
    border-top: 1px solid #ececec;
    font-size: 14px;
    line-height: 1.6;
    color: #737373;
  }
`

const buildContactEmailHtml = ({
  safeEmail,
  safeMessage,
  safeName,
  safeServiceName,
}: {
  safeEmail: string
  safeMessage: string
  safeName: string
  safeServiceName: string
}) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <style>
        ${sharedEmailStyles}
      </style>
    </head>
    <body>
      <div class="card">
        <div class="hero">
          <p class="eyebrow">30 Degrees East</p>
          <h1>New service inquiry</h1>
          <p class="hero-copy">
            A new contact form submission came in through the site.
          </p>
        </div>
        <div class="content">
          <table class="summary-grid" role="presentation">
            <tr>
              <td class="label">Service</td>
              <td class="value">${safeServiceName}</td>
            </tr>
            <tr>
              <td class="label">Name</td>
              <td class="value">${safeName}</td>
            </tr>
            <tr>
              <td class="label">Email</td>
              <td class="value">
                <a href="mailto:${safeEmail}">${safeEmail}</a>
              </td>
            </tr>
          </table>

          <p class="section-title">Message</p>
          <div class="message-box">${safeMessage}</div>

          <div class="footer">
            <p>This message was sent from the 30 Degrees East contact form.</p>
            <p>Reply directly to this email to respond to ${safeName}.</p>
          </div>
        </div>
      </div>
    </body>
  </html>
`

const buildPartnerInquiryEmailHtml = ({
  safeBusiness,
  safeEmail,
  safeMessage,
  safeName,
}: {
  safeBusiness: string
  safeEmail: string
  safeMessage: string
  safeName: string
}) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <style>
        ${sharedEmailStyles}
      </style>
    </head>
    <body>
      <div class="card">
        <div class="hero">
          <p class="eyebrow">Shadow Operator Program</p>
          <h1>New partner inquiry</h1>
          <p class="hero-copy">
            A business owner wants to explore building a knowledge product with Swaleh.
          </p>
        </div>
        <div class="content">
          <table class="summary-grid" role="presentation">
            <tr>
              <td class="label">Name</td>
              <td class="value">${safeName}</td>
            </tr>
            <tr>
              <td class="label">Email</td>
              <td class="value">
                <a href="mailto:${safeEmail}">${safeEmail}</a>
              </td>
            </tr>
            <tr>
              <td class="label">Business / Industry</td>
              <td class="value">${safeBusiness}</td>
            </tr>
            <tr>
              <td class="label">Inquiry Type</td>
              <td class="value">Partner with Swaleh</td>
            </tr>
          </table>

          <p class="section-title">What they could teach</p>
          <div class="message-box">${safeMessage}</div>

          <div class="footer">
            <p>This inquiry was submitted through the Partner with Swaleh page.</p>
            <p>Reply directly to this email to continue the conversation with ${safeName}.</p>
          </div>
        </div>
      </div>
    </body>
  </html>
`

export async function POST(request: NextRequest) {
  try {
    const resend = new Resend(getResendApiKey())
    const body = await request.json()
    const name = trimFormValue(body.name)
    const email = trimFormValue(body.email)
    const business = trimFormValue(body.business)
    const service = trimFormValue(body.service)
    const message = trimFormValue(body.message)
    const website = trimFormValue(body.website)

    if (hasHoneypotContent(website)) {
      return NextResponse.json(
        { error: 'Unable to send message. Please try again.' },
        { status: 400 }
      )
    }

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const contactEmailConfig = getContactEmailConfig(service)
    const serviceName = serviceNames[service] || service
    const safeServiceName = escapeHtml(serviceName)
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message)
    const safeBusiness = escapeHtml(business)
    const isPartnerInquiry = service === 'partner-with-swaleh'
    const subject = isPartnerInquiry
      ? `New Partner Inquiry: ${name}`
      : `New Contact Form Submission: ${serviceName}`
    const html = isPartnerInquiry
      ? buildPartnerInquiryEmailHtml({
          safeBusiness: safeBusiness || 'Not provided',
          safeEmail,
          safeMessage,
          safeName,
        })
      : buildContactEmailHtml({
          safeEmail,
          safeMessage,
          safeName,
          safeServiceName,
        })

    const { data, error } = await resend.emails.send({
      from: contactEmailConfig.from,
      to: contactEmailConfig.to,
      replyTo: email,
      subject,
      html,
    })

    if (error) {
      console.error('Resend API error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    if (isMissingEnvVarError(error)) {
      console.error(error.message)
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact us directly.' },
        { status: 503 }
      )
    }

    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    )
  }
}
