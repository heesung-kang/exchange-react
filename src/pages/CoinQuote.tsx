import React, { FunctionComponent } from 'react'
import styles from '@styles/coinQuote.module.scss'
import CoinList from '@components/coin/CoinList'
import useCoinPrice from '@hooks/useCoin'
const CoinQuote: FunctionComponent = (): JSX.Element => {
  //코인시세 API
  const { btc, eth } = useCoinPrice()
  return (
    <section className={styles.contents}>
      <div className={styles.subContainer}>
        <h1 className={styles.title}>구매하실 코인을 선택하세요</h1>
        <h2 className={styles.comment}>시세는 어떻게 정해지는지 기술...</h2>
        <div className={styles.header}>
          <span>코인명/심볼</span>
          <span>현재가(KRW)</span>
        </div>
        <ul className={styles.quoteWrap}>
          <li>
            <CoinList name="인스타코인" abbr="INC" price={2000} />
          </li>
          <li>
            <CoinList name="이더리움" abbr="ETH" price={btc} />
          </li>
          <li>
            <CoinList name="비트코인" abbr="BTC" price={eth} />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default CoinQuote
