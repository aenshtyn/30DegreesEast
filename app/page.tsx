import Image from 'next/image'
import Link from 'next/link'

import DigitalProductsShelf, { type DigitalProduct } from '@/components/home/DigitalProductsShelf'
import FreebiesWithWaitlist, { type Freebie } from '@/components/home/FreebiesWithWaitlist'
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel'
import CTAButton from '@/components/ui/CTAButton'
import WaitlistForm from '@/components/ui/WaitlistForm'

/**
 * Implementation Plan:
 * - app/page.tsx: align homepage sections, copy, and anchors with the redesign brief.
 * - components/ui/CTAButton.tsx: shift CTA styling to the Pastel Orange accent token.
 * - components/ui/WaitlistForm.tsx: keep the waitlist form accessible and on-brand.
 * - tailwind.config.js: add reusable Raisin Black and Pastel Orange theme tokens.
 */

const empathyBullets = [
  'You have knowledge and skills but struggle to package them into courses.',
  'You’re teaching online but not getting enough students or clients.',
  'You feel overwhelmed trying to market yourself and create content.',
  'You want to grow revenue without burning out.',
  'You know you can make a bigger impact, but don’t know where to start.',
]

const roadmapSteps = [
  {
    title: 'Discover Your Path',
    description:
      'Identify your niche, your expertise, and the best way to turn your teaching into an online business.',
  },
  {
    title: 'Design your first teaching system or course',
    description:
      'Turn your lessons into a repeatable framework with clear modules and outcomes.',
  },
  {
    title: 'Launch with simple, sustainable marketing',
    description: 'No influencer grind. Use simple funnels, email, and repeatable messages.',
  },
  {
    title: 'Add systems and co-creation',
    description:
      'Add recurring revenue (memberships, bundles) and co-created lessons or programs.',
    linkLabel: 'See how co-creation works',
    href: '/co-creation',
  },
]

const courses = [
  {
    title: 'Teach English Online (Flagship Course)',
    audience: 'Teachers and professionals who want a full roadmap to teaching English online.',
    bullets: [
      'Build a complete teaching system (not random lessons)',
      'Create pre-recorded and live offers that fit your schedule',
      'Set prices that reflect your experience and value',
    ],
    meta: ['Format: Step-by-step program with video lessons, templates, and guided implementation.'],
    ctaLabel: 'See Program Modules',
    ctaHref: '/teach-english-online',
  },
  {
    title: 'Build Your Teaching Brand Online',
    audience: 'Teachers who have content but no audience',
    bullets: ['Social media strategy', 'Creating lead magnets', 'Branding basics (colors, logo, messaging)'],
    meta: [
      'Outcome: Ready-to-promote personal brand',
      'Format: 3–4 modules, worksheets, optional group coaching',
    ],
    ctaLabel: 'Join the Waiting List',
    ctaHref: '#waitlist',
  },
  {
    title: 'Monetize Your Expertise: Selling Digital Products & Templates',
    audience: 'Professionals or teachers with teaching materials',
    bullets: [
      'Creating PDFs, prerecorded videos, worksheets, and downloadable templates',
      'Listing on marketplaces or your own platform',
      'Email marketing and upsells',
    ],
    meta: ['Outcome: Passive income streams'],
    ctaLabel: 'Join the Waiting List',
    ctaHref: '#waitlist',
  },
]

const digitalProducts: DigitalProduct[] = [
  {
    title: 'Curriculum Planning Toolkit',
    format: 'Template pack',
    description: 'Map every module, lesson, and delivery asset for your next course launch.',
    ctaLabel: 'View product',
    longDescription:
      'Break the blank page problem with guided worksheets that move you from scattered ideas to a full curriculum outline. Ideal for teachers who are ready to turn existing lessons into a structured course.',
    includes: ['Curriculum runway worksheet', 'Offer promise and outcomes grid', 'Filming + delivery checklist'],
    downloads: [
      {
        label: 'Download the toolkit',
        href: '/downloads/curriculum-planning-toolkit.txt',
      },
    ],
  },
  {
    title: 'Lesson Systems Dashboard',
    format: 'Notion workspace',
    description: 'Track leads, students, and fulfillment in one easy-to-use dashboard.',
    ctaLabel: 'View product',
    longDescription:
      'A Notion workspace to manage funnels, onboarding, and delivery tasks so nothing slips through when you enrol new students.',
    includes: ['Pipeline Kanban board', 'Offer library + price tracker', 'Student onboarding checklist'],
    downloads: [
      {
        label: 'Duplicate the dashboard',
        href: '/downloads/lesson-systems-dashboard.txt',
      },
    ],
  },
  {
    title: 'Teacher Email Mini-Course',
    format: 'Mini-course',
    description: 'Templates + swipe copy for nurture emails that convert interested leads.',
    ctaLabel: 'View product',
    longDescription:
      'A week-long drip with scripts for value emails, sales pivots, and launch reminders so you can show up confidently in the inbox.',
    includes: ['7 ready-to-edit email scripts', 'Call-to-action checklist', 'Deliverability quickstart guide'],
    downloads: [
      {
        label: 'Grab the email scripts',
        href: '/downloads/teacher-email-mini-course.txt',
      },
    ],
  },
]

