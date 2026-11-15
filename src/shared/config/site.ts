import { ROUTES, TARIFFS_ANCHOR } from './routes'

export type NavItem = {
  label: string
  to: string
  children?: NavItem[]
}

/**
 * Навигация шапки — по макету (maine_sl_1, Frame 29, iPad mini - 1):
 * «Про нас ▾» (подменю: Блог, Видео, Вопросы), «Цены», «Контакты».
 */
export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Про нас',
    to: ROUTES.ABOUT,
    children: [
      { label: 'Блог', to: ROUTES.BLOG },
      { label: 'Видео', to: ROUTES.VIDEOS },
      { label: 'Вопросы', to: ROUTES.FAQ },
    ],
  },
  { label: 'Цены', to: TARIFFS_ANCHOR },
  { label: 'Контакты', to: ROUTES.CONTACTS },
]

/** Ссылки футера — по макету. */
export const FOOTER_LINKS: NavItem[][] = [
  [
    { label: 'Про нас', to: ROUTES.ABOUT },
    { label: 'Цены', to: TARIFFS_ANCHOR },
  ],
  [
    { label: 'Блог', to: ROUTES.BLOG },
    { label: 'Контакты', to: ROUTES.CONTACTS },
  ],
]

/** Контакты компании — из футера и выпадающего списка телефонов (Frame 31). */
export const CONTACTS = {
  /** Первый — основной, показывается в шапке; остальные — в выпадающем списке */
  phones: ['0 800 750 643', '+380 44 334 56 43', '+380 44 338 86 43'],
  email: 'infosmartsign@smarttender.biz',
  address: 'пр-т Миколи Бажана, 14 А, Київ, 02072',
  facebook: 'https://facebook.com', // точная ссылка в макете не указана
} as const

/** Языки переключателя: УКР / РУС (по умолчанию РУС). */
export const LANGUAGES = [
  { code: 'uk', label: 'УКР' },
  { code: 'ru', label: 'РУС' },
] as const

/** Ссылка tel: из номера в любом формате */
export const toTelHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`
