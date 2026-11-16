import { Link } from 'react-router'
import { ARTICLES } from '@/entities/article'
import { getArticleRoute } from '@/shared/config'
import { cn } from '@/shared/lib'

/** Навигация «Предыдущая статья / Следующая статья» с названиями по краям. */
export const ArticleNavigation = ({ slug }: { slug?: string }) => {
  const index = Math.max(
    ARTICLES.findIndex((a) => a.slug === slug),
    0,
  )
  const prev = ARTICLES[(index - 1 + ARTICLES.length) % ARTICLES.length]
  const next = ARTICLES[(index + 1) % ARTICLES.length]

  const item = (to: string, caption: string, right?: boolean) => (
    <Link to={to} className={cn('group block max-w-[240px]', right && 'ml-auto text-right')}>
      <span
        className={cn(
          'block font-serif text-lg leading-[24px] font-medium transition-colors group-hover:text-primary md:text-2xl',
          right && 'text-primary group-hover:text-primary-dark',
        )}
      >
        Название статьи в два рядка
      </span>
      <span className="mt-4 block text-sm font-medium md:mt-7">{caption}</span>
    </Link>
  )

  return (
    <nav
      aria-label="Другие статьи"
      className="mx-auto mt-10 grid max-w-[784px] grid-cols-2 gap-6 md:mt-12"
    >
      {item(getArticleRoute(prev.slug), 'Предыдущая статья')}
      {item(getArticleRoute(next.slug), 'Следующая статья', true)}
    </nav>
  )
}
