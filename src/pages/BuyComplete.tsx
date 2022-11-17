import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import styles from '@styles/buyComplete.module.scss'
import { useParams } from 'react-router-dom'

const BuyComplete: FunctionComponent = (): JSX.Element => {
  const params = useParams()
  console.log(params.abbr, params.krw, params.exchange)
  return (
    <section className={styles.contents}>
      <div className={styles.subContainer}>
        <h1 className={styles.title}>코인 구매 완료</h1>
        <div className={styles.krw}>
          <span>{params.krw}</span>
          <span className={styles.unit}>KRW</span>
        </div>
        <div className={styles.line}></div>
        <div className={styles.exchange}>
          <span>{params.exchange}</span>
          <span className={styles.unit}>{params.abbr}</span>
        </div>
        <div className={styles.info}>
          인스타페이 앱의 ‘내 지갑’ 메뉴에서
          <br /> 구매한 코인을 확인하세요!
        </div>
        <Link to="/" className={styles.check}>
          확인
        </Link>
      </div>
    </section>
  )
}

export default BuyComplete
