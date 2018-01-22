'use strict'
import Vue from 'vue'
import Router from 'vue-router'
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
  { path: '/dashboard', title: '主页', component: Layout, hidden: true },
  { path: '/dashboard',
    name: '主页',
    title: '主页',
    icon: 'icon iconfont icon-home',
    component: Layout,
    hidden: false,
    children: [
      { path: 'index', name: '主页', title: '主页', component: _import('dashboard/index') }
    ]
  },
  { path: '/account',
    name: '账户管理',
    title: '账户管理',
    icon: 'icon iconfont icon-account',
    component: Layout,
    hidden: false,
    children: [
      { path: 'account', name: '账户管理', title: '账户管理', component: _import('account/index') },
      { path: 'password', name: '修改密码', title: '修改密码', component: _import('password/index') }
    ]
  }
]
export default new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
