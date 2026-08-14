import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  page.on('console', msg => {
    console.log('BROWSER LOG:', msg.text());
  });

  await page.goto('http://localhost:5199/wam-calculator', { waitUntil: 'networkidle0' });
  
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const btn = btns.find(b => b.textContent && b.textContent.includes('Check Result'));
    if (btn) btn.click();
  });
  
  await new Promise(r => setTimeout(r, 1000));
  
  const result = await page.evaluate(() => {
    const res = document.querySelector('.text-5xl.font-bold');
    return res ? res.textContent : null;
  });
  
  console.log("Result value on screen:", result);

  await browser.close();
})();
