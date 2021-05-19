import Axios from 'axios'

export const axios = Axios
export const request = Axios.create({
  baseURL: 'https://mock.mengxuegu.com/mock/60a4ab7dff333b1b32495812/api_copy',
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
