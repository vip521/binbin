// 导入vue.js核心库
import Vue from 'vue'
import Vuex from 'vuex'
// 导入状态state
import state from './state'
// 导入修改状态的方法
import mutations from './mutations'
// 导入getters
import getters from './getters'
// 导入actions
import actions from './actions'
Vue.use(Vuex)

const store = new Vuex.Store({
    // plugins: [createPersistedState()],
    //共享状态：类似组件data数据源
    state,
    // 修改状态的方法：类似与组件methods方法
    mutations,
    // getters 类似于组件中的计算属性，用来处理state状态值的
    getters,
    // actions 类似于 mutations 用来创建方法，只不过不处理状态值，调用mutations中的方法；actions可以处理异步操作，mutations不行
    actions
})

//   导出存储的store对象,给main.js使用
export default store;