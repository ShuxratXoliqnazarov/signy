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

/** Хлебные крошки по макету: «Signy / Блог / Название статьи», 12px, серые. «Signy» добавляется сам. */
export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const all: BreadcrumbItem[] = [{ label: 'Signy', to: ROUTES.HOME }, ...items]

  return (
    <nav aria-label="Хлебные крошки" className="text-xs text-dark/80">
      {all.map((item, i) => (
        <Fragment key={item.label}>
          {i > 0 && <span className="mx-1.5">/</span>}
          {item.to && i < all.length - 1 ? (
            <Link to={item.to} className="transition-colors hover:text-primary">
              {item.label}
            </Link>
          ) : (
            <span aria-current={i === all.length - 1 ? 'page' : undefined}>{item.label}</span>
          )}
        </Fragment>
      ))}
    </nav>
  )
}
