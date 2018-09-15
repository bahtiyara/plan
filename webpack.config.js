const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        path: path.join(__dirname, '/public'),
        publicPath: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env']
                }
            }
        }]
    },
    devServer: {
        host: '0.0.0.0',
        historyApiFallback: true
    }
}