const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  for (let s = 1; s <= 7; s++) { await p.goto('file://' + __dirname + '/carrossel1.html?s=' + s); await p.waitForTimeout(300); await p.screenshot({ path: `out/c1_${s}.png` }); }
  await p.goto('file://' + __dirname + '/indique.html'); await p.waitForTimeout(300); await p.screenshot({ path: 'out/indique.png' });
  await b.close();
})();
