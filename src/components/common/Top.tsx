import type { FunctionComponent } from 'react'
import React, { useState } from 'react'
import styles from '@styles/common/header.module.scss'
import { Link } from 'react-router-dom'
import useQr from '@hooks/useQr'
import { useSetRecoilState } from 'recoil'
import { termsCheckAtom } from '@recoil/coin'
const Top: FunctionComponent = (): JSX.Element => {
  //메뉴 처리
  const [state, setState] = useState(false)
  const handleShow = () => {
    setState(true)
  }
  const handleHide = () => {
    setState(false)
  }
  //결제 중단
  const setIsChecked = useSetRecoilState(termsCheckAtom)
  const { _stop } = useQr()
  const handleStop = () => {
    setIsChecked(false)
    _stop()
  }
  return (
    <section className={styles.header}>
      <div className={styles.headerWrap}>
        <div className={styles.logo} onClick={handleStop}>
          <Link to="/">
            <img src={`${import.meta.env.BASE_URL}images/logo.svg`} alt="instapay" />
          </Link>
        </div>
        <div className={styles.hamburgMenu} onClick={handleShow}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={state ? `${styles.active} ${styles.linked}` : `${styles.linked}`}>
          <div className={styles.close} onClick={handleHide}>
            <img src={`${import.meta.env.BASE_URL}images/close.svg`} alt="" />
          </div>
          <div className={styles.books}>
            <a href="https://book.instapay.kr/gbb/" target="_blank" rel="noreferrer">
              BOOKS
            </a>
            <h3>책을 사는 새로운 방법! 인스타북스</h3>
          </div>
          <div className={styles.beans}>
            <a href="https://beans.instapay.kr/beans/#/" target="_blank" rel="noreferrer">
              BEANS
            </a>
            <h3>
              당신의 취향을 사로잡는 압도적인 풍미!
              <br />
              커피의 혁신 고릴라 빈즈
            </h3>
            <ul className={styles.sns}>
              <li>
                <a href="https://www.instapay.kr/" target="_blank" rel="noreferrer">
                  <img src={`${import.meta.env.BASE_URL}images/home_green.svg`} alt="homepage" />
                </a>
              </li>
              <li>
                <a href="https://blog.naver.com/instapay_official" target="_blank" rel="noreferrer">
                  <img src={`${import.meta.env.BASE_URL}images/blog_green.svg`} alt="blog" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/instabooks.official/" target="_blank" rel="noreferrer">
                  <img src={`${import.meta.env.BASE_URL}images/instagram_green.svg`} alt="instagram" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className={state ? `${styles.active} ${styles.dim}` : `${styles.dim}`} onClick={handleHide}></div>
      </div>
    </section>
  )
}

export default Top
