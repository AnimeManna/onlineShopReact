var config = {
   entry: './index.js',

   node: {
     __dirname: true
   },

   output: {

      path:__dirname + '/public/',
      publicPath:'/public/',
      filename: 'bundle.js',
   },

   devServer: {
      inline: true,
      port: 8080
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
