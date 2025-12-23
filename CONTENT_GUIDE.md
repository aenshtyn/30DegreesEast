# Content Update Guide

This guide helps you identify and update all placeholder content throughout the website.

## Videos to Add

### Priority 1: Essential Videos

1. **Home Page Hero Video** (`app/page.tsx`)
   - Purpose: Introduce 30 Degrees East in 1-2 minutes
   - Replace: `YOUR_VIDEO_ID`
   - Location: app/page.tsx:22

2. **Start Here Intro Video** (`app/start-here/page.tsx`)
   - Purpose: Welcome new visitors, explain the site
   - Replace: `YOUR_INTRO_VIDEO_ID`
   - Location: app/start-here/page.tsx:24

3. **Teaching System Audit Explainer** (`app/teaching-system-audit/page.tsx`)
   - Purpose: Explain what the audit is and how it works
   - Replace: `YOUR_AUDIT_VIDEO_ID`
   - Location: app/teaching-system-audit/page.tsx:28

### Priority 2: Optional Service Videos

4. **Earn Online by Teaching English** (`app/coaching/page.tsx`)
   - Purpose: Explain this coaching track
   - Replace: `YOUR_ENGLISH_VIDEO_ID`
   - Location: app/coaching/page.tsx:38

5. **For Coaches & Educators** (`app/coaching/page.tsx`)
   - Purpose: Explain coaching for existing educators
   - Replace: `YOUR_COACHES_VIDEO_ID`
   - Location: app/coaching/page.tsx:121

### Priority 3: Insights Video Library

6. **Video Library** (`lib/data/videos.ts`)
   - Purpose: Build trust through video insights
   - Replace: Entire `videos` array with real content
   - Categories:
     - Teaching & Learning
     - Systems & Leverage
     - Work & Identity
     - Coaching & Education

## Content to Update

### Contact Information

**Email Address** (`app/about/page.tsx`)
- Current: `hello@30degreeseast.com`
- Update if different
- Location: app/about/page.tsx:148

### Form Integration

**Contact Form** (`app/about/page.tsx`)
- Current: Basic HTML form (non-functional)
- Action needed: Add form handling
- Options:
  - Formspree
  - Next.js API route
  - Third-party service

### About Section

**About Swaleh Content** (`app/about/page.tsx`)
- Current: Generic placeholder based on brief
- Action: Personalize with actual story
- Location: app/about/page.tsx:19-40

## Metadata to Review

### Site-Wide Metadata (`app/layout.tsx`)

```typescript
title: '30 Degrees East | by Swaleh Kimani'
description: 'I help professionals, coaches, and educators...'
```

Review and update if needed.

### Page-Specific Metadata

Each page has its own metadata. Review these files:
- `app/start-here/page.tsx`
- `app/coaching/page.tsx`
- `app/teaching-system-audit/page.tsx`
- `app/insights/page.tsx`
- `app/about/page.tsx`

## Optional Customizations

### Colors and Typography

**Tailwind Config** (`tailwind.config.js`)
- Current: Neutral color palette (grays)
- Typography: Inter font via Google Fonts
- Modify if you want different colors/fonts

### Navigation

**Header Links** (`components/layout/Header.tsx`)
- Current navigation structure matches the brief
- Modify if you want different page order or names

### Footer

**Footer Content** (`components/layout/Footer.tsx`)
- Review and update as needed
- Add social links if desired

## Content Checklist

Use this checklist to track your content updates:

- [ ] Home page hero video
- [ ] Start Here intro video
- [ ] Teaching System Audit explainer video
- [ ] Coaching service videos (optional)
- [ ] Video library content (at least 4-6 videos)
- [ ] Contact email address
- [ ] Contact form integration
- [ ] About page personal story
- [ ] Review all page metadata
- [ ] Test all video embeds
- [ ] Review and personalize copy throughout

## Tips for Writing Copy

Based on the brief's tone requirements:

### Do:
- Write calmly and confidently
- Focus on clarity and positioning
- Use straightforward language
- Explain systems and frameworks
- Set clear boundaries

### Don't:
- Use hype or exaggeration
- Add unnecessary emojis
- Write in an overly casual tone
- Promise quick results
- Use influencer-style language

## Video Embed Format

### Vimeo
```
https://player.vimeo.com/video/YOUR_VIDEO_ID
```

### YouTube
```
https://www.youtube.com/embed/YOUR_VIDEO_ID
```

Make sure videos are set to:
- Unlisted or Private (not Public if you want control)
- Allow embedding
- Appropriate privacy settings

## Questions?

Refer to the main [README.md](./README.md) for technical documentation.
