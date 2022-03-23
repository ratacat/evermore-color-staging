const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    allowedHosts: 'all',
    compress: true,
    hot: true,
    watchFiles: ['library/*.txt'],
    client: {
      webSocketURL: 'ws://0.0.0.0:80/ws',
    },
  },
  module: {
    rules: [
      {
        test: /\.txt$/i,
        use: 'raw-loader',
      },
    ],
  },
};
