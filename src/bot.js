const { getData, doTapTap } = require('./api');

async function runBot(PRIVATE_KEY, amount, isCron = false) {
  try {
    const profile = await getData(PRIVATE_KEY);
    console.log(
      `Hello ${profile.user.firstName} ${profile.user.lastName}, welcome to Happy Cuan Bot!`
        .yellow
    );
    console.log('');
    console.log(`Your details 👇`.yellow);
    console.log(`TON: ${profile.asset.ton}`.yellow);
    console.log(`BOX: ${profile.asset.box}`.yellow);
    console.log(`Today's Total: ${profile.boxxer.tap.todayTotal}`.yellow);
    console.log(`Today's Left: ${profile.boxxer.tap.todayLeft}`.yellow);
    console.log(`Total Times: ${profile.boxxer.tap.totalTimes}`.yellow);
    console.log(`Box Per Tap: ${profile.boxxer.tap.boxPerTap}`.yellow);
    console.log('');

    if (isCron) {
      amount = profile.boxxer.tap.todayLeft;
    }

    if (amount > profile.boxxer.tap.todayLeft) {
      console.log(`You can't do more than your available taps!`.red);
    } else {
      const response = await doTapTap(PRIVATE_KEY, amount);
      if (response !== undefined) {
        console.log(`All processes have been completed!`.green);
        console.log('');
        if (response > 0) {
          console.log(`You can still tap ${response} more time(s).`.green);
        } else {
          console.log(`All chances have been used, try again tomorrow!`.red);
        }
      }
    }
  } catch (error) {
    console.error(`Error in runBot: ${error.message}`.red);
  }
}

module.exports = { runBot };
