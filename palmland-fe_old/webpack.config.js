module.exports = {
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        // Other loaders that are needed for your components
        {
          test: /\.mp4$/,
          use: {
            loader: "resolve-url-loader",
          },
          loader: "resolve-url-loader",
        },
        {
          test: /\.(jpg|png|mp4)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 25000,
            },
          },
        },
      ],
    },
  },
};
