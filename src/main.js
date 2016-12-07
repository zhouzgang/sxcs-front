import Vue from 'vue'
import vueResource from 'vue-resource'
import router from './router/index'
import store from './vuex/index'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './assets/styles/body.css'

import {mapGetters, mapActions} from 'vuex'

Vue.use(vueResource)
Vue.use(ElementUI)


new Vue({router, store}).$mount('#app');
