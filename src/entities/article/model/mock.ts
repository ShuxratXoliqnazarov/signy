import img1 from '@/shared/assets/images/article-1.webp'
import img2 from '@/shared/assets/images/article-2.webp'
import img3 from '@/shared/assets/images/article-3.webp'
import featured from '@/shared/assets/images/article-featured.webp'
import home1 from '@/shared/assets/images/home-article-1.webp'
import home2 from '@/shared/assets/images/home-article-2.webp'
import home3 from '@/shared/assets/images/home-article-3.webp'
import type { Article, ArticleCategory } from './types'

/** Категории для фильтра блога (UI-kit → TAB) */
export const ARTICLE_CATEGORIES: { value: 'all' | ArticleCategory; label: string }[] = [
  { value: 'all', label: 'Все' },
  { value: 'news', label: 'Новости' },
  { value: 'education', label: 'Обучение' },
  { value: 'laws', label: 'Законы' },
]

const EXCERPT = 'Не следует, однако забывать, что дальнейшее развитие различных форм деятельности'
const images = [img1, img2, img3]
const categories: ArticleCategory[] = ['news', 'education', 'laws']

/** Главная статья блога */
export const FEATURED_ARTICLE: Article = {
  id: 'featured',
  slug: 'burn-calories-quicker',
  title: 'Burn Calories Quicker in 30 Min.',
  excerpt: [
    'Идейные соображения высшего порядка, а также укрепление и развитие структуры играет важную роль в формировании существенных финансовых и административных условий.',
    'Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации форм развития.',
  ].join('\n'),
  category: 'news',
  tags: ['Про продукт', 'Теги', 'Много тегов'],
  date: '28.05.2020',
  image: featured,
}

/** 30 статей для сетки блога (9 на страницу) */
export const ARTICLES: Article[] = Array.from({ length: 30 }, (_, i) => ({
  id: String(i + 1),
  slug: `article-${i + 1}`,
  title: 'Burn Calories Quicker in 30 Min.',
  excerpt: EXCERPT,
  category: categories[i % 3],
  tags: ['Про продукт', 'Теги'],
  date: '05.03.2020',
  image: images[i % 3],
}))

/** Статьи для секции «Интересно пишем про» на главной (фото с голубой подложкой) */
export const HOME_ARTICLES: Article[] = [home1, home2, home3].map((image, i) => ({
  id: `home-${i + 1}`,
  slug: `article-${i + 1}`,
  title: 'Заголовок короткий в две строки',
  excerpt: EXCERPT,
  category: 'news',
  tags: [],
  date: '28.05.2020',
  image,
}))

export const getArticleBySlug = (slug?: string) =>
  [FEATURED_ARTICLE, ...ARTICLES].find((a) => a.slug === slug)
