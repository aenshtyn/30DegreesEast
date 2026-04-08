import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const quickLinks = [
    { label: 'Teach English Online', href: '/teach-english-online' },
    { label: 'Global Teacher Playbook', href: '/global-teacher-playbook' },
    { label: 'Freebies', href: '/freebies' },
    { label: 'About Swaleh', href: '/about' },
    { label: 'Partner with Swaleh', href: '/partner-with-swaleh' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="border-t border-white/10 bg-raisin text-white">
      <div className="container-custom py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr,0.9fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">30 Degrees East</p>
            <Link href="/" className="flex flex-col">
              <span className="mt-3 text-2xl font-semibold tracking-tight text-white">
                <span className="text-accent-300">30 Degrees</span> East
              </span>
              <span className="mt-1 text-sm text-white/60">by Swaleh Kimani</span>
            </Link>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/75">
              Helping teachers and thoughtful professionals turn what they already know into
              clear, structured, sustainable online offers.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">Quick links</h3>
            <ul className="mt-6 grid gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/80 transition hover:text-accent-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">Work with me</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Have a question about the program, audit, or co-creation labs? Start with the contact page.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-raisin transition hover:bg-accent-400"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-sm text-white/55">
            &copy; {currentYear} 30 Degrees East. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
