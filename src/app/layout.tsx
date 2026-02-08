import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'
import { StoreProvider } from '@/store/StoreProvider'

const _playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const _montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata: Metadata = {
  title: 'Atelier - Exquisite Dress Designs | Women & Girls Fashion',
  description: 'Discover hand-drawn, artisanal dress designs for women and girls. Each piece is a unique creation from our talented designers.',
  generator: 'v0.app',
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
    <html lang="en">
      <body className={`font-montserrat antialiased`}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
