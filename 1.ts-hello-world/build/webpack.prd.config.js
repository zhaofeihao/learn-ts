const { CleanWebpackPlugin } = require('clean-webpack-plugin')//需要安装它，npm i clean-webpack-plugin -D,作用是每次成功构建后帮助我们清空dist目录

module.exports = {
    plugins: [
        new CleanWebpackPlugin()
    ]
}