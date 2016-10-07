var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {

    context: path.resolve(__dirname, "app"),
    entry: [
        './less/index.less',
        './index.ts'
    ],
    output: {
        path: 'dist',
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    resolve: {
        modulesDirectories: ['node_modules', 'app'],
        extensions: ['', '.ts', '.js', 'css']
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body',
            hash: true
        }),
        new webpack.DefinePlugin({
            'process.env.NL_ENV': JSON.stringify(process.env.NL_ENV || 'dev')
        })
    ],
    module: {
        loaders: [{
                test: /\.ts$/,
                loader: 'ts-loader'
            }, {
                test: /\.html$/,
                loader: 'html-loader'
            }, {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.png$/,
                loader: "url?limit=10000&mimetype=image/png"
            }, {
                test: /\.(woff|woff2)$/,
                loader: "url?prefix=font/&limit=5000"
            }, {
                test: /\.ttf$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot$/,
                loader: "file"
            }, {
                test: /\.svg$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ]
    },
    node: {
        net: 'empty',
        tls: 'empty',
        dns: 'empty'
    }
}
