/**
 * Created by 30411 on 2016/11/29.
 */
import app from '../App.vue'
import login from '../components/login/login.vue'
import head from '../components/layout/head.vue'
import left from '../components/layout/left.vue'
import content from '../components/layout/content.vue'
import menu from '../components/layout/menu.vue'
import main from '../components/main.vue'

const routes =  [
    {
        path: '/',
        components: {
            head: head,
            left: left,
            content: content,
            default: app
        },
        // children: [{
        //     path: 'main',
        //     components: {
        //         head: head,
        //         left: left,
        //         content: content,
        //         default: main,
        //     },
        // },
        // {
        //     path: 'login',
        //     component: login
        // }]
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '*',
        redirect: '/login'
    }
]

export default routes