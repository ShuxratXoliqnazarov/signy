import type { InputHTMLAttributes, Ref } from 'react'
import { cn } from '@/shared/lib'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
  ref?: Ref<HTMLInputElement>
}

/**
 * Поле ввода по макету: высота 50px, «таблетка», рамка 1px.
 * Лейбл над полем с отступом 20px, ошибка — красная рамка + текст под полем.
 * Работает с react-hook-form: <Input {...register('email')} error={errors.email?.message} />
 */
export const Input = ({ label, error, className, id, ...props }: InputProps) => (
  <div className="w-full">
    {label && (
      <label htmlFor={id} className="mb-1.5 block px-5 text-base">
        {label}
      </label>
    )}
    <input
      id={id}
      className={cn(
        'h-[50px] w-full rounded-full border border-dark/90 bg-white px-5 text-base transition-colors outline-none placeholder:text-gray/60 focus:border-primary disabled:border-dark/30',
        error && 'border-error focus:border-error',
        className,
      )}
      aria-invalid={!!error}
      aria-describedby={error && id ? `${id}-error` : undefined}
      {...props}
    />
    {error && (
      <p id={id ? `${id}-error` : undefined} className="mt-1 px-5 text-xs text-error">
        {error}
      </p>
    )}
  </div>
)
