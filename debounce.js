/**
 * 防抖
 * 持续触发事件，在事件触发 delay ms 后才执行，如果在一个事件触发的 delay ms 内又触发了这个事件，那就以新的事件的时间为准， delay ms 后才执行。
 * @param fun 要执行的函数
 * @param delay 延迟时间
 */
function debounce(fun, delay) {
    var timeout;
    return function() {
      var context = this;
      var args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        fun.apply(context, args);
      }, delay);
    }
  }