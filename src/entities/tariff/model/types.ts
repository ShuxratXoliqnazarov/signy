export type Tariff = {
  id: string
  name: string
  caption: string
  price: number | null // null — индивидуальный тариф
  currency: string // "сум" — уточнить
}
