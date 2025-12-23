# Quick Start Guide

## Get Up and Running in 3 Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Update Video Placeholders

Replace placeholder video URLs with your actual Vimeo/YouTube video IDs:

#### Home Page
- File: `app/page.tsx`
- Line: Search for `YOUR_VIDEO_ID`

#### Start Here Page
- File: `app/start-here/page.tsx`
- Line: Search for `YOUR_INTRO_VIDEO_ID`

#### Coaching Page
- File: `app/coaching/page.tsx`
- Lines: Search for `YOUR_ENGLISH_VIDEO_ID` and `YOUR_COACHES_VIDEO_ID`

#### Teaching System Audit Page
- File: `app/teaching-system-audit/page.tsx`
- Line: Search for `YOUR_AUDIT_VIDEO_ID`

#### Insights Page (Video Library)
- File: `lib/data/videos.ts`
- Update the entire `videos` array with your actual videos

## Next Steps

### Add Real Videos

1. Get your Vimeo video ID from the video URL:
   - Vimeo URL: `https://vimeo.com/123456789`
   - Embed URL: `https://player.vimeo.com/video/123456789`

2. For YouTube:
   - YouTube URL: `https://www.youtube.com/watch?v=ABC123`
   - Embed URL: `https://www.youtube.com/embed/ABC123`

### Customize Content

All page content is in the `app/` directory:
- Home: `app/page.tsx`
- Start Here: `app/start-here/page.tsx`
- Coaching: `app/coaching/page.tsx`
- Teaching System Audit: `app/teaching-system-audit/page.tsx`
- Insights: `app/insights/page.tsx`
- About: `app/about/page.tsx`

### Add Contact Form Integration

The contact form in `app/about/page.tsx` needs backend integration. Options:

#### Option 1: Formspree (Easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update the form action:
   ```tsx
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

#### Option 2: Next.js API Route
1. Create `app/api/contact/route.ts`
2. Handle form submission
3. Send email using a service like SendGrid or Resend

### Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click Deploy

## Useful Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
app/
  ├── about/              # About & Contact page
  ├── coaching/           # Coaching services
  ├── insights/           # Video library
  ├── start-here/         # Onboarding page
  ├── teaching-system-audit/  # Audit page
  └── page.tsx            # Home page

components/
  ├── layout/             # Header & Footer
  └── ui/                 # Reusable components

lib/data/                 # Video data
```

## Need Help?

Check the full [README.md](./README.md) for detailed documentation.
