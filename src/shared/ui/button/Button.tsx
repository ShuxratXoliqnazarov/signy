import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/shared/lib'

type ButtonVariant = 'primary' | 'outline'
type ButtonSize = 'md' | 'lg'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
}

// TODO(UI-kit): довести стили по макету (радиус, hover/active/disabled)
const variants: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-hover active:bg-primary-active',
  outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
}

const sizes: Record<ButtonSize, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-14 px-8 text-base',
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
      'inline-flex cursor-pointer items-center justify-center rounded-btn font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50',
      variants[variant],
      sizes[size],
      fullWidth && 'w-full',
      className,
    )}
    {...props}
  />
)
