import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
module.exports = {
    entry: {
        app: ['webpack/hot/only-dev-server', "./app/app.jsx"]
    },
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.js$/, loader: 'babel-loader' },
            {
                test: /\.jsx$/, loader: 'babel-loader',
                query:
                {
                    presets: ['react']
                }
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
        inline: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};