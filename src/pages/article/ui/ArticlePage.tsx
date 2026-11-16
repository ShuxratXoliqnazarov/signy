import { useParams } from 'react-router'
import { getArticleBySlug } from '@/entities/article'
import { ShareArticle } from '@/features/share-article'
import { ROUTES } from '@/shared/config'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs'
import { Container } from '@/shared/ui/container'
import { PageTitle } from '@/shared/ui/page-title'
import { Tag } from '@/shared/ui/tag'
import { ArticleContent } from '@/widgets/article-content'
import { ArticleNavigation } from '@/widgets/article-navigation'
import { SubscribeSection } from '@/widgets/subscribe-section'

/** Страница «Статья блога» (/blog/:slug, фрейм blog_post). */
export const ArticlePage = () => {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)
  // В макете у статьи заголовок «Название статьи»; данные пока из моков
  const title = 'Название статьи'

  return (
    <>
      <Container className="pt-1 pb-12 md:pb-14">
        <Breadcrumbs items={[{ label: 'Блог', to: ROUTES.BLOG }, { label: title }]} />
        <PageTitle>{title}</PageTitle>
        <div className="mt-4 flex flex-wrap items-center gap-2.5 md:mt-5">
          <span className="mr-2 text-sm">{article?.date ?? '28.05.2020'}</span>
          {['Много тегов', 'Теги', 'Много тегов'].map((t, i) => (
            <Tag key={i}>{t}</Tag>
          ))}
        </div>
        <ArticleContent />
        <div className="mt-6 md:mt-10">
          <ShareArticle title={title} />
        </div>
        <ArticleNavigation slug={slug} />
      </Container>
      <SubscribeSection />
    </>
  )
}
