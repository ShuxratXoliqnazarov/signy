import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useDemoModal } from '@/features/order-demo'
import hero1 from '@/shared/assets/images/hero-1.jpg'
import hero2 from '@/shared/assets/images/hero-2.jpg'
import hero3 from '@/shared/assets/images/hero-3.jpg'
import { cn } from '@/shared/lib'
import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'

const SLIDES = [
  {
    image: hero1,
    title: 'Быстрая регистрация',
    text: 'Мы создали, возможно, самую простую регистрацию. Регистрируйся, получай полный доступ к сервису и 1000 подписей документов в подарок!',
    button: true,
  },
  {
    image: hero2,
    title: 'Загрузи документ',
    text: 'Загружай в систему любой документ которые надо подписать, договор, акт выполненных работ, да что угодно',
    button: true,
  },
  {
    image: hero3,
    title: 'Подпиши и отправь',
    text: 'Подписывай своей электронно-цифровой подписью и за долю секунды отправь партнеру или компании. Он подписывает в ответ и все! Готово!',
    button: false,
  },
]

/** Шаги «1 — 2 — 3»: текущий шаг крупнее и тёмный */
const Steps = ({ active }: { active: number }) => (
  <div className="mt-4 flex items-center gap-4 md:mt-6">
    {[1, 2, 3].map((n) => (
      <span key={n} className="flex items-center gap-4">
        {n > 1 && <span className="h-px w-[18px] bg-primary" />}
        <span className={cn(n === active ? 'text-xl font-medium' : 'text-base text-dark/60')}>
          {n}
        </span>
      </span>
    ))}
  </div>
)

/**
 * Hero-слайдер главной (maine_sl_1..3): 3 слайда, точки, свайп, автопрокрутка.
 * Фото с человеком — фоном справа, шапка лежит поверх (прозрачная).
 */
export const HeroSlider = () => {
  const { open } = useDemoModal()

  return (
    <section className="relative bg-sky" aria-label="О сервисе">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop
        autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true, el: '.hero-dots' }}
        className="h-[580px] md:h-[640px] xl:h-[676px]"
      >
        {SLIDES.map((slide, i) => (
          <SwiperSlide key={slide.title} className="relative overflow-hidden">
            <img
              src={slide.image}
              alt=""
              className="absolute top-0 right-[-150px] h-[430px] max-w-none md:right-[-110px] md:h-[600px] xl:right-0 xl:h-[730px]"
            />
            <Container className="relative flex h-full flex-col pt-[100px] md:pt-[120px] xl:pt-[190px]">
              <div className="max-w-[225px] md:max-w-[320px] xl:max-w-[590px]">
                <p className="max-w-56 font-serif text-[26px] leading-[1.15] font-medium md:max-w-none md:text-[34px] md:leading-[38px] xl:text-[40px] xl:leading-[45px]">
                  Цифровой документооборот в три этапа:
                </p>
                <Steps active={i + 1} />
                <h2 className="mt-4 text-lg font-medium md:mt-3 md:text-xl xl:text-2xl">
                  {slide.title}
                </h2>
                <p className="mt-3 text-sm md:text-base xl:mt-6 xl:max-w-[450px] xl:tracking-[0.02em]">
                  {slide.text}
                </p>
                {slide.button && (
                  <Button
                    size="lg"
                    onClick={open}
                    className="mt-8 w-[min(295px,calc(100vw-40px))] px-4 text-sm whitespace-nowrap md:w-auto md:px-8 md:text-base xl:mt-8"
                  >
                    Попробовать бесплатно
                  </Button>
                )}
              </div>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hero-dots signy-dots absolute! bottom-6 left-0 z-10 w-full xl:bottom-[30px]" />
    </section>
  )
}
