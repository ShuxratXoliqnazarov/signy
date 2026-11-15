import { ROUTES } from './routes'

export type NavItem = {
  label: string
  to: string
  children?: NavItem[]
}

/** Навигация шапки / мобильного меню / футера. Состав и порядок — уточнить по макету. */
export const NAV_ITEMS: NavItem[] = [
  { label: 'Главная', to: ROUTES.HOME },
  {
    label: 'Помощь',
    to: ROUTES.FAQ,
    children: [
      { label: 'Вопросы и ответы', to: ROUTES.FAQ },
      { label: 'Видеоинструкции', to: ROUTES.VIDEOS },
    ],
  },
  { label: 'Блог', to: ROUTES.BLOG },
  { label: 'О нас', to: ROUTES.ABOUT },
  { label: 'Контакты', to: ROUTES.CONTACTS },
]

/** Контакты компании — уточнить по макету. */
export const CONTACTS = {
  phone: '+998 00 000 00 00',
  email: 'info@signy.uz',
  address: 'г. Ташкент, ул. Примерная, 1',
} as const
