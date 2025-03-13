// Generated from: tests\features\esg_hub_tests\task-modifications-tests.feature
import { test } from "../../../../../tests/fixtures/fixtures.ts";

test.describe('Tasks modification tests', () => {
  test.describe.configure({"mode":"parallel"});

  test('Editing the tasks created', { tag: ['@mode:parallel'] }, async ({ Given, dashboardPage, When, topicDetailPage, And, Then, taskViewPage }) => { 
    await Given('the user is logged in and reached the ESG Hub dashboard', null, { dashboardPage }); 
    await When('the user opens "Alpha Task" from the "My VERSO Tasks" table', null, { dashboardPage }); 
    await When('the user opens the side drawer', null, { topicDetailPage }); 
    await And('selects the "Task" tab', null, { topicDetailPage }); 
    await Then('a task "Alpha Task" exists in the Task tab', null, { taskViewPage }); 
    await When('the user clicks on the task "Alpha Task"', null, { taskViewPage }); 
    await And('the user clicks on the edit button', null, { taskViewPage }); 
    await And('the user updates the status of task to "In Progress"', null, { taskViewPage }); 
    await And('user clicks the Save button and notification "Task updated" displayed', null, { taskViewPage }); 
    await And('the user selects the Dashboard module from the navigation bar', null, { dashboardPage, taskViewPage }); 
    await Then('the status of task "Alpha Task" is updated to "In progress"', null, { dashboardPage }); 
  });

  test('Deleting the tasks created', { tag: ['@mode:parallel'] }, async ({ Given, dashboardPage, When, topicDetailPage, And, Then, taskViewPage }) => { 
    await Given('the user is logged in and reached the ESG Hub dashboard', null, { dashboardPage }); 
    await When('the user opens "Beta Task" from the "My VERSO Tasks" table', null, { dashboardPage }); 
    await When('the user opens the side drawer', null, { topicDetailPage }); 
    await And('selects the "Task" tab', null, { topicDetailPage }); 
    await Then('a task "Beta Task" exists in the Task tab', null, { taskViewPage }); 
    await When('the user clicks on the task "Beta Task"', null, { taskViewPage }); 
    await And('the user clicks on the delete button', null, { taskViewPage }); 
    await Then('the task "Beta Task" is not found on the Tasks section', null, { taskViewPage }); 
    await When('the user selects the Dashboard module from the navigation bar', null, { dashboardPage, taskViewPage }); 
    await Then('the user does not finds "Beta Task" on the tab "My VERSO Tasks"', null, { dashboardPage }); 
    await And('the user does not finds "Beta Task" on the tab "Tasks created by me"', null, { dashboardPage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\esg_hub_tests\\task-modifications-tests.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":7,"pickleLine":4,"tags":["@mode:parallel"],"steps":[{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged in and reached the ESG Hub dashboard","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the user opens \"Alpha Task\" from the \"My VERSO Tasks\" table","stepMatchArguments":[{"group":{"start":15,"value":"\"Alpha Task\"","children":[{"start":16,"value":"Alpha Task","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":37,"value":"\"My VERSO Tasks\"","children":[{"start":38,"value":"My VERSO Tasks","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When the user opens the side drawer","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And selects the \"Task\" tab","stepMatchArguments":[{"group":{"start":12,"value":"\"Task\"","children":[{"start":13,"value":"Task","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then a task \"Alpha Task\" exists in the Task tab","stepMatchArguments":[{"group":{"start":7,"value":"\"Alpha Task\"","children":[{"start":8,"value":"Alpha Task","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When the user clicks on the task \"Alpha Task\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Alpha Task\"","children":[{"start":29,"value":"Alpha Task","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And the user clicks on the edit button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And the user updates the status of task to \"In Progress\"","stepMatchArguments":[{"group":{"start":39,"value":"\"In Progress\"","children":[{"start":40,"value":"In Progress","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And user clicks the Save button and notification \"Task updated\" displayed","stepMatchArguments":[{"group":{"start":45,"value":"\"Task updated\"","children":[{"start":46,"value":"Task updated","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And the user selects the Dashboard module from the navigation bar","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then the status of task \"Alpha Task\" is updated to \"In progress\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Alpha Task\"","children":[{"start":20,"value":"Alpha Task","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":46,"value":"\"In progress\"","children":[{"start":47,"value":"In progress","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":21,"pickleLine":17,"tags":["@mode:parallel"],"steps":[{"pwStepLine":22,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given the user is logged in and reached the ESG Hub dashboard","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When the user opens \"Beta Task\" from the \"My VERSO Tasks\" table","stepMatchArguments":[{"group":{"start":15,"value":"\"Beta Task\"","children":[{"start":16,"value":"Beta Task","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":36,"value":"\"My VERSO Tasks\"","children":[{"start":37,"value":"My VERSO Tasks","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When the user opens the side drawer","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And selects the \"Task\" tab","stepMatchArguments":[{"group":{"start":12,"value":"\"Task\"","children":[{"start":13,"value":"Task","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then a task \"Beta Task\" exists in the Task tab","stepMatchArguments":[{"group":{"start":7,"value":"\"Beta Task\"","children":[{"start":8,"value":"Beta Task","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When the user clicks on the task \"Beta Task\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Beta Task\"","children":[{"start":29,"value":"Beta Task","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And the user clicks on the delete button","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then the task \"Beta Task\" is not found on the Tasks section","stepMatchArguments":[{"group":{"start":9,"value":"\"Beta Task\"","children":[{"start":10,"value":"Beta Task","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When the user selects the Dashboard module from the navigation bar","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then the user does not finds \"Beta Task\" on the tab \"My VERSO Tasks\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Beta Task\"","children":[{"start":25,"value":"Beta Task","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":47,"value":"\"My VERSO Tasks\"","children":[{"start":48,"value":"My VERSO Tasks","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"And the user does not finds \"Beta Task\" on the tab \"Tasks created by me\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Beta Task\"","children":[{"start":25,"value":"Beta Task","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":47,"value":"\"Tasks created by me\"","children":[{"start":48,"value":"Tasks created by me","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end