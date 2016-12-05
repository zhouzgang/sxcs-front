/**
 * Created by 30411 on 2016/11/29.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
    linkActiveClass: 'active',
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    //判断是否登陆
    if(localStorage) return next()
    next({
        path: '/login',
        query: {redirect: to.fullPath }
    })
})

export default router