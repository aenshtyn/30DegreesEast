import type { Metadata } from 'next'
import CTAButton from '@/components/ui/CTAButton'

export const metadata: Metadata = {
  title: 'About | 30 Degrees East',
  description: 'Learn about Swaleh Kimani and why 30 Degrees East exists.',
}

export default function About() {
  return (
    <>
      {/* About Swaleh */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
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
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
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

            <div className="mt-12 rounded-lg border-2 border-neutral-200 bg-neutral-50 p-8">
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
      <section id="contact" className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-neutral-900">Work With Me</h2>

            <div className="mt-8 text-center">
              <p className="text-lg text-neutral-700">
                If you&apos;re interested in working together, the best way to reach me is
                through the form below or by email.
              </p>
            </div>

            {/* Contact Form */}
            <div className="mt-12 rounded-lg border border-neutral-200 bg-white p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-900">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-2 block w-full rounded-md border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-900">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-2 block w-full rounded-md border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-neutral-900">
                    What are you interested in?
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="mt-2 block w-full rounded-md border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="coaching-english">Earn Online by Teaching English</option>
                    <option value="strategy-session">Thinking / Strategy Session</option>
                    <option value="teaching-audit">Teaching System Audit</option>
                    <option value="coaches-educators">Coaching for Coaches & Educators</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-900">
                    Tell me about where you are and what you&apos;re working on
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="mt-2 block w-full rounded-md border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    placeholder="Share your current situation, challenges, and what you're hoping to achieve..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-neutral-900 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-neutral-800"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-8 border-t border-neutral-200 pt-8 text-center">
                <p className="text-sm text-neutral-600">
                  You can also reach me directly at:{' '}
                  <a
                    href="mailto:hello@30degreeseast.com"
                    className="font-medium text-neutral-900 underline hover:text-neutral-700"
                  >
                    hello@30degreeseast.com
                  </a>
                </p>
              </div>
            </div>

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
