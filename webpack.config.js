const path = require('path');
const uglifyJSPlugin = require('uglifyjs-webpack-plugin');
const dev = process.env.NODE_ENV === "dev";


 let config = {
  mode:"development",
  watch: true,
  entry: './src/main.js',
  watch: true,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [

    ]
  },
  plugins: [

  ]
};

if(!dev) {
  config.plugins.push(new uglifyJSPlugin())
}

module.exports = config;