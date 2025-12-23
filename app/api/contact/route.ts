import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, service, message } = body

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Map service values to readable names
    const serviceNames: Record<string, string> = {
      'coaching-english': 'Earn Online by Teaching English',
      'strategy-session': 'Thinking / Strategy Session',
      'teaching-audit': 'Teaching System Audit',
      'coaches-educators': 'Coaching for Coaches & Educators',
      'other': 'Other / General Inquiry',
    }

    const serviceName = serviceNames[service] || service

    // Send email using Resend
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RESEND_TO_EMAIL || 'hello@30degreeseast.com',
      replyTo: email,
      subject: `New Contact Form Submission: ${serviceName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: system-ui, -apple-system, sans-serif;
                line-height: 1.6;
                color: #171717;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                border-bottom: 2px solid #171717;
                padding-bottom: 20px;
                margin-bottom: 30px;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 600;
              }
              .section {
                margin-bottom: 25px;
              }
              .label {
                font-weight: 600;
                color: #404040;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
              }
              .value {
                font-size: 16px;
                color: #171717;
                padding: 10px 0;
              }
              .message-box {
                background-color: #f5f5f5;
                padding: 20px;
                border-radius: 8px;
                margin-top: 10px;
                white-space: pre-wrap;
              }
              .footer {
                margin-top: 40px;
                padding-top: 20px;
                border-top: 1px solid #e5e5e5;
                font-size: 14px;
                color: #737373;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>

            <div class="section">
              <div class="label">Service Interest</div>
              <div class="value">${serviceName}</div>
            </div>

            <div class="section">
              <div class="label">Name</div>
              <div class="value">${name}</div>
            </div>

            <div class="section">
              <div class="label">Email</div>
              <div class="value">
                <a href="mailto:${email}" style="color: #171717;">${email}</a>
              </div>
            </div>

            <div class="section">
              <div class="label">Message</div>
              <div class="message-box">${message}</div>
            </div>

            <div class="footer">
              <p>This message was sent from the 30 Degrees East contact form.</p>
              <p>Reply directly to this email to respond to ${name}.</p>
            </div>
          </body>
        </html>
      `,
    })

    return NextResponse.json(
      { message: 'Email sent successfully', id: data.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    )
  }
}
