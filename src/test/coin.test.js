const axios = require('axios')
const find = () => axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=krw`).then(response => response.data)

jest.mock('axios')

test('이더리움 시세 목데이터 테스트', async () => {
  axios.get.mockResolvedValue({
    data: {
      ethereum: {
        krw: 1649095,
      },
    },
  })

  const user = await find()

  expect(user).toHaveProperty('ethereum')
  expect(axios.get).toBeCalledTimes(1)
  expect(axios.get).toBeCalledWith(`https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=krw`)
})
