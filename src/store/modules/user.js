import login from '../../api/login'
const user = {
  state: {
    name: ''
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
    LoginIn ({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response.data
          console.log(data)
          if (data.statuscode === 200) {
            commit('SET_TOKEN', data.bean.token)
            commit('SET_NAME', data.nickname)
          } else {
            commit('SET_TOKEN', '')
            commit('SET_NAME', '')
          }
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
export default user
