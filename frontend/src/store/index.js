import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      username: "",
      email: "",
      department: "",
      isAdmin: "",
    },
    token: "",
    post: {
      UserId: "",
      content: "",
    },
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  mutations: {
    LOGIN(state, data) {
      state.user.username = data.user.username;
      state.user.email = data.user.email;
      state.user.department = data.user.department;
      state.user.isAdmin = data.user.isAdmin;
      state.token = data.token;
    },
    LOGOUT(state) {
      state.token = "";
      state.username = "";
      state.isAdmin = "";
    },
    CREATEPOST(state, data) {
      state.post.content = data.post.content;
    },
  },
  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token,
    getAdmin: (state) => state.isAdmin,
    getPost: (state) => state.post,
  },
  actions: {},
  modules: {},
});
