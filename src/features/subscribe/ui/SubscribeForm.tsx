import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/shared/ui/button'
import { subscribeSchema, type SubscribeFormValues } from '../model/schema'

type SubscribeFormProps = {
  onSuccess: (email: string) => void
}

/** Поле e-mail + кнопка «Отправить» в одну строку (на мобильной — в столбец). */
export const SubscribeForm = ({ onSuccess }: SubscribeFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SubscribeFormValues>({ resolver: zodResolver(subscribeSchema) })

  const onSubmit = async ({ email }: SubscribeFormValues) => {
    // TODO: отправка на бэкенд
    await new Promise((r) => setTimeout(r, 400))
    onSuccess(email)
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto mt-6 flex max-w-[595px] flex-col items-center gap-6 md:mt-11 md:flex-row md:items-start md:gap-[18px]"
    >
      <div className="w-full md:flex-1">
        <input
          type="email"
          aria-label="Электронная почта"
          placeholder="ivan@mail.com"
          autoComplete="email"
          aria-invalid={!!errors.email}
          className={
            'h-[50px] w-full rounded-full border bg-white px-6 outline-none placeholder:text-gray/50 ' +
            (errors.email ? 'border-error' : 'border-primary focus:border-primary-dark')
          }
          {...register('email')}
        />
        {errors.email && <p className="mt-1 px-6 text-xs text-error">{errors.email.message}</p>}
      </div>
      <Button type="submit" disabled={isSubmitting} className="h-[50px] w-[178px] shrink-0">
        Отправить
      </Button>
    </form>
  )
}
