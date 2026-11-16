import { ARTICLES, ArticleCard, HOME_ARTICLES } from '@/entities/article'
import { cn } from '@/shared/lib'
import { Section } from '@/shared/ui/section'
import { SectionTitle } from '@/shared/ui/section-title'

type ArticlesSectionProps = {
  /** home — «Интересно пишем про» (мятная, компактные карточки); related — «Может быть интересно:» */
  variant?: 'home' | 'related'
}

/** Ряд из 3 карточек статей: десктоп 3 колонки, планшет 2, мобильная 1. */
export const ArticlesSection = ({ variant = 'home' }: ArticlesSectionProps) => {
  const isHome = variant === 'home'
  const articles = isHome ? HOME_ARTICLES : ARTICLES.slice(0, 3)

  return (
    <Section
      bg={isHome ? 'mint' : 'white'}
      className={cn(isHome ? 'xl:pt-11 xl:pb-12' : 'xl:pt-14 xl:pb-12')}
    >
      <SectionTitle>{isHome ? 'Интересно пишем про' : 'Может быть интересно:'}</SectionTitle>
      <div
        className={cn(
          'mx-auto mt-6 grid max-w-[374px] gap-8 md:max-w-none md:grid-cols-2 md:gap-[43px] xl:grid-cols-3',
          isHome ? 'md:mt-8 xl:mt-7 xl:gap-[54px]' : 'md:mt-10 xl:mt-11 xl:gap-x-[61px]',
        )}
      >
        {articles.map((a, i) => (
          <div key={a.id} className={cn(i === 2 && 'md:hidden xl:block')}>
            <ArticleCard article={a} variant={isHome ? 'compact' : 'full'} />
          </div>
        ))}
      </div>
    </Section>
  )
}
