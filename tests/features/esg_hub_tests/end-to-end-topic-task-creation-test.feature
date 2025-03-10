@mode:serial
Feature: End-to-End Task Creation Flow

  Scenario: Navigate to the Topic Overview page and open the topic ''Test Topic'' from the list
    Given the user is logged in and reached the ESG Hub dashboard
    When the user selects the Topics module from the navigation bar
    And the user selects "Test Topic" from the list
    Then the "Test topic" details page should open

  Scenario Outline: Create a new task via the Task tab
    Given the user is on the Test Topic details page
    When the user opens the side drawer
    And selects the "Task" tab
    Then the Task tab should display an add button
    When the user clicks the add button
    And fills the task form with:
      | Title       | <Title>       |
      | Description | <Description> |
      | Assignees   | <Assignees>   |
      | Deadline    | <Deadline>    |
      | Status      | <Status>      |
    And user clicks the Save button and notification "Task Created Successfully" displayed
    Then the task "<Title>" should be created successfully

    Examples:
      | Title      | Description                  | Assignees         | Deadline     | Status      |
      | Alpha Task | Complete all the alpha tasks | Verso Maintenance | 15 MÄRZ 2025 | Open        |
      | Beta Task  | Complete all the beta tasks  | Verso Maintenance | 15 FEB. 2026 | In progress |
      | Gamma Task | Complete all the gamma tasks | Verso Maintenance | 25 DEZ. 2025 | Done        |

  Scenario: Verify newly created Task in Dashboard    # this Scenario intends to cover the navigation from Tasks tab to dashboard too.
    Given the user is on the Test Topic details page
    When the user opens the side drawer
    And selects the "Task" tab
    Then a task "Alpha Task" exists in the Task tab
    When the user selects the Dashboard module from the navigation bar
    Then the user finds "Alpha Task" on the tab "My VERSO Tasks"
    And the user finds "Alpha Task" on the tab "Tasks created by me"
