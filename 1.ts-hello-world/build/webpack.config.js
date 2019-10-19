const merge = require('webpack-merge')//作用是把两个配置文件合并
const baseConfig = require('./webpack.base.config.js')
const devConfig = require('./webpack.dev.config.js')
const prdConfig = require('./webpack.prd.config.js')

module.exports = (env, argv) => {
    let config = argv.mode === 'development' ? devConfig : prdConfig;
    // 判断当前的环境变量，如果是开发环境就选用开发环境配置，否则选用生产环境的配置，最后将两个配置文件合并
    return merge(baseConfig, config);
};