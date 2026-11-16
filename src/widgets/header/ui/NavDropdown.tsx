import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/shared/lib'
import { ChevronIcon } from '@/shared/ui/icons'

type NavDropdownProps = {
  label: ReactNode
  children: (close: () => void) => ReactNode
}

/**
 * Выпадающее подменю шапки (Frame 29 «Про нас», Frame 31 «телефоны»):
 * открывается по наведению и по клику, закрывается по клику вне и по Esc.
 */
export const NavDropdown = ({ label, children }: NavDropdownProps) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'flex cursor-pointer items-center gap-1 py-3 caps transition-colors hover:text-primary',
          open && 'text-primary',
        )}
      >
        {label}
        <ChevronIcon className={cn('w-3 transition-transform', open && 'rotate-180')} />
      </button>
      <div
        className={cn(
          'absolute top-full -left-6 z-40 min-w-[226px] bg-white py-1 shadow-[0_8px_24px_rgba(6,18,36,0.12)] transition-all',
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0',
        )}
      >
        {children(close)}
      </div>
    </div>
  )
}

/** Класс пункта выпадающего меню: высота 50px, hover — светло-голубой фон. */
export const dropdownItemClass =
  'caps block px-6 py-4 whitespace-nowrap transition-colors hover:bg-sky hover:text-primary'
