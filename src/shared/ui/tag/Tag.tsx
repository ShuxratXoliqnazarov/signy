import type { ReactNode } from 'react'

/** Тег статьи: серая «таблетка», капслок 12px. */
export const Tag = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex h-6 items-center rounded-full bg-[#e5e5e5] px-3.5 text-xs font-medium tracking-[0.05em] uppercase">
    {children}
  </span>
)
