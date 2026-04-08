import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'
import { StoreProvider } from '@/store/StoreProvider'
import { siteConfig } from '@/config/site'

const _playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const _montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} | Hand-drawn dress designs`,
    template: `%s | ${siteConfig.fullName}`,
  },
  description: siteConfig.description,
  openGraph: {
    siteName: siteConfig.fullName,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'stitchorallab - Hand-drawn dress designs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.fullName} | Hand-drawn dress designs`,
    description: siteConfig.description,
    images: ['/logo.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_playfair.variable} ${_montserrat.variable}`}>
      <body className="font-montserrat antialiased">
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
