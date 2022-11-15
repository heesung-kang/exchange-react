import React, { FunctionComponent } from 'react'
import styles from '@styles/index.module.scss'
import { Link } from 'react-router-dom'
const Mobile: FunctionComponent = (): JSX.Element => {
  return (
    <section className={styles.mobile}>
      <article className={styles.m1}>
        <h1>가장 쉽게 코인을 구매하세요!</h1>
        <Link to="/coinQuote" className={`${styles.btnStart} ${styles.mr20}`}>
          시작하기
        </Link>
      </article>
    </section>
  )
}

export default Mobile
