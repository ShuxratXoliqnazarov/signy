import type { HTMLAttributes } from 'react'
import { cn } from '@/shared/lib'
import { Container } from '../container'

type SectionBg = 'white' | 'sky' | 'mint'

type SectionProps = HTMLAttributes<HTMLElement> & {
  bg?: SectionBg
}

const bgs: Record<SectionBg, string> = {
  white: 'bg-white',
  sky: 'bg-sky',
  mint: 'bg-mint',
}

/** Цветная секция-подложка: <Section bg="mint">...</Section> */
export const Section = ({ bg = 'white', className, children, ...props }: SectionProps) => (
  <section className={cn('py-12 md:py-20', bgs[bg], className)} {...props}>
    <Container>{children}</Container>
  </section>
)
