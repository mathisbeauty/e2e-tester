import puppeteer from 'puppeteer';
import { GanacheChainAdapter, GanacheChainInstance } from '../../types';

export default class GanacheChain implements GanacheChainAdapter {
  private _instance: any | null;

  constructor() {
    this._instance = null;
  }

  async start(dbPath?: string) {
    await (async () => {
      const pathToExtension = require('path').join(
        __dirname,
        '../../../metamask/9.6.1',
        'nkbihfbeogaeaoehlefnkodbefgpgknn'
      );
      const browser = await puppeteer.launch({
        headless: false,
        args: [
          `--disable-extensions-except=${pathToExtension}`,
          `--load-extension=${pathToExtension}`,
          '--no-sandbox'
        ]
      });

      // Wait for metamask tab to open
      await new Promise<void>((resolve) => {
        const handler = () => {
          resolve();
          browser.off('targetcreated', handler);
        };
        browser.on('targetcreated', handler);
      });
      const pages = await browser.pages();
      if (pages.length === 2) {
        const page = pages[1];
        await page.waitForSelector('.first-time-flow__button');
        await page.click('.first-time-flow__button');
        await page.waitForSelector('.first-time-flow__button');
        await page.click('.first-time-flow__button');
        await page.waitForSelector(
          '[data-testid="page-container-footer-cancel"]'
        );
        await page.click('[data-testid="page-container-footer-cancel"]');
        await page.waitForSelector('[type="password"]');
        await page.waitForSelector('.first-time-flow__seedphrase input');
        const seedPhraseInput = await page.$(
          '.first-time-flow__seedphrase input'
        );
        if (seedPhraseInput) {
          await seedPhraseInput.type(
            'catch cable brass outdoor pride cup spread embrace liquid seek giraffe obey'
          );
        }
        const passwordFields = await page.$$('.first-time-flow__input input');
        for (let i = 0; i < passwordFields.length; i++) {
          await passwordFields[i].type('testtest');
        }
        await page.click('.first-time-flow__checkbox.first-time-flow__terms');
        await page.click('.first-time-flow__button');
        await page.waitForSelector('.end-of-flow__emoji');
        await page.click('.first-time-flow__button');
        await page.waitForSelector('[title="Close"]');
        await page.click('[title="Close"]');
        await page.waitForSelector('.identicon');
        await page.click('.identicon');
        await page.waitForSelector(
          '#app-content > div > div.account-menu > div:nth-child(7)'
        );
        await page.click(
          '#app-content > div > div.account-menu > div:nth-child(7)'
        );
      }
    })();
  }

  stop() {
    if (this._instance) {
      console.log(this._instance);
      // this._instance.stdin.setDefaultEncoding('utf-8');
      // console.log(this._instance.pid);
      // process.kill(this._instance.pid);
    }
  }

  getInstance() {
    return this._instance || null;
  }

  getRPCPath() {
    return 'http://localhost:8545';
  }
}
