import type { InputHTMLAttributes, Ref } from 'react'
import { cn } from '@/shared/lib'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
  ref?: Ref<HTMLInputElement>
}

/**
 * Поле ввода по UI-kit (Frame 28 → FORMS): высота 50px, «таблетка», рамка 1px #1064E5.
 * Ошибка — красная рамка + текст 10px #B70101 под полем.
 * TODO(UI-kit): состояния active / filled / inactive и иконки ✓ / ! справа.
 * Работает с react-hook-form: <Input {...register('email')} error={errors.email?.message} />
 */
export const Input = ({ label, error, className, id, ...props }: InputProps) => (
  <div className="w-full">
    {label && (
      <label htmlFor={id} className="mb-1 block text-sm">
        {label}
      </label>
    )}
    <input
      id={id}
      className={cn(
        'h-[50px] w-full rounded-full border border-primary bg-white px-6 outline-none placeholder:text-gray/60 disabled:border-primary/30',
        error && 'border-error',
        className,
      )}
      aria-invalid={!!error}
      {...props}
    />
    {error && <p className="mt-1 px-6 text-[10px] text-error">{error}</p>}
  </div>
)
