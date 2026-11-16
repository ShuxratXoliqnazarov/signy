import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { DemoModalProvider } from '@/features/order-demo'
import { ROUTES } from '@/shared/config'
import { AttentionNotice } from '@/widgets/attention-notice'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

/** Общий каркас всех страниц: шапка + контент + футер + поп-ап демо + уведомление. */
export const MainLayout = () => {
  const { pathname, hash } = useLocation()

  // при переходе — наверх, а для ссылок с якорем (/#tariffs) — к нужной секции
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }))
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <DemoModalProvider>
      <div className="flex min-h-screen flex-col">
        <Header transparent={pathname === ROUTES.HOME} />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <AttentionNotice />
      </div>
    </DemoModalProvider>
  )
}
