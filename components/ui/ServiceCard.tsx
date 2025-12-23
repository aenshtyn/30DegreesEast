import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  linkText?: string
}

export default function ServiceCard({
  title,
  description,
  href,
  linkText = 'Learn more'
}: ServiceCardProps) {
  return (
    <div className="glass-panel-muted group flex h-full flex-col">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-100 bg-white text-brand-600 transition-colors duration-300 group-hover:border-brand-300 group-hover:bg-brand-500 group-hover:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M12 3c-4.97 0-9 3.582-9 8 0 2.772 1.93 5.178 4.76 6.626-.174.988-.707 2.64-2.357 3.907 2.357.198 4.181-.959 5.27-1.843A11.33 11.33 0 0 0 12 19c4.97 0 9-3.582 9-8s-4.03-8-9-8Z" />
        </svg>
      </div>
      <h3 className="mt-6 text-xl font-semibold text-neutral-900">{title}</h3>
      <p className="mt-4 text-base leading-relaxed text-neutral-600">{description}</p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center text-sm font-semibold text-brand-700 transition-all duration-300 hover:text-brand-900"
      >
        {linkText}
        <svg
          className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
}
