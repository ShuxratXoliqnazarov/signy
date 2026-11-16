import type { ComponentProps } from 'react'
import { cn } from '@/shared/lib'

/**
 * Центрирующая обёртка контента.
 * Десктоп-фрейм 1440px, контент 1230px (отступы 105px) — сетка 12_desck.
 * Планшет 768 — отступы 42px (8_tablet), мобильный 320 — 20px (4_mob).
 */
export const Container = ({ className, ...props }: ComponentProps<'div'>) => (
  <div
    className={cn('mx-auto w-full max-w-[1270px] px-5 md:px-[42px] xl:px-5', className)}
    {...props}
  />
)
