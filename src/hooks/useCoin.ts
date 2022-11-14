//코인시세 API
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { BtcType, EthType } from '@@types/coin'
import { getCoinPrice } from '@api/coinPrice'

const useCoinPrice = () => {
  const [btc, setBtc] = useState(0)
  const [eth, setEth] = useState(0)
  const { data: bitcoin } = useQuery<BtcType, Error>(['getPrice', 'bitcoin'], async coinName => await getCoinPrice(coinName), {
    suspense: false,
    enabled: true,
  })
  const { data: ethereum } = useQuery<EthType, Error>(['getPrice', 'ethereum'], async coinName => await getCoinPrice(coinName), {
    suspense: false,
    enabled: true,
  })
  useEffect(() => {
    bitcoin ? setBtc(bitcoin.bitcoin.krw) : null
    ethereum ? setEth(ethereum.ethereum.krw) : null
  }, [bitcoin, ethereum])
  return { btc, eth }
}
export default useCoinPrice
