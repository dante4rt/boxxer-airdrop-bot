require('colors');
const fs = require('fs');
const readlineSync = require('readline-sync');
const cron = require('node-cron');
const { displayHeader } = require('./src/utils');
const { runBot } = require('./src/bot');

const TOKENS = JSON.parse(fs.readFileSync('tokens.json', 'utf-8'));

(async () => {
  displayHeader();
  console.log(`Please wait...`.yellow);
  console.log('');

  const mode = readlineSync.question(
    'Pick mode (0 for one-time, 1 for 24-hour): '
  );

  const defaultAmount =
    mode === '1'
      ? 0
      : parseInt(
          readlineSync.question('How many taps do you want to perform? '),
          10
        );

  for (const TOKEN of TOKENS) {
    if (mode === '1') {
      console.log(`Running bot immediately...`.blue);
      await runBot(TOKEN, defaultAmount, true);

      console.log(`Bot is set to run every 24 hours.`.blue);
      cron.schedule('0 0 * * *', async () => {
        await runBot(TOKEN, defaultAmount, true);
      });
    } else {
      try {
        await runBot(TOKEN, defaultAmount);
      } catch (error) {
        console.error(`Error in IIFE: ${error.message}`.red);
      }
    }
  }

  console.log(
    `Bot has been set up. Subscribe: https://t.me/HappyCuanAirdrop`.blue
  );
})();
