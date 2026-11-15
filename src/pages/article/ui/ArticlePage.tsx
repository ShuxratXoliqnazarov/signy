import { useParams } from 'react-router'
import { ShareArticle } from '@/features/share-article'
import { ROUTES } from '@/shared/config'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs'
import { Container } from '@/shared/ui/container'
import { PageTitle } from '@/shared/ui/page-title'
import { ArticleContent } from '@/widgets/article-content'
import { ArticleNavigation } from '@/widgets/article-navigation'
import { SubscribeSection } from '@/widgets/subscribe-section'

/** Страница «Статья блога» (/blog/:slug). */
export const ArticlePage = () => {
  const { slug } = useParams()

  return (
    <>
      <Container className="py-10">
        <Breadcrumbs items={[{ label: 'Блог', to: ROUTES.BLOG }, { label: 'Статья' }]} />
        <PageTitle>Статья блога</PageTitle>
        <p className="mt-2 text-sm text-gray">slug: {slug} · дата · категория · время чтения</p>
        <ArticleContent />
        <ShareArticle />
        <ArticleNavigation />
      </Container>
      <SubscribeSection />
    </>
  )
}
