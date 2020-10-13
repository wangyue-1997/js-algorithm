/**
 * 断言方法，用于验证参数合法性
 */

/**
 * 邮箱
 * @param {*} s
 */

export function isEmail(s) {
  const regex = /^([A-z0-9_-])+@([A-z0-9_-])+((.[A-z0-9_-]{2,3}){1,2})$/;
  return regex.test(s);
}


/**
 * 手机号码
 * @param {*} s
 */

export function isMobile(s) {
  const regex = /^[12][3456789]\d{9}$/;
  return regex.test(s);
}


/**
 * 电话号码
 * @param {*} s
 */

export function isPhone(s) {
  const regex = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
  return regex.test(s);
}

/**
 * URL地址
 * @param {*} s
 */

export function isURL(s) {
  const regex =  /^http[s]?:\/\/.*/; 
  return regex.test(s);
}

/**
 * 判断对象是否是JSON格式
 * @param obj
 * @returns {boolean}
 */

export function isJson(obj){
  return typeof (obj) == 'object' && Object.prototype.toString.call(obj).toLowerCase() == '[object object]' && !obj.length;
}
