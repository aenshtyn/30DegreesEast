import type { Metadata } from 'next'

import PartnerInquiryForm from '@/components/ui/PartnerInquiryForm'

const audience = [
  {
    title: 'You’ve built a business that works',
    description:
      'Construction, retail, logistics, food, services. You have navigated the real Kenyan market and have the receipts to prove it.',
  },
  {
    title: 'People already ask you for advice',
    description:
      'Friends, family, and younger entrepreneurs come to you because you know things they do not. Your knowledge has value.',
  },
  {
    title: 'You don’t have time to build a course',
    description:
      'You are running a business. You do not have months to figure out recording, editing, email funnels, or payment systems.',
  },
  {
    title: 'You’re open to a new income stream',
    description:
      'Not looking to quit your business, just to build something on the side that earns without requiring your constant attention.',
  },
]

const steps = [
  {
    title: 'We have a discovery call',
    description:
      'We talk for 30-45 minutes about your business, what you have built, and what knowledge others would pay to learn.',
  },
  {
    title: 'I design the knowledge product',
    description:
      'Based on that conversation, I build the course or program structure, modules, content plan, and delivery format. You review and give feedback.',
  },
  {
    title: 'We record your sessions together',
    description:
      'Simple video calls or voice recordings. I guide the conversation, ask the right questions, and pull out the gold. No script required.',
  },
  {
    title: 'I handle production and delivery',
    description:
      'I edit, format, write the supporting materials, set up the WhatsApp group, handle M-Pesa collection, run the student community, and manage delivery.',
  },
  {
    title: 'We sell and you receive your share',
    description:
      'I run outreach and sales. Once revenue comes in, we split it 50/50. You get paid at the end of each cohort.',
  },
]

const youBring = [
  'Your real-world business experience',
  'Your network and warm contacts',
  'Participation in recorded sessions (2-4 hours total)',
  'Availability for a live Q&A with the cohort',
  'Your name and credibility on the program',
]

const swalehHandles = [
  'Course design, structure, and curriculum',
  'Recording, editing, and production',
  'PDF workbooks, templates, and materials',
  'WhatsApp group setup and facilitation',
  'M-Pesa payment collection',
  'Sales, outreach, and enrollment',
  'Student support and follow-up',
]

const timeline = [
  {
    tag: 'Week 1',
    title: 'Discovery & Design',
    description:
      'We meet, I learn your story, and I draft the program structure. You review and we align on format, depth, and audience.',
  },
  {
    tag: 'Week 2-3',
    title: 'Recording Sessions',
    description:
      'We record 2-4 sessions over video call. I guide the conversation and you share your knowledge.',
  },
  {
    tag: 'Week 3-4',
    title: 'Production & Build',
    description:
      'I handle editing, workbook design, WhatsApp setup, and all the pieces learners will interact with.',
  },
  {
    tag: 'Week 5-6',
    title: 'Outreach & Launch',
    description:
      'We go to market. I manage enrollment while you amplify through your own network where you are comfortable.',
  },
  {
    tag: 'Ongoing',
    title: 'Cohort Delivery & Revenue',
    description:
      'The cohort runs over four weeks. You show up for one or two live calls. I handle everything else and the revenue split follows each cohort close.',
  },
]

const fitYes = [
  'Have 3+ years of real business experience',
  'Can commit 4-6 hours to the recording phase',
  'Are comfortable sharing specific numbers and hard lessons',
  'Want a long-term income stream, not a quick sale',
  'Believe other Kenyans can benefit from what you know',
  'Are patient with a 4-6 week build process',
]

const fitNo = [
  'Want to make money in the next 2 weeks',
  'Are uncomfortable sharing real details of your business',
  'Expect to be fully hands-off after recording sessions',
  'Have a business idea but have not built or sold anything yet',
  'Are mainly looking for a personal brand growth vehicle',
]

