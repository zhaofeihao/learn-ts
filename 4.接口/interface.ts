interface List {
    readonly id: number; // 只读属性
    name: string;
    // [x: string]: any;
    age?: number; //可选属性，可有可无
}
interface Result {
    data: List[]
}
function render(result: Result) {
    result.data.forEach((value) => {
        console.log(value.id, value.name)
        if (value.age) {
            console.log(value.age)
        }
        // value.id++ //只读属性不可修改
    })
}
let result = {
    data: [
        {id: 1, name: 'A', sex: 'male'}, // 传入多余变量也可以通过检查
        {id: 2, name: 'B', age: 10}
    ]
}
render(result)

// 但是如果传入的是对象字面量的话，ts就会对额外字段进行类型检查
// render({
//     data: [
//         {id: 1, name: 'A', sex: 'male'}, 
//         {id: 2, name: 'B', age: 10}
//     ]
// })

// 绕过这种检查的方式有三种
// 1.像上面那种，传递一个对象进行

// 2.使用类型断言，含义就是告诉编译器我知道这个对象就是Result，这样编译器就会绕过类型检查
// render({
//     data: [
//         {id: 1, name: 'A', sex: 'male'}, 
//         {id: 2, name: 'B', age: 10}
//     ]
// } as Result)

// 2-1.类型断言的另一种写法，建议使用第二种方法进行断言，因为这种方法会在react中产生歧义
// render(<Result>{
//     data: [
//         {id: 1, name: 'A', sex: 'male'}, 
//         {id: 2, name: 'B', age: 10}
//     ]
// })

// 3.使用字符串索引签名
// [x: string]: any;


// 以上接口属性的个数都是固定的，当不确定接口中有多少个属性时就可以使用可索引类型的接口
// 可索引类型接口可用数字进行索引，也可以用字符串进行索引


// =========分界线=========================

// 数字索引接口
interface StringArray {
    [index: number]: string //用任意数字去索引 StringArray 都会得到一个 string，相当于声明了一个字符串类型的数组
}
let chars: StringArray = ['a', 'b']

// 字符串索引接口
interface Names {
    [x: string]: any;
    // y: number;
    [z: number]: number;
}

// =========分界线=========================

// let add: (x: number, y: number) => number
// interface Add {
//     (x: number, y: number): number
// }

// type关键字：类型别名
type Add = (x: number, y: number) => number
// 实现具体函数
let add: Add = (a: number, b: number) => a + b


// 混合类型接口，既可定义函数，也可像对象一样拥有属性和方法
interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}
// 实现上面的混合类型接口，定义在getLib函数中，防止全局暴露，这样就可以创建多个实例了
function getLib() {
    let lib = (() => {}) as Lib
    lib.version = '1.0.0'
    lib.doSomething = () => {}
    return lib;
}

// 创建实例
let lib1 = getLib()
lib1()
let lib2 = getLib()
lib2.doSomething()