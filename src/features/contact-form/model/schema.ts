import { z } from 'zod'
import { emailSchema, phoneSchema, requiredString } from '@/shared/lib'

export const contactSchema = z.object({
  name: requiredString(),
  phone: phoneSchema,
  email: emailSchema,
  message: requiredString(),
})

export type ContactFormValues = z.infer<typeof contactSchema>
