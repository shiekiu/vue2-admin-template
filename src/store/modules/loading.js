'use strict'
const state = {
  loading: false
}
const mutations = {
}
// 事件触发后的逻辑操作
// 参数为事件函数
const actions = {
  LOAD_START () {
    state.loading = true
  },
  LOAD_END () {
    setTimeout(function () {
      state.loading = false
    }, 1000)
  }
}
// 返回改变后的数值
const getters = {
}
export default {
  state,
  mutations,
  getters,
  actions
}
