/**
 * Created by 30411 on 2016/11/29.
 */
import app from '../App.vue'
import right from '../components/rigth.vue'
import login from '../components/login/login.vue'


const routes =  [
        { path: '/',
            component: app,
            children: [{
                name: 'right',
                path: 'right/:type/:page',
                component: right
            },{
                name:'login',
                path:'/login',
                component:login
            }]
        },
        {
            path: '*',
            redirect: '/'
        }
    ]

export default routes