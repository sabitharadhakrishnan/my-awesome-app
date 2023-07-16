import { defineConfig } from 'cypress'
import coverageWebpack from './cypress/coverage.webpack'

export default defineConfig({

  e2e: {
    'baseUrl': 'http://localhost:4200'
  },


  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
      webpackConfig:coverageWebpack
    },
    specPattern: '**/*.cy.ts',
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      return config
    },
  }

})
