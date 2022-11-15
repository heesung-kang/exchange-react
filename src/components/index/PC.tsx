import React, { FunctionComponent } from 'react'
import styles from '@styles/index.module.scss'
import { Link } from 'react-router-dom'

const PC: FunctionComponent = (): JSX.Element => {
  return (
    <article className={styles.i1}>
      <h1>가장 쉽게 코인을 구매하세요!</h1>
      <div className={styles.info}>
        동해물과 백두산이 마르고 닳도록 하느님이 보우하사 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 동해물과 백두산이 마르고 닳도록 하느님이
        보우하사 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 동해물과 백두산이 마르고 닳도록
        하느님이 보우하사 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 동해물과 백두산이 마르고 닳도록 하느
      </div>
      <div className={styles.btnGroup}>
        <Link to="/coinQuote" className={`${styles.btnStart} ${styles.mr20}`}>
          시작하기
        </Link>
        <Link to="/coinQuote" className={styles.btnHowto}>
          구매방법
        </Link>
      </div>
    </article>
  )
}

export default PC
