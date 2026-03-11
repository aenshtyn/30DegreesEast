import type { Metadata } from 'next'
import Image from 'next/image'

import CTAButton from '@/components/ui/CTAButton'

type IconName =
  | 'classroom'
  | 'online'
  | 'expertise'
  | 'flexible'
  | 'video'
  | 'workbook'
  | 'live'
  | 'community'
  | 'support'
  | 'lifetime'

const audienceCards = [
  {
    icon: 'classroom' as const,
    title: 'Classroom teachers ready to go digital',
    description:
      'You have the skills and experience. You just need the system and the confidence to take it online.',
  },
  {
    icon: 'online' as const,
    title: 'Teachers already online but not earning enough',
    description:
      'You are teaching but your income is inconsistent. This gives you the structure to fix that.',
  },
  {
    icon: 'expertise' as const,
    title: 'Professionals who want to teach their expertise',
    description:
      'You do not need to be a certified teacher to teach what you know. You just need the right framework.',
  },
  {
    icon: 'flexible' as const,
    title: 'Anyone who wants income that works around their life',
    description:
      'Not a second job, a flexible system that earns whether you are teaching live or not.',
  },
]

const outcomes = [
  {
    number: '01',
    title: 'A complete, structured teaching system',
    description:
      'Not random lessons, a repeatable framework that delivers consistent results for your students and consistent income for you.',
  },
  {
    number: '02',
    title: 'Your first or next online offer, priced correctly',
    description:
      'A live or pre-recorded offer with pricing that reflects your experience, not what you guessed or what someone else charges.',
  },
  {
    number: '03',
    title: 'A simple system to find and convert students',
    description:
      'A marketing approach that does not require going viral, just clear messaging and the right places to show up.',
  },
  {
    number: '04',
    title: 'The foundation for recurring, scalable income',
    description:
      'Once your first offer works, you will know exactly how to layer in products and income streams that compound over time.',
  },
]

const curriculumSections = [
  {
    title: 'Section 1 · Welcome & Course Overview',
    lectures: '5 lectures',
    duration: '30 min',
    lessons: [
      'Welcome to the course',
      'How to get the most out of this program',
      'The online English teaching landscape today',
      'What success looks like at the end of this course',
      'Meet your instructor, Swaleh Kimani',
    ],
  },
  {
    title: 'Section 2 · Building Your Teaching Identity',
    lectures: '8 lectures',
    duration: '55 min',
    lessons: [
      'Who are you as a teacher online?',
      'Defining your teaching niche',
      'Your ideal student profile',
      'Crafting your teaching brand message',
      'Building credibility from where you are now',
      'Setting your teaching goals',
    ],
  },
  {
    title: 'Section 3 · Designing Offers Students Want',
    lectures: '5 lectures',
    duration: '35 min',
    lessons: [
      'Choosing between one-to-one, group, and self-paced formats',
      'Structuring an offer around real student outcomes',
      'Pricing your first online English program',
      'Positioning your offer clearly',
      'Avoiding common offer mistakes',
    ],
  },
  {
    title: 'Section 4 · Creating Lessons That Scale',
    lectures: '5 lectures',
    duration: '35 min',
    lessons: [
      'Turning scattered lessons into a repeatable framework',
      'Planning live sessions with confidence',
      'Creating pre-recorded lessons that still feel personal',
      'Using templates, worksheets, and student prompts well',
      'Building a lesson flow you can reuse',
    ],
  },
  {
    title: 'Section 5 · Finding Students Online',
    lectures: '6 lectures',
    duration: '30 min',
    lessons: [
      'Where your first students actually come from',
      'Building simple visibility without becoming an influencer',
      'Writing messages that make your offer clear',
      'Using content, referrals, and DMs strategically',
      'Turning inquiries into paying students',
      'Following up without sounding pushy',
    ],
  },
  {
    title: 'Section 6 · Systems, Tools, and Delivery',
    lectures: '4 lectures',
    duration: '20 min',
    lessons: [
      'The only tools you need to get started',
      'Onboarding students smoothly',
      'Managing your schedule without burning out',
      'Tracking delivery and student progress',
    ],
  },
  {
    title: 'Section 7 · Growing Beyond One-to-One Teaching',
    lectures: '4 lectures',
    duration: '20 min',
    lessons: [
      'Packaging your knowledge into courses and products',
      'Creating repeatable assets from your live teaching',
      'Adding support without adding chaos',
      'Planning your next revenue layer',
    ],
  },
  {
    title: 'Section 8 · Building Your Independent Teaching Business',
    lectures: '4 lectures',
    duration: '25 min',
    lessons: [
      'Moving beyond platforms and owning your students',
      'Building recurring income with packages and memberships',
      'Adding digital products to your income mix',
      'Your 12-month independent teaching business roadmap',
    ],
  },
]

