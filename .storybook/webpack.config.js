const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push(      {
    test: /\.(css|styl)$/,
    include: path.join(__dirname, 'client'),
    use: [
      {
        loader: 'style-loader' // creates style nodes from JS strings
      },
      {
        loader: 'css-loader' // translates CSS into CommonJS
      },
      {
        loader: 'stylus-loader' // compiles Stylus to CSS
      }
    ]
  },);

  // Return the altered config
  return config;
};