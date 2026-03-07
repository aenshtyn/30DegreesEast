import type { Metadata } from 'next'
import VideoEmbed from '@/components/ui/VideoEmbed'
import CTAButton from '@/components/ui/CTAButton'

export const metadata: Metadata = {
  title: 'Start Here | 30 Degrees East',
  description: 'New to 30 Degrees East? Start here to find your path.',
}

export default function StartHere() {
  return (
    <>
      <section className="section-padding bg-raisin text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Orientation</p>
            <h1 className="mt-6 text-white">Start Here</h1>
            <p className="mt-6 text-center text-lg text-white/80">
              Welcome to 30 Degrees East. If you&apos;re new here, this page will help you
              understand what I do and how I can help you build leverage through teaching.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton href="/teach-english-online" className="w-full sm:w-auto">
                Explore the Flagship Program
              </CTAButton>
              <CTAButton
                href="/co-creation"
                variant="secondary"
                className="w-full border-white/40 text-white hover:bg-white/10 sm:w-auto"
              >
                View Co-creation Labs
              </CTAButton>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-4xl">
            <VideoEmbed
              src="https://player.vimeo.com/video/YOUR_INTRO_VIDEO_ID"
              title="Start Here Introduction"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h2 className="section-heading text-center">Choose Your Path</h2>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="flex h-full flex-col rounded-[28px] border border-neutral-100 bg-neutral-50/70 p-8 shadow-soft-card">
                <h3 className="text-2xl font-semibold text-neutral-900">
                  For Professionals
                </h3>
                <p className="mt-4 text-neutral-600">
                  You&apos;re a teacher, professional, or educator looking to transition into
                  the digital space and earn online by teaching what you already know.
                </p>
                <ul className="mt-6 space-y-3 text-neutral-700">
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    Turn your expertise into online income
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    Package your knowledge effectively
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    Build sustainable teaching systems
                  </li>
                </ul>
                <div className="mt-auto pt-8">
                  <CTAButton href="/teach-english-online">Explore the Program</CTAButton>
                </div>
              </div>

              <div className="flex h-full flex-col rounded-[28px] border border-neutral-100 bg-neutral-50/70 p-8 shadow-soft-card">
                <h3 className="text-2xl font-semibold text-neutral-900">
                  For Coaches &amp; Educators
                </h3>
                <p className="mt-4 text-neutral-600">
                  You&apos;re already teaching or coaching online but need to audit and
                  optimize your systems for better results and more leverage.
                </p>
                <ul className="mt-6 space-y-3 text-neutral-700">
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    Review your teaching structure
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    Identify leverage opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    Optimize pricing and delivery
                  </li>
                </ul>
                <div className="mt-auto pt-8">
                  <CTAButton href="/teaching-system-audit">Get an Audit</CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-gradient-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-white/70 bg-white/85 p-10 shadow-soft-card">
            <h2 className="section-heading text-center">How to Work With Me</h2>

            <div className="mt-12 space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">
                    Explore the services
                  </h3>
                  <p className="mt-2 text-neutral-600">
                    Review the coaching options and teaching system audit to understand
                    what fits your needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">
                    Reach out
                  </h3>
                  <p className="mt-2 text-neutral-600">
                    Fill out the contact form or send an email explaining where you are
                    and what you&apos;re working on.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">
                    Let&apos;s work together
                  </h3>
                  <p className="mt-2 text-neutral-600">
                    If it&apos;s a good fit, we&apos;ll schedule a time to begin working on
                    your teaching system and strategy.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <CTAButton href="/contact">Get in Touch</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
