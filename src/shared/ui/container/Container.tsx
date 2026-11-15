import type { HTMLAttributes } from 'react'
import { cn } from '@/shared/lib'

/** Центрирующая обёртка контента. Ширина контента — уточнить по макету. */
export const Container = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mx-auto w-full max-w-[1200px] px-4 md:px-8', className)} {...props} />
)
