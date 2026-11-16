import { ArticleCardLarge, FEATURED_ARTICLE } from '@/entities/article'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs'
import { Container } from '@/shared/ui/container'
import { PageTitle } from '@/shared/ui/page-title'
import { BlogArticles } from '@/widgets/blog-articles'
import { SeoText } from '@/widgets/seo-text'
import { SubscribeSection } from '@/widgets/subscribe-section'

/** Страница «Блог» (фреймы blog / blog-1): главная статья, фильтр, сетка, подписка, SEO-текст. */
export const BlogPage = () => (
  <>
    <Container className="pt-1 pb-12 md:pb-14 xl:pb-[60px]">
      <Breadcrumbs items={[{ label: 'Блог' }]} />
      <PageTitle className="mb-5 md:mb-6">Интересно пишем про</PageTitle>
      <ArticleCardLarge article={FEATURED_ARTICLE} />
      <BlogArticles />
    </Container>
    <SubscribeSection />
    <Container>
      <SeoText />
    </Container>
  </>
)
