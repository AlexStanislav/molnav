import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import EventBus from './assets/js/EventBus'

Vue.config.productionTip = false

Vue.prototype.$isDev = window.webpackHotUpdate !== undefined
Vue.prototype.$remoteHost = window.location.origin + window.location.pathname
window.EventBus = new EventBus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
