/**
 * Created by yinshipeng on 2018/1/19
 */
import _ from 'lodash'
/**
 * 非空判断，由于_.Empty([Number|Boolean])为判断为true,故处理一下。
 * @param arg
 * @returns {boolean}
 */
export function isNotEmpty (arg) {
    if(!_.isNaN(arg) && _.isNumber(arg)){
        return true
    }else if(_.isBoolean(arg)){
        return true
    }
    return !_.isEmpty(arg)
}

/**
 * 是否是字符串
 * @param arg
 * @returns {*}
 */
export function isString (arg) {
    return _.isString(arg)
}

/**
 * 是否是对象
 * @param arg
 * @returns {*}
 */
export function isObject (arg) {
    return _.isObject(arg)
}