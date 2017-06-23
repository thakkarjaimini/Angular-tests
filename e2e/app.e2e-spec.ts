import { MyAngularTestsPage } from './app.po';

describe('my-angular-tests App', () => {
  let page: MyAngularTestsPage;

  beforeEach(() => {
    page = new MyAngularTestsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
