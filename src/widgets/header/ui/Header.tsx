import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { LanguageSwitcher } from '@/features/language-switcher'
import { useDemoModal } from '@/features/order-demo'
import { CONTACTS, NAV_ITEMS, ROUTES, toTelHref } from '@/shared/config'
import { cn } from '@/shared/lib'
import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'
import { BurgerIcon } from '@/shared/ui/icons'
import { Logo } from '@/shared/ui/logo'
import { MobileMenu } from './MobileMenu'
import { dropdownItemClass, NavDropdown } from './NavDropdown'

type HeaderProps = {
  /** На главной шапка прозрачная и лежит поверх hero */
  transparent?: boolean
}

/**
 * Шапка по макету: логотип · телефон ▾ · ПРО НАС ▾ · ЦЕНЫ · КОНТАКТЫ · [ВХОД] · [РЕГИСТРАЦИЯ] · РУС ▾.
 * Меньше 1280px — логотип и бургер, меню выезжает (MobileMenu).
 */
export const Header = ({ transparent = false }: HeaderProps) => {
  const { open: openDemo } = useDemoModal()
  const [menuOpen, setMenuOpen] = useState(false)
  const [mainPhone, ...otherPhones] = CONTACTS.phones

  return (
    <header
      className={cn(
        'z-30 w-full',
        transparent ? 'absolute inset-x-0 top-0 bg-transparent' : 'relative bg-white',
      )}
    >
      <Container className="flex h-[75px] items-center justify-between gap-6 md:h-[95px] xl:h-[118px]">
        <Link to={ROUTES.HOME} aria-label="Signy — на главную" className="shrink-0">
          <Logo className="h-[30px] md:h-[33px] xl:h-10" />
        </Link>

        <nav aria-label="Основное меню" className="hidden items-center gap-[35px] xl:flex">
          <NavDropdown label={mainPhone}>
            {(close) =>
              otherPhones.map((phone) => (
                <a
                  key={phone}
                  href={toTelHref(phone)}
                  onClick={close}
                  className={dropdownItemClass}
                >
                  {phone}
                </a>
              ))
            }
          </NavDropdown>

          {NAV_ITEMS.map((item) =>
            item.children ? (
              <NavDropdown key={item.label} label={item.label}>
                {(close) => (
                  <>
                    <Link to={item.to} onClick={close} className={dropdownItemClass}>
                      {item.label}
                    </Link>
                    {item.children?.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        onClick={close}
                        className={dropdownItemClass}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </>
                )}
              </NavDropdown>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'caps transition-colors hover:text-primary',
                    // ссылка-якорь «Цены» (/#tariffs) не должна подсвечиваться на главной
                    isActive && !item.to.includes('#') && 'text-primary',
                  )
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-6 xl:flex">
          <Button variant="outline" className="w-[110px] px-0">
            Вход
          </Button>
          <Button onClick={openDemo} className="w-[189px] px-0">
            Регистрация
          </Button>
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Открыть меню"
          aria-expanded={menuOpen}
          className="cursor-pointer text-primary xl:hidden"
        >
          <BurgerIcon className="size-7 md:size-9" />
        </button>
      </Container>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onRegister={() => {
          setMenuOpen(false)
          openDemo()
        }}
      />
    </header>
  )
}
