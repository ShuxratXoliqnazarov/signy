import { z } from 'zod'
import { emailSchema, phoneSchema, requiredString } from '@/shared/lib'

/** Форма «Контакты» и «Нет ответа на интересующий вопрос?» (FAQ): сообщение необязательно */
export const contactSchema = z.object({
  name: requiredString('Введи имя'),
  email: emailSchema,
  phone: phoneSchema,
  message: z.string().trim().optional(),
})

export type ContactFormValues = z.infer<typeof contactSchema>
