import { useEffect, useRef, useState } from 'react'
import { LANGUAGES } from '@/shared/config'
import { cn } from '@/shared/lib'
import { ChevronIcon } from '@/shared/ui/icons'

type Lang = (typeof LANGUAGES)[number]['code']

const STORAGE_KEY = 'signy-lang'

const readLang = (): Lang => {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    return v === 'uk' ? 'uk' : 'ru'
  } catch {
    return 'ru'
  }
}

const useLang = () => {
  const [lang, setLang] = useState<Lang>(readLang)
  const change = (l: Lang) => {
    setLang(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* приватный режим — просто не запоминаем */
    }
  }
  return [lang, change] as const
}

/**
 * Переключатель языка «РУС ▾» (шапка) или «УКР РУС» в строку (мобильное меню).
 * Переводов пока нет — сохраняем выбор, чтобы потом подключить i18n.
 */
export const LanguageSwitcher = ({ inline = false }: { inline?: boolean }) => {
  const [lang, setLang] = useLang()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [open])

  if (inline) {
    return (
      <div className="flex gap-8">
        {LANGUAGES.map((l) => (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            className={cn(
              'cursor-pointer caps transition-colors hover:text-primary',
              l.code === lang ? 'text-dark' : 'text-dark/60',
            )}
          >
            {l.label}
          </button>
        ))}
      </div>
    )
  }

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[1]

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Язык сайта"
        className="flex cursor-pointer items-center gap-1 caps transition-colors hover:text-primary"
      >
        {current.label}
        <ChevronIcon className={cn('w-3 transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <ul className="absolute top-full right-0 z-40 mt-3 min-w-24 bg-white py-1 shadow-lg">
          {LANGUAGES.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                onClick={() => {
                  setLang(l.code)
                  setOpen(false)
                }}
                className={cn(
                  'w-full cursor-pointer px-5 py-3 text-left caps hover:bg-sky',
                  l.code === lang && 'text-primary',
                )}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
