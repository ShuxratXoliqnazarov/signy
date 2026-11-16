import { useNavigate } from 'react-router'
import { TARIFFS, TariffCard, type Tariff } from '@/entities/tariff'
import { useDemoModal } from '@/features/order-demo'
import { ROUTES } from '@/shared/config'
import { Container } from '@/shared/ui/container'
import { SectionTitle } from '@/shared/ui/section-title'

/**
 * «Пакеты цифровых подписей»: 4 карточки (десктоп в ряд, планшет 2×2, мобильная столбцом).
 * id="tariffs" — на эту секцию ведёт пункт меню «Цены».
 */
export const TariffsSection = () => {
  const { open } = useDemoModal()
  const navigate = useNavigate()

  const onSelect = (tariff: Tariff) => {
    if (tariff.price === null) navigate(ROUTES.CONTACTS)
    else open()
  }

  return (
    <section id="tariffs" className="scroll-mt-4 bg-white py-10 md:py-14 xl:pt-[85px] xl:pb-[98px]">
      <Container>
        <SectionTitle className="mx-auto max-w-64 md:max-w-none">
          Пакеты цифровых подписей
        </SectionTitle>
        <div className="mx-auto mt-8 grid max-w-[280px] gap-5 md:mt-10 md:max-w-[478px] md:grid-cols-2 md:gap-[43px] xl:mt-16 xl:max-w-[1124px] xl:grid-cols-4 xl:gap-8">
          {TARIFFS.map((t) => (
            <TariffCard key={t.id} tariff={t} onSelect={onSelect} />
          ))}
        </div>
      </Container>
    </section>
  )
}
