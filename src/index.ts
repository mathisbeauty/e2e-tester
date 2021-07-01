// import GanacheChain from './chains/eth';

const startTests = async () => {
  // // Create adapter
  // const chainAdapter = new GanacheChain();
  // // Set DB path to create/load a checkpoint for the chain
  // // Start chain process
  // chainAdapter.start();
  // // Get chain process instance
  // const chainInstance = chainAdapter.getInstance();
  // setTimeout(() => {
  //   chainAdapter.stop();
  //   // process.exit(0);
  // }, 3000);
};

import { chromium } from 'playwright';

(async () => {
  // Make sure to run headed.
  const browser = await chromium.launch({ headless: false });

  // Setup context however you like.
  const context = await browser.newContext({
    /* pass any options */
  });
  await context.route('**/*', (route) => route.continue());

  // Pause the page, and start recording manually.
  const page = await context.newPage();
  await page.pause();
})();

// startTests();
