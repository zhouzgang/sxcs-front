/**
 * Created by 30411 on 2016/12/12.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'

//应该是域名？？？？？？
const API_ROOT = process.env.API_ROOT
// const API_ROOT = 'http://localhost:8000'

Vue.use(VueResource)

Vue.http.options.crossOrigin = true
Vue.http.options.xhr = {withCredentials: true}
Vue.http.options.emulateJSON = true

Vue.http.interceptors.push((request, next) => {
    next((response) => {
        console.log(response)
        if (response.status === 401) {
            localStorage.removeItem('token')
        }
        return response
    })
})

export const Auth = Vue.resource(API_ROOT + '/login')