Feature: User Authentication Tests

  Background:
    Given the user launches the application and reaches login page

  Scenario: User logs in with valid credentials
    When the user enters valid username and password in the login form
    And the user clicks the Sign in button
    Then the user login should be success and should be redirected to the ESG Hub dashboard

  Scenario: User logs in with invalid credentials
    When the user enters invalid username and password in the login form
    And the user clicks the Sign in button
    Then the user login should fail and should see an error message
