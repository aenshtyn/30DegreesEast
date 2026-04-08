import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Application Received | The Global Teacher Playbook',
  description: 'Confirmation page for The Global Teacher Playbook application.',
}

const nextSteps = [
  {
    title: 'Check your WhatsApp and email.',
    description:
      'We will reach out within 24 hours with your payment details and cohort start date. Check your spam folder if you do not hear from us.',
  },
  {
    title: 'Complete your payment.',
    description:
      'Once you receive our message, you will have 48 hours to complete payment via M-Pesa to secure your spot.',
  },
  {
    title: 'Receive your welcome pack.',
    description:
      'After payment is confirmed, you will be added to the WhatsApp community and receive your module schedule, pre-course materials, and first session link.',
  },
  {
    title: 'Show up and do the work.',
    description:
      'Each module builds on the last. Come prepared, ask questions, and commit to the assignments.',
  },
]

export default function GlobalTeacherPlaybookConfirmedPage() {
  return (
    <section className="bg-raisin text-white">
      <div className="container-custom flex min-h-screen items-center justify-center py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-accent-500/30 bg-accent-500/10 text-3xl text-accent-300">
            ✓
          </div>
          <p className="mt-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
            Application received
          </p>
          <h1 className="mt-4 text-center text-white">
            You are one step closer <span className="text-accent-300">to teaching globally.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-center text-white/70">
            Your application has been submitted successfully. We have received your details and will
            be in touch within 24 hours with everything you need to confirm your spot.
          </p>

          <div className="mt-10 rounded-[28px] border border-accent-500/20 bg-white/5 p-6 shadow-soft-card md:p-8">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-300">
              What happens next
            </h2>
            <div className="mt-5 space-y-5">
              {nextSteps.map((step, index) => (
                <div key={step.title} className="flex gap-4 border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-sm font-semibold text-accent-300">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-7 text-white/70">
                    <strong className="text-white">{step.title}</strong> {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[24px] border border-accent-500/20 bg-accent-500/10 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div>
              <p className="font-semibold text-white">The Global Teacher Playbook</p>
              <p className="mt-1 text-sm text-white/50">5 modules · Live Google Meet · WhatsApp community</p>
            </div>
            <p className="mt-4 font-display text-4xl text-accent-300 sm:mt-0">KES 6,500</p>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white/75 transition hover:border-accent-300 hover:text-accent-300"
            >
              Back to Homepage
            </Link>
            <Link
              href="/global-teacher-playbook"
              className="inline-flex items-center justify-center rounded-full bg-accent-500 px-8 py-3 text-sm font-semibold text-raisin shadow-soft-card transition hover:bg-accent-400"
            >
              Share the Course Page
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
