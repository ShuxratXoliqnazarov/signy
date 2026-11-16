import { useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/shared/lib'
import { CloseIcon } from '../icons'

type ModalProps = {
  open: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  className?: string
}

/**
 * Поп-ап по макету (p-up_demo): светло-голубое окно поверх размытой затемнённой страницы.
 * Закрывается крестиком, по Esc и по клику на подложку. Пока открыт — страница не скроллится.
 */
export const Modal = ({ open, onClose, title, children, className }: ModalProps) => {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-dark/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          'relative w-full max-w-[551px] animate-[modal-in_0.2s_ease-out] rounded-card bg-sky px-6 pt-8 pb-10 text-center md:px-16',
          className,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute top-6 right-5 cursor-pointer text-primary transition-opacity hover:opacity-70 md:top-8 md:right-11"
        >
          <CloseIcon className="size-6 md:size-7" />
        </button>
        {title && <h2 className="font-serif text-2xl font-medium md:text-[32px]">{title}</h2>}
        {children}
      </div>
    </div>,
    document.body,
  )
}
