const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index'),
    output: {
        path: path.resolve('dist', 'app'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            '~': path.resolve(__dirname, 'src')
        }
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico|ogg|mp3|wav)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=assets/[name].[ext]']
            },
            {
                test: /\.(woff2)$/,
                use: ['file-loader']
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'www', 'index.html')
        }),
        new HtmlWebpackPartialsPlugin([
            {
                path: path.join(__dirname, 'www', 'partials', '_yaMetrika.html'),
                priority: 'low',
                location: 'head'
            }
        ]),
        new MiniCssExtractPlugin(),
        
        /*new CopyPlugin({
            patterns: [{from: path.resolve('tmp', 'some.json'), to: 'some'}]
        })*/
    ]
};
