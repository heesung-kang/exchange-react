export function comma(init: number) {
  return String(init).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')
}

export function commaEssence(init: number) {
  const calc = String(init)
  const arr = calc.split('.') //정수, 소숫점이하 분리
  const first = String(arr[0]).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,') //정수에 콤마
  if (arr[1] === undefined) {
    return `${first}`
  } else {
    return `${first}.${arr[1]}`
  }
}
