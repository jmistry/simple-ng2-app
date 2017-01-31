import { SimpleNg2AppPage } from './app.po';

describe('simple-ng2-app App', function() {
  let page: SimpleNg2AppPage;

  beforeEach(() => {
    page = new SimpleNg2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
