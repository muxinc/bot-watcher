const puppeteer = require('puppeteer');
const fs = require('fs');
const { random, sample } = require('lodash');

const server = require('./server');
const { NETWORK_PRESETS, PORT } = require('./config')

const players = fs.readdirSync('./dist').filter((file) => file.match(/player-/));
const randomPlayer = sample(players);

console.log('Players found: ', players);
console.log('Random player chosen: ', randomPlayer);

(async () => {
  await server.start(PORT);

  const browser = await puppeteer.launch({executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', "--disable-dev-shm-usage"]});
  const page = await browser.newPage();

  const client = await page.target().createCDPSession()

  const randomStart = random(0, 100);
  if (randomStart < 15) {
    console.log('This bot got the short end of the stick...giving it a 3G connection.');
    await client.send('Network.emulateNetworkConditions', NETWORK_PRESETS['Regular3G']);
  } else if (randomStart > 75) {
    console.log('This bot wins! No throttling.');
  } else {
    const presetName = sample(Object.keys(NETWORK_PRESETS));
    console.log(`Assigning a random preset: ${presetName}`);
    await client.send('Network.emulateNetworkConditions', NETWORK_PRESETS[presetName]);
  }

  page.on('console', msg => {
    switch (msg._text) {
      case '--network_change--': {
        console.log('Network change triggered');
        client.send('Network.emulateNetworkConditions', sample(NETWORK_PRESETS));
        break;
      }
      case '--finished--': {
        console.log('Player example said farewell. Shutting things down.');
        browser.close();
        server.stop();
        break;
      }
    }
  });

  await page.goto(`http://localhost:${PORT}/${randomPlayer}`);
})();
