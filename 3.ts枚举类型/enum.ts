// 数字枚举
// 该枚举包含 5 个枚举成员，它们的取值从 0 开始，若自定义初始值，那么后面的成员就会顺着递增
enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}
// console.log(Role.Reporter)
// console.log(Role) //其实是一个对象

/* 可以看看打印出来Role是什么 ↓
{
    1: "Reporter",
    2: "Developer",
    3: "Maintainer",
    4: "Owner",
    5: "Guest",
    Developer: 2,
    Guest: 5,
    Maintainer: 3,
    Owner: 4,
    Reporter: 1
}
可以看出，既可以用枚举成员的名字来索引，也可以用值来索引。

那么这又是如何实现的？↓
var Role;
(function (Role) {
    Role[Role["Reporter"] = 1] = "Reporter";
    Role[Role["Developer"] = 2] = "Developer";
    Role[Role["Maintainer"] = 3] = "Maintainer";
    Role[Role["Owner"] = 4] = "Owner";
    Role[Role["Guest"] = 5] = "Guest";
})(Role || (Role = {}));
这种方法叫做「反向映射」，也即枚举的实现原理
*/


// 字符串枚举
// 字符串枚举是不可以进行反向映射的
enum Message {
    Success = '恭喜你，成功了',
    Fail = '抱歉，失败了'
}

// 异构枚举
// 即数字枚举和字符串枚举混用
enum Answer {
    N,
    Y = 'Yes'
}

// 枚举成员
// Role.Reporter = 2 //枚举成员的值不可修改
enum Char {
    // const member(常量枚举)
    // 常量枚举成员会在编译时计算出结果，以常量的形式出现在运行时环境
    a, // 1.无初始值
    b = Char.a, // 2.对已有枚举成员的引用
    c = 1 + 3, // 3.常量表达式

    // computed member(需要被计算的枚举成员)
    // 是一些非常量的表达式，不会在编译阶段进行计算，而是保留到执行阶段
    d = Math.random(),
    e = '123'.length,
    f = 4 // 在computed member后的成员必须有初始值
}

// 常量枚举(用const声明)
// 特性：在编译阶段被移除
// 作用：当我们不需要对象，而需要对象的值时，就需要常量枚举，这样可以减少在编译环境的代码 
const enum Month {
    Jan,
    Feb,
    Mar,
    Apr = Month.Mar + 1,
    // May = () => 5
}
// 比如下面代码，在编译时 枚举 直接被替换为常量 0 1 2...，这样运行时的代码就会显得非常简洁
let month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }

let e: E = 3
let f: F = 3
// console.log(e === f) //不可以进行比较

let e1: E.a = 3
let e2: E.b = 3
let e3: E.a = 3
// console.log(e1 === e2) //不可以进行比较
// console.log(e1 === e3) // 相同类型，可以比较

// 字符串枚举的取值只能是枚举成员的类型
let g1: G = G.a
let g2: G.a = G.a