import { Advantages } from '@/widgets/advantages'
import { ArticlesSection } from '@/widgets/articles-section'
import { DocumentsCounter } from '@/widgets/documents-counter'
import { HeroSlider } from '@/widgets/hero-slider'
import { PartnersSlider } from '@/widgets/partners-slider'
import { PopularQuestions } from '@/widgets/popular-questions'
import { ProductShowcase } from '@/widgets/product-showcase'
import { SubscribeSection } from '@/widgets/subscribe-section'
import { TariffsSection } from '@/widgets/tariffs-section'
import { VideoSection } from '@/widgets/video-section'

/** Страница «Главная» — собирается из виджетов в порядке макета. */
export const HomePage = () => (
  <>
    <HeroSlider />
    <Advantages />
    <ProductShowcase />
    <TariffsSection />
    <DocumentsCounter />
    <PartnersSlider />
    <ArticlesSection />
    <VideoSection />
    <PopularQuestions />
    <SubscribeSection />
  </>
)
