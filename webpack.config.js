const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path= require('path')

const mode =process.env.NODE_ENV || 'development'

module.exports = {
    mode:'development',
    entry:'./src/app/index.js',
    output:{
        path:path.resolve(__dirname, 'dist'),
        clean:true,
        filename:'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
      },

    plugins: [
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname, 'public', 'index.html')
        })],

    module: {
        rules:[
            {
                test:/\.html$/i,
                loader:'html-loader'
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader",
                ],
              },
              {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },

        ]
    }         
}