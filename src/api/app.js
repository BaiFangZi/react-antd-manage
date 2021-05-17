import { request } from '../utils/axios'

export const loginIn = (data) =>
  request({
    url: '/loginIn',
    method: 'post',
    data,
  })
