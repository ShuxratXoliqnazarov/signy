import { zodResolver } from '@hookform/resolvers/zod'
import { useId, useState } from 'react'
import { useForm } from 'react-hook-form'
import { formatPhone, PHONE_PLACEHOLDER } from '@/shared/lib'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Modal } from '@/shared/ui/modal'
import { SuccessContent } from '@/shared/ui/success-modal'
import { orderDemoSchema, type OrderDemoFormValues } from '../model/schema'

type DemoModalProps = {
  open: boolean
  onClose: () => void
}

/** Поп-ап «Демо версия» (p-up_demo) → после отправки состояние «Готово» (p-up_demo_done). */
export const DemoModal = ({ open, onClose }: DemoModalProps) => {
  const id = useId()
  const [done, setDone] = useState(false)
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<OrderDemoFormValues>({ resolver: zodResolver(orderDemoSchema), mode: 'onTouched' })

  const close = () => {
    onClose()
    // сбрасываем после анимации закрытия, чтобы при следующем открытии была форма
    setTimeout(() => {
      setDone(false)
      reset()
    }, 200)
  }

  const onSubmit = async (values: OrderDemoFormValues) => {
    // TODO: отправка на бэкенд
    await new Promise((r) => setTimeout(r, 400))
    console.info('demo request', values)
    setDone(true)
  }

  return (
    <Modal open={open} onClose={close} title="Демо версия">
      {done ? (
        <SuccessContent text="Заявка отправленна и наши менеджеры свяжутся с тобой в ближайшее время" />
      ) : (
        <>
          <p className="mx-auto mt-3 max-w-72 text-base">
            Заполни форму и наши менеджеры свяжутся с тобой
          </p>
          <form noValidate onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4 text-left">
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
            <div className="pt-3 text-center">
              <Button
                type="submit"
                size="sm"
                disabled={isSubmitting}
                className="h-11 w-[217px] text-sm"
              >
                {isSubmitting ? 'Отправка…' : 'Отправить'}
              </Button>
            </div>
          </form>
        </>
      )}
    </Modal>
  )
}
