module.exports = {
  mode: "development",
  entry: `./src/js/app.js`,
  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.js$/,
        exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
        use: [
          {
            // Babel
            loader: 'babel-loader',
            // Babel のオプションを指定する
            options: {
              presets: [
                // ES2020 を ES5 に変換
                '@babel/preset-env',
              ]
            }
          }
        ]
      },
      {
        test: /node_modules\/(.+)\.css$/, // swiper-bundle.cssを使う
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: { url: false },
          },
        ],
        sideEffects: true, // production modeでもswiper-bundle.cssが使えるように
      },
    ]
  },
  output: {
    filename: "bundle.js"
  },

};