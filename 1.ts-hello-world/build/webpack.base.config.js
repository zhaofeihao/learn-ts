const HtmlWebpackPlugin = require('html-webpack-plugin')
// 需要安装这个插件来帮助我们生成网站首页，同时把输出文件自动嵌入到首页中，npm i html-webpack-plugin -D

module.exports = {
    entry: './src/index.ts',//指定入口文件
    output: {
        filename: 'app.js' //指定输出文件
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'] // 指定三个扩展名
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i, 
                use: [{
                    loader: 'ts-loader' //需要为typescript安装相应loader，npm i ts-loader typescript -D,这里需要再次安装一下 typescript
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        })
    ]
}