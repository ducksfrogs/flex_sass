const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge( common, {
    mode: 'production',
    output: {
        filename: './main.js',
        path: path.resolve(__dirname, 'prod'),
    },
});
