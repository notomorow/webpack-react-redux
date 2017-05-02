const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: ['webpack/hot/only-dev-server',"./app/run1.js"],
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: "bundle.js"
    },
    module: {

    },
    plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
};