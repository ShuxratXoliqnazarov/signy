import { createContext, useContext } from 'react'

type DemoModalContextValue = {
  isOpen: boolean
  open: () => void
  close: () => void
}

export const DemoModalContext = createContext<DemoModalContextValue | null>(null)

/**
 * Открыть поп-ап «Заказать демо» из любого места:
 *   const { open } = useDemoModal()
 *   <Button onClick={open}>Заказать демо</Button>
 */
export const useDemoModal = () => {
  const ctx = useContext(DemoModalContext)
  if (!ctx) throw new Error('useDemoModal должен использоваться внутри <DemoModalProvider>')
  return ctx
}
