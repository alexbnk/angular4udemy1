import { Carz4Page } from './app.po';

describe('carz4 App', () => {
  let page: Carz4Page;

  beforeEach(() => {
    page = new Carz4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
