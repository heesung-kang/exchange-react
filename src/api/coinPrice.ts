import { QueryFunctionContext } from 'react-query'
import axios from 'axios'
async function getCoinPrice(query: QueryFunctionContext<string | readonly unknown[]>) {
  if (query.queryKey[2] === 'INC') {
    return
  }
  try {
    const { data } = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
      params: {
        ids: query.queryKey[1],
        vs_currencies: 'krw',
      },
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

export { getCoinPrice }
