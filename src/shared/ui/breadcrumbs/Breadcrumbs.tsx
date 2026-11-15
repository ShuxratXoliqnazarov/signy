import { Fragment } from 'react'
import { Link } from 'react-router'
import { ROUTES } from '@/shared/config'

export type BreadcrumbItem = {
  label: string
  to?: string
}

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
}

/** Хлебные крошки. "Главная" добавляется автоматически. */
export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const all: BreadcrumbItem[] = [{ label: 'Главная', to: ROUTES.HOME }, ...items]

  return (
    <nav aria-label="Хлебные крошки" className="text-sm text-muted">
      {all.map((item, i) => (
        <Fragment key={item.label}>
          {i > 0 && <span className="mx-2">/</span>}
          {item.to && i < all.length - 1 ? (
            <Link to={item.to} className="hover:text-primary">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
        </Fragment>
      ))}
    </nav>
  )
}
