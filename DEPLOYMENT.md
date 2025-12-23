# Deployment Guide

## Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications and is made by the creators of Next.js.

### Step 1: Prepare Your Code

1. Make sure all changes are committed:
```bash
git init
git add .
git commit -m "Initial commit: 30 Degrees East website"
```

2. Create a repository on GitHub:
   - Go to github.com
   - Click "New repository"
   - Name it "30degreeseast" or similar
   - Don't initialize with README (we already have one)

3. Push to GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/30degreeseast.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in (use GitHub account for easy integration)
3. Click "New Project"
4. Import your GitHub repository
5. Configure project:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Add environment variables (if any)
7. Click "Deploy"

### Step 3: Custom Domain

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add `30degreeseast.com`
4. Follow Vercel's instructions to:
   - Add DNS records to your domain registrar
   - Configure CNAME or A records
5. Wait for DNS propagation (usually 5-60 minutes)

## Alternative: Deploy to Netlify

### Step 1: Prepare Repository

Same as Vercel Step 1 above.

### Step 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up or log in
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

### Step 3: Custom Domain

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter `30degreeseast.com`
4. Configure DNS at your registrar
5. Enable HTTPS (automatic with Netlify)

## Environment Variables

If you add environment variables later, set them in your deployment platform:

### Vercel
1. Project Settings → Environment Variables
2. Add variables:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_CONTACT_EMAIL`
   - etc.

### Netlify
1. Site Settings → Environment Variables
2. Add the same variables

## Pre-Deployment Checklist

Before deploying to production:

### Content
- [ ] Replace all video placeholder URLs
- [ ] Update contact email address
- [ ] Personalize About page content
- [ ] Add real videos to Insights page
- [ ] Review all copy and metadata

### Technical
- [ ] Test all pages locally
- [ ] Run `npm run build` to check for errors
- [ ] Test all internal links
- [ ] Test all video embeds
- [ ] Test contact form (if implemented)
- [ ] Test on mobile devices
- [ ] Test in different browsers

### SEO & Analytics
- [ ] Add Google Analytics (optional)
- [ ] Add favicon
- [ ] Verify metadata on all pages
- [ ] Add robots.txt (if needed)
- [ ] Add sitemap.xml (if needed)

## Post-Deployment

### 1. Test Production Site

- Test all pages
- Test all navigation
- Test video embeds
- Test form submission
- Check mobile responsiveness
- Test in multiple browsers

### 2. Monitor Performance

Use these tools:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [GTmetrix](https://gtmetrix.com/)

### 3. Set Up Monitoring

Optional monitoring services:
- Vercel Analytics (built-in)
- Google Analytics
- Plausible Analytics
- Fathom Analytics

## Custom Domain DNS Configuration

### For Vercel

Add these records to your DNS:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### For Netlify

```
Type: A
Name: @
Value: [Netlify's IP]

Type: CNAME
Name: www
Value: [your-site].netlify.app
```

## SSL/HTTPS

Both Vercel and Netlify automatically provide free SSL certificates via Let's Encrypt. No configuration needed.

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch automatically deploys
- Preview deployments for pull requests
- Instant rollback if needed

## Domain Email Setup

To set up email for your domain (e.g., hello@30degreeseast.com):

### Option 1: Google Workspace
1. Sign up for Google Workspace
2. Verify domain ownership
3. Configure MX records

### Option 2: Zoho Mail (Free tier available)
1. Sign up at zoho.com/mail
2. Add your domain
3. Configure MX records
4. Create email accounts

### Option 3: Email Forwarding
Many domain registrars offer free email forwarding:
- Forward hello@30degreeseast.com → your-personal@gmail.com

## Troubleshooting

### Build Fails

Check these common issues:
- Run `npm run build` locally first
- Check for TypeScript errors
- Verify all imports are correct
- Check for missing dependencies

### Videos Not Loading

- Verify video URLs are correct
- Check video privacy settings (allow embedding)
- Test video URLs directly in browser
- Check for mixed content (HTTP/HTTPS) issues

### Form Not Working

- Implement form backend (see QUICKSTART.md)
- Configure environment variables
- Test with actual email service

## Getting Help

### Vercel
- [Vercel Docs](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)

### Netlify
- [Netlify Docs](https://docs.netlify.com/)
- [Netlify Support](https://www.netlify.com/support/)

### Next.js
- [Next.js Docs](https://nextjs.org/docs)
- [Next.js GitHub](https://github.com/vercel/next.js)

---

**Ready to deploy?** Follow the steps above and your site will be live in minutes.