const faqs = [
  {
    question: 'Do I need to have a big social media following?',
    answer:
      'No. The audience is built through direct outreach, your network, your WhatsApp contacts, and communities you are already part of.',
  },
  {
    question: 'What if my first cohort does not fill up?',
    answer:
      'We start small intentionally. A cohort of 5-10 serious learners is still a successful launch because the goal is proof of concept and a repeatable model.',
  },
  {
    question: 'How much can I realistically earn?',
    answer:
      'The source layout uses a sample scenario of 10 learners at KES 3,000 each. That would generate KES 30,000 gross, with your share being roughly half after transaction fees.',
  },
  {
    question: 'What industry or business type works best?',
    answer:
      'Any business where the how is not obvious to an outsider and where that knowledge gap costs aspiring entrepreneurs real money.',
  },
  {
    question: 'Is there a formal agreement?',
    answer:
      'Yes. This should be governed by a written partnership agreement covering IP ownership, revenue split terms, cohort responsibilities, and delivery expectations.',
  },
  {
    question: 'What happens after the first cohort?',
    answer:
      'We debrief, refine, and run again. Over time, successful programs can be migrated into a more durable marketplace or product ecosystem.',
  },
]

export const metadata: Metadata = {
  title: 'Partner with Swaleh | 30 Degrees East',
  description:
    'A partnership page for Kenyan entrepreneurs who want to package their expertise into a revenue-generating program with Swaleh running the operation.',
}

function AudienceIcon({ index }: { index: number }) {
  const className = 'h-5 w-5'

  switch (index) {
    case 0:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M4 19 12 5l8 14H4Z" />
          <path d="M12 10v4" />
          <path d="M12 17h.01" />
        </svg>
      )
    case 1:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 9h8M8 13h5" />
        </svg>
      )
    case 2:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l3 2" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M12 3v18M3 12h18" />
          <path d="m7 17 10-10" />
        </svg>
      )
  }
}

