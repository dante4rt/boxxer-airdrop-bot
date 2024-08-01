function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log('========================================'.cyan);
  console.log('=          Boxxer Airdrop Bot          ='.cyan);
  console.log('=     Created by HappyCuanAirdrop      ='.cyan);
  console.log('=    https://t.me/HappyCuanAirdrop     ='.cyan);
  console.log('========================================'.cyan);
  console.log();
}

function calculateAmount(todayLeft) {
  let amount = 0;
  let taps = 0;

  while (amount + taps + 1 <= todayLeft) {
    taps++;
    amount += taps;
  }

  return taps;
}

module.exports = { delay, displayHeader, calculateAmount };
