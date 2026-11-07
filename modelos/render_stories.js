const { chromium } = require('playwright');
const ids = process.argv.slice(2);
const OUT = process.env.OUT || '../saida_stories';
require('fs').mkdirSync(OUT, { recursive: true });
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  for (const id of ids) {
    await p.goto('file://' + __dirname + '/' + (process.env.HTML || 'stories.html') + '?id=' + id); await p.waitForTimeout(300);
    const over = await p.evaluate(() => { const els = [...document.querySelectorAll('.meio > *')]; const b = Math.max(...els.map((e) => e.getBoundingClientRect().bottom)); const t = Math.min(...els.map((e) => e.getBoundingClientRect().top)); return b > 1600 || t < 250 ? Math.round(t) + '-' + Math.round(b) : false; });
    if (over) console.log('ESTOURO', id, over);
    await p.screenshot({ path: `${OUT}/${id}.jpg`, type: 'jpeg', quality: 92 });
  }
  await b.close();
})();
