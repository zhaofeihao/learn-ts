/**
 * 交叉类型指：
 * 将多个类型合并为一个类型，新类型将具有所有类型的特性
 */

interface DogInterface {
    run(): void
}
interface CatInterface {
    jump(): void
}
// 同时具备 run 和 jump 方法，取并集
let pet: DogInterface & CatInterface = {
    run() {},
    jump() {}
}

/**
 * 联合类型:
 * 声明的类型并不确定，可以为多个类型中的一个
 */

let a: number | string = 1
let b: 'a' | 'b' | 'c'; //只能取 a b c 中的一个
let c: 1 | 2 | 3

class Dog implements DogInterface {
    run() {}
    eat() {}
}
class Cat  implements CatInterface {
    jump() {}
    eat() {}
}
enum Master { Boy, Girl }
function getPet(master: Master) {
    let pet = master === Master.Boy ? new Dog() : new Cat();
    // pet.run() // 不能访问
    // pet.jump()
    pet.eat()
    return pet
}

interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}
type Shape = Square | Rectangle | Circle
function area(s: Shape) {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.height * s.width;
        case 'circle':
            return Math.PI * s.radius ** 2
        default:
            return ((e: never) => {throw new Error(e)})(s)
    }
}
console.log(area({kind: 'circle', radius: 1}))