'use client'

import { FormEvent, useState } from 'react'

export default function PartnerInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      service: 'partner-with-swaleh',
      message: `Business / industry: ${formData.get('business') as string}\n\n${formData.get('message') as string}`,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thanks. Your message has been sent and you should get a reply within 2-3 business days.',
        })
        ;(e.target as HTMLFormElement).reset()
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Something went wrong. Please try again.',
        })
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const labelClassName = 'mb-2 block text-sm font-medium text-neutral-900'
  const inputClassName =
    'w-full rounded-xl border border-white/70 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 shadow-inner focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200'

  return (
    <div className="rounded-[32px] border border-white/70 bg-white/95 p-6 shadow-soft-card md:p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="partner-name" className={labelClassName}>
            Your name
          </label>
          <input
            id="partner-name"
            type="text"
            name="name"
            placeholder="Your name"
            required
            disabled={isSubmitting}
            className={inputClassName}
          />
        </div>
        <div>
          <label htmlFor="partner-business" className={labelClassName}>
            Business / industry
          </label>
          <input
            id="partner-business"
            type="text"
            name="business"
            placeholder="Construction, retail, logistics, education..."
            required
            disabled={isSubmitting}
            className={inputClassName}
          />
        </div>
        <div>
          <label htmlFor="partner-email" className={labelClassName}>
            Email address
          </label>
          <input
            id="partner-email"
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            disabled={isSubmitting}
            className={inputClassName}
          />
        </div>
        <div>
          <label htmlFor="partner-message" className={labelClassName}>
            What could you teach?
          </label>
          <textarea
            id="partner-message"
            name="message"
            rows={5}
            placeholder="Tell me what you do, who you help, and the kind of knowledge people usually come to you for."
            required
            disabled={isSubmitting}
            className={`${inputClassName} resize-y`}
          />
        </div>

        {submitStatus.type && (
          <div
            className={`rounded-xl px-4 py-3 text-sm ${
              submitStatus.type === 'success'
                ? 'bg-green-100 text-green-900'
                : 'bg-red-100 text-red-900'
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-accent-500 px-8 py-4 text-base font-semibold text-raisin shadow-soft-card transition hover:bg-accent-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? 'Sending...' : 'Send My Message'}
        </button>
      </form>
    </div>
  )
}
