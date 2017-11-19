const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    context: __dirname,
    entry: ['./js/index.jsx'],
    devtool: process.env.NODE_ENV === 'development' ? 'cheap-eval-source-map' : false,
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.[hash].js',
        publicPath: '/public/'
    },
    devServer: {
        //  hot: true,
        publicPath: '/public/',
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        //alias: {
        //    react: 'preact-compat',
        //    'react-dom': 'preact-compat'
        //}
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index-tpl.html',
            filename: '../index.html'
        }),
        new UglifyJSPlugin()
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NamedModulesPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                loaders: [
                    'style-loader?sourceMap',
                    'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
                ]
            },
            {
                test: /\.less$/,
                loaders: [
                    'style-loader?sourceMap',
                    'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'less-loader'
                ]
            },

            //{
            //    enforce: 'pre',
            //    test: /\.jsx?$/,
            //    loader: 'eslint-loader',
            //    exclude: /node_modules/
            //},
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [path.resolve('js'), path.resolve('node_modules/preact-compat/src')]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            }
        ]
    }
};
//
//if (process.env.NODE_ENV === 'development') {
//    config.entry.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000');
//}

module.exports = config;
