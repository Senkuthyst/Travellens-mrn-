import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'TravelLens - Explore. Learn. Experience.',
  description: 'Turn tourism into learning. Turn learning into journeys. Discover Nepal through immersive cultural education and ethical travel.',
  keywords: ['travel', 'education', 'Nepal', 'cultural tourism', 'responsible travel', 'Buddhism', 'heritage'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
