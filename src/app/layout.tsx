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
        alt: 'StitchoraLab - Hand-drawn dress designs',
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
    icon: '/logo.jpg',
    apple: '/logo.jpg',
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
