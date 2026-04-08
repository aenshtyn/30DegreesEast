import type { Metadata } from 'next'
import Image from 'next/image'

import InstructorStrip from '@/components/global-teacher-playbook/InstructorStrip'
import CTAButton from '@/components/ui/CTAButton'
import {
  playbookFaqs,
  playbookIncludes,
  playbookInstructors,
  playbookModules,
} from '@/lib/data/global-teacher-playbook'

export const metadata: Metadata = {
  title: 'The Global Teacher Playbook | 30 Degrees East',
  description:
    'A five-module live programme helping Kenyan teachers turn their teaching skills into global online income.',
}

type PlaybookIconName = 'globe' | 'video' | 'workbook' | 'roadmap' | 'community' | 'income'

const heroIncludes = [
  {
    icon: 'video' as const,
    title: '5 Live Modules',
    description: 'Guided Google Meet sessions.',
  },
  {
    icon: 'workbook' as const,
    title: 'Worksheets & Templates',
    description: 'Tools you can use immediately.',
  },
  {
    icon: 'roadmap' as const,
    title: '30-60-90 Day Roadmap',
    description: 'A clear post-programme launch plan.',
  },
  {
    icon: 'globe' as const,
    title: 'Platform Profiles',
    description: 'Profiles ready for global teaching platforms.',
  },
  {
    icon: 'community' as const,
    title: 'Community Support',
    description: 'WhatsApp support and accountability.',
  },
]

const audienceCards = [
  {
    icon: 'income' as const,
    title: 'Your skills are worth more',
    description: 'You are a Kenyan teacher who knows your skills are worth more than your current salary.',
  },
  {
    icon: 'globe' as const,
    title: 'You want to teach online',
    description: 'You have thought about teaching online but feel overwhelmed by platforms, pricing, and where to begin.',
  },
  {
    icon: 'roadmap' as const,
    title: 'You want income options',
    description: 'You want income that does not depend entirely on one school, one salary, or one contract.',
  },
  {
    icon: 'community' as const,
    title: 'You are ready to execute',
    description: 'You are ready to do the actual work, not just consume content about it.',
  },
  {
    icon: 'community' as const,
    title: 'You want teacher community',
    description: 'You want a community of teachers on the same journey, not a generic online course.',
  },
  {
    icon: 'roadmap' as const,
    title: 'You want a 90-day plan',
    description: 'You want a clear 90-day plan you can start executing immediately after the programme.',
  },
]

function PlaybookIcon({ name }: { name: PlaybookIconName }) {
  switch (name) {
    case 'globe':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.2 2.4 3.3 5.4 3.3 9S14.2 18.6 12 21c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3Z" />
        </svg>
      )
    case 'video':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <rect x="3" y="6" width="13" height="12" rx="2" />
          <path d="m16 10 5-3v10l-5-3" />
        </svg>
      )
    case 'workbook':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <path d="M6 4h10l3 3v13H6z" />
          <path d="M16 4v4h4M9 12h6M9 16h4" />
        </svg>
      )
    case 'roadmap':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <path d="M5 19V5l5 3 5-3 4 2v14l-4-2-5 3-5-3Z" />
          <path d="M10 8v14M15 5v14" />
        </svg>
      )
    case 'community':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <path d="M16 19v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1" />
          <circle cx="10" cy="8" r="3" />
          <path d="M20 19v-1a4 4 0 0 0-3-3.87M14 5.13a3 3 0 0 1 0 5.74" />
        </svg>
      )
    case 'income':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <path d="M4 7h16v10H4z" />
          <circle cx="12" cy="12" r="2.5" />
          <path d="M7 10V9h1M17 14v1h-1" />
        </svg>
      )
  }
}

