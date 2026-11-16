import type { HTMLAttributes } from 'react'
import { cn } from '@/shared/lib'
import { Container } from '../container'

export type SectionBg = 'white' | 'sky' | 'mint'

type SectionProps = HTMLAttributes<HTMLElement> & {
  bg?: SectionBg
  containerClassName?: string
}

/** Цветная секция-подложка: <Section bg="mint">...</Section> */
export const Section = ({
  bg = 'white',
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) => (
  <section
    className={cn(
      'py-10 md:py-14 xl:py-16',
      { white: 'bg-white', sky: 'bg-sky', mint: 'bg-mint' }[bg],
      className,
    )}
    {...props}
  >
    <Container className={containerClassName}>{children}</Container>
  </section>
)
