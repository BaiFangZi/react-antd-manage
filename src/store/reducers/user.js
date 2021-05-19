import * as types from '../action-types'
import { getCookie } from '@/utils/auth'
console.log('token', getCookie())
const initUserInfo = {
  // name: "",
  // role: "",
  // avatar:"",
  token: getCookie(),
  // token
}
export default function user(state = initUserInfo, action) {
  switch (action.type) {
    case types.USER_SET_COOKIE:
      return {
        ...state,
        token: action.token,
      }
    case types.USER_REMOVE_COOKIE: {
      console.log(state)
      return {
        ...state,
        token: action.token,
      }
    }

    // case types.USER_SET_USER_INFO:
    //   return {
    //     ...state,
    //     name: action.name,
    //     role: action.role,
    //     avatar: action.avatar,
    //   };
    // case types.USER_RESET_USER:
    //   return {};
    default:
      return state
  }
}
