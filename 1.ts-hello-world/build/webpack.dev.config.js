module.exports = {
    devtool: 'cheap-module-eval-source-map'
}
//需要安装它，cheap表示source map忽略文件列信息，module表示会定位到ts源码而不是编译后的代码，eval-source map表示会将source map以data-url的形式打包到文件中