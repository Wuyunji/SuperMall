import axios from "axios";

const baseURL = 'http://152.136.185.210:7878/api/hy66'
const timeout = 10000

export function request(config){
  const instance = axios.create({
    baseURL,
    timeout
  })
  
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })
  
  return instance(config)
}
