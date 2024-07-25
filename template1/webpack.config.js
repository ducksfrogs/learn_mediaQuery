const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: './main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8081,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ],
            },

        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),

    ],
    devtool: 'source-map',
    watchOptions: {
        ignored: /node_modudes/
    }
}
