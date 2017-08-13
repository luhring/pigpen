// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.
const { CheckerPlugin } = require('awesome-typescript-loader')

const natives = Object.keys(process.binding("natives"))
  .filter(nativeDep => nativeDep[0] !== '_')
  .map(dep => ({name: dep, version: 'native'}));

module.exports = {
  target: "electron-renderer",

  entry: "./dist/react-app/index",

  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  // Source maps support ('inline-source-map' also works)
  devtool: 'source-map',

  // Add the loader for .ts files.
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },

  output: {
    filename: "./dist/react-app/bundle.js"
  },

  plugins: [
      new CheckerPlugin()
  ]
};