export default function GlobalTeacherPlaybookPage() {
  return (
    <>
      <section className="section-padding bg-raisin text-white">
        <div className="container-custom">
          <div className="grid gap-8 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-soft-card md:grid-cols-[1.1fr_0.9fr] md:p-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-accent-500" />
                <p className="text-sm uppercase tracking-[0.25em] text-accent-300">
                  Global Teacher Playbook · Live Programme
                </p>
              </div>
              <h1 className="max-w-3xl text-white">
                Turn your teaching skills into{' '}
                <span className="text-accent-300">global income.</span>
              </h1>
              <p className="max-w-2xl font-display text-3xl leading-tight text-accent-300">
                Without leaving Kenya.
              </p>
              <p className="max-w-2xl text-white/75">
                A five-module live programme for Kenyan teachers who want to launch on global
                teaching platforms, position themselves for premium students, and build income with
                practical systems instead of guesswork.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <CTAButton href="/global-teacher-playbook/enrol" className="w-full sm:w-auto">
                  Secure Your Spot
                </CTAButton>
                <p className="text-sm text-white/50">KES 6,500 · Live on Google Meet</p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="flex -space-x-2">
                  {playbookInstructors.map((instructor, index) => (
                    <div
                      key={instructor.name}
                      className={`relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-raisin text-xs font-semibold ${
                        index === 0 ? 'bg-accent-500 text-raisin' : 'bg-brand-400 text-white'
                      }`}
                    >
                      {instructor.image ? (
                        <Image
                          src={instructor.image}
                          alt={instructor.name}
                          fill
                          sizes="40px"
                          className="object-cover object-center"
                        />
                      ) : (
                        instructor.initials
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-white/60">
                  <strong className="block text-white/90">Built for Kenyan teachers going global</strong>
                  With Juliet Karimi and Swaleh Kimani
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-accent-500/30 bg-raisin/70 p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-accent-300">Everything included</p>
              <h2 className="mt-4 text-2xl text-white">
                One payment. A clear launch path from platform choice to first students.
              </h2>
              <ul className="mt-8 space-y-4">
                {heroIncludes.map((item) => (
                  <li key={item.title} className="flex gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                    <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent-500/15 text-accent-300">
                      <PlaybookIcon name={item.icon} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="text-sm leading-6 text-white/70">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <InstructorStrip />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="accent-label">Is this for you?</p>
            <h2 className="mt-4 section-heading">You are in the right place if...</h2>
            <p className="mt-6 text-neutral-700">
              This programme is built around the real transition from local classroom work to
              global online teaching.
            </p>
            <p className="mt-4 text-neutral-700">
              If any of these sound familiar, the curriculum is designed for your current stage.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {audienceCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[24px] border border-neutral-100 bg-neutral-50/70 p-6 shadow-soft-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500">
                  <PlaybookIcon name={card.icon} />
                </div>
                <h3 className="mt-3 text-xl text-raisin">{card.title}</h3>
                <p className="mt-3 text-neutral-700">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="curriculum" className="section-padding bg-neutral-50/80">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <p className="accent-label">The curriculum</p>
            <h2 className="mt-4 section-heading">Five modules. One complete system.</h2>
            <p className="mt-5 text-neutral-700">
              Each module combines live sessions, recorded lessons, practical worksheets, and community
              support. You leave every module with a concrete deliverable you can use immediately.
            </p>
            <div className="mt-10 space-y-4">
              {playbookModules.map((module, index) => (
                <details key={module.title} className="group overflow-hidden rounded-[24px] border border-neutral-200 bg-white shadow-soft-card" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-start gap-4 p-6 transition hover:bg-neutral-50">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-raisin font-semibold text-accent-300">
                      {module.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl text-raisin">{module.title}</h3>
                      <p className="mt-1 text-sm text-neutral-500">
                        Outcome: {module.outcome} · Instructor: {module.instructor}
                      </p>
                    </div>
                    <span className="text-accent-500 transition group-open:rotate-45">+</span>
                  </summary>
                  <div className="px-6 pb-6 md:pl-20">
                    <ul className="space-y-3">
                      {module.lessons.map((lesson) => (
                        <li key={lesson} className="flex gap-3 border-t border-neutral-100 pt-3 text-sm text-neutral-700 first:border-t-0 first:pt-0">
                          <span className="text-accent-600">→</span>
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 rounded-2xl bg-accent-500/10 px-4 py-3 text-sm font-medium text-raisin">
                      Deliverable: {module.deliverable}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="accent-label">What is included</p>
            <h2 className="mt-4 section-heading">Everything you need. Nothing you do not.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {playbookIncludes.map((item) => (
              <article key={item.title} className="rounded-[24px] border border-neutral-200 bg-neutral-50/70 p-6 shadow-soft-card">
                <h3 className="text-xl text-raisin">{item.title}</h3>
                <p className="mt-3 text-neutral-700">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-raisin text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <p className="accent-label text-accent-300">From our first cohort</p>
            <h2 className="mt-4 text-white">Real teachers. Real results.</h2>
            <blockquote className="mt-8 rounded-[28px] border border-accent-500/20 bg-white/5 p-8 font-display text-3xl leading-snug text-white/85 shadow-soft-card">
              I realised there is actually no perfect time to start. You just start where you are and grow from there. I now have a plan, structure, and direction.
            </blockquote>
            <p className="mt-4 text-sm font-semibold text-accent-300">
              Veronica N., first cohort participant, Global Teacher Playbook
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="section-padding section-gradient-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl rounded-[32px] border border-accent-500/20 bg-raisin p-8 text-center text-white shadow-soft-card md:p-10">
            <p className="accent-label text-accent-300">Enrolment</p>
            <h2 className="mt-4 text-white">One investment. Six weeks that change your direction.</h2>
            <p className="mt-6 font-display text-7xl text-white">KES 6,500</p>
            <p className="mt-3 text-sm text-white/50">One-time payment · M-Pesa accepted · Limited spots per cohort</p>
            <div className="mt-8">
              <CTAButton href="/global-teacher-playbook/enrol" className="w-full sm:w-auto">
                Secure Your Spot
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="accent-label">Frequently asked questions</p>
              <h2 className="mt-4 section-heading">Questions we get asked a lot.</h2>
            </div>
            <div className="mt-10 divide-y divide-neutral-200 rounded-[24px] border border-neutral-200 bg-white/80 px-6 shadow-soft-card">
              {playbookFaqs.map((faq, index) => (
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
              Your classroom skills already travel. Build the route.
            </h2>
            <p className="mt-6 text-white/65">
              Come in with your experience. Leave with your platform plan, positioning, pricing,
              profiles, and next 90 days mapped out.
            </p>
            <div className="mt-10">
              <CTAButton href="/global-teacher-playbook/enrol">Secure Your Spot</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
