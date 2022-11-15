import axios from 'axios'
const find = () => axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=krw`).then(response => response.data)

jest.mock('axios')

test('이더리움 시세 목데이터 테스트', async () => {
  ;(axios.get as jest.Mock).mockResolvedValue({
    data: {
      ethereum: {
        krw: 1649095,
      },
    },
  })

  const user = await find()

  expect(user).toHaveProperty('ethereum', 1649095)
  expect(axios.get).toBeCalledTimes(1) //함수가 몇번 호출되었는지 검증
  expect(axios.get).toBeCalledWith(`https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=krw`) //함수가 설정한 인자로 호출 되었는지 검증
})
