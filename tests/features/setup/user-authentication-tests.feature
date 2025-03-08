Feature: User Authentication Tests

  Scenario: User logs in with valid credentials
    Given the user launches the application and reaches login page
    When the user enters valid username and password in the login form
    And the user clicks the Sign in button
    Then the user login should be success and should be redirected to the ESG Hub dashboard
