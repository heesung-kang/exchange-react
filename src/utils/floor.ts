export function decimal(number: number) {
  return ((number * 10000000000000) / 10000000000000).toFixed(13) //소숫점 13자리
}
