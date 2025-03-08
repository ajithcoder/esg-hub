@mode:serial
Feature: End-to-End Task Creation Flow

  Scenario: Navigate to the Topic Overview page and open the topic ''Test Topic'' from the list
    Given the user is logged in and reached the ESG Hub dashboard
    When the user selects the Topics module from the navigation bar
    And the user selects "Test Topic" from the list
    Then the "Test topic" details page should open
    
#   Scenario: Open Task Tab via Side Drawer
#     Given the user is on the Test Topic details page
#     When they click the side drawer (top right)
#     And select the "Task" tab
#     Then the Task tab should display:
#       | Element             |
#       | "+" button          |
#       | Existing tasks list |
#   Scenario: Create Task with Valid Data
#     Given the user is on the Task tab
#     When they click the "+" button
#     And fill out the task form with:
#       | Field       | Value               |
#       | Title       | Complete UI Testing |
#       | Description | Test all task flows |
#       | Due Date    |          2024-12-31 |
#     And click the "Save" button
#     Then the task "Complete UI Testing" should appear in the Task tab
#   Scenario: Create Task with Invalid Data
#     Given the user is on the Task tab
#     When they click the "+" button
#     And fill out the task form with:
#       | Field       | Value               |
#       | Title       | Complete UI Testing |
#       | Description | Test all task flows |
#       | Due Date    |          2024-12-31 |
#     And click the "Save" button
#     Then the task "Complete UI Testing" should appear in the Task tab
#   Scenario: Verify Task in Dashboard
#     Given a task "Complete UI Testing" exists in the Task tab
#     When the user navigates to the Dashboard
#     And selects the "Task created by me" tab
#     Then the task "Complete UI Testing" should be listed
#   Scenario: Edit Task via UI
#     Given the task "Complete UI Testing" exists in the Task tab
#     When the user clicks on the task "Complete UI Testing"
#     And updates the due date to "2025-01-15"
#     And clicks the "Save" button
#     Then the task "Complete UI Testing" should show the updated due date in:
#       | Location  |
#       | Task tab  |
#       | Dashboard |
#   Scenario: Delete Task via UI
#     Given the task "Complete UI Testing" exists in the Task tab
#     When the user clicks on the task "Complete UI Testing"
#     And clicks the "Delete" button
#     And confirms the deletion
#     Then the task "Complete UI Testing" should no longer appear in:
#       | Location  |
#       | Task tab  |
#       | Dashboard |
