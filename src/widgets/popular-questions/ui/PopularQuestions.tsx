import { POPULAR_QUESTIONS } from '@/entities/faq'
import { Accordion } from '@/shared/ui/accordion'
import { Section } from '@/shared/ui/section'
import { SectionTitle } from '@/shared/ui/section-title'

/** Голубая секция «Популярные вопросы и ответы на них» — аккордеон, второй вопрос открыт (как в макете). */
export const PopularQuestions = () => (
  <Section bg="sky" className="xl:pt-[30px] xl:pb-11">
    <SectionTitle className="mx-auto max-w-72 md:max-w-none">
      Популярные вопросы и ответы на них
    </SectionTitle>
    <Accordion
      className="mx-auto mt-6 max-w-[540px] md:mt-8 xl:mt-12"
      defaultOpen={[POPULAR_QUESTIONS[1].id]}
      items={POPULAR_QUESTIONS.map((q) => ({
        id: q.id,
        title: q.question,
        content: `- ${q.answer}`,
      }))}
    />
  </Section>
)
