import { Breadcrumbs } from '@/shared/ui/breadcrumbs'
import { Container } from '@/shared/ui/container'
import { PageTitle } from '@/shared/ui/page-title'
import { ArticlesSection } from '@/widgets/articles-section'
import { SubscribeSection } from '@/widgets/subscribe-section'
import { VideosGrid } from '@/widgets/videos-grid'

/** Страница «Видео инструкции» (фрейм video). */
export const VideosPage = () => (
  <>
    <Container className="pt-1 xl:pt-6">
      <Breadcrumbs items={[{ label: 'Видео инструкции' }]} />
      <PageTitle>Видео инструкции</PageTitle>
      <VideosGrid />
    </Container>
    <ArticlesSection variant="related" />
    <SubscribeSection />
  </>
)
