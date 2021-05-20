import * as types from '../action-types'
import { getCookie } from '@/utils/auth'
const initUserInfo = {
  // name: "",
  // role: "",
  // avatar:"",
  cookie: getCookie(),
  // token
}
export default function user(state = initUserInfo, action) {
  console.log('action', action)

  console.log(action.type === types.USER_SET_COOKIE)
  switch (action.type) {
    case types.USER_SET_COOKIE: {
      console.log('设置token', state)
      return {
        ...state,
        cookie: action.cookie,
      }
    }

    case types.USER_REMOVE_COOKIE: {
      console.log(state)
      return {
        ...state,
        cookie: action.cookie,
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
