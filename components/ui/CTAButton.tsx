import Link from 'next/link'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  className = '',
}: CTAButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold uppercase tracking-[0.2em] font-accent transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

  const variantStyles = {
    primary:
      'bg-accent-500 text-raisin shadow-soft-card hover:bg-accent-400 hover:-translate-y-0.5 focus-visible:outline-accent-500',
    secondary:
      'border border-raisin/20 bg-transparent text-raisin hover:bg-raisin/5 focus-visible:outline-raisin'
  }

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}
