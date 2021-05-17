import { AUTH_SET_COOKIE } from '../action-types'
const initState = {
  // token: '',
}
export default function auth(state = initState, action) {
  switch (action.type) {
    case AUTH_SET_COOKIE: {
      console.log(action)
      return {
        ...state,
        token: action.role,
      }
    }
    default:
      return state
  }
}
