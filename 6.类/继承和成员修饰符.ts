class Dog {
    constructor(name: string) {
        this.name = name;
    }
    name: string;
    run() {}
}

// note 1
// 无论在 ES 中还是 TS 中，类成员的属性都是实例属性，而不是原型属性
// 而类成员的方法都是原型方法

console.log(Dog.prototype); // 打印结果可以看出只有 run 方法和 constructor

let dog = new Dog('wangwang');
console.log(dog); // 打印结果可以看出 name 属性只在实例上而不在原型上

// note 2
// 与 ES 中不同的是，实例的属性必须具有初始值，或者在构造函数中被初始化
class Dog1 {
    constructor(name: string) {
        // this.name = name;
    }
    name: string = 'wangwang'; // 初始值
    // name?: string; // 或者变为可选属性
    run() {}
}

// 继承
class Husky extends Dog {
    constructor(name: string, color: string) {// 父类构造函数中有参数 name，子类中也要加上
        super(name); // 派生类的构造函数必须包含 super() 调用，这是 ES 中的规定，super() 代表父类的实例
        this.color = color;
    }
    color: string;
}

// 类的成员修饰符（TS 对 ES 的扩展）
class Dog2 {
    private constructor(name: string) { // 也可以选择给构造函数加上私有成员属性，表示该类既不能被实例化也不能被继承
        this.name = name;
    }
    public name: string; // 类的所有属性默认都是 public（公有成员），对所有人都是可见的
    private pri() {}; // 私有成员只能在类的本身被调用，而不能被类的实例或者子类调用
    run() {}
}

class Dog3 {
    protected constructor(name: string) { //在构造函数上加protected表示该类不能被实例化，只能被继承
        this.name = name;
    }
    name: string;
    run() {}
    protected pro() {}; // 受保护成员只能在类或者子类中访问，而不能在类实例中访问
    readonly legs: number = 4; // 只读属性不可更改，所以必须初始化
}

class Cokey extends Dog {
    constructor(name: string, public color: string) { // 将参数自动变成实例属性，这样就能省略该参数在类中的定义了
        super(name); 
        this.color = color;
    }
    // color: string; // 省略
}

class Dog4 {
    constructor(name: string) { //在构造函数上加protected表示该类不能被实例化，只能被继承
        this.name = name;
    }
    name: string;
    run() {}
    static food: string = 'bones'; //类的静态成员只能通过类名调用，或者继承他的子类类名调用
}