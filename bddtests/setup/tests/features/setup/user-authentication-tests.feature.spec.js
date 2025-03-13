// Generated from: tests\features\setup\user-authentication-tests.feature
import { test } from "../../../../../tests/fixtures/fixtures.ts";

test.describe('User Authentication Tests', () => {
  test.describe.configure({"mode":"parallel"});

  test.beforeEach('Background', async ({ Given, loginPage }) => {
    await Given('the user launches the application and reaches login page', null, { loginPage }); 
  });
  
  test('User logs in with valid credentials', { tag: ['@mode:parallel'] }, async ({ When, loginPage, And, Then, dashboardPage }) => { 
    await When('the user enters valid username and password in the login form', null, { loginPage }); 
    await And('the user clicks the Sign in button', null, { loginPage }); 
    await Then('the user login should be success and should be redirected to the ESG Hub dashboard', null, { loginPage, dashboardPage }); 
  });

  test('User logs in with invalid credentials', { tag: ['@mode:parallel'] }, async ({ When, loginPage, And, Then }) => { 
    await When('the user enters invalid username and password in the login form', null, { loginPage }); 
    await And('the user clicks the Sign in button', null, { loginPage }); 
    await Then('the user login should fail and should see an error message', null, { loginPage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\setup\\user-authentication-tests.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":7,"tags":["@mode:parallel"],"steps":[{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user launches the application and reaches login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When the user enters valid username and password in the login form","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And the user clicks the Sign in button","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the user login should be success and should be redirected to the ESG Hub dashboard","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":12,"tags":["@mode:parallel"],"steps":[{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user launches the application and reaches login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When the user enters invalid username and password in the login form","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And the user clicks the Sign in button","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then the user login should fail and should see an error message","stepMatchArguments":[]}]},
]; // bdd-data-end