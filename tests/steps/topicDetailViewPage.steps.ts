import { Given, When, Then } from "../fixtures/fixtures";

Then("the {string} details page should open", async ({topicDetailPage}, topicName: string) => {
    await topicDetailPage.verifyTopicDetailViewPageTitleInput(topicName);
  });