// 函数定义
// 方式一
function add1(x: number, y: number) {
    return x + y;
}

// 方式二
let add2 : (x: number, y: number) => number;

// 方式三
type add3 = (x: number, y: number) => number;

// 方式四
interface add4 {
    (x: number, y: number): number;
}

// 后三种方式都是对函数类型的定义，没有具体实现
// 注意，在ts中形参和实参必须一一对应

// 可选参数(必须位于必选参数之后)
function add5 (x: number, y?: number) {
    return y ? x + y : x;
}

// 为参数提供默认值，
function add6(x: number, y = 0, z: number, q=1) {
    return x + y + z + q;
}
// 注意在必选参数前默认参数不可省略
add6(1, undefined, 3); // 5

// 上面的情况都是参数固定的情况
// 下面是参数不固定的情况，用ES6的剩余运算符
function add7(x: number, ...rest) {
    return x + rest.reduce((pre, cur) => pre + cur);
}

// ts的函数重载
function add8 (...rest: number[]) : number;
function add8 (...rest: string[]) : string;
function add8(...rest: any[]): any {
    let first = rest[0];
    if (typeof first === 'number') {
        return rest.reduce((pre, cur) => pre + cur);
    }
    if (typeof first === 'string') {
        return rest.join('');
    }
}
