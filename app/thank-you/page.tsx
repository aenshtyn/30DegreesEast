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
      <div className="container-custom flex min-h-[calc(100vh-9rem)] items-center justify-center py-16">
        <div className="w-full max-w-2xl text-center">
          <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border border-accent-500/30 bg-accent-500/10">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-accent-500"
              aria-hidden="true"
            >
              <polyline points="5 13 9 17 19 7" />
            </svg>
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-accent-300">
            You&apos;re confirmed
          </p>
          <h1 className="mt-4 text-white">
            You&apos;re on the list.
            <br />
            Welcome.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-white/70">
            Your spot is saved. Keep an eye on your inbox. That&apos;s where everything important
            will land first.
          </p>

          <div className="mt-10 rounded-[28px] border border-accent-500/15 bg-white/5 p-8 text-left shadow-soft-card">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-300">
              What happens next
            </h2>
            <div className="mt-6 space-y-4">
              {nextSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-4 border-b border-white/8 pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-xs font-semibold text-accent-300">
                    {index + 1}
                  </div>
                  <p className="text-white/75">
                    <strong className="text-white">{step.title}.</strong> {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/teach-english-online"
              className="inline-flex items-center justify-center rounded-full bg-accent-500 px-8 py-4 text-base font-semibold text-raisin shadow-soft-card transition hover:bg-accent-400"
            >
              See the English Course
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-accent-500/35 px-8 py-4 text-base font-medium text-white/75 transition hover:border-accent-500 hover:text-accent-200"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
