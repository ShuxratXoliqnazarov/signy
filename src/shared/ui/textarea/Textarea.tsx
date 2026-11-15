import type { Ref, TextareaHTMLAttributes } from 'react'
import { cn } from '@/shared/lib'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
  error?: string
  ref?: Ref<HTMLTextAreaElement>
}

// TODO(UI-kit): сверить радиус и высоту с формами FAQ / Контакты
export const Textarea = ({ label, error, className, id, ...props }: TextareaProps) => (
  <div className="w-full">
    {label && (
      <label htmlFor={id} className="mb-1 block text-sm">
        {label}
      </label>
    )}
    <textarea
      id={id}
      className={cn(
        'min-h-32 w-full rounded-3xl border border-primary bg-white px-6 py-4 outline-none placeholder:text-gray/60',
        error && 'border-error',
        className,
      )}
      aria-invalid={!!error}
      {...props}
    />
    {error && <p className="mt-1 px-6 text-[10px] text-error">{error}</p>}
  </div>
)
