import { createContext, useContext } from 'react'

type LoginModalContextValue = {
  open: () => void
  close: () => void
}

export const LoginModalContext = createContext<LoginModalContextValue | null>(null)

/** Открыть поп-ап «Вход» из любого места: const { open } = useLoginModal() */
export const useLoginModal = () => {
  const ctx = useContext(LoginModalContext)
  if (!ctx) throw new Error('useLoginModal должен использоваться внутри <LoginModalProvider>')
  return ctx
}
