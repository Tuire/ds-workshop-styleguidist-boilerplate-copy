module.exports = {
  components: "src/components/**/[A-Z]*.js",
  defaultExample: true,
  title: "Styleguidist Boilerplate",
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          loaders: [
            'style-loader',
            'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize'
          ]
        }
      ]
    }
  }
};
