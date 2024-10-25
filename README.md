# react-e2e-testing

# React E2E Testing Setup and Usage Guide

This document provides an overview of the completed setup for end-to-end (E2E) testing using Cypress in a React application. It covers the necessary configuration, commands, and instructions to help you start testing your application effectively.

## Project Setup

### 1. Install Dependencies

To get started, install the required dependencies for Cypress, Vite (or another React development server), and other utilities such as `start-server-and-test`:

```bash
npm install cypress vite start-server-and-test --save-dev
```

### 2. Project Structure

Ensure your project has the following structure:

```
project-root/
  ├── src/
  ├── public/
  ├── cypress/
  │   ├── e2e/
  │   │   ├── tabbed_component.cy.js
  │   ├── support/
  │   │   ├── commands.js
  │   │   ├── e2e.js
  ├── package.json
```

- **`tabbed_component.cy.js`**: This file contains Cypress tests for the tabbed component.
- **`commands.js`**: Contains reusable Cypress custom commands.
- **`e2e.js`**: Used to set up global configurations and event handlers for Cypress.

### 3. Cypress Test Script

The E2E tests for the tabbed component are defined in `cypress/e2e/tabbed_component.cy.js`. These tests include verifying the presence of tabs, switching content, and persisting the active tab.

Example content of `tabbed_component.cy.js`:

## Running the Server and Cypress Tests

### 1. Scripts in `package.json`

Add the following scripts to your `package.json` to facilitate running the server and tests:

```json
"scripts": {
  "start": "vite --port 3030",
  "cy:run": "cypress run",
  "test": "start-server-and-test start http://localhost:3030 cy:run"
}
```

- **`start`**: Starts the development server on port 3030.
- **`cy:run`**: Runs the Cypress tests in headless mode.
- **`test`**: Starts the server using `start-server-and-test` and runs the Cypress tests once the server is ready.

### 2. Running the Tests

To run the tests, execute the following command:

```bash
npm run test
```

This command will:

1. Start the development server on port 3030.
2. Wait until the server is reachable at `http://localhost:3030`.
3. Execute Cypress tests once the server is ready.

## Additional Notes

- **Cypress GUI**: If you want to run tests interactively, you can open Cypress with:

  ```bash
  npx cypress open
  ```

- **Server Port**: If port 3030 is already in use, you can change the port in the `"start"` script and update the URLs in the Cypress tests accordingly.

- **Custom Commands**: Add custom commands in `cypress/support/commands.js` to simplify repetitive actions in your tests.

## Summary

- Installed Cypress and other required tools.
- Created Cypress test files and organized the project structure.
- Configured scripts to run the development server and E2E tests effectively.
- Verified tabbed component functionality using Cypress E2E tests.

Feel free to reach out for further help or if additional configurations are needed. Happy testing!
