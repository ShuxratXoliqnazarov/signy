import { useEffect, useRef, useState } from 'react'
import { Container } from '@/shared/ui/container'

const TARGET = 5_820_125_114
const DURATION = 2000

const format = (n: number) => Math.round(n).toLocaleString('ru-RU').replace(/ /g, ' ')

/** Плавный счёт от 0 до target, когда блок появляется в зоне видимости (один раз). */
const useCountUp = (target: number) => {
  const ref = useRef<HTMLDivElement>(null)
  // без анимации (prefers-reduced-motion) — сразу итоговое число
  const [reduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [value, setValue] = useState(reduced ? target : 0)

  useEffect(() => {
    const el = ref.current
    if (!el || reduced) return
    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const p = Math.min((now - start) / DURATION, 1)
          setValue(target * (1 - Math.pow(1 - p, 3))) // ease-out
          if (p < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [target, reduced])

  return { ref, value }
}

/** Мятный счётчик «5 820 125 114 подписано документов» с анимацией. */
export const DocumentsCounter = () => {
  const { ref, value } = useCountUp(TARGET)

  return (
    <section className="bg-mint py-10 text-center md:py-12 xl:pt-[42px] xl:pb-[60px]">
      <Container ref={ref}>
        <p
          className="text-[34px] leading-none font-medium tabular-nums md:text-5xl xl:text-[72px]"
          aria-label={format(TARGET)}
        >
          {format(value)}
        </p>
        <p className="mt-2 font-serif text-xl font-medium md:text-[30px] xl:text-[40px]">
          подписано документов
        </p>
        <p className="mx-auto mt-3 max-w-[450px] text-sm md:text-base md:leading-7">
          Наша компания уже более 30 лет создает удобные решения для бизнеса любого размера. Мы
          гордимся Signy как безопасным и комфортным продуктом
        </p>
      </Container>
    </section>
  )
}
