let hello: string = 'Hello TypeScript';

// document.querySelector('#app').innerHTML = hello;   
// 这里有一点奇怪的是，在index.html中使用id="app"，然后使用querySelector选择器就会导致报错，但实际上程序是能正常运行的
// 暂时还未找到原因，使用下面的方法可以规避报错
document.querySelectorAll('.app')[0].innerHTML = hello;