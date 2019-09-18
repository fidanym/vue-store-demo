import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './plugins/Auth.js'
import client from './api/mock/index.js'

Vue.use(Auth)
Vue.use(Vuex)

const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'
const SET_USER = 'SET_USER'
const REMOVE_USER = 'REMOVE_USER'
const SET_CUSTOMERS = 'SET_CUSTOMERS'

export default new Vuex.Store({
  state: {
    isLoggedIn: Vue.auth.loggedIn(),
    isNavOpen: false,
    currentUser: null,
    customers: null,
    isLoading: false
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
    },
    toggleNav (state) {
      state.isNavOpen = !state.isNavOpen
    },
    toggleLoading (state) {
      state.isLoading = !state.isLoading
    },
    [SET_USER] (state, user) {
      state.currentUser = user
    },
    [REMOVE_USER] (state) {
      state.currentUser = null
    },
    [SET_CUSTOMERS] (state, customers) {
      state.customers = customers
    }
  },
  actions: {
    login ({ commit }, credentials) {
      commit(LOGIN)

      return new Promise(function (resolve, reject) {
        Vue.auth.logIn(credentials.username, credentials.password)
            .then(user => {
              commit(LOGIN_SUCCESS)
              sessionStorage.setItem('currentUser', JSON.stringify(user))
              commit(SET_USER, user)
              resolve()
            })
            .catch(() => {
              reject()
            })
      })

    },
    logout ({ commit }) {
      Vue.auth.destroyToken()
      sessionStorage.removeItem('currentUser')
      commit(LOGOUT)
      commit(REMOVE_USER)
    },

    toggleNav( {commit} ) {
      commit('toggleNav')
    },

    loadCustomers: ( {commit} ) => {
      commit(SET_CUSTOMERS, 'loading');

      client.fetchCustomers()
          .then(customers => {
            commit(SET_CUSTOMERS, customers);
          })
    }
  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn
    },

    isNavOpen: state => {
      return state.isNavOpen
    },

    currentUser: state => {
      return state.currentUser
    },

    customers: state => {
      return state.customers
    },

    isLoading: state => {
      return state.isLoading
    }
  }
})
