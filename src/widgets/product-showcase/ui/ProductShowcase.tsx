import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { useDemoModal } from '@/features/order-demo'
import screen1 from '@/shared/assets/images/product-screen-1.webp'
import screen2 from '@/shared/assets/images/product-screen-2.webp'
import { ROUTES } from '@/shared/config'
import { cn } from '@/shared/lib'
import { Button, buttonClass } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'

type BlockProps = {
  title: string
  items: string[]
  image: string
  reverse?: boolean
  action: ReactNode
}

/** Секция «текст + скриншот»; reverse — зеркально (скриншот слева). */
const ShowcaseBlock = ({ title, items, image, reverse, action }: BlockProps) => (
  <div
    className={cn(
      'grid items-center gap-8 md:grid-cols-[1fr_minmax(0,1fr)] md:gap-6 xl:gap-[50px]',
      reverse && 'md:grid-cols-[minmax(0,1fr)_1fr]',
    )}
  >
    <div className={cn(reverse && 'md:order-2 xl:pl-[85px]')}>
      <h2 className="font-serif text-2xl font-medium md:text-[34px] xl:text-[40px]">{title}</h2>
      <ul className="mt-4 space-y-3 md:mt-6 xl:mt-8 xl:space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm md:text-base xl:text-lg xl:leading-7">
            <span>-</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-center md:text-left xl:mt-6">{action}</div>
    </div>
    <img
      src={image}
      alt="Интерфейс Signy"
      loading="lazy"
      className={cn(
        'w-full shadow-[0_4px_24px_rgba(6,18,36,0.08)]',
        reverse ? 'md:order-1 md:-ml-[42px] xl:ml-0' : 'md:-mr-[42px] xl:mr-0',
      )}
    />
  </div>
)

/** Мятная секция «Комфорт в работе» + «Наш продукт это:» с чередованием сторон. */
export const ProductShowcase = () => {
  const { open } = useDemoModal()

  return (
    <section className="overflow-hidden bg-mint py-10 md:py-14 xl:py-16">
      <Container className="space-y-14 xl:space-y-[85px]">
        <ShowcaseBlock
          title="Комфорт в работе"
          image={screen1}
          items={[
            'Создавай документы по твоим личным привычным шаблонам. Это индивидуально!',
            'Настраивай порядок подписание документа, если вас несколько человек. Это ответственно!',
            'Загружай XML файл с собственным шаблоном готового документа. Это удобно!',
            'Работай в супер простом и понятном интерфейсе без сложностей. Это приятно!',
          ]}
          action={
            <Link
              to={ROUTES.ABOUT}
              className={buttonClass({
                variant: 'outline',
                size: 'lg',
                className: 'w-[217px] text-sm',
              })}
            >
              Узнать больше
            </Link>
          }
        />
        <ShowcaseBlock
          reverse
          title="Наш продукт это:"
          image={screen2}
          items={[
            'Web версия без установки программного обеспечения',
            'Возможность бесплатно и безлимитно обрабатывать входящие документы',
            'Простота интеграции с 1С и другими сервисами',
            'Поддержка входа через Mobile ID',
          ]}
          action={
            <Button size="lg" onClick={open} className="w-[217px] text-sm">
              Зарегистрироваться
            </Button>
          }
        />
      </Container>
    </section>
  )
}
