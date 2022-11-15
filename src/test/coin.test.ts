import type { AxiosResponse } from 'axios'
import axios from 'axios'
const fetchData = (coin: string, unit: string) => {
  return axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${unit}`).then((res: AxiosResponse) => {
    return res.data
  })
}
describe('Async/Await', () => {
  //외부 api 테스트
  test('비트코인 시세 가져오기', async () => {
    const coin = await fetchData('bitcoin', 'krw')
    expect(coin).toHaveProperty('bitcoin')
  })
  //spy 사용
  test('이더리움 시세 가져오기', async () => {
    const spyGet = jest.spyOn(axios, 'get')
    await fetchData('ethereum', 'krw')
    expect(spyGet).toBeCalledTimes(1)
    expect(spyGet).toBeCalledWith('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=krw')
  })
})
