import type { Metadata } from 'next'
import CTAButton from '@/components/ui/CTAButton'

export const metadata: Metadata = {
  title: 'About | 30 Degrees East',
  description: 'Learn about Swaleh Kimani and why 30 Degrees East exists.',
}

export default function About() {
  return (
    <>
      <section className="section-padding bg-raisin text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">About the studio</p>
            <h1 className="mt-6 text-white">About Swaleh Kimani</h1>
            <p className="mt-6 text-lg text-white/80">
              30 Degrees East helps educators and thoughtful professionals turn knowledge into
              structured, sustainable online offers.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-neutral-100 bg-neutral-50/70 p-10 shadow-soft-card">
            <h2 className="section-heading text-center">What I help people build</h2>
            <div className="prose prose-lg mt-8 max-w-none">
              <p className="text-lg leading-relaxed text-neutral-700">
                I help African teachers, professionals, and educators confidently transition
                into the digital space—guiding them to package what they already know into
                online courses and teaching systems that earn sustainably, without burnout
                or influencer pressure.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-neutral-700">
                My work is focused on language, thinking, and systems. I believe that most
                people already know enough to teach—they just need the right frameworks to
                package and deliver that knowledge effectively.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-neutral-700">
                I&apos;m not interested in hype, shortcuts, or building audiences for the sake
                of it. I care about strategic positioning, sustainable systems, and helping
                people build leverage through teaching.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-gradient-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-white/70 bg-white/85 p-10 shadow-soft-card">
            <h2 className="section-heading text-center">How I work</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-[24px] border border-white/70 bg-white p-6 shadow-soft-card">
                <p className="accent-label">Clarity first</p>
                <p className="mt-3 text-neutral-700">
                  We start by getting clear on the offer, the learner, and the transformation.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/70 bg-white p-6 shadow-soft-card">
                <p className="accent-label">Systems over hype</p>
                <p className="mt-3 text-neutral-700">
                  The goal is repeatable delivery, not constant posting or personality-driven marketing.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/70 bg-white p-6 shadow-soft-card">
                <p className="accent-label">Built to last</p>
                <p className="mt-3 text-neutral-700">
                  Every program, audit, or lab should leave you with assets you can keep using.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-neutral-100 bg-neutral-50/70 p-10 shadow-soft-card">
            <h2 className="section-heading text-center">Who I work with</h2>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-neutral-900">I work with people who:</h3>
              <ul className="mt-6 space-y-4 text-lg text-neutral-700">
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-900">•</span>
                  Already have knowledge, expertise, or teaching experience
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-900">•</span>
                  Want to transition into sustainable online work
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-900">•</span>
                  Value systems, strategy, and clear thinking over hype
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-900">•</span>
                  Are ready to do the work of building teaching frameworks
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-900">•</span>
                  Don&apos;t want to become influencers or sell personality
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-gradient-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl rounded-[32px] border border-white/70 bg-white/85 p-10 text-center shadow-soft-card">
            <h2 className="section-heading">Work With Me</h2>
            <div className="mt-8">
              <p className="text-lg text-neutral-700">
                If the approach fits how you want to build, the best next step is the contact page.
              </p>
            </div>
            <div className="mt-10">
              <CTAButton href="/contact">Go to Contact</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
