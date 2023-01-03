const express = require('express');
const puppeteer = require('puppeteer');

const server = express();

server.get('/',(request, response)=>{
    response.send('Olá mundo');
});
const port = 3000;
server.listen(port, ()=>{
    console.log(`servidor subiu
    acesse em http://localhost:${port}
    `);
});

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.amazon.com/');
  //await page.screenshot({ path: 'example.png' });
    await browser.close();
})();