Create a new app using Angular CLI. First install Angular CLI if you have not already

    npm install -g @angular/cli
    ng new my-awesome-app
    cd my-awesome-app

Add Cypress to the app

    npm install cypress -D

Add Cypress Angular Schematic to quickly get up and running with Cypress in your Angular project. To install the schematic via cli arguments

    ng add @cypress/schematic --e2e --component

Add a component to your project and add cypress component tests. I followed Cypress documentation for creating a component and add component tests. <https://docs.cypress.io/guides/component-testing/angular/quickstart>
