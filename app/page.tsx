import VideoEmbed from '@/components/ui/VideoEmbed'
import CTAButton from '@/components/ui/CTAButton'
import ServiceCard from '@/components/ui/ServiceCard'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-hero-grid">
        <div className="container-custom">
          <div className="glass-panel space-y-10 text-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-medium text-brand-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                Modern coaching for thoughtful teachers
              </span>
              <h1 className="mt-6 text-neutral-900">
                Build leverage through language, thinking, and systems
              </h1>
              <p className="mt-6 text-xl text-neutral-600">
                I help professionals, coaches, and educators create teaching frameworks
                that scale without burning out or becoming influencers.
              </p>
            </div>

            {/* Hero Video */}
            <div className="mx-auto max-w-4xl">
              <VideoEmbed
                src="https://player.vimeo.com/video/YOUR_VIDEO_ID"
                title="Welcome to 30 Degrees East"
              />
            </div>

            <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center">
              <CTAButton href="/start-here">Start Here</CTAButton>
              <CTAButton href="/about#contact" variant="secondary">
                Work With Me
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section-padding section-gradient">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-neutral-900">Who this is for</h2>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="glass-panel-muted">
                <h3 className="text-lg font-semibold text-neutral-900">This is for you if:</h3>
                <ul className="mt-6 space-y-4 text-neutral-700">
                  {[
                    'You\'re a professional or educator ready to transition online',
                    'You have knowledge worth teaching but need structure',
                    'You want sustainable income without influencer pressure',
                    'You value systems over hype',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-brand-100 bg-white text-brand-600 shadow-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.8}
                          className="h-4 w-4"
                        >
                          <path d="m5 12 4 4L19 6" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-panel-muted">
                <h3 className="text-lg font-semibold text-neutral-900">This is not for you if:</h3>
                <ul className="mt-6 space-y-4 text-neutral-700">
                  {[
                    "You're looking for get-rich-quick schemes",
                    'You want to become a social media influencer',
                    "You're not willing to do the strategic thinking work",
                    "You're expecting done-for-you solutions",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-accent-100 bg-white text-accent-500 shadow-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.8}
                          className="h-4 w-4"
                        >
                          <path d="m6 18 12-12M6 6l12 12" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Help */}
      <section className="section-padding section-gradient-muted">
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
