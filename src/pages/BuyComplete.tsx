import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import styles from '@styles/buyComplete.module.scss'
const BuyComplete: FunctionComponent = (): JSX.Element => {
  return (
    <section className={styles.contents}>
      <div className={styles.subContainer}>
        <h1 className={styles.title}>코인 구매 완료</h1>
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
