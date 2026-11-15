import { z } from 'zod'
import { emailSchema, phoneSchema, requiredString } from '@/shared/lib'

// Состав полей — уточнить по макету
export const orderDemoSchema = z.object({
  name: requiredString(),
  phone: phoneSchema,
  email: emailSchema,
  company: z.string().optional(),
})

export type OrderDemoFormValues = z.infer<typeof orderDemoSchema>
