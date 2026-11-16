import { Link } from 'react-router'
import { getArticleRoute } from '@/shared/config'
import { cn } from '@/shared/lib'
import { Tag } from '@/shared/ui/tag'
import type { Article } from '../model/types'

type ArticleCardProps = {
  article: Article
  /** compact — главная (дата + заголовок), full — блог (теги и анонс) */
  variant?: 'compact' | 'full'
}

/** Карточка статьи. Hover — лёгкое увеличение фото и синий заголовок. */
export const ArticleCard = ({ article, variant = 'full' }: ArticleCardProps) => (
  <article className="group">
    <Link to={getArticleRoute(article.slug)} className="block">
      <div className="overflow-hidden rounded-card">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className={cn(
            'w-full object-cover transition-transform duration-500 group-hover:scale-105',
            variant === 'compact' ? 'aspect-[374/395]' : 'aspect-square',
          )}
        />
      </div>
      <p className={cn('mt-6 text-sm', variant === 'compact' && 'md:px-3.5')}>{article.date}</p>
      <h3
        className={cn(
          'mt-1 font-medium transition-colors group-hover:text-primary',
          variant === 'compact' ? 'max-w-64 text-lg md:px-3.5 md:text-xl' : 'text-xl md:text-2xl',
        )}
      >
        {article.title}
      </h3>
    </Link>
    {variant === 'full' && (
      <>
        {article.tags.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-3.5">
            {article.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        )}
        <p className="mt-3 text-base md:text-lg md:leading-[22px]">{article.excerpt}</p>
      </>
    )}
  </article>
)
