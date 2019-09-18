import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from './components/Auth/Auth'
import Login from './components/Auth/Login.vue'
import Register from './components/Auth/Register.vue'
import Home from './components/Home.vue'
import Customers from "./components/Customers/Customers";

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
      redirect: '/auth/login',
      children: [
        {
          path: 'login',
          name: 'login',
          component: Login,
          meta: {
            requiresGuest: true
          }
        },
        {
          path: 'register',
          name: 'register',
          component: Register,
          meta: {
            requiresGuest: true
          }
        }
      ]
    },
    {
      path: '/customers',
      name: 'customers',
      component: Customers,
      meta: {
        requiresAuth: true
      }
    }
  ]
})
