import { Breadcrumbs } from '@/shared/ui/breadcrumbs'
import { Container } from '@/shared/ui/container'
import { PageTitle } from '@/shared/ui/page-title'
import { AboutIntro, AboutOutro } from '@/widgets/about-content'
import { PartnersSlider } from '@/widgets/partners-slider'
import { SubscribeSection } from '@/widgets/subscribe-section'

/** Страница «Про нас» (фрейм about_us_p). */
export const AboutPage = () => (
  <>
    <Container className="pt-1 xl:pt-6">
      <Breadcrumbs items={[{ label: 'Про нас' }]} />
      <PageTitle>Страница про нас</PageTitle>
      <AboutIntro />
    </Container>
    <PartnersSlider />
    <Container className="pb-10 md:pb-12 xl:pb-6">
      <AboutOutro />
    </Container>
    <SubscribeSection />
  </>
)