const testimonials = [
  {
    name: 'Sarah L.',
    role: 'Teacher, Cape Town',
    quote:
      'Working with 30 Degrees East helped me turn my one-to-one lessons into a clear package. I launched my first online English program and signed my first 5 students in a month. I finally feel like I have a real business, not just a side hustle.',
    image: '/testimonials/sarah-l.svg',
  },
  {
    name: 'Njeri M.',
    role: 'Educator, Kenya',
    quote:
      'One major shift for me was overcoming imposter syndrome and letting go of the need for perfection. I have learned to focus on progress and authenticity rather than trying to appear flawless. I now approach online teaching with more confidence and feel much more comfortable and natural on camera.',
    image: '/testimonials/njeri.jpeg',
  },
  {
    name: 'Gishini',
    role: 'Educator, Kenya',
    quote:
      'This program helped me significantly tone down imposter syndrome. I am no longer shying away from applying to teaching opportunities or accepting referrals. I now have a much clearer idea of where to start and what my teaching business could look like, and that boosts my confidence significantly.',
    image: '/testimonials/gishini.jpeg',
  },
]

const includedItems = [
  {
    icon: 'video' as const,
    title: 'Video Lessons',
    description: 'Step-by-step modules you watch at your own pace.',
  },
  {
    icon: 'workbook' as const,
    title: 'PDF Workbooks & Templates',
    description: 'Done-for-you frameworks, pricing sheets, and lesson plans.',
  },
  {
    icon: 'live' as const,
    title: 'Live Q&A Calls',
    description: 'Monthly calls with Swaleh to answer your real questions.',
  },
  {
    icon: 'community' as const,
    title: 'Private Community',
    description: 'A group of educators at the same stage as you.',
  },
  {
    icon: 'support' as const,
    title: '1-on-1 Support',
    description: 'Direct access to Swaleh for personalized guidance.',
  },
  {
    icon: 'lifetime' as const,
    title: 'Lifetime Access & Updates',
    description: 'Pay once and keep access to the program and future updates.',
  },
]

const pricingIncludes = [
  '25+ video lessons, self-paced, lifetime access',
  'All PDF workbooks, templates, and frameworks',
  'Monthly live Q&A calls with Swaleh',
  'Private community access',
  '1-on-1 support session',
  'All future program updates',
]

const faqs = [
  {
    question: 'Do I need to be a certified English teacher to join?',
    answer:
      'No. This program is for anyone who teaches English, or wants to, whether that is a certified teacher, a professional with strong English skills, or someone who has been tutoring informally.',
  },
  {
    question: 'How long does the program take to complete?',
    answer:
      'Most students complete the core modules in 4 to 6 weeks at a comfortable pace. Because you have lifetime access, you can go slower or faster depending on your schedule.',
  },
  {
    question: 'What if I am already teaching online? Is this still useful?',
    answer:
      'Yes, especially if your income is inconsistent or you feel like you are working too hard for what you are earning. The program covers pricing, systems, and marketing in depth.',
  },
  {
    question: 'What platforms and tools will I need?',
    answer:
      'You will need a reliable internet connection, a phone or laptop with a camera, and a free Zoom or Google Meet account. We cover which tools to use and which to ignore inside the program.',
  },
  {
    question: 'Is there a refund policy?',
    answer:
      'The HTML source references a 14-day refund policy. Keep or adjust that language once the actual checkout policy is confirmed.',
  },
  {
    question: 'How do the live Q&A calls work?',
    answer:
      'Monthly calls are held via Zoom. You submit your questions in advance and Swaleh works through them live. All calls are recorded and added to your program library.',
  },
]

