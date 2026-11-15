import { z } from 'zod'

/** Общие zod-правила для всех форм (демо, контакты, FAQ, подписка). */
export const emailSchema = z.email('Введи корректный e-mail')

/**
 * Телефон Украины, маска как в макете: "+38 066 123 45 __" → +38 0XX XXX XX XX.
 * Текст ошибки — из UI-kit.
 */
export const phoneSchema = z
  .string()
  .regex(/^\+38\s?0\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/, 'Введи корректный номер телефона')

export const requiredString = (message = 'Обязательное поле') => z.string().trim().min(1, message)
