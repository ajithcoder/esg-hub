import { Given, When, Then } from "../fixtures/fixtures";

When("the user selects {string} from the list", async ({topicsOverviewPage}, topicName: string) => {
    await topicsOverviewPage.openTopicListItem(topicName);   
 });

