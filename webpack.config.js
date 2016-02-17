/**
 * Created by wuzhitian on 16-1-30.
 */

var path = require("path");
var webpack = require("webpack");
var HtmlwebpackPlugin = require("html-webpack-plugin");

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, "app");
var BUILD_PATH = path.resolve(ROOT_PATH, "build");

module.exports = {
    entry: {
        app: path.resolve(APP_PATH, "index.jsx")
    },

    output: {
        path: BUILD_PATH,
        filename: "bundle.js"
    },

    devtool: "eval-source-map",

    devServer: {
        hot: true,
        progress: true,
        inline: true,
        historyApiFallback: true
    },

    resolve: {
        extension: ["", ".js", ".jsx"]
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: APP_PATH
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            {
                test: /\.(jpg|png)$/,
                loader: "url?limit=400000"
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ]
    },

    plugins: [
        new HtmlwebpackPlugin({
            title: "My App"
        })
    ]
}