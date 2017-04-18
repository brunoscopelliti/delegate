// Karma configuration
// Generated on Sat Apr 18 2017 06:36:42 GMT+0200 (CEST)

const path = require('path');

const sourceDirectory = path.join(__dirname, 'src');;
const testDirectory = path.join(__dirname, 'tests');

// Use ENV vars on Travis and sauce.json locally to get credentials
// https://docs.saucelabs.com/ci-integrations/travis-ci/
if (!process.env.SAUCE_USERNAME) {
  process.env.SAUCE_USERNAME = require('./sauce').username;
  process.env.SAUCE_ACCESS_KEY = require('./sauce').accessKey;
}


// Browsers to run on Sauce Labs
const customLaunchers = {
    'SL_Chrome': {
        base: 'SauceLabs',
        browserName: 'chrome',
        platform: 'windows 8'
    },
    'SL_Firefox': {
        base: 'SauceLabs',
        browserName: 'firefox',
        platform: 'linux'
    },
    'SL_Safari': {
        base: 'SauceLabs',
        browserName: 'safari',
        version: '10.0',
        platform: 'OS X 10.12'
    },
    'SL_Edge': {
        base: 'SauceLabs',
        browserName: 'MicrosoftEdge',
        version: '14.14393',
        platform: 'Windows 10'
    },
    'SL_IE11': {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        version: '11.0',
        platform: 'Windows 8.1'
    }
};


module.exports = function(config) {

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['qunit'],


    // list of files / patterns to load in the browser
    files: [
      'tests/*.js'
    ],


    // webpack configuration
    webpack: {
      module: {
        rules: [
          {
            test: /\.js$/,
            include:[
                sourceDirectory,
                testDirectory
            ],
            loader: 'babel-loader'
          }
        ]
      },
      resolve: {
        modules: [
          sourceDirectory,
          'node_modules'
        ]
      },
    },


    // source files, that you wanna generate coverage for
    // do not include tests or libraries
    // (these files will be instrumented by Istanbul)
    preprocessors: {
      'tests/index.js': ['webpack'],
    },


    // list of files to exclude
    exclude: [
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'saucelabs'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: Object.keys(customLaunchers),


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,


    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,


    sauceLabs: {
      testName: 'delegate.js',
      startConnect: false
    },


    // capture timeout
    // timeout for capturing a browser (in ms)
    captureTimeout: 120000,

    // browser disconnect timeout
    // how long does Karma wait for a browser to reconnect (in ms)
    browserDisconnectTimeout: 120000,

    // no activity timeout
    // how long will Karma wait for a message from a browser before disconnecting from it (in ms)
    browserNoActivityTimeout: 120000,

    customLaunchers: customLaunchers

  })
}
