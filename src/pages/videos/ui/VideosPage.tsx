import { Breadcrumbs } from '@/shared/ui/breadcrumbs'
import { Container } from '@/shared/ui/container'
import { PageTitle } from '@/shared/ui/page-title'
import { ArticlesSection } from '@/widgets/articles-section'
import { SubscribeSection } from '@/widgets/subscribe-section'
import { VideosGrid } from '@/widgets/videos-grid'

/** Страница «Видеоинструкции». */
export const VideosPage = () => (
  <>
    <Container className="py-10">
      <Breadcrumbs items={[{ label: 'Видеоинструкции' }]} />
      <PageTitle>Видеоинструкции</PageTitle>
      <VideosGrid />
    </Container>
    <ArticlesSection />
    <SubscribeSection />
  </>
)
