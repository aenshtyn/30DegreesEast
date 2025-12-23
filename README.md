# 30 Degrees East

A fast, minimalist Next.js website for Swaleh Kimani's personal brand and coaching business.

## Project Overview

**Website:** 30degreeseast.com
**Owner:** Swaleh Kimani
**Type:** Personal brand + coaching business website
**Primary Medium:** Video-first

### Core Purpose

- Act as Swaleh's personal HQ
- Communicate worldview and positioning clearly
- Convert visitors into applicants for coaching and audits

### Positioning

I help professionals, coaches, and educators build leverage through language, thinking, and systems—creating teaching frameworks that scale without burning out or becoming influencers.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Inter (Google Fonts)
- **Video:** Vimeo/YouTube embeds

## Project Structure

```
30DegreesEast/
├── app/
│   ├── about/              # About & Contact page
│   ├── coaching/           # Coaching services page
│   ├── insights/           # Video library page
│   ├── start-here/         # Onboarding page
│   ├── teaching-system-audit/  # Audit page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Main navigation
│   │   └── Footer.tsx      # Site footer
│   └── ui/
│       ├── CTAButton.tsx   # Call-to-action button
│       ├── ServiceCard.tsx # Service cards
│       └── VideoEmbed.tsx  # Video embed component
├── lib/
│   └── data/
│       └── videos.ts       # Video data structure
└── public/                 # Static assets
```

## Pages

1. **Home** (`/`) - Hero video, positioning, service overview
2. **Start Here** (`/start-here`) - Onboarding for new visitors
3. **Coaching** (`/coaching`) - Three coaching service tracks
4. **Teaching System Audit** (`/teaching-system-audit`) - Primary conversion page
5. **Insights** (`/insights`) - Video library organized by themes
6. **About** (`/about`) - About Swaleh + contact form

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Design Guidelines

- **Minimalist** - Clean, focused design
- **Neutral colors** - Black, white, and grays
- **Strong typography** - Clear hierarchy
- **Plenty of white space** - Calm, professional feel
- **No hype** - Avoid loud colors, popups, or influencer-style design

## Adding Videos

Videos are managed in `/lib/data/videos.ts`. To add a new video:

1. Open `lib/data/videos.ts`
2. Add a new video object to the `videos` array:

```typescript
{
  id: 'unique-id',
  title: 'Video Title',
  description: 'Brief description',
  videoUrl: 'https://player.vimeo.com/video/YOUR_VIDEO_ID',
  category: 'teaching-learning', // or other category
  publishedAt: '2024-01-01',
}
```

3. The video will automatically appear on the Insights page

### Video Categories

- `teaching-learning` - Teaching & Learning
- `systems-leverage` - Systems & Leverage
- `work-identity` - Work & Identity
- `coaching-education` - Coaching & Education

## Customization

### Update Video Placeholders

Replace all placeholder video URLs (`YOUR_VIDEO_ID`) with actual Vimeo or YouTube video IDs:

- Home page hero video
- Start Here intro video
- Coaching service videos
- Teaching System Audit explainer video
- Insights page videos (in `lib/data/videos.ts`)

### Configure Contact Form (Resend)

The contact form is integrated with [Resend](https://resend.com) for email delivery.

**Setup Required:**

1. Create a free Resend account at [resend.com](https://resend.com)
2. Get your API key from the Resend dashboard
3. Create a `.env.local` file with your credentials:

```bash
RESEND_API_KEY=your_api_key_here
RESEND_FROM_EMAIL=hello@30degreeseast.com
RESEND_TO_EMAIL=hello@30degreeseast.com
```

**Detailed Instructions:** See [RESEND_SETUP.md](./RESEND_SETUP.md) for complete setup guide.

## Performance Optimizations

- Next.js App Router for optimal performance
- Font optimization with `next/font`
- Image optimization ready with `next/image`
- Lazy loading for video embeds
- Minimal JavaScript bundle
- Static generation where possible

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted

## Future Enhancements (Out of Scope for V1)

- Blog/essays
- Online courses
- Payment systems
- Heavy animations

## Support

For issues or questions about the codebase, contact the development team.

## License

Private - All rights reserved by Swaleh Kimani
