// const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const puppeteer = require('puppeteer');

const start_url = 'http://music.163.com/#/user/home?id=32693089';

// const options = {
//   url: start_url,
//   encoding: null,
//   headers: {
//     'User-Agent':
//       'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.31 Safari/537.36'
//   },
//   Referer: 'http://music.163.com/'
// };

// request(options, (err, response, body) => {
//   if (!err && response.statusCode === 200) {
//     const $ = cheerio.load(body);
//     let data = $;
//     fs.open('music.html', 'a', (err, fd) => {
//       fs.write(fd, data, err => {
//         if (err) throw err;
//       });
//     });
//   }
// });

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.emulate({ viewport: { width: 1920, height: 1080 } });
  await page.goto('http://music.163.com/#/user/home?id=32693089');
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });

  console.log('Dimensions:', dimensions);
  await page.screenshot({ path: 'music.png' });

  await browser.close();
})();
