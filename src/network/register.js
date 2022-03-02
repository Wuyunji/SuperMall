import axios from 'axios'

export function register(userId, password, re_password) {
  return axios.post('http://192.168.1.199:8000/register', {
    userId,
    password,
    re_password
  }, {
    withCredentials: true // 设置axios允许携带cookie
  })
}
