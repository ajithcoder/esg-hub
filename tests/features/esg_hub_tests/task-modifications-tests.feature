@mode:parallel
Feature: Tasks modification tests

  Scenario: Editing the tasks created
    Given the user is logged in and reached the ESG Hub dashboard
    When the user opens "Alpha Task" from the "My Tasks" table
    When the user opens the side drawer
    And selects the "Task" tab
    Then a task "Alpha Task" exists in the Task tab
    When the user clicks on the task "Alpha Task"
    And the user clicks on the edit button
    And the user updates the status of task to "In Progress"
    And user clicks the Save button and notification "Task updated" displayed
    And the user selects the Dashboard module from the navigation bar
    Then the status of task "Alpha Task" is updated to "In progress"

  Scenario: Deleting the tasks created
    Given the user is logged in and reached the ESG Hub dashboard
    When the user opens "Beta Task" from the "My Tasks" table
    When the user opens the side drawer
    And selects the "Task" tab
    Then a task "Beta Task" exists in the Task tab
    When the user clicks on the task "Beta Task"
    And the user clicks on the delete button
    Then the task "Beta Task" is not found on the Tasks section
    When the user selects the Dashboard module from the navigation bar
    Then the user does not finds "Beta Task" on the tab "My Tasks"
    And the user does not finds "Beta Task" on the tab "Tasks created by me"

