import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state"
import mutations from "./mutations"
// 让Vue使用vuex插件
Vue.use(Vuex)
//导出使用 new Vuex.Store创建的仓库
export default new Vuex.Store({  
    state,
    mutations,
    // getters:{
    //     doubleCity(state){
    //         return state.city +" "+ state.city
    //     }
    // }
})