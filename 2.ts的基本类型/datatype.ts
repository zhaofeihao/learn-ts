// 原始类型
let bool: boolean = true
let num: number = 123
let str: string = 'abc'
// str = 123  //将数字复制给 string 类型的变量会报错

// 数组
let arr1: number[] = [1, 2, 3] // 表示数组的元素只能是 number 类型
let arr2: Array<number | string> = [1, 2, 3, '4'] // 表示数组元素可以是 number 或 string 类型

// 元组
// 元组是一种特殊的数组，它限定了数组元素的「类型(要一一对应)」和「个数」
let tuple: [number, string] = [0, '1']
// tuple.push(2) // 为元组添加一个元素，编辑器不会报错
// console.log(tuple) // 也可以打印出来新添加进去的元素
// tuple[2] //但是在访问的时候，编辑器是不允许访问的，会报错
// 所以结论是，我们可以通过push方法给元组添加元素，但是仍然不能「越界访问」

// 函数
// let add = (x, y) => x + y //不允许这样写，编辑器会提示有错误
let add = (x: number, y: number) => x + y
let add1 = (x: number, y: number):number => x + y //带函数返回值类型，不写的话，ts自带返回值类型推断功能

let compute: (x: number, y: number) => number //compute代表一种函数类型，但是没有具体的实现
compute = (a, b) => a + b //在这里实现了compute类型，在实现过程中，形参可以与定义时不同，同时不用再指定类型了

// 对象
// let obj: object = { x: 1, y: 2 }
// obj.x = 3 //在 ts 中，这种操作是不允许的，因为object并未具体定义应该包含哪些属性

// 正确做法如下
let obj: { x: number, y: number } = { x: 1, y: 2 }
obj.x = 3

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
// console.log(s1 === s2)

// undefined, null
let un: undefined = undefined //如果被声明为 undefined，那就不能再被赋值为其他类型
let nu: null = null

// 如果想将 undefined 或 null 赋值给其他类型，那么需要配置 tsconfig.json 中的 strictNullChecks: false
// 或者：let num: number | undefined | null
num = undefined
num = null

// void
// void类型 表示没有任何返回值的类型
let noReturn = () => {}

// any
let x
x = 1
x = []
x = () => {}

// never
// never 类型表示永远不会有返回值的类型
let error = () => {
    throw new Error('error')
}
let endless = () => {
    while(true) {}
}