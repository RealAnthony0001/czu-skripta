// Widgety MLG nad grafy (blok { t: 'widget', name }): galg (Kruskal / Jarník / Dijkstra), tok, kc (kritická cesta), skore, barveni, pruchod.
// Grafy a data berou z MLG (diagrams.js), krokování staví na WG.app (assets/wg.js).
(() => {
  const { graf, circ, GV, GE, lo, TOK, KC, EXPR } = MLG, { svg, text, line } = DG;
  const IDS = Object.keys(GV), N = IDS.length;
  const split = (a, b) => `<div class="qw-split"><div>${WG.svg(a)}</div><div>${b}</div></div>`;
  const other = (e, u) => (e[0] === u ? e[1] : e[1] === u ? e[0] : null);

  // ---------- Kruskal / Jarník / Dijkstra na grafu ze slajdu ----------
  const gview = (vc = {}, ec = {}, lab = {}) => svg(400, 300, graf(Object.fromEntries(IDS.map(k => [k, [GV[k][0], GV[k][1], vc[k] || 'b']])), GE.map((e, i) => [e[0], e[1], e[2], { cls: ec[i] || 'ln', lo: lo(e) }]))
    + Object.entries(lab).map(([k, t]) => text(GV[k][0] - 18, GV[k][1] - 14, t, 'e sm bd tA')).join(''), 420);
  const en = i => `${GE[i][0]}–${GE[i][1]} (${GE[i][2]})`;

  function kruskal() {
    const order = GE.map((_, i) => i).sort((x, y) => GE[x][2] - GE[y][2] || x - y), comp = Object.fromEntries(IDS.map(v => [v, v])), ec = {}, st = {}, S = [];
    let sum = 0, cnt = 0, vc = {};
    const comps = () => { const g = {}; IDS.forEach(v => (g[comp[v]] ||= []).push(v)); return Object.values(g).map(x => '{' + x.join(', ') + '}').join(' '); };
    const list = cur => WG.tbl(['#', 'hrana', 'stav'], order.map((i, k) => ({ cls: i === cur ? 'cur' : st[i] === 'x' ? 'skip' : st[i] === 'ok' ? 'add' : '', cells: [k + 1, en(i), st[i] === 'ok' ? '✓ přidána' : st[i] === 'x' ? '✗ kružnice' : i === cur ? '→' : ''] })));
    const push = (o, cur) => S.push({ ...o, view: split(gview({ ...vc }, { ...ec }), list(cur)) });
    push({ title: 'Začínáme lesem bez hran', what: `Graf má ${N} vrcholů a ${GE.length} hran. Hrany seřadíme podle váhy od nejlehčí (u stejné váhy na pořadí nezáleží).`, why: 'Hladový postup: vždy zkusíme nejlevnější dosud nepoužitou hranu.', change: `Každý vrchol je samostatná komponenta: ${comps()}` }, -1);
    for (const i of order) {
      if (cnt === N - 1) break;
      const [a, b, w] = GE[i], ca = comp[a], cb = comp[b], ok = ca !== cb;
      vc = { [a]: 'fW', [b]: 'fW' };
      if (ok) { IDS.forEach(v => { if (comp[v] === cb) comp[v] = ca; }); ec[i] = 'lA'; st[i] = 'ok'; sum += w; cnt++; } else { ec[i] = 'lW'; st[i] = 'x'; }
      push({ title: `Hrana ${en(i)}: ${ok ? 'přidat' : 'přeskočit'}`, what: ok ? `Vrcholy ${a} a ${b} leží v <b>různých</b> komponentách, hrana je spojí.` : `Vrcholy ${a} a ${b} už jsou ve <b>stejné</b> komponentě – hrana by uzavřela kružnici.`,
        why: ok ? 'Přidání hrany mezi dvěma komponentami nevytvoří kružnici, a protože je to nejlehčí takový kandidát, patří do minimální kostry.' : 'Kostra nesmí obsahovat kružnici, takže hranu zahodíme (a už se k ní nevracíme).',
        change: ok ? `Kostra má ${cnt} z ${N - 1} hran, součet ${sum}. Komponenty: ${comps()}` : `Nic se nemění (součet ${sum}, hran ${cnt}).` }, i);
      if (!ok) ec[i] = 'ds ln';
    }
    vc = {};
    push({ title: 'Hotovo – minimální kostra', what: `Kostra má ${N - 1} = n − 1 hran, graf je souvislý, a proto končíme; zbývající hrany by už jen uzavíraly kružnice.`, why: 'Strom na n vrcholech má právě n − 1 hran.', change: `<b>Součet vah = ${sum}</b>.` }, -1);
    return S;
  }

  function jarnik(s) {
    const inT = new Set([s]), ec = {}, S = [];
    let sum = 0;
    const view = (cand, best, nv) => split(gview({ ...Object.fromEntries([...inT].map(v => [v, 'fD'])), ...(nv ? { [nv]: 'fW' } : {}) }, { ...ec, ...Object.fromEntries(cand.map(i => [i, i === best ? 'lA' : 'lW'])) }),
      cand.length ? WG.tbl(['kandidát', 'váha'], cand.map(i => ({ cls: i === best ? 'cur' : '', cells: [en(i).replace(/ \(.*/, ''), GE[i][2]] }))) : '');
    S.push({ title: `Začínáme ve vrcholu ${s}`, what: 'Jeden vrchol je zatím celý strom.', why: 'Jarník nechá růst jeden strom; nemusí hrany třídit celé předem.', change: `Strom: {${s}}`, view: view([], -1) });
    while (inT.size < N) {
      const cand = GE.map((_, i) => i).filter(i => inT.has(GE[i][0]) !== inT.has(GE[i][1])), best = cand.reduce((m, i) => (GE[i][2] < GE[m][2] ? i : m), cand[0]);
      const nv = inT.has(GE[best][0]) ? GE[best][1] : GE[best][0];
      S.push({ title: `Přidáme ${en(best)}`, what: `Z vrcholů stromu vedou ven hrany (oranžově): ${cand.map(i => `${GE[i][0]}–${GE[i][1]} (${GE[i][2]})`).join(', ')}. Nejlehčí je ${en(best)}.`, why: 'Berou se jen hrany do vrcholu, který ve stromu ještě není – jinak by vznikla kružnice. Z nich vybereme tu nejlevnější.', view: view(cand, best, nv),
        change: `Do stromu přibyl vrchol ${nv}; součet vah ${sum + GE[best][2]}.` });
      inT.add(nv); ec[best] = 'lA'; sum += GE[best][2];
    }
    S.push({ title: 'Hotovo – minimální kostra', what: `Strom obsahuje všech ${N} vrcholů.`, why: 'Výsledek je minimální kostra (může se lišit od Kruskalovy, jen má stejný součet).', change: `<b>Součet vah = ${sum}</b>.`, view: view([], -1) });
    return S;
  }

  function dijkstra(s) {
    const d = Object.fromEntries(IDS.map(v => [v, Infinity])), pe = {}, done = [], S = [];
    d[s] = 0;
    const view = (cur, rel) => {
      const ec = {}; Object.values(pe).forEach(i => { ec[i] = 'lA'; }); rel.forEach(i => { ec[i] = ec[i] || 'lW'; });
      const vc = Object.fromEntries(done.map(v => [v, 'fD'])); if (cur) vc[cur] = 'fA';
      return split(gview(vc, ec, Object.fromEntries(IDS.map(v => [v, d[v] === Infinity ? '∞' : d[v]]))),
        WG.tbl(['vrchol', 'd', 'předchůdce', 'stav'], IDS.map(v => ({ cls: v === cur ? 'cur' : '', cells: [v, d[v] === Infinity ? '∞' : d[v], pe[v] !== undefined ? other(GE[pe[v]], v) : '–', done.includes(v) ? 'uzavřen' : ''] }))));
    };
    S.push({ title: `Inicializace: start ${s}`, what: `Ve startu ${s} je hodnota 0, ve všech ostatních vrcholech ∞ a předchůdci jsou neznámí.`, why: 'Zatím známe jedinou cestu: nulovou ze startu do sebe samého.', change: 'Žádný vrchol není uzavřený.', view: view(null, []) });
    while (done.length < N) {
      const u = IDS.filter(v => !done.includes(v)).reduce((m, v) => (d[v] < d[m] ? v : m));
      if (d[u] === Infinity) break;
      done.push(u);
      const rel = [], log = [];
      GE.forEach((e, i) => { const v = other(e, u); if (v && !done.includes(v) && d[u] + e[2] < d[v]) { log.push(`d(${v}): ${d[v] === Infinity ? '∞' : d[v]} → ${d[u] + e[2]}`); d[v] = d[u] + e[2]; pe[v] = i; rel.push(i); } });
      S.push({ title: `Uzavřeme vrchol ${u} (d = ${d[u]})`, what: `Mezi neuzavřenými vrcholy má nejmenší hodnotu ${u}: ${d[u]}. Uzavřeme ho a zrelaxujeme hrany z něj do neuzavřených sousedů.`,
        why: 'Hrany mají kladné váhy, takže žádná jiná cesta k u už nemůže být kratší – vzdálenost je konečná.', change: log.length ? log.join('; ') : 'Žádná hodnota se nezlepšila.', view: view(u, rel) });
    }
    S.push({ title: 'Hotovo – strom nejkratších cest', what: 'Všechny vrcholy jsou uzavřené. Červené hrany („vrchol – předchůdce“) tvoří strom nejkratších cest z ' + s + '.', why: 'Cestu do libovolného vrcholu přečteš zpětně po předchůdcích.', change: `Např. do ${IDS.filter(v => v !== s).sort((a, b) => d[b] - d[a])[0]} je to ${Math.max(...Object.values(d))}.`, view: view(null, []) });
    return S;
  }

  WG.reg('galg', (root, b) => WG.app(root, {
    state: { alg: b.alg || 'kruskal', s: 's' },
    top: ui => `${WG.lbl('Algoritmus:')}${WG.sel('alg', [['kruskal', 'Kruskal (minimální kostra)'], ['jarnik', 'Jarník (minimální kostra)'], ['dijkstra', 'Dijkstra (nejkratší cesty)']], ui.alg)}${ui.alg === 'kruskal' ? '' : `${WG.lbl('start:')}${WG.sel('s', IDS.map(v => [v, v]), ui.s)}`}`,
    input: ui => { ui.step = 0; },
    steps: ui => (ui.alg === 'kruskal' ? kruskal() : ui.alg === 'jarnik' ? jarnik(ui.s) : dijkstra(ui.s))
  }));

  // ---------- maximální tok (Ford–Fulkerson po zvětšujících cestách) ----------
  function tokSteps() {
    const f = {}, cap = {}; TOK.E.forEach(([a, c, k]) => { f[a + c] = 0; cap[a + c] = k; });
    const view = (path, cutSet) => {
      const E = TOK.E.map(([a, c, k, o]) => { const on = path && path.some(([x, y]) => x + y === a + c || y + x === a + c);
        return [a, c, `${f[a + c]}/${k}`, { ...o, cls: cutSet ? (cutSet.has(a) && !cutSet.has(c) ? 'lA' : 'ln') : on ? 'lW' : 'ln' }]; });
      const V = Object.fromEntries(Object.entries(TOK.V).map(([k, v]) => [k, [v[0], v[1], cutSet ? (cutSet.has(k) ? 'fA' : 'b') : v[2] || 'b']]));
      return WG.svg(svg(720, 300, graf(V, E, { dir: true, r: 16 }) + text(360, 20, 'popisek hrany = tok / kapacita', 'c sm mu')));
    };
    const S = [{ title: 'Nulový tok', what: 'Na všech hranách je tok 0, zbytková kapacita se rovná kapacitě.', why: 'Začínáme od nejhoršího přípustného toku a budeme ho zvětšovat po cestách.', change: '|f| = 0', view: view(null) }];
    let tot = 0;
    TOK.paths.forEach((p, k) => {
      const hops = [...p].slice(1).map((c, i) => [p[i], c]);
      const res = hops.map(([x, y]) => (f[x + y] !== undefined ? cap[x + y] - f[x + y] : f[y + x]));
      const m = Math.min(...res), back = hops.filter(([x, y]) => f[x + y] === undefined);
      hops.forEach(([x, y]) => { if (f[x + y] !== undefined) f[x + y] += m; else f[y + x] -= m; });
      tot += m;
      S.push({ title: `Cesta ${k + 1}: ${[...p].join(' → ')} (+${m})`, what: `Zbytkové kapacity po cestě: ${hops.map(([x, y], i) => `${x}→${y}: ${res[i]}`).join(', ')}. Pošleme minimum, tedy <b>${m}</b>.`,
        why: back.length ? `Cesta jde i po <b>zpětné hraně ${back.map(([x, y]) => x + '→' + y).join(', ')}</b>: tok, který už teče opačně, se tím z té hrany „vrátí“ a přesměruje jinudy.` : 'Cesta ze zdroje do spotřebiče s kladnou zbytkovou kapacitou na každé hraně.',
        change: `|f| = ${tot - m} + ${m} = <b>${tot}</b>`, view: view(hops) });
    });
    const R = new Set(['S']); for (let ch = true; ch;) { ch = false; TOK.E.forEach(([a, c, k]) => { if (R.has(a) && !R.has(c) && f[a + c] < k) { R.add(c); ch = true; } if (R.has(c) && !R.has(a) && f[a + c] > 0) { R.add(a); ch = true; } }); }
    const cutCap = TOK.E.filter(([a, c]) => R.has(a) && !R.has(c)).reduce((s, [, , k]) => s + k, 0);
    S.push({ title: 'Žádná další cesta → maximální tok a minimální řez', what: `Ze zdroje se po hranách se zbytkovou kapacitou dostaneme jen do vrcholů {${[...R].join(', ')}}. Spotřebič je nedosažitelný, cesta už neexistuje.`,
      why: 'Hrany vedoucí z této množiny ven jsou plně využité. Jejich kapacita tvoří minimální řez a podle věty Ford–Fulkerson se rovná maximálnímu toku.', change: `|f| = <b>${tot}</b> = kapacita řezu R({${[...R].join(', ')}}) = ${cutCap}`, view: view(null, R) });
    return S;
  }
  WG.reg('tok', root => WG.app(root, { steps: tokSteps }));

  // ---------- kritická cesta ----------
  function kcSteps() {
    const { V, E } = KC, ids = Object.keys(V), t = { S: 0 };
    const indeg = Object.fromEntries(ids.map(v => [v, 0])); E.forEach(e => { indeg[e[1]]++; });
    const order = []; for (const q = ids.filter(v => !indeg[v]); q.length;) { const u = q.shift(); order.push(u); E.forEach(e => { if (e[0] === u && --indeg[e[1]] === 0) q.push(e[1]); }); }
    const back = { T: 0 }; [...order].reverse().forEach(u => E.forEach(e => { if (e[0] === u && back[e[1]] !== undefined) back[u] = Math.max(back[u] ?? -1, e[2] + back[e[1]]); }));
    const view = (done, cur, crit) => {
      const VV = Object.fromEntries(ids.map(k => [k, [V[k][0], V[k][1], k === cur ? 'fA' : done.includes(k) ? 'fD' : 'b']]));
      const ee = E.map(e => [e[0], e[1], e[2], { cls: crit ? (t[e[0]] + e[2] + back[e[1]] === t.T ? 'lA' : 'ln') : e[1] === cur ? 'lW' : 'ln', bend: e[3] || 0, lo: e[4] }]);
      const tag = k => `<rect x="${V[k][0] - 14}" y="${V[k][1] - 42}" width="28" height="17" class="fD"/>` + text(V[k][0], V[k][1] - 29, t[k], 'c bd sm tD');
      return WG.svg(svg(720, 350, `<g transform="translate(0,18)">${ids.filter(k => done.includes(k)).map(tag).join('')}${graf(VV, ee, { dir: true })}</g>` + text(360, 345, 'modrý štítek nad vrcholem = nejdřívější začátek t(v)', 'c sm mu')));
    };
    const S = [{ title: 'Začátek: t(S) = 0', what: 'Vrcholy jsou události, hrany činnosti s dobou trvání. Zdroj S má nejdřívější čas 0.', why: 'Vrcholy zpracováváme v topologickém pořadí – vrchol až po všech, ze kterých do něj vedou hrany.', change: `Pořadí: ${order.join(' → ')}`, view: view(['S'], 'S') }];
    const done = ['S'];
    order.slice(1).forEach(v => {
      const c = E.filter(e => e[1] === v).map(e => ({ u: e[0], w: e[2], x: t[e[0]] + e[2] })); t[v] = Math.max(...c.map(x => x.x));
      done.push(v);
      S.push({ title: `t(${v}) = ${t[v]}`, what: `Do ${v} vede: ${c.map(x => `${x.u} (${t[x.u]}) + ${x.w} = ${x.x}`).join(', ')}.`, why: 'Činnost může začít, až skončí všechny, které do jejího počátku vedou – proto bereme maximum.', change: `t(${v}) = max(${c.map(x => x.x).join(', ')}) = <b>${t[v]}</b>`, view: view([...done], v) });
    });
    const crit = E.filter(e => t[e[0]] + e[2] + back[e[1]] === t.T).map(e => e[0] + e[1]);
    const paths = []; const walk = (u, p) => { if (u === 'T') return paths.push(p.join(' ')); E.filter(e => e[0] === u && crit.includes(e[0] + e[1])).forEach(e => walk(e[1], [...p, e[1]])); }; walk('S', ['S']);
    S.push({ title: `Délka projektu ${t.T}, kritické cesty`, what: `Hrana (u, v) je kritická, když t(u) + c(u, v) + (nejdelší cesta z v do T) = ${t.T}. Červeně jsou všechny takové hrany.`, why: 'Zpoždění činnosti na kritické cestě zpozdí celý projekt.', change: `Kritické cesty: <b>${paths.join(' · ')}</b>, délka ${t.T}.`, view: view([...done], null, true) });
    return S;
  }
  WG.reg('kc', root => WG.app(root, { steps: kcSteps }));

  // ---------- existence grafu se skóre (redukce) ----------
  WG.reg('skore', root => WG.app(root, {
    state: { v: '5 4 3 3 3 2' },
    top: ui => `${WG.lbl('Skóre:')}${WG.txt('v', ui.v, 'např. 5 4 3 3 3 2', 22)}${[['5 4 3 3 3 2', 'existuje'], ['3 3 3 1', 'neexistuje'], ['4 4 4 2 2', 'neexistuje'], ['3 3 2 2 2', 'existuje']].map(([v, l]) => WG.btn('set', `${v} (${l})`, false, `data-v="${v}"`)).join('')}`,
    act: (ui, a, d) => { if (a === 'set') { ui.v = d.v; ui.step = 0; } },
    input: ui => { ui.step = 0; },
    steps: ui => {
      const raw = ui.v.split(/[\s,;]+/).filter(Boolean).map(Number);
      if (!raw.length || raw.length > 10 || raw.some(x => !Number.isInteger(x) || x < 0)) return [{ title: '', view: WG.note('Zadej 1 až 10 nezáporných celých čísel oddělených mezerou.', 'bad') }];
      let items = raw.map((d, i) => ({ id: i + 1, d })), edges = [];
      const n = items.length, pos = Object.fromEntries(items.map((x, i) => [x.id, [210 + 150 * Math.sin(2 * Math.PI * i / n), 150 - 120 * Math.cos(2 * Math.PI * i / n)]]));
      const view = (it, k, verdict) => split(
        `<div class="qw-row">${it.map((x, i) => WG.c(x.d, i === 0 && k > 0 ? 'd1' : i <= k && k > 0 ? 'd0' : 'dd')).join('')}</div><div class="mu" style="font-size:12px">vrcholy: ${it.map(x => 'v' + x.id).join(' ')}</div>${verdict || ''}`,
        WG.svg(svg(420, 300, graf(Object.fromEntries(Object.entries(pos).map(([k, [x, y]]) => [k, [x, y, 'b', 'v' + k]])), edges.map(([a, c]) => [a, c, '', { cls: 'lA' }]), { r: 16 }), 420)));
      const S = [{ title: `Zadání: skóre (${raw.join(', ')})`, what: `Máme ${n} vrcholů se zadanými stupni. Hledáme prostý graf (bez smyček a násobných hran), který toto skóre má.`, why: 'Součet stupňů musí být sudý (každá hrana přispívá dvakrát), ale to samo nestačí – proto redukce.', change: `Součet stupňů = ${raw.reduce((a, c) => a + c, 0)}.`, view: view(items, 0) }];
      for (let guard = 0; guard < 12; guard++) {
        items.sort((a, b) => b.d - a.d || a.id - b.id);
        const k = items[0].d;
        if (k === 0) { S.push({ title: '✓ Samé nuly → graf existuje', what: 'Všechny zbývající stupně jsou 0, nezbývá žádná hrana k přidání.', why: 'Podle věty o skóre existuje graf se zadaným skóre, právě když existuje po redukci.', change: `Sestrojené hrany: ${edges.map(([a, c]) => `v${a}–v${c}`).join(', ') || 'žádné'}.`, view: view(items, 0, WG.note('Graf se zadaným skóre <b>existuje</b>.', 'ok')) }); break; }
        if (k > items.length - 1) { S.push({ title: `✗ Vrchol stupně ${k} nemá dost sousedů`, what: `Největší stupeň je ${k}, ale zbývá jen ${items.length - 1} dalších vrcholů.`, why: 'V prostém grafu je vrchol spojen s každým jiným nejvýš jednou.', change: 'Graf s tímto skórem <b>neexistuje</b>.', view: view(items, 0, WG.note('Graf se zadaným skóre <b>neexistuje</b>.', 'bad')) }); break; }
        const head = items[0], next = items.slice(1);
        for (let i = 0; i < k; i++) { edges.push([head.id, next[i].id]); next[i].d--; }
        const neg = next.some(x => x.d < 0);
        S.push({ title: `Odeber největší (${k}) a ${k} dalším odečti 1`, what: `Vrchol v${head.id} se stupněm ${k} spojíme s ${k} dalšími nejvyššími vrcholy (v${next.slice(0, k).map(x => x.id).join(', v')}) – ty tím ztratí jednu potřebnou hranu.`, why: 'Pokud graf existuje, vždy ho lze upravit tak, aby největší vrchol sousedil právě s nejvyššími ostatními.', change: `Nové skóre: ${next.map(x => x.d).join(' ')}`, view: view(items, k, neg ? WG.note('Objevil se záporný stupeň – skóre nelze splnit.', 'bad') : '') });
        items = next;
        if (neg) { S.push({ title: '✗ Záporný stupeň → graf neexistuje', what: 'Některému vrcholu bychom měli odečíst z nuly.', why: 'Záporný počet zbývajících hran nedává smysl.', change: 'Graf s tímto skórem <b>neexistuje</b>.', view: view(items, 0, WG.note('Graf se zadaným skóre <b>neexistuje</b>.', 'bad')) }); break; }
      }
      return S;
    }
  }));

  // ---------- barvení grafu ----------
  const ring = (n, r = 100, cx = 210, cy = 140) => Array.from({ length: n }, (_, i) => [cx + r * Math.sin(2 * Math.PI * i / n), cy - r * Math.cos(2 * Math.PI * i / n)]);
  const cyc = n => Array.from({ length: n }, (_, i) => [i, (i + 1) % n]);
  const PRE = {
    c5: { l: 'C₅ (lichá kružnice)', chi: 3, p: ring(5), e: cyc(5) },
    c6: { l: 'C₆ (sudá kružnice)', chi: 2, p: ring(6), e: cyc(6) },
    k4: { l: 'K₄', chi: 4, p: ring(4), e: [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]] },
    k33: { l: 'K₃,₃', chi: 2, p: [[90, 50], [90, 140], [90, 230], [330, 50], [330, 140], [330, 230]], e: [0, 1, 2].flatMap(a => [3, 4, 5].map(c => [a, c])) },
    w5: { l: 'kolo (C₅ + střed)', chi: 4, p: [...ring(5), [210, 140]], e: [...cyc(5), ...[0, 1, 2, 3, 4].map(i => [i, 5])] }
  };
  const COL = ['b', 'fA', 'fD', 'fW', 'fE'];
  WG.reg('barveni', root => WG.app(root, {
    state: { g: 'c5', c: [] },
    top: ui => `${WG.lbl('Graf:')}${Object.entries(PRE).map(([k, g]) => WG.btn('g', g.l, ui.g === k, `data-k="${k}"`)).join('')}${WG.btn('clr', 'Vymazat barvy')}`,
    act: (ui, a, d) => { if (a === 'g') { ui.g = d.k; ui.c = []; } if (a === 'clr') ui.c = []; if (a === 'v') ui.c[+d.i] = ((ui.c[+d.i] || 0) + 1) % COL.length; },
    view: ui => {
      const g = PRE[ui.g], bad = g.e.filter(([a, c]) => ui.c[a] && ui.c[a] === ui.c[c]), used = new Set(ui.c.filter(Boolean)).size, full = g.p.every((_, i) => ui.c[i]);
      const V = Object.fromEntries(g.p.map(([x, y], i) => [i, [x, y, COL[ui.c[i] || 0], String(i + 1)]]));
      const body = svg(420, 280, graf(V, g.e.map(e => [e[0], e[1], '', { cls: bad.includes(e) ? 'lA' : 'ln' }]), { r: 17 }) + g.p.map(([x, y], i) => `<circle data-act="v" data-i="${i}" cx="${x}" cy="${y}" r="19" fill="transparent"/>`).join(''), 420);
      const msg = bad.length ? WG.note(`Konflikt: ${bad.map(([a, c]) => `${a + 1}–${c + 1}`).join(', ')} mají stejnou barvu (červená hrana).`, 'bad')
        : !full ? WG.note('Klikáním na vrcholy je obarvi (barva se přepíná v cyklu).') : used === g.chi ? WG.note(`Správné obarvení ${used} barvami – a to je nejmenší možný počet: χ = ${g.chi}.`, 'ok') : WG.note(`Správné obarvení ${used} barvami, ale jde to i s ${g.chi}. Zkus to znovu.`, 'warn');
      return split(WG.svg(body), `${msg}<div class="qw-kv"><span>použito barev</span><span>${used}</span><span>chromatické číslo χ</span><span>${g.chi}</span></div><p class="mu" style="font-size:13px">Obarvení je správné, když žádná hrana nespojuje dva vrcholy stejné barvy. χ(G) je nejmenší počet barev, se kterým to jde.</p>`);
    }
  }));

  // ---------- průchod stromem výrazu ----------
  const LAY = (t, x, y, dx, acc = [], par = -1, path = '') => { const id = acc.length; acc.push({ id, t: t[0], x, y, par, leaf: !t[1] }); if (t[1]) { LAY(t[1], x - dx, y + 70, dx / 2, acc, id); LAY(t[2], x + dx, y + 70, dx / 2, acc, id); } return acc; };
  const NODES = LAY(EXPR, 190, 30, 100);
  const kids = id => NODES.filter(n => n.par === id).map(n => n.id);
  const ORDER = { pre: 'preorder (uzel, levý, pravý) → prefix', in: 'inorder (levý, uzel, pravý) → infix', post: 'postorder (levý, pravý, uzel) → postfix' };
  const visit = (id, how, out = []) => { const [l, r] = kids(id); if (how === 'pre') out.push(id); if (l !== undefined) visit(l, how, out); if (how === 'in') out.push(id); if (r !== undefined) visit(r, how, out); if (how === 'post') out.push(id); return out; };
  WG.reg('pruchod', root => WG.app(root, {
    state: { how: 'pre' },
    top: ui => `${WG.lbl('Pořadí:')}${WG.sel('how', Object.entries(ORDER), ui.how)}`,
    input: ui => { ui.step = 0; },
    steps: ui => {
      const seq = visit(0, ui.how), draw = (k) => {
        const seen = seq.slice(0, k);
        return svg(420, 270, NODES.filter(n => n.par >= 0).map(n => line(NODES[n.par].x, NODES[n.par].y + 14, n.x, n.y - 14, 'ln')).join('') +
          NODES.map(n => circ(n.x, n.y, 15, k && seq[k - 1] === n.id ? 'fA' : seen.includes(n.id) ? 'fD' : n.leaf ? 'b' : 'b') + text(n.x, n.y + 5, n.t, 'c bd')).join(''), 420);
      };
      const mk = k => split(WG.svg(draw(k)), `<div class="mu" style="font-size:12px">výstup:</div><div class="qw-big">${seq.slice(0, k).map(i => NODES[i].t).join(' ') || '…'}</div>`);
      return [{ title: `Začínáme v kořeni – ${ORDER[ui.how]}`, what: 'Strom výrazu x · (x + 2) + (x − 3) : 5: kořen je operace, která se provádí poslední; listy jsou čísla a proměnné.', why: ui.how === 'pre' ? 'Prefix = operátor před operandy (polská notace); závorky nejsou třeba.' : ui.how === 'post' ? 'Postfix = operátor za operandy; závorky nejsou třeba.' : 'Infix je obvyklý zápis, ale potřebuje závorky (zde by se musely doplnit).', change: 'Zatím nic nebylo zapsáno.', view: mk(0) },
        ...seq.map((id, i) => ({ title: `Zapíšeme „${NODES[id].t}“`, what: ui.how === 'pre' ? 'Při prvním příchodu do uzlu ho rovnou zapíšeme a pak jdeme doleva a doprava.' : ui.how === 'in' ? 'Uzel zapíšeme až po průchodu levým podstromem, před pravým.' : 'Uzel zapíšeme až po průchodu oběma podstromy.', why: NODES[id].leaf ? 'List nemá podstromy, takže se zapíše hned.' : `Uzel „${NODES[id].t}“ je operace, kterou se podstromy spojují.`, change: `Výstup: ${seq.slice(0, i + 1).map(j => NODES[j].t).join(' ')}`, view: mk(i + 1) }))];
    }
  }));
})();
