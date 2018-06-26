# HTML5 video 标签浏览器兼容

一、 兼容低版本`ie`(ie8及以下)

引入 `html5media.js`

```html
<script src="https://cdn.bootcss.com/html5media/1.1.8/html5media.min.js"></script>
```

进入[CDN](http://www.bootcdn.cn/html5media/)，查看最新版本 

二、兼容火狐浏览器

不可以只有MP4格式，一定要引入Ogg格式视频，否则在火狐上会不兼容报错

```html
    <video controls autoplay="true" loop="true" preload="auto">
        <source src="movie/movie.mp4" type="video/mp4">
        <source src="movie/movie.ogv" type="video/ogg">
        <p style="padding: 50px;color:#fff;text-align: center">您的浏览器不支持 HTML5 video 标签。</p>
    </video>

```

三、关于`video`标签的`width`

1. 不可以 直接在 `video` 标签里面加`width = "100%"`，因为的属性`width`只支持像素值，不支持百分比。在IE中会不兼容,导致无法播放视频

```html
<!-- 错误示例 -->
<video width="1000%"  controls autoplay="true" loop="true" preload="auto">
```

2. 视频是固定宽高，则可以直接在属性中设置，千万注意不要加单位px，否则IE不兼容

```html
<video width="1000" height="500" controls autoplay="true" loop="true" preload="auto">

<!-- 错误示例 -->

<video width="1000px" height="500px" controls autoplay="true" loop="true" preload="auto">

```

3. 推荐使用 `css` 来控制 `video` 样式

```css
video{
    width:100%;
    height:500px\0;/* ie 8/9/10/Opera - for ie8/ie10/Opera */
    *height：500px;/* ie 6/7 - for ie7 */
    _height:500px; /* ie 6 - for ie6 */
    object-fit: fill
}

```
