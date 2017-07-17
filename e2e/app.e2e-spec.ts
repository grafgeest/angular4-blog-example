import { Angular4BlogExamplePage } from './app.po';

describe('angular4-blog-example App', () => {
  let page: Angular4BlogExamplePage;

  beforeEach(() => {
    page = new Angular4BlogExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
