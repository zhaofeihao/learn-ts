// 很多时候，我们希望一个函数或者一个类可以支持多种数据类型，有很大的灵活性

// 泛型：不预先确定的数据类型，具体类型在使用时才能确定

// 例：现在有一个打印函数，可以打印字符串也可以打印数组
function log(value: any): any{
    console.log(value);
    return value;
}

// 使用泛型进行改造
// 首先在函数名称后加<T>
// 然后把参数类型也改为 T
// 最后函数返回值也改为 T
function log1<T>(value: T): T {
    console.log(value);
    return value;
}
// 改造之后，一方面类型 T 不需要预先指定，相当于 any 类型
// 另一方面，也保证了输入参数和返回值是一致的

// 泛型函数有两种调用方式
// 1. 
log1<string[]>(['a', 'b']);

// 2. 利用 ts 的类型推断，省略类型的参数
log1(['a', 'b']);

// 我们不仅可以用泛型定义函数，也可定义一个函数类型
type Log = <T>(value: T) => T;
let log2: Log = log1;

// ===== 泛型接口 =====
interface aLog {
    <T>(value: T): T
}
// 上面泛型仅仅约束了一个函数

// 我们也可以用泛型来约束接口的其他成员，这样接口的所有成员都可以受到泛型变量的约束了
interface bLog<T = string> {//可以指定默认类型
    (value: T): T
}

let myLog: bLog<number> = log1;
myLog(1);