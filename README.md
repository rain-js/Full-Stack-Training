
# JavaScript 全栈教程

> 本文档是我学习廖老师的教程时所作的笔记，廖老师原教程的地址：
[JavaScript教程](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000)
---
### JavaScript简介
- JavaScript历史

    Brendan Eich两周之内设计出了JavaScript语言。
- ECMAScript

	ECMAScript是一种语言标准，而JavaScript是网景公司对ECMAScript标准的一种实现。
- JavaScript版本
	
	2015年6月正式发布了ECMAScript 6标准。


### 1 快速入门
#### 1.1 基本语法

#### 1.2 数据类型和变量
	
	在JavaScript中，同一个变量可以反复赋值，而且可以是不同类型的变量。这种变量本身类型不固定的语言称之为动态语言。
	
``` JavaScript
var a = 123;
a = 'ABC';
```
	静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错。例如Java是静态语言。
``` Java
int a = 123;
a = 'ABC'	// 错误：不能把字符串赋给整形变量
```

#### 1.3 字符串

##### 1.3.1 模板字符串
	
	把多个字符串连接起来，可以用 + 号连接：
``` JavaScript
var name = 'rain';
var age = 18;
var message = 'Hello, I am ' + name + '. I am ' + age + ' years old.';
console.log(message);
```
    ES6新增了一种模板字符串：
``` JavaScript
var name = 'rain';
var age = 18;
var message = `Hello, I am ${name}. I am ${age} years old`;
console.log(message);
```
##### 1.3.2 字符串常用方法
**toUpperCase()**
``` JavaScript
var str = 'Hello';
str.toUpperCase();	// 'HELLO'
``` 
**toLowerCase()**
``` JavaScript
var str = 'Hello';
str.toLowerCase();	// 'hello'
``` 
**indexOf()**
``` JavaScript
var str = 'hello, world';
str.indexOf('world');		// 7
str.indexOf('World');		// 没有找到指定的子串，返回 -1
``` 
**substring()**
``` JavaScript
var str = 'hello, world';
str.substring(0, 5);		// 从索引0开始到5（不包括5），返回'hello'
str.substring(7);			// 从索引7开始到结束，返回'world'
``` 
	Note: 调用这些方法本身不会改变原有字符串的内容，而是返回一个新字符串
	
#### 1.4 数组
##### 1.4.1 索引
``` JavaScript
var arr = [1, 2, 3];
arr[5] = 'x';
arr;       // arr变为[1, 2, 3, undefined, undefined, 'x']
```
Note: 大多数其他编程语言不允许直接改变数组的大小，越界访问索引会报错。然而，JavaScript的Array却不会有任何错误。
在编写代码时，不建议直接修改Array的大小，访问索引时要确保索引不会越界。

##### 1.4.2 数组常用方法
**indexOf**
``` JavaScript
var arr = [10, 20, '30', 'xyz'];
arr.indexOf(10);    // 0
arr.indexOf(20);    // 1
arr.indexOf(30);    // -1
arr.indexOf('30');  // 2
```
**slice**
> slice()就是对应String的substring()版本，截取Array的部分元素，然后返回一个新的Array

``` JavaScript
var arr = ['a', 'b', 'c', 'd', 'e'];
arr.slice(0, 3);    // ['a', 'b', 'c']
arr.slice(3);       // ['d', 'e']

var aCopy = arr.slice();    //  复制Array
aCopy;             // ['a', 'b', 'c', 'd', 'e']
aCopy === arr;     // false
```
**push & pop**
``` JavaScript
var arr = [1, 2];
arr.push('a', 'b');	// 4
arr;				// [1, 2, 'a', 'b']
arr.pop();          // 'b'
arr;				// [1, 2, 'a']
arr.pop();
arr.pop();
arr.pop();
arr;				// []
arr.pop();			// 空数组继续pop不会报错，而是返回undefined
arr;				// []
```
**unshift & shift**
``` JavaScript
var arr = [1, 2];
arr.unshift('a', 'b');  // 4
arr;                // ['a', 'b', 1, 2]
arr.shift();        // 'a'
arr;                // ['b', 1, 2]
arr.shift();
arr.shift();
arr.shift();
arr;                // []
arr.shift();        // undefined
arr;                // []
```
**sort**
``` JavaScript
var arr = ['b', 'c', 'a'];
arr.sort();
arr;                // ['a', 'b', 'c']
```
**reverse**
``` JavaScript
var arr = ['a', 'b', 'c'];
arr.reverse();
arr;                // ['c', 'b', 'a']
```
**splice**
> 修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素

