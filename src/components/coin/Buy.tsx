import React, { FunctionComponent, useEffect, useState, useRef } from 'react'
import styles from '@styles/buyCoin.module.scss'
import useInput from '@hooks/useInput'
import { comma, commaEssence } from '@utils/comma'
import { useParams } from 'react-router-dom'
import useCoinPrice from '@hooks/useCoin'
import { floor } from '@utils/floor'

const Buy: FunctionComponent = (): JSX.Element => {
  //코인시세 API
  const { btc, eth } = useCoinPrice()
  //get params
  const params = useParams()
  const [krw, setKrw] = useState<string | number>(0)
  const [exchange, setExchange] = useState<string | number>(0)
  const [calcVisible, setCalcVisible] = useState(false)
  const changeVisible = () => {
    setCalcVisible(!calcVisible)
  }
  /*인풋 설정*/
  const maxLen = (value: string) => value.length <= 10
  const krwChange = useInput({ initialState: '', reset: false, validator: maxLen })
  useEffect(() => {
    const localString = comma(krwChange.value) //천단위 콤마
    let trans = 0
    if (params.abbr === 'ETH') {
      const ext = Number(floor(krwChange.value / eth)) // 환전
      trans = Number((ext * 0.999).toFixed(10))
    } else if (params.abbr === 'BTC') {
      const ext = Number(floor(krwChange.value / btc)) // 환전
      trans = Number((ext * 0.999).toFixed(10))
    } else if (params.abbr === 'INC') {
      const ext = Number(floor(krwChange.value / 1780)) // 환전
      trans = Number((ext * 0.999).toFixed(10))
    }
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