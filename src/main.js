// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Auth from './plugins/Auth.js'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress/nprogress'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faPowerOff, faUsers, faHome, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUser, faPowerOff, faUsers, faHome, faSpinner);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(NProgress)
Vue.use(Auth)
Vue.config.productionTip = false

// Intercept rerouting and add start loading indicator
router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})


/**
 * Intercept the route change and make sure the user has privilege to go there
 */
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
