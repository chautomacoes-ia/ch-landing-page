// uso: node render_carrossel.js pagina.html prefixo_saida total
const { chromium } = require('playwright');
const [pag, pref, tot] = process.argv.slice(2);
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  for (let s = 1; s <= Number(tot); s++) {
    await p.goto('file://' + __dirname + '/' + pag + '?s=' + s); await p.waitForTimeout(300);
    const over = await p.evaluate(() => { const r = document.querySelector('.rodape').getBoundingClientRect(); const m=[...document.querySelectorAll('.meio > *')]; const t=document.querySelector('.top').getBoundingClientRect(); const bot=Math.max(...m.map(e=>e.getBoundingClientRect().bottom)); const top=Math.min(...m.map(e=>e.getBoundingClientRect().top)); return (bot > r.top - 10 || top < t.bottom + 10) ? 'SOBREPOSICAO ' + Math.round(top) + '-' + Math.round(bot) : ''; });
    if (over) console.log(over, s);
    await p.screenshot({ path: `${pref}_${s}.jpg`, type: 'jpeg', quality: 92 });
  }
  await b.close();
})();
