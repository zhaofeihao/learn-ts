enum Type {Strong, Weak};

class Java {
    helloJava() {
        console.log('Hello Java');
    }
    java: any
}

class Javascript {
    helloJavascript() {
        console.log('Hello Javascript');
    }
    javascript: any
}

// 每一个 lang 都需要加类型断言才不会报错,很麻烦
function getLanguage(type: Type) {
    let lang = type === Type.Strong ? new Java() : new Javascript();
    if ((lang as Java).helloJava) {
        (lang as Java).helloJava();
    } else {
        (lang as Javascript).helloJavascript();
    }
    return lang;
}

// ts 的类型保护机制就是解决上述问题的，它可以提前对类型作出预判

// 类型保护
// typescript 能够在特定区块中保证变量属于某种确定类型
// 可在此区块中放心的引用此类型的属性，或调用此类型的方法

// 方法1：instanceof
function getLanguage1(type: Type) {
    let lang = type === Type.Strong ? new Java() : new Javascript();
    if (lang instanceof Java) {
        lang.helloJava();
    } else {
        lang.helloJavascript();
    }
    return lang;
}

// 方法2：in
// 在类中定义两个属性，判断他们是否存在于实例中
function getLanguage2(type: Type) {
    let lang = type === Type.Strong ? new Java() : new Javascript();
    if ('java' in lang) {
        lang.helloJava();
    } else {
        lang.helloJavascript();
    }
    return lang;
}

// 方法3：typeof
function getLanguage3(type: Type, x: string | number) {
    let lang = type === Type.Strong ? new Java() : new Javascript();
    if (typeof x === 'string') {
        x.length;
    } else {
        x.toFixed(2);
    }
    return lang;
}

// 方法4：类型保护
// 通过创建一个类型保护函数来判断对象类型
function isJava(lang: Java | Javascript): lang is Java {//这种返回值类型叫类型谓词
    return (lang as Java).helloJava !== undefined;
}

function getLanguage4(type: Type, x: string | number) {
    let lang = type === Type.Strong ? new Java() : new Javascript();

    if (isJava(lang)) {
        lang.helloJava();
    } else {
        lang.helloJavascript();
    }
    return lang;
}

// 不同的判断方法有不同的使用场景：
// typeof：判断一个变量的类型
// instanceof：判断一个实例是否属于某个类
// in：判断一个属性是否属于某个对象
// 类型保护函数：某些判断可能不是一条语句能够搞定的，需要更多复杂的逻辑，适合封装到一个函数内