const freebies: Freebie[] = [
  {
    title: 'Teach English Online Roadmap (PDF)',
    description: 'A one-page overview of the path from classroom to online income.',
    icon: 'document',
    downloadUrl: '/downloads/teach-english-online-roadmap.txt',
  },
  {
    title: 'Lesson Framework Template',
    description: 'A reusable template for structuring online English lessons.',
    icon: 'template',
    downloadUrl: '/downloads/lesson-framework-template.txt',
  },
  {
    title: 'Mini-training: From Live Lesson to Pre-Recorded Course',
    description: 'A short video that shows how to convert one lesson into a course.',
    icon: 'video',
    downloadUrl: '/downloads/live-to-course-mini-training.txt',
  },
]

type SuccessStory = {
  name: string
  role: string
  quote: string
  image: string
}

const successStories: SuccessStory[] = [
  {
    name: 'Sarah L.',
    role: 'Teacher, Cape Town',
    quote:
      'Working with 30 Degrees East helped me turn my one-to-one lessons into a clear package. I launched my first online English program and signed my first 5 students in a month.',
    image: '/testimonials/sarah-l.svg',
  },
  {
    name: 'Njeri M.',
    role: 'Educator, Kenya',
    quote:
      'I overcame imposter syndrome and the need for perfection. The practical guidance, accountability check-ins, and supportive community helped me grow into online teaching with more confidence, while feeling much more comfortable and natural on camera.',
    image: '/testimonials/njeri.jpeg',
  },
  {
    name: 'Gishini',
    role: 'Educator, Kenya',
    quote:
      'This program helped me tone down imposter syndrome, stop shying away from teaching opportunities, and gain a much clearer picture of what my teaching business could look like. It felt especially practical because it came from a Kenyan perspective.',
    image: '/testimonials/gishini.jpeg',
  },
]

