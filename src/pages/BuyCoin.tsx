import React, { FunctionComponent, useState } from "react";
import styles from "@styles/buyCoin.module.scss";
import { Link } from "react-router-dom";
import Buy from "@components/coin/Buy";
import Terms from "@components/common/Terms";
const BuyCoin: FunctionComponent = (): JSX.Element => {
  const [terms, setTerms] = useState(false);
  const termsVisible = () => setTerms(!terms);
  return (
    <>
      <section className={styles.contents}>
        <div className={styles.subContainer}>
          <div className={styles.back}>
            <span className={styles.wrap}>
              <Link to="/">
                <img src="/images/back.svg" alt="뒤로가기" />
                <span className={styles.menu}>구매</span>
              </Link>
            </span>
          </div>
          <Buy />
          <div className={`${styles.mt64} ${styles.ml10} ${styles.ckWrap}`}>
            <input type="checkbox" id="ck" />
            <label htmlFor="ck"></label>
            <span onClick={termsVisible}>인스타코인 구매약관</span>에 동의합니다
          </div>
          <button className={`${styles.mt20} ${styles.btnBuy}`}>
            구매하기
          </button>
        </div>
      </section>
      {/* 구매 약관*/}
      <Terms terms={terms} onclick={termsVisible} />
    </>
  );
};

export default BuyCoin;
