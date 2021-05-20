import * as types from '../action-types'
import { reqLoginIn, reqLoginOut } from '@/api/auth'
import { setUserCookie, removeUserCookie } from './user'
import { setCookie, removeCookie } from '@/utils/auth'
import { message } from 'antd'
// import { setCookie } from '@/store/actions/auth';
// export const setCookie = (token) => ({
//   type: types.AUTH_SET_COOKIE,
//   token,
// })

export const loginIn = (form) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const { username, password } = form
    reqLoginIn({
      username,
      password,
    })
      .then((res) => {
        const { code, role } = res.data.data
        // console.log(code, role)

        if (code === 200) {
          console.log(2323223323233)
          setCookie(role)
          console.log('action auth', role)
          dispatch(setUserCookie(role))
          resolve()
        } else {
          message.error('用户名错误,输入admin或者custome')
          reject()
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const loginOut = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    reqLoginOut()
      .then((res) => {
        const { code } = res.data.data
        if (code === 200) {
          dispatch(removeUserCookie())
          removeCookie()
        }
        resolve(res)
        // if(c)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
