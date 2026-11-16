import type { Tariff } from './types'

/** «Пакеты цифровых подписей» — тексты как в макете */
export const TARIFFS: Tariff[] = [
  {
    id: 'demo',
    name: 'Demo',
    caption: '30 документів',
    price: 0,
    period: 'грн/місяць',
    buttonLabel: 'Зарегистрироваться',
  },
  {
    id: 'business',
    name: 'Business',
    caption: '1 000 документів',
    price: 1000,
    period: 'грн/рік',
    buttonLabel: 'Заказать',
  },
  {
    id: 'pro',
    name: 'Pro',
    caption: '10 000 документів',
    price: 9000,
    period: 'грн/рік',
    buttonLabel: 'Заказать',
  },
  {
    id: 'individual',
    name: 'Individual',
    caption: 'Необмежена кількість документів',
    price: null,
    period: '',
    buttonLabel: 'Связаться с нами',
  },
]
