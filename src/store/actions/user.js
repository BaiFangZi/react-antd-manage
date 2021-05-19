import * as types from '../action-types'

export const setUserCookie = (cookie) => {
  return {
    type: types.USER_SET_COOKIE,
    cookie,
  }
}
export const removeUserCookie = () => {
  return {
    type: types.USER_REMOVE_COOKIE,
  }
}
