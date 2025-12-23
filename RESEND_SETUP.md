# Resend Email Setup Guide

The contact form is integrated with [Resend](https://resend.com), a modern email API for developers.

## Quick Setup

### 1. Create a Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### 2. Get Your API Key

1. Log into your Resend dashboard
2. Go to "API Keys"
3. Click "Create API Key"
4. Name it (e.g., "30 Degrees East Production")
5. Copy the API key (you'll only see it once!)

### 3. Configure Your Domain (Optional but Recommended)

For production, you should verify your domain to send emails from your own domain (e.g., hello@30degreeseast.com).

#### In Resend Dashboard:
1. Go to "Domains"
2. Click "Add Domain"
3. Enter `30degreeseast.com`
4. Copy the DNS records Resend provides

#### In Your Domain Registrar:
1. Add the DNS records Resend provided
2. Wait for verification (usually 5-60 minutes)
3. Once verified, you can send from your domain

### 4. Set Environment Variables

Create a `.env.local` file in your project root:

```bash
# .env.local
RESEND_API_KEY=re_123456789_your_actual_api_key
RESEND_FROM_EMAIL=hello@30degreeseast.com
RESEND_TO_EMAIL=hello@30degreeseast.com
```

**Important:**
- Replace `re_123456789_your_actual_api_key` with your actual Resend API key
- Use `onboarding@resend.dev` for `RESEND_FROM_EMAIL` if you haven't verified your domain yet
- `RESEND_TO_EMAIL` is where form submissions will be sent

### 5. Test Locally

```bash
npm run dev
```

1. Go to http://localhost:3000/about
2. Fill out the contact form
3. Submit
4. Check your email inbox

### 6. Deploy to Production

#### For Vercel:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add the three environment variables:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `RESEND_TO_EMAIL`
4. Redeploy your site

#### For Netlify:
1. Go to Site Settings → Environment Variables
2. Add the same three variables
3. Redeploy

## How It Works

### Contact Form Flow

1. User fills out form at `/about#contact`
2. Form data is sent to `/api/contact` (POST request)
3. API route validates the data
4. Resend sends a formatted email to your inbox
5. User sees success/error message

### Email Format

The emails you receive will include:
- Service interest (which offering they selected)
- Name
- Email address (with reply-to set automatically)
- Message
- Clean, professional HTML formatting

### Reply Functionality

When you receive a contact form submission:
- The email's "Reply-To" is automatically set to the sender's email
- Just hit reply in your email client to respond directly

## Pricing

Resend offers:
- **Free Tier:** 100 emails/day, 3,000 emails/month
- **Pro Tier:** $20/month for 50,000 emails/month

The free tier is more than enough for most small businesses.

## Troubleshooting

### "Failed to send email" Error

Check these:
1. Is `RESEND_API_KEY` set correctly in `.env.local`?
2. Is the API key valid (check Resend dashboard)?
3. Check the browser console for errors
4. Check your terminal/logs for server errors

### Email Not Arriving

1. Check spam folder
2. Verify `RESEND_TO_EMAIL` is correct
3. Check Resend dashboard logs
4. If using a custom domain, ensure it's verified

### Domain Not Verified

1. Check DNS records are added correctly
2. Wait at least 15-60 minutes for propagation
3. Use `dig` or `nslookup` to verify DNS records
4. In the meantime, use `onboarding@resend.dev` as `RESEND_FROM_EMAIL`

### Rate Limits

If you're hitting rate limits:
1. Upgrade to Pro plan
2. Add client-side rate limiting
3. Implement honeypot or CAPTCHA

## Security Best Practices

### Environment Variables
- ✅ Never commit `.env.local` to git (already in .gitignore)
- ✅ Never expose API keys in client-side code
- ✅ Use different API keys for development and production

### Form Validation
The form includes:
- Required field validation
- Email format validation
- Server-side validation
- Rate limiting (via Resend)

### Spam Prevention

To add CAPTCHA (optional):
1. Install reCAPTCHA or hCaptcha
2. Add to `ContactForm.tsx`
3. Validate in `/api/contact/route.ts`

## Advanced Configuration

### Custom Email Templates

You can customize the email HTML in `/app/api/contact/route.ts`:

```typescript
html: `
  // Your custom HTML here
`
```

### Auto-Reply to Sender

To send an auto-reply confirmation:

```typescript
// In /app/api/contact/route.ts, add another email send:
await resend.emails.send({
  from: process.env.RESEND_FROM_EMAIL!,
  to: email, // sender's email
  subject: 'Thank you for reaching out',
  html: `
    <p>Hi ${name},</p>
    <p>Thank you for your message. I'll respond within 2-3 business days.</p>
    <p>Best,<br>Swaleh</p>
  `,
})
```

### Multiple Recipients

To send to multiple email addresses:

```typescript
to: ['hello@30degreeseast.com', 'backup@30degreeseast.com']
```

## Support

- **Resend Docs:** [resend.com/docs](https://resend.com/docs)
- **Resend Support:** [resend.com/support](https://resend.com/support)
- **API Reference:** [resend.com/docs/api-reference](https://resend.com/docs/api-reference)

---

**Ready to go?** Follow the steps above and your contact form will be live!
