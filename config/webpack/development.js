const { distPath, publicPath } = require("../shared");
const { root, entries: entry } = require("../entries");

const webpack = require("webpack");
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const ProvidePlugin = webpack.ProvidePlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry,
    output: {
        filename: "[name].js",
        path: distPath,
        publicPath
    },
    devtool: "inline-source-map",
    resolve: {
        extensions: [".ts", ".js", ".json"]
    },
    module: {
        rules: [{
                enforce: "pre",
                test: /\.ts$/,
                include: [root("../src")],
                loader: "tslint-loader",
                exclude: /node_modules/
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
            {
                enforce: "pre",
                test: /\.ts$/,
                use: "source-map-loader"
            },
            {
                test: /\.ts$/,
                include: [root("../src")],
                loader: "awesome-typescript-loader",
                exclude: /node_modules/,
                options: {
                    configFileName: root("../src/client/tsconfig.json")
                }
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                loader: "file-loader",
                options: {
                    name: "static/[name]-[hash].[ext]",
                }
            }
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: "static",
            reportFilename: '../../__reports/bundles-report.html',
            openAnalyzer: false
        }),
        new ProvidePlugin({
            moment: "moment"
        }),
        new HtmlWebpackPlugin({
            template: "!!html-loader!./src/client/index.html"
        }),
        new CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.js",
            minChunks: 2
        })
    ]
};