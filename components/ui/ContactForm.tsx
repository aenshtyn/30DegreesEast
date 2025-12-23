'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
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
      service: formData.get('service') as string,
      message: formData.get('message') as string,
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
          message: 'Thank you for reaching out! I\'ll respond within 2-3 business days.',
        })
        // Reset form
        ;(e.target as HTMLFormElement).reset()
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Something went wrong. Please try again.',
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mt-12 glass-panel">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-900">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-2 block w-full rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-neutral-900 placeholder-neutral-500 shadow-inner focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
            placeholder="Your name"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-900">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-2 block w-full rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-neutral-900 placeholder-neutral-500 shadow-inner focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
            placeholder="your@email.com"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-neutral-900">
            What are you interested in?
          </label>
          <select
            id="service"
            name="service"
            className="mt-2 block w-full rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-neutral-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
            required
            disabled={isSubmitting}
          >
            <option value="">Select a service</option>
            <option value="coaching-english">Earn Online by Teaching English</option>
            <option value="strategy-session">Thinking / Strategy Session</option>
            <option value="teaching-audit">Teaching System Audit</option>
            <option value="coaches-educators">Coaching for Coaches & Educators</option>
            <option value="other">Other / General Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-900">
            Tell me about where you are and what you&apos;re working on
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="mt-2 block w-full rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
            placeholder="Share your current situation, challenges, and what you're hoping to achieve..."
            required
            disabled={isSubmitting}
          />
        </div>

        {submitStatus.type && (
          <div
            className={`rounded-md p-4 ${
              submitStatus.type === 'success'
                ? 'bg-green-50 text-green-800'
                : 'bg-red-50 text-red-800'
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-gradient-to-r from-brand-600 via-brand-500 to-accent-400 px-8 py-4 text-base font-semibold text-white shadow-glow transition-all hover:translate-y-[-1px] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <div className="mt-8 border-t border-neutral-200 pt-8 text-center">
        <p className="text-sm text-neutral-600">
          You can also reach me directly at:{' '}
          <a
            href="mailto:hello@30degreeseast.com"
            className="font-medium text-brand-700 underline hover:text-brand-900"
          >
            hello@30degreeseast.com
          </a>
        </p>
      </div>
    </div>
  )
}
