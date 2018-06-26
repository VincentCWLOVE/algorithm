/**
 * 节流
 * 持续触发事件，每隔一段时间，只执行一次事件。
 * @param fun 要执行的函数
 * @param delay 延迟时间
 * @param time 在 time 时间内必须执行一次
 */

// 场景： 图片懒加载的时候，持续来回滚动界面

function throttle(fun, delay, time) {
    var context, args;
    var timeout;
    var previous = +new Date();
    return function() {
      var now = +new Date();
      context = this;
      args = arguments;
      clearTimeout(timeout);
      if(now - previous >= time) {
        fun.apply(context, args);
        previous = now;
      } else {
        timeout = setTimeout(fun, delay);
      }
    }
  }

  
/**
 * 计算元素距离文档顶部的高度
 * 通过元素的 offsetTop 属性来计算。我们了解到元素的 offsetTop 属性是相对于一个 position 为 非 static 的祖先元素，也就是 child.offsetParent 。同时需要将祖先元素的 border 考虑在内，我们通过child.offsetParent.clientTop可以拿到边框厚度。
 * @param Node el 
 * @param Number initVal 
 */
function getTop(el, initVal) {
    let top = el.offsetTop + initVal;
    if (el.offsetParent !== null) {
        top += el.offsetParent.clientTop;
        return getTop(el.offsetParent, top);
    } else {
        return top;
    }
}


/**
 *  判断元素是否进入可视区域
 * 我们通过计算该元素距离 document 顶部的高度是否小于当前可视区域相对于 document 顶部高度来判断。
 * @param {*} el 
 */
function inSight(el) {
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollTop + clientHeight;
    return getTop(el, 0) < scrollHeight;

}
/**
 *  判断元素是否进入可视区域
 *  使用 getBoundingClientRect
 * @param {*} el 
 */
function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
}

// 2.兼容性
// getBoundingClientRect()最先是IE的私有属性，现在已经是一个W3C标准。所以你不用当心浏览器兼容问题，不过还是有区别的：IE只返回top,lef,right,bottom四个值，不过可以通过以下方法来获取width,height的值

var ro = object.getBoundingClientRect();
var Width = ro.right - ro.left;
var Height = ro.bottom - ro.top;

//兼容所有浏览器写法：

var ro = object.getBoundingClientRect();
var Top = ro.top;
var Bottom = ro.bottom;
var Left = ro.left;
var Right = ro.right;
var Width = ro.width||Right - Left;
var Height = ro.height||Bottom - Top;

// 避免出现小数
var currentOffsetTop = Math.round(box.getBoundingClientRect().top) - Math.round(target.getBoundingClientRect().top);