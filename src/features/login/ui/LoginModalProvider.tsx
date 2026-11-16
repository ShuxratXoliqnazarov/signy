import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { LoginModalContext } from '../model/context'
import { LoginModal } from './LoginModal'

type LoginModalProviderProps = {
  children: ReactNode
  onRegister: () => void
}

/** Состояние поп-апа «Вход» для всего сайта (подключён в MainLayout). */
export const LoginModalProvider = ({ children, onRegister }: LoginModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const value = useMemo(() => ({ open, close }), [open, close])

  return (
    <LoginModalContext value={value}>
      {children}
      <LoginModal open={isOpen} onClose={close} onRegister={onRegister} />
    </LoginModalContext>
  )
}
