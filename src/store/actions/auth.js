import * as types from '../action-types'

export const setCookie = (token) => ({
  type: types.AUTH_SET_COOKIE,
  token,
})
