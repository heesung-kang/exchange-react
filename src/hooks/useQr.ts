import { useState, useEffect } from 'react'
import { createQrcodeApi, createApi, createWaitApi, waitCompleteApi } from '@api/qrCreate'
import isMobile from '@utils/isMobile'
import isIE from '@utils/isIE'

const useQr = () => {
  const [nPay, setPay] = useState({ goods: '', ttl: 20, price: 0 })
  const [qr, setQr] = useState('')
  const [ti, setTi] = useState('')
  const [re, setRe] = useState('')
  const [createdQrcode, setCreatedQrcode] = useState(false)
  const [paid, setPaid] = useState(false)
  const _open = (pay: any) => {
    if (isIE() && isIE() < 10) {
      alert('internet explorer 10 이상 지원합니다.')
      return
    }
    if (typeof qr == 'undefined' || nPay.goods !== pay.productName || nPay.price !== pay.productAmount || nPay.ttl !== pay.ttl) {
      setPay({ goods: pay.productName, ttl: pay.ttl, price: pay.productAmount })
    } else {
      _createWait()
    }
  }
  useEffect(() => {
    _createQrcode()
  }, [nPay])

  const _createQrcode = () => {
    const sendData = `goods=${encodeURIComponent(btoa(unescape(encodeURIComponent(nPay.goods))))}&price=${nPay.price}&ttl=${nPay.ttl}&ldate=nil`
    if (nPay.price == 0) {
      return
    }
    const response = createQrcodeApi(sendData)

    response
      .then(res => {
        if (res.request.readyState === 4 && res.request.status === 200) {
          _resultQrcode(res.request.responseText)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  const _resultQrcode = (responseText: any) => {
    const response = JSON.parse(responseText)
    if (response.result === 'ok') {
      _create(response.gid)
    }
  }

  const _create = (i: any) => {
    const response = createApi(i)
    response
      .then(res => {
        if (res.request.readyState === 4 && res.request.status === 200) {
          _result(res.request.responseText)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  const _result = (responseText: any) => {
    const response = JSON.parse(responseText)
    if (response.result === 'ok') {
      setQr(response.qr)
      setTi(response.ti)
      setRe(response.re)
      setCreatedQrcode(true)
      setPaid(false)
    }
  }
  useEffect(() => {
    if (isMobile()) {
      if (re === '') {
        return
      }
      //모바일 딥링크 띄우기
      location.href = re
      _createWait()
    } else {
      //pc qr 띄우기
      _createWait()
    }
  }, [ti])

  const _createWait = () => {
    if (ti === '') {
      return
    }
    const response = createWaitApi(ti)
    response
      .then(res => {
        if (res.request.readyState === 4 && res.request.status === 200) {
          _resultWait(res.request.responseText)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  const _waitComplete = () => {
    if (ti === '') {
      return
    }
    const response = waitCompleteApi(ti)
    response
      .then(res => {
        if (res.request.readyState === 4 && res.request.status === 200) {
          _resultWait(res.request.responseText)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  const _resultWait = (responseText: any) => {
    const response = JSON.parse(responseText)
    if (response.result === 'ok') {
      if (response.tstatus === 'entry') {
        if (isMobile()) {
          alert('결제가 진행중 입니다. 창을 닫거나, 새로고침 하시면 오류가 발생할 수 있습니다.')
        }
        _waitComplete()
      } else {
        setCreatedQrcode(true)
        setPaid(true)
      }
    }
  }

  const _stop = () => {
    window.stop()
  }

  return { _open, _stop, paid, qr }
}
export default useQr
