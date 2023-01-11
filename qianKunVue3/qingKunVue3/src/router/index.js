/*
 * @Author: cc ‘2327506380@qq.com’
 * @Date: 2023-01-10 16:00:53
 * @LastEditors: cc ‘2327506380@qq.com’
 * @LastEditTime: 2023-01-10 18:21:02
 * @FilePath: \qingKunVue3\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
console.log(1);
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    base: window.__POWERED_BY_QIANKUN__ ? '/QingKun/qinKunVue3/' : '/',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: AboutView
        }
    ]
});

export default router;
