import type { HTMLAttributes } from 'react'
import { cn } from '@/shared/lib'

/**
 * Центрирующая обёртка контента.
 * Десктоп-фрейм 1440px, контент с отступом 105px по бокам → ширина контента 1230px
 * (сетка 12_desck). На планшете — сетка 8_tablet, на мобильной — 4_mob.
 */
export const Container = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mx-auto w-full max-w-[1262px] px-4 md:px-8 xl:px-4', className)} {...props} />
)
