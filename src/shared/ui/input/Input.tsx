import type { InputHTMLAttributes, Ref } from 'react'
import { cn } from '@/shared/lib'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  ref?: Ref<HTMLInputElement>
}

// TODO(UI-kit): стили по макету. Работает с react-hook-form: <Input {...register('email')} />
export const Input = ({ error, className, ...props }: InputProps) => (
  <div className="w-full">
    <input
      className={cn(
        'h-12 w-full rounded-btn border border-border bg-white px-4 outline-none focus:border-primary',
        error && 'border-danger',
        className,
      )}
      aria-invalid={!!error}
      {...props}
    />
    {error && <p className="mt-1 text-xs text-danger">{error}</p>}
  </div>
)
