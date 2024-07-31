require('colors');
const fs = require('fs');
const readlineSync = require('readline-sync');
const cron = require('node-cron');
const { displayHeader } = require('./src/utils');
const { runBot } = require('./src/bot');

const PRIVATE_KEYS = JSON.parse(fs.readFileSync('privateKeys.json', 'utf-8'));

(async () => {
  displayHeader();
  console.log(`Please wait...`.yellow);
  console.log('');

  const mode = readlineSync.question(
    'Pick mode (0 for one-time, 1 for 24-hour): '
  );

  for (const PRIVATE_KEY of PRIVATE_KEYS) {
    if (mode === '1') {
      console.log(`Running bot immediately...`.blue);
      await runBot(PRIVATE_KEY, 0, true);

      console.log(`Bot is set to run every 24 hours.`.blue);
      cron.schedule('0 0 * * *', async () => {
        await runBot(PRIVATE_KEY, 0, true);
      });
    } else {
      try {
        const amount = readlineSync.question(
          'How many taps do you want to perform? '
        );
        await runBot(PRIVATE_KEY, amount);
      } catch (error) {
        console.error(`Error in IIFE: ${error.message}`.red);
      }
    }
  }

  console.log(
    `Bot has been set up. Subscribe: https://t.me/HappyCuanAirdrop`.blue
  );
})();