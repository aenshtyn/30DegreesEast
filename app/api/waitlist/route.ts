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
          subject: 'You are on the 30 Degrees East waitlist',
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
                    margin-bottom: 16px;
                  }
                  p {
                    margin: 0 0 16px;
                    line-height: 1.6;
                  }
                </style>
              </head>
              <body>
                <div class="card">
                  <h1>Waitlist confirmed</h1>
                  <p>Hi ${safeName},</p>
                  <p>Your details have been added to the 30 Degrees East waitlist.</p>
                  <p>You will hear when new cohorts, digital products, or openings are released.</p>
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
