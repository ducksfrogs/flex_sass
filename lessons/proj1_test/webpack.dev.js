const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge( common, {
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8081,
        hot: true
    },
});
