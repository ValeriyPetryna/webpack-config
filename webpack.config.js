const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        personal: './src/app/personal.js',
        messenger: './src/app/messenger.js',
        account: './src/app/account.js',
        signin1: './src/app/signin1.js',
        passwordrecovery: './src/app/passwordrecovery.js',
        passwordrecovery2: './src/app/passwordrecovery2.js',
        passwordrecovery3: './src/app/passwordrecovery3.js',
        signup1: './src/app/signup1.js',
        signup2: './src/app/signup1.js',
        signup3: './src/app/signup1.js',
        signup4: './src/app/signup1.js',
        signup5: './src/app/signup1.js',
        signup6: './src/app/signup1.js',
    },
    output: {
        filename: "bundles/[name].js",
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },

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
                            outputPath: 'images/',
                            name: '[name].[ext]'
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
        new HtmlWebpackPlugin({
            filename: 'signin1.html',
            chunks: ['signin1'],
            template: './src/templates/signin/signin1.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'passwordrecovery.html',
            chunks: ['passwordrecovery'],
            template: './src/templates/signin/passwordrecovery.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'passwordrecovery2.html',
            chunks: ['passwordrecovery2'],
            template: './src/templates/signin/passwordrecovery2.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'passwordrecovery3.html',
            chunks: ['passwordrecovery3'],
            template: './src/templates/signin/passwordrecovery3.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'signup1.html',
            chunks: ['signup1'],
            template: './src/templates/signup/signup1.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'signup2.html',
            chunks: ['signup2'],
            template: './src/templates/signup/signup2.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'signup3.html',
            chunks: ['signup3'],
            template: './src/templates/signup/signup3.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'signup4.html',
            chunks: ['signup4'],
            template: './src/templates/signup/signup4.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'signup5.html',
            chunks: ['signup5'],
            template: './src/templates/signup/signup5.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'signup6.html',
            chunks: ['signup6'],
            template: './src/templates/signup/signup6.pug'
        }),
        new MiniCssExtractPlugin({
            filename: 'style/[name].css'
        }),
        new CopyWebpackPlugin([{
            from: './src/images',
            to: 'images'
        }])
    ]
};