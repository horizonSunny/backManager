import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'shoppingMall',
        component: () => import('@/views/shoppingMall/index'),
        name: 'shoppingMall'
      },
      {
        path: 'commodity',
        component: () => import('@/views/commodity/index'),
        name: 'commodity'
      },
      {
        path: 'orderForm',
        component: () => import('@/views/orderForm/index'),
        name: 'orderForm'
      },
      {
        path: 'member',
        component: () => import('@/views/member/index'),
        name: 'member'
      },
      {
        path: 'discountCoupon',
        component: () => import('@/views/shoppingMall/index'),
        name: 'discountCoupon'
      }
    ]
  },
  {
    path: '/documentation',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation/index'),
        name: 'Documentation',
        meta: { title: 'Documentation', icon: 'documentation', affix: true }
      }
    ]
  }
]

export const asyncRoutes = []

const createRouter = () =>
  new Router({
    routes: constantRoutes
  })

const router = createRouter()

export default router
