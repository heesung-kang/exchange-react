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
  const navigate = useNavigate()
  const params = useParams()
  const inputFocus = useRef<HTMLInputElement | any>(null)
  const [reset, setReset] = useState(false) //필드 초기화
  const [krw, setKrw] = useState<string | number>(0) //고정 텍스트 표기
  const [exchange, setExchange] = useState<string | number>(0) //환전 코인 갯수
  const [coin, setCoin] = useState<number>(0) //환전할 코인
  const [calcVisible, setCalcVisible] = useState(false) // input visible
  const changeVisible = () => {
    setCalcVisible(!calcVisible)
    setTimeout(() => {
      if (inputFocus.current !== null) inputFocus.current.focus()
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
      if (krwChange.value < 100000) {
        alert('최소 100,000원 이상 구매가 가능합니다')
        return
      }
      _open({ productName: `${params.abbr} ${exchangePrice}`, productAmount: krwChange.value, ttl: 20 })
      setCoinBuyStatus(false)
    } else if (coinBuyStatus && exchangePrice === 0) {
      alert('구매 금액을 입력하지 않았거나 구매금액이 너무 적습니다. \n최소 100,000원 이상 구매가 가능합니다')
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
  const maxLen = (value: string) => value.length <= 7
  const krwChange = useInput({ initialState: '', reset, validator: maxLen })
  useEffect(() => {
    const localString = comma(krwChange.value) //천단위 콤마
    params.abbr === 'ETH' ? setCoin(ethPrice) : params.abbr === 'BTC' ? setCoin(btcPrice) : setCoin(2000)
    const ext = Number(krwChange.value / coin) // 환전
    const fixed = decimal(ext * 0.995) // 수수료 & 자리수
    isExponential(ext) ? setExchangePrice(0) : setExchangePrice(Number(fixed))
    const localStringEx = commaEssence(exchangePrice) //천단위 콤마 : 정수
    setKrw(localString)
    setExchange(localStringEx)
  }, [krwChange, ethPrice, btcPrice])
  //최대금액 확인
  useEffect(() => {
    if (krwChange.value > 2000000) {
      alert('최대 2,000,000원까지 구매가 가능합니다')
      setReset(true)
      setTimeout(() => {
        setReset(false)
      }, 500)
    }
  }, [krwChange.value])
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
              <div className={styles.commission}>수수료 0.5%</div>
            </span>
            <span className={styles.unit}>{params.abbr}</span>
          </div>
          <div className={`${styles.alert} ${styles.mt50}`}>화면에 표시된 자산 시세는 실제 구매 시점과 차이가 있을 수 있습니다.</div>
        </div>
      </div>
    </>
  )
}

export default Buy
