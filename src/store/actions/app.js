import * as types from '../action-types'

export const toggleSidebar = (data) => {
  return {
    type: types.APP_TOGGELE_SIDEBAR,
    data,
  }
}
