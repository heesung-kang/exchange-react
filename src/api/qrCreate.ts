import axios from 'axios'
const baseURL = 'https://api.instapay.kr'
const storeId = 'l20ka-km19m-04t08-20b08-c32po'

function createQrcodeApi(params: any) {
  return axios.get(`${baseURL}/s2/sell?${params}`, {
    headers: {
      Authorization: `Bearer ${storeId}`,
    },
  })
}

function createApi(params: any) {
  return axios.get(`${baseURL}/s2/buy?i=${params}`, {
    headers: {
      Authorization: `Bearer ${storeId}`,
    },
  })
}

function createWaitApi(params: any) {
  return axios.get(`${baseURL}/s2/wait?ti=${params}`)
}

function waitCompleteApi(params: any) {
  return axios.get(`${baseURL}/s2/wait?ti=${params}&st=complete`)
}

export { createQrcodeApi, createApi, createWaitApi, waitCompleteApi }
