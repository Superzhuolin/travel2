import Vue from 'vue'
import App from './App.vue'
import router from "./router"
//初始化页面
import './assets/styles/reset.css'
// 解决像素边框问题
import './assets/styles/border.css'
//解决移动端300毫秒点击延迟问题
import fastClick from 'fastclick'
// 引入iconfont图标
import './assets/styles/iconfont.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
 