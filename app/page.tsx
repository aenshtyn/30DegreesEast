import VideoEmbed from '@/components/ui/VideoEmbed'
import CTAButton from '@/components/ui/CTAButton'
import ServiceCard from '@/components/ui/ServiceCard'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-neutral-900">
              Build leverage through language, thinking, and systems
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
              I help professionals, coaches, and educators create teaching frameworks
              that scale without burning out or becoming influencers.
            </p>
          </div>

          {/* Hero Video */}
          <div className="mx-auto mt-12 max-w-4xl">
            <VideoEmbed
              src="https://player.vimeo.com/video/YOUR_VIDEO_ID"
              title="Welcome to 30 Degrees East"
            />
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-neutral-900">Who this is for</h2>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">This is for you if:</h3>
                <ul className="mt-4 space-y-3 text-neutral-700">
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    You&apos;re a professional or educator ready to transition online
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    You have knowledge worth teaching but need structure
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    You want sustainable income without influencer pressure
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    You value systems over hype
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-neutral-900">This is not for you if:</h3>
                <ul className="mt-4 space-y-3 text-neutral-700">
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    You&apos;re looking for get-rich-quick schemes
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    You want to become a social media influencer
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    You&apos;re not willing to do the strategic thinking work
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neutral-900">•</span>
                    You&apos;re expecting done-for-you solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Help */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center text-neutral-900">How I help</h2>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            <ServiceCard
              title="Coaching"
              description="One-on-one guidance to help you package your expertise and build sustainable teaching systems."
              href="/coaching"
            />
            <ServiceCard
              title="Teaching System Audit"
              description="A paid diagnostic to review your lessons, structure, pricing, and identify leverage opportunities."
              href="/teaching-system-audit"
            />
            <ServiceCard
              title="Strategy Sessions"
              description="Paid clarity sessions to diagnose your current position and chart your next steps."
              href="/coaching#strategy"
            />
          </div>

          <div className="mt-12 flex justify-center gap-4">
            <CTAButton href="/start-here">Start Here</CTAButton>
            <CTAButton href="/about#contact" variant="secondary">
              Work With Me
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
