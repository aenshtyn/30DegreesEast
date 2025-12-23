import type { Metadata } from 'next'
import VideoEmbed from '@/components/ui/VideoEmbed'
import CTAButton from '@/components/ui/CTAButton'

export const metadata: Metadata = {
  title: 'Teaching System Audit | 30 Degrees East',
  description: 'A paid diagnostic to review your teaching system, identify leverage opportunities, and optimize for better results.',
}

export default function TeachingSystemAudit() {
  return (
    <>
      {/* Header */}
      <section className="section-padding section-gradient">
        <div className="container-custom">
          <div className="glass-panel mx-auto max-w-3xl text-center">
            <h1 className="text-neutral-900">Teaching System Audit</h1>
            <p className="mt-6 text-xl text-neutral-600">
              A paid diagnostic to review your lessons, structure, pricing, and AI use—
              identifying opportunities to build more leverage without burning out.
            </p>
            <p className="mt-4 text-lg font-medium text-neutral-900">
              This is a paid diagnostic, not a free call.
            </p>
          </div>

          {/* Explainer Video */}
          <div className="mx-auto mt-12 max-w-4xl">
            <VideoEmbed
              src="https://player.vimeo.com/video/YOUR_AUDIT_VIDEO_ID"
              title="Teaching System Audit Overview"
            />
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section-padding section-gradient-muted">
        <div className="container-custom">
          <div className="glass-panel mx-auto max-w-4xl">
            <h2 className="text-center text-neutral-900">Who this is for</h2>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900">This is for you if:</h3>
                <ul className="mt-4 space-y-3 text-neutral-700">
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    You&apos;re already teaching or coaching online
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    You feel like you&apos;re working hard but not seeing leverage
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    You want a professional review of your system
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    You&apos;re ready to invest in optimizing your teaching business
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-900">This is not for you if:</h3>
                <ul className="mt-4 space-y-3 text-neutral-700">
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    You haven&apos;t started teaching or coaching yet
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    You&apos;re looking for free advice or generic tips
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    You&apos;re not ready to implement strategic changes
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    You just need motivational encouragement
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Reviewed */}
      <section className="section-padding section-gradient">
        <div className="container-custom">
          <div className="glass-panel mx-auto max-w-4xl">
            <h2 className="text-center text-neutral-900">What is reviewed</h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="glass-panel-muted p-6">
                <h3 className="text-lg font-semibold text-neutral-900">Lesson Structure</h3>
                <p className="mt-3 text-neutral-600">
                  How your lessons are organized, delivered, and whether they create
                  real transformation for students.
                </p>
              </div>

              <div className="glass-panel-muted p-6">
                <h3 className="text-lg font-semibold text-neutral-900">Teaching Framework</h3>
                <p className="mt-3 text-neutral-600">
                  The underlying system and methodology behind your teaching approach
                  and how it scales.
                </p>
              </div>

              <div className="glass-panel-muted p-6">
                <h3 className="text-lg font-semibold text-neutral-900">Pricing Model</h3>
                <p className="mt-3 text-neutral-600">
                  Whether your pricing reflects the value you deliver and supports
                  sustainable growth.
                </p>
              </div>

              <div className="glass-panel-muted p-6">
                <h3 className="text-lg font-semibold text-neutral-900">AI Integration</h3>
                <p className="mt-3 text-neutral-600">
                  How you&apos;re using (or could use) AI tools to enhance delivery,
                  reduce workload, and scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding section-gradient-muted">
        <div className="container-custom">
          <div className="glass-panel mx-auto max-w-4xl">
            <h2 className="text-center text-neutral-900">How it works</h2>

            <div className="mt-12 space-y-12">
              {/* Before */}
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-lg font-semibold text-white">
                    1
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900">Before</h3>
                </div>
                <div className="ml-16 mt-4">
                  <p className="text-lg text-neutral-600">
                    You submit information about your teaching system, including lesson
                    samples, pricing, structure, and current challenges. I review everything
                    in detail before our session.
                  </p>
                </div>
              </div>

              {/* During */}
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-lg font-semibold text-white">
                    2
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900">During</h3>
                </div>
                <div className="ml-16 mt-4">
                  <p className="text-lg text-neutral-600">
                    We meet for a focused session where I walk you through my findings,
                    identify leverage points, diagnose structural issues, and provide
                    strategic recommendations.
                  </p>
                </div>
              </div>

              {/* After */}
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-lg font-semibold text-white">
                    3
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900">After</h3>
                </div>
                <div className="ml-16 mt-4">
                  <p className="text-lg text-neutral-600">
                    You receive a written summary of recommendations, next steps, and
                    strategic priorities. You&apos;ll know exactly what to optimize and why.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding section-gradient">
        <div className="container-custom">
          <div className="glass-panel mx-auto max-w-4xl">
            <h2 className="text-center text-neutral-900">What you&apos;ll walk away with</h2>

            <div className="mt-12 space-y-4">
              <div className="glass-panel-muted flex items-start gap-4 p-6">
                <svg
                  className="h-6 w-6 shrink-0 text-neutral-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg text-neutral-700">
                  Clear understanding of where your system is strong and where it&apos;s weak
                </p>
              </div>

              <div className="glass-panel-muted flex items-start gap-4 p-6">
                <svg
                  className="h-6 w-6 shrink-0 text-neutral-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg text-neutral-700">
                  Specific recommendations to build more leverage without more effort
                </p>
              </div>

              <div className="glass-panel-muted flex items-start gap-4 p-6">
                <svg
                  className="h-6 w-6 shrink-0 text-neutral-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg text-neutral-700">
                  Strategic insights on pricing, packaging, and positioning
                </p>
              </div>

              <div className="glass-panel-muted flex items-start gap-4 p-6">
                <svg
                  className="h-6 w-6 shrink-0 text-neutral-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg text-neutral-700">
                  A roadmap of next steps to optimize your teaching business
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-gradient-muted">
        <div className="container-custom">
          <div className="glass-panel mx-auto max-w-3xl text-center">
            <h2 className="text-neutral-900">Ready for an audit?</h2>
            <p className="mt-6 text-lg text-neutral-600">
              If you&apos;re serious about optimizing your teaching system and building
              real leverage, let&apos;s talk.
            </p>
            <div className="mt-8">
              <CTAButton href="/about#contact">Work With Swaleh for Audit</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
