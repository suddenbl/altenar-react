import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'

type Mode = 'production' | 'development'

interface EnvVariables {
  mode: Mode
  port: number
}

export default (env: EnvVariables) => {
  const isDev = env.mode === 'development'

  const config: webpack.Configuration = {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: [
      new FaviconsWebpackPlugin('public/favicon.ico'),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:3].css',
        chunkFilename: 'css/[name].[contenthash:3].css',
      }),
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.s[ac]ss$/i,
          use: [!isDev && MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: isDev ? 'inline-source-map' : false,
    devServer: isDev
      ? {
          port: env.port ?? 3000,
          open: true,
          historyApiFallback: true,
        }
      : undefined,
  }
  return config
}
