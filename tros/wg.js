// Widgety TŘOS (blok { t: 'widget', name }): vahy (vážený součet variant), spolehlivost (série a paralela), stupne (spolehlivost podle počtu stupňů), kompetence (K = PR × SP).
(() => {
  const f3 = x => x.toFixed(3).replace('.', ',');

  // ---------- vícekriteriální hodnocení variant ----------
  const VARS = [['V1', [3, 3, 3]], ['V2', [1, 5, 5]], ['V3', [5, 1, 2]]], CRIT = ['K1 návratnost', 'K2 spolehlivost', 'K3 servis'];
  WG.reg('vahy', root => WG.app(root, {
    state: { w: [2, 3, 1], p: VARS.map(v => [...v[1]]) },
    top: ui => `${WG.lbl('Váhy (v šestinách):')}${CRIT.map((c, i) => `${WG.lbl(c.split(' ')[0])}${WG.num('w' + i, ui.w[i], 0, 10)}`).join('')}${WG.btn('rst', 'výchozí 2 / 3 / 1')}${WG.btn('eq', 'stejné váhy')}`,
    act: (ui, a) => { if (a === 'rst') ui.w = [2, 3, 1]; if (a === 'eq') ui.w = [1, 1, 1]; },
    input: (ui, k) => { if (/^w\d$/.test(k)) ui.w[+k[1]] = Math.max(0, ui[k]); if (/^p\d\d$/.test(k)) ui.p[+k[1]][+k[2]] = Math.min(5, Math.max(1, ui[k])); },
    view: ui => {
      const W = ui.w.reduce((a, b) => a + b, 0) || 1, sc = ui.p.map(p => p.reduce((s, x, i) => s + x * ui.w[i], 0) / W), best = Math.max(...sc);
      return WG.tbl(['varianta', ...CRIT.map(c => c + ' (body 1–5)'), 'součet bodů', 'vážený součet'], VARS.map(([n], v) => ({ cls: sc[v] === best ? 'ok' : '', cells: [n, ...ui.p[v].map((x, i) => WG.sel('p' + v + i, [1, 2, 3, 4, 5].map(y => [y, y]), x)), ui.p[v].reduce((a, b) => a + b, 0), `<b>${f3(sc[v]).replace(/0+$/, '').replace(/,$/, '')}</b>`] })))
        + WG.note(`Váhy ${ui.w.join(' : ')} (součet ${W}). Vážený součet = Σ (váha · body) / ${W}. Nejlepší: <b>${VARS.filter((_, v) => sc[v] === best).map(x => x[0]).join(', ')}</b>.`, 'ok')
        + `<p class="mu" style="font-size:13px">Výchozí body a váhy 2/6, 3/6, 1/6 jsou z příkladu ve skriptech (nákup výrobního zařízení). Změň váhy a sleduj, kdy se pořadí otočí – pořadí závisí víc na zadání než na metodě.</p>`;
    }
  }));

  // ---------- spolehlivost: série a paralela ----------
  const ST = [['A', [0.95]], ['B', [0.92, 0.87]], ['C', [0.86, 0.85, 0.80, 0.81]]];
  WG.reg('spolehlivost', root => WG.app(root, {
    state: { p: ST.map(s => [...s[1]]), on: ST.map(s => s[1].map(() => true)) },
    top: ui => ST.map(([n, a], g) => `<div class="qw-row" style="width:100%">${WG.lbl('stupeň ' + n + ':')}${a.map((_, i) => `<label style="font-size:13px"><input type="checkbox" data-in="on${g}${i}" ${ui.on[g][i] ? 'checked' : ''}> ${n}${a.length > 1 ? i + 1 : '1'} ${WG.num('p' + g + i, ui.p[g][i], 0, 1, 0.01)}</label>`).join(' ')}</div>`).join('') + WG.btn('rst', 'výchozí hodnoty ze skript'),
    act: (ui, a) => { if (a === 'rst') { ui.p = ST.map(s => [...s[1]]); ui.on = ST.map(s => s[1].map(() => true)); } },
    input: (ui, k) => { const m = /^(p|on)(\d)(\d)$/.exec(k); if (m) { if (m[1] === 'p') ui.p[+m[2]][+m[3]] = Math.min(1, Math.max(0, ui[k])); else ui.on[+m[2]][+m[3]] = ui[k]; } },
    view: ui => {
      const stage = ST.map((_, g) => { const a = ui.p[g].filter((_, i) => ui.on[g][i]); return a.length ? 1 - a.reduce((h, p) => h * (1 - p), 1) : 0; }), tot = stage.reduce((a, b) => a * b, 1);
      return WG.tbl(['stupeň', 'zapojené prvky', 'výpočet', 'spolehlivost stupně'], ST.map(([n], g) => { const a = ui.p[g].filter((_, i) => ui.on[g][i]); return { cells: [n, a.length || 0, a.length > 1 ? `p = 1 − ${a.map(p => `(1 − ${String(p).replace('.', ',')})`).join('·')}` : a.length ? 'jediný prvek' : 'žádný prvek → celek nefunguje', `<b>${f3(stage[g])}</b>`] }; }))
        + WG.note(`Stupně jsou zapojeny <b>sériově</b> (násobí se): p = ${stage.map(f3).join(' · ')} = <b>${f3(tot)}</b>. Uvnitř stupně jsou prvky <b>paralelně</b> (zálohují se): p = 1 − ∏(1 − pᵢ).`, tot > 0 ? 'ok' : 'bad')
        + '<p class="mu" style="font-size:13px">Vypni záložní prvek (odškrtnutím) a uvidíš, o kolik klesne spolehlivost celku; v sérii platí, že celek je vždy horší než nejslabší stupeň.</p>';
    }
  }));

  // ---------- spolehlivost podle počtu organizačních stupňů ----------
  WG.reg('stupne', root => WG.app(root, {
    state: { p: 0.9 },
    top: ui => `${WG.lbl('spolehlivost jednoho stupně p =')}${WG.rng('p', ui.p, 0.5, 1, 0.01)}<b class="mo">${String(ui.p.toFixed(2)).replace('.', ',')}</b>`,
    view: ui => WG.tbl(['počet stupňů n', 'spolehlivost p<sup>n</sup>', ''], [1, 2, 3, 4, 5].map(n => [n, f3(ui.p ** n), `<div style="height:12px;background:var(--accent);width:${Math.round(ui.p ** n * 100)}%"></div>`]))
      + WG.note('Stupně jsou řazeny za sebou (sériově), takže se jejich spolehlivosti násobí: každý další stupeň spolehlivost snižuje (při 0,90: 0,90 · 0,81 · 0,73 · 0,66). Proto má mít podnik co nejméně stupňů – ale ne tak málo, aby ředitel nestihl řídit.')
  }));

  // ---------- kompetence subsystémů ----------
  WG.reg('kompetence', root => WG.app(root, {
    state: { c: [1, 2, 1, 2, 3] },
    top: ui => `${WG.lbl('Subsystémů na úrovni 1…5:')}${ui.c.map((x, i) => WG.sel('c' + i, [1, 2, 3, 4].map(v => [v, v]), x)).join('')}${WG.btn('rst', 'výchozí (ze skript)')}`,
    act: (ui, a) => { if (a === 'rst') ui.c = [1, 2, 1, 2, 3]; },
    input: (ui, k) => { const m = /^c(\d)$/.exec(k); if (m) ui.c[+m[1]] = +ui[k]; },
    view: ui => {
      const L = ui.c.length, PR = 1 / L, rows = ui.c.map((n, i) => [i + 1, n, f3(PR), `1/${n} = ${f3(1 / n)}`, f3(PR / n), f3(PR / n * n)]), tot = ui.c.reduce((s, n) => s + (PR / n) * n, 0);
      return WG.tbl(['úroveň', 'počet subsystémů', 'PR = 1/5', 'SP = 1/počet', 'K každého', 'K za úroveň'], rows)
        + WG.note(`K<sub>cs</sub> = ${f3(tot)} (součet kompetencí všech subsystémů). Je-li K<sub>cs</sub> = 1, je organizační systém správně nastaven; při K<sub>cs</sub> &lt; 1 by existovala „hluchá místa“ bez kompetencí, při K<sub>cs</sub> &gt; 1 by se kompetence překrývaly. Pravomoc PR = 1 / počet úrovní, sféra působnosti SP = 1 / počet subsystémů na úrovni.`, 'ok');
    }
  }));
})();
