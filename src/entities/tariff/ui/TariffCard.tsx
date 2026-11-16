import { Button } from '@/shared/ui/button'
import type { Tariff } from '../model/types'

type TariffCardProps = {
  tariff: Tariff
  onSelect: (tariff: Tariff) => void
}

const formatPrice = (n: number) => n.toLocaleString('ru-RU').replace(/ /g, ' ')

/**
 * Карточка тарифа: светло-голубая, 256×320 на десктопе (218 на планшете), кнопка прижата к низу.
 * На планшете цена мельче, как в макете tablet_maine_sl_1.
 */
export const TariffCard = ({ tariff, onSelect }: TariffCardProps) => (
  <article className="flex min-h-[290px] flex-col rounded-card bg-sky pt-10 pr-4 pb-8 pl-8 transition-shadow hover:shadow-lg md:pl-7 xl:min-h-[320px] xl:pl-8">
    <h3 className="text-2xl font-medium">{tariff.name}</h3>
    <p className="mt-10 text-sm font-medium xl:mt-12">{tariff.caption}</p>
    {tariff.price !== null && (
      <p className="mt-1 flex items-baseline gap-1.5 whitespace-nowrap">
        <span className="text-5xl leading-none font-semibold md:text-[40px] xl:text-5xl">
          {formatPrice(tariff.price)}
        </span>
        <span className="text-xl font-medium md:text-base xl:text-xl">{tariff.period}</span>
      </p>
    )}
    <Button
      size="sm"
      className="mt-auto w-full max-w-48 px-3 whitespace-nowrap md:max-w-[163px] xl:max-w-48"
      onClick={() => onSelect(tariff)}
    >
      {tariff.buttonLabel}
    </Button>
  </article>
)
