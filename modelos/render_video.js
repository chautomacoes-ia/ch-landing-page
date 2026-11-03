// uso: node render_video.js pagina.html saida.mp4  (a página expõe window.render(t) e window.DURACAO)
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs'), path = require('path'), os = require('os');
(async () => {
  const [pag, saida] = process.argv.slice(2);
  const fps = 30, dir = fs.mkdtempSync(path.join(os.tmpdir(), 'frames-'));
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto('file://' + path.resolve(pag)); await p.waitForTimeout(500);
  const dur = await p.evaluate(() => window.DURACAO);
  const n = Math.round(dur * fps);
  for (let i = 0; i < n; i++) {
    await p.evaluate((t) => window.render(t), i / fps);
    await p.screenshot({ path: path.join(dir, `f${String(i).padStart(5, '0')}.jpg`), type: 'jpeg', quality: 90 });
  }
  await b.close();
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-framerate', String(fps), '-i', path.join(dir, 'f%05d.jpg'),
    '-f', 'lavfi', '-i', 'anullsrc=r=44100:cl=stereo', '-shortest',
    '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-profile:v', 'high', '-crf', '20', '-movflags', '+faststart', '-c:a', 'aac', saida]);
  fs.rmSync(dir, { recursive: true });
  console.log('ok', saida, n, 'frames');
})();
