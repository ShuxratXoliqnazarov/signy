import { useEffect, useState } from 'react'
import { Button } from '@/shared/ui/button'
import { CloseIcon } from '@/shared/ui/icons'

const STORAGE_KEY = 'signy-notice-accepted'

const wasAccepted = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

/**
 * Уведомление «Внимание!» (cookie). В макете отдельного фрейма нет — сделано в стиле сайта:
 * белая плашка внизу экрана, показывается при первом визите, после «Понятно» больше не появляется.
 */
export const AttentionNotice = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(!wasAccepted()), 1200)
    return () => clearTimeout(t)
  }, [])

  const accept = () => {
    setVisible(false)
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* приватный режим */
    }
  }

  if (!visible) return null

  return (
    <div
      role="status"
      className="fixed inset-x-4 bottom-4 z-40 animate-[modal-in_0.3s_ease-out] rounded-card bg-white p-5 pr-12 shadow-[0_8px_32px_rgba(6,18,36,0.18)] md:right-auto md:left-8 md:max-w-[380px]"
    >
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Закрыть"
        className="absolute top-4 right-4 cursor-pointer text-primary"
      >
        <CloseIcon className="size-5" />
      </button>
      <p className="font-serif text-xl font-medium">Внимание!</p>
      <p className="mt-2 text-sm">
        Мы используем cookie, чтобы сайт работал удобнее. Продолжая пользоваться сайтом, вы
        соглашаетесь с этим.
      </p>
      <Button size="sm" onClick={accept} className="mt-4">
        Понятно
      </Button>
    </div>
  )
}
