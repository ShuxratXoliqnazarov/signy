import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { DemoModalProvider } from '@/features/order-demo'
import { AttentionNotice } from '@/widgets/attention-notice'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

/** Общий каркас всех страниц: шапка + контент + футер. */
export const MainLayout = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <DemoModalProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <AttentionNotice />
      </div>
    </DemoModalProvider>
  )
}
