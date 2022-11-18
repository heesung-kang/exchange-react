export function decimal(number: number) {
  return ((number * 10000000000) / 10000000000).toFixed(10) //소숫점 10자리
}