export const metadata: Metadata = {
  title: 'Teach English Online Program | 30 Degrees East',
  description:
    'A complete sales page for the Teach English Online program, covering outcomes, curriculum, support, pricing, and frequently asked questions.',
}

function FeatureIcon({ name }: { name: IconName }) {
  switch (name) {
    case 'classroom':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <path d="M4 6h16v9H4z" />
          <path d="M8 19h8" />
          <path d="M12 15v4" />
        </svg>
      )
    case 'online':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8" />
          <path d="M12 16v4" />
          <path d="M9 9h6" />
        </svg>
      )
    case 'expertise':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <path d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z" />
          <path d="m9.5 12 1.8 1.8L15 10.2" />
        </svg>
      )
    case 'flexible':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l3 2" />
        </svg>
      )
    case 'video':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <rect x="3" y="5" width="14" height="14" rx="2" />
          <path d="m10 9 4 3-4 3z" fill="currentColor" stroke="none" />
          <path d="m17 10 4-2v8l-4-2" />
        </svg>
      )
    case 'workbook':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <path d="M7 4h9l3 3v13H7z" />
          <path d="M16 4v4h4" />
          <path d="M10 12h6M10 16h4" />
        </svg>
      )
    case 'live':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <rect x="3" y="6" width="13" height="12" rx="2" />
          <path d="m16 10 5-3v10l-5-3" />
          <circle cx="8" cy="12" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'community':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <path d="M16 19v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1" />
          <circle cx="10" cy="8" r="3" />
          <path d="M20 19v-1a4 4 0 0 0-3-3.87" />
          <path d="M14 5.13a3 3 0 0 1 0 5.74" />
        </svg>
      )
    case 'support':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <path d="M12 21s-6-4.35-8.5-8A5.3 5.3 0 0 1 12 5.2 5.3 5.3 0 0 1 20.5 13C18 16.65 12 21 12 21Z" />
          <path d="M10 12h4M12 10v4" />
        </svg>
      )
    case 'lifetime':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <path d="M18.5 12c1.93 0 3.5-1.57 3.5-3.5S20.43 5 18.5 5c-2.64 0-4.02 2.34-6.5 7-2.48-4.66-3.86-7-6.5-7C3.57 5 2 6.57 2 8.5S3.57 12 5.5 12c2.64 0 4.02-2.34 6.5-7 2.48 4.66 3.86 7 6.5 7Z" />
        </svg>
      )
  }
}

