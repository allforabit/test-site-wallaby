module.exports = function () {
  process.env.BABEL_ENV = 'test';
  process.env.NODE_ENV = 'test';
  return {
    files: [
      'jest-preprocess.js',
      'jest.config.js',
      'loadershim.js',
      'setup-riteway.js',
      'src/**/*.js', 
      '!src/**/__tests__/*.js',
      'node_modules/riteway-jest/**/*.js'
    ],

    tests: ['src/**/__tests__/*.js'],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest'
  };
};