import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import Vuex from 'vuex'
// store and router
import store from './store/index'
import router from './router/index'
import http from './config/axios'

Vue.use(Vuex)
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
