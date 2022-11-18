//코인시세 API
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { BtcType, EthType } from '@@types/coin'
import { getCoinPrice } from '@api/coinPrice'
import { getCoinPriceStatusAtom } from '@recoil/coin'
import { useRecoilState } from 'recoil'
import { useParams } from 'react-router-dom'
const useCoinPrice = (get: boolean) => {
  const params = useParams()
  const [btc, setBtc] = useState(0)
  const [eth, setEth] = useState(0)
  const [status, setStatus] = useRecoilState(getCoinPriceStatusAtom)
  const { refetch: btcRefetch, data: bitcoin } = useQuery<BtcType, Error>(
    ['getPrice', 'bitcoin', params.abbr],
    async coinName => await getCoinPrice(coinName),
    {
      suspense: false,
      enabled: get,
    },
  )
  const { refetch: ethRefetch, data: ethereum } = useQuery<EthType, Error>(
    ['getPrice', 'ethereum', params.abbr],
    async coinName => await getCoinPrice(coinName),
    {
      suspense: false,
      enabled: get,
    },
  )
  //구매시 코인 1개의 정보만 호출
  useEffect(() => {
    if (!get) {
      params.abbr === 'ETH' ? ethRefetch() : btcRefetch()
    }
  }, [get])
  useEffect(() => {
    bitcoin ? setBtc(bitcoin.bitcoin.krw) : null
    ethereum ? setEth(ethereum.ethereum.krw) : null
  }, [bitcoin, ethereum])
  useEffect(() => {
    if (status) {
      params.abbr === 'ETH' ? ethRefetch() : btcRefetch()
      setStatus(false)
    }
  }, [status])

  return { btc, eth }
}
export default useCoinPrice
