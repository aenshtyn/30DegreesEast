'use client'

import { FormEvent, useMemo, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { applicationOptions, playbookIncludes, playbookInstructors } from '@/lib/data/global-teacher-playbook'

type StatusState = {
  type: 'success' | 'error' | null
  message: string
}

type FormValues = {
  background: string
  challenge: string
  earlybird: string
  email: string
  goal: string
  interests: string[]
  invest: string
  name: string
  source: string
  status: string
  whatsapp: string
}

const initialValues: FormValues = {
  background: '',
  challenge: '',
  earlybird: '',
  email: '',
  goal: '',
  interests: [],
  invest: '',
  name: '',
  source: '',
  status: '',
  whatsapp: '',
}

const steps = [
  { label: 'Personal Details', description: 'Name, email, and WhatsApp' },
  { label: 'Teaching Background', description: 'Where you are starting from' },
  { label: 'Your Goals', description: 'What you want to build next' },
  { label: 'Commitment', description: 'Investment and early-bird access' },
  { label: 'Source', description: 'How you heard about us' },
]

const inputClass =
  'mt-2 block w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-200/70 disabled:cursor-not-allowed disabled:opacity-70'

function OptionGroup({
  onChange,
  name,
  options,
  required,
  type = 'radio',
  value,
}: {
  onChange: (value: string) => void
  name: string
  options: string[]
  required?: boolean
  type?: 'radio' | 'checkbox'
  value: string | string[]
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
            checked={Array.isArray(value) ? value.includes(option) : value === option}
            onChange={() => onChange(option)}
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
  const [activeStep, setActiveStep] = useState(0)
  const [formValues, setFormValues] = useState<FormValues>(initialValues)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [openInstructorName, setOpenInstructorName] = useState<string | null>(null)
  const [status, setStatus] = useState<StatusState>({ type: null, message: '' })
  const isLastStep = activeStep === steps.length - 1
  const openInstructor = playbookInstructors.find((instructor) => instructor.name === openInstructorName)

  const completedSteps = useMemo(
    () => [
      Boolean(formValues.name && formValues.email && formValues.whatsapp),
      Boolean(formValues.background && formValues.status),
      Boolean(formValues.interests.length > 0 && formValues.goal && formValues.challenge),
      Boolean(formValues.invest && formValues.earlybird),
      Boolean(formValues.source),
    ],
    [formValues]
  )

  const updateValue = (name: keyof FormValues, value: string) => {
    setStatus({ type: null, message: '' })
    setFormValues((prev) => ({ ...prev, [name]: value }))
  }

  const toggleInterest = (value: string) => {
    setStatus({ type: null, message: '' })
    setFormValues((prev) => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter((interest) => interest !== value)
        : [...prev.interests, value],
    }))
  }

  const getCurrentStepError = () => {
    if (activeStep === 0) {
      if (!formValues.name.trim() || !formValues.email.trim() || !formValues.whatsapp.trim()) {
        return 'Add your name, email, and WhatsApp number to continue.'
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email.trim())) {
        return 'Enter a valid email address to continue.'
      }
    }

    if (activeStep === 1 && (!formValues.background || !formValues.status)) {
      return 'Select your teaching background and current status to continue.'
    }

    if (activeStep === 2) {
      if (formValues.interests.length === 0) {
        return 'Select at least one learning interest to continue.'
      }
      if (!formValues.goal.trim() || !formValues.challenge.trim()) {
        return 'Add your goal and current challenge to continue.'
      }
    }

    if (activeStep === 3 && (!formValues.invest || !formValues.earlybird)) {
      return 'Select both commitment options to continue.'
    }

    if (activeStep === 4 && !formValues.source) {
      return 'Select where you heard about us before submitting.'
    }

    return ''
  }

  const goToNextStep = () => {
    const error = getCurrentStepError()

    if (error) {
      setStatus({ type: 'error', message: error })
      return
    }

    setStatus({ type: null, message: '' })
    setActiveStep((current) => Math.min(current + 1, steps.length - 1))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus({ type: null, message: '' })

    if (!isLastStep) {
      goToNextStep()
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)

    const error = getCurrentStepError()

    if (error) {
      setStatus({ type: 'error', message: error })
      return
    }

    setIsSubmitting(true)

    const payload = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      whatsapp: formValues.whatsapp.trim(),
      background: formValues.background,
      status: formValues.status,
      interests: formValues.interests,
      goal: formValues.goal.trim(),
      challenge: formValues.challenge.trim(),
      invest: formValues.invest,
      earlybird: formValues.earlybird,
      source: formValues.source,
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
      setFormValues(initialValues)
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

          <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(132px,1fr))] gap-3">
            {steps.map((step, index) => (
              <button
                key={step.label}
                type="button"
                onClick={() => index <= activeStep || completedSteps[index - 1] ? setActiveStep(index) : null}
                className={`min-w-0 rounded-2xl border px-3 py-3 text-left transition ${
                  index === activeStep
                    ? 'border-accent-500 bg-accent-50 text-raisin'
                    : completedSteps[index]
                      ? 'border-accent-200 bg-white text-neutral-700'
                      : 'border-neutral-200 bg-neutral-50 text-neutral-400'
                }`}
              >
                <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.12em]">
                  {completedSteps[index] ? 'Done' : `Step ${index + 1}`}
                </span>
                <span className="mt-1 block text-sm font-semibold leading-snug">{step.label}</span>
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-8">
            <div className="hidden" aria-hidden="true">
              <label htmlFor="playbook-website">Website</label>
              <input id="playbook-website" name="website" tabIndex={-1} autoComplete="off" disabled={isSubmitting} />
            </div>

            {activeStep === 0 ? (
            <section className="space-y-5 rounded-[28px] border border-neutral-200 bg-neutral-50/70 p-6">
              <p className="border-b border-neutral-200 pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                Personal details
              </p>
              <div>
                <FieldLabel required>Full Name</FieldLabel>
                <input
                  name="name"
                  required
                  placeholder="Your full name"
                  disabled={isSubmitting}
                  className={inputClass}
                  value={formValues.name}
                  onChange={(event) => updateValue('name', event.target.value)}
                />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <FieldLabel required>Email Address</FieldLabel>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                    disabled={isSubmitting}
                    className={inputClass}
                    value={formValues.email}
                    onChange={(event) => updateValue('email', event.target.value)}
                  />
                </div>
                <div>
                  <FieldLabel required>WhatsApp Number</FieldLabel>
                  <input
                    name="whatsapp"
                    type="tel"
                    required
                    placeholder="+254 7XX XXX XXX"
                    disabled={isSubmitting}
                    className={inputClass}
                    value={formValues.whatsapp}
                    onChange={(event) => updateValue('whatsapp', event.target.value)}
                  />
                </div>
              </div>
            </section>
            ) : null}

            {activeStep === 1 ? (
            <section className="space-y-6 rounded-[28px] border border-neutral-200 bg-neutral-50/70 p-6">
              <p className="border-b border-neutral-200 pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                Your teaching background
              </p>
              <div>
                <FieldLabel required>What is your teaching background?</FieldLabel>
                <OptionGroup
                  name="background"
                  options={applicationOptions.background}
                  required
                  value={formValues.background}
                  onChange={(value) => updateValue('background', value)}
                />
              </div>
              <div>
                <FieldLabel required>What best describes you right now?</FieldLabel>
                <OptionGroup
                  name="status"
                  options={applicationOptions.status}
                  required
                  value={formValues.status}
                  onChange={(value) => updateValue('status', value)}
                />
              </div>
            </section>
            ) : null}

            {activeStep === 2 ? (
            <section className="space-y-6 rounded-[28px] border border-neutral-200 bg-neutral-50/70 p-6">
              <p className="border-b border-neutral-200 pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                Your goals
              </p>
              <div>
                <FieldLabel required>What are you most interested in learning?</FieldLabel>
                <OptionGroup
                  name="interests"
                  options={applicationOptions.interests}
                  type="checkbox"
                  value={formValues.interests}
                  onChange={toggleInterest}
                />
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
                  value={formValues.goal}
                  onChange={(event) => updateValue('goal', event.target.value)}
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
                  value={formValues.challenge}
                  onChange={(event) => updateValue('challenge', event.target.value)}
                />
              </div>
            </section>
            ) : null}

            {activeStep === 3 ? (
            <section className="space-y-6 rounded-[28px] border border-neutral-200 bg-neutral-50/70 p-6">
              <p className="border-b border-neutral-200 pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                Commitment & investment
              </p>
              <div>
                <FieldLabel required>Would you be willing to invest KES 6,500?</FieldLabel>
                <OptionGroup
                  name="invest"
                  options={applicationOptions.invest}
                  required
                  value={formValues.invest}
                  onChange={(value) => updateValue('invest', value)}
                />
              </div>
              <div>
                <FieldLabel required>Would you like access to early-bird pricing when enrolment opens?</FieldLabel>
                <OptionGroup
                  name="earlybird"
                  options={applicationOptions.earlybird}
                  required
                  value={formValues.earlybird}
                  onChange={(value) => updateValue('earlybird', value)}
                />
              </div>
            </section>
            ) : null}

            {activeStep === 4 ? (
            <section className="rounded-[28px] border border-neutral-200 bg-neutral-50/70 p-6">
              <p className="border-b border-neutral-200 pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                One last thing
              </p>
              <div className="mt-6">
                <FieldLabel required>Where did you hear about us?</FieldLabel>
                <OptionGroup
                  name="source"
                  options={applicationOptions.source}
                  required
                  value={formValues.source}
                  onChange={(value) => updateValue('source', value)}
                />
              </div>
            </section>
            ) : null}

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

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                disabled={activeStep === 0 || isSubmitting}
                onClick={() => setActiveStep((current) => Math.max(current - 1, 0))}
                className="rounded-full border border-neutral-200 px-6 py-3 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Back
              </button>
              {isLastStep ? (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-accent-500 px-8 py-4 text-base font-semibold text-raisin shadow-soft-card transition hover:bg-accent-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 disabled:cursor-not-allowed disabled:opacity-70 sm:min-w-[240px]"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit My Application'}
                </button>
              ) : (
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={goToNextStep}
                  className="rounded-full bg-accent-500 px-8 py-4 text-base font-semibold text-raisin shadow-soft-card transition hover:bg-accent-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 disabled:cursor-not-allowed disabled:opacity-70 sm:min-w-[180px]"
                >
                  Continue
                </button>
              )}
            </div>
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
                <button
                  key={instructor.name}
                  type="button"
                  onClick={() => setOpenInstructorName(instructor.name)}
                  className="flex w-full gap-3 border-b border-white/10 pb-4 text-left transition hover:text-accent-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300 last:border-b-0 last:pb-0"
                >
                  <div className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-accent-500/15 text-xs font-semibold text-accent-300">
                    {instructor.image ? (
                      <Image
                        src={instructor.image}
                        alt={instructor.name}
                        fill
                        sizes="44px"
                        className="object-cover"
                        style={{ objectPosition: instructor.imagePosition ?? 'center' }}
                      />
                    ) : (
                      instructor.initials
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{instructor.name}</p>
                    <p className="text-xs leading-5 text-white/50">{instructor.shortRole}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {openInstructor ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-raisin/80 px-6 py-10 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="enrolment-instructor-modal-title"
          onClick={() => setOpenInstructorName(null)}
        >
          <div
            className="w-full max-w-xl rounded-[28px] border border-neutral-200 bg-white p-6 text-raisin shadow-soft-card md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="accent-label">Instructor</p>
                <h2 id="enrolment-instructor-modal-title" className="mt-3 text-3xl text-raisin">
                  {openInstructor.name}
                </h2>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-accent-600">
                  {openInstructor.role}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpenInstructorName(null)}
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-neutral-200 text-xl text-neutral-500 transition hover:bg-neutral-50 hover:text-raisin"
                aria-label="Close instructor details"
              >
                x
              </button>
            </div>
            <p className="mt-6 text-neutral-700">{openInstructor.bio}</p>
          </div>
        </div>
      ) : null}
    </div>
  )
}
