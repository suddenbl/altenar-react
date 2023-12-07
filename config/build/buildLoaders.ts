import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { ModuleOptions } from 'webpack'
import { BuildOptions } from './types/types'

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development'

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader',
    ],
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [{ loader: '@svgr/webpack', options: { icon: true } }],
  }

  // const fileLoader = {
  //   test: /\.(png|jpe?g|gif)$/i,
  //   use: [
  //     {
  //       loader: 'file-loader',
  //     },
  //   ],
  // }

  const urlLoader = {
    test: /\.(png|jpg|gif)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    ],
  }

  return [scssLoader, tsLoader, svgLoader, urlLoader]
}
