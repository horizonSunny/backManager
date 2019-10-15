import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import app from './app'
import getters from './getter.js'
Vue.use(Vuex)

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    app
  },
  getters
})

export default store
