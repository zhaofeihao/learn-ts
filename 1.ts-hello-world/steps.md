### 初始化工程
``` bash
# 忽略所有提问，全部默认yes
npm init -y
```

### 全局安装 typescript 
``` bash
npm i typescript -g
```
在命令行中输入 `tsc -h` 可以查看帮助信息

### 创建 typescript 配置项
``` bash
tsc --init
```

### 编译你的 .ts 文件
``` bash
tsc ./src/index.ts
```
可以看到输出的 `index.js` 文件中编译好的内容为纯JavaScript

### 配置构建工具：webpack
需要装 3 个依赖：
``` bash
npm i webpack webpack-cli webpack-dev-server -D
```
配置 webpack 时需要区分开发环境和生产环境，因为两个环境的配置不同，做不同的事情

为了工程的可维护性，我们需要将 `开发环境` 、 `生产环境` 和 `公共` 配置分开书写，最后通过插件来合并

根据 webpack 的各项配置，安装相应的 loader、plugin 等

``` bash
npm i ts-loader typescript -D //这里需要再次本地安装一次 typescript
npm i html-webpack-plugin -D
npm i clean-webpack-plugin -D
npm i webpack-merge -D
```

### 修改 package.json 配置
``` javascript
"main": "./src/index.ts",
"start": "webpack-dev-server --mode=development --config ./build/webpack.config.js",
```

### 启动本地 server
``` bash
npm start
```
本地 server 启动，在浏览器打开 localhost 的 8080 端口进行查看

### 设置生产环境的启动命令
``` bash
"build": "webpack --mode=production --config ./build/webpack.config.js",
```
运行：`npm run build`，可以看到生成了 dist 目录 