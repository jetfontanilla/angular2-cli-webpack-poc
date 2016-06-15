import { Angular2PocPage } from './app.po';

describe('angular2-poc App', function() {
  let page: Angular2PocPage;

  beforeEach(() => {
    page = new Angular2PocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-poc works!');
  });
});
