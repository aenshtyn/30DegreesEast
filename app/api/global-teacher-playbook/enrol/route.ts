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

    const contactEmailConfig = getContactEmailConfig()
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
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

    const { data, error } = await resend.emails.send({
      from: contactEmailConfig.from,
      to: contactEmailConfig.to,
      replyTo: email,
      subject: `New Global Teacher Playbook Application: ${name}`,
      html,
    })

    if (error) {
      console.error('Resend playbook application error:', error)
      return NextResponse.json(
        { error: 'Unable to submit application. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Application submitted successfully', id: data?.id },
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
