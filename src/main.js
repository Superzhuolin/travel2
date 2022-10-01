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
//轮播效果
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
//vuex
import store from './store'
//解决机型不同无法支持promise的bug
import "babel-polyfill"


Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
 