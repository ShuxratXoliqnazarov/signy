import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/shared/lib'
import { PlayIcon } from '../icons'

type PlayButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'md' | 'lg'
}

/** Круглая белая кнопка Play с синим треугольником (по центру превью видео). */
export const PlayButton = ({ size = 'lg', className, ...props }: PlayButtonProps) => (
  <button
    type="button"
    aria-label="Смотреть видео"
    className={cn(
      'absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-primary shadow-md transition-transform hover:scale-110',
      size === 'lg' ? 'size-16 md:size-[102px]' : 'size-14 md:size-[102px]',
      className,
    )}
    {...props}
  >
    <PlayIcon className={cn('ml-1', size === 'lg' ? 'w-5 md:w-7' : 'w-4 md:w-7')} />
  </button>
)