export default function TeachEnglishOnlineProgram() {
  return (
    <>
      <section className="section-padding bg-raisin text-white">
        <div className="container-custom">
          <div className="grid gap-8 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-soft-card md:grid-cols-[1.1fr_0.9fr] md:p-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-accent-500" />
                <p className="text-sm uppercase tracking-[0.25em] text-accent-300">
                  Teach English Online · Full Program
                </p>
              </div>
              <h1 className="max-w-3xl text-white">
                Teach English from anywhere, and build a career you own.
              </h1>
              <p className="max-w-2xl text-white/75">
                A complete, step-by-step program for teachers and professionals who want to move
                their English teaching online with a real system, consistent students, and income
                that does not stop when they do.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <CTAButton href="/contact" className="w-full sm:w-auto">
                  Enroll Now
                </CTAButton>
                <p className="text-sm text-white/50">One-time payment · Lifetime access</p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="flex -space-x-2">
                  {['SL', 'AM', 'DM'].map((initials, index) => (
                    <div
                      key={initials}
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-raisin text-xs font-semibold ${
                        index === 0
                          ? 'bg-accent-500 text-raisin'
                          : index === 1
                            ? 'bg-accent-400 text-raisin'
                            : 'bg-brand-400 text-white'
                      }`}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-white/60">
                  <strong className="block text-white/90">Join 100+ educators already inside</strong>
                  From Nairobi to Cape Town to Kuala Lumpur
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-accent-500/30 bg-raisin/70 p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-accent-300">Everything included</p>
              <h2 className="mt-4 text-2xl text-white">
                One payment. Everything you need to launch and grow your online English teaching business.
              </h2>
              <ul className="mt-8 space-y-4">
                {includedItems.slice(0, 5).map((item) => (
                  <li key={item.title} className="flex gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/15 text-accent-300">
                      <FeatureIcon name={item.icon} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="text-sm text-white/70">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="accent-label">Is this for you?</p>
              <h2 className="mt-4 section-heading">Built for teachers who are ready to make the move.</h2>
              <p className="mt-6 text-neutral-700">
                This program is not for everyone. It is for people who are serious about building
                something real, not just dipping a toe in the water.
              </p>
              <p className="mt-4 text-neutral-700">
                If you have been thinking about teaching online for a while but keep getting stuck
                on the how, this is your clearest path forward.
              </p>
            </div>
            <div className="grid gap-4">
              {audienceCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[24px] border border-neutral-100 bg-neutral-50/70 p-6 shadow-soft-card"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500">
                    <FeatureIcon name={card.icon} />
                  </div>
                  <h3 className="mt-3 text-xl text-raisin">{card.title}</h3>
                  <p className="mt-3 text-neutral-700">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-raisin text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="accent-label text-accent-300">What you will achieve</p>
            <h2 className="mt-4 text-white">By the end of this program</h2>
            <p className="mt-6 text-white/65">
              These are not vague promises. These are the specific outcomes students have reached
              after completing the curriculum.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {outcomes.map((outcome) => (
              <article
                key={outcome.number}
                className="rounded-[24px] border border-accent-500/15 bg-white/5 p-6 shadow-soft-card"
              >
                <p className="font-display text-5xl text-accent-500/40">{outcome.number}</p>
                <h3 className="mt-4 text-xl text-white">{outcome.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{outcome.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="curriculum" className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div>
              <p className="accent-label">Inside the program</p>
              <h2 className="mt-4 section-heading">What you will learn, section by section</h2>
              <p className="mt-4 text-neutral-700">
                Every section is practical, sequenced, and built to move you forward, not just give
                you more information to sit on.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 border-b-2 border-neutral-200 pb-6 text-sm text-neutral-600">
              <span>
                <strong className="text-raisin">8</strong> sections
              </span>
              <span className="h-1 w-1 rounded-full bg-neutral-300" />
              <span>
                <strong className="text-raisin">41</strong> lectures
              </span>
              <span className="h-1 w-1 rounded-full bg-neutral-300" />
              <span>
                <strong className="text-raisin">3h 30m</strong> total length
              </span>
              <span className="h-1 w-1 rounded-full bg-neutral-300" />
              <span>All levels</span>
            </div>

            <div className="mt-6 overflow-hidden rounded-[20px] border border-neutral-200">
              {curriculumSections.map((section, index) => (
                <details
                  key={section.title}
                  className="group border-b border-neutral-200 bg-white last:border-b-0"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center gap-4 bg-neutral-50 px-6 py-5 transition hover:bg-neutral-100">
                    <span className="text-xs transition group-open:rotate-90">▶</span>
                    <div className="flex-1">
                      <p className="font-semibold text-raisin">{section.title}</p>
                    </div>
                    <div className="hidden gap-3 text-sm text-neutral-500 sm:flex">
                      <span>{section.lectures}</span>
                      <span className="h-1 w-1 self-center rounded-full bg-neutral-300" />
                      <span>{section.duration}</span>
                    </div>
                  </summary>
                  <ul className="bg-white px-6 py-3">
                    {section.lessons.map((lesson) => (
                      <li
                        key={lesson}
                        className="flex items-center gap-3 border-t border-neutral-100 py-3 first:border-t-0"
                      >
                        <span className="text-xs text-neutral-500">▶</span>
                        <span className="flex-1 text-sm text-neutral-800">{lesson}</span>
                        <span className="text-xs text-neutral-400">Video</span>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="instructor" className="section-padding section-gradient-muted">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:items-start">
            <div className="mx-auto w-full max-w-[220px] rounded-[24px] bg-raisin p-6 text-center text-white shadow-soft-card">
              <div className="flex aspect-[3/4] items-center justify-center rounded-[18px] border border-accent-500/20 bg-raisin">
                <span className="font-display text-7xl text-accent-500/40">SK</span>
              </div>
              <div className="-mt-4 inline-flex rounded-full bg-accent-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-raisin">
                Founder, 30 Degrees East
              </div>
            </div>
            <div className="rounded-[32px] border border-white/70 bg-white/85 p-8 shadow-soft-card">
              <p className="accent-label">Your instructor</p>
              <h2 className="mt-4 section-heading">Hi, I&apos;m Swaleh Kimani.</h2>
              <p className="mt-6 text-neutral-700">
                I spent years as a teacher before I figured out how to make the digital shift work,
                not just on paper, but in practice, with real students and real income.
              </p>
              <p className="mt-4 text-neutral-700">
                30 Degrees East grew out of that journey. Everything in this program is built on
                what I actually did, not theory from a business textbook. I have helped over 100
                educators and professionals structure their knowledge, find their students, and
                build income that works around their lives.
              </p>
              <p className="mt-4 text-neutral-700">
                My approach is warm, practical, and direct. I will not waste your time with
                motivation content. We will focus on what actually moves the needle.
              </p>
              <div className="mt-8 grid gap-4 border-t border-neutral-200 pt-6 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  ['6+', 'Years teaching'],
                  ['100+', 'Educators helped'],
                  ['3', 'Active programs'],
                  ['5★', 'Average rating'],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="font-display text-4xl text-raisin">{value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-neutral-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center">
            <p className="accent-label">Real results</p>
            <h2 className="mt-4 section-heading">What students say</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <article key={testimonial.name} className="relative rounded-[28px] bg-raisin p-8 text-white shadow-soft-card">
                <p className="text-sm tracking-[0.2em] text-accent-400">★★★★★</p>
                <p className="mt-6 text-lg italic leading-relaxed text-white/85">“{testimonial.quote}”</p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-white/60">{testimonial.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-raisin text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="accent-label text-accent-300">Everything included</p>
            <h2 className="mt-4 text-white">One payment. Everything inside.</h2>
            <p className="mt-6 text-white/65">
              No upsells after you enroll. No hidden modules behind a higher tier. Everything below
              is included.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {includedItems.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-accent-500/20 bg-white/5 p-6 shadow-soft-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/15 text-accent-300">
                  <FeatureIcon name={item.icon} />
                </div>
                <h3 className="mt-5 text-xl text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <p className="accent-label">Enroll today</p>
            <h2 className="mt-4 section-heading">Simple, honest pricing</h2>
            <p className="mt-4 text-neutral-700">
              One payment. Lifetime access. No hidden fees or tiers.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl rounded-[32px] border border-accent-500/20 bg-raisin p-8 text-white shadow-soft-card md:p-10">
            <div className="inline-flex rounded-full bg-accent-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
              Full Program · Lifetime Access
            </div>
            <div className="mt-6">
              <div className="flex items-start justify-center">
                <span className="mt-3 font-display text-3xl text-accent-300">$</span>
                <span className="font-display text-7xl text-white">XXX</span>
              </div>
              <p className="mt-3 text-sm text-white/50">One-time payment · No subscription</p>
            </div>
            <ul className="mt-8 space-y-3 text-left">
              {pricingIncludes.map((item) => (
                <li key={item} className="flex gap-3 border-b border-white/10 py-3 last:border-b-0">
                  <span className="text-accent-300">✓</span>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CTAButton href="/contact" className="w-full">
                Enroll Now
              </CTAButton>
            </div>
            <p className="mt-4 text-center text-sm text-white/40">
              Secure checkout details and the final price should be updated once the purchase link is confirmed.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding section-gradient-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="accent-label">Before you enroll</p>
              <h2 className="mt-4 section-heading">Frequently asked questions</h2>
            </div>
            <div className="mt-10 divide-y divide-neutral-200 rounded-[24px] border border-neutral-200 bg-white/80 px-6">
              {faqs.map((faq, index) => (
                <details key={faq.question} className="group py-5" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-raisin">
                    <span>{faq.question}</span>
                    <span className="text-accent-500 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-neutral-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-raisin text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-white">
              The knowledge is already in you. Let&apos;s build the system around it.
            </h2>
            <p className="mt-6 text-white/65">
              Every week you wait is another week of income sitting on the table. You have the
              skills. You have the experience. You just need the path.
            </p>
            <div className="mt-10">
              <CTAButton href="/contact">Enroll Now</CTAButton>
            </div>
            <p className="mt-4 text-sm text-white/35">
              One-time payment · Lifetime access · Refund policy to be confirmed
            </p>
          </div>
        </div>
      </section>

    </>
  )
}
