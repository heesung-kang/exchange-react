import type { FunctionComponent } from 'react'
import React, { useState } from 'react'
import styles from '@styles/common/header.module.scss'
import { Link } from 'react-router-dom'
const Top: FunctionComponent = (): JSX.Element => {
  const [state, setState] = useState(false)
  const showMenu = () => {
    setState(true)
  }
  const hideMenu = () => {
    setState(false)
  }
  return (
    <section className={styles.header}>
      <div className={styles.headerWrap}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={`${import.meta.env.BASE_URL}images/logo.svg`} alt="instapay" />
          </Link>
        </div>
        <div className={styles.hamburgMenu} onClick={showMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={state ? `${styles.active} ${styles.linked}` : `${styles.linked}`}>
          <div className={styles.close} onClick={hideMenu}>
            <img src={`${import.meta.env.BASE_URL}images/close.svg`} alt="" />
          </div>
          <div className={styles.books}>
            <a href="#">BOOKS</a>
            <h3>책을 사는 새로운 방법! 인스타북스</h3>
          </div>
          <div className={styles.beans}>
            <a href="#">BEANS</a>
            <h3>
              당신의 취향을 사로잡는 압도적인 풍미!
              <br />
              커피의 혁신 고릴라 빈즈
              <br />
              안녕하세요
            </h3>
          </div>
        </nav>
        <div className={state ? `${styles.active} ${styles.dim}` : `${styles.dim}`} onClick={hideMenu}></div>
      </div>
    </section>
  )
}

export default Top
