import { z } from 'zod'

/** Общие zod-правила для всех форм (демо, контакты, FAQ, подписка). */
export const emailSchema = z.email('Введите корректный e-mail')

// Код страны — уточнить (сейчас Узбекистан +998)
export const phoneSchema = z
  .string()
  .regex(/^\+998\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/, 'Введите номер в формате +998 XX XXX XX XX')

export const requiredString = (message = 'Обязательное поле') => z.string().trim().min(1, message)
