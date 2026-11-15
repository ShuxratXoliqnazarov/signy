import { Breadcrumbs } from '@/shared/ui/breadcrumbs'
import { Container } from '@/shared/ui/container'
import { PageTitle } from '@/shared/ui/page-title'
import { AboutContent } from '@/widgets/about-content'
import { PartnersSlider } from '@/widgets/partners-slider'
import { SubscribeSection } from '@/widgets/subscribe-section'

/** Страница «О нас». */
export const AboutPage = () => (
  <>
    <Container className="py-10">
      <Breadcrumbs items={[{ label: 'О нас' }]} />
      <PageTitle>О нашей компании</PageTitle>
      <AboutContent />
    </Container>
    <PartnersSlider />
    <SubscribeSection />
  </>
)
