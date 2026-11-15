/** Все пути сайта. Используйте только эти константы, не пишите строки руками. */
export const ROUTES = {
  HOME: '/',
  BLOG: '/blog',
  ARTICLE: '/blog/:slug',
  VIDEOS: '/videos',
  FAQ: '/faq',
  ABOUT: '/about',
  CONTACTS: '/contacts',
} as const

/** «Цены» в шапке ведут на секцию тарифов главной: <section id="tariffs"> */
export const TARIFFS_ANCHOR = '/#tariffs'

export const getArticleRoute = (slug: string) => `/blog/${slug}`
