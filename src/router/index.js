'use strict'
import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
/* Layout */
import Layout from '../views/layout/index'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: ''             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/', component: _import('login/index'), hidden: true },
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/401', component: _import('errorpage/401'), hidden: true },
  { path: '/404', component: _import('errorpage/404'), hidden: true },
  { path: '/dashboard', title: '主頁', component: Layout, hidden: true },
  { path: '/dashboard',
    name: '主頁',
    title: '主頁',
    icon: 'icon iconfont icon-home',
    component: Layout,
    hidden: false,
    children: [
      { path: 'index', name: '主頁', title: '主頁', component: _import('dashboard/index'), meta: { title: '帳號管理', requireAuth: true } }
    ]
  },
  { path: '/account',
    name: '帳號管理',
    title: '帳號管理',
    icon: 'icon iconfont icon-account',
    component: Layout,
    hidden: false,
    children: [
      { path: 'account', name: '帳號管理', title: '帳號管理', component: _import('account/index'), meta: { title: '帳號管理', requireAuth: true } },
      { path: 'password', name: '更改密碼', title: '更改密碼', component: _import('password/index'), meta: { title: '帳號管理', requireAuth: true } }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
const router = new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.user.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})
export default router
