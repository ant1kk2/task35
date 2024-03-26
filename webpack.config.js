const HtmlPlugin = require("html-webpack-plugin");
const CssPlugin = require("mini-css-extract-plugin");
const path = require("path");
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: "./src/index.jsx",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle_[fullhash].js",
    clean: true,
  },
  plugins: [
    new HtmlPlugin({
      template: "./src/index.html",
    }),
    new CssPlugin({
      filename: "style_[fullhash].css",
    }),
  ],
  module: {
    rules: [
      {
        //babel
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },

      {
        test: /\.scss$/,
        use: [
          CssPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer('last 2 versions'),
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          CssPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer({
                    browsers: ['last 2 versions'],
                  }),
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/", // каталог, куда будут скопированы изображения в сборке
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port: 7777,
    static: {
      directory: path.join(__dirname, "build"),
    },
    devMiddleware: {
      writeToDisk: true,
    },
    historyApiFallback: true,
  },
  optimization: {
    concatenateModules: true,
  },
};
