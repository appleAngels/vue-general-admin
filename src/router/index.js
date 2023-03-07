import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../pages/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      // component: Home
      component: () => import('@/pages/Home')
    },
    {
      path: '/login',
      component: () => import('@/pages/Login')
    },
    {
      path: '/',
      redirect: '/login',
      component: () => import('@/pages/Login')
    },
    {
      path: '*',
      component: () => import('@/pages/NotFound')
    }
  ],
  mode: 'history'
})
