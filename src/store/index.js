import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state"
import mutations from "./mutations"
// 让Vue使用vuex插件
Vue.use(Vuex)
//导出使用 new Vuex.Store创建的仓库
export default new Vuex.Store({  
    state:{
        city:"上海",
    },
    actions: {  
        changeCity(ctx, city) {
            //使用ctx拿到commit方法,进而使用mutation中的changeCity方法
            ctx.commit("changeCity",city);
        }
    },
    mutations:{
        changeCity(state,city){
            state.city=city;
        }
    }
    // getters: {
    //     doubleCity(state) {
    //         return state.city + ' ' + state.city
    //     }
    // }
})