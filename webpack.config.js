var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path = require('path');
var basePath = __dirname;

module.exports = {
    context: path.join(basePath, 'src'),
    entry: {
        app: './main.js',
        appStyles: [
            './mystyles.scss',
        ],
        vendor: [
            '@babel/polyfill'
        ]
    },
    output: {
        filename: '[name].[chunkhash].bundle.js'
    },
    devServer: {
        port: 8081,
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                    test: 'vendor',
                    enforce: true,
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=45000',
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
                }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', 
            template: 'index.html', 
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}