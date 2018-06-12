# CSS 盒模型

### 标准盒模型 和 IE模型

盒模型由里向外分别有 `content` `padding` `border` `margin`

但是在低版本IE（<7）浏览器中和现代浏览器,盒模型分为 标准盒模型 和 IE盒模型
![标准模型](./standBoxModel.png)
![标准模型](./IE_BoxModel.png)

 从上面两图不难看出在标准模型中，盒模型的宽高只是内容（content）的宽高，

而在IE模型中盒模型的宽高是内容(content)+填充(padding)+边框(border)的总宽高。

### css设置两种模型

```css
/* 标准模型 */
box-sizing:content-box;

 /*IE模型*/
box-sizing:border-box;
```
如果计算一个盒子的长宽高，我们一般都是盒子本身的厚度加上盒子里的空间大小，所在在IE盒模型和W3C盒模型，我们会觉得IE盒模型更符合逻辑。

所以`CSS3`新增了一个属性`box-sizing: content-box | border-box | inherit`，默认值为`content-box`。

如果值为`content-box`，那元素遵循的是W3C盒模型；

如果值为`border-box`，那元素遵循的是IE盒模型；

如果值为`inherit`，该属性的值应该从父元素继承。


### margin 重叠

### BFC

* BFC的原理

	* 内部的box会在垂直方向，一个接一个的放置

   	* 每个元素的margin box的左边，与包含块border box的左边相接触（对于从做往右的格式化，否则相反）
	* box垂直方向的距离由margin决定，属于同一个bfc的两个相邻box的margin会发生重叠
	* bfc的区域不会与浮动区域的box重叠
	* bfc是一个页面上的独立的容器，外面的元素不会影响bfc里的元素，反过来，里面的也不会影响外面的
	* 计算bfc高度的时候，浮动元素也会参与计算
* 怎么取创建bfc
	* float属性不为none（脱离文档流）
	* position为absolute或fixed
	* display为inline-block,table-cell,table-caption,flex,inine-flex
	* overflow不为visible
	* 根元素
* 应用场景
	* 自适应两栏布局
	* 清除内部浮动 
	* 防止垂直margin重叠
 