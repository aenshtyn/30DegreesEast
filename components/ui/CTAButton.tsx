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
  const baseStyles = 'inline-block px-8 py-4 text-base font-medium rounded-md transition-colors'

  const variantStyles = {
    primary: 'bg-neutral-900 text-white hover:bg-neutral-800',
    secondary: 'bg-white text-neutral-900 border-2 border-neutral-900 hover:bg-neutral-50'
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
