import { Link } from 'react-router'
import { useDemoModal } from '@/features/order-demo'
import { CONTACTS, ROUTES, TARIFFS_ANCHOR, toTelHref } from '@/shared/config'
import { Container } from '@/shared/ui/container'
import { ArrowUpIcon } from '@/shared/ui/icons'
import { Logo } from '@/shared/ui/logo'

const linkClass = 'text-sm font-medium transition-colors hover:text-primary'
const mutedClass = 'text-xs text-white/50 transition-colors hover:text-white'

const addressLines = CONTACTS.addressLines.map((line) => (
  <span key={line} className="block whitespace-nowrap">
    {line}
  </span>
))

/**
 * Футер (#061224). Десктоп — колонки: логотип / ссылки / ссылки / e-mail / адрес и телефоны.
 * Планшет и мобильная — столбцы + кнопка «наверх».
 */
export const Footer = () => {
  const { open: openDemo } = useDemoModal()
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const nav = {
    about: (
      <Link to={ROUTES.ABOUT} className={linkClass}>
        Про нас
      </Link>
    ),
    prices: (
      <Link to={TARIFFS_ANCHOR} className={linkClass}>
        Цены
      </Link>
    ),
    login: (
      <button type="button" className={`${linkClass} cursor-pointer text-left`}>
        Вход
      </button>
    ),
    register: (
      <button type="button" onClick={openDemo} className={`${linkClass} cursor-pointer text-left`}>
        Регистрация
      </button>
    ),
    blog: (
      <Link to={ROUTES.BLOG} className={linkClass}>
        Блог
      </Link>
    ),
    contacts: (
      <Link to={ROUTES.CONTACTS} className={linkClass}>
        Контакты
      </Link>
    ),
  }

  const legal = (
    <>
      <a href="#" className={mutedClass}>
        Договір оферти
      </a>
      <a href="#" className={mutedClass}>
        Безпека сервісу
      </a>
    </>
  )

  return (
    <footer className="bg-dark text-white">
      <Container className="py-8 md:py-12 xl:pt-16 xl:pb-12">
        <div className="flex flex-col gap-8 md:grid md:grid-cols-[auto_1fr_1.4fr_auto] md:gap-x-10 xl:grid-cols-[288px_474px_296px_1fr] xl:gap-x-0">
          {/* логотип + «наверх» (на мобильной в одну строку) */}
          <div className="flex items-start justify-between">
            <Link to={ROUTES.HOME} aria-label="Signy — на главную">
              <Logo className="h-[33px] text-white xl:h-10" />
            </Link>
            <button
              type="button"
              onClick={scrollTop}
              aria-label="Наверх"
              className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-white transition-colors hover:bg-white hover:text-dark md:hidden"
            >
              <ArrowUpIcon className="size-6" />
            </button>
          </div>

          {/* ссылки: мобильная — 2 колонки, планшет — столбец, десктоп — 2 колонки как в макете */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:hidden">
            {nav.about}
            {nav.login}
            {nav.prices}
            {nav.register}
            {nav.blog}
            <span />
            {nav.contacts}
          </div>
          <div className="hidden flex-col gap-4 md:flex xl:hidden">
            {nav.about}
            {nav.prices}
            {nav.login}
            {nav.register}
            {nav.blog}
            {nav.contacts}
          </div>
          <div className="hidden grid-cols-[148px_1fr] xl:grid">
            <div className="flex flex-col items-start gap-1.5">
              {nav.about}
              {nav.prices}
              <span className="h-8" />
              {nav.login}
              {nav.register}
            </div>
            <div className="flex flex-col items-start gap-1.5">
              {nav.blog}
              {nav.contacts}
            </div>
          </div>

          {/* e-mail и соцсети (на планшете — вместе с адресом) */}
          <div className="flex flex-col items-start gap-8 md:gap-3 xl:gap-1.5">
            <a href={`mailto:${CONTACTS.email}`} className={linkClass}>
              {CONTACTS.email}
            </a>
            <a
              href={CONTACTS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Facebook
            </a>
            <address className="mt-2 flex flex-col gap-2 text-sm text-white/85 not-italic xl:hidden">
              <span className="leading-6">{addressLines}</span>
              {CONTACTS.phones.map((p) => (
                <a key={p} href={toTelHref(p)} className="hover:text-white">
                  {p}
                </a>
              ))}
            </address>
          </div>

          {/* адрес и телефоны — десктоп */}
          <address className="hidden flex-col gap-1.5 text-sm text-white/85 not-italic xl:flex">
            <span className="leading-6">{addressLines}</span>
            {CONTACTS.phones.map((p) => (
              <a key={p} href={toTelHref(p)} className="leading-6 hover:text-white">
                {p}
              </a>
            ))}
          </address>

          <div className="hidden md:block xl:hidden">
            <button
              type="button"
              onClick={scrollTop}
              aria-label="Наверх"
              className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-white transition-colors hover:bg-white hover:text-dark"
            >
              <ArrowUpIcon className="size-6" />
            </button>
          </div>
        </div>

        {/* нижняя строка */}
        <div className="mt-6 flex flex-col gap-4 md:mt-10 md:flex-row md:gap-10 xl:mt-6 xl:grid xl:grid-cols-[288px_148px_1fr] xl:gap-0">
          <div className="grid grid-cols-2 gap-6 md:order-2 md:flex md:gap-10 xl:contents">
            {legal}
          </div>
          <p className="text-xs text-white/50 md:order-1 xl:order-first">© 2020 Signy</p>
        </div>
      </Container>
    </footer>
  )
}