export default function Home() {
  return (
    <>
      <section id="hero" className="section-padding bg-raisin text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-raisin/70 p-8 shadow-soft-card backdrop-blur sm:p-10">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="space-y-6 text-center md:text-left">
                <span className="inline-flex items-center justify-center rounded-full border border-white/30 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
                  Teaching systems for modern educators
                </span>
                <h1 className="font-sans text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl">
                  I help teachers, professionals, and educators confidently transition into the digital space — turning what they already know into online income, without burnout or influencer pressure.
                </h1>
                <p className="text-base text-white/80">
                  Pre-recorded courses, teaching systems, and guidance to build sustainable online income.
                </p>
                <div className="flex flex-col gap-4 md:flex-row">
                  <CTAButton href="/teach-english-online" className="w-full md:w-auto">
                    See the Teach English Online Program
                  </CTAButton>
                  <CTAButton
                    href="#waitlist"
                    variant="secondary"
                    className="w-full border-white/40 text-white hover:bg-white/10 md:w-auto"
                  >
                    Join the Waiting List
                  </CTAButton>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="w-full max-w-sm rounded-[32px] border border-accent-500/50 bg-white/5 p-2 shadow-2xl">
                  <div className="overflow-hidden rounded-[28px]">
                    <Image
                      src="/hero-portrait.svg"
                      alt="Abstract illustration for digital teaching systems"
                      width={480}
                      height={640}
                      priority
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="empathy-title">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl rounded-[28px] border border-neutral-100 bg-neutral-50/70 p-10 shadow-soft-card">
            <h2 id="empathy-title" className="section-heading text-center">
              You want to grow your teaching impact, but feel stuck in one of these…
            </h2>
            <ul className="mt-10 space-y-6 text-lg text-neutral-800">
              {empathyBullets.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent-50">
                    <span className="h-2 w-2 rounded-full bg-accent-500" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center text-neutral-900">
              If that sounds like you, you’re in the right place.
            </p>
          </div>
        </div>
      </section>

      <section id="roadmap" className="section-padding bg-raisin text-white" aria-labelledby="roadmap-title">
        <div className="container-custom">
          <h2 id="roadmap-title" className="section-heading text-center">
            How we turn your experience into online income
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {roadmapSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-soft-card"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/20 text-2xl font-semibold text-accent-400">
                    {index + 1}
                  </span>
                  {step.href ? (
                    <Link
                      href={step.href}
                      className="text-xl font-semibold leading-snug text-white underline-offset-4 hover:text-accent-200 hover:underline"
                    >
                      {step.title}
                    </Link>
                  ) : (
                    <h3 className="text-xl font-semibold leading-snug">{step.title}</h3>
                  )}
                </div>
                <p className="mt-4 text-base text-white/80">{step.description}</p>
                {step.href && step.linkLabel && (
                  <Link
                    href={step.href}
                    className="mt-4 inline-flex items-center text-sm font-semibold text-accent-200 underline-offset-4 hover:text-white hover:underline"
                  >
                    {step.linkLabel}
                    <span className="ml-1" aria-hidden>
                      →
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton href="/teach-english-online" className="inline-flex">
              See the Teach English Online Program
            </CTAButton>
          </div>
        </div>
      </section>

      <section id="courses" className="section-padding section-gradient" aria-labelledby="courses-title">
        <div className="container-custom">
          <h2 id="courses-title" className="section-heading text-center">
            Courses and programs
          </h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.title}
                className="flex h-full flex-col rounded-[28px] border border-white/80 bg-white p-8 shadow-soft-card"
              >
                <div className="flex flex-1 flex-col gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Program</p>
                    <h3 className="mt-2 text-2xl text-neutral-900">{course.title}</h3>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Who it’s for</p>
                    <p className="mt-2 text-base text-neutral-700">{course.audience}</p>
                  </div>
                  <ul className="space-y-3 text-neutral-700">
                    {course.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="min-h-20 space-y-2 text-neutral-600">
                    {course.meta.map((detail) => (
                      <p key={detail}>{detail}</p>
                    ))}
                  </div>
                </div>
                <div className="mt-6 border-t border-neutral-100 pt-6">
                  <CTAButton href={course.ctaHref ?? '#waitlist'} className="w-full">
                    {course.ctaLabel ?? 'Join the Waiting List'}
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CTAButton href="#waitlist" variant="secondary" className="inline-flex">
              Join the Waiting List
            </CTAButton>
          </div>
        </div>
      </section>

      <section id="products" className="section-padding bg-raisin text-white" aria-labelledby="products-title">
        <div className="container-custom">
          <div className="flex flex-col gap-4 text-center">
            <h2 id="products-title" className="section-heading">
              Digital Products Section – Here’s where your ready-to-use tools live
            </h2>
            <p className="text-white/75">
              A curated shelf of templates, worksheets, and assets you can plug into your teaching systems.
            </p>
          </div>
          <DigitalProductsShelf products={digitalProducts} />
        </div>
      </section>

      <section id="freebies" className="section-padding bg-neutral-50" aria-labelledby="freebies-title">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="freebies-title" className="section-heading">
              Start with free resources
            </h2>
          </div>
          <FreebiesWithWaitlist freebies={freebies} />
          <div className="mt-10 flex justify-center">
            <CTAButton href="/freebies">See All Freebies</CTAButton>
          </div>
        </div>
      </section>

      <section id="stories" className="section-padding bg-raisin text-white" aria-labelledby="stories-title">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl text-center">
            <h2 id="stories-title" className="section-heading">
              Success stories from real teachers
            </h2>
          </div>
          <div className="mt-12">
            <TestimonialsCarousel stories={successStories} />
          </div>
          <div className="mt-10 text-center">
            <CTAButton href="/teach-english-online">Read Full Testimonials</CTAButton>
          </div>
        </div>
      </section>

      <section id="waitlist" className="section-padding bg-raisin text-white" aria-labelledby="waitlist-title">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-[#1a171b] p-10 shadow-soft-card">
            <h2 id="waitlist-title" className="section-heading text-center">
              Ready to start teaching English online?
            </h2>
            <p className="mt-4 text-center text-white/80">
              Join the waiting list to be the first to hear when new pre-recorded lessons,
              <Link href="/co-creation" className="ml-1 font-semibold text-accent-200 underline-offset-4 hover:underline">
                co-creation labs
              </Link>
              , and live cohorts open.
            </p>
            <WaitlistForm />
            <nav className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
              <a href="#courses" className="underline-offset-4 hover:text-white hover:underline">
                Courses
              </a>
              <a href="#products" className="underline-offset-4 hover:text-white hover:underline">
                Digital Products
              </a>
              <a href="#freebies" className="underline-offset-4 hover:text-white hover:underline">
                Freebies
              </a>
              <a href="#stories" className="underline-offset-4 hover:text-white hover:underline">
                Success Stories
              </a>
              <a href="#waitlist" className="underline-offset-4 hover:text-white hover:underline">
                Waiting List
              </a>
              <Link href="/co-creation" className="underline-offset-4 hover:text-white hover:underline">
                Co-creation Labs
              </Link>
            </nav>
          </div>
        </div>
      </section>
    </>
  )
}
