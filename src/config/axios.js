import axios from 'axios'
import { baseUrl } from './global'
/**
 * 请求接口日志记录
 */
/* eslint-disable */
function _reqlog(req) {
  if (process.env.NODE_ENV === 'development') {
    console.log('请求地址：' + req.url, req.data || req.params)
    console.log('请求信息：' + req)
  }
  //TODO 调接口异步写入日志数据库
}
/**
 * 响应接口日志记录
 */
function _reslog(res) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`${res.config.url}响应结果：`, res)
  }
}

// 创建自定义接口服务实例
const http = axios.create({
  baseURL: baseUrl,
  timeout: 6000,
  // #ifdef H5
  withCredentials: true,
  // #endif
  headers: {
    'Content-Type': 'application/json',
    authorization:
      'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOjEzLCJ1c2VyX2lkIjo0LCJ1c2VyX25hbWUiOiJzdW55dSIsInNjb3BlIjpbInNlcnZlciJdLCJ1c2VyVHlwZSI6IjEiLCJleHAiOjE1ODA2MDQ3ODUsImRlcHRfaWQiOjAsImF1dGhvcml0aWVzIjpbIlJPTEVfIl0sImp0aSI6ImQ3OTlmNmNiLTg4YzAtNDNmYS1hNzkyLWI4YzI4NDE5NzE0NyIsImNsaWVudF9pZCI6InN5c3RlbSIsInVzZXJuYW1lIjoic3VueXUifQ.GiaNarcdR9dn22Zr6r99ft6bnIgYGNbPN3dYe95wUFw'
  },
  withCredentials: false
})
// 拦截器 在请求之前拦截
http.interceptors.request.use(config => {
  _reqlog(config)
  return config
})

// 拦截器 在请求之后拦截
http.interceptors.response.use(
  response => {
    return response.data
    // code...
  },
  error => {
    // 如果token值无效，让跳转登陆页面
    if (error.response.status === 401) {
      // uni.reLaunch({
      //   url: '/pages/login/index'
      // })
    }
  }
)

export default http
