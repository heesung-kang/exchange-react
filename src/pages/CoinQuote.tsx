import React, { FunctionComponent, useEffect, useState } from 'react'
import styles from '@styles/coinQuote.module.scss'
import CoinList from '@components/coin/CoinList'
import { useQuery } from 'react-query'
import { getCoinPrice } from '@api/coinPrice'
import { BtcType, EthType } from '@@types/coin'
const CoinQuote: FunctionComponent = (): JSX.Element => {
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
  return (
    <section className={styles.contents}>
      <div className={styles.subContainer}>
        <h1 className={styles.title}>구매하실 코인을 선택하세요</h1>
        <h2 className={styles.comment}>시세는 어떻게 정해지는지 기술...</h2>
        <ul className={styles.quoteWrap}>
          <li>
            <CoinList name="인스타코인" abbr="INC" price={1780} />
          </li>
          <li>
            <CoinList name="이더리움" abbr="ETH" price={eth} />
          </li>
          <li>
            <CoinList name="비트코인" abbr="BTC" price={btc} />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default CoinQuote
