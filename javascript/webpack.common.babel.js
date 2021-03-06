import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import BundleTracker from 'webpack-bundle-tracker'

export default {
    context: __dirname,
    entry: [
        require.resolve('../seedsource-core/javascript/src/index'),
        './scss/csrt.scss'
    ],
    plugins: [
        new BundleTracker({filename: '../webpack-stats.json'}),
        new ExtractTextPlugin({filename: '[name].[hash].bundle.css'})
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [path.resolve('./src'), path.resolve('../seedsource-core/javascript/src')],
                loader: 'babel-loader',
                query: {presets: [require.resolve('babel-preset-env'), require.resolve('babel-preset-react')]}
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|gif|jpe?g|svg|pdf)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash].[ext]'
                }
            },
            {
                test: /\.jison$/,
                loader: path.resolve('./loaders/jison-loader.js')
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve('./node_modules'),
            path.resolve('../seedsource-core/javascript/node_modules'),
            path.resolve('./src'),
            path.resolve('../seedsource-core/javascript/src'),
            path.resolve('../seedsource-core/javascript/scss'),
            path.resolve('./')
        ],
        alias: {
            core: path.resolve('../seedsource-core/javascript/src')
        },
        extensions: ['.js', '.jsx']
    },
    node: {
        fs: 'empty'
    }
}
