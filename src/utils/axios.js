import Axios from 'axios'
import { ProdBaseUrl } from '@/config/ipConfig'
export const axios = Axios
export const request = Axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : ProdBaseUrl,
  timeout: 5000,
})

// request.interceptors.request.use(
//   (config) => {},
//   (err) => {}
// )

request.interceptors.response.use(
  (response) => response,
  (err) => {
    console.log(err)
    return Promise.reject(err)
  }
)
