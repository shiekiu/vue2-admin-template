import { loginIn } from '../../api/login'
const user = {
  state: {
    accountId: '',
    accountName: '',
    accountAvatar: '',
    nickName: '',
    token: ''
  },
  mutations: {
    SET_ACCOUNT_ID: (state, accountId) => {
      state.accountId = accountId
    },
    SET_ACCOUNT_NAME: (state, accountName) => {
      state.accountName = accountName
    },
    SET_ACCOUNT_AVATAR: (state, accountAvatar) => {
      state.accountAvatar = accountAvatar
    },
    SET_NICKNAME: (state, nickName) => {
      state.nickName = nickName
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    loginIn ({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginIn(username, userInfo.password).then(response => {
          resolve(response.data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    loginOut ({ commit }) {
      commit('SET_ACCOUNT_ID', '')
      commit('SET_ACCOUNT_NAME', '')
      commit('SET_ACCOUNT_AVATAR', '')
      commit('SET_NICKNAME', '')
      commit('SET_TOKEN', '')
    },
    setAccountId ({ commit }, name) {
      commit('SET_ACCOUNT_ID', name)
    },
    setAccountName ({ commit }, name) {
      commit('SET_ACCOUNT_NAME', name)
    },
    setAccountAvatar ({ commit }, name) {
      commit('SET_ACCOUNT_AVATAR', name)
    },
    setNickName ({ commit }, name) {
      commit('SET_NICKNAME', name)
    },
    setToken ({ commit }, token) {
      commit('SET_TOKEN', token)
    }
  }
}
export default user
