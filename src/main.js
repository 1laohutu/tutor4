import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import axios from 'axios'
import store from './store'
import './assets/css/global.css'
import VueAxios from 'vue-axios'
import './assets/icon/iconfont'

axios.defaults.baseURL= 'http://127.0.0.1:8088/'
axios.interceptors.request.use(config =>{
  console.log(config)
  return config
})
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
