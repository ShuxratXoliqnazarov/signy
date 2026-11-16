/**
 * Маска телефона Украины по макету: "+38 066 123 45 67".
 * Использование: onChange={(e) => field.onChange(formatPhone(e.target.value))}
 */
export const formatPhone = (value: string) => {
  let digits = value.replace(/\D/g, '')
  if (digits.startsWith('38')) digits = digits.slice(2)
  digits = digits.slice(0, 10)
  if (!digits) return ''
  const parts = [digits.slice(0, 3), digits.slice(3, 6), digits.slice(6, 8), digits.slice(8, 10)]
  return ['+38', ...parts.filter(Boolean)].join(' ')
}

export const PHONE_PLACEHOLDER = '+38 000 000 00 00'
