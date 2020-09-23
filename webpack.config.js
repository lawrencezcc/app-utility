const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return {
    entry: './client/index.jsx',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'public'),
    },
    mode: (env && env.NODE_ENV) || 'development',
    module: {
      rules: [
        {
          test: /\.js(x?)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.s[ac]ss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.less$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  modifyVars: {
                    'layout-header-background': '#fff',
                  },
                  javascriptEnabled: true,
                },
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.scss'],
    },
    // devServer: {
    //   publicPath: '/dist/',
    //   contentBase: path.join(__dirname, 'public'),
    //   port: 8800,
    //   hot: true,
    // },
    devtool: 'source-map',
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Mini Bid',
        filename: path.resolve(__dirname, 'public/index.html'),
        reactWrapperId: 'app',
        template: path.resolve(__dirname, 'client/pages/template/index.html'),
      }),
    ],
  };
};
