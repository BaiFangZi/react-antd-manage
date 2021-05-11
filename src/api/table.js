import { request } from '../utils/axios'

export const queryTableData = (params) =>
  request({
    url: '/queryTableData',
    method: 'get',
    params,
  })
