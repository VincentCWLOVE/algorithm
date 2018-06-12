# `prototype` 和 `__proto__`


* `prototype` 是函数才有的属性
* `__proto__` 是每个对象都有的属性

```javascript

var a = {};
console.log(a.prototype);  //undefined
console.log(a.__proto__);  //Object {}

var b = function(){}
console.log(b.prototype);  //b {}
console.log(b.__proto__);  //function() {}

```


### `__proto__` 指向问题

`__proto__` 的指向取决于对象创建时的实现方式



```javascript

	/*1、字面量方式*/
	var a = {};
	console.log(a.__proto__);  //Object {}

	console.log(a.__proto__ === a.constructor.prototype); //true

	/*2、构造器方式*/
	var A = function(){};
	var a = new A();
	console.log(a.__proto__); //A {}

	console.log(a.__proto__ === a.constructor.prototype); //true

	/*3、Object.create()方式*/
	var a1 = {a:1}
	var a2 = Object.create(a1);
	console.log(a2.__proto__); //Object {a: 1}

	console.log(a.__proto__ === a.constructor.prototype); //false（此处即为图1中的例外情况）

```


### 原型链

由于 `__proto__`是任何对象都有的属性，而js里面万物皆对象，所以会形成一条`__proto__`连起来的链条，递归访问`__proto__`必须最终到头，并且值是 `null`

当 `js`引擎查找对象的属性时，先查找对象本身是否存在该属性，如果不存在，会再原型链上查找，但不会查找自身的`prototype`

```javascript

	var A = function(){};
	var a = new A();
	console.log(a.__proto__); //A {}（即构造器function A 的原型对象）
	console.log(a.__proto__.__proto__); //Object {}（即构造器function Object 的原型对象）
	console.log(a.__proto__.__proto__.__proto__); //null

```





































