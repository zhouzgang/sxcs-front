/**
 * Created by 30411 on 2016/12/6.
 */
import * as API from './../api'
import * as types from './mutation-type'

export function login ({commit}, params) {
    return API.Auth.save(params)
        .then((response) => {
            console.log("login");
            commit(types.AUTH_LOGIN_SUCCESS, response.body)
            return response
        })
        .catch((response) => {
            console.log("error");
            commit(types.AUTH_LOGIN_FAIL, response.body)
            return Promise.reject(response)
        })
}