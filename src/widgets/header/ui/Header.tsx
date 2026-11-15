import { Link, NavLink } from 'react-router'
import { useDemoModal } from '@/features/order-demo'
import { NAV_ITEMS, ROUTES } from '@/shared/config'
import { cn } from '@/shared/lib'
import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'

/**
 * Шапка: логотип, навигация с подменю, «Войти», основная кнопка, язык; на tablet/mobile — бургер.
 * Сейчас — временная рабочая навигация, чтобы ходить по страницам.
 * TODO: сверстать по макету (подменю, LanguageSwitcher, бургер + MobileMenu).
 */
export const Header = () => {
  const { open } = useDemoModal()

  return (
    <header className="border-b border-border bg-white">
      <Container className="flex h-18 items-center justify-between gap-6">
        <Link to={ROUTES.HOME} className="text-xl font-bold text-primary">
          Signy
        </Link>

        <nav className="hidden gap-6 lg:flex">
          {NAV_ITEMS.flatMap((item) => item.children ?? [item]).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              className={({ isActive }) =>
                cn('text-sm font-medium hover:text-primary', isActive && 'text-primary')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Button onClick={open}>Заказать демо</Button>
      </Container>
    </header>
  )
}
