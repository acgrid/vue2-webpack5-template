import path from 'path'
import { Configuration, HotModuleReplacementPlugin, ProvidePlugin, DefinePlugin } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { VueLoaderPlugin } from 'vue-loader'

console.log('process.env.NODE_ENV :>> ', process.env.NODE_ENV)

const extractor = process.env.NODE_ENV === 'production' ? { loader: MiniCssExtractPlugin.loader }: { loader: 'vue-style-loader' }

export default {
  entry: ['./src/main.ts'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css|sass|scss$/,
        use: [
          extractor,
          {
            loader: 'css-loader',
            options: { importLoaders: 2 }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env', {}]],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.less$/i,
        use: [
          extractor,
          {
            loader: 'css-loader',
            options: { importLoaders: 2 }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env', {}]],
              }
            }
          },
          {
            loader: 'less-loader'
          },
        ],
      },
      {
        test: /\.ts|js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          },
        ],
      },
      {
        // webpack5 内置了 asset 模块, 用来代替 file-loader & url-loader & raw-loader 处理静态资源
        test: /\.(png|jpe?g|gif|ico)/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: 'images/[base]',
        },
      },
      {
        test: /\.txt|xlsx/,
        type: 'asset',
        generator: {
          filename: 'files/[base]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new ProvidePlugin({
      Vue: ['vue/dist/vue.runtime.esm.js', 'default'],
    }),
    new DefinePlugin({}),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
    plugins: [
      // 将 tsconfig 中配置的路径别名映射到 webpack.resolve.alias 上
      new TsconfigPathsPlugin(),
    ],
  },
  performance: {
    maxAssetSize: 1048576,
    maxEntrypointSize: 1048576,
  },
  devtool:
    // https://github.com/vuejs/vue-loader/issues/1795
    process.env.NODE_ENV === 'development' ? 'eval' : 'nosources-source-map',
  devServer: {
    open: true,
    port: 8888,
    compress: true,
  },
} as Configuration
