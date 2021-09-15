import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      username: '',
      email: '',
      department: '',
      isAdmin: '',
    },
    token: ''
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  mutations: {
    LOGIN(state, data) {
      state.user.username = data.user.username
      state.user.email = data.user.email
      state.user.department = data.user.department
      state.user.isAdmin = data.user.isAdmin
      state.token = data.token

    },
    LOGOUT(state) {
      state.token = "";
      state.username = "";
      state.isAdmin = "";
    },
  },
  getters: {
    getUser: state => state.user,
    getToken: state => state.token,
    getAdmin: state => state.isAdmin,
  },
    actions: {},
    modules: {}
})
