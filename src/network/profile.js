import { request } from './request'
import { localBaseUrl } from './urls'

export function getData() {
  return request({
    baseURL: localBaseUrl,
    url: '/profile',
    withCredentials: true // 设置axios允许携带cookie
  })
}
