import React, { FunctionComponent } from 'react'
import styles from '@styles/coinQuote.module.scss'
import { useNavigate } from 'react-router-dom'

type props = {
  name: string
  abbr: string
  price: number
}
const CoinList: FunctionComponent<props> = ({ name, abbr, price }): JSX.Element => {
  const navigate = useNavigate()
  return (
    <section
      onClick={() => {
        navigate(`/buy/${name}/${abbr}`)
      }}
    >
      <div className={styles.infoWrap}>
        <div className={styles.coinImg}>
          {abbr === 'INC' ? (
            <img src="/images/simbol_inc.svg" alt={abbr} />
          ) : abbr === 'BTC' ? (
            <img src="/images/simbol_btc.svg" alt={abbr} />
          ) : (
            <img src="/images/simbol_eth.svg" alt={abbr} />
          )}
        </div>
        <div className={styles.coinInfo}>
          <h3>{name}</h3>
          <div className={styles.name}>{abbr}</div>
        </div>
      </div>
      <div className={styles.price}>
        <div className={styles.quote}>{price?.toLocaleString()}</div>
        <div className={styles.unit}>KRW</div>
      </div>
    </section>
  )
}

export default CoinList
