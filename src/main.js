import Vue from 'vue'
import vueResource from 'vue-resource'
import router from './router/index'
import store from 'src/vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './assets/styles/body.css'

Vue.use(vueResource)
Vue.use(ElementUI)

new Vue({ store , router }).$mount('#app');
