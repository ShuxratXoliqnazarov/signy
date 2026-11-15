/**
 * Тариф. В макете («Пакеты цифровых подписей»): Demo, Business, Pro, Individual.
 * Пример: { name: 'Business', caption: '1 000 документов', price: 1000, period: 'грн/рік' }
 */
export type Tariff = {
  id: string
  name: string
  caption: string
  price: number | null // null — Individual («Необмежена кількість документів», без цены)
  period: string // как в макете: 'грн/місяць' | 'грн/рік'
  buttonLabel: string // «Зарегистрироваться» | «Заказать» | «Связаться с нами»
}
