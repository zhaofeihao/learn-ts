// 泛型类
class Log<T> {
    run(value: T) {
        console.log(value);
        return value;
    }
}

let log1 = new Log<number>();
log1.run(1);

let log2 = new Log();
log2.run('qq');

// 泛型约束
interface Length {
    length: number
}

function log<T extends Length>(value: T): T {
    console.log(value, value.length);
    return value;
}
// T 继承了 Length 接口，表示 T 受到了一定的约束，不再是任意类型都可以传了
// 入参不管是什么类型，但必须具有 length 属性
log([1]);
log('111');
log({length: 1});

// 小结：泛型的好处
// 1. 泛型和类可以支持多种数据类型，增强程序扩展性
// 2. 不必写多条函数重载，冗长的联合类型声明，增强代码可读性
// 3. 灵活控制类型之间的约束