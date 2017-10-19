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


### 快速入门
- 基本语法

- 数据类型和变量
	
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

- 字符串

	- 模板字符串
	
	    把多个字符串连接起来，可以用 + 号连接：
    	``` JavaScript
    	var name = 'rain';
    	var age = 18;
    	var message = 'Hello, I am ' + name + '. I am ' + age + ' years old.';
    	console.log(message);
    	```
    	ES6新增了一种模板字符串
    	``` JavaScript
    	var name = 'rain';
    	var age = 18;
    	var message = `Hello, I am ${name}. I am ${age} years old`;
    	console.log(message);
    	```


- 数组

- 对象

- 条件判断

- 循环

- Map和Set

- iterable