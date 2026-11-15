import { ArticleCardLarge } from '@/entities/article'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs'
import { Container } from '@/shared/ui/container'
import { PageTitle } from '@/shared/ui/page-title'
import { BlogArticles } from '@/widgets/blog-articles'
import { SeoText } from '@/widgets/seo-text'
import { SubscribeSection } from '@/widgets/subscribe-section'

/** Страница «Блог». */
export const BlogPage = () => (
  <>
    <Container className="py-10">
      <Breadcrumbs items={[{ label: 'Блог' }]} />
      <PageTitle>Интересные статьи</PageTitle>
      <ArticleCardLarge />
      <BlogArticles />
    </Container>
    <SubscribeSection />
    <Container className="py-10">
      <SeoText />
    </Container>
  </>
)
