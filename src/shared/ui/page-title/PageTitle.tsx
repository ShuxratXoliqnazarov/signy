import type { HTMLAttributes } from 'react'
import { cn } from '@/shared/lib'

/** Заголовок страницы (h1). Размеры — уточнить по макету. */
export const PageTitle = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <h1
    className={cn('mt-4 text-3xl font-bold text-dark md:text-4xl xl:text-5xl', className)}
    {...props}
  />
)
