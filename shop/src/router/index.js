import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        footer: true
      }
    },
    {
      path: '/search/:keyword',
      component: Search,
      name: 'search',
      meta: {
        footer: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        footer: false
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        footer: false
      }
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
