import { zodResolver } from '@hookform/resolvers/zod'
import { useId, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Modal } from '@/shared/ui/modal'
import { loginSchema, type LoginFormValues } from '../model/schema'

type LoginModalProps = {
  open: boolean
  onClose: () => void
  /** «Нет аккаунта? Регистрация» — открывает поп-ап демо */
  onRegister: () => void
}

/**
 * Поп-ап «Вход» в стиле поп-апа «Демо версия» (в макете отдельного фрейма нет).
 * Бэкенда пока нет: после отправки показываем состояние «Вход выполнен».
 */
export const LoginModal = ({ open, onClose, onRegister }: LoginModalProps) => {
  const id = useId()
  const [done, setDone] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema), mode: 'onTouched' })

  const close = () => {
    onClose()
    setTimeout(() => {
      setDone(false)
      reset()
    }, 200)
  }

  const onSubmit = async ({ email }: LoginFormValues) => {
    // TODO: запрос авторизации на бэкенд
    await new Promise((r) => setTimeout(r, 400))
    console.info('login', email)
    setDone(true)
  }

  return (
    <Modal open={open} onClose={close} title={done ? 'Добро пожаловать!' : 'Вход'}>
      {done ? (
        <>
          <p className="mx-auto mt-3 max-w-80 text-base">
            Вход выполнен. Личный кабинет откроется, когда подключим бэкенд.
          </p>
          <Button size="sm" onClick={close} className="mt-8 h-11 w-[217px] text-sm">
            Понятно
          </Button>
        </>
      ) : (
        <>
          <p className="mx-auto mt-3 max-w-72 text-base">Войди в свой аккаунт Signy</p>
          <form noValidate onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4 text-left">
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
              id={`${id}-password`}
              type="password"
              label="Пароль*:"
              placeholder="••••••"
              autoComplete="current-password"
              error={errors.password?.message}
              {...register('password')}
            />
            <div className="pt-3 text-center">
              <Button
                type="submit"
                size="sm"
                disabled={isSubmitting}
                className="h-11 w-[217px] text-sm"
              >
                {isSubmitting ? 'Вход…' : 'Войти'}
              </Button>
            </div>
          </form>
          <p className="mt-6 text-sm">
            Нет аккаунта?{' '}
            <button
              type="button"
              onClick={() => {
                close()
                onRegister()
              }}
              className="cursor-pointer font-medium text-primary hover:underline"
            >
              Регистрация
            </button>
          </p>
        </>
      )}
    </Modal>
  )
}
