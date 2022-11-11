import React, { FunctionComponent } from 'react'
import styles from '@styles/coinQuote.module.scss'
import { useNavigate } from 'react-router-dom'

type props = {
  name: string
  eName: string
  price: number
}
const CoinList: FunctionComponent<props> = ({ name, eName, price }): JSX.Element => {
  const navigate = useNavigate()
  return (
    <section
      onClick={() => {
        navigate('/buy')
      }}
    >
      <div className={styles.infoWrap}>
        <div className={styles.coinImg}></div>
        <div className={styles.coinInfo}>
          <h3>{name}</h3>
          <div className={styles.name}>{eName}</div>
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
