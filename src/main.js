import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazy from 'vue-lazyload'

/* eslint-disable no-new */

Vue.use(VueLazy, {
  loading: require('assets/image/logo.png')
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
