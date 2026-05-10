import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sakshi G. Nivekar — Business Development & Operations Executive',
  description:
    'Portfolio of Sakshi G. Nivekar — Business Development & Operations Executive, Creative Strategist, and Social Media Executive based in Pune, Maharashtra. Open to remote and freelance opportunities.',
  keywords: [
    'Sakshi Nivekar',
    'Business Development',
    'Operations Executive',
    'Social Media Strategy',
    'Google Analytics',
    'SEO',
    'Pune',
    'Maharashtra',
    'AI Tools',
    'Freelance',
  ],
  authors: [{ name: 'Sakshi G. Nivekar' }],
  creator: 'Sakshi G. Nivekar',
  openGraph: {
    type: 'website',
    title: 'Sakshi G. Nivekar — Portfolio',
    description:
      'Business Development & Operations Executive | Creative Strategist | Social Media Executive',
    siteName: 'Sakshi G. Nivekar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sakshi G. Nivekar — Portfolio',
    description: 'Business Development & Operations Executive based in Pune, Maharashtra.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
