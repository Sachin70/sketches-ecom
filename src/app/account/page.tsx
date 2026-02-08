'use client'

import { Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AccountContent from '@/components/account/AccountContent'

export const dynamic = 'force-dynamic'

export default function AccountPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        }>
          <AccountContent />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
