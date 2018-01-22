'use strict'
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import user from './modules/user'
import tagsView from './modules/tags'
Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
// 这里定义初始值
export default new Vuex.Store({
  modules: {
    user,
    tagsView
  },
  plugins: [vuexLocal.plugin]
})
