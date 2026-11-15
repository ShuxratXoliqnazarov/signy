import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/shared/lib'

type ButtonVariant = 'primary' | 'outline'
type ButtonSize = 'md' | 'lg'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
}

/**
 * Кнопка по UI-kit (Figma, Frame 28 → BUTTONS):
 * normal / hover / active / disabled. Капслок 14px, letter-spacing 19%, «таблетка».
 *  - primary («Регистрация»): синяя заливка → на hover становится с обводкой
 *  - outline («Вход»): синяя обводка → на hover заливается синим
 *  - active у обеих — dark_blue (#0046B0)
 */
const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:bg-white hover:text-primary active:border-primary-dark active:bg-primary-dark active:text-white disabled:border-primary/40 disabled:bg-primary/40 disabled:text-white',
  outline:
    'bg-white text-primary hover:bg-primary hover:text-white active:border-primary-dark active:bg-primary-dark active:text-white disabled:border-gray/40 disabled:bg-white disabled:text-gray/40',
}

// TODO(UI-kit): сверить точные размеры lg с hero («Попробовать бесплатно»)
const sizes: Record<ButtonSize, string> = {
  md: 'h-10 px-8',
  lg: 'h-12 px-10',
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth,
  className,
  type = 'button',
  ...props
}: ButtonProps) => (
  <button
    type={type}
    className={cn(
      'inline-flex cursor-pointer items-center justify-center rounded-full border border-primary caps transition-colors disabled:pointer-events-none',
      variants[variant],
      sizes[size],
      fullWidth && 'w-full',
      className,
    )}
    {...props}
  />
)
