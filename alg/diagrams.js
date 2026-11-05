// Diagramy předmětu Algoritmizace (SVG přes DG z assets/dg.js) + vykreslovač strukturogramů a vzorové programy pro widget 'strukt'
const ALG = (() => {
  const { svg, text, rect, line, path, box } = DG;
  const circ = (x, y, r, cls = 'b') => `<circle cx="${x}" cy="${y}" r="${r}" class="${cls}"/>`;
  const poly = (pts, cls = 'b') => `<polygon points="${pts}" class="${cls}"/>`;
  const dia = (x, y, w, h, cls, s) => poly(`${x},${y - h / 2} ${x + w / 2},${y} ${x},${y + h / 2} ${x - w / 2},${y}`, cls) + text(x, y + 5, s, 'c');
  const oval = (x, y, w, h, cls, s) => `<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="${h / 2}" class="${cls}"/>` + text(x, y + 5, s, 'c');
  const bx = (x, y, w, h, cls, s) => rect(x - w / 2, y - h / 2, w, h, cls) + text(x, y + 5, s, 'c');

  // ===== strukturogram (Nassi–Shneiderman) =====
  // uzly: { s: 'příkaz' } | { w: 'podmínka', b: [...] } (cyklus s podmínkou na začátku) | { d: 'podmínka', b: [...] } (na konci)
  //       { i: 'podmínka', y: [...], n: [...], pl } (selekce; pl = větev „+“ vlevo jako na slajdech, jinak „−“ vlevo jako v úlohách)
  // f / c = funkce pro widget (provedení příkazu / vyhodnocení podmínky); cur = id zvýrazněného uzlu, sel = větev, kterou výpočet jde
  const RH = 28, IND = 28, HH = 40;
  let uid = 0;
  const ids = ns => ns.forEach(n => { n.id ??= ++uid; ['b', 'y', 'n'].forEach(k => n[k] && ids(n[k])); });
  function nsBlk(ns, x, y, w, o) {
    let s = '', h = 0;
    ns.forEach(n => { const r = nsOne(n, x, y + h, w, o); s += r.s; h += r.h; });
    return { s, h };
  }
  function nsOne(n, x, y, w, o) {
    const hl = n.id === o.cur ? (o.ok === false ? 'fA' : 'fW') : 'b', t = (s, ty) => text(x + w / 2, ty, s, 'c mo');
    if (n.s != null) return { s: rect(x, y, w, RH, hl) + t(n.s, y + 19), h: RH };
    if (n.w != null || n.d != null) {
      const top = n.w != null, inn = nsBlk(n.b, x + IND, y + (top ? RH : 0), w - IND, o), h = inn.h + RH;
      const head = top ? rect(x, y, w, RH, hl) + t(n.w, y + 19) : rect(x, y + inn.h, w, RH, hl) + t(n.d, y + inn.h + 19);
      return { s: rect(x, y, IND, h, hl) + head + inn.s, h };
    }
    const hw = w / 2, L = n.pl ? n.y : n.n, R = n.pl ? n.n : n.y, lp = n.pl ? '+' : '−', rp = n.pl ? '−' : '+';
    const a = nsBlk(L || [], x, y + HH, hw, o), b = nsBlk(R || [], x + hw, y + HH, hw, o), hb = Math.max(a.h, b.h, RH);
    const side = n.id === o.cur && o.sel != null ? ((o.sel === !!n.pl) ? 'L' : 'R') : '';
    let s = rect(x, y, w, HH, hl) + line(x, y, x + hw, y + HH, 'ln') + line(x + w, y, x + hw, y + HH, 'ln') + t(n.i, y + 17)
      + text(x + 10, y + HH - 7, lp, 'bd') + text(x + w - 10, y + HH - 7, rp, 'e bd') + a.s + b.s;
    if (a.h < hb) s += rect(x, y + HH + a.h, hw, hb - a.h, side === 'L' ? 'fD' : 'b');
    if (b.h < hb) s += rect(x + hw, y + HH + b.h, hw, hb - b.h, side === 'R' ? 'fD' : 'b');
    if (side) s += rect(side === 'L' ? x : x + hw, y + HH - 3, hw, 3, 'fD');
    return { s, h: HH + hb };
  }
  // jeden strukturogram s nadpisem; vrací { s, h } pro skládání vedle sebe
  const nsPart = (title, ns, x, y, w, o = {}) => { ids(ns); const r = nsBlk(ns, x, y + (title ? 22 : 0), w, o); return { s: (title ? text(x + w / 2, y + 15, title, 'c bd') : '') + r.s, h: r.h + (title ? 22 : 0) }; };
  const ns = (ns, w = 300, title = '', o = {}) => { const r = nsPart(title, ns, 4, 4, w, o); return svg(w + 8, r.h + 8, r.s, w + 8); };

  // ===== vzorové programy (úlohy ze cvičení „Strukturogramy“ a přednášky 5) =====
  const S = (s, f) => ({ s, f }), W = (w, c, b) => ({ w, c, b }), I = (i, c, y, n, pl) => ({ i, c, y, n, pl });
  const pis = (lbl, g) => S('piš ' + lbl, (v, io) => io.out.push(g(v, io)));
  const nact = k => S(k + ' = načti', (v, io) => { v[k] = io.read(); });
  const F = (x, io) => { const r = x % 2 === 0 ? (x === 2 ? 0 : x) : 1; io.log.push(`F(${x}) = ${r}`); return r; };
  const FA = (x, io) => { let r = 0, k = x; while (k > 0) { r += k; k--; } io.log.push(`FA(${x}) = ${r}`); return r; };
  const FB = (x, io) => { const r = x < 4 ? FA(x - 2, io) : 5; io.log.push(`FB(${x}) = ${r}`); return r; };
  const P = {
    r1: { l: 'Ř1 – kolik hvězdiček', main: [S('a = 1', v => { v.a = 1; }), S('b = 10', v => { v.b = 10; }), W('a < b', v => v.a < v.b, [S('a = a + 2', v => { v.a += 2; }), S('b = b - 1', v => { v.b -= 1; }), pis('"*"', () => '*')])] },
    r2: { l: 'Ř2 – O a X', main: [S('a = 1', v => { v.a = 1; }), W('a <= 10', v => v.a <= 10, [S('b = 20 - 2a', v => { v.b = 20 - 2 * v.a; }), I('a > b', v => v.a > v.b, [pis('"X"', () => 'X')], [pis('"O"', () => 'O')]), S('a = a + 1', v => { v.a += 1; })])] },
    r3: { l: 'Ř3 – čtení řady', inp: '3, 7, 1, 0, 4, 2, 5, 6, 6, 0, 3, 0, 5, 2, 0, 8, 4', main: [nact('a'), W('a > 0', v => v.a > 0, [nact('a'), pis('a', v => v.a), nact('a')])] },
    r4: { l: 'Ř4 – vnořené cykly', main: [S('a = 10', v => { v.a = 10; }), W('a > 1', v => v.a > 1, [S('b = 10', v => { v.b = 10; }), W('b > a', v => v.b > v.a, [I('a mod 2 == 0', v => v.a % 2 === 0, [pis('"A"', () => 'A')], [pis('"B"', () => 'B')]), S('b = b - 1', v => { v.b -= 1; })]), S('a = a - 1', v => { v.a -= 1; })])] },
    r5: { l: 'Ř5 – funkce F', inp: '3, 1, 7, 6, 8, 4, 2, 5, 0', fn: 'f5', main: [nact('x'), W('F(x) > 0', (v, io) => F(v.x, io) > 0, [I('x > 5', v => v.x > 5, [pis('F(x+1)', (v, io) => F(v.x + 1, io))], [pis('F(x)+1', (v, io) => F(v.x, io) + 1)]), nact('x')])] },
    n1: { l: 'N1 – hvězdičky (neřešený)', main: [S('a = 1', v => { v.a = 1; }), S('b = 3', v => { v.b = 3; }), W('a < b', v => v.a < v.b, [pis('"*"', () => '*'), I('a == 2', v => v.a === 2, [S('b = b + 1', v => { v.b += 1; })], []), S('a = a + 1', v => { v.a += 1; })])] },
    n2: { l: 'N2 – od 10 do 1 (doplněné ???)', main: [S('a = 1', v => { v.a = 1; }), W('a <= 10', v => v.a <= 10, [pis('11 - a', v => 11 - v.a), S('a = a + 1', v => { v.a += 1; })])] },
    p5: { l: 'P5 – funkce FA a FB', fn: 'fab', main: [pis('FA(3)', (v, io) => FA(3, io)), pis('FA(FB(3))', (v, io) => FA(FB(3, io), io))] }
  };
  // vedlejší funkce (jen pro obrázek; počítají se v JS výše)
  const FN = {
    f5: [['F(x)', [I('x mod 2 == 0', null, [I('x == 2', null, [{ s: 'vrať 0' }], [{ s: 'vrať x' }])], [{ s: 'vrať 1' }])]]],
    fab: [['FA(x)', [{ s: 'vysledek = 0' }, { w: 'x > 0', b: [{ s: 'vysledek = vysledek + x' }, { s: 'x = x - 1' }] }, { s: 'vrať vysledek' }]],
      ['FB(x)', [I('x < 4', null, [{ s: 'vrať FA(x-2)' }], [{ s: 'vrať 5' }], true)]]]
  };
  // program (hlavní + funkce) vedle sebe
  function prog(k, o = {}) {
    const p = P[k], mw = 300, fw = 260, parts = [nsPart(p.fn ? 'Hlavní program' : '', p.main, 4, 4, mw, o)];
    (FN[p.fn] || []).forEach(([t, b], i) => parts.push(nsPart(t, b, 4 + mw + 30 + i * (fw + 20), 4, fw)));
    const w = 8 + mw + (FN[p.fn] || []).length * (fw + 30);
    return svg(w, Math.max(...parts.map(r => r.h)) + 8, parts.map(r => r.s).join(''), w);
  }
  // provedení programu → pole kroků { id, kind, txt, r, v, out, log }; čistá funkce
  function run(k, input) {
    const p = P[k], v = {}, out = [], inp = [...input], st = [];
    ids(p.main);
    const io = { out, log: [], read: () => { if (!inp.length) { io.log.push('vstup došel – načte se 0'); return 0; } return inp.shift(); } };
    const push = (n, kind, txt, r) => { st.push({ id: n.id, kind, txt, r, v: { ...v }, out: [...out], log: io.log.splice(0), left: [...inp] }); if (st.length > 400) throw new Error('limit'); };
    const ex = ns => ns.forEach(n => {
      if (n.s != null) { n.f(v, io); return push(n, 's', n.s); }
      if (n.w != null) { for (;;) { const r = !!n.c(v, io); push(n, 'w', n.w, r); if (!r) break; ex(n.b); } return; }
      const r = !!n.c(v, io); push(n, 'i', n.i, r); ex(r ? n.y : n.n);
    });
    try { ex(p.main); } catch (e) { st.push({ id: 0, kind: 'x', txt: 'Výpočet přerušen po 400 krocích.', v: { ...v }, out: [...out], log: [], left: [] }); }
    return st;
  }

  // ===== P1: vlastnosti a stavební kameny =====
  const vlastnosti = () => {
    const it = [['Konečnost', 'vždy skončí', 'konečně mnoho kroků'], ['Zobecnitelnost', 'celá skupina úloh', 'ne jen 3 × 5'], ['Determinovanost', 'další krok je jasný', 'právě jeden'], ['Elementárnost', 'nedělitelné kroky', 'jazyk algoritmu'], ['Resultativnost', 'vrací výsledek', 'monitor, soubor …']];
    return svg(740, 190, it.map(([h, a, b], i) => { const x = 78 + i * 146; return circ(x, 92, 66, i % 2 ? 'fD' : 'fA') + text(x, 82, h, 'c bd') + text(x, 102, a, 'c sm') + text(x, 118, b, 'c sm mu'); }).join(''));
  };
  const kameny = () => {
    const ar = (x1, y1, x2, y2) => line(x1, y1, x2, y2, 'ln', 'end');
    // sekvence
    let s = text(110, 18, 'sekvence', 'c bd') + bx(110, 50, 120, 30, 'b', 'příkaz 1') + ar(110, 65, 110, 88) + bx(110, 103, 120, 30, 'b', 'příkaz 2') + ar(110, 118, 110, 141) + bx(110, 156, 120, 30, 'b', 'příkaz 3');
    // selekce
    s += text(370, 18, 'selekce', 'c bd') + dia(370, 55, 130, 50, 'fW', 'podmínka') + path('M305,55 H270 V105', 'ln', 'end') + path('M435,55 H470 V105', 'ln', 'end') + text(292, 48, '−', 'c bd') + text(452, 48, '+', 'c bd')
      + bx(270, 120, 110, 30, 'b', 'příkaz 1') + bx(470, 120, 110, 30, 'b', 'příkaz 2') + path('M270,135 V160 H470 V135', 'ln') + ar(370, 160, 370, 180);
    // iterace
    s += text(630, 18, 'iterace', 'c bd') + dia(630, 60, 130, 50, 'fD', 'podmínka') + ar(630, 85, 630, 110) + bx(630, 125, 110, 30, 'b', 'příkaz') + path('M630,140 V160 H715 V60 H695', 'ln', 'end') + path('M565,60 H545 V180', 'ln', 'end') + text(642, 102, '+', 'bd') + text(555, 52, '−', 'c bd');
    return svg(740, 190, s);
  };
  const symboly = () => {
    const it = [[oval(80, 60, 110, 36, 'fA', ''), 'začátek – konec'], [dia(225, 60, 110, 56, 'fW', ''), 'rozhodovací člen'], [rect(310, 42, 120, 36, 'b') + line(322, 42, 322, 78) + line(418, 42, 418, 78), 'podprogram'], [rect(470, 42, 120, 36, 'fD'), 'příkaz / načtení dat'], [circ(670, 60, 18, 'b') + text(670, 65, '1', 'c sm'), 'spojka (čísluje se)']];
    const xs = [80, 225, 370, 530, 670];
    return svg(740, 120, it.map(([g, l], i) => g + text(xs[i], 108, l, 'c sm')).join(''));
  };
  // vývojový diagram: nejmenší ze tří čísel
  const minTri = () => {
    const ar = (d) => path(d, 'ln', 'end');
    return svg(740, 330,
      oval(370, 22, 110, 30, 'fA', 'začátek') + ar('M370,37 V55') + bx(370, 72, 170, 32, 'fD', 'načti a, b, c') + ar('M370,88 V105') + bx(370, 122, 130, 32, 'b', 'min = a') + ar('M370,138 V158')
      + dia(370, 185, 130, 52, 'fW', 'b < min') + ar('M435,185 H520 V205') + text(450, 178, '+', 'bd') + bx(520, 222, 120, 32, 'b', 'min = b') + path('M305,185 H250 V255 H370', 'ln') + text(285, 178, '−', 'bd') + path('M520,238 V255 H370', 'ln') + ar('M370,255 V262')
      + dia(370, 285, 130, 46, 'fW', 'c < min') + ar('M435,285 H520 V300') + text(450, 278, '+', 'bd') + bx(520, 314, 120, 26, 'b', 'min = c') + ar('M305,285 H160') + text(285, 278, '−', 'bd') + ar('M460,314 H160') + bx(100, 300, 120, 32, 'fD', 'piš min') + text(600, 40, 'každé porovnání zjistí,', 'sm mu') + text(600, 56, 'zda nové číslo je menší', 'sm mu') + text(600, 72, 'než dosavadní minimum', 'sm mu'));
  };
  // vývojový diagram: průměr posloupnosti ukončené nulou
  const prumer = () => {
    const ar = d => path(d, 'ln', 'end');
    return svg(740, 300,
      oval(200, 20, 110, 28, 'fA', 'začátek') + ar('M200,34 V50') + bx(200, 66, 200, 30, 'b', 'soucet = 0, pocet = 0') + ar('M200,81 V98') + bx(200, 114, 140, 30, 'fD', 'načti x') + ar('M200,129 V148')
      + dia(200, 175, 120, 50, 'fW', 'x == 0') + text(150, 205, '−', 'bd') + ar('M200,200 V222') + bx(200, 238, 200, 30, 'b', 'soucet = soucet + x') + ar('M200,253 V262') + bx(200, 278, 160, 28, 'b', 'pocet = pocet + 1') + path('M120,278 H60 V114 H130', 'ln', 'end')
      + text(272, 168, '+', 'bd') + ar('M260,175 H420') + dia(500, 175, 150, 50, 'fW', 'pocet == 0') + text(586, 168, '−', 'bd') + ar('M575,175 H640 V215') + bx(640, 232, 160, 30, 'fD', 'piš soucet / pocet') + text(510, 214, '+', 'bd') + ar('M500,200 V258') + bx(500, 274, 170, 28, 'fD', 'piš „nic nezadáno“')
      + text(440, 70, 'nula ukončuje zadávání', 'sm mu') + text(440, 86, 'a do průměru se nepočítá', 'sm mu'));
  };
  // vývojový diagram úlohy „doplň okénka“ (největší číslo v řadě)
  const maxDopln = () => {
    const ar = d => path(d, 'ln', 'end');
    return svg(740, 330,
      ar('M300,0 V18') + bx(300, 34, 150, 30, 'fD', '① načti x') + ar('M300,49 V66') + bx(300, 82, 150, 30, 'b', '② max = x') + ar('M300,97 V122')
      + dia(300, 150, 150, 52, 'fW', '③ x == 0') + text(214, 140, '− *', 'bd tA') + ar('M225,150 H120 V200') + bx(120, 215, 130, 30, 'fD', '④ piš max') + text(380, 140, '+ *', 'bd tA') + ar('M375,150 H460 V178')
      + dia(460, 205, 150, 52, 'fW', '⑤ x > max') + text(546, 196, '+', 'bd') + ar('M535,205 H560 V240') + bx(560, 255, 130, 28, 'b', '⑥ max = x') + text(374, 196, '−', 'bd') + path('M385,205 H360 V285 H555', 'ln', 'end') + ar('M560,269 V280') + bx(560, 295, 130, 28, 'fD', '⑦ načti x') + path('M625,295 H690 V112 H300', 'ln', 'end')
      + text(20, 270, '* znaménka u ③ jsou v zadání opačně –', 'sm tA') + text(20, 286, 's výrazem x == 0 vede „+“ ke konci', 'sm tA'));
  };

  // ===== P2: přechody vývojový diagram → strukturogram =====
  const prechody = () => {
    const a = nsPart('sekvence', [{ s: 'příkaz 1' }, { s: 'příkaz 2' }, { s: 'příkaz 3' }], 4, 4, 160);
    const b = nsPart('selekce', [{ i: 'podmínka', y: [{ s: 'příkaz 1' }], n: [{ s: 'příkaz 2' }], pl: true }], 190, 4, 170);
    const c = nsPart('while', [{ w: 'podmínka', b: [{ s: 'příkaz' }, { s: '…' }] }], 386, 4, 170);
    const d = nsPart('do-while', [{ d: 'podmínka', b: [{ s: 'příkaz' }, { s: '…' }] }], 580, 4, 156);
    return svg(740, 130, a.s + b.s + c.s + d.s + text(271, 122, '+ vlevo, − vpravo (jako na slajdu)', 'c sm mu') + text(470, 122, 'podmínka na začátku', 'c sm mu') + text(658, 122, 'podmínka na konci', 'c sm mu'));
  };
  // problematický přechod: skok zpět doprostřed – řešení zdvojením příkazu 1
  const problem = () => {
    const ar = d => path(d, 'ln', 'end');
    const fl = ar('M90,0 V20') + bx(90, 36, 120, 30, 'b', 'příkaz 1') + ar('M90,51 V72') + dia(90, 100, 120, 50, 'fW', 'podmínka') + text(160, 92, '+', 'bd') + ar('M150,100 H230 V70') + bx(230, 55, 110, 30, 'b', 'příkaz 2') + path('M230,40 V10 H90', 'ln', 'end') + text(80, 140, '−', 'bd') + ar('M90,125 V160') + text(150, 182, 'skok zpět před příkaz 1', 'c sm mu');
    const r = nsPart('', [{ s: 'příkaz 1' }, { w: 'podmínka', b: [{ s: 'příkaz 2' }, { s: 'příkaz 1' }] }], 440, 30, 260);
    return svg(740, 200, fl + text(355, 100, '⇒', 'c bd') + text(570, 20, 'strukturogram (doplněno): příkaz 1 se zdvojí', 'c sm tA') + r.s + text(570, 160, 'jiné řešení: do { příkaz 1; když podmínka', 'c sm mu') + text(570, 176, 'pak příkaz 2 } while (podmínka)', 'c sm mu'));
  };
  // pravidla + přepis do kódu (slajdy 8 a 12)
  const SL = [{ s: 'příkaz 1' }, { s: 'příkaz 2' }, { i: 'podmínka', pl: true, y: [{ s: 'příkaz 3' }, { w: 'podmínka', b: [{ s: 'příkaz 7' }] }], n: [{ i: 'podmínka', pl: true, y: [{ s: 'příkaz 4' }], n: [{ s: 'příkaz 5' }, { s: 'příkaz 6' }] }] }, { s: 'příkaz 8' }, { d: 'podmínka', b: [{ s: 'příkaz 9' }] }];
  const pravidla = () => {
    const r = nsPart('', SL, 20, 10, 340);
    const code = ['{', '  příkaz1;', '  příkaz2;', '  if (podmínka) {', '    příkaz3;', '    while (podmínka) {', '      příkaz7;', '    }', '  } else {', '    if (podmínka) {', '      příkaz4;', '    } else {', '      příkaz5;', '      příkaz6;', '    }', '  }', '  příkaz8;', '  do {', '    příkaz9;', '  } while (podmínka);', '}'];
    return svg(740, Math.max(r.h + 20, code.length * 15 + 20), r.s + code.map((c, i) => text(420, 20 + i * 15, c.replace(/ /g, '&#160;'), 'mo sm')).join(''));
  };

  // ===== P3: logika v podmínkách =====
  const venn = () => {
    const one = (cx, lbl, cls) => { const id = 'v' + lbl; return `<defs><clipPath id="${id}"><circle cx="${cx - 30}" cy="80" r="50"/></clipPath></defs>` +
      (cls === 'or' ? circ(cx - 30, 80, 50, 'fA') + circ(cx + 30, 80, 50, 'fA') + `<circle cx="${cx - 30}" cy="80" r="50" class="fA" style="stroke:none"/>`
        : cls === 'and' ? circ(cx - 30, 80, 50, 'b') + circ(cx + 30, 80, 50, 'b') + `<circle cx="${cx + 30}" cy="80" r="50" clip-path="url(#${id})" class="fA"/>`
          : circ(cx - 30, 80, 50, 'fA') + circ(cx + 30, 80, 50, 'fA') + `<circle cx="${cx + 30}" cy="80" r="50" clip-path="url(#${id})" class="b"/>`) +
      `<circle cx="${cx - 30}" cy="80" r="50" class="pd"/><circle cx="${cx + 30}" cy="80" r="50" class="pd"/>` + text(cx - 55, 84, 'a', 'c bd') + text(cx + 55, 84, 'b', 'c bd') + text(cx, 160, lbl, 'c bd tA'); };
    return svg(740, 200, one(125, 'or', 'or') + one(370, 'and', 'and') + one(615, 'xor', 'xor') + text(125, 182, 'aspoň jedno platí', 'c sm mu') + text(370, 182, 'platí obě', 'c sm mu') + text(615, 182, 'platí právě jedno', 'c sm mu'));
  };
  const xorSifra = () => {
    const row = (y, lbl, bits, cls) => text(170, y + 22, lbl, 'e mo bd') + [...bits].map((b, i) => box(190 + i * 40, y, 36, 32, cls, b)).join('');
    return svg(740, 230, row(10, 'zpráva', '100111', 'b') + row(50, 'xor klíč', '000010', 'fW') + line(190, 90, 430, 90, 'ln') + row(98, '= šifra', '100101', 'fA') + row(140, 'xor klíč', '000010', 'fW') + line(190, 180, 430, 180, 'ln') + row(188, '= zpráva', '100111', 'fD')
      + text(470, 40, 'xor: 1, když se bity liší', 'sm') + text(470, 60, '0 xor 1 = 1, 1 xor 1 = 0', 'mo sm') + text(470, 120, 'c = a xor b', 'mo') + text(470, 140, 'c xor b = a', 'mo') + text(470, 166, 'stejný klíč použitý dvakrát', 'sm mu') + text(470, 182, 'vrátí původní hodnotu', 'sm mu'));
  };
  const zkraceni = () => {
    const ar = d => path(d, 'ln', 'end');
    return svg(740, 170, text(10, 20, 'b <> 0  and  a / b > 3', 'mo bd')
      + dia(120, 85, 130, 50, 'fW', 'b <> 0') + text(186, 78, '+', 'bd') + ar('M185,85 H270') + dia(350, 85, 150, 50, 'fW', 'a / b > 3') + ar('M425,85 H520') + text(432, 78, '+', 'bd') + box(520, 68, 100, 34, 'fD', 'pravda')
      + text(130, 126, '−', 'bd') + ar('M120,110 V140') + box(70, 140, 100, 28, 'fA', 'nepravda') + ar('M350,110 V140 H175') + text(358, 124, '−', 'bd')
      + text(250, 28, 'je-li b = 0, druhá část se už nevyhodnotí →', 'sm mu') + text(250, 44, 'nedojde k dělení nulou', 'sm mu'));
  };
  // číselná osa: intervaly úloh 1–5 (podmínky s >= / <=)
  const osa = () => {
    const X = n => 330 + n * 40, rows = [['1) x >= 3', [[3, 8.3]]], ['2) x >= 2 and x <= 4', [[2, 4]]], ['3) x <= 3 or x >= 6', [[-1.6, 3], [6, 8.3]]], ['4) (x>=1 and x<=3) or x>=5', [[1, 3], [5, 8.3]]], ['5) [1;2] ∪ [3;4] ∪ [5;6]', [[1, 2], [3, 4], [5, 6]]]];
    const dot = (x, y) => `<circle cx="${x}" cy="${y}" r="5" class="fA" style="fill:var(--accent)"/>`;
    let s = '';
    rows.forEach(([l, iv], j) => { const y = 24 + j * 34; s += text(10, y + 4, l, 'mo sm') + line(X(-1.6), y, X(8.3), y, 'ln');
      iv.forEach(([a, b]) => { s += line(X(Math.max(a, -1.6)), y, X(Math.min(b, 8.3)), y, 'lA') + (a > -1.6 ? dot(X(a), y) : '') + (b < 8.3 ? dot(X(b), y) : ''); }); });
    const y = 24 + rows.length * 34;
    for (let n = -1; n <= 8; n++) s += line(X(n), y - 4, X(n), y + 4, 'ln') + text(X(n), y + 18, n, 'c sm mu');
    return svg(740, y + 30, s.replace(/<line x1="([\d.]+)" y1="(\d+)" x2="([\d.]+)" y2="\2" class="lA"\/>/g, '<line x1="$1" y1="$2" x2="$3" y2="$2" class="lA" style="stroke-width:5"/>'));
  };
  // oblasti v rovině (úlohy 8, 11, 12, 13, 14)
  const rovina = () => {
    const pane = (ox, title, body, f) => { const X = x => ox + 20 + x * 20, Y = y => 170 - y * 18;
      let s = line(X(0), Y(0), X(8.5), Y(0), 'ln', 'end') + line(X(0), Y(0), X(0), Y(8.5), 'ln', 'end') + text(X(8.5), Y(0) + 14, 'x', 'sm mu') + text(X(0) - 10, Y(8.5) + 4, 'y', 'sm mu');
      for (let i = 1; i <= 8; i++) s += line(X(i), Y(0), X(i), Y(0) + 3, 'ln') + line(X(0), Y(i), X(0) - 3, Y(i), 'ln') + (i % 2 ? '' : text(X(i), Y(0) + 13, i, 'c sm mu') + text(X(0) - 6, Y(i) + 4, i, 'e sm mu'));
      return s + f(X, Y) + text(ox + 100, 196, title, 'c sm mo') + text(ox + 100, 212, body, 'c sm mu'); };
    const r = (X, Y, x1, y1, x2, y2, cls = 'fA') => rect(X(x1), Y(y2), X(x2) - X(x1), Y(y1) - Y(y2), cls);
    return svg(745, 220,
      pane(0, '8) x>2 and x<6 and y=2', 'úsečka bez krajních bodů', (X, Y) => line(X(2), Y(2), X(6), Y(2), 'lA') + circ(X(2), Y(2), 3.5, 'b') + circ(X(6), Y(2), 3.5, 'b'))
      + pane(185, '11) x=4 xor y=5', 'kříž bez průsečíku', (X, Y) => line(X(4), Y(0), X(4), Y(8.3), 'lA') + line(X(0), Y(5), X(8.3), Y(5), 'lA') + circ(X(4), Y(5), 4, 'b'))
      + pane(370, '13) trojúhelník', 'y<−2x+10 and y>4 and x>1', (X, Y) => poly(`${X(1)},${Y(4)} ${X(3)},${Y(4)} ${X(1)},${Y(8)}`, 'fA') + text(X(3) + 4, Y(4) - 4, '(3,4)', 'sm') + text(X(1) + 6, Y(8) + 4, '(1,8)', 'sm'))
      + pane(555, '14) obdélník xor obdélník', 'rámeček s otvorem', (X, Y) => r(X, Y, 2, 1, 7, 6) + r(X, Y, 4, 2, 6, 5, 'b')));
  };

  // ===== P5: funkce =====
  const dovolena = () => {
    const n = (x, y, s, k, cls = 'b') => box(x - 54, y, 108, 30, cls, s) + text(x + 57, y + 12, k, 'sm tA bd');
    const e = (x1, y1, x2, y2) => line(x1, y1 + 30, x2, y2, 'ln', 'end');
    return svg(740, 250,
      e(370, 10, 160, 80) + e(370, 10, 400, 80) + e(370, 10, 620, 80) + e(160, 80, 65, 160) + e(160, 80, 185, 160) + e(160, 80, 305, 160) + e(400, 80, 425, 160) + e(400, 80, 545, 160) + e(620, 80, 665, 160)
      + e(305, 160, 305, 210) + e(65, 160, 65, 210) + e(185, 160, 185, 210)
      + n(370, 10, 'Dovolená', '1', 'fA') + n(160, 80, 'Kam', '2', 'fD') + n(400, 80, 'Jak', '3', 'fD') + n(620, 80, 'Odjezd', '4', 'fD')
      + n(65, 160, 'Termín', '5') + n(185, 160, 'Destinace', '6') + n(305, 160, 'Platba', '7') + n(425, 160, 'Způsob', '8') + n(545, 160, 'Platba', '9') + n(665, 160, '…', '10')
      + n(65, 210, 'Výběr termínu', '') + n(185, 210, 'Výběr', '') + n(305, 210, 'Banka, Úhrada', ''));
  };
  const zasobnik = () => {
    const fr = (x, y, w, s, cls) => box(x, y, w, 30, cls, s);
    const col = (x, t, items) => text(x + 80, 20, t, 'c bd') + items.map((s, i) => fr(x, 186 - i * 34, 160, s, i === items.length - 1 ? 'fW' : 'b')).join('') + line(x - 6, 222, x + 166, 222, 'ln');
    return svg(740, 260,
      col(10, '① piš FA(3)', ['hlavní program, ř. 1', 'FA(3): výsledek 6']) + text(90, 244, 'vrátí 6 → vypíše 6', 'c sm tA')
      + col(200, '② piš FA(FB(3))', ['hlavní program, ř. 2', 'FB(3): 3 < 4', 'FA(1): výsledek 1']) + text(280, 244, 'FA(1) vrátí 1 → FB vrátí 1', 'c sm tA')
      + col(390, 'pak vnější FA', ['hlavní program, ř. 2', 'FA(1): výsledek 1']) + text(470, 244, 'vrátí 1 → vypíše 1', 'c sm tA')
      + text(570, 70, 'zásobník volání:', 'sm bd') + text(570, 90, 'nahoře je funkce,', 'sm') + text(570, 106, 'která právě běží', 'sm') + text(570, 130, 'po „vrať“ se rámec', 'sm') + text(570, 146, 'odebere a pokračuje', 'sm') + text(570, 162, 'se v místě volání', 'sm') + text(570, 196, 'výstup: 6, 1', 'bd tA'));
  };

  // ===== Snap! =====
  const snapOkno = () => svg(740, 250,
    rect(10, 10, 720, 26, 'b') + text(370, 28, 'Tool Bar – menu, nastavení, Start / Pauza / Stop', 'c sm')
    + rect(10, 40, 160, 200, 'fW') + text(90, 130, 'Palette', 'c bd') + text(90, 148, 'bloky podle kategorií', 'c sm')
    + rect(175, 40, 290, 200, 'fD') + text(320, 130, 'Scripting Area', 'c bd') + text(320, 148, 'plocha se skripty (skládání bloků)', 'c sm')
    + rect(470, 40, 260, 120, 'fA') + text(600, 95, 'Scéna (Stage)', 'c bd') + text(600, 113, 'zde se objekty pohybují a kreslí', 'c sm')
    + rect(470, 165, 260, 75, 'b') + text(600, 198, 'Sprite Corral', 'c bd') + text(600, 216, 'ohrada s objekty (skřítky) a scénou', 'c sm'));
  const typyBloku = () => svg(740, 120,
    path('M20,30 h20 l6,6 h20 l6,-6 h110 v36 h-110 l-6,6 h-20 l-6,-6 h-20 z', 'fW') + text(110, 54, 'příkaz', 'c bd') + text(110, 100, 'nevrací hodnotu, něco vykoná', 'c sm')
    + `<rect x="270" y="30" width="180" height="36" rx="18" class="fD"/>` + text(360, 54, 'funkce', 'c bd') + text(360, 100, 'vrací hodnotu (např. odmocnina)', 'c sm')
    + poly('520,48 538,30 682,30 700,48 682,66 538,66', 'fA') + text(610, 54, 'podmínka', 'c bd') + text(610, 100, 'vrací pravda / nepravda', 'c sm'));
  // želví grafika: čtverec, šestiúhelník, čtyři čtverce
  const zelva = () => {
    const turtle = (x, y) => path(`M${x},${y} l-12,-6 l4,6 l-4,6 z`, 'fA');
    const sq = (x, y, a) => rect(x, y, a, a, 'pd');
    let hex = '';
    for (let i = 0; i < 6; i++) { const a1 = -i * Math.PI / 3, a2 = -(i + 1) * Math.PI / 3, cx = 370, cy = 90, r = 60; hex += line(cx + r * Math.cos(a1 + Math.PI / 6), cy + r * Math.sin(a1 + Math.PI / 6), cx + r * Math.cos(a2 + Math.PI / 6), cy + r * Math.sin(a2 + Math.PI / 6), 'lA'); }
    return svg(740, 215,
      rect(60, 40, 100, 100, 'fD') + turtle(60, 140) + text(110, 168, 'opakuj 4×:', 'c mo sm') + text(110, 184, 'posuň 100, otoč 90°', 'c mo sm')
      + hex + text(370, 168, 'opakuj 6×:', 'c mo sm') + text(370, 184, 'posuň 60, otoč 60°', 'c mo sm')
      + sq(560, 30, 60) + sq(620, 30, 60) + sq(560, 90, 60) + sq(620, 90, 60) + turtle(620, 90) + text(620, 168, 'opakuj 4×: [opakuj 4×:', 'c mo sm') + text(620, 184, 'posuň 60, otoč 90°], otoč 90°', 'c mo sm')
      + text(370, 208, 'součet otočení za celý obrazec = 360°', 'c sm mu'));
  };

  return { ns, nsPart, prog, run, P, vlastnosti, kameny, symboly, minTri, prumer, maxDopln, prechody, problem, pravidla, venn, xorSifra, zkraceni, osa, rovina, dovolena, zasobnik, snapOkno, typyBloku, zelva };
})();
