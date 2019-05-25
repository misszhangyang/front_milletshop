import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import IndexPage from '@/components/Index'
import Register from '@/components/register/Register'
import Xiaomi6 from '@/components/page/Xiaomi6'
import ShoppingCart from '@/components/page/ShoppingCart'
import PhoneList from '@/components/page/PhoneList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      meta: {
        title: '商城登录(首页)'
      },
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      meta: {
        title: '商城登录(首页)'
      },
      component: Register
    },
    {
      path: '/IndexPage',
      name: 'IndexPage',
      meta: {
        title: '小米商城'
      },
      component: IndexPage
    },
    {
      path: '/Xiaomi6',
      name: 'Xiaomi6',
      meta: {
        title: '手机详情页'
      },
      component: Xiaomi6
    },
    {
      path: '/ShoppingCart',
      name: '/ShoppingCart',
      meta: {
        title: '购物车'
      },
      component: ShoppingCart
    },
    {
      path: '/PhoneList',
      name: "PhoneList",
      meta: {
        title: '手机列表'
      },
      component: PhoneList
    }
  ]
})
