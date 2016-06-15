export class Angular2PocPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-poc-app h1')).getText();
  }
}
