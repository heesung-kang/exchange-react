export default function isMobile() {
  const mCheck = /MID|TB-8504F|SM-T580|Nexus 9|P20HD|SM-P555S|SM-T536|SM-T385K|SM-T530|LG-V607L|MPGIO-10|muPAD/i // 안드로이드 태블릿 리스트
  return (
    !mCheck.test(navigator.userAgent) &&
    (/(?=.*Android)(?=.*Mobile Safari).*/i.test(navigator.userAgent) || /iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
  )
}
