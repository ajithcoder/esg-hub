// Generated from: tests\features\esg_hub_tests\end-to-end-topic-task-creation-test.feature
import { test } from "../../../../../tests/fixtures/fixtures.ts";

test.describe('End-to-End Task Creation Flow', () => {
  test.describe.configure({"mode":"serial"});

  test('Navigate to the Topic Overview page and open the topic \'\'Test Topic\'\' from the list', { tag: ['@mode:serial'] }, async ({ Given, dashboardPage, When, And, topicsOverviewPage, Then, topicDetailPage }) => { 
    await Given('the user is logged in and reached the ESG Hub dashboard', null, { dashboardPage }); 
    await When('the user selects the Topics module from the navigation bar', null, { dashboardPage }); 
    await And('the user selects "Test Topic" from the list', null, { topicsOverviewPage }); 
    await Then('the "Test topic" details page should open', null, { topicDetailPage }); 
  });

  test.describe('Create a new task via the Task tab', () => {

    test('Example #1', { tag: ['@mode:serial'] }, async ({ Given, topicDetailPage, When, And, Then, taskViewPage }) => { 
      await Given('the user is on the Test Topic details page', null, { topicDetailPage }); 
      await When('the user opens the side drawer', null, { topicDetailPage }); 
      await And('selects the "Task" tab', null, { topicDetailPage }); 
      await Then('the Task tab should display an add button', null, { topicDetailPage }); 
      await When('the user clicks the add button', null, { topicDetailPage }); 
      await And('fills the task form with:', {"dataTable":{"rows":[{"cells":[{"value":"Title"},{"value":"Alpha Task"}]},{"cells":[{"value":"Description"},{"value":"Complete all the alpha tasks"}]},{"cells":[{"value":"Assignees"},{"value":"Verso Maintenance"}]},{"cells":[{"value":"Deadline"},{"value":"15 MÄRZ 2025"}]},{"cells":[{"value":"Status"},{"value":"Open"}]}]}}, { taskViewPage }); 
      await And('user clicks the Save button and notification "Task Created Successfully" displayed', null, { taskViewPage }); 
      await Then('the task "Alpha Task" should be created successfully', null, { taskViewPage }); 
    });

    test('Example #2', { tag: ['@mode:serial'] }, async ({ Given, topicDetailPage, When, And, Then, taskViewPage }) => { 
      await Given('the user is on the Test Topic details page', null, { topicDetailPage }); 
      await When('the user opens the side drawer', null, { topicDetailPage }); 
      await And('selects the "Task" tab', null, { topicDetailPage }); 
      await Then('the Task tab should display an add button', null, { topicDetailPage }); 
      await When('the user clicks the add button', null, { topicDetailPage }); 
      await And('fills the task form with:', {"dataTable":{"rows":[{"cells":[{"value":"Title"},{"value":"Beta Task"}]},{"cells":[{"value":"Description"},{"value":"Complete all the beta tasks"}]},{"cells":[{"value":"Assignees"},{"value":"Verso Maintenance"}]},{"cells":[{"value":"Deadline"},{"value":"15 FEB. 2026"}]},{"cells":[{"value":"Status"},{"value":"In Progress"}]}]}}, { taskViewPage }); 
      await And('user clicks the Save button and notification "Task Created Successfully" displayed', null, { taskViewPage }); 
      await Then('the task "Beta Task" should be created successfully', null, { taskViewPage }); 
    });

    test('Example #3', { tag: ['@mode:serial'] }, async ({ Given, topicDetailPage, When, And, Then, taskViewPage }) => { 
      await Given('the user is on the Test Topic details page', null, { topicDetailPage }); 
      await When('the user opens the side drawer', null, { topicDetailPage }); 
      await And('selects the "Task" tab', null, { topicDetailPage }); 
      await Then('the Task tab should display an add button', null, { topicDetailPage }); 
      await When('the user clicks the add button', null, { topicDetailPage }); 
      await And('fills the task form with:', {"dataTable":{"rows":[{"cells":[{"value":"Title"},{"value":"Gamma Task"}]},{"cells":[{"value":"Description"},{"value":"Complete all the gamma tasks"}]},{"cells":[{"value":"Assignees"},{"value":"Verso Maintenance"}]},{"cells":[{"value":"Deadline"},{"value":"25 DEZ. 2025"}]},{"cells":[{"value":"Status"},{"value":"Done"}]}]}}, { taskViewPage }); 
      await And('user clicks the Save button and notification "Task Created Successfully" displayed', null, { taskViewPage }); 
      await Then('the task "Gamma Task" should be created successfully', null, { taskViewPage }); 
    });

  });

  test('Verify newly created Task in Dashboard    # this Scenario intends to cover the navigation from Tasks tab to dashboard too.', { tag: ['@mode:serial'] }, async ({ Given, topicDetailPage, When, And, Then, taskViewPage, dashboardPage }) => { 
    await Given('the user is on the Test Topic details page', null, { topicDetailPage }); 
    await When('the user opens the side drawer', null, { topicDetailPage }); 
    await And('selects the "Task" tab', null, { topicDetailPage }); 
    await Then('a task "Alpha Task" exists in the Task tab', null, { taskViewPage }); 
    await When('the user selects the Dashboard module from the navigation bar', null, { dashboardPage, taskViewPage }); 
    await Then('the user finds "Alpha Task" on the tab "My VERSO Tasks"', null, { dashboardPage }); 
    await And('the user finds "Alpha Task" on the tab "Tasks created by me"', null, { dashboardPage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\esg_hub_tests\\end-to-end-topic-task-creation-test.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":7,"pickleLine":4,"tags":["@mode:serial"],"steps":[{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged in and reached the ESG Hub dashboard","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the user selects the Topics module from the navigation bar","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And the user selects \"Test Topic\" from the list","stepMatchArguments":[{"group":{"start":17,"value":"\"Test Topic\"","children":[{"start":18,"value":"Test Topic","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then the \"Test topic\" details page should open","stepMatchArguments":[{"group":{"start":4,"value":"\"Test topic\"","children":[{"start":5,"value":"Test topic","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":27,"tags":["@mode:serial"],"steps":[{"pwStepLine":17,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given the user is on the Test Topic details page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user opens the side drawer","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And selects the \"Task\" tab","stepMatchArguments":[{"group":{"start":12,"value":"\"Task\"","children":[{"start":13,"value":"Task","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the Task tab should display an add button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When the user clicks the add button","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And fills the task form with:","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"And user clicks the Save button and notification \"Task Created Successfully\" displayed","stepMatchArguments":[{"group":{"start":45,"value":"\"Task Created Successfully\"","children":[{"start":46,"value":"Task Created Successfully","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then the task \"Alpha Task\" should be created successfully","stepMatchArguments":[{"group":{"start":9,"value":"\"Alpha Task\"","children":[{"start":10,"value":"Alpha Task","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":27,"pickleLine":28,"tags":["@mode:serial"],"steps":[{"pwStepLine":28,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given the user is on the Test Topic details page","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user opens the side drawer","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And selects the \"Task\" tab","stepMatchArguments":[{"group":{"start":12,"value":"\"Task\"","children":[{"start":13,"value":"Task","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the Task tab should display an add button","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When the user clicks the add button","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And fills the task form with:","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"And user clicks the Save button and notification \"Task Created Successfully\" displayed","stepMatchArguments":[{"group":{"start":45,"value":"\"Task Created Successfully\"","children":[{"start":46,"value":"Task Created Successfully","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then the task \"Beta Task\" should be created successfully","stepMatchArguments":[{"group":{"start":9,"value":"\"Beta Task\"","children":[{"start":10,"value":"Beta Task","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":38,"pickleLine":29,"tags":["@mode:serial"],"steps":[{"pwStepLine":39,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given the user is on the Test Topic details page","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user opens the side drawer","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And selects the \"Task\" tab","stepMatchArguments":[{"group":{"start":12,"value":"\"Task\"","children":[{"start":13,"value":"Task","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":42,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the Task tab should display an add button","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When the user clicks the add button","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And fills the task form with:","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"And user clicks the Save button and notification \"Task Created Successfully\" displayed","stepMatchArguments":[{"group":{"start":45,"value":"\"Task Created Successfully\"","children":[{"start":46,"value":"Task Created Successfully","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":46,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then the task \"Gamma Task\" should be created successfully","stepMatchArguments":[{"group":{"start":9,"value":"\"Gamma Task\"","children":[{"start":10,"value":"Gamma Task","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":51,"pickleLine":31,"tags":["@mode:serial"],"steps":[{"pwStepLine":52,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"Given the user is on the Test Topic details page","stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When the user opens the side drawer","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"And selects the \"Task\" tab","stepMatchArguments":[{"group":{"start":12,"value":"\"Task\"","children":[{"start":13,"value":"Task","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":55,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then a task \"Alpha Task\" exists in the Task tab","stepMatchArguments":[{"group":{"start":7,"value":"\"Alpha Task\"","children":[{"start":8,"value":"Alpha Task","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":56,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When the user selects the Dashboard module from the navigation bar","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then the user finds \"Alpha Task\" on the tab \"My VERSO Tasks\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Alpha Task\"","children":[{"start":16,"value":"Alpha Task","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":39,"value":"\"My VERSO Tasks\"","children":[{"start":40,"value":"My VERSO Tasks","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":58,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"And the user finds \"Alpha Task\" on the tab \"Tasks created by me\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Alpha Task\"","children":[{"start":16,"value":"Alpha Task","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":39,"value":"\"Tasks created by me\"","children":[{"start":40,"value":"Tasks created by me","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end