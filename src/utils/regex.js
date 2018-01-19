/**
 * 手机号验证
 * @param str
 * @returns {boolean}
 */
function isMobile(str) {
  if (str) {
    return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[567])[0-9]{8}$/.test(str.trim())
  }
}

function isTelephone (str) {
  if (str) {
    return /^\d{3,4}-\d{7,8}$/.test(str.trim())
  }
}

/**
 * 仅校验11位手机号
 * @param str
 */
function isMobile2 (str) {
  if (str) {
    return /^(0|86)?1\d{10}$/.test(str.trim())
  }
}

/**
 * 只包含中文字符
 * @param str
 * @returns {boolean}
 */
function isChinese (str) {
  if (str) {
    return /^[\u4e00-\u9fa5]+$/.test(str.trim())
  }
}

/**
 * 邮箱验证
 * @param str
 * @returns {boolean}
 */
function isEmail (str) {
  if (str) {
    return /\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/.test(str.trim())
  }
}

/**
 * 标准名称规则：含中文、英文、数字
 * @param str
 * @returns {boolean}
 */
function isNormName(str) {
  if (str) {
    return /^[a-zA-Z0-9\u4e00-\u9fa5]+$/.test(str.trim())
  }
}

/**
 * 标准名称规则：含中文、英文
 * @param str
 * @returns {boolean}
 */
function isRealName(str) {
  if(str){
    return /^[a-zA-Z\u4e00-\u9fa5]+$/.test(str.trim())
  }
}

/**
 * 登陆密码验证
 * 分为四级，(6-20位)大写字母，小写字母，数字，符号（非 \s）>2
 * @param str
 * @returns {number}
 */

function registerPassWord(str) {
  if (str) {
    var val = 0;
    if (!/^[\S]{6,20}$/.test(str.trim())) return 0;
    if (/\d+/.test(str.trim())) val++;
    if (/[a-z]+/.test(str.trim())) val++;
    if (/[A-Z]+/.test(str.trim())) val++;
    if (/[\W_]+/.test(str.trim())) val++;
    return val;
  }
}

/**
 * 身份证验证
 * @param str
 * @returns {boolean}
 */
function isIdCard (str) {
  if (str) {
    return /^(\d{17}[\d|X|x])$/.test(str.trim())
  }
}

function strangeId (str) {
  if (str) {
    return /^[a-zA-Z0-9]{15}$|^[a-zA-Z0-9]{18}$/.test(str.trim())
  }
}

/**
 * 社会统一信用代码验证
 * @param str
 * @returns {boolean}
 */
function isSocialCreditCode(str) {
  if (str) {
    return /^[A-Z\d]{18}$/.test(str);
  }
}

/**
 * 验证数字
 * @param str
 * @returns {boolean}
 */
function isNumber(str) {
  if (str) {
    return /^\d+(\.\d{1,2})?$/.test(str.trim())
  }
}

/**
 * 验证正整数
 * @returns {boolean}
 */
function isPositiveNumer(str) {
  if (str) {
    return /^[1-9]\d*$/.test(str.trim())
  }
}

/**
 * 判断是否为小数, 限定4位
 * @param str
 */
function isDecimals(str) {
  if (str) {
    return /^0\.[\d]{1,4}$/.test(str.trim())
  }
}

/**
 * 百分数验证（利率、收益率）
 * @param str
 * @returns {boolean}
 */
function isPercent(str) {
  if (str) {
    return /^(([1-9]\d?)|0)(\.\d{1,2})?$/.test(str)
  }
}
/**
 *  百分数验证 大于0
 * @param str
 * @returns {boolean}
 */
function isRate(str) {
  if (str) {
    return /^(?!(0+(\.0+)?)$)(([1-9]\d?|0)(\.\d{1,2})?)$/.test(str)
  }
}


/**
 * 判断金额只能为数字,限定小数点前9位，小数点后2位,并且大于0
 * @param str
 * @returns {boolean}
 */
function isMoney(str) {
  if (str) {
    return /^(?!(0+(\.0+)?)$)(([1-9]\d{0,8})|0)(\.\d{1,2})?$/.test(str);
  }
}

/**
 * 检测是否是 el-date-picker 输出时间格式
 * @param str
 * @returns {boolean}
 */
function isELemTime(str) {
  if (str) {
    return /(.*GMT+0800 \(CST\))|(.*T[\d:\.]+Z)$/.test(str);
  }
}

/**
 * 检验文件名称后缀名,是否是 excel
 * @param str
 * @returns {boolean}
 */
function isExcel(str) {
  if (str) {
    return /.+\.xl((s)|(sx))$/.test(str);
  }
}

/**
 *  检验文件名称后缀名,是否是 word
 * @param str
 * @returns {boolean}
 */
function isWord(str) {
  if (str) {
    return /.+\.doc(x)?$/.test(str);
  }
}

/**
 * 检验文件名称后缀名,是否是 pdf
 * @param str
 * @returns {boolean}
 */
function isPdf(str) {
  if (str) {
    return /.+\.pdf$/.test(str);
  }
}

/**
 * 校验字母数字下划线
 * @param str
 * @returns {boolean}
 */
function isURL (str) {
  if (str) {
    return /^[-a-zA-Z0-9]*$/.test(str.trim())
  }
}

function isURL2 (str){
  if(str){
    return /^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/.test(str.trim())
  }
}

export default{
  isMobile,
  isTelephone,
  isMobile2,
  isChinese,
  isEmail,
  isNormName,
  isRealName,
  isIdCard,
  strangeId,
  isSocialCreditCode,
  registerPassWord,
  isNumber,
  isPositiveNumer,
  isDecimals,
  isPercent,
  isRate,
  isMoney,
  isExcel,
  isELemTime,
  isWord,
  isPdf,
  isURL,
  isURL2
}
