import { Given, When, Then } from "../fixtures/fixtures";

Then(
  "the {string} details page should open",
  async ({ topicDetailPage }, topicName: string) => {
    await topicDetailPage.verifyTopicDetailViewPageTitleInput(topicName);
  }
);

Given(
  "the user is on the Test Topic details page",
  async ({ topicDetailPage }) => {
    await topicDetailPage.routeToPage();
    await topicDetailPage.verifyAdminNavbarCurrentPage();
  }
);

When("the user opens the side drawer", async ({ topicDetailPage }) => {
  await topicDetailPage.clickOpenSideDrawerButton();
});

When(
  "selects the {string} tab",
  async ({ topicDetailPage }, tabName: string) => {
    await topicDetailPage.selectTabFromSideDrawer(tabName);
  }
);

Then(
  "the Task tab should display an add button",
  async ({ topicDetailPage }) => {
    await topicDetailPage.verifyTaskTabDisplayedWithAddButton();
  }
);

When("the user clicks the add button", async ({ topicDetailPage }) => {
  await topicDetailPage.clickAddButton();
});
