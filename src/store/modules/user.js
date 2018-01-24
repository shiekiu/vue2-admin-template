import login from '../../api/login'
const user = {
  state: {
    name: '',
    token: ''
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    }
  },
  actions: {
    loginIn ({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          resolve(response.data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    loginOut ({ commit }) {
      commit('SET_TOKEN', '')
      commit('SET_NAME', '')
    },
    setToken ({ commit }, token) {
      commit('SET_TOKEN', token)
    },
    setName ({ commit }, name) {
      commit('SET_NAME', name)
    }
  }
}
export default user