export default function PartnerWithSwalehPage() {
  return (
    <>
      <section className="section-padding bg-raisin text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-accent-500/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent-300">
              Shadow Operator Program
            </span>
            <h1 className="mt-8 text-white">
              You&apos;ve built something real. Let&apos;s package it and share it.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-white/75">
              You bring the expertise. I handle everything else: the content, the platform, the
              sales, and the delivery. We split the revenue, 50/50.
            </p>
            <div className="mt-10">
              <a
                href="#apply"
                className="inline-flex rounded-full bg-accent-500 px-8 py-4 text-base font-semibold text-raisin shadow-soft-card transition hover:bg-accent-400"
              >
                Start the Conversation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            <p className="accent-label">Who This Is For</p>
            <h2 className="section-heading">You&apos;ve done the hard part. Figuring it out.</h2>
            <p className="mt-4 max-w-3xl text-neutral-700">
              This is for Kenyan entrepreneurs who have real, hard-won knowledge in their field
              and want to turn it into income without becoming full-time content creators.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {audience.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-neutral-100 bg-neutral-50/70 p-6 shadow-soft-card"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500">
                    <AudienceIcon index={index} />
                  </div>
                  <h3 className="mt-4 text-xl text-raisin">{item.title}</h3>
                  <p className="mt-3 text-neutral-700">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-gradient-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <p className="accent-label">How It Works</p>
            <h2 className="section-heading">Simple. Clean. No platform needed.</h2>
            <p className="mt-4 max-w-3xl text-neutral-700">
              No tech setup. No recording studio. No social media following required.
            </p>
            <div className="mt-10 divide-y divide-neutral-200">
              {steps.map((step, index) => (
                <div key={step.title} className="grid gap-4 py-8 md:grid-cols-[64px_1fr]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-raisin font-display text-xl text-accent-500">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl text-raisin">{step.title}</h3>
                    <p className="mt-3 text-neutral-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-6xl">
            <p className="accent-label">The Partnership</p>
            <h2 className="section-heading">You show up. I run the operation.</h2>
            <p className="mt-4 max-w-3xl text-neutral-700">
              You bring what only you can bring: lived experience and real expertise. I bring the
              infrastructure to turn that expertise into revenue.
            </p>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[28px] bg-raisin p-8 text-white shadow-soft-card">
                <h3 className="text-xl uppercase tracking-[0.16em] text-accent-300">You bring</h3>
                <ul className="mt-6 space-y-3">
                  {youBring.map((item) => (
                    <li key={item} className="flex gap-3 border-b border-white/10 py-3 last:border-b-0">
                      <span className="text-accent-300">✓</span>
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[28px] border border-accent-500/30 bg-accent-500/8 p-8 text-raisin shadow-soft-card">
                <h3 className="text-xl uppercase tracking-[0.16em] text-accent-500">I handle</h3>
                <ul className="mt-6 space-y-3">
                  {swalehHandles.map((item) => (
                    <li key={item} className="flex gap-3 border-b border-accent-500/10 py-3 last:border-b-0">
                      <span className="text-accent-500">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-8 rounded-[28px] bg-raisin p-8 text-white shadow-soft-card md:flex-row md:items-center md:justify-between md:p-10">
              <p className="max-w-2xl text-white/75">
                Revenue is split equally between us, calculated from net intake after transaction
                fees. You receive your payment at the close of each cohort with full transparency on
                enrollment and revenue.
              </p>
              <div className="flex items-center gap-4 self-start md:self-auto">
                <div className="text-center">
                  <p className="font-display text-6xl text-accent-300">50%</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50">Your share</p>
                </div>
                <div className="font-display text-4xl text-white/20">/</div>
                <div className="text-center">
                  <p className="font-display text-6xl text-white/45">50%</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/40">My share</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-gradient-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <p className="accent-label">The Timeline</p>
            <h2 className="section-heading">From conversation to cohort in weeks.</h2>
            <p className="mt-4 max-w-3xl text-neutral-700">
              Most programs are designed, recorded, and launched within 4-6 weeks of the first call.
            </p>
            <div className="mt-10 space-y-6">
              {timeline.map((item) => (
                <div key={item.title} className="grid gap-3 md:grid-cols-[120px_1fr] md:items-start">
                  <div className="inline-flex rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent-500">
                    {item.tag}
                  </div>
                  <div>
                    <h3 className="text-xl text-raisin">{item.title}</h3>
                    <p className="mt-2 text-neutral-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            <p className="accent-label">Honest Assessment</p>
            <h2 className="section-heading">This works well when the fit is right.</h2>
            <p className="mt-4 max-w-3xl text-neutral-700">
              Better to be clear upfront than waste your time or mine.
            </p>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[28px] border border-emerald-200 bg-emerald-50 p-8 shadow-soft-card">
                <h3 className="text-xl text-emerald-800">Good fit if you…</h3>
                <ul className="mt-6 space-y-3">
                  {fitYes.map((item) => (
                    <li key={item} className="flex gap-3 border-b border-emerald-200/70 py-3 last:border-b-0">
                      <span className="text-emerald-700">✓</span>
                      <span className="text-neutral-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[28px] border border-orange-200 bg-orange-50 p-8 shadow-soft-card">
                <h3 className="text-xl text-orange-800">Not the right fit if you…</h3>
                <ul className="mt-6 space-y-3">
                  {fitNo.map((item) => (
                    <li key={item} className="flex gap-3 border-b border-orange-200/70 py-3 last:border-b-0">
                      <span className="text-orange-700">✕</span>
                      <span className="text-neutral-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-gradient-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <p className="accent-label">Common Questions</p>
            <h2 className="section-heading">Things people usually ask.</h2>
            <div className="mt-10 divide-y divide-neutral-200 rounded-[28px] border border-neutral-200 bg-white/85 px-8">
              {faqs.map((faq) => (
                <div key={faq.question} className="py-6">
                  <h3 className="text-xl text-raisin">{faq.question}</h3>
                  <p className="mt-3 text-neutral-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="section-padding bg-raisin text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <p className="accent-label text-accent-300">Start Here</p>
            <h2 className="text-white">Ready to share what you know?</h2>
            <p className="mt-6 text-white/75">
              Send a short message about your business and what knowledge you think others would
              pay to learn. You should get a reply within 48 hours to schedule a call.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl">
            <PartnerInquiryForm />
            <p className="mt-4 text-center text-sm text-white/40">
              No commitment. No cost. Just a conversation.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
