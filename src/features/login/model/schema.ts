import { z } from 'zod'
import { emailSchema } from '@/shared/lib'

/** Поп-ап «Вход»: e-mail и пароль (минимум 6 символов) */
export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(6, 'Пароль должен быть не короче 6 символов'),
})

export type LoginFormValues = z.infer<typeof loginSchema>
