import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
module.exports = {
    entry: {
       app: ['webpack/hot/only-dev-server',"./app/run1.js"]
    },
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    devServer:{
        historyApiFallback: true,
        inline:true
    },
    plugins: [    
    new webpack.HotModuleReplacementPlugin()
  ]
};