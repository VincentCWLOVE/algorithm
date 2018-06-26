# html5的1px bug

一、为什么出不来1px？

简而言之：css的1px只是一个抽象的单位，并非实际设备中的1px。

关于retina屏：

我们知道现在iphone大多数型号都用上了retina屏，而retina屏的分辨率相较于普通屏幕增加了一倍，也就是说原来1个像素宽度的区域内可以塞进2个像素了。我们css写的1px是一个概念像素，在retina屏的实际设备上占了2px的位置。

而对于手机屏幕整体来说，一个标注了750宽的手机（iPhone6）在css中只需要375px就能表示。

二、解决方案

```css

	.single-line{
	  margin:0 auto;
	  height: 1px;
	  width:200px;
	  background: #000;
	  overflow: hidden;
	  transform: scaleY(0.5);
	  -webkit-transform: scaleY(0.5);
	  overflow: hidden
	}


```

```css
// 使用 postcss 中的 postcss-write-svg
@svg 1px-border { 
    height: 2px; 
    @rect { 
        fill: var(--color, black); 
        width: 100%; 
        height: 50%; 
    } 
}
.cell {
    border: 1px solid transparent;
    border-image: svg(1px-border param(--color #00b1ff)) 2 2 stretch;
    //border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='2px'%3E%3Crect fill='%23009dff' width='100%25' height='50%25'/%3E%3C/svg%3E") 2 2 stretch;
   
}


```

