import { cn } from '@/shared/lib'

export type ButtonVariant = 'primary' | 'outline' | 'outline-white'
export type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonStyleOptions = {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  className?: string
}

/**
 * Стили кнопки по UI-kit (Figma, Frame 28 → BUTTONS): normal / hover / active / disabled.
 *  - primary («Регистрация»): синяя заливка → на hover с обводкой
 *  - outline («Вход»): синяя обводка → на hover заливается синим
 *  - outline-white — белая обводка на тёмном фоне (страница 404)
 * Функцию можно применять к <Link>, чтобы ссылка выглядела как кнопка.
 */
export const buttonClass = ({
  variant = 'primary',
  size = 'md',
  fullWidth,
  className,
}: ButtonStyleOptions = {}) =>
  cn(
    'inline-flex cursor-pointer items-center justify-center rounded-full border font-medium uppercase transition-colors disabled:pointer-events-none select-none',
    {
      primary:
        'border-primary bg-primary text-white hover:bg-white hover:text-primary active:border-primary-dark active:bg-primary-dark active:text-white disabled:border-primary/50 disabled:bg-primary/50 disabled:text-white',
      outline:
        'border-primary bg-white text-primary hover:bg-primary hover:text-white active:border-primary-dark active:bg-primary-dark active:text-white disabled:border-gray/40 disabled:text-gray/40',
      'outline-white':
        'border-white bg-transparent text-white hover:bg-white hover:text-dark active:bg-white/80',
    }[variant],
    {
      sm: 'h-10 px-6 text-xs tracking-[0.05em]',
      md: 'h-10 px-8 text-sm tracking-[0.19em]',
      lg: 'h-14 px-8 text-base font-semibold tracking-[0.03em]',
    }[size],
    fullWidth && 'w-full',
    className,
  )
