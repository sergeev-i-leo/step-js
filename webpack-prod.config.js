const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HTMLInlineCSSPlugin = require("html-inline-css-webpack-plugin").default;
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require('webpack');
const path = require('path');
require('dotenv').config({ path: './.env' });

module.exports = {
  entry: `./src/${process.env.TARGET_FOLDER}index.ts`,
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          "html-loader",
          {
            loader: "posthtml-loader",
            options: {
              plugins: [
                require("posthtml-include")({
                  root: path.resolve(__dirname, "src"),
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
        filename: "assets/[name][ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.png', '.jpg', '.svg'],
    alias: {
      '@step-js-core': path.resolve(__dirname, './src/step-js/src/core'),
      '@step-js-widgets': path.resolve(__dirname, './src/step-js/src/widgets'),
      '@step-js-views': path.resolve(__dirname, './src/step-js/src/views'),
      '@step-js-bootstrap-widgets': path.resolve(__dirname, './src/step-js/src/bootstrap-widgets'),
      '@step-js-documents': path.resolve(__dirname, './src/step-js/src/documents'),
      '~images': path.resolve(__dirname, './src/assets/images')
    }
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: './',
    assetModuleFilename: "assets/[name][ext]",
    clean: true
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlInlineScriptPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: `src/${process.env.TARGET_FOLDER}index.html`,
      favicon: `src/${process.env.TARGET_FOLDER}favicon.ico`,
      inject: 'body'
    }),
    new HTMLInlineCSSPlugin(),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
  },
};
