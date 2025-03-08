
import { test as baseTest, createBdd } from 'playwright-bdd';
import { DashboardPage } from '../../pages/dashboardPage';
import { TopicDetailPage } from '../../pages/topicDetailPage';
import { LoginPage } from '../../pages/loginPage';
import { TaskViewPage } from '../../pages/taskViewPage';
import { TopicsOverviewPage } from '../../pages/topicsOverviewPage';

type Pages = {
  dashboardPage: DashboardPage;
  topicDetailPage: TopicDetailPage;
  loginPage: LoginPage;
  taskViewPage: TaskViewPage;
  topicsOverviewPage: TopicsOverviewPage;
};

export const test = baseTest.extend<Pages>({
  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new DashboardPage(page);
    await use(dashboardPage);
  },
  topicDetailPage: async ({ page }, use) => {
    const topicDetailPage = new TopicDetailPage(page);
    await use(topicDetailPage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  taskViewPage: async ({ page }, use) => {
    const taskViewPage = new TaskViewPage(page);
    await use(taskViewPage);
  },
  topicsOverviewPage: async ({ page }, use) => {
    const topicsOverviewPage = new TopicsOverviewPage(page);
    await use(topicsOverviewPage);
  },
});


export const { Given, When, Then } = createBdd(test); // enabling test with BDD style
export const expect = test.expect;