``` JavaScript
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];

// 从索引2开始删除3个元素,然后再添加两个元素:
arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
arr;                                    // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
```
**concat**
``` JavaScript
var arr = ['a', 'b', 'c'];
var added = arr.concat([1, 2, 3]);
added;		// ['a', 'b', 'c', 1, 2, 3]
arr;		// ['a', 'b', 'c']
```
**join**
``` JavaScript
var arr = ['a', 'b', 'c', 1, 2, 3];
arr.join('-');     // 'a-b-c-1-2-3'
```
#### 1.5 对象
> JavaScript对象的所有属性都是字符串，不过属性对应的值可以是任意数据类型。

> JavaScript规定，访问不存在的属性不报错，而是返回undefined。

> 要判断一个属性是否是对象自身拥有的，而不是继承得到的，可以用hasOwnProperty()方法。

#### 1.6 条件判断
``` JavaScript
if () {
	// ...
} else {
	// ...
}

if () {
	// ...
} else if () {
	// ...
} else {
	// ...
}
```
#### 1.7 循环
**for...in**
> for...in 把一个对象的所有属性依次循环出来

``` JavaScript
var o = {
    name: 'rain',
    age: 18,
    city: 'shenzhen'
};
for (var key in o) {
    console.log(key);   // 'name' 'age' 'city'
}
```

> 要过滤掉对象继承的属性，用hasOwnProperty()来实现：

``` JavaScript
var o = {
    name: 'rain',
    age: 18,
    city: 'shenzhen'
};
for (var key in o) {
    if (o.hasOwnProperty(key)) {
        console.log(key);   // 'name' 'age' 'city'
    }
}
```

#### 1.8 Map和Set
**Map**
> Map是一组键值对的结构，具有极快的查找速度。

**Set**
> Set和Map类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在Set中，没有重复的key。

Note: Map和Set是ES6标准新增的数据类型。

#### 1.9 iterable
> 遍历Array可以采用下标循环，遍历Map和Set就无法使用下标。为了统一集合类型，ES6标准引入了新的iterable类型，Array、Map和Set都属于iterable类型。

**for...of循环遍历集合**
``` JavaScript
var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (var x of a) { // 遍历Array
    console.log(x);
}
for (var x of s) { // 遍历Set
    console.log(x);
}
for (var x of m) { // 遍历Map
    console.log(x[0] + '=' + x[1]);
}
```
**for...of循环和for...in循环有何区别**
> for...in循环由于历史遗留问题，它遍历的实际上是对象的属性名称。一个Array数组实际上也是一个对象，它的每个元素的索引被视为一个属性。

``` JavaScript
var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (var x in a) {
    console.log(x); // '0', '1', '2', 'name'
}
```

``` JavaScript
var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (var x of a) {
    console.log(x); // 'A', 'B', 'C'
}
```

**iterable内置的forEach方法**
> 它接收一个函数，每次迭代就自动回调该函数。

``` JavaScript
var a = ['A', 'B', 'C'];
a.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    console.log(element);
});
```

### 2 函数
> JavaScript的函数不但是“头等公民”，而且可以像变量一样使用，具有非常强大的抽象能力。

#### 2.1 函数定义和调用
> 函数体内部的语句在执行时，一旦执行到return时，函数就执行完毕，并将结果返回。如果没有return语句，函数执行完毕后也会返回结果，只是结果为undefined。

**arguments**
``` JavaScript
// foo(a[, b], c)
// 接收2~3个参数，b是可选参数，如果只传2个参数，b默认为null

function foo(a, b, c) {
    if (arguments.length === 2) {
        // 实际拿到的参数是a和b，c为undefined
        c = b;      // 把b赋给c
        b = null;   // b变为默认值
    }
    // ...
}
```

**...rest参数**
> rest参数只能写在最后，前面用...标识

``` JavaScript
function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

foo(1, 2, 3, 4, 5);
// 结果:
// a = 1
// b = 2
// Array [ 3, 4, 5 ]

foo(1);
// 结果:
// a = 1
// b = undefined
// Array []
```

**return语句的一个大坑**
``` JavaScript
function foo() {
    return
        { name: 'foo' };
}

foo(); // undefined
```
> 由于JavaScript引擎在行末自动添加分号的机制，上面的代码实际上变成了：

``` JavaScript
function foo() {
    return;                 // 自动添加了分号，相当于return undefined;
        { name: 'foo' };    // 这行语句已经没法执行到了
}
```
> 正确的多行写法是：

``` JavaScript
function foo() {
    return {         // 这里不会自动加分号，因为{表示语句尚未结束
        name: 'foo'
    };
}
```

#### 2.2 变量作用域

#### 2.3 方法

#### 2.4 高阶函数
**map/reduce**

**filter**

**sort**

#### 2.5 闭包

#### 2.6 箭头函数

#### 2.7 generator



























