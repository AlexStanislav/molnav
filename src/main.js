import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$isDev = window.webpackHotUpdate !== undefined
Vue.prototype.$remoteHost = window.location.origin + window.location.pathname

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
