import axios from 'axios'
import { localBaseUrl } from './urls'

export function register(userId, password, re_password) {
  return axios.post(`http://${localBaseUrl}/register`, {
    userId,
    password,
    re_password
  }, {
    withCredentials: true // 设置axios允许携带cookie
  })
}
