# web页面主题切换

1. 使用 `Less` 或 `Sass`， 新建一个 `variables_default.less`,里面定义样式所有变量，包括颜色，各种宽度大小
2. 有新的主题，新建一个 `variables_light.less`,里面定义该主题样式所有变量，包括颜色，各种宽度大小
3. 根据需求打包生成不同类型的`css`
4. 使用JavaScript获取`link`标签进行修改 `css`文件

```javascript

function addTheme(theme_id) {
   var link = document.createElement('link');
   link.type = 'text/css';
   <!-- link.id = "theme-css-default";  // 加上id方便后面好查找到进行删除 -->
   link.id = theme_id; 
   link.rel = 'stylesheet';
   link.href = '/css/theme-light.css';
   document.getElementsByTagName("head")[0].appendChild(link);
}

function removeDarkTheme(theme_id) {
   var link = document.getElementById(theme_id)
   link.parentNode.removeChild(link);
}

```