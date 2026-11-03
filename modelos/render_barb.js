const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  for (let s = 1; s <= 6; s++) {
    await p.goto('file://' + __dirname + '/barbearia.html?s=' + s); await p.waitForTimeout(300);
    const over = await p.evaluate(() => { const m = document.querySelector('.meio'); return m.scrollHeight > m.clientHeight + 2 || document.body.scrollHeight > 1350; });
    if (over) console.log('ESTOURO no slide', s);
    await p.screenshot({ path: `../2026-11/barb_${s}.jpg`, type: 'jpeg', quality: 92 });
  }
  await b.close();
})();
