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

    if(false){  //是否登陆的判断条件
        return next({ path: '/login' })
    }
    next()
})

export default router