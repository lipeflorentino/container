const { override, addWebpackPlugin } = require('customize-cra');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  webpack: override(
    addWebpackPlugin(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: './src/services/openId/openId.js',
            to: 'openId.js',
          },
          {
            from: './src/services/openId/oidc-client.min.js',
            to: 'oidc-client.min.js',
          },
        ],
      })
    ),
  ),
};
