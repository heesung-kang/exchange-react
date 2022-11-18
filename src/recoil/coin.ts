import { atom } from 'recoil'

export const getCoinPriceStatusAtom = atom<boolean>({
  key: 'getCoinPriceStatusAtom',
  default: false,
})

export const termsCheckAtom = atom<boolean>({
  key: 'termsCheckAtom',
  default: false,
})

export const buyStatusAtom = atom<boolean>({
  key: 'buyStatusAtom',
  default: false,
})

export const qrImgAtom = atom<string>({
  key: 'qrImgAtom',
  default: '',
})
