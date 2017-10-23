
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
##### 1.1 基本语法

##### 1.2 数据类型和变量
	
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

##### 1.3 字符串

###### 1.3.1 模板字符串
	
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
###### 1.3.2 字符串常用方法
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
	
##### 1.4 数组
###### 1.4.1 索引
``` JavaScript
var arr = [1, 2, 3];
arr[5] = 'x';
arr;       // arr变为[1, 2, 3, undefined, undefined, 'x']
```
Note: 大多数其他编程语言不允许直接改变数组的大小，越界访问索引会报错。然而，JavaScript的Array却不会有任何错误。
在编写代码时，不建议直接修改Array的大小，访问索引时要确保索引不会越界。

###### 1.4.2 数组常用方法
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
##### 1.5 对象

##### 1.6 条件判断

##### 1.7 循环

##### 1.8 Map和Set

##### 1.9 iterable