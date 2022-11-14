export function floor(number: number) {
  return (Math.floor(number * 10000000000) / 10000000000).toFixed(10) //소숫점 10자리
}
