import React, { FunctionComponent, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from '@styles/buyComplete.module.scss'
import { useParams } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { getCoinPriceStatusAtom } from '@recoil/coin'
import { setCookie } from '@utils/cookie'

const BuyComplete: FunctionComponent = (): JSX.Element => {
  const params = useParams()
  const setIsChecked = useSetRecoilState(getCoinPriceStatusAtom)
  useEffect(() => {
    setCookie('pay', 'ok')
    setIsChecked(false)
  }, [])
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
        <div className={styles.myWallet}>
          <span>
            <img src={`${import.meta.env.BASE_URL}images/screen.svg`} alt="" />
          </span>
        </div>
        <Link to="/" className={styles.check}>
          확인
        </Link>
      </div>
    </section>
  )
}

export default BuyComplete
