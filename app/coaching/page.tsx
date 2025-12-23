import type { Metadata } from 'next'
import VideoEmbed from '@/components/ui/VideoEmbed'
import CTAButton from '@/components/ui/CTAButton'

export const metadata: Metadata = {
  title: 'Coaching | 30 Degrees East',
  description: 'One-on-one coaching to help you build sustainable teaching systems and online income.',
}

export default function Coaching() {
  return (
    <>
      {/* Header */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-neutral-900">Coaching</h1>
            <p className="mt-6 text-xl text-neutral-600">
              One-on-one guidance to help you package your expertise, build teaching
              systems, and create sustainable online income.
            </p>
          </div>
        </div>
      </section>

      {/* Service A: Earn Online by Teaching English */}
      <section id="english" className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-neutral-900">Earn Online by Teaching English</h2>
            <p className="mt-4 text-lg text-neutral-700">
              <strong>Note:</strong> This is NOT English language teaching.
            </p>
            <p className="mt-6 text-lg text-neutral-600">
              This is about helping people turn English into an online income skill through
              teaching, tutoring, or coaching—leveraging what they already know.
            </p>

            {/* Optional Video */}
            <div className="mt-12">
              <VideoEmbed
                src="https://player.vimeo.com/video/YOUR_ENGLISH_VIDEO_ID"
                title="Earn Online by Teaching English"
              />
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900">This is for you if:</h3>
                <ul className="mt-4 space-y-3 text-neutral-700">
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    You&apos;re proficient in English but unsure how to monetize it
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    You want to teach or tutor online without gimmicks
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    You need a clear system to package your knowledge
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    You&apos;re ready to build sustainable income streams
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-900">What you&apos;ll get:</h3>
                <ul className="mt-4 space-y-3 text-neutral-700">
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    Clear positioning for your teaching offer
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    Systems to structure lessons and delivery
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    Pricing and packaging strategy
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    A roadmap to start earning online
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <CTAButton href="/about#contact">Work With Swaleh</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Service B: Thinking / Strategy Sessions */}
      <section id="strategy" className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-neutral-900">Thinking / Strategy Sessions</h2>
            <p className="mt-6 text-lg text-neutral-600">
              Paid diagnostic and clarity sessions to help you think through your current
              position, identify blockers, and chart your next strategic moves.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900">This is for you if:</h3>
                <ul className="mt-4 space-y-3 text-neutral-700">
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    You&apos;re stuck and need clarity on your next move
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    You have multiple ideas but no clear direction
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    You want strategic feedback on your current work
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    You need help diagnosing what&apos;s not working
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-900">What happens in a session:</h3>
                <ul className="mt-4 space-y-3 text-neutral-700">
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    Deep dive into your current situation
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    Identify core blockers and opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    Strategic recommendations and next steps
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    Clarity on positioning and direction
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <CTAButton href="/about#contact">Work With Swaleh</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Service C: For Coaches & Educators */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-neutral-900">For Coaches &amp; Educators</h2>
            <p className="mt-6 text-lg text-neutral-600">
              If you&apos;re already teaching or coaching online, I help you build leverage
              through better systems, clearer positioning, and strategic frameworks.
            </p>

            {/* Optional Video */}
            <div className="mt-12">
              <VideoEmbed
                src="https://player.vimeo.com/video/YOUR_COACHES_VIDEO_ID"
                title="For Coaches & Educators"
              />
            </div>

            <div className="mt-12">
              <p className="text-lg text-neutral-700">
                This work focuses on helping you move from selling time to building
                systems—teaching that scales without requiring you to be always on.
              </p>
              <p className="mt-4 text-lg text-neutral-700">
                If you&apos;re ready for a full diagnostic of your teaching system, consider
                the{' '}
                <a
                  href="/teaching-system-audit"
                  className="font-medium text-neutral-900 underline hover:text-neutral-700"
                >
                  Teaching System Audit
                </a>
                .
              </p>
            </div>

            <div className="mt-12 text-center">
              <CTAButton href="/teaching-system-audit">Get an Audit</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
