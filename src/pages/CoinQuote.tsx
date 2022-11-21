import React, { FunctionComponent } from 'react'
import styles from '@styles/coinQuote.module.scss'
import CoinList from '@components/coin/CoinList'
import useCoinPrice from '@hooks/useCoin'
const CoinQuote: FunctionComponent = (): JSX.Element => {
  //코인시세 API
  const { btc, eth } = useCoinPrice(true)
  return (
    <section className={styles.contents}>
      <div className={styles.subContainer}>
        <h1 className={styles.title}>구매하실 코인을 선택하세요</h1>
        <div className={styles.comment}>
          국내 가상화폐 거래소의 시세를 반영한 구매 가격입니다.
          <br /> 구매 시점과의 시차로 인해 실구매 시의 가격과는 다소 차이가 <br />
          있을 수 있습니다.
        </div>
        <div className={styles.header}>
          <span>코인명/심볼</span>
          <span>현재가(KRW)</span>
        </div>
        <ul className={styles.quoteWrap}>
          <li>
            <CoinList name="인스타코인" abbr="INC" price={2000} />
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
