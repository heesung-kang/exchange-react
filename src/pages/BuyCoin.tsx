import React, { FunctionComponent, useEffect, useState, useMemo } from 'react'
import styles from '@styles/buyCoin.module.scss'
import { Link } from 'react-router-dom'
import Buy from '@components/coin/Buy'
import Terms from '@components/common/Terms'
import { getCoinPriceStatusAtom, termsCheckAtom, buyStatusAtom, qrImgAtom } from '@recoil/coin'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'
import isMobile from '@utils/isMobile'
import useQr from '@hooks/useQr'
const BuyCoin: FunctionComponent = (): JSX.Element => {
  //약관체크
  const [terms, setTerms] = useState(false)
  const handleTermsVisible = () => setTerms(!terms)

  const [isChecked, setIsChecked] = useRecoilState(termsCheckAtom)
  const handleChecked = () => {
    setIsChecked(!isChecked)
  }
  //구매하기
  const setFetch = useSetRecoilState(getCoinPriceStatusAtom)
  const setCoinBuyStatus = useSetRecoilState(buyStatusAtom)
  const handleBuy = () => {
    if (!isChecked) {
      alert('약관에 동의해 주세요')
      return
    }
    setFetch(true)
    setCoinBuyStatus(true)
  }
  //qrcode
  const qr = useRecoilValue<string>(qrImgAtom)
  const [qrcode, setQrcode] = useState('')
  useEffect(() => {
    setQrcode(qr)
  }, [qr])
  //결제 중단
  const { _stop } = useQr()
  const handleBack = () => {
    setIsChecked(false)
    _stop()
  }
  return (
    <>
      <section className={styles.contents}>
        <div className={styles.subContainer}>
          <div className={styles.back}>
            <span className={styles.wrap} onClick={handleBack}>
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
            <span onClick={handleTermsVisible}>인스타코인 구매약관</span>에 동의합니다
          </div>
          <button className={`${styles.mt20} ${styles.btnBuy}`} onClick={handleBuy}>
            구매하기
          </button>
          {qr !== '' && !isMobile() ? (
            <div className={styles.qrWrap}>
              <h2>인스타페이 앱으로 QR코드를 찍어서 결제해 주세요.</h2>
              <div className={styles.mt10}>
                <img src={qrcode} />
              </div>
            </div>
          ) : null}
        </div>
      </section>
      {/* 구매 약관*/}
      <Terms terms={terms} onclick={handleTermsVisible} />
    </>
  )
}

export default BuyCoin
