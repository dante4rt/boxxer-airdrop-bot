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

module.exports = { delay, displayHeader };
