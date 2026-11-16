import { cn } from '@/shared/lib'

type PaginationProps = {
  page: number
  total: number
  onChange: (page: number) => void
  className?: string
}

const pad = (n: number) => String(n).padStart(2, '0')

/** Пагинация по UI-kit: «НАЗАД 01 02 03 04 ДАЛЬШЕ», текущая страница синяя. На мобильной — стрелки. */
export const Pagination = ({ page, total, onChange, className }: PaginationProps) => {
  if (total <= 1) return null
  const item =
    'cursor-pointer px-2 py-1 text-base font-medium tracking-[0.15em] transition-colors hover:text-primary'

  return (
    <nav
      aria-label="Страницы"
      className={cn('flex items-center justify-center gap-4 md:gap-6', className)}
    >
      {page > 1 && (
        <button type="button" className={cn(item, 'uppercase')} onClick={() => onChange(page - 1)}>
          <span className="hidden md:inline">Назад</span>
          <span className="md:hidden">&lt;</span>
        </button>
      )}
      {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          aria-current={n === page ? 'page' : undefined}
          className={cn(item, n === page && 'text-primary')}
          onClick={() => onChange(n)}
        >
          {pad(n)}
        </button>
      ))}
      {page < total && (
        <button type="button" className={cn(item, 'uppercase')} onClick={() => onChange(page + 1)}>
          <span className="hidden md:inline">Дальше</span>
          <span className="md:hidden">&gt;</span>
        </button>
      )}
    </nav>
  )
}
