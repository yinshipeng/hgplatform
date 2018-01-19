/**
 * Created by yinshipeng on 2016/11/4.
 */
import http from './http'

/**
 * 登陆操作
 * @param params
 * @returns {*}
 */
export function login (params) {
    const url = '/login'
    return http.post(url, params)
}

