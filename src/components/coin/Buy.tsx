import React, { FunctionComponent, useEffect, useState } from 'react'
import styles from '@styles/buyCoin.module.scss'
import useInput from '@hooks/useInput'
import { comma, commaEssence } from '@utils/comma'
import { useNavigate, useParams } from 'react-router-dom'
import useCoinPrice from '@hooks/useCoin'
import { floor } from '@utils/floor'
import useQr from '@hooks/useQr'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { exchangeParentsPrice, buyStatus, qrImg } from '@recoil/coin'
const Buy: FunctionComponent = (): JSX.Element => {
  const navigate = useNavigate()
  //get params
  const params = useParams()
  const [krw, setKrw] = useState<string | number>(0)
  const [exchange, setExchange] = useState<string | number>(0)
  const [calcVisible, setCalcVisible] = useState(false)
  const changeVisible = () => {
    setCalcVisible(!calcVisible)
  }
  //결제 hooks
  const { paid, qr, _open } = useQr()
  //코인시세 API
  const { btc, eth } = useCoinPrice()
  const [btcPrice, setBtcPrice] = useState(0)
  const [ethPrice, setEthPrice] = useState(0)
  const [exchangePrice, setExchangePrice] = useRecoilState(exchangeParentsPrice) //최종 결제 코인 수
  const [coinBuyStatus, setCoinBuyStatus] = useRecoilState(buyStatus) // 코인 구매 상태
  //구매버튼 클릭시 시세 받기
  useEffect(() => {
    setBtcPrice(btc)
    setEthPrice(eth)
  }, [btc, eth])
  //구매버튼 클릭시 API 전송
  useEffect(() => {
    if (coinBuyStatus && exchangePrice !== 0) {
      _open({ productName: params.abbr, productAmount: 1, ttl: 20 })
      // _open({ productName: params.abbr, productAmount: krwChange.value, ttl: 20 })
      setCoinBuyStatus(false)
    }
  }, [coinBuyStatus])
  //qr 이미지 생성
  const setImg = useSetRecoilState(qrImg)
  useEffect(() => {
    setImg(qr)
  }, [qr])
  //구매완료 체크
  useEffect(() => {
    if (paid) {
      navigate(`/buyComplete/${params.abbr}/${krwChange.value}/${exchangePrice}`)
    }
  }, [paid])
  /*인풋 설정*/
  const maxLen = (value: string) => value.length <= 10
  const krwChange = useInput({ initialState: '', reset: false, validator: maxLen })
  useEffect(() => {
    const localString = comma(krwChange.value) //천단위 콤마
    if (params.abbr === 'ETH') {
      const ext = Number(floor(krwChange.value / ethPrice)) // 환전
      setExchangePrice(Number((ext * 0.999).toFixed(10)))
    } else if (params.abbr === 'BTC') {
      const ext = Number(floor(krwChange.value / btcPrice)) // 환전
      setExchangePrice(Number((ext * 0.999).toFixed(10)))
    } else if (params.abbr === 'INC') {
      const ext = Number(floor(krwChange.value / 2000)) // 환전
      setExchangePrice(Number((ext * 0.999).toFixed(10)))
    }
    const localStringEx = commaEssence(exchangePrice) //천단위 콤마 : 정수
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
