const webpack = require("webpack");
const path = require("path");
const autoprefixer = require("autoprefixer");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: [
      path.join(__dirname, "src", "index.js"),
      path.join(__dirname, "src", "css", "main.scss")
    ]
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "./js/[name].bundle.js",
    sourceMapFilename: "[name].bundle.map"
  },

  mode: "development",

  devtool: "#source-map",

  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        exclude: /node_modules/,
        use: [
          MiniCSSExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html")
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()]
      }
    }),
    new MiniCSSExtractPlugin({
      filename: "./css/[name].bundle.css"
    }),
    new OpenBrowserPlugin({
      url: "http://localhost:3000"
    })
  ],

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  }
};
