const fetch = require('node-fetch');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const scrape = async () => {
  const res = await fetch('https://www.mcdonalds.co.jp/menu/burger/');
  const html = await res.text();
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const nightMenu = document.querySelectorAll('body > div:nth-child(5) > div > div > div:nth-child(2) > div.product-list-wrapper.flex.flex-wrap.product-list-wrapper.pb-8.pb-18\:md-1px > div:nth-child(1) > div > strong');
//  const nightMenu = Array.from(nightMenu).map((td) => div.textContent.trim());
  console.log(nightMenu);
};
scrape();