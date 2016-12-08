/**
 * Created by 30411 on 2016/11/29.
 */
import app from '../App.vue'
import main from '../components/main.vue'

// layout
import head from '../components/layout/head.vue'
import left from '../components/layout/left.vue'
import content from '../components/layout/content.vue'
import menu from '../components/layout/sxcsMenu.vue'

// login
import login from '../components/login/login.vue'
import loginFrom from '../components/login/loginFrom.vue'
import registerFrom from '../components/login/registerFrom.vue'
import QRcode from '../components/login/QRcode.vue'

const routes =  [
    {
        path: '/',
        component: app,
        children: [{
            path: '/',
            components: {
                head: head,
                left: left,
                content: content,
                default: main,
            },
        }]
    },
    {
        path: '/',
        component: login,
        children: [{
            path: 'login',
            component: loginFrom
        },
        {
            path: 'register',
            component: registerFrom
        },
        {
            path: 'qrcode',
            component: QRcode
        }]

    },
    {
        path: '*',
        redirect: '/login'
    }
]

export default routes