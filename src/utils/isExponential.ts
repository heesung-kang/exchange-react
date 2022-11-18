export function isExponential(init: number) {
  const str = String(init)
  return str.includes('e')
}
