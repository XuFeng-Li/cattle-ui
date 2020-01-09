const path = require("path");
var webpack = require("webpack");
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent')
// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  // config.module.rules.push({
  //   test: /\.less$/,
  //   use: ['style-loader', 'css-loader', {
  //       loader: 'less-loader',
  //       options: {
  //           javascriptEnabled: true
  //       }
  //   }],
  //   include: path.resolve(__dirname, '../'),
  // });
  config.module.rules.push({
    test: /\.less$/,
    use: [
<<<<<<< HEAD
      "style-loader",
      {
        loader: "css-loader",
        options: {
          importLoaders: 2,
          modules: true,
          getLocalIdent: getCSSModuleLocalIdent
        }
      },
      // "css-loader",
      {
        loader: "less-loader",
        options: {
          javascriptEnabled: true
        }
      }
    ],
    include: path.resolve(__dirname, "../")
=======
      'style-loader',
      { loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
      { loader: 'less-loader', options: { javascriptEnabled: true } },
      // 'postcss-loader'
    ],
    include: path.resolve(__dirname, '../'),
>>>>>>> 3e6df031db7b1adca1390fd63adede42e66ff54d
  });
  config.module.rules.push({
    test: /\.tsx?$/i,
    use: [
      {
        loader: "ts-loader"
      }
    ],
    include: path.resolve(__dirname, "../")
  });
  config.plugins.push(
    new webpack.ProvidePlugin({
      React: "react"
    })
  );
  // Return the altered config
  return config;
};
