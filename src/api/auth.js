import { request } from '../utils/axios'

export const reqLoginIn = (data) =>
  request({
    url: '/loginIn',
    method: 'post',
    data,
  })

export const reqLoginOut = (data) =>
  request({
    url: '/loginOut',
    method: 'post',
    data,
  })
