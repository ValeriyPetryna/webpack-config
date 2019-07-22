const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        profile: './src/app/profile.js'
    },
    output: {
        filename: "bundles/[name].js",
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'pug-loader',
                        options: {
                            pretty: true
                        }
                    }
                ]
            },
            {
                test: /\.njk$/,
                use: [
                    'html-loader',
                    {
                        loader: 'nunjucks-html-loader',
                        options: {
                            searchPaths: ['./src/templates'],
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'img/',
                            name: '[name].[ext]',
                            publicPath: '/'
                        }
                    }
                ],
            }
        ]
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            filename: 'index.html',
            template: './src/index.html' 
        }),
        new HtmlWebpackPlugin({
            filename: 'another.html',
            template: './src/templates/messanger/index.pug'
        }),
        new CopyWebpackPlugin([{
            from: './src/images',
            to: 'images'
        }])
    ]
};