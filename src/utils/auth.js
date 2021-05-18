import Cookie from 'js-cookie'
const cookieKey = 'app-token'

export const setCookie = (cookie) => {
  Cookie.set(cookieKey, cookie)
}
export const getCookie = () => {
  return Cookie.get('app-token')
}

export const removeCookie = (key) => {
  if (!getCookie(key)) return false
  Cookie.remove(key)
}
