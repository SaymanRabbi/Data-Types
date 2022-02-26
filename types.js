/* 
There are 7 dataTypes on javaScript
1.number; 
2.string;
// 3.Number;
4.boolean;
5.undefined;
6.null;
7.object;
8.symbol;
*/
// ------there are tow types of dataTypes in javaScript-------
/* 
1.primitive datatype;
a.number,
b.string,
c.boolean,
d.null,
e.undefined,
f.symbol.
2. non-primitive datatype;
a.object;
*/
// ------primitive types
// immutable they area not changes by self;
let a = 7;
let b = a;
// console.log(b);
a = 8;
// console.log(a, b);

// non-primitive data types 
// mutable they are changes by self
let obj = { name: "Rolling", age: 23 };
let newObj = obj;
// console.log(newObj)
obj.name = "keep-Rolling";
console.log(obj, newObj);
/* 
1.types of null = object;
2.types of array = object;
3.types of NaN = number;
4.types of undefined = undefined;
5.types of function = function;
*/