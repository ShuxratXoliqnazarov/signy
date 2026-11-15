import { Link, NavLink } from 'react-router'
import { useDemoModal } from '@/features/order-demo'
import { CONTACTS, NAV_ITEMS, ROUTES, toTelHref } from '@/shared/config'
import { cn } from '@/shared/lib'
import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'

/**
 * Шапка по макету (maine_sl_1): логотип Signy · телефон ▾ · ПРО НАС ▾ · ЦЕНЫ · КОНТАКТЫ ·
 * [ВХОД] (outline) · [РЕГИСТРАЦИЯ] (primary) · РУС ▾.
 * Выпадашки: телефоны — Frame 31, «Про нас» (Блог / Видео / Вопросы) — Frame 29.
 * На tablet/mobile — логотип + бургер → MobileMenu (iPad mini - 1..4, iPhone SE - 1..4).
 *
 * Сейчас — временная версия, чтобы ходить по страницам.
 * TODO: выпадающие меню, LanguageSwitcher, бургер + MobileMenu, точные отступы.
 */
export const Header = () => {
  const { open } = useDemoModal()

  return (
    <header className="bg-white">
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <Link to={ROUTES.HOME} className="font-serif text-2xl font-semibold text-primary">
          Signy
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <a href={toTelHref(CONTACTS.phones[0])} className="caps hover:text-primary">
            {CONTACTS.phones[0]}
          </a>
          {NAV_ITEMS.map((item) => (
            <div key={item.to} className="flex items-center gap-4">
              <NavLink
                to={item.to}
                end
                className={({ isActive }) =>
                  cn('caps hover:text-primary', isActive && 'text-primary')
                }
              >
                {item.label}
              </NavLink>
              {/* временно: подпункты в строку, потом — выпадающее меню */}
              {item.children?.map((child) => (
                <NavLink
                  key={child.to}
                  to={child.to}
                  className={({ isActive }) =>
                    cn('caps text-gray hover:text-primary', isActive && 'text-primary')
                  }
                >
                  {child.label}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:inline-flex">
            Вход
          </Button>
          <Button onClick={open}>Регистрация</Button>
        </div>
      </Container>
    </header>
  )
}
