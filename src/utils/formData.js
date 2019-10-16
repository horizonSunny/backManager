import axios from 'axios'
import store from '@/store/index.js'
import router from '@/router'
import { Message } from 'element-ui'
const baseURL = 'http://47.103.158.133/'
// const baseURL = 'https://ijixin.com/'
const initAuthorization = 'Basic c3lzdGVtOnN5c3RlbQ=='
const request = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: initAuthorization
  }
})

request.interceptors.request.use(
  function(config) {
    if (
      store &&
      store.getters.userData &&
      store.getters.userData.access_token
    ) {
      config.headers['Authorization'] =
        store.getters.userData.token_type +
        ' ' +
        store.getters.userData.access_token
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  function(response) {
    if (response && response.data) {
      // 登录失效
      if (response.data.code === 2) {
        store.dispatch('logout').then(() => {
          Message('请重新登录!')
          router.push({ path: 'login' })
          // location.reload()
        })
        return false
      }
      // 未知错误提示全局
      else if (response.data.code === 0) {
        Message(response.data.msg)
        return Promise.reject(response)
      }
      return response.data
    } else {
      return Promise.reject(response)
    }
  },
  function(error) {
    Message('网络请求失败,请检查网络!')
    return Promise.reject(error)
  }
)

export default request
