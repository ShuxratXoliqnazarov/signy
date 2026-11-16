import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink } from 'react-router'
import { LanguageSwitcher } from '@/features/language-switcher'
import { CONTACTS, NAV_ITEMS, ROUTES, toTelHref } from '@/shared/config'
import { cn } from '@/shared/lib'
import { Button } from '@/shared/ui/button'
import { ChevronIcon, CloseIcon } from '@/shared/ui/icons'
import { Logo } from '@/shared/ui/logo'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
  onRegister: () => void
  onLogin: () => void
}

/**
 * Мобильное меню (фреймы iPad mini - 1, iPhone SE - 1):
 * на планшете — панель справа поверх затемнённой страницы, на телефоне — на весь экран.
 * Телефоны и «Про нас» раскрываются по тапу.
 */
export const MobileMenu = ({ open, onClose, onRegister, onLogin }: MobileMenuProps) => {
  const [phonesOpen, setPhonesOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const [mainPhone, ...otherPhones] = CONTACTS.phones

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  const linkClass = 'caps block py-3 transition-colors hover:text-primary'
  const divider = <hr className="my-5 border-primary/60" />

  return createPortal(
    <div
      className={cn('fixed inset-0 z-50 xl:hidden', !open && 'pointer-events-none')}
      aria-hidden={!open}
    >
      <div
        className={cn(
          'absolute inset-0 bg-dark/70 transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0',
        )}
        onClick={onClose}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Меню"
        className={cn(
          'absolute inset-y-0 right-0 flex w-full flex-col overflow-y-auto bg-white px-5 pt-5 pb-8 transition-transform duration-300 md:w-[452px] md:px-11 md:pt-8',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between">
          <Link to={ROUTES.HOME} onClick={onClose} aria-label="Signy — на главную">
            <Logo className="h-[30px] md:h-[33px]" />
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть меню"
            className="cursor-pointer text-primary"
          >
            <CloseIcon className="size-6" />
          </button>
        </div>
        {divider}

        <div>
          <button
            type="button"
            onClick={() => setPhonesOpen((v) => !v)}
            aria-expanded={phonesOpen}
            className="flex cursor-pointer items-center gap-2 py-2 caps"
          >
            {mainPhone}
            <ChevronIcon className={cn('w-3 transition-transform', phonesOpen && 'rotate-180')} />
          </button>
          {phonesOpen &&
            otherPhones.map((phone) => (
              <a key={phone} href={toTelHref(phone)} className="block py-2 caps hover:text-primary">
                {phone}
              </a>
            ))}
        </div>
        {divider}

        <div className="flex flex-col gap-4 md:flex-row md:gap-11">
          <Button variant="outline" fullWidth className="md:w-[110px]" onClick={onLogin}>
            Вход
          </Button>
          <Button fullWidth className="md:w-[189px]" onClick={onRegister}>
            Регистрация
          </Button>
        </div>
        {divider}

        <nav aria-label="Мобильное меню">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  type="button"
                  onClick={() => setExpanded((v) => (v === item.label ? null : item.label))}
                  aria-expanded={expanded === item.label}
                  className={cn(linkClass, 'flex cursor-pointer items-center gap-2')}
                >
                  {item.label}
                  <ChevronIcon
                    className={cn(
                      'w-3 transition-transform',
                      expanded === item.label && 'rotate-180',
                    )}
                  />
                </button>
                {expanded === item.label && (
                  <div className="mb-2 bg-sky/60 px-4">
                    {[{ label: item.label, to: item.to }, ...item.children].map((child) => (
                      <NavLink key={child.to} to={child.to} onClick={onClose} className={linkClass}>
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink key={item.label} to={item.to} onClick={onClose} className={linkClass}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
        {divider}

        <LanguageSwitcher inline />
      </aside>
    </div>,
    document.body,
  )
}
