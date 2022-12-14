const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.argv.indexOf('--mode=production') === -1;

module.exports = {
  mode: 'development',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    extensions: ['.js', '.tsx', '.ts'],
    modules: [path.resolve(__dirname, '../node_modules')], // 查找第三方模块只在本项目的node_modules中查找
  },
  cache: {
    type: 'filesystem', // 使用文件缓存
  },
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    publicPath: '/',
    filename: '[name].[chunkhash:8].js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[contenthash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.less$/, // less/css后缀文件
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            // 配置参数
            options: {
              postcssOptions: {
                // 添加前缀
                plugins: [
                  require('autoprefixer')({
                    overrideBrowserslist: [
                      'last 2 version',
                      '> 1%',
                      'iOS >= 7',
                      'Android > 4.1',
                      'Firefox > 20',
                    ],
                  }),
                  require('postcss-preset-env'),
                ],
              },
            },
          },
          'less-loader',
          {
            loader: 'thread-loader',
            options: {
              workerParallelJobs: 2,
            },
          },
        ], // 从右向左解析原则
        exclude: /[\\/]node_modules[\\/]/,
      },
      { test: /\.css$/, loader: 'css-loader' },
      {
        test: /\.(svg)$/i, //svg文件
        use: ['svg-loader'],
        exclude: /[\\/]node_modules[\\/]/,
      },
      {
        test: /\.(jpe?g|png|gif)$/i, //图片文件
        type: 'asset/resource',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          },
        },
        generator: {
          filename: 'img/[name].[contenthash:8].[ext]',
        },
        exclude: /[\\/]node_modules[\\/]/,
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, //媒体文件
        type: 'asset/resource',
        generator: {
          filename: 'media/[name].[contenthash:8].[ext]',
        },
        exclude: /[\\/]node_modules[\\/]/,
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, // 字体
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[contenthash:8].[ext]',
        },
        exclude: /[\\/]node_modules[\\/]/,
      },
      {
        test: /\.(t|j)(s|sx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env', '@babel/preset-typescript'],
          },
        },
        include: path.resolve(__dirname, '../src'),
        exclude: /[\\/]node_modules[\\/]/,
      },
    ],
  },
};
