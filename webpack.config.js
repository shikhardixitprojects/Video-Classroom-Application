const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        entry: path.resolve(__dirname, 'react/index.js')
    },
    output: {
        path: path.resolve(__dirname, '.tmp/public'),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                    "source-map-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                use: {
                    loader: "file-loader",
                    options:{
                        name:"images/[hash].[ext]",
                    }
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([".tmp/public"], { root: __dirname }),
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: path.resolve(__dirname,'react/index.html'),
          title: "Chatroom",
          hash: true
        }),
        new CopyWebpackPlugin([
            {
                from:path.resolve(__dirname, "react/dependencies/sails.io.js"),
                to:"js/dependencies/sails.io.js"
            },
        ])
    ],
    watch:true,
    devtool:'source-map',
    resolve:{
        extensions: [ ".js", ".jsx" ]
    }
}
