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
  className = ''
}: CTAButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold transition-all duration-300'

  const variantStyles = {
    primary:
      'bg-brand-600 text-white shadow-glow hover:bg-brand-700 hover:translate-y-[-1px] hover:shadow-xl',
    secondary:
      'border border-brand-200/70 bg-white/70 text-brand-700 hover:bg-white hover:text-brand-800'
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
