import { BlogChenxingPage } from './app.po';

describe('blog-chenxing App', () => {
  let page: BlogChenxingPage;

  beforeEach(() => {
    page = new BlogChenxingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
