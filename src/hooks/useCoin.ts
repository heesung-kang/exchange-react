//코인시세 API
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { BtcType, EthType } from '@@types/coin'
import { getCoinPrice } from '@api/coinPrice'
import { coinPrice } from '@recoil/coin'
import { useRecoilState } from 'recoil'
const useCoinPrice = () => {
  const [btc, setBtc] = useState(0)
  const [eth, setEth] = useState(0)
  const [status, setStatus] = useRecoilState(coinPrice)
  const { refetch: btcRefetch, data: bitcoin } = useQuery<BtcType, Error>(['getPrice', 'bitcoin'], async coinName => await getCoinPrice(coinName), {
    suspense: false,
    enabled: true,
  })
  const { refetch: ethRefetch, data: ethereum } = useQuery<EthType, Error>(['getPrice', 'ethereum'], async coinName => await getCoinPrice(coinName), {
    suspense: false,
    enabled: true,
  })
  useEffect(() => {
    bitcoin ? setBtc(bitcoin.bitcoin.krw) : null
    ethereum ? setEth(ethereum.ethereum.krw) : null
  }, [bitcoin, ethereum])
  useEffect(() => {
    if (status) {
      btcRefetch()
      ethRefetch()
      setStatus(false)
    }
  }, [status])

  return { btc, eth }
}
export default useCoinPrice
