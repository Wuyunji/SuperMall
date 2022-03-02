import axios from "axios";

export function verify(userId, password) {
  return axios.post('http://192.168.1.199:8000/login', {
    userId,
    password
  }, {
    withCredentials: true // 设置axios允许携带cookie
  })
}
