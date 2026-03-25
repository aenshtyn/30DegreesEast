import { after, NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

import {
  escapeHtml,
  formatWaitlistSource,
  getResendApiKey,
  getWaitlistEmailConfig,
  hasHoneypotContent,
  isMissingEnvVarError,
  isValidEmail,
  normalizeWaitlistSource,
  trimFormValue,
} from '@/lib/server/form-utils'
import {
  appendWaitlistRowToGoogleSheets,
  hasGoogleSheetsWaitlistConfig,
} from '@/lib/server/google-sheets'
import { saveWaitlistEntry } from '@/lib/server/resend-waitlist'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const resend = new Resend(getResendApiKey())
    const waitlistEmailConfig = getWaitlistEmailConfig()
    const body = await request.json()
    const name = trimFormValue(body.name)
    const email = trimFormValue(body.email)
    const website = trimFormValue(body.website)
    const source = normalizeWaitlistSource(body.source)

    if (hasHoneypotContent(website)) {
      return NextResponse.json(
        { error: 'Unable to submit waitlist entry right now. Please try again soon.' },
        { status: 400 }
      )
    }

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Both name and email are required.' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    const signedUpAt = new Date().toISOString()
    let savedToResendWaitlist = false

    try {
      await saveWaitlistEntry({ resend, email, name, signedUpAt, source })
      savedToResendWaitlist = true
    } catch (error) {
      console.error('Resend waitlist contact sync error:', error)
    }

    let savedToGoogleSheets = false

    if (hasGoogleSheetsWaitlistConfig()) {
      try {
        await appendWaitlistRowToGoogleSheets({
          email,
          name,
          resendContactSaved: savedToResendWaitlist,
          signedUpAt,
          source,
        })
        savedToGoogleSheets = true
      } catch (error) {
        console.error('Google Sheets waitlist append error:', error)
      }
    }

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const sourceLabel = formatWaitlistSource(source)
    const safeSourceLabel = escapeHtml(sourceLabel)
    const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://30degreeseast.com').replace(
      /\/+$/,
      ''
    )
    const internalFooterCopy = savedToGoogleSheets
      ? savedToResendWaitlist
        ? 'This signup was saved to Google Sheets and the Resend waitlist audience.'
        : 'This signup was saved to Google Sheets, but the Resend contact sync failed. Check server logs.'
      : savedToResendWaitlist
        ? 'This signup was saved to the Resend waitlist audience, but the Google Sheets sync failed. Check server logs.'
        : 'This signup came through the waitlist form, but both background saves failed. Check server logs.'

    const waitlistSaved = savedToGoogleSheets || savedToResendWaitlist

    after(async () => {
      try {
        const internalEmail = await resend.emails.send({
          from: waitlistEmailConfig.from,
          to: waitlistEmailConfig.to,
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
                    <div class="value">${safeName}</div>
                  </div>
                  <div class="item">
                    <div class="label">Email</div>
                    <div class="value"><a href="mailto:${safeEmail}">${safeEmail}</a></div>
                  </div>
                  <div class="item">
                    <div class="label">Source</div>
                    <div class="value">${safeSourceLabel}</div>
                  </div>
                  <div class="footer">
                    ${internalFooterCopy}
                  </div>
                </div>
              </body>
            </html>
          `,
        })

        if (internalEmail.error) {
          console.error('Resend waitlist internal email error:', internalEmail.error)
        }

        if (!waitlistSaved) {
          return
        }

        const confirmationEmail = await resend.emails.send({
          from: waitlistEmailConfig.from,
          to: email,
          subject: "You're on the 30 Degrees East waitlist",
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
                    color: #171717;
                  }
                  .card {
                    max-width: 620px;
                    margin: 0 auto;
                    background: #ffffff;
                    border-radius: 24px;
                    border: 1px solid #e5e7eb;
                    overflow: hidden;
                  }
                  .hero {
                    padding: 32px 32px 24px;
                    background: linear-gradient(135deg, #171717 0%, #2b2628 100%);
                    color: #ffffff;
                  }
                  .eyebrow {
                    font-size: 12px;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: #f7b34b;
                    margin: 0 0 12px;
                  }
                  h1 {
                    font-size: 30px;
                    line-height: 1.15;
                    margin: 0 0 12px;
                  }
                  p {
                    margin: 0 0 16px;
                    line-height: 1.6;
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
                  .offer-list {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                  }
                  .offer-item {
                    border: 1px solid #e5e5e5;
                    border-radius: 18px;
                    padding: 18px 18px 16px;
                    margin-bottom: 12px;
                    background: #faf8f4;
                  }
                  .offer-item strong {
                    display: block;
                    font-size: 16px;
                    color: #171717;
                    margin-bottom: 6px;
                  }
                  .offer-item span {
                    color: #525252;
                    font-size: 15px;
                    line-height: 1.6;
                  }
                  .button {
                    display: inline-block;
                    margin-top: 8px;
                    padding: 14px 22px;
                    border-radius: 999px;
                    background: #f7b34b;
                    color: #171717 !important;
                    text-decoration: none;
                    font-weight: 700;
                  }
                  .links {
                    margin-top: 20px;
                    font-size: 14px;
                    color: #525252;
                  }
                  .links a {
                    color: #171717;
                    text-decoration: underline;
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
                  You're on the 30 Degrees East waitlist for future cohorts, audits, co-creation labs, and digital products.
                </div>
                <div class="card">
                  <div class="hero">
                    <p class="eyebrow">30 Degrees East</p>
                    <h1>You're in, ${safeName}.</h1>
                    <p class="hero-copy">
                      You are now on the waitlist for the next 30 Degrees East openings.
                    </p>
                  </div>
                  <div class="content">
                    <p>
                      Thanks for joining. 30 Degrees East helps professionals, coaches, and
                      educators build leverage through language, thinking, and systems so their
                      knowledge can become structured teaching offers, digital products, and
                      sustainable online income.
                    </p>

                    <p class="section-title">What You'll Hear About</p>
                    <ul class="offer-list">
                      <li class="offer-item">
                        <strong>Flagship cohorts</strong>
                        <span>
                          Programs for turning what you already know into a clear teaching offer,
                          a stronger student experience, and more durable income.
                        </span>
                      </li>
                      <li class="offer-item">
                        <strong>Teaching System Audit</strong>
                        <span>
                          A paid diagnostic for coaches and educators who want sharper positioning,
                          better delivery, better pricing, and more leverage.
                        </span>
                      </li>
                      <li class="offer-item">
                        <strong>Co-creation labs and digital products</strong>
                        <span>
                          New opportunities to build lessons, offers, systems, and practical tools
                          that keep paying off after the live work is done.
                        </span>
                      </li>
                    </ul>

                    <p class="section-title">While You Wait</p>
                    <p>
                      If you want context before the next opening, start with what is already live.
                    </p>
                    <p>
                      <a class="button" href="${siteUrl}/#courses">Start Here</a>
                    </p>

                    <div class="footer">
                      <p>This signup came through the ${safeSourceLabel.toLowerCase()} form.</p>
                      <p>Swaleh Kimani<br />30 Degrees East</p>
                    </div>
                  </div>
                </div>
              </body>
            </html>
          `,
        })

        if (confirmationEmail.error) {
          console.error('Resend waitlist confirmation email error:', confirmationEmail.error)
        }
      } catch (error) {
        console.error('Deferred waitlist email error:', error)
      }
    })

    if (!waitlistSaved) {
      return NextResponse.json(
        { error: 'Unable to submit waitlist entry right now. Please try again soon.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      message: 'Added to waitlist successfully',
    })
  } catch (error) {
    if (isMissingEnvVarError(error)) {
      console.error(error.message)
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact us directly.' },
        { status: 503 }
      )
    }

    console.error('Waitlist submission error:', error)
    return NextResponse.json(
      { error: 'Unable to submit waitlist entry right now. Please try again soon.' },
      { status: 500 }
    )
  }
}
