import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */

export const constantRoutes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/view/login/index.vue'),
    hidden: true
  },
  // {
  //   path: '/404',
  //   component: () => import('@/view/error-page/404'),
  //   hidden: true
  // },
  // {
  //   path: '/401',
  //   component: () => import('@/view/error-page/401'),
  //   hidden: true
  // },
  {
    path: '',
    component: Layout,
    redirect: 'shoppingMall',
    children: [
      {
        path: '/shoppingMall',
        name: 'shoppingMall',
        component: () => import('@/view/shoppingMall/index')
      },
      {
        path: 'commodity',
        component: () => import('@/view/commodity/index'),
        name: 'commodity'
      },
      {
        path: 'orderForm',
        component: () => import('@/view/orderForm/index'),
        name: 'orderForm'
      },
      {
        path: 'member',
        component: () => import('@/view/member/index'),
        name: 'member'
      },
      {
        path: 'discountCoupon',
        component: () => import('@/view/discountCoupon/index'),
        name: 'discountCoupon'
      },
      {
        path: 'newCoupon',
        component: () => import('@/view/discountCoupon/newCoupon'),
        name: 'newCoupon'
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
