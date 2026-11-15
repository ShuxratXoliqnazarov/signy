import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Склейка tailwind-классов без конфликтов: cn('px-2', isActive && 'px-4') */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
