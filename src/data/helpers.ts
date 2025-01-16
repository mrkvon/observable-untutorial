export const formatValue = (value: string): number => {
  if (!value) return NaN
  if (value.endsWith('k')) return Number(value.slice(0, -1)) * 1000
  else if (value.endsWith('M')) return Number(value.slice(0, -1)) * 1000 * 1000
  else if (value.endsWith('B'))
    return Number(value.slice(0, -1)) * 1000 * 1000 * 1000
  else return +value
}
