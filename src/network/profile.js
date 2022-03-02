import axios from "axios";

export function getData() {
  return axios.get('http://192.168.1.199:8000/profile',{
    withCredentials:true // 设置axios允许携带cookie
  })
}
