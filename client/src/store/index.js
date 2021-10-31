import { createStore } from 'vuex'
// const state = {
//   user: localStorage.getItem('accesstoken'),
// };
// import AuthService from "../services/AuthServices";

// const user = JSON.parse(localStorage.getItem('accesstoken'));
//const initialState = user ? { status: { loggedin: true }, user } : { status: { loggedin: false }, user: null };

export default createStore({
  state: {
    user: null,
    token: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
  },

  actions: {

  },
  getters: {
    isloggedin(state) {
      return !!state.token;
    }
  },
})
