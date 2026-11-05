// Widget 'strukt': krokování strukturogramu – zvýrazněný blok, proměnné, výstup a zbytek vstupu po každém kroku (programy a výpočet v ALG.P / ALG.run)
(() => {
  const why = { s: 'Sekvence: příkazy se provádějí shora dolů, každý právě jednou.', wT: 'Cyklus s podmínkou na začátku: podmínka platí, provede se tělo cyklu (odsazené bloky) a pak se podmínka testuje znovu.', wF: 'Podmínka cyklu neplatí – tělo se přeskočí a pokračuje se blokem pod cyklem.', iT: 'Selekce: podmínka platí, provede se větev „+“.', iF: 'Selekce: podmínka neplatí, provede se větev „−“.' };
  const parse = s => s.split(/[,;\s]+/).filter(Boolean).map(Number).filter(n => !isNaN(n));
  WG.reg('strukt', (root, b) => WG.app(root, {
    state: { p: b.p || 'r1', inp: ALG.P[b.p || 'r1'].inp || '' },
    top: ui => `${WG.lbl('Program:')}${WG.sel('p', (b.list || Object.keys(ALG.P)).map(k => [k, ALG.P[k].l]), ui.p)}${ALG.P[ui.p].inp != null ? `<div class="qw-row" style="width:100%">${WG.lbl('Vstup (řada čísel):')}${WG.txt('inp', ui.inp, '3, 7, 1, 0', 40)}</div>` : ''}`,
    input: (ui, k) => { if (k === 'p') ui.inp = ALG.P[ui.p].inp || ''; ui.step = 0; },
    steps: ui => {
      const st = ALG.run(ui.p, parse(ui.inp)), keys = [...new Set(st.flatMap(s => Object.keys(s.v)))];
      return st.map((s, i) => {
        const prev = i ? st[i - 1] : { v: {}, out: [] }, ch = keys.filter(k => s.v[k] !== prev.v[k]).map(k => `${k} = ${s.v[k]}`), nout = s.out.slice(prev.out.length);
        const head = s.kind === 's' ? s.txt : `${s.txt} → ${s.r ? 'platí (+)' : 'neplatí (−)'}`;
        const vars = keys.length ? WG.tbl(keys, [keys.map(k => s.v[k] ?? '–')]) : '';
        const side = `${vars}<div class="qw-kv"><span>výstup</span><b class="mo">${s.out.join(', ') || '–'}</b>${ALG.P[ui.p].inp != null ? `<span>zbývá na vstupu</span><span class="mo">${s.left.join(', ') || '–'}</span>` : ''}</div>${s.log.length ? WG.note(s.log.join(' · ')) : ''}`;
        return {
          title: `${s.kind === 'x' ? '⚠ ' : ''}${head}`,
          view: `<div class="qw-split"><div>${WG.svg(ALG.prog(ui.p, { cur: s.id, sel: s.kind === 'i' ? s.r : null, ok: s.kind === 'w' ? s.r : null }))}</div><div>${side}</div></div>`,
          what: s.kind === 'x' ? s.txt : s.kind === 's' ? `Provede se příkaz <b class="mo">${s.txt}</b>.` : `Vyhodnotí se podmínka <b class="mo">${s.txt}</b> s aktuálními hodnotami: ${s.r ? 'platí' : 'neplatí'}.`,
          why: s.kind === 'x' ? '' : s.kind === 's' ? why.s : why[s.kind + (s.r ? 'T' : 'F')],
          change: [ch.length ? 'Proměnné: ' + ch.join(', ') : '', nout.length ? 'Vypsáno: ' + nout.join(', ') : ''].filter(Boolean).join(' · ') || 'Beze změny proměnných.'
        };
      });
    }
  }));
})();
