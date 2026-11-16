export type ArticleCategory = 'news' | 'education' | 'laws'

export type Article = {
  id: string
  slug: string
  title: string
  excerpt: string
  category: ArticleCategory
  tags: string[]
  date: string // в формате макета: 28.05.2020
  image: string
}
