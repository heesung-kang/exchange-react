import React, { FunctionComponent, useRef } from 'react'
import styles from '@styles/index.module.scss'
import { Link } from 'react-router-dom'
const Mobile: FunctionComponent = (): JSX.Element => {
  const howToRef = useRef<any>(null)
  const scrollToElement = () => howToRef.current.scrollIntoView({ behavior: 'smooth' })
  return (
    <section className={styles.mobile}>
      <article className={styles.m1}>
        <div className={`${styles.mobileImg} ${styles.mt55}`}>
          <img src={`${import.meta.env.BASE_URL}images/page.svg`} alt="" />
        </div>
        <h1>가장 쉽게 코인을 구매하세요!</h1>
        <div className={`${styles.comment} ${styles.mt40}`}>
          가상자산 거래를 위해 불필요한한 계좌 개설, 인증, 송금, 주문, ... 이 모든 불편함을 언제까지 감수하시겠습니까?
          <br />
          <br /> 원하는 금액을 입력하고 결제하세요!
          <br /> 그 다음은 인스타페이가 처리해 줍니다.
        </div>
        <div className={`${styles.btnGroup} ${styles.mt40}`}>
          <Link to="/coinQuote" className={`${styles.btnStart} ${styles.mr10}`}>
            시작하기
          </Link>
          <span className={`${styles.howToBuy} ${styles.ml10}`} onClick={scrollToElement}>
            구매방법
          </span>
        </div>
        <ul className={styles.mt80} ref={howToRef}>
          <li>
            <h2>코인을 사는 새로운 방법</h2>
            <div className={`${styles.commentH2} ${styles.mt20} ${styles.pb16}`}>
              QR코드 기반 모바일 결제 인스타페이 앱으로 복잡한 절차없이 가장 쉬운 구매 방법을 제공합니다.
            </div>
          </li>
          <li>
            <div className={`${styles.img} ${styles.mb24}`}>
              <img src={`${import.meta.env.BASE_URL}images/phone_m.svg`} alt="" />
            </div>
            <h3>앱 설치와 계좌등록</h3>
            <div className={`${styles.commentH3}`}>
              인스타페이 앱을 다운로드하여 설치해 주세요. 최초 단 한번의 계좌등록만으로 코인을 구매할 준비가 완료됩니다.
            </div>
          </li>
          <li>
            <div className={`${styles.img} ${styles.mb24}`}>
              <img src={`${import.meta.env.BASE_URL}images/cart_m.svg`} alt="" />
            </div>
            <h3>코인 선택</h3>
            <div className={`${styles.commentH3}`}>
              구매하실 코인을 고르시고 금액을 입력해 주세요. 국내 거래소의 시세를 반영한 구매 수량을 확인할 수 있습니다.
            </div>
          </li>
          <li>
            <div className={`${styles.img} ${styles.mb24}`}>
              <img src={`${import.meta.env.BASE_URL}images/qr_m.svg`} alt="" />
            </div>
            <h3>앱으로 간단히 구매완료</h3>
            <div className={`${styles.commentH3} ${styles.pb30}`}>
              인스타페이 앱으로 QR코드를 스캔하면 간단히 결제 끝. (모바일에서는 QR을 터치)
              <br /> 구매 결과는 앱에서 확인합니다.
            </div>
          </li>
        </ul>
      </article>
      <div className={styles.appDown}>
        <h2>App Download</h2>
        <div className={`${styles.btnGroup} ${styles.mt40}`}>
          <a href="https://apps.apple.com/kr/app/%EC%9D%B8%EC%8A%A4%ED%83%80%ED%8E%98%EC%9D%B4/id1455816463" target="_blank" rel="noreferrer">
            <i>
              <img src={`${import.meta.env.BASE_URL}images/apple_m.svg`} alt="" />
            </i>
            APP STORE
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.insta.instapay" target="_blank" rel="noreferrer">
            <i>
              <img src={`${import.meta.env.BASE_URL}images/android_m.svg`} alt="" />
            </i>
            PLAY STORE
          </a>
        </div>
      </div>
    </section>
  )
}

export default Mobile
