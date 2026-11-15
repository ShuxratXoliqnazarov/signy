import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { DemoModalContext } from '../model/context'
import { DemoModal } from './DemoModal'

export const DemoModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close])

  return (
    <DemoModalContext value={value}>
      {children}
      {isOpen && <DemoModal onClose={close} />}
    </DemoModalContext>
  )
}
