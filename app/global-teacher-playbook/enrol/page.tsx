import type { Metadata } from 'next'

import EnrolmentForm from '@/components/global-teacher-playbook/EnrolmentForm'
import { playbookStats } from '@/lib/data/global-teacher-playbook'

export const metadata: Metadata = {
  title: 'Apply for The Global Teacher Playbook | 30 Degrees East',
  description:
    'Submit your application for The Global Teacher Playbook, a live programme for Kenyan teachers building global online income.',
}

export default function GlobalTeacherPlaybookEnrolPage() {
  return (
    <>
      <section className="bg-raisin text-white">
        <div className="container-custom py-14 text-center md:py-20">
          <p className="mx-auto inline-flex rounded-full border border-accent-500/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
            Enrolment
          </p>
          <h1 className="mx-auto mt-6 max-w-3xl text-white">
            Secure your spot in <span className="text-accent-300">The Global Teacher Playbook.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/70">
            Fill in the form below to reserve your place. Once submitted, you will receive confirmation
            and payment details via WhatsApp or email within 24 hours.
          </p>
        </div>
      </section>

      <section className="bg-neutral-900 text-white">
        <div className="container-custom flex flex-wrap justify-center gap-x-6 gap-y-2 py-4">
          {playbookStats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-2 text-sm">
              <p className="font-semibold text-accent-300">{stat.value}</p>
              <p className="text-white/40">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <EnrolmentForm />
    </>
  )
}
