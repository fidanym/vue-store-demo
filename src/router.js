import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from './components/Auth/Auth'
import Login from './components/Auth/Login.vue'
import Register from './components/Auth/Register.vue'
import Customers from "./components/Customers/Customers";
import Dashboard from './components/Dashboard'
import ProductsView from './components/Products/ProductsView'
import CustomerDetails from './components/Customers/CustomerDetails'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dash',
      component: Dashboard,
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
    },
    {
      path: '/customer/:id',
      name: 'customerDetails',
      component: CustomerDetails,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
      meta: {
        requiresAuth: true
      }
    }
  ]
})
