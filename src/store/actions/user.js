import * as types from '../action-types'

export const setUserCookie = (cookie) => {
  return {
    type: types.USER_SET_COOKIE,
    cookie,
  }
}
