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
import {
  appendPlaybookApplicationRowToGoogleSheets,
  hasGoogleSheetsPlaybookConfig,
} from '@/lib/server/google-sheets'

export const runtime = 'nodejs'

const escapeList = (values: unknown) =>
  Array.isArray(values)
    ? values.map((value) => escapeHtml(trimFormValue(value))).filter(Boolean)
    : []

const formatList = (values: string[]) =>
  values.length > 0 ? values.map((value) => `<li>${value}</li>`).join('') : '<li>Not provided</li>'

const buildApplicationEmailHtml = ({
  background,
  challenge,
  earlybird,
  email,
  goal,
  interests,
  invest,
  name,
  source,
  status,
  whatsapp,
}: {
  background: string
  challenge: string
  earlybird: string
  email: string
  goal: string
  interests: string[]
  invest: string
  name: string
  source: string
  status: string
  whatsapp: string
}) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <style>
        body {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          margin: 0;
          padding: 24px;
          background: #f5f6fb;
          color: #171717;
        }
        .card {
          max-width: 720px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid #e5e7eb;
          overflow: hidden;
        }
        .hero {
          padding: 28px 32px 24px;
          background: linear-gradient(135deg, #211d20 0%, #121a2e 100%);
          color: #ffffff;
        }
        .eyebrow {
          margin: 0 0 10px;
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #ffc068;
        }
        h1 {
          margin: 0;
          font-size: 28px;
          line-height: 1.15;
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
      </style>
    </head>
    <body>
      <div class="card">
        <div class="hero">
          <p class="eyebrow">The Global Teacher Playbook</p>
          <h1>New programme application</h1>
        </div>
        <div class="content">
          <table class="summary-grid" role="presentation">
            <tr><td class="label">Name</td><td class="value">${name}</td></tr>
            <tr><td class="label">Email</td><td class="value"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td class="label">WhatsApp</td><td class="value">${whatsapp}</td></tr>
            <tr><td class="label">Background</td><td class="value">${background}</td></tr>
            <tr><td class="label">Current status</td><td class="value">${status}</td></tr>
            <tr><td class="label">Investment readiness</td><td class="value">${invest}</td></tr>
            <tr><td class="label">Early-bird access</td><td class="value">${earlybird}</td></tr>
            <tr><td class="label">Source</td><td class="value">${source}</td></tr>
          </table>

          <p class="section-title">Learning interests</p>
          <ul class="value">${formatList(interests)}</ul>

          <p class="section-title">Six-month goal</p>
          <div class="message-box">${goal}</div>

          <p class="section-title">Current challenge</p>
          <div class="message-box">${challenge}</div>
        </div>
      </div>
    </body>
  </html>
`

const buildApplicantConfirmationEmailHtml = ({
  name,
  siteUrl,
}: {
  name: string
  siteUrl: string
}) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <style>
        body {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          margin: 0;
          padding: 24px;
          background: #f5f6fb;
          color: #171717;
        }
        .card {
          max-width: 640px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid #e5e7eb;
          overflow: hidden;
        }
        .hero {
          padding: 32px 32px 24px;
          background: linear-gradient(135deg, #211d20 0%, #121a2e 100%);
          color: #ffffff;
        }
        .eyebrow {
          margin: 0 0 12px;
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #ffc068;
        }
        h1 {
          margin: 0 0 12px;
          font-size: 30px;
          line-height: 1.15;
        }
        p {
          margin: 0 0 16px;
          line-height: 1.65;
        }
        .hero-copy {
          color: rgba(255, 255, 255, 0.82);
          font-size: 16px;
          margin: 0;
        }
        .content {
          padding: 32px;
        }
        .section-title {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #737373;
          margin: 32px 0 12px;
        }
        .next-list {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .next-item {
          border: 1px solid #e5e5e5;
          border-radius: 18px;
          padding: 18px 18px 16px;
          margin-bottom: 12px;
          background: #faf8f4;
        }
        .next-item strong {
          display: block;
          font-size: 16px;
          color: #171717;
          margin-bottom: 6px;
        }
        .next-item span {
          color: #525252;
          font-size: 15px;
          line-height: 1.6;
        }
        .course-box {
          margin-top: 28px;
          padding: 20px;
          border-radius: 18px;
          border: 1px solid #f4c27b;
          background: #fff5e7;
        }
        .button {
          display: inline-block;
          margin-top: 8px;
          padding: 14px 22px;
          border-radius: 999px;
          background: #ffac4a;
          color: #211d20 !important;
          text-decoration: none;
          font-weight: 700;
        }
        .footer {
          margin-top: 28px;
          padding-top: 20px;
          border-top: 1px solid #e5e5e5;
          font-size: 14px;
          color: #737373;
        }
        .preheader {
          display: none !important;
          visibility: hidden;
          opacity: 0;
          color: transparent;
          height: 0;
          width: 0;
          overflow: hidden;
          mso-hide: all;
        }
      </style>
    </head>
    <body>
      <div class="preheader">
        Your Global Teacher Playbook application has been received.
      </div>
      <div class="card">
        <div class="hero">
          <p class="eyebrow">The Global Teacher Playbook</p>
          <h1>Application received, ${name}.</h1>
          <p class="hero-copy">
            You are one step closer to teaching globally from Kenya.
          </p>
        </div>
        <div class="content">
          <p>
            Thanks for applying for The Global Teacher Playbook. We have received your details and
            will review your application before sending the next steps.
          </p>

          <p class="section-title">What happens next</p>
          <ul class="next-list">
            <li class="next-item">
              <strong>Check your WhatsApp and email.</strong>
              <span>We will reach out within 24 hours with your payment details and cohort start date.</span>
            </li>
            <li class="next-item">
              <strong>Complete your payment.</strong>
              <span>Once you receive our message, you will have 48 hours to complete payment via M-Pesa to secure your spot.</span>
            </li>
            <li class="next-item">
              <strong>Receive your welcome pack.</strong>
              <span>After payment is confirmed, you will receive your module schedule, pre-course materials, WhatsApp community access, and first session link.</span>
            </li>
          </ul>

          <div class="course-box">
            <p><strong>The Global Teacher Playbook</strong></p>
            <p>5 modules · Live Google Meet · WhatsApp community · KES 6,500</p>
          </div>

          <p class="section-title">Course page</p>
          <p>
            You can revisit the programme details here:
          </p>
          <p>
            <a class="button" href="${siteUrl}/global-teacher-playbook">View Programme Details</a>
          </p>

          <div class="footer">
            <p>30 Degrees East<br />by Swaleh Kimani</p>
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
    const whatsapp = trimFormValue(body.whatsapp)
    const background = trimFormValue(body.background)
    const status = trimFormValue(body.status)
    const interests = escapeList(body.interests)
    const goal = trimFormValue(body.goal)
    const challenge = trimFormValue(body.challenge)
    const invest = trimFormValue(body.invest)
    const earlybird = trimFormValue(body.earlybird)
    const source = trimFormValue(body.source)
    const website = trimFormValue(body.website)

    if (hasHoneypotContent(website)) {
      return NextResponse.json(
        { error: 'Unable to submit application. Please try again.' },
        { status: 400 }
      )
    }

    if (
      !name ||
      !email ||
      !whatsapp ||
      !background ||
      !status ||
      interests.length === 0 ||
      !goal ||
      !challenge ||
      !invest ||
      !earlybird ||
      !source
    ) {
      return NextResponse.json(
        { error: 'All required fields must be completed.' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Enter a valid email address.' },
        { status: 400 }
      )
    }

    const submittedAt = new Date().toISOString()
    const contactEmailConfig = getContactEmailConfig()
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://30degreeseast.com').replace(
      /\/+$/,
      ''
    )
    const html = buildApplicationEmailHtml({
      background: escapeHtml(background),
      challenge: escapeHtml(challenge),
      earlybird: escapeHtml(earlybird),
      email: safeEmail,
      goal: escapeHtml(goal),
      interests,
      invest: escapeHtml(invest),
      name: safeName,
      source: escapeHtml(source),
      status: escapeHtml(status),
      whatsapp: escapeHtml(whatsapp),
    })
    const confirmationHtml = buildApplicantConfirmationEmailHtml({
      name: safeName,
      siteUrl,
    })

    const [internalEmail, confirmationEmail] = await Promise.all([
      resend.emails.send({
        from: contactEmailConfig.from,
        to: contactEmailConfig.to,
        replyTo: email,
        subject: `New Global Teacher Playbook Application: ${name}`,
        html,
      }),
      resend.emails.send({
        from: contactEmailConfig.from,
        to: email,
        subject: 'Your Global Teacher Playbook application was received',
        html: confirmationHtml,
      }),
    ])

    if (internalEmail.error) {
      console.error('Resend playbook internal email error:', internalEmail.error)
    }

    if (confirmationEmail.error) {
      console.error('Resend playbook confirmation email error:', confirmationEmail.error)
    }

    let savedToGoogleSheets = false

    if (hasGoogleSheetsPlaybookConfig()) {
      try {
        await appendPlaybookApplicationRowToGoogleSheets({
          background,
          challenge,
          confirmationEmailSent: !confirmationEmail.error,
          earlybird,
          email,
          goal,
          internalEmailSent: !internalEmail.error,
          interests,
          invest,
          name,
          sheetSavedAt: submittedAt,
          source,
          status,
          whatsapp,
        })
        savedToGoogleSheets = true
      } catch (error) {
        console.error('Google Sheets playbook application append error:', error)
      }
    }

    const applicationHandled = savedToGoogleSheets || !internalEmail.error || !confirmationEmail.error

    if (!applicationHandled) {
      return NextResponse.json(
        { error: 'Unable to submit application. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Application submitted successfully' },
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

    console.error('Global Teacher Playbook application error:', error)
    return NextResponse.json(
      { error: 'Unable to submit application. Please try again.' },
      { status: 500 }
    )
  }
}
