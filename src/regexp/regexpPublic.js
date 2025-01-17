/**
 *  @description  是否匹配 提供的正则表达式的规则
 *  @param  {Regexp} regex  正则
 */
export  const  isRule = rule => val => rule.test(val);

/**
 * @desc  是否是合法链接
 */
export const isLink = isRule(
  /((https|http|ftp|rtsp|mms)?:\/\/)(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)/
);
/**
 * @desc 是否为合法邮箱
 */
export const isEMail = isRule(
  /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
);

/**
 * @desc 是否为合法手机号码
 */
export const isTel = isRule(/^(\+?0?86-?)?1(3|4|5|6|7|8|9)\d{9}$/);

/**
 * @desc 是否为合法固话
 */

export const isLandline = isRule(/^(\d{3,4}-)?\d{7,8}$/);

/**
 * @desc 是否为合法身份证
 */
export const isIdCard = isRule(/(^\d{15}$)|(^\d{17}([0-9xX])$)/);

/**
 * @desc 是否为合法QQ
 */
export const isQQ = isRule(/^[1-9][0-9]{4,11}$/);

/**
 * @desc 是否为合法微信
 */
export const isWechat = isRule(/^[a-zA-Z][a-zA-Z0-9_-]{5,19}$/);

/**
 * @desc 是否为邮政编码
 */
export const isPost = isRule(/^[1-9]\d{5}(?!\d)$/);

/**
 * @desc 是否为汉字
 */
export const isCharacters = isRule(/^[\u4e00-\u9fa5]+$/);

/**
 * @desc 将链接参数转为JSON格式返回
 *
 * @export
 * @param {string} url
 * @returns
 */
 export const getParam2Json = (url = location.href) => {
  const search = url.substring(url.lastIndexOf("?") + 1);
  const result = {};
  const reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, (res, $1, $2) => {
    const name = decodeURIComponent($1);
    let val = decodeURIComponent($2);
    val = String(val);
    result[name] = val;
    return res;
  });
  return result;
};

/**
 * @desc  转化为驼峰值
 *
 * @export
 * @param {string} val
 * @returns
 */
 export const camelize = val =>
 val.replace(/[-_]+(.)?/g, (match, item) => (item ? item.toUpperCase() : ""));

/**
* @desc 转化为中划线值
*
* @export
* @param {string} val
* @returns
*/
export const dasherize = val => val.replace(/([A-Z])/g, "-$1").replace(/_+/g, "-").toLowerCase();

/**
 *  @desc 将每个单词的首字母转换为大写
 * 
 * 
 */ 
 export const wordCase = val => val.toLowerCase().replace(/(?:^|\s)\w/g,c=>c.toUpperCase())

 /**
  * @desc 密码长度 6-12 位，由数字、小写字母和大写字母组成，但必须至少包括 2 种字符
  * 
  */
 export const repassword = val => (/(?!^[0-9]{6,12}$)(?!^[a-z]{6,12}$)(?!^[A-Z]{6,12}$)^[0-9a-zA-Z]{6,12}$/g).test(val)