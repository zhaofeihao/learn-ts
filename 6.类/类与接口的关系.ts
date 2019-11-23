// 一个接口可以约束类成员有哪些属性，以及他们的类型
// 接口只能约束类的公有成员
// 接口不能约束类的构造函数
interface Human {
    // new (name: string) : void  //不能约束类的构造函数
    name: string;
    eat(): void;
}

// 类实现接口的时候，必须实现接口中所有的属性
class Asian implements Human {
    constructor(name: string) {
        this.name = name;
    }

    // private name: string; // 接口不能约束非公有成员
    name: string;
    eat() {}
    sleep() {} //类可以定义自己的属性和方法
}

// 接口的继承
// 接口可以像类一样相互继承，也可以一个接口继承多个接口
// 接口的继承可以抽离出可重用的接口，也可以将多个接口合并成一个接口

interface Man extends Human {
    run(): void
}

interface Child {
    cry(): void
}

interface Boy extends Man, Child {
    //
}

// 必须包含继承来自 Man Human Child 和 Boy 的全部属性和方法
let boy: Boy = {
    name: '',
    run() {},
    eat() {},
    cry() {}
}

// 接口还可以继承类
// 相当于接口把类的成员都抽象出来，也就是只有成员结构，而没有具体的实现

class Auto {
    state: 1
}

// 这样继承后，接口中就隐含了 state 属性
// 要想实现该接口，只要一个类的成员有类的属性即可（要实现接口必须要包含接口中的属性）
interface AutoInterface extends Auto {}

class C implements AutoInterface {
    state: 1
}

// 此外，Auto的子类也可以实现 AutoInterface 这个接口
class Bus extends Auto implements AutoInterface {
    // 在该类中就不必实现 state 属性了，因为它是 Auto 的子类，自然继承了 state 属性
}

// 这里需要额外注意的是，接口在抽离类的成员时，不仅抽离了公共成员，还抽离了私有成员private和受保护成员protected
class Foo {
    state: 1
    private state2: 2
}

interface FooInterface extends Foo {}
// class D implements FooInterface { //这样实现就会报错，提示错误的实现了这个接口，因为D不是Foo的子类 
//     state: 1
// }