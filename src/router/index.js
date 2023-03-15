import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../pages/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/workbench',
      // component: Home
      name: '工作台',
      iconClass: 'fa fa-users',
      redirect: '/workbench/brewView',
      component: () => import('@/pages/Home'),
      children: [
        {
          path: '/workbench/brewView',
          name: 'brewView',
          iconClass: 'fa fa-list',
          component: () => import('@/pages/workbench/index')
        }
      ]
    },
    {
      path: '/home',
      name: '学生管理',
      // redirect: '/home/student',
      iconClass: 'fa fa-users',
      component: () => import('@/pages/Home'),
      children: [
        {
          path: '/home/student',
          name: 'StudentList',
          iconClass: 'fa fa-list',
          component: () => import('@/pages/students/StudentList')
        },
        {
          path: '/home/workMent',
          name: 'WorkMent',
          iconClass: 'fa fa-list',
          component: () => import('@/pages/students/WorkMent')
        },
        {
          path: '/home/workList',
          name: 'WorkList',
          iconClass: 'fa fa-list',
          component: () => import('@/pages/students/WorkList')
        },
        {
          path: '/home/infoList',
          name: 'InfoList',
          iconClass: 'fa fa-list',
          component: () => import('@/pages/students/InfoList')
        }
      ]
    },
    {
      path: '/home',
      name: '数据中心',
      iconClass: 'fa fa-bar-chart',
      component: () => import('@/pages/Home'),
      children: [
        {
          path: '/home/DataView',
          name: 'DataView',
          iconClass: 'fa fa-list',
          component: () => import('@/pages/dataAnalysis/DataView')
        },
        {
          path: '/home/MapView',
          name: 'MapView',
          iconClass: 'fa fa-list',
          component: () => import('@/pages/dataAnalysis/MapView')
        },
        {
          path: '/home/ScoreMap',
          name: 'ScoreMap',
          iconClass: 'fa fa-list',
          component: () => import('@/pages/dataAnalysis/ScoreMap')
        },
        {
          path: '/home/TravelMap',
          name: 'TravelMap',
          iconClass: 'fa fa-list',
          component: () => import('@/pages/dataAnalysis/TravelMap')
        }
      ]
    },
    {
      path: '/home',
      name: '用户管理',
      iconClass: 'fa fa-users',
      component: () => import('@/pages/Home'),
      children: [
        {
          path: '/home/user',
          name: 'User',
          iconClass: 'fa fa-list',
          component: () => import('@/pages/users/User')
        }
      ]
    },
    {
      path: '/login',
      hidden: true,
      component: () => import('@/pages/Login')
    },
    {
      path: '/',
      redirect: '/login',
      hidden: true,
      component: () => import('@/pages/Login')
    },
    {
      path: '*',
      hidden: true,
      component: () => import('@/pages/NotFound')
    }
  ],
  mode: 'history'
})
