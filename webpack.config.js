const HtmlWebpackPlugin = require('html-webpack-plugin');

// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

const ESLintPlugin = require('eslint-webpack-plugin');

const IconfontWebpackPlugin = require('iconfont-webpack-plugin');

// const stylesHandler = MiniCssExtractPlugin.loader;

module.exports = {
  mode: 'development',
  entry: {
    bundle: './src/app/index.js',
    main: './src/app/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new ESLintPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: ['style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: (loader) => ({
                plugins: [
                  new IconfontWebpackPlugin({
                    resolve: loader.resolve,
                    fontNamePrefix: 'custom-',
                    enforcedSvgHeight: 3000,
                  }),
                ],
              }),
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
      },

    ],
  },
};
