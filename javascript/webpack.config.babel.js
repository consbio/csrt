import path from 'path'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import BundleTracker from 'webpack-bundle-tracker'

const mode = process.env.NODE_ENV || 'development'
const production = mode === 'production'
const bundleTracker = new BundleTracker({ filename: '../webpack-stats.json' })

export default {
  context: __dirname,
  mode,
  target: ['web', 'es5'],
  entry: [path.resolve('./src/index'), path.resolve('./scss/csrt.scss')],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash].bundle.js',
    publicPath: production ? 'https://climaterestorationtool.org/static/' : 'http://127.0.0.1:3000/assets/bundles/',
    crossOriginLoading: production ? false : 'anonymous',
  },
  devServer: {
    hot: false,
    host: '127.0.0.1',
    port: 3000,
    headers: { 'Access-Control-Allow-Origin': '*' },
    devMiddleware: {
      index: true,
      publicPath: 'http://127.0.0.1:3000/assets/bundles/',
    },
  },
  optimization: {
    minimize: production,
    splitChunks: { cacheGroups: { default: false } },
  },
  resolve: {
    modules: ['node_modules', './src'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    mainFields: ['browser', 'module', 'main'],
    fallback: {
      buffer: require.resolve('buffer/'),
      stream: require.resolve('stream-browserify/'),
      fs: false,
      path: require.resolve('path-browserify/'),
      process: require.resolve('process/'),
    },
    alias: {
      'react': path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
      'react-redux': path.resolve('./node_modules/react-redux'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules\/.*\/dist\/.*/],
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: [/node_modules\/.*\/dist\/.*/],
        use: [
          {
            loader: 'babel-loader',
          },
          { loader: 'ts-loader' },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|gif|jpe?g|svg|pdf)$/,
        type: 'asset/resource',
        generator: {
          filename: '[name].[hash][ext]',
        },
      },
      {
        test: /\.jison$/,
        loader: path.resolve('./loaders/jison-loader.js'),
      },
    ],
  },
  plugins: [
    new webpack.ids.HashedModuleIdsPlugin(),
    bundleTracker,
    new MiniCssExtractPlugin({ filename: '[name].[hash].bundle.css' }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: ['process'],
    }),
  ],
}
