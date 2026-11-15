import { AskQuestionForm } from '@/features/ask-question'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs'
import { Container } from '@/shared/ui/container'
import { PageTitle } from '@/shared/ui/page-title'
import { Section } from '@/shared/ui/section'
import { FaqList } from '@/widgets/faq-list'

/** Страница «Вопросы и ответы». Без блока подписки. */
export const FaqPage = () => (
  <>
    <Container className="py-10">
      <Breadcrumbs items={[{ label: 'Вопросы и ответы' }]} />
      <PageTitle>Популярные вопросы и ответы на них</PageTitle>
      <FaqList />
    </Container>
    <Section bg="mint">
      <AskQuestionForm />
    </Section>
  </>
)
