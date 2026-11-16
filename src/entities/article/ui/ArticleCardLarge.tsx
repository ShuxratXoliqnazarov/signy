import { Link } from 'react-router'
import { getArticleRoute } from '@/shared/config'
import { Tag } from '@/shared/ui/tag'
import type { Article } from '../model/types'

/** Главная (крупная) статья блога: фото слева, справа дата, заголовок, теги, анонс и «ЧИТАТЬ». */
export const ArticleCardLarge = ({ article }: { article: Article }) => (
  <article className="grid gap-5 md:gap-8 lg:grid-cols-[731fr_457fr] lg:gap-[43px]">
    <Link to={getArticleRoute(article.slug)} className="block overflow-hidden rounded-card">
      <img
        src={article.image}
        alt={article.title}
        className="aspect-[731/421] w-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </Link>
    <div className="lg:pt-1">
      <p className="text-sm">{article.date}</p>
      <h2 className="mt-1 text-2xl leading-tight font-semibold md:text-[40px] md:leading-[42px]">
        <Link to={getArticleRoute(article.slug)} className="transition-colors hover:text-primary">
          {article.title}
        </Link>
      </h2>
      <div className="mt-4 flex flex-wrap gap-3.5">
        {article.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <p className="mt-4 text-base whitespace-pre-line md:text-lg md:leading-[26px]">
        {article.excerpt}
      </p>
      <Link
        to={getArticleRoute(article.slug)}
        className="mt-5 inline-block caps text-base transition-colors hover:text-primary"
      >
        Читать
      </Link>
    </div>
  </article>
)
