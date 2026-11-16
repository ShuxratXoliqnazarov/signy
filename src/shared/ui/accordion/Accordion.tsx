import { useState, type ReactNode } from 'react'
import { cn } from '@/shared/lib'

export type AccordionItemData = {
  id: string
  title: ReactNode
  content: ReactNode
}

type AccordionProps = {
  items: AccordionItemData[]
  /** id пунктов, открытых по умолчанию */
  defaultOpen?: string[]
  className?: string
}

/**
 * Аккордеон вопросов по макету: синий «+» у закрытого пункта, «–» у открытого,
 * открытый вопрос выделяется полужирным, ответ — под ним.
 */
export const Accordion = ({ items, defaultOpen = [], className }: AccordionProps) => {
  const [open, setOpen] = useState<string[]>(defaultOpen)
  const toggle = (id: string) =>
    setOpen((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

  return (
    <ul className={cn('space-y-4', className)}>
      {items.map((item) => {
        const isOpen = open.includes(item.id)
        return (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="group flex w-full cursor-pointer items-start gap-4 text-left"
            >
              <span className="w-3 shrink-0 text-xl leading-6 font-medium text-primary">
                {isOpen ? '–' : '+'}
              </span>
              <span
                className={cn(
                  'text-base transition-colors group-hover:text-primary md:text-lg',
                  isOpen && 'font-medium',
                )}
              >
                {item.title}
              </span>
            </button>
            <div
              className={cn(
                'grid transition-[grid-template-rows] duration-300',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              )}
            >
              <div className="overflow-hidden">
                <div className="pt-1 pl-7 text-base md:text-lg">{item.content}</div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
