import React, { FunctionComponent, useEffect, useState } from 'react'
import styles from '@styles/buyCoin.module.scss'
import useInput from '@hooks/useInput'
import { comma, commaEssence } from '@utils/comma'
import { useParams } from 'react-router-dom'
const Buy: FunctionComponent = (): JSX.Element => {
  const params = useParams()
  const [krw, setKrw] = useState<string | number>(0)
  const [exchange, setExchange] = useState<string | number>(0)
  const [calcVisible, setCalcVisible] = useState(false)
  const changeVisible = () => {
    setCalcVisible(!calcVisible)
  }
  /*인풋 설정*/
  const krwChange = useInput({ initialState: '' })
  useEffect(() => {
    const localString = comma(krwChange.value) //천단위 콤마
    const trans = krwChange.value * 1.2 // 환전
    const localStringEx = commaEssence(trans) //천단위 콤마 : 정수
    setKrw(localString)
    setExchange(localStringEx)
  }, [krwChange])
  return (
    <>
      <h1 className={styles.title}>{params.name}</h1>
      <div className={styles.quote}>
        <div className={styles.exchangeWrap}>
          <div className={styles.krw}>
            <span className={styles.money}>
              {calcVisible ? (
                <input type="number" className={styles.number} {...krwChange} onBlur={changeVisible} />
              ) : (
                <span onClick={changeVisible}>{krw || 0}</span>
              )}
            </span>
            <span className={styles.unit}>KRW</span>
          </div>
          <div className={styles.coin}>
            <span className={styles.money}>
              <span>{exchange}</span>
              <div className={styles.commission}>수수료 0.1%</div>
            </span>
            <span className={styles.unit}>{params.abbr}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Buy
