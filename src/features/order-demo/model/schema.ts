import { z } from 'zod'
import { emailSchema, phoneSchema, requiredString } from '@/shared/lib'

/** Поп-ап «Демо версия»: имя, e-mail, телефон — все обязательные */
export const orderDemoSchema = z.object({
  name: requiredString('Введи имя'),
  email: emailSchema,
  phone: phoneSchema,
})

export type OrderDemoFormValues = z.infer<typeof orderDemoSchema>
