import { ContactForm } from '@/features/contact-form'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs'
import { Container } from '@/shared/ui/container'
import { PageTitle } from '@/shared/ui/page-title'
import { Section } from '@/shared/ui/section'
import { SectionTitle } from '@/shared/ui/section-title'
import { FaqList } from '@/widgets/faq-list'

/** Страница «Вопросы и ответы» (фрейм FAQ). Без блока подписки. */
export const FaqPage = () => (
  <>
    <Container className="pt-1 pb-10 xl:pt-6 xl:pb-10">
      <Breadcrumbs items={[{ label: 'Популярные вопросы' }]} />
      <PageTitle>Популярные вопросы и ответы на них</PageTitle>
      <FaqList />
    </Container>
    <Section bg="mint" className="xl:pt-9 xl:pb-7">
      <SectionTitle>Нет ответа на интересующий вопрос?</SectionTitle>
      <p className="mt-2 text-center text-base md:text-lg">
        Заполни форму и наши менеджеры свяжутся с тобой
      </p>
      <ContactForm align="center" messageLabel="Твой вопрос:" className="mt-6 md:mt-8" />
    </Section>
  </>
)
