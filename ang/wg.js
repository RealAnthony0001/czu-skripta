// Widgety ANG (blok { t: 'widget', name }): kviz (výběr správné možnosti), prepinac (dvojice vět s vyznačenými změnami), sloveso (kartičky nepravidelných sloves ze seznamu IRR).
// Data kvízů a dvojic věcí jsou přímo v bloku tématu: { t: 'widget', name: 'kviz', items: [{ q, o: [...], a: index, why }] }.
(() => {
  const strip = s => s.replace(/<[^>]+>/g, '');

  // ---------- kvíz ----------
  WG.reg('kviz', (root, b) => WG.app(root, {
    state: { ans: [] },
    act: (ui, a, d) => { if (a === 'ans' && ui.ans[ui.step] === undefined) ui.ans[ui.step] = +d.i; if (a === 'again') { ui.ans = []; ui.step = 0; } },
    steps: ui => {
      const n = b.items.length, S = b.items.map((it, k) => {
        const got = ui.ans[k], done = got !== undefined, ok = got === it.a;
        return { title: '', view: `<div class="qw-big" style="font-size:18px;word-break:normal">${it.q}</div>${it.hint ? `<p class="mu" style="font-size:13px">${it.hint}</p>` : ''}
          <div class="qw-row" style="margin:10px 0">${it.o.map((x, i) => `<button class="qw-b ${done && i === it.a ? 'on' : ''}" style="${done && i === got && !ok ? 'border-color:var(--bad);color:var(--bad)' : ''};font-size:15px" data-act="ans" data-i="${i}">${x}</button>`).join('')}</div>
          ${done ? WG.note(`${ok ? '✓ Správně.' : `✗ Správně je <b>${it.o[it.a]}</b>.`} ${it.why || ''}`, ok ? 'ok' : 'bad') : '<p class="mu" style="font-size:13px">Vyber možnost.</p>'}` };
      });
      const sc = ui.ans.filter((x, k) => x === b.items[k].a).length;
      S.push({ title: '', view: `<div class="qw-big">${sc} / ${n}</div>${WG.note(ui.ans.filter(x => x !== undefined).length < n ? `Zodpovězeno ${ui.ans.filter(x => x !== undefined).length} z ${n} otázek; vrať se k těm, které chybí.` : sc === n ? 'Bezchybně!' : 'Projdi si otázky se špatnou odpovědí a zkus to znovu.', sc === n ? 'ok' : 'warn')}${WG.btn('again', 'zkusit znovu')}` });
      return S;
    }
  }));

  // ---------- dvojice vět s vyznačenými změnami ----------
  const words = s => strip(s).split(/\s+/).filter(Boolean), norm = w => w.toLowerCase().replace(/[.,?!“”"’']/g, '');
  const mark = (s, other) => { const pool = {}; words(other).forEach(w => { pool[norm(w)] = (pool[norm(w)] || 0) + 1; }); return words(s).map(w => (pool[norm(w)] > 0 ? (pool[norm(w)]--, w) : `<mark>${w}</mark>`)).join(' '); };
  WG.reg('prepinac', (root, b) => WG.app(root, {
    state: { test: false, rev: -1 },
    top: ui => `${WG.btn('test', 'zkusit si nejdřív sám', ui.test)}<span class="mu" style="font-size:13px">druhá věta zůstane skrytá, dokud ji neodkryješ</span>`,
    act: (ui, a) => { if (a === 'test') { ui.test = !ui.test; ui.rev = -1; } if (a === 'rev') ui.rev = ui.step; },
    steps: ui => b.pairs.map(([x, y, note], k) => ({ title: '', view: `<div class="qw-note" style="margin-top:0"><span class="lbl">${b.labels[0]}</span><br><span style="font-size:17px">${mark(x, y).replace(/<mark>/g, '<mark style="background:var(--warn-s);color:var(--warn)">')}</span></div>
      ${ui.test && ui.rev !== k ? `<div style="margin:8px 0">${WG.btn('rev', 'odkrýt druhou větu')}</div>` : `<div class="qw-note ok"><span class="lbl">${b.labels[1]}</span><br><span style="font-size:17px">${mark(y, x).replace(/<mark>/g, '<mark style="background:var(--ok-s);color:var(--ok)">')}</span></div>${note ? `<p class="mu" style="font-size:13px">${note}</p>` : ''}`}` }))
  }));

  // ---------- nepravidelná slovesa: kartičky ----------
  const GRP = [['all', 'všechna'], ['same', 'A–A–A'], ['pp', 'A–B–B'], ['vpp', 'A–B–A'], ['aab', 'A–A–B'], ['diff', 'A–B–C']];
  const shuf = a => { const r = [...a]; for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
  WG.reg('sloveso', root => WG.app(root, {
    state: { g: 'all', deck: null, i: 0, shown: false, ok: 0, miss: [] },
    top: ui => `${WG.lbl('Skupina:')}${GRP.map(([k, l]) => WG.btn('g', l, ui.g === k, `data-k="${k}"`)).join('')}${WG.btn('shuf', '🔀 znovu zamíchat')}`,
    act: (ui, a, d) => {
      const rows = () => (ui.g === 'all' ? IRR.L : IRR[ui.g]);
      if (a === 'g') { ui.g = d.k; ui.deck = null; }
      if (a === 'shuf') ui.deck = null;
      if (!ui.deck) { ui.deck = shuf(rows()); ui.i = 0; ui.shown = false; ui.ok = 0; ui.miss = []; if (a === 'g' || a === 'shuf') return; }
      if (a === 'show') ui.shown = true;
      if (a === 'ok' || a === 'no') { if (a === 'ok') ui.ok++; else ui.miss.push(ui.deck[ui.i]); ui.i++; ui.shown = false; }
    },
    view: ui => {
      if (!ui.deck) { ui.deck = shuf(ui.g === 'all' ? IRR.L : IRR[ui.g]); }
      const n = ui.deck.length;
      if (ui.i >= n) return `<div class="qw-big">${ui.ok} / ${n}</div>${WG.note(ui.miss.length ? `Zopakuj si: ${ui.miss.map(r => `<b>${r[0]}</b> – ${r[1]} – ${r[2]}`).join('; ')}` : 'Všechna slovesa znáš!', ui.miss.length ? 'warn' : 'ok')}${WG.btn('shuf', 'znovu')}`;
      const r = ui.deck[ui.i];
      return `<div class="mu" style="font-size:13px">kartička ${ui.i + 1} / ${n} · znáš: ${ui.ok}</div><div class="qw-big" style="font-size:30px;margin:8px 0">${r[0]}</div>
        ${ui.shown ? `<div class="qw-kv"><span>past simple</span><span style="color:var(--text)"><b>${r[1]}</b></span><span>past participle</span><span style="color:var(--text)"><b>${r[2]}</b></span></div><div class="qw-row">${WG.btn('ok', '✓ znal jsem')}${WG.btn('no', '✗ neznal jsem')}</div>` : WG.btn('show', 'ukázat past simple a past participle')}
        <p class="mu" style="font-size:13px">Řekni si oba tvary nahlas dřív, než kartičku odkryješ.</p>`;
    }
  }));
})();
