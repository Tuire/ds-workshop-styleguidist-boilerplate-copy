"use strict";

const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const path = require("path");
const env = require("yargs").argv.env;

process.env.BABEL_ENV = env;
process.env.NODE_ENV = env;

let libraryName = "my-awesome-library";
let plugins = [
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  }),
  new webpack.NamedModulesPlugin()
];

if (env === "production") {
  plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
}

const paths = {
  libSrc: path.resolve(__dirname, "src"),
  libIndex: path.resolve(__dirname, "src/index.js"),
  libOutputDir: path.resolve(__dirname, "lib"),
  libModules: path.resolve(__dirname, "node_modules")
};

module.exports = {
  entry: paths.libIndex,
  devtool: "source-map",
  output: {
    path: paths.libOutputDir,
    filename: libraryName + ".js",
    library: libraryName,
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        loaders: [
          "style-loader",
          "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize"
        ]
      }
    ]
  },
  resolve: {
    modules: [paths.libModules, paths.libSrc],
    extensions: [".json", ".js", ".jsx"]
  },
  externals: [nodeExternals()],
  plugins: plugins,
  node: {
    fs: "empty"
  }
};
