import economy from '@/shared/assets/images/adv-economy.png'
import global from '@/shared/assets/images/adv-global.png'
import instant from '@/shared/assets/images/adv-instant.png'
import { Container } from '@/shared/ui/container'

const ITEMS = [
  { icon: instant, title: 'Моментально', text: 'Никаких задержек.\n1 секунда на подписание' },
  { icon: global, title: 'Глобально', text: 'Сервис доступен 24\\7\nсо всех устройств' },
  { icon: economy, title: 'Экономно', text: 'В 30 раз дешевле чем\nпочта и курьеры' },
]

/** Преимущества под hero: 3 пункта (иконка + заголовок + текст). На мобильной — в столбец. */
export const Advantages = () => (
  <section className="bg-white py-10 md:py-9 xl:pt-[60px] xl:pb-[76px]">
    <Container>
      <ul className="mx-auto flex max-w-[1000px] flex-col gap-10 md:flex-row md:justify-between md:gap-4">
        {ITEMS.map((item) => (
          <li key={item.title} className="flex items-start gap-4 xl:gap-5">
            <img src={item.icon} alt="" className="size-12 shrink-0 md:size-12 xl:size-[72px]" />
            <div>
              <h3 className="text-lg font-medium md:text-base xl:text-2xl">{item.title}</h3>
              <p className="mt-1 text-sm whitespace-pre-line md:text-sm xl:mt-3 xl:text-base xl:tracking-[0.02em]">
                {item.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  </section>
)
