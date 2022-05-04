import { request } from './request'
import { localBaseUrl } from './urls'

export function register(userId, password, re_password) {
  return request({
    baseURL: localBaseUrl,
    url: '/register',
    method: 'post',
    data: {
      userId,
      password,
      re_password
    },
    withCredentials: true // 设置axios允许携带cookie
  })
}
