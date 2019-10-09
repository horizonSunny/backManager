import axios from 'uni-axios'
import { baseUrl, channelNo } from './global'
/**
 * 请求接口日志记录
 */
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
    authorization: channelNo
  }
})
// 拦截器 在请求之前拦截
http.interceptors.request.use(config => {
  // code...
  // let accsess_token = storage.getSync('access_token')
  // if (accsess_token) {
  //   config.headers.authorization = accsess_token
  // }
  _reqlog(config)
  return config
})

// 拦截器 在请求之后拦截
http.interceptors.response.use(
  response => {
    // response.code代表token失效
    // console.log('response.code_', response.data.code)
    // if (response.data.code === 2) {
    //   storage.setSync('access_token', channelNo)
    // }
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
