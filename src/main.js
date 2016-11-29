// import Vue from 'vue'
// import App from './App.vue'
//
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

import Vue from 'vue'
import VueRouter from 'vue-router'
import routeConfig from './router/index'

Vue.use(VueRouter)

const router = new VueRouter()
router.map(routeConfig)
const App = Vue.extend(require('./app.vue'))
router.start(App, '#app')
