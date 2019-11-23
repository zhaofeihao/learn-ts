// 抽象类就是只能被继承而不能被实例化的类

abstract class Animal {
    // 在抽象类中可以定义方法，它可以有具体的实现，这样子类就不用再实现了，可复用
    eat() {
        console.log('eat');
    }

    // 在抽象类中也可不指定方法的具体实现，这就是抽象方法
    // 抽象方法的好处是，明确知道子类可以有其他的实现，那么就没必要再父类中实现了
    abstract sleep(): void;
}
// let animal = new Animal();// 报错，无法创建抽象类的实例

class Cat extends Animal {
    constructor(name: string) {
        super();
        this.name = name;
    }
    name: string;
    run() {}
    sleep() {
        console.log('cat sleep');
    }
}

let cat = new Cat('miaomiao');

cat.eat(); // 打印输出 eat

// 抽象类也可以实现多态，多态就是在父类中定义一个抽象方法，在多个子类中对该方法有不同实现
// 在程序运行时，会根据不同对象执行不同操作，实现了运行时的绑定
class Horse extends Animal {
    sleep() {
        console.log('horse sleep');
    }
}

// this 实现链式调用
class Workflow {
    step1() {
        return this;
    }
    step2() {
        return this;
    }
}

new Workflow().step1().step2(); 

// 在继承时，this类型也可以表现为多态，这里的多态是指this既可以是父类型，也可以是子类型
class Myflow extends Workflow {
    next() {
        return this;
    }
}

new Myflow().next().step1().next().step2(); //保持了父子类之间接口的连贯性