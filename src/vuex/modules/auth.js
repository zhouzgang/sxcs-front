/**
 * Created by 30411 on 2016/12/12.
 */
import * as types from './../mutation-type'

var localStorage = window.localStorage

const state = {
    token: localStorage.getItem('token') || ''
}

const mutations = {
    [types.AUTH_LOGIN_SUCCESS] (state, data) {
        state.token = data.token
        localStorage.setItem('token', data.token)
    },
    [types.AUTH_LOGIN_FAIL] (state, err) {
        console.log("aheeeeee")
        state.token = ''
        localStorage.setItem('token', '')
    }
}

export default {
    state,
    mutations
}