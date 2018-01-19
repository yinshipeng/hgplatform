/**
 * 过滤器
 */

/**
 * 元和万元转换，默认是元转换成万元
 * @param num
 * @param flag
 * @returns {*}
 */
function yuanTransverterTenThousandYuanFilter(num, flag = false) {
  if (isNaN(num)) return ''
  if (!flag) {
    num = num / 10000
  } else {
    num = num * 10000
  }
  return num
}

/**
 * 插件必须有一个install(Vue,options)方法，其中options可选
 * @param Vue
 */
const install = function (Vue) {
  Vue.filter('yuanTransverterTenThousandYuanFilter', yuanTransverterTenThousandYuanFilter)
}

export default install
