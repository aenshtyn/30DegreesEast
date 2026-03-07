'use client'

import { FormEvent, useEffect, useState } from 'react'

type StatusState = {
  type: 'success' | 'error' | null
  message: string
}

type WaitlistFormProps = {
  onSuccess?: () => void
  className?: string
  onValidityChange?: (isValid: boolean) => void
  theme?: 'dark' | 'light'
  submitLabel?: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function WaitlistForm({
  onSuccess,
  className,
  onValidityChange,
  theme = 'dark',
  submitLabel = 'Join the Waiting List',
}: WaitlistFormProps = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<StatusState>({ type: null, message: '' })
  const [formValues, setFormValues] = useState({ name: '', email: '' })

  const isFormValid = formValues.name.trim().length > 1 && emailPattern.test(formValues.email.trim())

  useEffect(() => {
    onValidityChange?.(isFormValid)
  }, [isFormValid, onValidityChange])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus({ type: null, message: '' })

    if (!isFormValid) {
      setStatus({ type: 'error', message: 'Enter your name and a valid email address to continue.' })
      return
    }

    setIsSubmitting(true)

    const payload = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
    }

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thanks! You are on the Teach English Online waitlist.',
        })
        event.currentTarget.reset()
        setFormValues({ name: '', email: '' })
        onValidityChange?.(false)
        onSuccess?.()
      } else {
        setStatus({
          type: 'error',
          message: result.error || 'Unable to submit right now. Please try again soon.',
        })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Unable to submit right now. Please try again soon.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const isLight = theme === 'light'
  const labelClass = isLight ? 'text-sm font-medium text-neutral-800' : 'text-sm font-medium text-white/80'
  const inputClass = isLight
    ? 'mt-2 block w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-200/70'
    : 'mt-2 block w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-200/70'
  const successClass = isLight
    ? 'border-accent-200 bg-accent-50 text-neutral-900'
    : 'border-accent-200 bg-accent-500/10 text-white'
  const errorClass = isLight
    ? 'border-red-200 bg-red-50 text-red-700'
    : 'border-red-400/40 bg-red-500/10 text-red-100'

  return (
    <form onSubmit={handleSubmit} className={`mt-8 space-y-5 ${className ?? ''}`}>
      {isLight ? (
        <div className="grid gap-4 md:grid-cols-[1fr,1fr,auto] md:items-end">
          <div>
            <label htmlFor="waitlist-name" className={labelClass}>
              Name
            </label>
            <input
              type="text"
              id="waitlist-name"
              name="name"
              required
              className={inputClass}
              placeholder="Your name"
              disabled={isSubmitting}
              value={formValues.name}
              onChange={(event) =>
                setFormValues((prev) => ({ ...prev, name: event.target.value }))
              }
            />
          </div>
          <div>
            <label htmlFor="waitlist-email" className={labelClass}>
              Email
            </label>
            <input
              type="email"
              id="waitlist-email"
              name="email"
              required
              className={inputClass}
              placeholder="you@email.com"
              disabled={isSubmitting}
              value={formValues.email}
              onChange={(event) =>
                setFormValues((prev) => ({ ...prev, email: event.target.value }))
              }
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-accent-500 px-8 py-4 text-base font-semibold text-raisin shadow-soft-card transition hover:bg-accent-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
          >
            {isSubmitting ? 'Submitting...' : submitLabel}
          </button>
        </div>
      ) : (
        <>
          <div>
            <label htmlFor="waitlist-name" className={labelClass}>
              Name
            </label>
            <input
              type="text"
              id="waitlist-name"
              name="name"
              required
              className={inputClass}
              placeholder="Your name"
              disabled={isSubmitting}
              value={formValues.name}
              onChange={(event) =>
                setFormValues((prev) => ({ ...prev, name: event.target.value }))
              }
            />
          </div>
          <label htmlFor="waitlist-email" className={labelClass}>
            Email
          </label>
          <input
            type="email"
            id="waitlist-email"
            name="email"
            required
            className={inputClass}
            placeholder="you@email.com"
            disabled={isSubmitting}
            value={formValues.email}
            onChange={(event) =>
              setFormValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-accent-500 px-8 py-4 text-base font-semibold text-raisin shadow-soft-card transition hover:bg-accent-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Submitting...' : submitLabel}
          </button>
        </>
      )}
      <p className={isLight ? 'text-sm text-neutral-600' : 'text-sm text-white/65'}>
        Join to hear about new cohorts, digital products, and co-creation lab openings.
      </p>
      {status.type && (
        <div
          className={`rounded-2xl border px-4 py-3 text-sm ${
            status.type === 'success'
              ? successClass
              : errorClass
          }`}
          role="status"
          aria-live="polite"
        >
          {status.message}
        </div>
      )}
    </form>
  )
}
