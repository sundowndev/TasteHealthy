const nodeExternals = require('webpack-node-externals');
const path = require('path');

const root = process.env.ROOT_PROGRAM || path.resolve('./server');

module.exports = {
  mode: 'development',
  // watch: true,
  entry: path.join(root, 'index.js'),
  resolve: {
    modules: ['./node_modules'],
    alias: { '@': path.join(root, 'app') },
    extensions: ['.js', '.json', '.pem'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
    ],
  },
  target: 'node',
  output: {
    path: path.join(root, 'build'),
    filename: 'server.js',
  },
  externals: [nodeExternals()],
  devtool: 'eval-cheap-module-source-map',
  plugins: [],
};
