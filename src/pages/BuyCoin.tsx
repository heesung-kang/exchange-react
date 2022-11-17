import React, { FunctionComponent, useState } from 'react'
import styles from '@styles/buyCoin.module.scss'
import { Link } from 'react-router-dom'
import Buy from '@components/coin/Buy'
import Terms from '@components/common/Terms'
import { coinPrice, exchangeParentsPrice, termsCheck, buyStatus, qrImg } from '@recoil/coin'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'
const BuyCoin: FunctionComponent = (): JSX.Element => {
  const priceKrw = useRecoilValue(exchangeParentsPrice)
  const qr = useRecoilValue(qrImg)
  const [terms, setTerms] = useState(false)
  const termsVisible = () => setTerms(!terms)
  const setFetch = useSetRecoilState(coinPrice)
  const setBuyStatus = useSetRecoilState(buyStatus)
  //구매하기
  const buy = () => {
    if (!isChecked) {
      alert('약관에 동의해 주세요')
      return
    }
    if (priceKrw === 0) {
      alert('구매 금액을 입력해주세요')
      return
    }
    setFetch(true)
    setBuyStatus(true)
  }
  //약관체크
  const [isChecked, setIsChecked] = useRecoilState(termsCheck)
  const handleChecked = () => {
    setIsChecked(!isChecked)
  }
  return (
    <>
      <section className={styles.contents}>
        <div className={styles.subContainer}>
          <div className={styles.back}>
            <span className={styles.wrap}>
              <Link to="/coinQuote">
                <img src={`${import.meta.env.BASE_URL}images/back.svg`} alt="뒤로가기" />
                <span className={styles.menu}>구매</span>
              </Link>
            </span>
          </div>
          {/* 코인 구매 금액 init */}
          <Buy />
          <div className={`${styles.mt64} ${styles.ml10} ${styles.ckWrap}`}>
            <input type="checkbox" id="ck" checked={isChecked} onChange={handleChecked} />
            <label htmlFor="ck"></label>
            <span onClick={termsVisible}>인스타코인 구매약관</span>에 동의합니다
          </div>
          <button className={`${styles.mt20} ${styles.btnBuy}`} onClick={buy}>
            구매하기
          </button>
          {qr !== '' ? (
            <div className={styles.qrWrap}>
              <h2>인스타페이 앱으로 QR코드를 찍어서 결제해 주세요.</h2>
              <img src={qr} />
            </div>
          ) : null}
        </div>
      </section>
      {/* 구매 약관*/}
      <Terms terms={terms} onclick={termsVisible} />
    </>
  )
}

export default BuyCoin
