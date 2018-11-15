import Vue from 'vue'
import Router from 'vue-router'
import notFound from '@/components/404.vue'
// import login from '@/page/login'
// import nav from '@/page/nav/index'
import home from '@/page/home'
Vue.use(Router)

const view = name => () => import(`@/page/${name}/index.vue`)
const nav = view('nav') // nav路径
const login = view('login')

export default new Router({
  routes: [
    {
      path: '/nav',
      name: 'nav',
      component: nav,
      meta: {
        title: '导航'
      }
    },
    {
      path: '/login',
      name: '/login',
      component: login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '*',
      name: '',
      component: notFound
    },
    {
      path: '/',
      name: '首页',
      component: home,
      meta: {
        title: '首页'
      }
    }
  ]
})
