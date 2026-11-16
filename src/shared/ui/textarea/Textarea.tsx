import type { Ref, TextareaHTMLAttributes } from 'react'
import { cn } from '@/shared/lib'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
  error?: string
  ref?: Ref<HTMLTextAreaElement>
}

/** Многострочное поле по макету (формы FAQ и «Контакты»): высота 138px, скругление 6px. */
export const Textarea = ({ label, error, className, id, ...props }: TextareaProps) => (
  <div className="w-full">
    {label && (
      <label htmlFor={id} className="mb-1.5 block px-5 text-base">
        {label}
      </label>
    )}
    <textarea
      id={id}
      className={cn(
        'h-[138px] w-full resize-none rounded-md border border-dark/90 bg-white px-5 py-4 text-base transition-colors outline-none placeholder:text-gray/60 focus:border-primary',
        error && 'border-error focus:border-error',
        className,
      )}
      aria-invalid={!!error}
      {...props}
    />
    {error && <p className="mt-1 px-5 text-xs text-error">{error}</p>}
  </div>
)
