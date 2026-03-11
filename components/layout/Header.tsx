'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Courses', href: '/#courses' },
    { name: 'Digital Products', href: '/#products' },
    { name: 'Freebies', href: '/#freebies' },
    { name: 'Success Stories', href: '/#stories' },
    { name: 'About Swaleh', href: '/about' },
    { name: 'Partner with Swaleh', href: '/partner-with-swaleh' },
    { name: 'Join Waitlist', href: '/#waitlist' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <nav className="container-custom py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-xl font-semibold tracking-tight text-neutral-900">
              <span className="text-accent-600">30 Degrees</span> East
            </span>
            <span className="text-sm text-neutral-600">by Swaleh Kimani</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={
                  item.name === 'Join Waitlist'
                    ? 'inline-flex items-center justify-center rounded-full bg-accent-500 px-5 py-3 text-xs font-semibold tracking-[0.08em] text-raisin shadow-soft-card transition hover:bg-accent-400'
                    : 'text-sm font-medium text-neutral-700 transition-colors hover:text-brand-600'
                }
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-6 flex flex-col gap-4 border-t border-white/60 pt-6 md:hidden">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={
                  item.name === 'Join Waitlist'
                    ? 'inline-flex items-center justify-center rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold tracking-[0.08em] text-raisin shadow-soft-card transition hover:bg-accent-400'
                    : 'text-base font-medium text-neutral-700 transition-colors hover:text-brand-600'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
