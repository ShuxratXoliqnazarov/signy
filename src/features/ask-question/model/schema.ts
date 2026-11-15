import { z } from 'zod'
import { emailSchema, requiredString } from '@/shared/lib'

// Состав полей — уточнить по макету
export const askQuestionSchema = z.object({
  name: requiredString(),
  email: emailSchema,
  subject: requiredString(),
  message: requiredString(),
})

export type AskQuestionFormValues = z.infer<typeof askQuestionSchema>
