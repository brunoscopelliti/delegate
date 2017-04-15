// Karma configuration
// Generated on Sat Apr 15 2017 07:18:20 GMT+0200 (CEST)

const path = require('path');

const sourceDirectory = path.join(__dirname, 'src');;
const testDirectory = path.join(__dirname, 'tests');

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
    reporters: ['progress'],


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
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
