/**
 * Created by yinshipeng on 2017/4/25.
 */
import regex from './regex'
import { isNotEmpty } from './index'

/**
 * 验证金额格式
 * @param rule
 * @param value
 * @param callback
 */
export function validatorByMoney (rule, value, callback) {
    if (isNotEmpty(value)) {
        if (regex.isMoney(value)) {
            callback()
        } else {
            callback(new Error('请输入正确的金额格式,且金额必须大于零'))
        }
    } else {
        callback()
    }
}

