const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const Dotenv = require('dotenv-webpack');

const isDev = process.env.NODE_ENV === 'development';
console.log('DEV', isDev);


const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;
const cssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {},
    },
    'css-loader'
  ];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  ];
  if (isDev) {
    loaders.push('eslint-loader');
  }
  return loaders;
};

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    },
  }

  if (!isDev) {
    config.minimizer = [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserPlugin(),
    ];
  }
  return config;
};

const plugins = () => {
  const base = [
    new HTMLWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: !isDev,
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
    new Dotenv(),
  ];

  if (!isDev) {
    base.push(new BundleAnalyzerPlugin());
  }

  return base;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', './index.tsx'],
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json', '.png'],
    alias: {
      'api': path.resolve(__dirname, 'src/api'),
      'components': path.resolve(__dirname, 'src/components'),
      'store': path.resolve(__dirname, 'src/store'),
      'models': path.resolve(__dirname, 'src/models'),
    }
  },
  devtool: isDev ? 'source-map' : 'nosources-source-map',
  optimization: optimization(),
  devServer: {
    port: 4200,
    hot: isDev,
  },
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            // options: {
            //   sourceMap: true,
            //   importLoaders: 2,
            // },
          },
          // { loader: 'scoped-css-loader' },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript']
          }
        }
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react']
          }
        }
      }
    ]
  }
};