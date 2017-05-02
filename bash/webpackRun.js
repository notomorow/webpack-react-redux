// var webpack = require("webpack")
import webpack from "webpack";
import webpackDevServer from "webpack-dev-server";
import config from "../webpack.config.js";
config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");
var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
    publicPath: "http://localhost:8080/app",
    hot: false,
});
server.listen(8080);