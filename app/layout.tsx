import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: '30 Degrees East | by Swaleh Kimani',
  description: 'I help professionals, coaches, and educators build leverage through language, thinking, and systems — creating teaching frameworks that scale without burning out or becoming influencers.',
  keywords: ['coaching', 'education', 'teaching systems', 'online courses', 'professional development'],
  authors: [{ name: 'Swaleh Kimani' }],
  openGraph: {
    title: '30 Degrees East | by Swaleh Kimani',
    description: 'I help professionals, coaches, and educators build leverage through language, thinking, and systems.',
    url: 'https://30degreeseast.com',
    siteName: '30 Degrees East',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
