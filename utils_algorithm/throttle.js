/**
 * 
 * @param {*} fn 
 * @param {*} delay 
 */

//时间戳
function throttleDate(fn,delay) {
  const startDate = Date.now()
  return function () {
    const context = this;
    const args = arguments;
    const currentDate = Date.now()
    if(currentDate - startDate >= delay) {
      fn.apply(context,args);
      startDate = Date.now();
    }
  }  
}


//定时器
function throttleTimer(fn,delay) {
  const timer = null ;
  return function () {
    const context = this;
    const args = arguments;
    if(!timer) {
      timer = setTimeout(function() {
        fn.apply(context,args);
        timer = null
      },delay);
    }
  }
}

//时间戳 + 定时器
function throttleDateTimer(fn,delay) {
  const startDate = Date.now();
  const timer = null;
  return function () {
    const context = this;
    const args = arguments;
    const cureentDate = Date.now();
    let remaining = delay - (cureentDate + startDate);
    clearTimeout(timer);
    if(remaining<=0) {
      fn.apply(context,args);
      startDate = Date.now();
    }else {
      timer = setTimeout(fn,remaining)
    }
  }
}