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
      {/* Welcome Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-center text-neutral-900">Start Here</h1>
            <p className="mt-6 text-center text-lg text-neutral-600">
              Welcome to 30 Degrees East. If you&apos;re new here, this page will help you
              understand what I do and how I can help you build leverage through teaching.
            </p>

            {/* Intro Video */}
            <div className="mt-12">
              <VideoEmbed
                src="https://player.vimeo.com/video/YOUR_INTRO_VIDEO_ID"
                title="Start Here Introduction"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Path */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-neutral-900">Choose Your Path</h2>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {/* Path 1: Professionals */}
              <div className="rounded-lg border-2 border-neutral-300 bg-white p-8">
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
                <div className="mt-8">
                  <CTAButton href="/coaching">Explore Coaching</CTAButton>
                </div>
              </div>

              {/* Path 2: Coaches & Educators */}
              <div className="rounded-lg border-2 border-neutral-300 bg-white p-8">
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
                <div className="mt-8">
                  <CTAButton href="/teaching-system-audit">Get an Audit</CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Work With Me */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-neutral-900">How to Work With Me</h2>

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
              <CTAButton href="/about#contact">Get in Touch</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
