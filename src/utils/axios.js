import Axios from 'axios'

export const axios = Axios
export const request = Axios.create({
  baseURL: '/',
})

// request.interceptors.request.use(
//   (config) => {},
//   (err) => {}
// )

request.interceptors.response.use(
  (response) => {
    console.log(response)
  },
  (err) => {
    console.log(err)
    return Promise.reject(err)
  }
)
