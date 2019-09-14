// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Auth from './plugins/Auth.js'
import router from './router'
import store from './store'

Vue.use(Auth)

Vue.config.productionTip = false

router.beforeEach(function (to, from, next) {
  let loggedIn = !!store.getters.isLoggedIn;
  if (to.matched.some(function (record) {
    return record.meta.requiresGuest
  }) && loggedIn) {
    next({
      path: '/'
    })
  } else if (to.matched.some(function (record) {
    return record.meta.requiresAuth
  }) && !loggedIn) {
    next({
      path: '/auth/login',
      query: {redirect: to.fullPath}
    })
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
