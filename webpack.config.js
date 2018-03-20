const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const client = {
  entry: { app: './client/src/index.js' },
  // externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './client/public/index.html'
    })
  ],
  devServer: {
    contentBase: './build'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'env', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].[ext]' }
          }
        ]
      }
    ]
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },
  mode: 'production'
};

// const server = {
//   entry: './ssr/server.js',
//   target: 'node',
//   externals: [nodeExternals()],
//   output: {
//     path: path.join(__dirname, '/build'),
//     filename: 'server.js',
//     libraryTarget: 'commonjs2'
//   },
//   module: {
//     rules: [
//       {
//         test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
//         loader: 'file-loader',
//         options: {
//           name: '[name].[ext]',
//           emit: false
//         }
//       },
//       {
//         test: /\.css$/,
//         use: [
//           {
//             loader: 'css-loader/locals'
//           }
//         ]
//       },
//       {
//         test: /js$/,
//         exclude: /(node_modules)/,
//         loader: 'babel-loader',
//         query: { presets: ['react'] }
//       }
//     ]
//   },
//   plugins: [
//     new CleanWebpackPlugin(),
//     new webpack.DefinePlugin({
//       __isBrowser__: 'false'
//     })
//   ]
// };

exports.default = [client];
