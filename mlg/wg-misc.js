// Widgety MLG: aut (simulátor konečného automatu), automin (minimalizace), dos (dosažitelné stavy), rel (vlastnosti relací a doplnění na ekvivalenci), venn (Vennovy diagramy a množinové zákony).
(() => {
  const { graf, circ, loop, automatMin } = MLG, { svg, text, line } = DG;
  const split = (a, b) => `<div class="qw-split"><div>${WG.svg(a)}</div><div>${b}</div></div>`;

  const stack = (g, w) => w + WG.svg(g);
  // ---------- simulátor konečného automatu ----------
  const AUT = {
    p1: { l: 'a) přijímá jen slovo 100', ab: '01', start: 'A', acc: ['D'], words: ['100', '1000', '10', '101', ''],
      d: { A: { 0: 'E', 1: 'B' }, B: { 0: 'C', 1: 'E' }, C: { 0: 'D', 1: 'E' }, D: { 0: 'E', 1: 'E' }, E: { 0: 'E', 1: 'E' } },
      pos: { A: [120, 80], B: [270, 80], C: [420, 80], D: [570, 80], E: [345, 220] }, loops: { E: 180 }, opt: {}, st: 'start' },
    p2: { l: 'b) lichý počet a, žádné b', ab: 'ab', start: '1', acc: ['2'], words: ['a', 'aaa', 'aa', 'ab', 'aaaaa'],
      d: { 1: { a: '2', b: '3' }, 2: { a: '1', b: '3' }, 3: { a: '3', b: '3' } },
      pos: { 1: [170, 110], 2: [430, 110], 3: [300, 230] }, loops: { 3: 180 }, opt: { '1>2': { bend: 18 }, '2>1': { bend: 18 }, '2>3': { lo: -12 } }, st: 'start' }
  };
  function autGraph(A, cur, used) {
    const E = {}; Object.entries(A.d).forEach(([a, m]) => Object.entries(m).forEach(([c, b]) => { if (a !== b) (E[a + '>' + b] ||= []).push(c); }));
    const edges = Object.entries(E).map(([k, ch]) => { const [a, b] = k.split('>'); return [a, b, ch.join(','), { ...(A.opt[k] || {}), cls: used === k ? 'lW' : 'ln' }]; });
    const V = Object.fromEntries(Object.entries(A.pos).map(([k, [x, y]]) => [k, [x, y, k === cur ? 'fA' : 'b']]));
    const lp = Object.entries(A.loops).map(([s, ang]) => loop(...A.pos[s], Object.entries(A.d[s]).filter(([, b]) => b === s).map(([c]) => c).join(','), ang, 20, used === s + '>' + s ? 'lW' : 'ln')).join('');
    return svg(640, 300, graf(V, edges, { dir: true, r: 20 }) + A.acc.map(s => circ(...A.pos[s], 25, 'pd')).join('') + line(A.pos[A.start][0] - 70, A.pos[A.start][1], A.pos[A.start][0] - 22, A.pos[A.start][1], 'ln', 'end') + text(A.pos[A.start][0] - 74, A.pos[A.start][1] - 6, 'start', 'e sm mu') + text(620, 24, 'dvojitý kruh = přijímající stav', 'e sm mu'), 640);
  }
  WG.reg('aut', (root, b) => WG.app(root, {
    state: { a: b.a || 'p2', w: AUT[b.a || 'p2'].words[0] },
    top: ui => `${WG.lbl('Automat:')}${Object.entries(AUT).map(([k, A]) => WG.btn('a', A.l, ui.a === k, `data-k="${k}"`)).join('')}<div class="qw-row" style="width:100%">${WG.lbl('Slovo:')}${WG.txt('w', ui.w, 'prázdné = ε', 14)}${WG.lbl('zkus:')}${AUT[ui.a].words.map(w => WG.btn('w', w || 'ε', false, `data-w="${w}"`)).join('')}</div>`,
    act: (ui, a, d) => { if (a === 'a') { ui.a = d.k; ui.w = AUT[d.k].words[0]; ui.step = 0; } if (a === 'w') { ui.w = d.w; ui.step = 0; } },
    input: ui => { ui.step = 0; },
    steps: ui => {
      const A = AUT[ui.a], w = ui.w.trim(), bad = [...w].find(c => !A.ab.includes(c));
      if (bad) return [{ title: '', view: WG.note(`Znak „${bad}“ není v abecedě Σ = {${[...A.ab].join(', ')}}.`, 'bad') }];
      if (w.length > 14) return [{ title: '', view: WG.note('Slovo je moc dlouhé (nejvýše 14 znaků).', 'bad') }];
      const word = (k) => `<div class="qw-row">${[...w].map((c, i) => WG.c(c, i < k ? 'd1' : i === k ? 'df' : 'dd')).join('') || '<span class="mu">ε (prázdné slovo)</span>'}</div>`;
      let q = A.start;
      const S = [{ title: `Start ve stavu ${q}`, what: `Automat začíná v počátečním stavu ${q} a bude číst slovo ${w ? `„${w}“` : 'ε'} znak po znaku.`, why: 'Výpočet nad slovem je posloupnost stavů r₀ = q₀, r₁, …, rₙ; každý znak posune automat podle přechodové funkce δ.', change: `Stav: ${q}`, view: stack(autGraph(A, q, ''), word(0)) }];
      [...w].forEach((c, i) => {
        const nq = A.d[q][c];
        S.push({ title: `Čteme „${c}“: ${q} → ${nq}`, what: `V tabulce je δ(${q}, ${c}) = ${nq}.`, why: 'Každý stav má pro každý znak právě jeden přechod, výpočet je proto jednoznačný.', change: `Stav: ${nq}${A.acc.includes(nq) ? ' (přijímající)' : ''}`, view: stack(autGraph(A, nq, q + '>' + nq), word(i + 1)) });
        q = nq;
      });
      const ok = A.acc.includes(q);
      S.push({ title: ok ? '✓ Slovo je přijato' : '✗ Slovo není přijato', what: `Slovo je přečteno a automat skončil ve stavu ${q}, který ${ok ? 'je' : 'není'} přijímající.`, why: 'Slovo je přijato právě tehdy, když výpočet skončí v přijímajícím stavu.', change: ok ? `Slovo patří do jazyka L(A).` : `Slovo nepatří do jazyka L(A).`, view: stack(autGraph(A, q, ''), word(w.length) + WG.note(ok ? 'Přijato.' : 'Nepřijato.', ok ? 'ok' : 'bad')) });
      return S;
    }
  }));

  // ---------- minimalizace automatu (příklad z přednášky) ----------
  const MIN = { n: ['1', '2', '3', '4', '5', '6'], ab: ['a', 'b'], t: { 1: ['1', '3'], 2: ['1', '3'], 3: ['6', '5'], 4: ['1', '5'], 5: ['2', '4'], 6: ['6', '2'] }, acc: ['3', '6'], start: '1' };
  WG.reg('automin', root => WG.app(root, {
    steps: () => {
      const gname = g => '{' + g.join(', ') + '}', tab = (cols, rows) => WG.tbl(cols, rows);
      const mark = s => (s === MIN.start ? '→' : '') + (MIN.acc.includes(s) ? '←' : '') + s;
      let groups = [MIN.n.filter(s => !MIN.acc.includes(s)), MIN.acc];
      const S = [{ title: 'Zadání: automat se 6 stavy', what: 'Všechny stavy jsou dosažitelné, takže nemusíme nic vyškrtávat. Sloupce a, b jsou cílové stavy přechodů; ← značí přijímající stav.', why: 'Minimalizace má dva kroky: 1. odstranit nedosažitelné stavy, 2. sloučit ekvivalentní stavy.', change: 'Zbývá sloučit ekvivalentní stavy (maximální faktorizace).',
        view: tab(['stav', 'a', 'b'], MIN.n.map(s => [mark(s), ...MIN.t[s]])) }];
      S.push({ title: 'Krok 0: přijímající × nepřijímající', what: `Rozdělíme stavy na ${gname(groups[0])} a ${gname(groups[1])}.`, why: 'Stavy z různých skupin ekvivalentní být nemohou: prázdné slovo ε je odliší (jeden ho přijme, druhý ne).', change: 'Hotové první rozdělení – dál budeme skupiny zjemňovat.', view: tab(['skupina', 'stavy'], groups.map((g, i) => [i + 1, gname(g)])) });
      for (let r = 1; r < 8; r++) {
        const idx = s => groups.findIndex(g => g.includes(s)) + 1, sig = s => MIN.t[s].map(idx).join(' ');
        const ng = []; groups.forEach(g => { const m = {}; g.forEach(s => (m[sig(s)] ||= []).push(s)); ng.push(...Object.values(m)); });
        const changed = ng.length !== groups.length;
        S.push({ title: `Krok ${r}: ${changed ? 'rozdělení se zjemní' : 'nic se nemění'}`, what: 'U každého stavu zapíšeme, do které skupiny vede přechod pro a a pro b (číslo skupiny cíle). Ve skupině smí zůstat jen stavy se stejným „podpisem“.',
          why: changed ? 'Dva stavy s různým podpisem se po nějakém znaku dostanou do různých skupin, tedy je odliší nějaké slovo – nejsou ekvivalentní.' : 'Všechny stavy ve skupinách mají stejné podpisy, další dělení nepřinese nic nového.',
          change: changed ? `Nové skupiny: ${ng.map(gname).join(' | ')}` : `Konečné skupiny: ${ng.map(gname).join(' | ')}`,
          view: tab(['stav', 'skupina', 'a → skupina', 'b → skupina', 'podpis'], groups.flatMap((g, gi) => g.map(s => ({ cls: ng.findIndex(x => x.includes(s)) !== groups.findIndex(x => x.includes(s)) && changed && ng.some(x => x.includes(s) && x.length < g.length) ? 'add' : '', cells: [mark(s), gi + 1, idx(MIN.t[s][0]), idx(MIN.t[s][1]), sig(s)] })))) });
        if (!changed) break;
        groups = ng;
      }
      S.push({ title: `Výsledek: minimální automat má ${groups.length} stavy`, what: `Každá skupina se stane jedním stavem: ${groups.map(gname).join(', ')}. Přechody převezmeme z libovolného zástupce, počáteční je skupina se stavem 1 a přijímající jsou skupiny se stavy 3 a 6.`, why: 'Maximální faktorizace dosažitelného automatu je minimální automat pro daný jazyk.', change: `Ze 6 stavů zbyly ${groups.length}.`, view: WG.svg(automatMin()) });
      return S;
    }
  }));

  // ---------- dosažitelné stavy ----------
  const DOS = { 1: [5, 5], 2: [2, 7], 3: [4, 6], 4: [6, 1], 5: [1, 3], 6: [5, 4], 7: [8, 1], 8: [2, 5] }, DACC = [2, 8];
  WG.reg('dos', root => WG.app(root, {
    steps: () => {
      const mark = s => (s === 1 ? '→' : '') + (DACC.includes(s) ? '←' : '') + s, ids = Object.keys(DOS).map(Number);
      const tab = (reach, cur) => WG.tbl(['stav', 'a', 'b', 'označen'], ids.map(s => ({ cls: s === cur ? 'cur' : reach.includes(s) ? 'add' : '', cells: [mark(s), ...DOS[s], reach.includes(s) ? '✓' : ''] })));
      const reach = [1], q = [1], S = [{ title: 'Začneme počátečním stavem', what: 'Označíme stav 1 – ten je dosažitelný vždy (slovem ε).', why: 'Dosažitelné jsou stavy, do kterých vede cesta z počátečního stavu.', change: 'Označeno: 1', view: tab([1], 1) }];
      while (q.length) {
        const u = q.shift(), add = DOS[u].filter((v, i, a) => !reach.includes(v) && a.indexOf(v) === i);
        add.forEach(v => { reach.push(v); q.push(v); });
        S.push({ title: `Projdeme přechody ze stavu ${u}`, what: `Ze stavu ${u} vedou přechody do ${DOS[u].join(' a ')}${add.length ? `; nově označíme ${add.join(', ')}.` : '; nic nového.'}`, why: 'Co je dosažitelné z dosažitelného stavu, je dosažitelné také.', change: `Označeno: ${[...reach].sort((a, b) => a - b).join(', ')}`, view: tab([...reach], u) });
      }
      const rs = [...reach].sort((a, b) => a - b);
      S.push({ title: 'Nic dalšího nepřibude', what: `Dosažitelné jsou stavy ${rs.join(', ')}; stavy ${ids.filter(s => !reach.includes(s)).join(', ')} se škrtnou.`, why: 'Nedosažitelné stavy jazyk neovlivní. Žádný z dosažitelných stavů není přijímající, takže automat přijímá prázdný jazyk ∅.', change: 'Nedosažitelné stavy lze vyškrtnout.', view: tab(reach, 0) });
      return S;
    }
  }));

  // ---------- relace: vlastnosti a doplnění na ekvivalenci ----------
  const REL = {
    le: { l: 'x ≤ y na {1,2,3,4}', el: ['1', '2', '3', '4'], r: [[0, 0], [0, 1], [0, 2], [0, 3], [1, 1], [1, 2], [1, 3], [2, 2], [2, 3], [3, 3]] },
    sq: { l: 'x = y² na {1,2,3,4}', el: ['1', '2', '3', '4'], r: [[0, 0], [3, 1]] },
    lec: { l: 'z přednášky (D, K, P, H, R, V)', el: ['D', 'K', 'P', 'H', 'R', 'V'], r: [[1, 4], [0, 3], [3, 3], [1, 2]] },
    eq: { l: 'ekvivalence mod 2', el: ['1', '2', '3', '4'], r: [[0, 0], [0, 2], [2, 0], [2, 2], [1, 1], [1, 3], [3, 1], [3, 3]] },
    own: { l: 'vlastní (klikni do tabulky)', el: ['a', 'b', 'c', 'd'], r: [] }
  };
  WG.reg('rel', (root, b) => WG.app(root, {
    state: { k: b.k || 'le', m: REL[b.k || 'le'].r.map(p => p.join()) },
    top: ui => `${WG.lbl('Relace:')}${Object.entries(REL).map(([k, g]) => WG.btn('k', g.l, ui.k === k, `data-k="${k}"`)).join('')}`,
    act: (ui, a, d) => {
      if (a === 'k') { ui.k = d.k; ui.m = REL[d.k].r.map(p => p.join()); ui.step = 0; }
      if (a === 'cell') { const k = d.i + ',' + d.j; ui.m = ui.m.includes(k) ? ui.m.filter(x => x !== k) : [...ui.m, k]; ui.step = 0; }
    },
    steps: ui => {
      const el = REL[ui.k].el, n = el.length, has = (R, i, j) => R.has(i + ',' + j), base = new Set(ui.m), all = [...Array(n).keys()];
      const matrix = (R, ed, added = new Set()) => `<div class="qw-cv"><table><tr><th>R</th>${el.map(e => `<th>${e}</th>`).join('')}</tr>${all.map(i => `<tr><th>${el[i]}</th>${all.map(j => `<td class="${added.has(i + ',' + j) ? 'ok' : ''}" ${ed ? `data-act="cell" data-i="${i}" data-j="${j}" style="cursor:pointer"` : ''}>${has(R, i, j) ? '1' : '·'}</td>`).join('')}</tr>`).join('')}</table></div>`;
      const pr = (i, j) => `(${el[i]}, ${el[j]})`;
      const first = (arr) => arr[0];
      const refl = all.filter(i => !has(base, i, i)), sym = all.flatMap(i => all.filter(j => has(base, i, j) && !has(base, j, i)).map(j => [i, j])),
        anti = all.flatMap(i => all.filter(j => i < j && has(base, i, j) && has(base, j, i)).map(j => [i, j])),
        tr = all.flatMap(i => all.flatMap(j => all.filter(k => has(base, i, j) && has(base, j, k) && !has(base, i, k)).map(k => [i, j, k])));
      const row = (name, ok, why) => `<tr class="${ok ? 'ok' : 'no'}"><td class="l"><b>${name}</b></td><td>${ok ? '✓ ano' : '✗ ne'}</td><td class="l sm">${why}</td></tr>`;
      const R = refl.length === 0, Sy = sym.length === 0, A = anti.length === 0, T = tr.length === 0;
      const props = `<div class="qw-cv"><table><tr><th>vlastnost</th><th></th><th>protipříklad / poznámka</th></tr>
        ${row('reflexivní', R, R ? 'každý prvek je v relaci sám se sebou' : `chybí ${pr(refl[0], refl[0])}`)}${row('symetrická', Sy, Sy ? 'ke každé (x, y) je i (y, x)' : `je ${pr(...first(sym))}, ale chybí ${pr(first(sym)[1], first(sym)[0])}`)}
        ${row('antisymetrická', A, A ? 'žádná dvojice různých prvků není v obou směrech' : `${pr(...first(anti))} i ${pr(first(anti)[1], first(anti)[0])} s různými prvky`)}${row('tranzitivní', T, T ? 'z (x, y), (y, z) vždy plyne (x, z)' : `je ${pr(first(tr)[0], first(tr)[1])} a ${pr(first(tr)[1], first(tr)[2])}, ale chybí ${pr(first(tr)[0], first(tr)[2])}`)}</table></div>`;
      const verdict = R && Sy && T ? WG.note('Je to <b>ekvivalence</b> (reflexivní + symetrická + tranzitivní).', 'ok') : R && A && T ? WG.note('Je to <b>uspořádání</b> (reflexivní + antisymetrická + tranzitivní).', 'ok') : WG.note('Není to ani ekvivalence, ani uspořádání.', 'warn');
      // uzávěry po krocích
      const r1 = new Set(base); all.forEach(i => r1.add(i + ',' + i));
      const r2 = new Set(r1); [...r1].forEach(p => { const [i, j] = p.split(',').map(Number); r2.add(j + ',' + i); });
      const r3 = new Set(r2); all.forEach(k => all.forEach(i => all.forEach(j => { if (r3.has(i + ',' + k) && r3.has(k + ',' + j)) r3.add(i + ',' + j); })));
      const diff = (X, Y) => new Set([...X].filter(p => !Y.has(p))), fmt = D => [...D].map(p => { const [i, j] = p.split(',').map(Number); return pr(i, j); }).join(', ') || 'nic';
      const seen = new Set(), cls = []; all.forEach(i => { if (!seen.has(i)) { const c = all.filter(j => r3.has(i + ',' + j)); c.forEach(j => seen.add(j)); cls.push(c.map(j => el[j])); } });
      return [
        { title: 'Zadaná relace a její vlastnosti', what: 'Klikáním do tabulky přidáváš a ubíráš dvojice (řádek x, sloupec y = „x R y“). Pod tabulkou se přepočítají vlastnosti s protipříkladem.', why: 'Vlastnost platí, jen když nemá žádný protipříklad – stačí jediná chybějící dvojice, aby neplatila.', change: `Relace má ${base.size} dvojic.`, view: `<div class="qw-split"><div>${matrix(base, true)}</div><div>${props}${verdict}</div></div>` },
        { title: 'Doplnění na ekvivalenci: reflexivita', what: `Přidáme (x, x) pro každý prvek, který ji ještě nemá: ${fmt(diff(r1, base))}.`, why: 'Ekvivalence musí být reflexivní.', change: `Přibylo ${diff(r1, base).size} dvojic.`, view: matrix(r1, false, diff(r1, base)) },
        { title: 'Symetrie', what: `Ke každé (x, y) přidáme (y, x): ${fmt(diff(r2, r1))}.`, why: 'Ekvivalence musí být symetrická.', change: `Přibylo ${diff(r2, r1).size} dvojic.`, view: matrix(r2, false, diff(r2, r1)) },
        { title: 'Tranzitivita', what: `Když je (x, y) a (y, z), přidáme (x, z), a opakujeme, dokud se něco mění: ${fmt(diff(r3, r2))}.`, why: 'Prakticky: spojíme prvky do skupin a uvnitř každé skupiny dáme „všichni se všemi“.', change: `Přibylo ${diff(r3, r2).size} dvojic.`, view: matrix(r3, false, diff(r3, r2)) },
        { title: `Hotovo: ${cls.length} ${cls.length === 1 ? 'třída' : cls.length < 5 ? 'třídy' : 'tříd'} ekvivalence`, what: `Třídy: ${cls.map(c => '{' + c.join(', ') + '}').join(', ')}.`, why: 'Tři přidané „vrstvy“ jsou nejmenší možné doplnění, a proto je počet přidaných dvojic nejmenší.', change: `Celkem přidáno <b>${r3.size - base.size}</b> dvojic.`, view: matrix(r3, false, diff(r3, base)) }
      ];
    }
  }));

  // ---------- doplnění na uspořádání a Hasseho diagram z tabulky (výpočet MLG.poset v diagrams.js) ----------
  const PEX = { ...MLG.POSET_EX, own: { l: 'vlastní (klikni do tabulky)', el: ['a', 'b', 'c', 'd', 'e'], r: [] } };
  WG.reg('hasse', (root, b) => WG.app(root, {
    state: { k: b.k || 'S', m: null },
    top: ui => `${WG.lbl('Relace:')}${Object.entries(PEX).map(([k, g]) => WG.btn('k', g.l, ui.k === k, `data-k="${k}"`)).join('')}`,
    act: (ui, a, d) => {
      if (a === 'k') { ui.k = d.k; ui.m = null; ui.step = 0; }
      if (a === 'cell') { const g = PEX[ui.k], cur = ui.m || g.r.map(([x, y]) => g.el.indexOf(x) + ',' + g.el.indexOf(y)), k = d.i + ',' + d.j; ui.m = cur.includes(k) ? cur.filter(x => x !== k) : [...cur, k]; ui.step = 0; }
    },
    steps: ui => {
      const g = PEX[ui.k], pairs = ui.m ? ui.m.map(s => s.split(',').map(Number)) : g.r, P = MLG.poset(g.el, pairs), el = P.el;
      const f = ps => ps.map(([i, j]) => P.pr(i, j)).join(', ') || 'nic';
      // cls(i, j) → třída buňky; ed = klikací; gone = vyškrtnuté řádky/sloupce
      const mat = (S, cls = () => '', ed = false, gone = []) => `<div class="qw-cv"><table><tr><th>x \\ y</th>${el.map((e, j) => `<th${gone.includes(j) ? ' style="opacity:.3"' : ''}>${e}</th>`).join('')}</tr>${P.all.map(i => `<tr><th${gone.includes(i) ? ' style="opacity:.3"' : ''}>${el[i]}</th>${P.all.map(j => `<td class="${cls(i, j)}"${gone.includes(i) || gone.includes(j) ? ' style="opacity:.25"' : ''} ${ed ? `data-act="cell" data-i="${i}" data-j="${j}" style="cursor:pointer"` : ''}>${P.has(S, i, j) ? '1' : '·'}</td>`).join('')}</tr>`).join('')}</table></div>`;
      const inB = (i, j) => P.has(P.base, i, j), dg = (opts, w = 300, h = 60 * Math.max(P.layers.length, 1) + 30) => WG.svg(DG.svg(w, h, MLG.hasseSvg(P, { x0: 60, w: w - 70, yb: h - 26, dy: 60, ...opts }), w));
      const S = [{ title: 'Zadaná relace jako tabulka', what: `Řádek x, sloupec y: jednička znamená (x, y) ∈ R, tedy „x ≼ y“ – v diagramu bude x <b>pod</b> y. Zadáno: ${f(pairs)}.`, why: 'Tabulka ukáže všechny vlastnosti najednou: diagonála = reflexivita, zrcadlo podle diagonály = (anti)symetrie, řádek x = co je nad x, sloupec y = co je pod y.', change: 'Klikáním do tabulky můžeš dvojice přidávat a ubírat (jen v tomto kroku).', view: mat(P.base, () => '', true) }];
      let cur = new Set(P.base); P.refl.forEach(([i]) => cur.add(i + ',' + i));
      S.push({ title: 'Reflexivita: doplň diagonálu', what: `Na diagonále musí být samé jedničky. Přidáme ${f(P.refl)}.`, why: 'Uspořádání je reflexivní – každý prvek je „menší nebo roven“ sám sobě.', change: `Přibylo ${P.refl.length} dvojic.`, view: mat(new Set(cur), (i, j) => P.refl.some(([a]) => a === i && i === j) ? 'ok' : '') });
      P.rounds.forEach((rd, q) => {
        rd.forEach(([i, j]) => cur.add(i + ',' + j));
        S.push({ title: `Tranzitivita – ${q + 1}. kolo`, what: rd.map(([i, j, z]) => `${P.pr(i, j)}, protože ${P.pr(i, z)} a ${P.pr(z, j)}`).join('<br>'), why: q ? 'Nové dvojice z minulého kola mohly vytvořit další „dvoukrokové“ cesty – proto se kontrola opakuje, dokud něco přibývá.' : 'V tabulce: pro řádek x projdi jeho jedničky (sloupec z) a celý řádek z „okopíruj“ do řádku x – co je nad z, je i nad x.', change: `Přibylo ${rd.length} dvojic.`, view: mat(new Set(cur), (i, j) => rd.some(([a, c]) => a === i && c === j) ? 'ok' : '') });
      });
      const added = P.refl.length + P.trans.length;
      if (P.anti.length) {
        S.push({ title: 'Antisymetrie je porušena', what: `${f(P.anti)} i obráceně – dva různé prvky jsou „pod sebou“ navzájem.`, why: 'Doplňováním dvojic se to opravit nedá (ubírat nesmíme), takže relaci na uspořádání doplnit <b>nejde</b> a Hasseho diagram neexistuje.', change: 'Konec.', view: mat(P.R, (i, j) => P.anti.some(([a, c]) => (a === i && c === j) || (a === j && c === i)) ? 'no' : '') });
        return S;
      }
      S.push({ title: 'Kontrola antisymetrie', what: P.rounds.length ? `Nic dalšího nepřibývá, tranzitivita je hotová. Žádná dvojice různých prvků nemá jedničku v obou zrcadlových polích (x, y) a (y, x).` : 'Tranzitivita už platila. Žádná dvojice různých prvků nemá jedničku v obou zrcadlových polích.', why: 'Antisymetrie se doplňováním nedá „opravit“ – kdyby se porušila, uspořádání by nešlo vytvořit.', change: `Je to uspořádání; celkem přidáno <b>${added}</b> dvojic.`, view: mat(P.R, (i, j) => P.has(P.R, i, j) && !inB(i, j) ? 'ok' : '') });
      S.push({ title: 'Škrtni diagonálu a tranzitivní dvojice', what: `Zbudou jen bezprostřední následnosti – to budou čáry: ${f(P.covers)}.`, why: 'Dvojici (x, y) škrtni, když existuje z s x ≼ z ≼ y (v tabulce: řádek x i sloupec y mají jedničku ve stejném z). Smyčky se nekreslí.', change: `${P.covers.length} čar místo ${P.R.size} jedniček.`, view: mat(P.R, (i, j) => !P.has(P.R, i, j) ? '' : P.isCover(i, j) ? 'hi' : 'lt') });
      const gone = [];
      P.layers.forEach((L, k) => {
        S.push({ title: `Úroveň ${k}: ${L.map(j => el[j]).join(', ')}`, what: `Mezi zbylými prvky má ${L.length > 1 ? 'sloupce' : 'sloupec'} <b>${L.map(j => el[j]).join(', ')}</b> jedničku jen na diagonále – pod ${L.length > 1 ? 'nimi' : 'ním'} už nic nezbylo.`, why: k ? 'Prvky, které už jsou nakreslené, se vyškrtnou (šedé) a hledají se další minimální.' : 'Sloupec y říká, co leží pod y. Prázdný sloupec = minimální prvek → patří úplně dolů.', change: k ? `Čáry dolů: ${f(P.covers.filter(([, c]) => L.includes(c)))}.` : 'Spodní řada diagramu.', view: `<div class="qw-split"><div>${mat(P.R, (i, j) => L.includes(j) && !gone.includes(i) ? 'hi' : '', false, [...gone])}</div><div>${dg({ only: P.layers.slice(0, k + 1).flat(), hi: Object.fromEntries(L.map(j => [j, 'fA'])), lv: true })}</div></div>` });
        gone.push(...L);
      });
      S.push({ title: 'Hotový Hasseho diagram', what: `Čti zdola nahoru: x ≼ y právě když z x vede cesta <b>nahoru</b> do y. Minimální: ${P.layers[0].map(j => el[j]).join(', ')}; maximální: ${P.all.filter(i => !P.all.some(j => P.lt(i, j))).map(j => el[j]).join(', ')}.`, why: 'Smyčky a tranzitivní dvojice si čtenář domyslí – kreslí se jen bezprostřední následnosti.', change: `Doplněno ${added} dvojic, nakresleno ${P.covers.length} čar.`, view: dg({ lv: true }, 380) });
      return S;
    }
  }));

  // ---------- Vennovy diagramy: operace a zákony ----------
  const OPS = [
    ['A ∩ B', (a, b) => a && b], ['A ∪ B', (a, b) => a || b], ['A ∖ B', (a, b) => a && !b], ['B ∖ A', (a, b) => b && !a], ['A′', a => !a], ['symetrický rozdíl (A ∖ B) ∪ (B ∖ A)', (a, b) => a !== b]
  ];
  const LAWS = [
    ['De Morgan: (A ∪ B)′ = A′ ∩ B′', ['(A ∪ B)′', (a, b) => !(a || b)], ['A′ ∩ B′', (a, b) => !a && !b]],
    ['De Morgan: (A ∩ B)′ = A′ ∪ B′', ['(A ∩ B)′', (a, b) => !(a && b)], ['A′ ∪ B′', (a, b) => !a || !b]],
    ['distributivita: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)', ['A ∩ (B ∪ C)', (a, b, c) => a && (b || c)], ['(A ∩ B) ∪ (A ∩ C)', (a, b, c) => (a && b) || (a && c)]],
    ['distributivita: A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)', ['A ∪ (B ∩ C)', (a, b, c) => a || (b && c)], ['(A ∪ B) ∩ (A ∪ C)', (a, b, c) => (a || b) && (a || c)]],
    ['rozdíl jako průnik s doplňkem: A ∖ B = A ∩ B′', ['A ∖ B', (a, b) => a && !b], ['A ∩ B′', (a, b) => a && !b]],
    ['implikace: A ⇒ B odpovídá A′ ∪ B', ['A′ ∪ B', (a, b) => !a || b], ['(A ∖ B)′', (a, b) => !(a && !b)]],
    ['častá chyba: (A ∪ B)′ ≠ A′ ∪ B′', ['(A ∪ B)′', (a, b) => !(a || b)], ['A′ ∪ B′', (a, b) => !a || !b]]
  ];
  const CIR = { A: [105, 96], B: [175, 96], C: [140, 156] }, RAD = 62, CIR2 = { A: [100, 120], B: [180, 120] };
  const vdiag = (name, f, three) => {
    const C = three ? CIR : CIR2, inn = (k, x, y) => (x - C[k][0]) ** 2 + (y - C[k][1]) ** 2 <= RAD * RAD;
    let fill = '';
    for (let y = 8; y < 232; y += 3) { let run = null; for (let x = 8; x <= 274; x += 3) { const on = f(inn('A', x + 1, y + 1), inn('B', x + 1, y + 1), three ? inn('C', x + 1, y + 1) : false); if (on && run === null) run = x; if ((!on || x > 270) && run !== null) { fill += `<rect x="${run}" y="${y}" width="${x - run}" height="4"/>`; run = null; } } }
    return svg(280, 250, `<rect x="5" y="5" width="270" height="228" class="b" opacity=".4"/><g fill="var(--accent)" opacity=".6">${fill}</g>${Object.entries(C).map(([k, [x, y]]) => circ(x, y, RAD, 'pd') + text(x + (k === 'A' ? -48 : k === 'B' ? 48 : 0), y + (k === 'C' ? 76 : -50), k, 'c bd')).join('')}` + text(262, 24, 'U', 'e sm mu') + text(140, 246, name, 'c sm bd'), 300);
  };
  WG.reg('venn', (root, b) => WG.app(root, {
    state: { m: b.m || 'op', i: 0 },
    top: ui => `${WG.lbl('Ukázat:')}${WG.btn('m', 'množinové operace', ui.m === 'op', 'data-m="op"')}${WG.btn('m', 'zákony (dva výrazy vedle sebe)', ui.m === 'law', 'data-m="law"')}<div class="qw-row" style="width:100%">${(ui.m === 'op' ? OPS.map(o => o[0]) : LAWS.map(l => l[0])).map((l, i) => WG.btn('i', l, ui.i === i, `data-i="${i}"`)).join('')}</div>`,
    act: (ui, a, d) => { if (a === 'm') { ui.m = d.m; ui.i = 0; } if (a === 'i') ui.i = +d.i; },
    view: ui => {
      if (ui.m === 'op') { const [n, f] = OPS[ui.i]; return split(WG.svg(vdiag(n, f, false)), WG.note(`Vybarvená oblast je výsledek operace <b>${n}</b>; obdélník je universum U.`)); }
      const [t, L, R] = LAWS[ui.i], three = L[1].length === 3, all = [0, 1];
      const eq = all.every(a => all.every(b => all.every(c => !!L[1](!!a, !!b, !!c) === !!R[1](!!a, !!b, !!c))));
      return `<div class="qw-split"><div>${WG.svg(vdiag(L[0], L[1], three))}</div><div>${WG.svg(vdiag(R[0], R[1], three))}</div></div>${WG.note(eq ? `Obě oblasti jsou <b>stejné</b>, a proto platí rovnost množin (a tedy i příslušná logická ekvivalence).` : `Oblasti se <b>liší</b> – rovnost <b>neplatí</b>. Doplněk sjednocení není sjednocením doplňků.`, eq ? 'ok' : 'bad')}`;
    }
  }));
})();
