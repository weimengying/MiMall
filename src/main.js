import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'

// const mock = true
Vue.use(VueLazyload, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

// 根据前端的跨域方式做调整 /a/b :/api/a/b=> /a/b
axios.defaults.baseURL = 'http://mall-pre.springboot.cn'
axios.defaults.timeout = 8000
// 接口错误拦截
axios.interceptors.response.use(function (response) {
  const res = response.data
  if (res.status === 0) { // 成功
    return res.data
  } else if (res.status === 10) { // 未登录
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
