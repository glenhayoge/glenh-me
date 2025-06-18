module.exports = {
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.contentlayer\/generated\/.*\.mjs$/,
        type: 'javascript/auto',
      },
      {
        test: /\.json$/,
        type: 'javascript/auto',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.mjs', '.json'],
  },
}; 