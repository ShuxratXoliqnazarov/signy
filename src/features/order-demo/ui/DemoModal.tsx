import { useEffect } from 'react'

type DemoModalProps = {
  onClose: () => void
}

/**
 * Поп-ап «Заказать демо» + состояние «Готово» (p-up_demo_done).
 * TODO: сверстать по макету, форма на react-hook-form + orderDemoSchema,
 *       закрытие по крестику / Esc / клику по подложке.
 */
export const DemoModal = ({ onClose }: DemoModalProps) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark/60 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-card bg-sky p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 cursor-pointer text-2xl"
          onClick={onClose}
          aria-label="Закрыть"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-dark">Заказать демо</h2>
        <p className="mt-2 text-gray">DemoModal — заглушка</p>
      </div>
    </div>
  )
}
