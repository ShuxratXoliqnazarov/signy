import type { HTMLAttributes } from 'react'
import { cn } from '@/shared/lib'

/** Заголовок секции (h2): IBM Plex Serif 500, 40px на десктопе, по центру. */
export const SectionTitle = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <h2
    className={cn(
      'text-center font-serif text-2xl leading-tight font-medium md:text-[34px] xl:text-[40px]',
      className,
    )}
    {...props}
  />
)
