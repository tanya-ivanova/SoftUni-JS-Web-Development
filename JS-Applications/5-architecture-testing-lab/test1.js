const { chromium } = require('playwright-chromium');
const { expect } = require('chai');
const { it } = require('node:test');

let browser, page; // Declare reusable variables

describe('E2E tests', async function() {
    this.timeout(5000);

    before(async () => { browser = await chromium.launch(); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });
  
    it('works', async () => {
        await page.goto('http://localhost:3000');
        await page.screenshot({path: 'site.png'});
    });
});