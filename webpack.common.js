const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: "./src/index.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: {presets: ["@babel/env"]}
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[path][name].[hash].[ext]",
                    },
                },
            }
        ]
    },
    resolve: {extensions: ["*", ".js", ".jsx"]},
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "[name].bundle.js",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production',
        })]
};