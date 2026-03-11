import type { Metadata } from 'next'
import CTAButton from '@/components/ui/CTAButton'

const labTracks = [
  {
    title: 'Lesson Sprint Labs',
    description: 'Co-design a single lesson or module alongside learners so the final asset is rooted in real student input.',
    outcomes: [
      'Map the promise, practice, and proof for one lesson',
      'Collect live feedback inside the lab session',
      'Leave with the final worksheet, prompts, and facilitation notes',
    ],
  },
  {
    title: 'Offer Build Along',
    description: 'Turn your idea into a deliverable offer (membership, bundle, mini-course) with my frameworks layered in.',
    outcomes: [
      'Outline the full offer stack and pricing',
      'Design the onboarding + fulfillment checklist',
      'Record or map the marketing content needed for launch',
    ],
  },
  {
    title: 'Systems + Support Studio',
    description: 'Document the backstage systems that keep your students engaged and supported after purchase.',
    outcomes: [
      'Design your support runway and update cadence',
      'Automate reminders, check-ins, and testimonials',
      'Ship a Notion or Airtable workspace using pre-built templates',
    ],
  },
]

const collaborationSteps = [
  {
    title: 'Submit your idea',
    detail: 'Share the lesson, course, or learning experience you want to build (or rebuild) so I can review fit.',
  },
  {
    title: 'Build together, live',
    detail: 'We meet inside a co-creation lab—part workshop, part studio—to draft, test, and refine the asset.',
  },
  {
    title: 'Document + publish',
    detail: 'You leave with templates, SOPs, and next steps so the work keeps paying off after the live session.',
  },
]

export const metadata: Metadata = {
  title: 'Co-creation Labs | 30 Degrees East',
  description:
    'Partner with Swaleh Kimani to co-create lessons, offers, and teaching systems through focused studio-style sessions.',
}

export default function CoCreationLabs() {
  return (
    <>
      <section className="section-padding bg-raisin text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Build together</p>
            <h1 className="mt-6 text-white">
              Build faster together. <span className="text-accent-300">Ship stronger with support.</span>
            </h1>
            <p className="mt-6 text-base text-white/80">
              Collaborative intensives for teachers who want to ship lessons, offers, or systems faster—with a strategy partner and real-time student insight.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton href="/#waitlist" className="w-full sm:w-auto">
                Join the Waitlist
              </CTAButton>
              <CTAButton href="/teach-english-online" variant="secondary" className="w-full border-white/40 text-white hover:bg-white/10 sm:w-auto">
                View the Flagship Program
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="tracks-title">
        <div className="container-custom">
          <h2 id="tracks-title" className="section-heading text-center">
            Choose a co-creation track
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {labTracks.map((track) => (
              <div key={track.title} className="flex h-full flex-col rounded-[28px] border border-neutral-100 bg-white p-6 shadow-soft-card">
                <h3 className="text-2xl text-raisin">{track.title}</h3>
                <p className="mt-4 text-neutral-700">{track.description}</p>
                <ul className="mt-6 space-y-3 text-neutral-700">
                  {track.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent-500" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-gradient" aria-labelledby="steps-title">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center text-neutral-900">
            <h2 id="steps-title" className="section-heading">
              How co-creation works
            </h2>
            <p className="mt-6 text-neutral-700">
              Each lab is lightweight: you bring context, I bring frameworks and templates, and we leave with something you can use immediately.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {collaborationSteps.map((step, index) => (
              <div key={step.title} className="rounded-[28px] border border-white/70 bg-white/80 p-6 text-neutral-900 shadow-soft-card">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-lg font-semibold text-accent-600">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-xl">{step.title}</h3>
                <p className="mt-2 text-neutral-700">{step.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CTAButton href="/#waitlist" className="inline-flex">
              Join the Waitlist
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
