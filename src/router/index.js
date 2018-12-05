import Vue from 'vue';
import Router from 'vue-router';
// import home from '../page/home/index.vue';
import notFound from '../components/pageNotFound.vue';

Vue.use(Router);

const view = name => () => import(`@/page/${name}/index.vue`);
const nav = view('nav'); // nav路径
const login = view('login');

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
            component: view('home'),
            meta: {
                title: '首页'
            }
        }
    ]
});
