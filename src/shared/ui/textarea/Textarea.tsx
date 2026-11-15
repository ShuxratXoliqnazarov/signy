import type { Ref, TextareaHTMLAttributes } from 'react'
import { cn } from '@/shared/lib'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string
  ref?: Ref<HTMLTextAreaElement>
}

// TODO(UI-kit): стили по макету
export const Textarea = ({ error, className, ...props }: TextareaProps) => (
  <div className="w-full">
    <textarea
      className={cn(
        'min-h-32 w-full rounded-btn border border-border bg-white p-4 outline-none focus:border-primary',
        error && 'border-danger',
        className,
      )}
      aria-invalid={!!error}
      {...props}
    />
    {error && <p className="mt-1 text-xs text-danger">{error}</p>}
  </div>
)
