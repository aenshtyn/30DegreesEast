import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/50 bg-gradient-to-b from-white via-indigo-50 to-white">
      <div className="container-custom py-12">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex flex-col">
              <span className="text-lg font-semibold tracking-tight text-neutral-900">
                30 Degrees East
              </span>
              <span className="mt-1 text-sm text-neutral-600">by Swaleh Kimani</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              Building leverage through language, thinking, and systems.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900">Navigation</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/start-here" className="text-sm text-neutral-600 hover:text-neutral-900">
                  Start Here
                </Link>
              </li>
              <li>
                <Link href="/coaching" className="text-sm text-neutral-600 hover:text-neutral-900">
                  Coaching
                </Link>
              </li>
              <li>
                <Link href="/teaching-system-audit" className="text-sm text-neutral-600 hover:text-neutral-900">
                  Teaching System Audit
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-sm text-neutral-600 hover:text-neutral-900">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-neutral-600 hover:text-neutral-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-neutral-600 hover:text-neutral-900">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900">Work With Me</h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              Ready to build your teaching system?
            </p>
            <Link
              href="/about#contact"
              className="mt-4 inline-block text-sm font-medium text-neutral-900 underline hover:text-neutral-700"
            >
              Get in touch
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/70 pt-8">
          <p className="text-sm text-neutral-600">
            &copy; {currentYear} 30 Degrees East. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
