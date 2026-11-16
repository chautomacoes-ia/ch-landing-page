const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  for (let s = 1; s <= 6; s++) {
    await p.goto('file://' + __dirname + '/pilates.html?s=' + s); await p.waitForTimeout(300);
    const over = await p.evaluate(() => { const r = document.querySelector('.rodape').getBoundingClientRect(); const m=[...document.querySelectorAll('.meio > *')]; return Math.max(...m.map(e=>e.getBoundingClientRect().bottom)) > r.top ? 'SOBREPOSICAO' : ''; });
    if (over) console.log(over, s);
    await p.screenshot({ path: `../2026-11/pilates_${s}.jpg`, type: 'jpeg', quality: 92 });
  }
  await b.close();
})();
