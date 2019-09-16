import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './plugins/Auth.js'
import client from './api/mock/index.js'

Vue.use(Auth)
Vue.use(Vuex)

const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'

export default new Vuex.Store({
  state: {
    isLoggedIn: Vue.auth.loggedIn()
  },
  mutations: {
    [LOGIN] (state) {
      state.pending = true
    },
    [LOGIN_SUCCESS] (state) {
      state.isLoggedIn = true
      state.pending = false
    },
    [LOGOUT] (state) {
      state.isLoggedIn = false
    }
  },
  actions: {
    login ({ commit }, credentials) {
      commit(LOGIN)

      return new Promise(function (resolve, reject) {
        Vue.auth.logIn(credentials.username, credentials.password)
            .then(() => {
              resolve()
              commit(LOGIN_SUCCESS)
            })
            .catch(() => {
              reject()
            })
      })

    },
    logout ({ commit }) {
      Vue.auth.destroyToken()
      commit(LOGOUT)
    }
  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn
    }
  }
})
