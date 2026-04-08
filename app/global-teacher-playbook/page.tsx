import type { Metadata } from 'next'

import CTAButton from '@/components/ui/CTAButton'
import {
  playbookAudience,
  playbookFaqs,
  playbookIncludes,
  playbookInstructors,
  playbookModules,
} from '@/lib/data/global-teacher-playbook'

export const metadata: Metadata = {
  title: 'The Global Teacher Playbook | 30 Degrees East',
  description:
    'A five-module live programme helping Kenyan teachers turn their teaching skills into global online income.',
}

export default function GlobalTeacherPlaybookPage() {
  return (
    <>
      <section className="bg-raisin text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-4xl">
            <p className="inline-flex rounded-full border border-accent-500/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              5-module live programme
            </p>
            <h1 className="mt-6 max-w-4xl text-white">
              The Global Teacher <span className="text-accent-300">Playbook.</span>
            </h1>
            <p className="mt-5 max-w-2xl font-display text-3xl leading-tight text-accent-300">
              Turn your teaching skills into global income, without leaving Kenya.
            </p>
            <p className="mt-6 max-w-3xl text-white/75">
              Launch on 3-5 global teaching platforms, position yourself to attract premium students,
              set rates that reflect your expertise, and build $1,200-2,000/month income within your
              first year while teaching from Kenya.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/55">
              <span><strong className="text-accent-300">5 modules</strong> · 10-12 hours</span>
              <span><strong className="text-accent-300">Google Meet</strong> sessions</span>
              <span><strong className="text-accent-300">WhatsApp</strong> community</span>
              <span><strong className="text-accent-300">Kenyan teachers</strong> going global</span>
            </div>
            <div className="mt-10">
              <CTAButton href="/global-teacher-playbook/enrol">Secure Your Spot</CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 text-white">
        <div className="container-custom py-12">
          <div className="grid gap-6 md:grid-cols-2">
            {playbookInstructors.map((instructor) => (
              <article key={instructor.name} className="flex gap-5 rounded-[28px] border border-accent-500/20 bg-white/5 p-6">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border border-accent-500/30 bg-accent-500/10 font-semibold text-accent-300">
                  {instructor.initials}
                </div>
                <div>
                  <h2 className="text-xl text-white">{instructor.name} · {instructor.role}</h2>
                  <p className="mt-3 text-sm leading-7 text-white/65">{instructor.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="accent-label">Who this is for</p>
            <h2 className="mt-4 section-heading">You are in the right place if...</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {playbookAudience.map((item) => (
              <article key={item} className="rounded-[24px] border border-neutral-200 bg-neutral-50/80 p-6 shadow-soft-card">
                <p className="text-neutral-800"><span className="mr-2 text-accent-600">✓</span>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="curriculum" className="section-padding bg-neutral-50/80">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <p className="accent-label">The curriculum</p>
            <h2 className="mt-4 section-heading">Five modules. One complete system.</h2>
            <p className="mt-5 text-neutral-700">
              Each module combines live sessions, recorded lessons, practical worksheets, and community
              support. You leave every module with a concrete deliverable you can use immediately.
            </p>
            <div className="mt-10 space-y-4">
              {playbookModules.map((module, index) => (
                <details key={module.title} className="group overflow-hidden rounded-[24px] border border-neutral-200 bg-white shadow-soft-card" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-start gap-4 p-6 transition hover:bg-neutral-50">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-raisin font-semibold text-accent-300">
                      {module.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl text-raisin">{module.title}</h3>
                      <p className="mt-1 text-sm text-neutral-500">
                        Outcome: {module.outcome} · Instructor: {module.instructor}
                      </p>
                    </div>
                    <span className="text-accent-500 transition group-open:rotate-45">+</span>
                  </summary>
                  <div className="px-6 pb-6 md:pl-20">
                    <ul className="space-y-3">
                      {module.lessons.map((lesson) => (
                        <li key={lesson} className="flex gap-3 border-t border-neutral-100 pt-3 text-sm text-neutral-700 first:border-t-0 first:pt-0">
                          <span className="text-accent-600">→</span>
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 rounded-2xl bg-accent-500/10 px-4 py-3 text-sm font-medium text-raisin">
                      Deliverable: {module.deliverable}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="accent-label">What is included</p>
            <h2 className="mt-4 section-heading">Everything you need. Nothing you do not.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {playbookIncludes.map((item) => (
              <article key={item.title} className="rounded-[24px] border border-neutral-200 bg-neutral-50/70 p-6 shadow-soft-card">
                <h3 className="text-xl text-raisin">{item.title}</h3>
                <p className="mt-3 text-neutral-700">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-raisin text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <p className="accent-label text-accent-300">From our first cohort</p>
            <h2 className="mt-4 text-white">Real teachers. Real results.</h2>
            <blockquote className="mt-8 rounded-[28px] border border-accent-500/20 bg-white/5 p-8 font-display text-3xl leading-snug text-white/85 shadow-soft-card">
              I realised there is actually no perfect time to start. You just start where you are and grow from there. I now have a plan, structure, and direction.
            </blockquote>
            <p className="mt-4 text-sm font-semibold text-accent-300">First cohort participant, Global Teacher Playbook</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="accent-label">Frequently asked questions</p>
              <h2 className="mt-4 section-heading">Questions we get asked a lot.</h2>
            </div>
            <div className="mt-10 divide-y divide-neutral-200 rounded-[24px] border border-neutral-200 bg-white/80 px-6 shadow-soft-card">
              {playbookFaqs.map((faq, index) => (
                <details key={faq.question} className="group py-5" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-raisin">
                    <span>{faq.question}</span>
                    <span className="text-accent-500 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-neutral-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="section-padding bg-raisin text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl rounded-[32px] border border-accent-500/20 bg-white/5 p-8 text-center shadow-soft-card md:p-10">
            <p className="accent-label text-accent-300">Enrolment</p>
            <h2 className="mt-4 text-white">One investment. Six weeks that change your direction.</h2>
            <p className="mt-6 font-display text-7xl text-white">KES 6,500</p>
            <p className="mt-3 text-sm text-white/50">One-time payment · M-Pesa accepted · Limited spots per cohort</p>
            <div className="mt-8">
              <CTAButton href="/global-teacher-playbook/enrol" className="w-full sm:w-auto">
                Secure Your Spot
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
