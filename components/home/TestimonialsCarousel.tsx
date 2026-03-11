'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

type Story = {
  name: string
  role: string
  quote: string
  image: string
}

type TestimonialsCarouselProps = {
  stories: Story[]
  variant?: 'home' | 'program'
}

const AUTOPLAY_INTERVAL = 6000

export default function TestimonialsCarousel({
  stories,
  variant = 'home',
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (stories.length <= 1) return

    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stories.length)
    }, AUTOPLAY_INTERVAL)

    return () => clearInterval(id)
  }, [stories.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const isProgramVariant = variant === 'program'

  return (
    <div className="relative">
      <div
        className={
          isProgramVariant
            ? 'overflow-hidden rounded-[32px]'
            : 'overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-2'
        }
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {stories.map((story) => (
            <article
              key={story.name}
              className={isProgramVariant ? 'min-w-full' : 'min-w-full px-2 py-6'}
            >
              <div
                className={
                  isProgramVariant
                    ? 'relative rounded-[28px] bg-raisin p-8 text-white shadow-soft-card'
                    : 'rounded-[28px] border border-white/15 bg-raisin/90 p-8 shadow-soft-card'
                }
              >
                {isProgramVariant ? (
                  <>
                    <p className="text-sm tracking-[0.2em] text-accent-400">★★★★★</p>
                    <p className="mt-6 text-lg italic leading-relaxed text-white/85">“{story.quote}”</p>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20">
                        <Image src={story.image} alt={story.name} fill sizes="48px" className="object-cover" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{story.name}</p>
                        <p className="text-sm text-white/60">{story.role}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-4">
                      <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/30">
                        <Image src={story.image} alt={story.name} fill sizes="56px" className="object-cover" />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-white">{story.name}</p>
                        <p className="text-sm text-white/70">{story.role}</p>
                      </div>
                    </div>
                    <p className="mt-6 text-lg leading-relaxed text-white/90">“{story.quote}”</p>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {stories.map((_, index) => (
          <button
            key={`dot-${index}`}
            type="button"
            className={`h-2 rounded-full transition-all ${
              currentIndex === index ? 'w-8 bg-accent-500' : 'w-2 bg-accent-500/35'
            }`}
            aria-label={`Show testimonial ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
