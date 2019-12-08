// 类型兼容性：
// 当一个类型 Y 可以被赋值给另一个类型 X 时，我们就可以说类型 X 兼容类型 Y。
// X 兼容 Y：X（目标类型） = Y（源类型）

/**
 * 接口兼容性
 * /
// 接口 X 有两个属性a b，Y 有三个属性 a b c，
// 然后定义了两个变量 x y，分别符合接口类型 X Y
// 问题：x 和 y 可以相互赋值吗？
interface X {
    a: any,
    b: any
}

interface Y {
    a: any,
    b: any,
    c: any
}

let x: X = {a: 1, b: 2};
let y: Y = {a: 1, b: 2, c: 3};

x = y; // y 可以赋值给 x
// y = x; // x 不能赋值给 y，报错

// 这里可以看到，只要 Y 接口具备 X 接口的所有属性，只要 Y 具备 X 的所有属性，那么 Y 仍可被认为是 X 类型，也即 X 类型可以兼容 Y类型（鸭式变形法）
// 结论「源类型必须具备目标类型的必要属性」

/**
 * 函数兼容性
 * /
// 需要判断两个函数是否兼容，通常会发生在两个函数相互赋值的情况下，例如：函数作为参数的情况下

type Handler = (a: number, b: number) => void;
function hof(handler: Handler) {
    return handler;
}

// 当我们给这个高阶函数 hof 传入一个参数时，就会判断传入的参数是否跟 Handler 兼容
// 目标类型：Handler
// 源类型：要传入的参数

// 若要让目标函数兼容源函数，需要满足三个条件
// 条件1. 参数个数。目标函数的参数个数一定要多于源函数的参数个数
let handler1 = (a: number) => {};
hof(handler1); // 可以

let handler2 = (a: number, b: number, c: number) => {}
// hof(handler2); // 报错

// 可选参数和剩余参数的情况
let f1 = (p1: number, p2: number) => {}
let f2 = (p1?: number, p2?: number) => {}
let f3 = (...args: number[]) => {}

// 原则1：固定参数兼容可选参数和剩余参数↓
f1 = f2;
f1 = f3;

// 原则2：可选参数是不兼容固定参数和剩余参数的(vscode有时会出现问题，不报错)
f2 = f1;
f2 = f3;

// 原则3：剩余参数兼容固定参数和可选参数
f3 = f1;
f3 = f2;

// 条件2. 参数类型。参数类型必须要匹配
let handler3 = (a: string) => {}
// hof(handler3); //不行，类型不兼容

interface Point3D {
    x: number,
    y: number,
    z: number
}
interface Point2D {
    x: number,
    y: number
}

let p3d = (point: Point3D) => {}
let p2d = (point: Point2D) => {}

p3d = p2d; // 成员个数多的兼容成员个数少的，与接口那块相反
// p2d = p3d; // 不行

// 条件3：返回值类型
// ts 要求目标函数返回值类型必须与源函数返回值类型相同，或者为其子类型
let f = () => ({name: 'Alice'})
let g = () => ({name: 'Alex', location: 'Beijing'})
f = g; // 成员少的兼容成员多的
//g = f; //报错

// 函数重载
function overload(a: number, b: number): number;
function overload(a: string, b: string): string;
function overload(a: any, b: any): any {};

/**
 * 枚举兼容性
 * /
enum Fruit {Apple, Banana}
enum Color {Yellow, Red}

// 枚举和number是相互兼容的
let fruit: Fruit.Apple = 1;
let num: number = Fruit.Apple;

/**
 * 类兼容性（和接口兼容比较相似）
 * /
class A {
    constructor(p: number, q: number) {}
    id: number = 1;
}

class B {
    static s = 1;
    constructor(p: number) {}
    id: number = 2;
}

// 在比较两个类是否兼容时，静态成员和构造函数是不参与比较的
// 如果两个类具有相同的实例成员，那么他们的实例可以相互兼容，但如果类中含有私有成员，那么这两个类就不兼容了
let aa = new A(1, 2);
let bb = new B(1);
aa = bb; // 可以兼容
bb = aa; // 可以兼容

class C extends A {}

let cc = new C(1, 2);
aa = cc;
cc = aa;

/**
 * 泛型兼容性
 */
interface Empty<T> {}

let obj1: Empty<number> = {}
let obj2: Empty<string> = {}

obj1 = obj2;
obj2 = obj1;
// 上面的情况是兼容的
// 但是如果泛型接口 T 被接口成员使用，那么上面的兼容就失效了。
// T 被接口成员使用 interface Empty<T> {value: T}

// 泛型函数
let log1 = <T>(x: T): T => {
    console.log('x');
    return x;
}
let log2 = <U>(y: U): U => {
    console.log('y');
    return y;
}

log1 = log2;
// 如果两个泛型函数定义相同，但是没有指定类型参数，那么他们之间也是兼容的。

// 口诀
// 结构之间兼容：成员少的兼容成员多的
// 函数之间兼容：参数多的兼容参数少的