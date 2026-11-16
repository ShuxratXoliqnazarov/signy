import type { HTMLAttributes } from 'react'
import { cn } from '@/shared/lib'

/**
 * Заголовок страницы (h1). Текстовые стили из Figma:
 * desktop_h1 — IBM Plex Serif 500, 40/42; tablet_h1 — 34/48; мобильный — 24.
 */
export const PageTitle = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <h1
    className={cn(
      'mt-3 font-serif text-2xl leading-tight font-medium md:mt-5 md:text-[34px] md:leading-[48px] xl:text-[40px] xl:leading-[42px]',
      className,
    )}
    {...props}
  />
)
