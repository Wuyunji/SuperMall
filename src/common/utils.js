// 日期格式化
export function formatDate(date, format) {
  var o = {
    "M+": date.getMonth() + 1,                 //月份   
    "d+": date.getDate(),                    //日   
    "h+": date.getHours(),                   //小时   
    "m+": date.getMinutes(),                 //分   
    "s+": date.getSeconds(),                 //秒   
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
    "S": date.getMilliseconds()             //毫秒   
  };
  if (/(y+)/.test(format))
    format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(format))
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return format;
}

// debounce 防抖
export function debounce(fn, delay) {
  let timer = null
  return function (...args) {
    let context = this
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, delay);
  }
}

// trottle 节流
export function trottle(fn, delay) {
  let timer = null
  return function (...args) {
    let context = this
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(context, args)
        clearTimeout(timer)
        timer = null
      }, delay);
    }
  }
}
