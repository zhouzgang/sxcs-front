import Vue from 'vue'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
// import routeConfig from './route-config'
// import myFooter from './components/login/my-footer.vue'
import right from './components/rigth.vue'
Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/',
            component: app,
            children: [{
                name: 'right',
                path: 'right/:type/:page',
                component: right
            }]
        }
    ]
})

new Vue({ router }).$mount('#app')
