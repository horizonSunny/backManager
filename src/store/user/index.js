import { userLogin } from '@/api/index.js'
import { reject } from 'q'
const defaultAddress = {
  'area': '',
  'city': '',
  'detailAddress': '',
  'fullName': '',
  'isDefault': 0,
  'phone': '',
  'province': ''
}
const user = {
  state: {
    userData: {}
  },
  mutations: {
    SET_USER: (state, userInfo) => {
      state.userData = userInfo
    }
  },
  actions: {
    // 登录成功
    userlogin ({ commit }, params) {
      return new Promise((resolve,reject) => {
        userLogin(params).then(
          (data) => {
            if (data.code === 1) {
              commit('SET_USER', data.data)
            }
            resolve(data)
          },
          error => {
            reject(error)
          }
        )
      })
    },
    logout ({ commit }) {
      return new Promise((resolve) => {
        commit('SET_USER', {})
        resolve()
      })
    }
  }
}
export default user
