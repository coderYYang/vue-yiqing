import axios from "axios";

const request = axios.create({
  // baseURL: 'http://api.tianapi.com',
  baseURL: 'http://111.231.75.86:8000/api',
  // timeout: 5000
})

// 请求拦截
request.interceptors.request.use(config => {
  return config;
}, err => {
  console.log(err)
})

// 响应拦截
request.interceptors.response.use(res => {
  return res;
}, err => {
  console.log(err);
})

export default request;
