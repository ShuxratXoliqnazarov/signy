import { z } from 'zod'
import { emailSchema } from '@/shared/lib'

export const subscribeSchema = z.object({
  email: emailSchema,
})

export type SubscribeFormValues = z.infer<typeof subscribeSchema>
