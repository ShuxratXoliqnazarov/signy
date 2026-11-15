export type Article = {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  date: string // ISO
  image: string
  readingTime?: number // минуты
}
