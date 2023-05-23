const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge( common, {
    mode: 'development',
    output: {
        filename: './main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8081,
        hot: true
    },
});
