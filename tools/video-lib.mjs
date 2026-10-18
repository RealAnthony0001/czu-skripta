// Sdílená stavebnice snímků pro generátor videí (tools/video.mjs) a scénáře tools/videos-<předmět>.mjs
import { readFileSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// diagramy předmětu (globální const z <předmět>/diagrams.js, např. UPP, ZPN)
export const loadDiagrams = (subject, name) => vm.runInContext(['assets/dg.js', `${subject}/diagrams.js`].map(f => readFileSync(join(ROOT, f), 'utf8')).join('\n') + `;${name}`, vm.createContext({}));

// --- stavebnice snímků ---
export const CSS = readFileSync(join(ROOT, 'assets/style.css'), 'utf8') + `
body{margin:0;width:1280px;height:720px;overflow:hidden;background:var(--bg);color:var(--text);font:26px/1.45 system-ui,-apple-system,sans-serif}
.bar{display:flex;justify-content:space-between;padding:18px 48px;border-bottom:1px solid var(--line);font:16px var(--mono);color:var(--muted);text-transform:uppercase;letter-spacing:.06em}
.bar b{color:var(--accent)}.st{padding:36px 64px;height:600px;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center}
h1{font-size:60px;line-height:1.1;margin:0 0 18px}h2{font-size:40px;margin:0 0 24px;color:var(--accent)}.sub{font-size:28px;color:var(--muted)}
ul.l{list-style:none;padding:0;margin:0}ul.l li{padding:10px 0 10px 28px;border-left:4px solid var(--accent);margin:10px 0;background:var(--panel)}
ul.l li.off{visibility:hidden}ul.l li.now{border-color:var(--def);background:var(--def-s)}
.big{font:700 44px/1.5 var(--mono);text-align:center}.mu{color:var(--muted)}.ac{color:var(--accent)}.df{color:var(--def)}
.dg{border:0;background:none;padding:0}.dg svg{max-width:1100px!important;max-height:440px;font-size:15px}
table.tt{border-collapse:collapse;margin:0 auto;font:30px var(--mono)}table.tt td,table.tt th{border:1px solid var(--line2);padding:8px 26px;text-align:center}
table.tt th{color:var(--muted);font:22px var(--mono);text-transform:none;letter-spacing:0}table.tt .hi{background:var(--def-s);color:var(--def);font-weight:700}table.tt .z{background:var(--bad-s);color:var(--bad);font-weight:700}`;
export const title = (h, sub) => `<div class="mu" style="font:18px var(--mono);text-transform:uppercase;letter-spacing:.1em;margin-bottom:14px">▶ Krátké video</div><h1>${h}</h1><div class="sub">${sub}</div>`;
export const list = (h, items, k, now = true) => `<h2>${h}</h2><ul class="l">${items.map((x, i) => `<li class="${i >= k ? 'off' : i === k - 1 && now ? 'now' : ''}">${x}</li>`).join('')}</ul>`;
export const diagram = (h, svg, note = '') => `<h2>${h}</h2><div class="dg">${svg}</div>${note ? `<p class="sub" style="text-align:center">${note}</p>` : ''}`;
// odkrývání po řádcích: jeden řádek = jeden krok s vlastním komentářem
export const reveal = (h, rows) => rows.map(([, say], i) => ({ h: list(h, rows.map(r => r[0]), i + 1), say }));

export const big = (h, body, note = '') => `<h2>${h}</h2><div class="big">${body}</div>${note ? `<p class="sub" style="text-align:center">${note}</p>` : ''}`;
export const tt = (head, rows, hi = []) => `<table class="tt"><tr>${head.map(x => `<th>${x}</th>`).join('')}</tr>${rows.map(r => `<tr>${r.map((c, i) => `<td class="${[].concat(hi).includes(i) ? 'hi' : ''}">${c}</td>`).join('')}</tr>`).join('')}</table>`;
export const sp = s => [...s.replace(/\s/g, '')].join(' '); // bity do komentáře po jedné cifře
