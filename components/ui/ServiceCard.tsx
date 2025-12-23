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
    <div className="group rounded-lg border border-neutral-200 bg-white p-8 transition-all hover:border-neutral-300 hover:shadow-sm">
      <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
      <p className="mt-4 text-base leading-relaxed text-neutral-600">{description}</p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center text-sm font-medium text-neutral-900 transition-colors group-hover:text-neutral-700"
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
