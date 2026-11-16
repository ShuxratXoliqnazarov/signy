import { useState } from 'react'
import { cn } from '@/shared/lib'
import { ChevronIcon } from '../icons'

export type TabOption = { value: string; label: string }

type TabsProps = {
  options: TabOption[]
  value: string
  onChange: (value: string) => void
  className?: string
}

/**
 * Вкладки-фильтр (UI-kit → TAB): капслок с разрядкой, активная — синяя с подчёркиванием.
 * На мобильной по макету (mobile_blog) — выпадающий список «ВСЕ ▾».
 */
export const Tabs = ({ options, value, onChange, className }: TabsProps) => {
  const [open, setOpen] = useState(false)
  const current = options.find((o) => o.value === value) ?? options[0]

  return (
    <div className={className}>
      <div role="tablist" className="hidden gap-[70px] md:flex">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            role="tab"
            aria-selected={o.value === value}
            onClick={() => onChange(o.value)}
            className={cn(
              'cursor-pointer border-b-2 pb-1 text-lg font-medium tracking-[0.19em] uppercase transition-colors hover:text-primary',
              o.value === value ? 'border-primary text-primary' : 'border-transparent',
            )}
          >
            {o.label}
          </button>
        ))}
      </div>

      <div className="relative md:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex cursor-pointer items-center gap-3 text-sm font-medium tracking-[0.19em] uppercase"
        >
          {current.label}
          <ChevronIcon className={cn('w-3 transition-transform', open && 'rotate-180')} />
        </button>
        {open && (
          <ul className="absolute top-full left-0 z-20 mt-2 min-w-48 bg-white py-1 shadow-lg">
            {options.map((o) => (
              <li key={o.value}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(o.value)
                    setOpen(false)
                  }}
                  className={cn(
                    'w-full cursor-pointer px-4 py-3 text-left text-sm font-medium tracking-[0.19em] uppercase hover:bg-sky',
                    o.value === value && 'text-primary',
                  )}
                >
                  {o.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
