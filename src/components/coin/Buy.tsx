import React, { FunctionComponent, useEffect, useState, useRef } from 'react'
import styles from '@styles/buyCoin.module.scss'
import useInput from '@hooks/useInput'
import { comma, commaEssence } from '@utils/comma'
import { isExponential } from '@utils/isExponential'
import { useNavigate, useParams } from 'react-router-dom'
import useCoinPrice from '@hooks/useCoin'
import { decimal } from '@utils/floor'
import useQr from '@hooks/useQr'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { buyStatusAtom, qrImgAtom } from '@recoil/coin'
const Buy: FunctionComponent = (): JSX.Element => {
  const inputFocus = useRef<any>(null)
  const navigate = useNavigate()
  const params = useParams()
  const [krw, setKrw] = useState<string | number>(0) //고정 텍스트 표기
  const [exchange, setExchange] = useState<string | number>(0) //환전 코인 갯수
  // input visible
  const [calcVisible, setCalcVisible] = useState(false)
  const changeVisible = () => {
    setCalcVisible(!calcVisible)
    setTimeout(() => {
      inputFocus.current.focus()
    }, 200)
  }
  const { paid, qr, _open } = useQr() //결제 qrcode 생성 hooks
  const { btc, eth } = useCoinPrice(false) //코인시세 hooks
  const [btcPrice, setBtcPrice] = useState(0) //btc 가격
  const [ethPrice, setEthPrice] = useState(0) //eth 가격
  const [exchangePrice, setExchangePrice] = useState(0) //최종 결제 코인 수
  const [coinBuyStatus, setCoinBuyStatus] = useRecoilState(buyStatusAtom) // 코인 구매 상태
  //구매버튼 클릭시 코인시세 hooks 에서 받은값 전달
  useEffect(() => {
    setBtcPrice(btc)
    setEthPrice(eth)
  }, [btc, eth])
  //구매버튼 클릭시 API 전송
  useEffect(() => {
    if (coinBuyStatus && exchangePrice !== 0) {
      _open({ productName: params.abbr, productAmount: krwChange.value, ttl: 20 })
      setCoinBuyStatus(false)
    } else if (coinBuyStatus && exchangePrice === 0) {
      alert('구매 금액을 입력하지 않았거나 구매금액이 너무 적습니다.')
      setCoinBuyStatus(false)
    }
  }, [coinBuyStatus])
  //qr 이미지 생성
  const setImg = useSetRecoilState(qrImgAtom)
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
      const ext = Number(decimal(krwChange.value / ethPrice)) // 환전
      isExponential(ext) ? setExchangePrice(0) : setExchangePrice(Number((ext * 0.999).toFixed(13)))
    } else if (params.abbr === 'BTC') {
      const ext = Number(decimal(krwChange.value / btcPrice)) // 환전
      isExponential(ext) ? setExchangePrice(0) : setExchangePrice(Number((ext * 0.999).toFixed(13)))
    } else if (params.abbr === 'INC') {
      const ext = Number(decimal(krwChange.value / 2000)) // 환전
      isExponential(ext) ? setExchangePrice(0) : setExchangePrice(Number((ext * 0.999).toFixed(13)))
    }
    const localStringEx = commaEssence(exchangePrice) //천단위 콤마 : 정수
    setKrw(localString)
    setExchange(localStringEx)
  }, [krwChange, ethPrice, btcPrice])

  return (
    <>
      <h1 className={styles.title}>{params.name}</h1>
      <div className={styles.quote}>
        <div className={styles.exchangeWrap}>
          <div className={styles.krw}>
            <span className={styles.money}>
              {calcVisible ? (
                <input type="number" className={styles.number} {...krwChange} onBlur={changeVisible} ref={inputFocus} />
              ) : (
                <span onClick={changeVisible} className={styles.clickArea}>
                  {krw || 0}
                </span>
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
