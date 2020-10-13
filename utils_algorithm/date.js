/**
 * 时间日期相关操作
 */

 /**
 * 1.时间格式化
 * 将 2018-09-23T11:54:16.000+0000 格式化成 2018/09/23 11:54:16
 * 可以指定日期和时间分隔符
 * @param datetime 国际化日期格式
 */

export function formatWithSeperator(datetime, dateSeprator, timeSeprator) {
  if (datetime != null) {
    const dateMat = new Date(datetime);
    const year = dateMat.getFullYear();
    const month = dateMat.getMonth() + 1;
    const day = dateMat.getDate();
    const hh = dateMat.getHours();
    const mm = dateMat.getMinutes();
    const ss = dateMat.getSeconds();
    const timeFormat = year + dateSeprator + month + dateSeprator + day + ' ' + hh + timeSeprator + mm + timeSeprator + ss;
    return timeFormat;
  }
}

export function format(datetime) {
  return formatWithSeperator(datetime,'/',':');
}


//2.判断是否是今天
export function isToday(datetime) {
  return datetime.toDateString() === new Date.toDateString();
}


/**
 * 个位数，加0前缀
 * @param {*} number
 * @returns
 */
function addZeroPrefix(number) {
  return number < 10 ? `0${number}`:number
}


/**
 * 3.返回年月日
 * @export
 * @param {Date} date
 * @param {string} [splitor='-']
 * @returns
 */

 export function getDate(date, splitor = '-') {
   const year = date.getFullYear();
   const month = date.getMonth();
   const day = date.getDate();
   return `${year}${splitor}${addZeroPrefix(month)}${splitor}${addZeroPrefix(day)}`
 }

 
 /**
 * 4.返回时分秒/时分
 * @export
 * @param {*} date
 * @param {boolean} [withSecond=false]
 * @returns
 */

export function getTime(date, withSecond = false) {
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return withSecond ? `${addZeroPrefix(hour)}:${addZeroPrefix(minute)}:${addZeroPrefix(second)}` : `${hour}:${addZeroPrefix(minute)}`
}


/**
 * 5.分钟数转为字符串 HH:mm
 * @param fzs
 * @returns {string}
 */

 export function fzsToString(fzs = 0) {
  let h = Math.floor(fzs / 60);
  let m = fzs % 60;
  let name = '';
  if (h < 10) {
    name += '0';
  }
  name += h + ':';
  if (m < 10) {
    name += '0';
  }
  name += m;
  return name;
}


/**
 * 6.分钟数转为字符串 小时:分钟
 * @param fzs
 * @returns {string}
 */

 export function fzsToStringName(fzs = 0) {
  let h = Math.floor(fzs / 60);
  let m = fzs % 60;
  let name = '';
  name += h + '小时';
  name += m+'分钟';
  return name;
}