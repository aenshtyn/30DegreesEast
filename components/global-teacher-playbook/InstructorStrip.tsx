'use client'

import Image from 'next/image'
import { useState } from 'react'

import { playbookInstructors } from '@/lib/data/global-teacher-playbook'

export default function InstructorStrip() {
  const [openInstructorName, setOpenInstructorName] = useState<string | null>(null)
  const openInstructor = playbookInstructors.find((instructor) => instructor.name === openInstructorName)

  return (
    <section className="border-t border-accent-500/10 bg-raisin text-white">
      <div className="container-custom py-5">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-center">
          {playbookInstructors.map((instructor) => (
            <button
              key={instructor.name}
              type="button"
              onClick={() => setOpenInstructorName(instructor.name)}
              className="flex min-w-[220px] items-center justify-center gap-3 rounded-2xl px-3 py-2 text-left transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300"
            >
              <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-accent-500/30 bg-accent-500/10 font-semibold text-accent-300">
                {instructor.image ? (
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                    style={{ objectPosition: instructor.imagePosition ?? 'center' }}
                  />
                ) : (
                  instructor.initials
                )}
              </div>
              <div className="text-left">
                <h2 className="text-base font-semibold text-white">{instructor.name}</h2>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/55">{instructor.role}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {openInstructor ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-raisin/80 px-6 py-10 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="instructor-modal-title"
          onClick={() => setOpenInstructorName(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[28px] border border-neutral-200 bg-white p-6 text-raisin shadow-soft-card md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="relative flex h-32 w-32 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-accent-500/15 text-lg font-semibold text-accent-600">
                  {openInstructor.image ? (
                    <Image
                      src={openInstructor.image}
                      alt={openInstructor.name}
                      fill
                      sizes="128px"
                      className="object-cover"
                      style={{ objectPosition: openInstructor.imagePosition ?? 'center' }}
                    />
                  ) : (
                    openInstructor.initials
                  )}
                </div>
                <div>
                  <p className="accent-label">Instructor</p>
                  <h2 id="instructor-modal-title" className="mt-3 text-3xl text-raisin">
                    {openInstructor.name}
                  </h2>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-accent-600">
                    {openInstructor.role}
                  </p>
                </div>
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
    </section>
  )
}
