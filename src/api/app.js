import { request } from '../utils/axios'

export const login = (data) =>
  request({
    url: '/api/login',
  })
