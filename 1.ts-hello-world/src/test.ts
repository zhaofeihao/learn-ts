// enum Role {
//     Reporter = 1,
//     Developer,
//     Maintainer,
//     Owner,
//     Guest
// }

// console.log(Role)

enum E { a, b }
enum F { a = 0, b = 1 }
let e: E = 3
let f: F = 3
console.log(e, f)

interface Names {
    [x: string]: any;
    y: number;
    [z: number]: number;
}