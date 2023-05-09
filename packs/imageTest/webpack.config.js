const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: './main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8081,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                generator: {
                    filename: 'img/[name][ext][query]'
                },
                type: 'asset/resource'
                // use: [
                //     {
                //         loader: 'file-loader',
                //         options: {
                //             name: 'img/[name].[ext]'
                //         }
                //     }
                // ]
            }
        ]

    }
}