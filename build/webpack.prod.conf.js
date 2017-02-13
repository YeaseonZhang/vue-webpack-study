let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = require('./webpack.config');

config.plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),

    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),

    new webpack.LoaderOptionsPlugin({
        options: {
            vue: {
                loaders: {
                    css: ExtractTextPlugin.extract('css-loader')
                }
            },
            vendors: [
                'Vue'
            ]
        }
    }),

    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors',
        filename: 'vendors.js'
    }),

    new ExtractTextPlugin('../[name].[contenthash].css'),
    
    new HtmlWebpackPlugin({
        filename: '../index.html',
        template: path.resolve(__dirname, '../app/index/index.html'),
        inject: true
    })

]

module.exports = config;