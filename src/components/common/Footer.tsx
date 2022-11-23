import React, { FunctionComponent } from 'react'
import styles from '@styles/common/footer.module.scss'

const Footer: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <div>Copyright © 2022 InstaPay - All Rights Reserved</div>
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
    </>
  )
}

export default Footer
