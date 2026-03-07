import type { Metadata } from 'next'
import CTAButton from '@/components/ui/CTAButton'

const modules = [
  {
    title: 'Module 1 · Claim Your Teaching Path',
    summary:
      'Clarify the niche, promise, and positioning that will attract the right English learners into your ecosystem.',
    lessons: [
      'Define your standout teaching POV and value ladder',
      'Audit current assets to find curriculum-ready ideas',
      'Choose the delivery mix (live, async, community) that fits your capacity',
    ],
  },
  {
    title: 'Module 2 · Architect the Curriculum',
    summary:
      'Turn scattered lessons into a signature system with modules, milestones, and clear student outcomes.',
    lessons: [
      'Design the promise-to-proof journey for every lesson',
      'Map assessments, practice, and accountability touchpoints',
      'Prep assets (slides, worksheets, prompts) using provided templates',
    ],
  },
  {
    title: 'Module 3 · Build Repeatable Systems',
    summary:
      'Set up lightweight delivery systems so you can onboard, teach, and support students without burning out.',
    lessons: [
      'Create your student onboarding + support dashboards',
      'Automate follow ups, reminders, and progress nudges',
      'Document SOPs for grading, community updates, and office hours',
    ],
  },
  {
    title: 'Module 4 · Launch + Grow',
    summary:
      'Put your program in market using calm, repeatable marketing motions designed for teachers—not influencers.',
    lessons: [
      'Craft the messaging kit for live, email, and DM outreach',
      'Plan a 4-week visibility sprint with batching prompts',
      'Create a metrics dashboard so you can iterate every cohort',
    ],
  },
]

const programHighlights = [
  'Weekly implementation calls and office hours for live feedback.',
  'Private resource hub with plug-and-play scripts, worksheets, and templates.',
  'Peer review circles so you can test ideas with other teachers before launch.',
  'Optional co-creation labs for building lessons alongside your students.',
]

export const metadata: Metadata = {
  title: 'Teach English Online Program | 30 Degrees East',
  description:
    'Review the module-by-module breakdown of the Teach English Online flagship program and see exactly what you get before joining the waitlist.',
}

export default function TeachEnglishOnlineProgram() {
  return (
    <>
      <section className="section-padding bg-raisin text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Flagship program</p>
            <h1 className="mt-6 text-white">
              The Teach English Online Program
            </h1>
            <p className="mt-6 text-base text-white/80">
              A guided path for teachers and professionals who want to package their expertise into a repeatable online English program—with modules, systems, and supportive community built in.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton href="/#waitlist" className="w-full sm:w-auto">
                Join the Waiting List
              </CTAButton>
              <CTAButton href="/co-creation" variant="secondary" className="w-full border-white/40 text-white hover:bg-white/10 sm:w-auto">
                Explore Co-creation Labs
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="modules-title">
        <div className="container-custom">
          <h2 id="modules-title" className="section-heading text-center">
            Program modules
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {modules.map((module) => (
              <div key={module.title} className="flex h-full flex-col rounded-[28px] border border-neutral-100 bg-neutral-50/50 p-8 shadow-soft-card">
                <div className="space-y-4">
                  <h3 className="text-2xl text-raisin">{module.title}</h3>
                  <p className="text-neutral-700">{module.summary}</p>
                  <ul className="space-y-3 text-neutral-700">
                    {module.lessons.map((lesson) => (
                      <li key={lesson} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent-500" />
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-gradient-muted" aria-labelledby="highlights-title">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <h2 id="highlights-title" className="section-heading">
              What else you get inside
            </h2>
            <p className="mt-6 text-neutral-700">
              The curriculum is paired with support and accountability so you can finish building, launch, and iterate with confidence.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <ul className="space-y-4 text-left text-neutral-800">
              {programHighlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/80 p-5 shadow-soft-card">
                  <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-accent-500" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 text-center">
            <CTAButton href="/#waitlist" className="inline-flex">
              Join the Waiting List
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
