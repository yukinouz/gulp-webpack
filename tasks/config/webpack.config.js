module.exports = {
  mode: "production",
  entry: `./src/js/app.js`,
  module: {
    rules: [
      {
        test: /\.js$/,
        // IE対応 除外設定にSwiperを含めない
        exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
        use: [
          {
            // Babel
            loader: 'babel-loader',
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
        // node_modules内のcss
        test: /node_modules\/(.+)\.css$/,
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