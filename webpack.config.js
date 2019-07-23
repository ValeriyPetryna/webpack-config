const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        personal: './src/app/personal.js',
        messenger: './src/app/messenger.js',
        account : './src/app/account.js',
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
            filename: 'account.html',
            chunks: ['account'],
            template: './src/templates/profile/account.pug' 
        }),
        new HtmlWebpackPlugin({ 
            filename: 'personal.html',
            chunks: ['personal'],
            template: './src/templates/profile/personal.pug' 
        }),
        new HtmlWebpackPlugin({
            filename: 'messenger.html',
            chunks: ['messenger'],
            template: './src/templates/messenger/index.pug'
        }),
        new CopyWebpackPlugin([{
            from: './src/images',
            to: 'images'
        }])
    ]
};