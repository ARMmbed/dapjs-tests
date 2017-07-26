const path = require('path');
const webpack = require("webpack");

module.exports = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, './bin'),
        filename: 'dap.bundle.js'
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: "ts-loader", exclude: /node_modules|bin/ }
        ]
    },
    devtool: 'source-map'
};
