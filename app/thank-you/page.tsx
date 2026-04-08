import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You | 30 Degrees East',
  description: 'Waitlist confirmation and next steps for 30 Degrees East.',
}

const nextSteps = [
  {
    title: 'Check your email',
    description:
      'You should get a confirmation shortly. If you do not see it, check spam and mark it as safe.',
  },
  {
    title: 'You will hear from Swaleh directly',
    description:
      'Not a generic newsletter sequence. Expect real updates when there is something worth sharing.',
  },
  {
    title: 'You will get early access',
    description:
      'As a waitlist member, you will be first to hear when new cohorts, launches, or offers open.',
  },
]

export default function ThankYouPage() {
  return (
    <section className="bg-raisin text-white">
      <div className="container-custom flex min-h-screen items-center justify-center py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-accent-500/30 bg-accent-500/10 text-3xl text-accent-300">
            ✓
          </div>

          <p className="mt-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
            You&apos;re confirmed
          </p>
          <h1 className="mt-4 text-center text-white">
            You&apos;re on the list.
            <br />
            <span className="text-accent-300">Welcome.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-center text-white/70">
            Your spot is saved. Keep an eye on your inbox. That&apos;s where everything important
            will land first.
          </p>

          <div className="mt-10 rounded-[28px] border border-accent-500/20 bg-white/5 p-6 shadow-soft-card md:p-8">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-300">
              What happens next
            </h2>
            <div className="mt-5 space-y-5">
              {nextSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-4 border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-sm font-semibold text-accent-300">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-7 text-white/70">
                    <strong className="text-white">{step.title}.</strong> {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[24px] border border-accent-500/20 bg-accent-500/10 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div>
              <p className="font-semibold text-white">30 Degrees East Waitlist</p>
              <p className="mt-1 text-sm text-white/50">New cohorts · digital products · co-creation openings</p>
            </div>
            <p className="mt-4 font-display text-4xl text-accent-300 sm:mt-0">Confirmed</p>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white/75 transition hover:border-accent-300 hover:text-accent-300"
            >
              Back to Homepage
            </Link>
            <Link
              href="/teach-english-online"
              className="inline-flex items-center justify-center rounded-full bg-accent-500 px-8 py-3 text-sm font-semibold text-raisin shadow-soft-card transition hover:bg-accent-400"
            >
              See the English Course
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
