import { atom } from 'recoil'

export const coinPrice = atom<boolean>({
  key: 'coinPrice',
  default: false,
})

export const termsCheck = atom<boolean>({
  key: 'termsCheck',
  default: false,
})

export const buyStatus = atom<boolean>({
  key: 'buyStatus',
  default: false,
})

export const qrImg = atom<string>({
  key: 'qrImg',
  default: '',
})

export const exchangeParentsPrice = atom<number>({
  key: 'exchangeParentsPrice',
  default: 0,
})
