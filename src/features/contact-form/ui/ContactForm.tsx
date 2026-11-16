import { zodResolver } from '@hookform/resolvers/zod'
import { useId, useState } from 'react'
import { useForm } from 'react-hook-form'
import { cn, formatPhone, PHONE_PLACEHOLDER } from '@/shared/lib'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { SuccessModal } from '@/shared/ui/success-modal'
import { Textarea } from '@/shared/ui/textarea'
import { contactSchema, type ContactFormValues } from '../model/schema'

type ContactFormProps = {
  /** «Сообщение:» на странице контактов, «Твой вопрос:» в FAQ */
  messageLabel?: string
  /** center — форма по центру (FAQ), left — слева (Контакты) */
  align?: 'left' | 'center'
  className?: string
}

/**
 * Форма обратной связи (Контакты, FAQ): имя, e-mail, телефон с маской, сообщение.
 * Валидация zod, после отправки — поп-ап «Спасибо» (фрейм done).
 */
export const ContactForm = ({
  messageLabel = 'Сообщение:',
  align = 'left',
  className,
}: ContactFormProps) => {
  const id = useId()
  const [sent, setSent] = useState(false)
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema), mode: 'onTouched' })

  const onSubmit = async (values: ContactFormValues) => {
    // TODO: отправка на бэкенд
    await new Promise((r) => setTimeout(r, 400))
    console.info('contact form', values)
    reset()
    setSent(true)
  }

  return (
    <>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className={cn('w-full max-w-[420px] space-y-4', align === 'center' && 'mx-auto', className)}
      >
        <Input
          id={`${id}-name`}
          label="Имя*:"
          placeholder="Иван"
          autoComplete="name"
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          id={`${id}-email`}
          type="email"
          label="Электронная почта*:"
          placeholder="ivan@mail.com"
          autoComplete="email"
          error={errors.email?.message}
          {...register('email')}
        />
        <Input
          id={`${id}-phone`}
          type="tel"
          label="Телефон*:"
          placeholder={PHONE_PLACEHOLDER}
          autoComplete="tel"
          error={errors.phone?.message}
          {...register('phone', {
            onChange: (e) => setValue('phone', formatPhone(e.target.value)),
          })}
        />
        <Textarea
          id={`${id}-message`}
          label={messageLabel}
          placeholder="введите тут"
          error={errors.message?.message}
          {...register('message')}
        />
        <div className={cn('pt-2', align === 'center' && 'text-center')}>
          <Button
            type="submit"
            size="sm"
            disabled={isSubmitting}
            className="h-12 w-[217px] text-sm"
          >
            {isSubmitting ? 'Отправка…' : 'Отправить'}
          </Button>
        </div>
      </form>

      <SuccessModal
        open={sent}
        onClose={() => setSent(false)}
        title="Спасибо"
        text={'Твое сообщение отправленно!\nНаши менеджеры свяжутся с тобой в ближайшее время'}
      />
    </>
  )
}
