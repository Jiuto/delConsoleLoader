const path = require("path");
module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: './bundle.js'
  },
  module:{
    rules:[{
        test:/\.js$/,
        use:[{
                loader:path.resolve(__dirname,'../index.js'),
                options:{
                  deleteConsole:true
                }
        }]
    }]
  }
};