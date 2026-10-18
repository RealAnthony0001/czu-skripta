// Generátor krátkých výukových videí: snímky (HTML → PNG přes tools/shot.swift) + komentář (macOS `say`, hlas Zuzana) → MP4 (ffmpeg).
// Použití: node tools/video.mjs <předmět> [filtr-názvu-souboru]   Scénáře: tools/videos-<předmět>.mjs
// Výstup: <předmět>/videos/*.mp4 + <předmět>/videos/index.js (seznam pro web)
import { execFileSync as run } from 'node:child_process';
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, CSS } from './video-lib.mjs';

const [subject, only] = process.argv.slice(2);
if (!subject) throw new Error('Použití: node tools/video.mjs <předmět> [filtr]');
const { CODE, VIDEOS } = await import(`./videos-${subject}.mjs`);
const OUT = join(ROOT, subject, 'videos'), TMP = '/tmp/skripta-video';
mkdirSync(OUT, { recursive: true }); mkdirSync(TMP, { recursive: true });

// --- render ---
const dur = f => +run('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f]).toString();
const shot = join(TMP, 'shot');
if (!existsSync(shot)) run('swiftc', ['-O', '-o', shot, join(ROOT, 'tools/shot.swift')]);
const manifest = {};
for (const [topic, vids] of Object.entries(VIDEOS)) for (const v of vids) {
  const out = join(OUT, v.file + '.mp4');
  if (!only || v.file.includes(only)) {
    console.log('▶', v.file);
    const shots = [];
    v.steps.forEach((s, i) => {
      const html = join(TMP, `${v.file}-${i}.html`);
      writeFileSync(html, `<!doctype html><html data-theme="dark"><head><meta charset="utf-8"><style>${CSS}</style></head><body><div class="bar"><span><b>${CODE}</b> · ${v.title}</span><span>${i + 1} / ${v.steps.length}</span></div><div class="st">${s.h}</div></body></html>`);
      shots.push(html, html.replace('.html', '.png'));
      run('say', ['-v', 'Zuzana', '-r', '170', '-o', join(TMP, `${v.file}-${i}.aiff`), s.say]);
    });
    run(shot, [TMP, ...shots]);
    // každý krok: obrázek po dobu komentáře + 0,6 s pauza; obraz i zvuk se spojí zvlášť a zakódují jednou
    const d = v.steps.map((_, i) => dur(join(TMP, `${v.file}-${i}.aiff`)) + 0.6);
    v.steps.forEach((_, i) => run('ffmpeg', ['-y', '-v', 'error', '-i', join(TMP, `${v.file}-${i}.aiff`), '-af', 'apad', '-t', String(d[i]), '-ar', '44100', '-ac', '1', join(TMP, `${v.file}-${i}.wav`)]));
    writeFileSync(join(TMP, 'img.txt'), v.steps.map((_, i) => `file '${v.file}-${i}.png'\nduration ${d[i]}`).join('\n') + `\nfile '${v.file}-${v.steps.length - 1}.png'\n`);
    writeFileSync(join(TMP, 'aud.txt'), v.steps.map((_, i) => `file '${v.file}-${i}.wav'`).join('\n'));
    const total = d.reduce((a, b) => a + b);
    run('ffmpeg', ['-y', '-v', 'error', '-f', 'concat', '-i', join(TMP, 'img.txt'), '-f', 'concat', '-i', join(TMP, 'aud.txt'),
      '-vf', `scale=1280:720,fps=25,format=yuv420p,fade=in:d=0.4,fade=out:st=${(total - 0.5).toFixed(2)}:d=0.5`, '-c:v', 'libx264', '-tune', 'stillimage', '-crf', '26',
      '-c:a', 'aac', '-b:a', '96k', '-t', total.toFixed(2), '-movflags', '+faststart', out]);
    run('ffmpeg', ['-y', '-v', 'error', '-i', join(TMP, `${v.file}-0.png`), '-vf', 'scale=640:360', '-q:v', '4', out.replace('.mp4', '.jpg')]);
  }
  if (existsSync(out)) (manifest[topic] ||= []).push({ title: v.title, at: v.at, src: `videos/${v.file}.mp4`, poster: `videos/${v.file}.jpg`, dur: Math.round(dur(out)) });
}
writeFileSync(join(OUT, 'index.js'), `// Vygenerováno: node tools/video.mjs ${subject}\nwindow.VIDEOS = ${JSON.stringify(manifest, null, 1)};\n`);
console.log('hotovo →', OUT);
