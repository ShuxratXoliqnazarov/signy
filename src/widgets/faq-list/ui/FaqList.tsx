import { useState } from 'react'
import { FAQ_GROUPS } from '@/entities/faq'
import { cn } from '@/shared/lib'
import { Accordion } from '@/shared/ui/accordion'

/**
 * Вопросы по разделам: заголовок раздела с «+ / –» раскрывает список вопросов,
 * каждый вопрос — аккордеон. Первый раздел и второй вопрос открыты (как в макете).
 */
export const FaqList = () => {
  const [openGroups, setOpenGroups] = useState<string[]>([FAQ_GROUPS[0].id])
  const toggle = (id: string) =>
    setOpenGroups((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

  return (
    <div className="mt-8 max-w-[560px] space-y-7 md:mt-10 xl:mt-12">
      {FAQ_GROUPS.map((group, gi) => {
        const isOpen = openGroups.includes(group.id)
        return (
          <section key={group.id}>
            <h2>
              <button
                type="button"
                onClick={() => toggle(group.id)}
                aria-expanded={isOpen}
                className="group cursor-pointer text-left"
              >
                <span className="text-xl font-semibold transition-colors group-hover:text-primary md:text-2xl">
                  {group.title}
                </span>
                <span className="ml-2 text-xl font-medium text-primary md:text-2xl">
                  {isOpen ? '–' : '+'}
                </span>
                {!isOpen && (
                  <span className="mt-2 block text-base font-normal group-hover:underline md:text-lg">
                    Ответов на вопросы {group.total}
                  </span>
                )}
              </button>
            </h2>
            <div
              className={cn(
                'grid transition-[grid-template-rows] duration-300',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              )}
            >
              <div className="overflow-hidden">
                <Accordion
                  className="pt-6"
                  defaultOpen={gi === 0 ? [group.questions[1]?.id ?? ''] : []}
                  items={group.questions.map((q) => ({
                    id: q.id,
                    title: q.question,
                    content: q.answer,
                  }))}
                />
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
