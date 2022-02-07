module.exports = {
  mode: 'production',
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      // swiper.min.cssをjsで読み込ませるための記述　ここから↓
      // {
      //   // node_module内のcss
      //   test: /node_modules\/(.+)\.css$/,
      //   use: [
      //     {
      //       loader: 'style-loader',
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: { url: false },
      //     },
      //   ],
      //   sideEffects: true, // production modeでもswiper-bundle.cssが使えるように
      // },
      // ↑ここまで
    ],
  },
  target: ['web', 'es5'],
};
