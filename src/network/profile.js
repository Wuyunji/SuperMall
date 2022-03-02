import axios from "axios";
import { localBaseUrl } from './urls'

export function getData() {
  return axios.get(`http://${localBaseUrl}/profile`,{
    withCredentials:true // 设置axios允许携带cookie
  })
}
