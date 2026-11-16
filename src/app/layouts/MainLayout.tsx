import { useEffect, type ReactNode } from 'react'
import { Outlet, useLocation } from 'react-router'
import { LoginModalProvider } from '@/features/login'
import { DemoModalProvider, useDemoModal } from '@/features/order-demo'
import { ROUTES } from '@/shared/config'
import { AttentionNotice } from '@/widgets/attention-notice'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

/** «Регистрация» внутри поп-апа «Вход» открывает поп-ап демо */
const LoginWithRegister = ({ children }: { children: ReactNode }) => {
  const { open } = useDemoModal()
  return <LoginModalProvider onRegister={open}>{children}</LoginModalProvider>
}

/** Общий каркас всех страниц: шапка + контент + футер + поп-апы «Демо» и «Вход» + уведомление. */
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
      <LoginWithRegister>
        <div className="flex min-h-screen flex-col">
          <Header transparent={pathname === ROUTES.HOME} />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
          <AttentionNotice />
        </div>
      </LoginWithRegister>
    </DemoModalProvider>
  )
}
