const path = require('path');

module.exports = {
    assetsDir: '../static',
    //baseUrl: '',
    publicPath: './',
    outputDir: path.resolve(__dirname, '../app/templates'),
    runtimeCompiler: undefined,
    productionSourceMap: undefined,
    parallel: undefined,
    css: undefined
};