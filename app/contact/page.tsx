import type { Metadata } from 'next'

import ContactForm from '@/components/ui/ContactForm'
import CTAButton from '@/components/ui/CTAButton'

export const metadata: Metadata = {
  title: 'Contact | 30 Degrees East',
  description: 'Get in touch with Swaleh Kimani about coaching, audits, programs, and partnerships.',
}

const contactNotes = [
  'I review all inquiries personally.',
  'If it is a fit, expect a reply within 2-3 business days.',
  'The more context you share, the easier it is to recommend the right next step.',
]

const contactPaths = [
  {
    title: 'Flagship Program',
    description: 'Questions about the Teach English Online program, modules, or upcoming cohorts.',
    href: '/teach-english-online',
    cta: 'View Program',
  },
  {
    title: 'Teaching System Audit',
    description: 'For educators who want a focused diagnostic on delivery, pricing, and leverage.',
    href: '/teaching-system-audit',
    cta: 'See Audit',
  },
  {
    title: 'Co-creation Labs',
    description: 'For collaborative builds where you want to design lessons, offers, or systems together.',
    href: '/co-creation',
    cta: 'Explore Labs',
  },
]

export default function ContactPage() {
  return (
    <>
      <section className="section-padding bg-raisin text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Contact</p>
            <h1 className="mt-6 text-white">
              Let&apos;s talk. <span className="text-accent-300">Find the right next step.</span>
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Reach out if you want help building a stronger teaching offer, diagnosing your current
              systems, or finding the right path into the digital space.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
            <div className="rounded-[32px] border border-neutral-100 bg-neutral-50/70 p-8 shadow-soft-card">
              <h2 className="section-heading">Before you submit</h2>
              <ul className="mt-8 space-y-4 text-neutral-700">
                {contactNotes.map((note) => (
                  <li key={note} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-accent-500" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 rounded-[28px] border border-white/70 bg-white p-6 shadow-soft-card">
                <p className="accent-label">Direct email</p>
                <a
                  href="mailto:hello@30degreeseast.com"
                  className="mt-3 inline-block text-lg font-semibold text-neutral-900 underline decoration-accent-500 underline-offset-4"
                >
                  hello@30degreeseast.com
                </a>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/70 bg-white/90 p-8 shadow-soft-card">
              <h2 className="section-heading text-center">Send a message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-gradient-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            <h2 className="section-heading text-center">Choose the best path</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {contactPaths.map((path) => (
                <div
                  key={path.title}
                  className="flex h-full flex-col rounded-[28px] border border-white/70 bg-white/85 p-6 shadow-soft-card"
                >
                  <h3 className="text-2xl text-neutral-900">{path.title}</h3>
                  <p className="mt-4 flex-1 text-neutral-700">{path.description}</p>
                  <div className="mt-8">
                    <CTAButton href={path.href} className="w-full">
                      {path.cta}
                    </CTAButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
