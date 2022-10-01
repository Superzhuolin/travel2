import Vue from 'vue'
import Router from 'vue-router'
import Home from "./pages/home/Home.vue"
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/city',
            name: 'City',
            component: City
        }, {
            path: '/detail/:id',//动态路由,携带参数:id
            name: 'Detail',
            component: Detail
        },
    ],// 即每次页面切换时始终回到最顶部
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})