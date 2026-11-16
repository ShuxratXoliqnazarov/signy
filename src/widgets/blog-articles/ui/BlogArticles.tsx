import { useMemo, useRef, useState } from 'react'
import { ARTICLE_CATEGORIES, ARTICLES, ArticleCard } from '@/entities/article'
import { Pagination } from '@/shared/ui/pagination'
import { Tabs } from '@/shared/ui/tabs'

const PER_PAGE = 9

/** Фильтр по категориям (вкладки / на мобильной — список) + сетка статей + пагинация. */
export const BlogArticles = () => {
  const [category, setCategory] = useState('all')
  const [page, setPage] = useState(1)
  const topRef = useRef<HTMLDivElement>(null)

  const filtered = useMemo(
    () => (category === 'all' ? ARTICLES : ARTICLES.filter((a) => a.category === category)),
    [category],
  )
  const total = Math.ceil(filtered.length / PER_PAGE)
  const items = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const changeCategory = (value: string) => {
    setCategory(value)
    setPage(1)
  }
  const changePage = (p: number) => {
    setPage(p)
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div ref={topRef} className="scroll-mt-6">
      <Tabs
        options={ARTICLE_CATEGORIES}
        value={category}
        onChange={changeCategory}
        className="mt-6 md:mt-10"
      />
      <div className="mt-6 grid gap-x-[43px] gap-y-10 md:mt-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-[61px] xl:gap-y-[64px]">
        {items.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </div>
      <Pagination page={page} total={total} onChange={changePage} className="mt-10 xl:mt-12" />
    </div>
  )
}
