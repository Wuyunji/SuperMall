import axios from "axios";
import { localBaseUrl } from './urls'

export function verify(userId, password) {
  return axios.post(`http://${localBaseUrl}/login`, {
    userId,
    password
  }, {
    withCredentials: true // 设置axios允许携带cookie
  })
}
