import * as types from '../action-types'
import { loginIn } from '@/api/app'
import { setUserCookie } from './user'
import { setCookie } from '@/utils/auth'
import { message } from 'antd'
// import { setCookie } from '@/store/actions/auth';
// export const setCookie = (token) => ({
//   type: types.AUTH_SET_COOKIE,
//   token,
// })

export const login = (form) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const { username, password } = form
    loginIn({
      username,
      password,
    })
      .then((res) => {
        const { code, role } = res.data.data
        console.log(res)
        if (code === 200) {
          setCookie(role)
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
