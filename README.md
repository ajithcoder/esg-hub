

-------------------------------------------------------------------------------------------

## Verso-ESG-HUB

This repository contains test autoation scripts for ESG-HUB application functionality Topics Tasks using Playwright Typescript and BDD (Behavior-Driven Development) approach in Page Object Model design pattern. 

The test artifacts of the functional testing performed , such as Test case documentation, Defect Reports and a Defect Tracker is also part of this repository.

## Project Structure

- **.github/**: Enabling CI run on GitHub Actions
- **.auth/**: Contains session storge for reusing sessions (added to .gitignore)
- **bddtests/**: Contains BDD specific auto generated test spec files to execute the playwright test.Gets created with command npx bddgen
- **pages/**: Contains page object models for different pages in the application.
- **playwright-report/**: Contains the Playwright test report.
- **tests/**: Contains feature files, step definition files, and fixtures.
- **utils/**: Contains helper functions that are generally used in the Framework
- **.env/**: Contains login credentials (added to .gitignore)
- **playwright.config.ts**: Contains playwright configurations as well as bdd specific configurations
- **Test Artifacts**: Contains test case documentation, defect reports and defect tracker.

## Key Features:

- **Automated Cookies handling(Storage state reuse)**
- **BDD Framework with feature file having steps written with GHERKIN keywords**
- **Reusable steps with parameterisation**
- **Customized scripts to enable bdd file creation and test run on single command**
- **Additionally added package : playwright-bdd - to make the playwright tests with BDD format**
- **Helper functions to handle progress bar overlay, notification handler etc**
- **Parallel run**
- **Enabled to run on CI - Github Actions**

## Setup
    
    npm init playwright@latest

    npm i -D @playwright/test playwright-bdd 

    npm install dotenv --save-dev

## Configuration
The Playwright configuration is located in playwright.config.ts. It includes settings for playwright test executions as well as playwright-bdd specific configurations

## Running the test
To run the end-to-end tests, use the following command:
This will generate the BDD test files and execute the Playwright tests.
  
  ```sh  
  npm run test:e2e
  ```  
Other commands:

* To make the test run when the bdd test scripts are already available.
    ```sh  
    npx playwright test 
    ```  
* To create the bdd test scripts when changes are made to step files or feature files
    ```sh  
    npx bddgen 
    ```  

## Test Reports

After running the tests, you can view the test report by opening playwright-report/index.html in your browser. If the port forwarding is enabled, the reports can be configured to open automatically after test run.



