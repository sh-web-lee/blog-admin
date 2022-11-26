import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入全局icon
import '@/assets/icons'
import '@/assets/css/reset.css'
import '@/assets/font/font.css'
import '@/assets/css/main.css'
import '@/assets/css/theme.css'

// plugins
import moment from 'moment'

Vue.prototype.$moment = moment
Vue.config.productionTip = false
// 自定义按键
Vue.config.keyCodes = {
  v: 86,
  f1: 112,
  // camelCase 不可用
  mediaPlayPause: 37,
  // 取而代之的是 kebab-case 且用双引号括起来
  'media-play-pause': 37,
  up: [38, 87]
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
