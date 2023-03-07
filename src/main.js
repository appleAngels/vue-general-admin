import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'
import router from './router'
import request from '@/utils/request'

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.request = request

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
