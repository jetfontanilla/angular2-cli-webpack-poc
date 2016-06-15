const webpack = require('webpack');

module.exports = {
    entry: {
        "angular2/learn-app": './dist/main.js',
        "common/vendor": ['jquery', 'lodash', 'moment']
    },
    output: {
        path: './src/main/webapp/public/js/',
        filename: '[name].js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            _: "lodash",
            moment: "moment"
        }),
        new webpack.optimize.CommonsChunkPlugin("vendor", "common/[name].js"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
    ]
};