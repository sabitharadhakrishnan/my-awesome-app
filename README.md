# MyAwesomeApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

1. Create a new app using Angular CLI. First install Angular CLI if you have not already.


    npm install -g @angular/cli
    ng new my-awesome-app
    cd my-awesome-app

1. Add Cypress Angular Schematic to quickly get up and running with Cypress in your Angular project. To install the schematic via cli arguments


    ng add @cypress/schematic --e2e --component

1. Add a component to your project and add cypress component tests. I followed Cypress documentation for creating a component and add component tests. <https://docs.cypress.io/guides/component-testing/angular/quickstart>

1. Add script to execute component tests in package.json.


    "test:component": "cypress run --component --env coverage=true"

1. Install @cypress/code-coverage Cypress plugin.


    npm install -D @cypress/code-coverage

#### Configure Cypress Code Coverage Plugin

1. Open cypress/support/component.ts file and add the following code


    import '@cypress/code-coverage/support';

1. Add setupNodeEvents functions in cypress configuration to the cypress.config.ts file.

    
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      return config
    }

1. Add a new file in the cypress folder coverage.webpack.ts and update it with the following code in order to configure webpack to instrument our code while executing component testing.

    
    export default {
      module: {
        rules: [
          {
            test: /\.(ts)$/,
            use: {
            loader: 'babel-loader',
            options: {
              plugins: ['babel-plugin-istanbul']
            }
          },
          enforce: 'post',
          include: require('path').join(__dirname, '..', 'src'),
          exclude: [
            /node_modules/,
            /cypress/,
            /(ngfactory|ngstyle)\.js/]
          },
        ],
      },
    };

Add "node" to types array in cypress/tsconfig.json file

    "types": ["cypress","node"]

Add webpackConfig to the cypress devserver configuration for the component test to the cypress.config.ts file.

    devServer: {
      framework: 'angular',
      bundler: 'webpack',
      webpackConfig:coverageWebpack
    }

Be sure to import the webpack configuration we added in the cypress.config.ts file.

    import coverageWebpack from './cypress/coverage.webpack'

Add the following code to package.json so that istanbul will generate coverage for component tests in its own directory.

    "nyc": {
      "report-dir": "coverage-component"
    }
