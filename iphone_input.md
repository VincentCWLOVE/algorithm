# iPhone_input

###  input 自动聚焦

> 问题描述

在一般的正常浏览器上，可以用 javascript 来 focus 到一个输入框上：

```javascript

var elem = document.getElementById(‘inputElementId’);
elem.focus();

```
但是在 iOS手机 上，这样的代码根本不起作用只有在监听了用户出发的事件的函数中执行 focus 才有用。

``` javascript
var button = document.getElementById(‘btn’);
var inputElem = document.getElemntById(‘input-elem’);
button.addEventListener(‘click’, function(ev){
inputElem.focus();
});

```


### input 出现遮挡

>  问题描述

iOS系统下，移动web页面，inpu获取焦点弹出系统虚拟键盘时，偶尔会出现挡住input的情况，尽管概率不大，但是十分影响用户体验。


页面中有header、main、footer三部分，其中 header 和 footer 通过 position: fixed; 定位在浏览器顶部和底部。其中，footer 中有一个input 输入框。

> 解决

`scrollIntoView(alignWithTop)`: 滚动浏览器窗口或容器元素，以便在当前视窗的可见范围看见当前元素。

`alignWithTop` 若为 `true`，或者什么都不传，那么窗口滚动之后会让调用元素的顶部与视口顶部尽可能平齐；

`alignWithTop` 若为 `false`，调用元素会尽可能全部出现在视口中，可能的话，调用元素的底部会与视口顶部平齐，不过顶部不一定平齐。

支持的浏览器：IE、Chrome、Firefox、Safari和Opera。

``` javascript

let userInput = document.getElementById("userInput")

obj.addEventListener('touchstart', (event) => {
   
   setTimeout(() => {
   		event.target.scrollIntoView(true)
   }, 1000)

}, false);

``` 