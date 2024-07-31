const { default: axios } = require('axios');
const { delay } = require('./utils');

const HEADERS = {
  accept: '*/*',
  'accept-encoding': 'gzip, deflate, br, zstd',
  'accept-language': 'en-US,en;q=0.9',
  'cache-control': 'no-cache',
  'content-type': 'application/json',
  origin: 'https://app.boxxer.world',
  pragma: 'no-cache',
  priority: 'u=1, i',
  referer: 'https://app.boxxer.world/',
  'sec-ch-ua': '"Not)A;Brand";v="99", "Brave";v="127", "Chromium";v="127"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"macOS"',
  'sec-fetch-dest': 'empty',
  'sec-fetch-mode': 'cors',
  'sec-fetch-site': 'same-site',
  'sec-gpc': '1',
  'user-agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
};

async function getData(token) {
  try {
    const { data } = await axios({
      url: 'https://api.boxxer.world/auth/user/info',
      method: 'POST',
      data: {},
      headers: { ...HEADERS, Authorization: token },
    });

    return data.data;
  } catch (error) {
    console.error(`Error in getData: ${error.message}`.red);
  }
}

async function doTapTap(token, totalTaps) {
  let remainingTaps = totalTaps;
  let tapsPerformed = 0;

  while (remainingTaps > 0 && tapsPerformed < 1000) {
    const tapCount = Math.min(remainingTaps, 1000 - tapsPerformed);
    for (let i = 0; i < tapCount; i++) {
      try {
        await axios({
          url: 'https://api.boxxer.world/boxxer/tap',
          method: 'POST',
          headers: { ...HEADERS, Authorization: token },
          data: {
            tapNumber: tapsPerformed + i + 1,
          },
        });

        console.log(`Success tap for ${tapsPerformed + i + 1} time(s)!`.green);
        await delay(Math.floor(Math.random() * (15000 - 5000)) + 5000);
      } catch (error) {
        console.error(`Error in doTapTap: ${error.message}`.red);
      }
    }

    tapsPerformed += tapCount;
    remainingTaps -= tapCount;

    if (remainingTaps > 0) {
      console.log(`Pausing before the next batch...`.yellow);
      await delay(Math.floor(Math.random() * (30000 - 10000)) + 10000); // Pause for 10-30 seconds
    }
  }

  const response = await getData(token);
  return response.boxxer.tap.todayLeft;
}

module.exports = { getData, doTapTap };
