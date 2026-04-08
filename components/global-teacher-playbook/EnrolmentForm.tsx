'use client'

import { FormEvent, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { applicationOptions, playbookIncludes, playbookInstructors } from '@/lib/data/global-teacher-playbook'

type StatusState = {
  type: 'success' | 'error' | null
  message: string
}

const inputClass =
  'mt-2 block w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-200/70 disabled:cursor-not-allowed disabled:opacity-70'

function OptionGroup({
  name,
  options,
  required,
  type = 'radio',
}: {
  name: string
  options: string[]
  required?: boolean
  type?: 'radio' | 'checkbox'
}) {
  return (
    <div className={type === 'checkbox' ? 'mt-3 grid gap-3 sm:grid-cols-2' : 'mt-3 space-y-3'}>
      {options.map((option, index) => (
        <label
          key={option}
          className="flex cursor-pointer items-start gap-3 rounded-2xl border border-neutral-200 bg-neutral-50/80 px-4 py-3 text-sm text-neutral-700 transition hover:border-accent-400 hover:bg-accent-50"
        >
          <input
            type={type}
            name={name}
            value={option}
            required={type === 'radio' && required && index === 0}
            className="mt-1 accent-accent-500"
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  )
}

function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-sm font-semibold text-raisin">
      {children}
      {required ? <span className="ml-1 text-accent-600">*</span> : null}
    </label>
  )
}

export default function EnrolmentForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<StatusState>({ type: null, message: '' })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus({ type: null, message: '' })
    setIsSubmitting(true)

    const form = event.currentTarget
    const formData = new FormData(form)
    const interests = formData.getAll('interests').map(String)

    if (interests.length === 0) {
      setIsSubmitting(false)
      setStatus({ type: 'error', message: 'Select at least one learning interest to continue.' })
      return
    }

    const payload = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      whatsapp: String(formData.get('whatsapp') ?? ''),
      background: String(formData.get('background') ?? ''),
      status: String(formData.get('status') ?? ''),
      interests,
      goal: String(formData.get('goal') ?? ''),
      challenge: String(formData.get('challenge') ?? ''),
      invest: String(formData.get('invest') ?? ''),
      earlybird: String(formData.get('earlybird') ?? ''),
      source: String(formData.get('source') ?? ''),
      website: String(formData.get('website') ?? ''),
    }

    try {
      const response = await fetch('/api/global-teacher-playbook/enrol', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await response.json()

      if (!response.ok) {
        setStatus({
          type: 'error',
          message: result.error || 'Unable to submit your application right now. Please try again.',
        })
        return
      }

      form.reset()
      router.push('/global-teacher-playbook/confirmed')
    } catch {
      setStatus({
        type: 'error',
        message: 'Unable to submit your application right now. Please try again or email us directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container-custom py-12 md:py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
        <div className="rounded-[32px] border border-white/70 bg-white/90 p-6 shadow-soft-card md:p-10">
          <p className="accent-label">Your application</p>
          <h2 className="mt-4 section-heading">Reserve your place.</h2>
          <p className="mt-4 text-neutral-700">
            This helps us understand where you are and make sure the programme is the right fit.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-10">
            <div className="hidden" aria-hidden="true">
              <label htmlFor="playbook-website">Website</label>
              <input id="playbook-website" name="website" tabIndex={-1} autoComplete="off" disabled={isSubmitting} />
            </div>

            <section className="space-y-5">
              <p className="border-b border-neutral-200 pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                Personal details
              </p>
              <div>
                <FieldLabel required>Full Name</FieldLabel>
                <input name="name" required placeholder="Your full name" disabled={isSubmitting} className={inputClass} />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <FieldLabel required>Email Address</FieldLabel>
                  <input name="email" type="email" required placeholder="you@email.com" disabled={isSubmitting} className={inputClass} />
                </div>
                <div>
                  <FieldLabel required>WhatsApp Number</FieldLabel>
                  <input name="whatsapp" type="tel" required placeholder="+254 7XX XXX XXX" disabled={isSubmitting} className={inputClass} />
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <p className="border-b border-neutral-200 pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                Your teaching background
              </p>
              <div>
                <FieldLabel required>What is your teaching background?</FieldLabel>
                <OptionGroup name="background" options={applicationOptions.background} required />
              </div>
              <div>
                <FieldLabel required>What best describes you right now?</FieldLabel>
                <OptionGroup name="status" options={applicationOptions.status} required />
              </div>
            </section>

            <section className="space-y-6">
              <p className="border-b border-neutral-200 pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                Your goals
              </p>
              <div>
                <FieldLabel required>What are you most interested in learning?</FieldLabel>
                <OptionGroup name="interests" options={applicationOptions.interests} type="checkbox" />
              </div>
              <div>
                <FieldLabel required>What is your biggest goal in the next 6 months?</FieldLabel>
                <textarea
                  name="goal"
                  required
                  rows={4}
                  placeholder="Example: I want to earn an additional KES 30,000 per month from online teaching."
                  disabled={isSubmitting}
                  className={inputClass}
                />
              </div>
              <div>
                <FieldLabel required>What is your biggest challenge right now?</FieldLabel>
                <textarea
                  name="challenge"
                  required
                  rows={4}
                  placeholder="Example: I do not know which platform to start with or how to price my lessons."
                  disabled={isSubmitting}
                  className={inputClass}
                />
              </div>
            </section>

            <section className="space-y-6">
              <p className="border-b border-neutral-200 pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                Commitment & investment
              </p>
              <div>
                <FieldLabel required>Would you be willing to invest KES 6,500?</FieldLabel>
                <OptionGroup name="invest" options={applicationOptions.invest} required />
              </div>
              <div>
                <FieldLabel required>Would you like access to early-bird pricing when enrolment opens?</FieldLabel>
                <OptionGroup name="earlybird" options={applicationOptions.earlybird} required />
              </div>
            </section>

            <section>
              <p className="border-b border-neutral-200 pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                One last thing
              </p>
              <div className="mt-6">
                <FieldLabel required>Where did you hear about us?</FieldLabel>
                <OptionGroup name="source" options={applicationOptions.source} required />
              </div>
            </section>

            {status.type ? (
              <div
                className={`rounded-2xl border px-4 py-3 text-sm ${
                  status.type === 'success'
                    ? 'border-accent-200 bg-accent-50 text-neutral-900'
                    : 'border-red-200 bg-red-50 text-red-700'
                }`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-accent-500 px-8 py-4 text-base font-semibold text-raisin shadow-soft-card transition hover:bg-accent-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? 'Submitting...' : 'Submit My Application'}
            </button>
            <p className="text-center text-sm text-neutral-500">
              After submitting, you will hear from us within 24 hours with payment details and your confirmed spot.
            </p>
          </form>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28">
          <div className="rounded-[28px] border border-accent-500/30 bg-accent-500/10 p-8 text-center shadow-soft-card">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Course Investment</p>
            <p className="mt-3 font-display text-6xl text-raisin">KES 6,500</p>
            <p className="mt-2 text-sm text-neutral-600">One-time payment · M-Pesa accepted</p>
          </div>

          <div className="rounded-[28px] border border-accent-500/20 bg-raisin p-7 text-white shadow-soft-card">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-300">What is included</h3>
            <ul className="mt-5 space-y-3">
              {playbookIncludes.map((item) => (
                <li key={item.title} className="flex gap-3 border-b border-white/10 pb-3 text-sm text-white/75 last:border-b-0 last:pb-0">
                  <span className="text-accent-300">✓</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] border border-accent-500/20 bg-raisin p-7 text-white shadow-soft-card">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-300">Your instructors</h3>
            <div className="mt-5 space-y-4">
              {playbookInstructors.map((instructor) => (
                <div key={instructor.name} className="flex gap-3 border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                  <div className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-accent-500/15 text-xs font-semibold text-accent-300">
                    {instructor.image ? (
                      <Image
                        src={instructor.image}
                        alt={instructor.name}
                        fill
                        sizes="44px"
                        className="object-cover object-center"
                      />
                    ) : (
                      instructor.initials
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{instructor.name}</p>
                    <p className="text-xs leading-5 text-white/50">{instructor.shortRole}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
