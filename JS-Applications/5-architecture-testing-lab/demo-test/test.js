const { chromium } = require('playwright-chromium');
const { expect } = require('chai');
let browser, page;
describe('test', async function() {
  this.timeout(5000);

  before(async () => { browser = await chromium.launch(); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });
  
    it('works ok', async () => {
        await page.goto('http://127.0.0.1:5500/01.%20Accordion/index.html');
        await page.screenshot({path: 'site.png'});
        expect(true).to.be.true;
    });
});