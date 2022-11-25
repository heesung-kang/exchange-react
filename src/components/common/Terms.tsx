import React, { FunctionComponent } from 'react'
import styles from '@styles/buyCoin.module.scss'
type props = {
  terms: boolean
  onclick: () => void
}
const Terms: FunctionComponent<props> = ({ terms, onclick }): JSX.Element => {
  return (
    <section className={terms ? `${styles.terms} ${styles.active}` : `${styles.terms}`}>
      <section className={styles.termsHeader}>
        <h2>구매 약관</h2>
        <div className={styles.close} onClick={onclick}>
          <img src={`${import.meta.env.BASE_URL}images/close.svg`} alt="닫기" />
        </div>
      </section>
      <section className={styles.termsBody}>
        <div className={styles.termsBodyWrap}>
          <h3>가상자산 구매 약관</h3>
          <div className={styles.term}>내용...</div>
        </div>
      </section>
    </section>
  )
}

export default Terms
