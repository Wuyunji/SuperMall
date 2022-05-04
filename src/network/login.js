import { request } from './request'
import { localBaseUrl } from './urls'

export function verify(userId, password) {
  return request({
    baseURL: localBaseUrl,
    url: '/login',
    method: 'post',
    data: {
      userId,
      password
    },
    withCredentials: true // 设置axios允许携带cookie
  })

}
