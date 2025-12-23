import type { Metadata } from 'next'
import CTAButton from '@/components/ui/CTAButton'
import ContactForm from '@/components/ui/ContactForm'

export const metadata: Metadata = {
  title: 'About | 30 Degrees East',
  description: 'Learn about Swaleh Kimani and why 30 Degrees East exists.',
}

export default function About() {
  return (
    <>
      {/* About Swaleh */}
      <section className="section-padding section-gradient">
        <div className="container-custom">
          <div className="glass-panel mx-auto max-w-3xl">
            <h1 className="text-neutral-900">About Swaleh Kimani</h1>

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

      {/* Why 30 Degrees East Exists */}
      <section className="section-padding section-gradient-muted">
        <div className="container-custom">
          <div className="glass-panel mx-auto max-w-3xl">
            <h2 className="text-neutral-900">Why 30 Degrees East exists</h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-neutral-700">
              <p>
                30 Degrees East is my personal HQ—a place to communicate my worldview,
                positioning, and the work I do clearly and without noise.
              </p>

              <p>
                This is not a blog, marketplace, or course platform. It&apos;s a focused space
                for professionals and educators who are serious about building teaching
                systems that create real leverage.
              </p>

              <p>
                The name comes from the longitude line that runs through East Africa—a
                reference to geography, positioning, and knowing where you stand. That&apos;s
                what this work is about: clarity, positioning, and strategic thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="section-padding section-gradient">
        <div className="container-custom">
          <div className="glass-panel mx-auto max-w-3xl">
            <h2 className="text-neutral-900">Who I work with</h2>

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

            <div className="glass-panel-muted mt-12">
              <h3 className="text-xl font-semibold text-neutral-900">Clear boundaries:</h3>
              <p className="mt-4 text-lg text-neutral-700">
                I don&apos;t work with people looking for quick fixes, motivational content, or
                generic business coaching. This work requires strategic thinking, patience,
                and a commitment to building systems that last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work With Me */}
      <section id="contact" className="section-padding section-gradient-muted">
        <div className="container-custom">
          <div className="glass-panel mx-auto max-w-3xl">
            <h2 className="text-center text-neutral-900">Work With Me</h2>

            <div className="mt-8 text-center">
              <p className="text-lg text-neutral-700">
                If you&apos;re interested in working together, the best way to reach me is
                through the form below or by email.
              </p>
            </div>

            {/* Contact Form */}
            <ContactForm />

            <div className="mt-8 text-center text-sm text-neutral-600">
              <p>
                I review all inquiries personally. If it&apos;s a good fit, I&apos;ll respond within
                2-3 business days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
