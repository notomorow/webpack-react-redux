// ===>>> 0. 直接使用 yarn run start，使用weback-dev-server直接会起一个最简单的hot-server
// ===>>>    但是这个hot-server不强大，需要自己配置，但是不用急着做，等需要的时候再加。
// ===>>>    所以你可以删掉yarn run bash这个script
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        // ===>>> 1. 入口文件在webpack2中，只需要这样就行，你那种配置方法是webpack1的方式
        // ===>>> 2. 改成绝对路径不会出现在不同开发环境冒出的问题
        app: path.join(__dirname, "./app/app.jsx")
    },
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader', enforce: "pre" },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.js$/, loader: 'babel-loader' },
            {
                test: /\.jsx$/,
                loaders: ['react-hot-loader', 'babel-loader?presets[]=react,presets[]=es2015']
            },
        ]
    },
    // ===>>> 3. https://webpack.js.org/configuration/dev-server/
    // ===>>>    具体的配置，你看官网的，webpack自带的devServer已经覆盖了大部分功能，
    // ===>>>    不需要自己再去包装一个 类似你刚刚bash webpackServer方法
    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 8080,
        hot: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
    }
    // ===>>> 4. 刚刚你的plugins，主要用于处理index.html文件，比如打包，热加载，但是如果你暂时不需要打包和配置，你可以先不用加

};