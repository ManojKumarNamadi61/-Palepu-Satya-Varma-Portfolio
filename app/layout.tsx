import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Palepu Satya Varma | UI/UX Designer & Web Designer',
  description: 'UI/UX Designer and Web Designer in India creating clean, responsive, user-centered web and mobile interfaces with Figma.',
  keywords: ['UI/UX Designer', 'Web Designer', 'Figma Designer', 'Mobile App Designer', 'Responsive Design', 'Design Systems'],
  generator: 'v0.app',
}

export const viewport: Viewport = { colorScheme: 'dark light', themeColor: '#090b13', userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body>
    </html>
  )
}
