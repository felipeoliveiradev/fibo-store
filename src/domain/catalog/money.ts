export function money(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function inkOn(accent: string) {
  return accent === '#ffffff' || accent === '#c8ff00' || accent === '#f4f4f4' ? '#000000' : '#ffffff'
}
