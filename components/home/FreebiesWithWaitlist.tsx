'use client'

import type { ReactElement } from 'react'
import { useState } from 'react'

import WaitlistForm from '@/components/ui/WaitlistForm'

type IconName = 'document' | 'template' | 'video'

export type Freebie = {
  title: string
  description: string
  icon: IconName
  downloadUrl: string
}

type FreebiesWithWaitlistProps = {
  freebies: Freebie[]
}

const iconMap: Record<IconName, ReactElement> = {
  document: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
      <path d="M7 3h7l5 5v13H7z" />
      <path d="M14 3v5h5" />
    </svg>
  ),
  template: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M4 10h16M10 4v16" />
    </svg>
  ),
  video: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="m10 9 6 3-6 3z" />
    </svg>
  ),
}

export default function FreebiesWithWaitlist({ freebies }: FreebiesWithWaitlistProps) {
  const [selectedFreebie, setSelectedFreebie] = useState<Freebie | null>(null)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)
  const [formKey, setFormKey] = useState(0)
  const [isDownloadEnabled, setIsDownloadEnabled] = useState(false)

  const openFreebie = (freebie: Freebie) => {
    setSelectedFreebie(freebie)
    setIsUnlocked(false)
    setIsFormValid(false)
    setIsDownloadEnabled(false)
    setFormKey((prev) => prev + 1)
  }

  const closeModal = () => {
    setSelectedFreebie(null)
    setIsUnlocked(false)
    setIsFormValid(false)
    setIsDownloadEnabled(false)
  }

  return (
    <>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {freebies.map((freebie) => (
          <button
            key={freebie.title}
            type="button"
            onClick={() => openFreebie(freebie)}
            className="rounded-[28px] border border-white/60 bg-white p-6 text-left shadow-soft-card transition hover:border-accent-200 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
            aria-haspopup="dialog"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-50 text-accent-500" aria-hidden="true">
              {iconMap[freebie.icon]}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-neutral-900">{freebie.title}</h3>
            <p className="mt-2 text-sm text-neutral-700">{freebie.description}</p>
            <span className="mt-4 inline-flex text-xs font-accent uppercase tracking-[0.35em] text-accent-500">
              Tap to unlock
            </span>
          </button>
        ))}
      </div>

      {selectedFreebie && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="presentation"
          onClick={closeModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedFreebie.title} waitlist gate`}
            className="relative w-full max-w-xl rounded-[32px] border border-white/10 bg-raisin p-8 text-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:bg-white/10"
              onClick={closeModal}
              aria-label="Close waitlist gate"
            >
              <span aria-hidden="true">×</span>
            </button>
            <p className="text-sm font-accent uppercase tracking-[0.35em] text-white/70">Free resource</p>
            <h3 className="mt-2 text-2xl font-semibold">{selectedFreebie.title}</h3>
            <p className="mt-4 text-white/80">{selectedFreebie.description}</p>
            <p className="mt-4 text-sm text-white/70">
              Join the waitlist below to unlock the download. Once you submit, the access button appears instantly.
            </p>
            <WaitlistForm
              key={formKey}
              onSuccess={() => {
                setIsUnlocked(true)
                setIsDownloadEnabled(true)
              }}
              onValidityChange={setIsFormValid}
              redirectOnSuccess={null}
            />
            {isDownloadEnabled ? (
              <a
                href={selectedFreebie.downloadUrl}
                download
                className="mt-6 flex w-full items-center justify-center rounded-full bg-accent-500 px-8 py-4 text-base font-semibold text-raisin shadow-soft-card transition hover:bg-accent-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
              >
                Access {selectedFreebie.title}
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="mt-6 w-full rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white/60"
              >
                {!isFormValid
                  ? 'Enter your name and a valid email to enable download'
                  : isUnlocked
                    ? 'Preparing your download...'
                    : 'Submit the form to unlock this download'}
              </button>
            )}
          </div>
        </div>
      )}
    </>
  )
}
