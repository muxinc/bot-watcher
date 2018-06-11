let path = require('path');
let fs = require('fs');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let players = fs.readdirSync('./players').map(player => `./players/${player}`);

const entry = Object.assign({
  app: './src/common.js'
}, players);

let playersStatic = players.map((player, i) => new HtmlWebpackPlugin({
  inject: "body",
  title: `Player ${i}`,
  chunksSortMode: 'manual',
  chunks: ['app', `${i}`],
  template: './static/player.html',
  filename: `player-${i}.html`,
}));

module.exports = {
  entry: entry,
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: process.env.NODE_ENV || 'development',
  devServer: {
    contentBase: path.join(__dirname, './'),
    compress: true,
    port: 9000
  },
  plugins: [...playersStatic],
  module: {
    rules: [
      {exclude: [/lib/, /node_modules/]},
    ]
  },
};
