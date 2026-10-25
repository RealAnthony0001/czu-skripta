// Widgety UPP (blok { t: 'widget', name }) – algoritmy, datové struktury a OS: banker, rekurze, seznam, zasobnik, fronta, hash, pipeline, procesy, minmax.
(() => {
  const { svg, text, rect, line, box } = DG;
  const vec = a => `[${a.join(' ')}]`, le = (a, b) => a.every((x, i) => x <= b[i]);
  const ints = s => s.split(/[\s,;]+/).filter(Boolean).map(Number);

  // ---------- algoritmus bankéře ----------
  const BK = {
    lec: { l: 'z přednášky: volné [3 3 2]', free: [3, 3, 2] },
    low: { l: 'málo zdrojů: volné [1 2 2]', free: [1, 2, 2] },
    none: { l: 'skoro nic: volné [0 1 0]', free: [0, 1, 0] }
  };
  const PR = [['P1', [7, 5, 3], [0, 1, 0]], ['P2', [3, 2, 2], [2, 0, 0]], ['P3', [8, 1, 2], [3, 1, 2]]];
  WG.reg('banker', root => WG.app(root, {
    state: { k: 'lec' },
    top: ui => `${WG.lbl('Volné zdroje [A B C]:')}${Object.entries(BK).map(([k, b]) => WG.btn('k', b.l, ui.k === k, `data-k="${k}"`)).join('')}`,
    act: (ui, a, d) => { if (a === 'k') { ui.k = d.k; ui.step = 0; } },
    steps: ui => {
      let free = [...BK[ui.k].free]; const need = Object.fromEntries(PR.map(([p, mx, al]) => [p, mx.map((x, i) => x - al[i])])), done = [];
      const table = (cur, ok) => WG.tbl(['proces', 'MAX', 'ALOK', 'POTŘ = MAX − ALOK', 'stav'], PR.map(([p, mx, al]) => ({ cls: p === cur ? (ok ? 'ok' : 'no') : done.includes(p) ? 'add' : '', cells: [p, vec(mx), vec(al), vec(need[p]), done.includes(p) ? 'dokončil' : p === cur ? (ok ? '← může dokončit' : '') : ''] }))) + `<div class="qw-kv"><span>volné</span><span class="mo">${vec(free)}</span></div>`;
      const S = [{ title: 'Zadání: tři procesy a tři typy zdrojů', what: `MAX = nejvíc, co proces může požadovat; ALOK = už přiděleno; POTŘ = MAX − ALOK. OS má volné zdroje ${vec(free)}.`, why: 'Před přidělením zdroje se OS ujistí, že po přidělení bude systém v bezpečném stavu.', change: 'Hledáme pořadí dokončení všech procesů.', view: table(null) }];
      while (done.length < PR.length) {
        const cand = PR.find(([p]) => !done.includes(p) && le(need[p], free));
        if (!cand) {
          S.push({ title: '✗ Nebezpečný stav', what: `Žádný z procesů ${PR.filter(([p]) => !done.includes(p)).map(x => x[0]).join(', ')} nemá POTŘ ≤ volné ${vec(free)}.`, why: 'Nikdo nemůže dokončit práci, proto OS zdroj nepřidělí a proces čeká (hrozí uváznutí).', change: 'Stav není bezpečný.', view: table(null) + WG.note('Nebezpečný stav – neexistuje posloupnost dokončení všech procesů.', 'bad') });
          return S;
        }
        const [p, , al] = cand, before = [...free];
        free = free.map((x, i) => x + al[i]); done.push(p);
        S.push({ title: `${p} může dokončit: POTŘ ${vec(need[p])} ≤ volné ${vec(before)}`, what: `Proces ${p} dostane vše, co potřebuje, dokončí práci a vrátí svůj ALOK ${vec(al)}.`, why: 'Bereme libovolný proces, jehož zbývající požadavek (POTŘ, ne MAX) se vejde do volných zdrojů.', change: `Volné ${vec(before)} + ${vec(al)} = <b>${vec(free)}</b>`, view: table(p, true) });
      }
      S.push({ title: `✓ Bezpečný stav, pořadí ${done.join(' → ')}`, what: `Všechny procesy se dají dokončit v pořadí ${done.join(' → ')}.`, why: 'Existuje alespoň jedna bezpečná posloupnost, takže OS zdroj přidělit může.', change: `Kontrola: na konci jsou volné zdroje rovny součtu všeho: ${vec(free)}.`, view: table(null) + WG.note('Bezpečný stav.', 'ok') });
      return S;
    }
  }));

  // ---------- rekurze: faktoriál ----------
  WG.reg('rekurze', root => WG.app(root, {
    state: { n: 4 },
    top: ui => `${WG.lbl('R_Faktorial(N), N =')}${WG.sel('n', [0, 1, 2, 3, 4, 5, 6].map(i => [i, i]), ui.n)}`,
    input: ui => { ui.n = +ui.n; ui.step = 0; },
    steps: ui => {
      const n = +ui.n, fact = k => (k <= 1 ? 1 : k * fact(k - 1)), frames = (depth, ret) => {
        const f = []; for (let i = 0; i <= depth; i++) { const k = n - i; f.push(`<div class="qw-note ${i === depth ? (ret !== undefined ? 'ok' : 'warn') : ''}" style="margin:3px 0"><b class="mo">R_Faktorial(${k})</b> ${i === depth ? (ret !== undefined ? `→ vrací <b>${ret}</b>` : k === 0 ? '→ N = 0, konec rekurze, vrací 1' : `→ volá ${k} · R_Faktorial(${k - 1})`) : `<span class="mu">čeká na R_Faktorial(${k - 1})</span>`}</div>`); }
        return `<div class="mu" style="font-size:12px">zásobník volání (nahoře nejstarší volání):</div>${f.join('')}`;
      };
      const S = [{ title: `Zavoláme R_Faktorial(${n})`, what: 'Funkce vrací 1, je-li N = 0; jinak vrací N · R_Faktorial(N − 1), tedy volá sama sebe s menším argumentem.', why: 'Každé volání čeká na výsledek následujícího, proto zásobník volání roste, dokud se nedojde k N = 0.', change: 'Zásobník: 1 volání.', view: frames(0) }];
      for (let i = 1; i <= n; i++) S.push({ title: `Volání ${i + 1}: R_Faktorial(${n - i})`, what: `Předchozí volání se pozastaví a vznikne nový rámec pro N = ${n - i}.`, why: 'Násobení N · … nelze dokončit, dokud neznáme R_Faktorial(N − 1).', change: `Zásobník: ${i + 1} volání.`, view: frames(i) });
      for (let i = n; i >= 0; i--) { const k = n - i, r = fact(k); S.push({ title: `Návrat: R_Faktorial(${k}) = ${r}`, what: k === 0 ? 'Rekurze skončila, nejhlubší volání vrací 1.' : `Dostali jsme hodnotu od hlubšího volání a spočteme ${k} · ${fact(k - 1)} = <b>${r}</b>.`, why: 'Násobí se až při návratu zpět – proto se hodnoty vyhodnocují od nejhlubšího volání nahoru.', change: `Výsledek: ${r}`, view: frames(i, r) }); }
      return S;
    }
  }));

  // ---------- jednosměrný lineární seznam ----------
  const LST = {
    first: ['Novy->Dalsi = Seznam;', 'Seznam = Novy;'], after: ['Novy->Dalsi = Aktual->Dalsi;', 'Aktual->Dalsi = Novy;'],
    delfirst: ['Vyradit = Seznam;', 'Seznam = Seznam->Dalsi;', 'delete Vyradit;'], delcur: ['Pom = Seznam; dokud Pom->Dalsi != Aktual: Pom = Pom->Dalsi;', 'Pom->Dalsi = Aktual->Dalsi;', 'Pom = Aktual; Aktual = Aktual->Dalsi; uvolni Pom']
  };
  WG.reg('seznam', root => WG.app(root, {
    state: { l: ['A', 'B', 'C'], cur: 1, nxt: 'D', msg: 'Seznam má 3 prvky; Aktual ukazuje na druhý.', code: [] },
    top: ui => `${WG.btn('first', 'vložit na začátek')}${WG.btn('after', 'vložit za aktuální')}${WG.btn('delfirst', 'vyřadit na začátku')}${WG.btn('delcur', 'vyřadit aktuální')}${WG.btn('move', 'Aktual → další')}${WG.btn('reset', 'obnovit')}`,
    act: (ui, a) => {
      const nv = ui.nxt;
      if (a === 'reset') { Object.assign(ui, { l: ['A', 'B', 'C'], cur: 1, nxt: 'D', msg: 'Seznam má 3 prvky; Aktual ukazuje na druhý.', code: [] }); return; }
      if (a === 'move') { if (ui.cur < ui.l.length - 1) ui.cur++; else ui.msg = 'Aktual už ukazuje na poslední prvek (jeho Dalsi je NULL).'; ui.code = []; return; }
      if (a === 'first' || a === 'after') {
        if (ui.l.length >= 7) { ui.msg = 'Pro přehlednost nejvýše 7 prvků.'; ui.code = []; return; }
        if (a === 'first') { ui.l.unshift(nv); ui.cur++; } else ui.l.splice(ui.cur + 1, 0, nv);
        ui.nxt = String.fromCharCode(nv.charCodeAt(0) + 1); ui.code = ['Novy = new Typ_prvku; Novy->Info = ' + nv + ';', ...LST[a]];
        ui.msg = a === 'first' ? `Nový prvek ${nv} je první; Seznam ukazuje na něj.` : `Nový prvek ${nv} je vložen za aktuální. Pořadí kroků je důležité: nejdřív Novy->Dalsi = Aktual->Dalsi, teprve potom Aktual->Dalsi = Novy – jinak by se zbytek seznamu ztratil.`;
      }
      if (a === 'delfirst' || a === 'delcur') {
        if (ui.l.length <= 1) { ui.msg = 'Seznam by byl prázdný (Seznam = NULL); nech aspoň jeden prvek.'; ui.code = []; return; }
        if (a === 'delfirst') { const x = ui.l.shift(); ui.cur = Math.max(0, ui.cur - 1); ui.msg = `Prvek ${x} je vyřazen; Seznam ukazuje na jeho následníka.`; }
        else if (ui.cur === 0) { const x = ui.l.shift(); ui.msg = `Aktuální byl první prvek, použije se vyřazení na začátku. Prvek ${x} je pryč.`; a = 'delfirst'; }
        else { const x = ui.l.splice(ui.cur, 1)[0]; ui.cur = Math.min(ui.cur, ui.l.length - 1); ui.msg = `Aktuální prvek ${x} je vyřazen. Jednosměrný seznam nemá odkaz zpět, takže se předchůdce hledá od začátku (Seznam).`; }
        ui.code = LST[a];
      }
    },
    view: ui => {
      const w = 82, o = ui.l.map((v, i) => box(30 + i * w, 70, 54, 34, i === ui.cur ? 'fA' : 'b', v) + (i < ui.l.length - 1 ? line(84 + i * w, 87, 30 + (i + 1) * w, 87, 'lD', 'end') : line(84 + i * w, 87, 84 + i * w + 24, 87, 'lD', 'end') + text(84 + i * w + 28, 91, 'NULL', 'sm mu'))).join('')
        + line(57, 24, 57, 68, 'lW', 'end') + text(57, 18, 'Seznam', 'c sm bd tW') + line(57 + ui.cur * w, 150, 57 + ui.cur * w, 106, 'lA', 'end') + text(57 + ui.cur * w, 166, 'Aktual', 'c sm bd tA');
      return WG.svg(svg(620, 180, o, 620)) + WG.note(ui.msg) + (ui.code.length ? `<div class="qw-kv" style="grid-template-columns:1fr"><span class="mo" style="color:var(--text)">${ui.code.map((c, i) => `${i + 1}. ${c.replace(/->/g, '→')}`).join('<br>')}</span></div>` : '') + `<p class="mu" style="font-size:13px">Další vkládaný prvek: ${ui.nxt}</p>`;
    }
  }));

  // ---------- zásobník a cyklická fronta ----------
  WG.reg('zasobnik', root => WG.app(root, {
    state: { z: [], n: 5, msg: 'Prázdný zásobník: SP = 1.' },
    top: () => `${WG.btn('push', 'PUSH')}${WG.btn('pop', 'POP')}${WG.btn('clr', 'vyprázdnit')}`,
    act: (ui, a) => {
      if (a === 'clr') { ui.z = []; ui.n = 5; ui.msg = 'Prázdný zásobník: SP = 1.'; return; }
      if (a === 'push') { if (ui.z.length >= 6) { ui.msg = 'Zásobník je plný (MAX = 6).'; return; } ui.z.push(ui.n); ui.msg = `PUSH ${ui.n}: vloží se na pozici SP = ${ui.z.length}, pak SP = ${ui.z.length + 1}.`; ui.n += 3; }
      if (a === 'pop') { if (!ui.z.length) { ui.msg = 'POP z prázdného zásobníku nejde (SP = 1).'; return; } const x = ui.z.pop(); ui.msg = `POP: SP se sníží na ${ui.z.length + 1}, vyjmuta položka z pozice ${ui.z.length + 1} → <b>${x}</b>. Vybíráme v opačném pořadí, než jsme vkládali (LIFO).`; }
    },
    view: ui => {
      const o = [...Array(6)].map((_, i) => (ui.z[i] !== undefined ? box(120, 190 - i * 34, 70, 32, 'fE', ui.z[i]) : rect(120, 190 - i * 34, 70, 32, 'pd')) + text(110, 211 - i * 34, i + 1, 'e sm mu mo')).join('') + line(250, 190 - ui.z.length * 34 + 16, 196, 190 - ui.z.length * 34 + 16, 'lW', 'end') + text(256, 190 - ui.z.length * 34 + 20, `SP = ${ui.z.length + 1}`, 'sm bd tW');
      return WG.svg(svg(420, 240, o, 420)) + WG.note(ui.msg);
    }
  }));
  WG.reg('fronta', root => WG.app(root, {
    state: { q: [], zf: 1, kf: 0, df: 0, c: 0, msg: 'Prázdná fronta: ZF = 1, KF = 0, DF = 0.' },
    top: () => `${WG.btn('put', 'vložit (KF)')}${WG.btn('get', 'vyjmout (ZF)')}${WG.btn('clr', 'vyprázdnit')}`,
    act: (ui, a) => {
      const max = 5;
      if (a === 'clr') { Object.assign(ui, { q: [], zf: 1, kf: 0, df: 0, c: 0, msg: 'Prázdná fronta: ZF = 1, KF = 0, DF = 0.' }); return; }
      if (a === 'put') { if (ui.df === max) { ui.msg = 'Fronta je plná (DF = max).'; return; } ui.kf = (ui.kf + 1) % max; ui.q[ui.kf] = String.fromCharCode(65 + ui.c++ % 26); ui.df++; ui.msg = `Vloženo ${ui.q[ui.kf]}: KF = (KF + 1) % ${max} = ${ui.kf}${ui.kf === 0 ? ' (zalomení na začátek pole)' : ''}.`; }
      if (a === 'get') { if (!ui.df) { ui.msg = 'Fronta je prázdná.'; return; } const x = ui.q[ui.zf]; ui.q[ui.zf] = undefined; ui.zf = (ui.zf + 1) % max; ui.df--; ui.msg = `Vyjmuto ${x} (první vložené, FIFO): ZF = (ZF + 1) % ${max} = ${ui.zf}.`; }
    },
    view: ui => {
      const max = 5, X = 60, o = [...Array(max)].map((_, i) => text(X + i * 70 + 35, 16, i, 'c sm mu mo') + (ui.q[i] !== undefined ? box(X + i * 70, 24, 66, 40, 'fE', ui.q[i]) : rect(X + i * 70, 24, 66, 40, 'pd'))).join('')
        + line(X + ui.zf * 70 + 33, 100, X + ui.zf * 70 + 33, 68, 'lD', 'end') + text(X + ui.zf * 70 + 33, 116, `ZF = ${ui.zf}`, 'c sm bd tD') + line(X + ui.kf * 70 + 33, 138, X + ui.kf * 70 + 33, 68, 'lW', 'end') + text(X + ui.kf * 70 + 33, 154, `KF = ${ui.kf}`, 'c sm bd tW');
      return WG.svg(svg(420, 165, o, 440)) + `<div class="qw-kv"><span>DF = (KF − ZF + max + 1) % max</span><span class="mo">(${ui.kf} − ${ui.zf} + 6) % 5 = ${(ui.kf - ui.zf + 6) % 5}</span><span>počet prvků DF (proměnná)</span><span class="mo">${ui.df}</span></div>` + WG.note(ui.msg)
        + (ui.df === max ? WG.note('Samotným vzorcem se plná fronta (max prvků) nedá odlišit od prázdné – proto se délka drží i v samostatné proměnné DF.', 'warn') : '');
    }
  }));

  // ---------- hash tabulka ----------
  WG.reg('hash', root => WG.app(root, {
    state: { k: 'NOVAK, SVOBODA, KRAL, HORAK, BLAHA, NEMEC', m: 7 },
    top: ui => `${WG.lbl('Klíče:')}${WG.txt('k', ui.k, 'příjmení velkými písmeny', 36)}${WG.lbl('řádků tabulky:')}${WG.sel('m', [5, 7, 11].map(v => [v, v]), ui.m)}`,
    input: ui => { ui.m = +ui.m; },
    view: ui => {
      const m = +ui.m, keys = ui.k.toUpperCase().split(/[\s,;]+/).filter(Boolean).slice(0, 10), bad = keys.find(k => /[^A-Z]/.test(k));
      if (bad) return WG.note(`Klíč „${bad}“ smí obsahovat jen písmena A–Z bez diakritiky.`, 'bad');
      const h = k => [...k].reduce((a, c) => a + c.charCodeAt(0) - 64, 0) % m, sum = k => [...k].reduce((a, c) => a + c.charCodeAt(0) - 64, 0);
      const rows = [...Array(m)].map((_, t) => ({ t, own: keys.filter(k => h(k) === t) })), col = rows.filter(r => r.own.length > 1);
      return WG.tbl(['klíč k', 'součet pořadí písmen', `h(k) = součet mod ${m}`], keys.map(k => ({ cls: col.some(r => r.own.includes(k)) ? 'no' : '', cells: [k, sum(k), h(k)] })))
        + WG.tbl(['řádek', 'uložený klíč'], rows.map(r => ({ cls: r.own.length > 1 ? 'no' : r.own.length ? 'add' : '', cells: [r.t, r.own.length ? r.own.join(', ') + (r.own.length > 1 ? ' ⚠ kolize' : '') : '<span class="mu">volno</span>'] })))
        + WG.note(col.length ? `Kolize: ${col.map(r => r.own.join(' a ') + ' → řádek ' + r.t).join('; ')}. Různé klíče se stejným h(k) jsou synonyma (synonymické položky) a musí se nějak vyřešit.` : 'Bez kolize – každý klíč má svůj řádek. Zkus přidat klíče nebo zmenšit tabulku.', col.length ? 'warn' : 'ok');
    }
  }));

  // ---------- proudové zpracování instrukcí ----------
  const PH = [['výběr', 'fA'], ['dekód. 1', 'fE'], ['dekód. 2', 'fW'], ['provedení', 'fD'], ['uložení', 'b']];
  const PM = { k: { l: 'klasické', t: 30, s: i => 5 * i, f: '6 · 5 = 30 cyklů' }, p: { l: 'proudové (pipeline)', t: 10, s: i => i, f: '6 + 4 = 10 cyklů' }, s: { l: 'superskalární (2 najednou)', t: 7, s: i => i >> 1, f: '3 + 4 = 7 cyklů' } };
  WG.reg('pipeline', root => WG.app(root, {
    state: { m: 'p', t: 5 },
    top: ui => `${WG.lbl('Zpracování:')}${Object.entries(PM).map(([k, p]) => WG.btn('m', p.l, ui.m === k, `data-m="${k}"`)).join('')}<div class="qw-row" style="width:100%">${WG.lbl('cyklus:')}${WG.rng('t', Math.min(ui.t, PM[ui.m].t), 0, PM[ui.m].t)}<b class="mo">${Math.min(ui.t, PM[ui.m].t)} / ${PM[ui.m].t}</b></div>`,
    act: (ui, a, d) => { if (a === 'm') { ui.m = d.m; ui.t = PM[d.m].t; } },
    view: ui => {
      const P = PM[ui.m], t = Math.min(ui.t, P.t), cw = 22, x0 = 40, rh = 22;
      let o = PH.map(([n, c], i) => rect(40 + i * 120, 6, 14, 14, c) + text(60 + i * 120, 18, n, 'sm')).join('');
      for (let c = 0; c < P.t; c++) o += text(x0 + c * cw + cw / 2, 44, c + 1, 'c sm mu mo');
      for (let i = 0; i < 6; i++) { o += text(x0 - 6, 62 + i * (rh + 2) + 15, 'i' + (i + 1), 'e sm mu'); PH.forEach(([n, c], p) => { const cyc = P.s(i) + p; if (cyc < t) o += rect(x0 + cyc * cw, 52 + i * (rh + 2), cw - 1, rh, c); }); }
      o += line(x0 + t * cw, 46, x0 + t * cw, 52 + 6 * (rh + 2), 'lA');
      return WG.svg(svg(720, 215, o, 760)) + WG.note(`<b>${P.l}</b>: ${P.f}. ${ui.m === 'k' ? 'Další instrukce začne až po skončení předchozí (5n cyklů).' : ui.m === 'p' ? 'Každý cyklus se začne nová instrukce, fáze různých instrukcí se překrývají (n + 4 cyklů).' : 'Dvě instrukce se zpracovávají současně a v každé fázi se překrývají další (n/2 + 4 cyklů).'}`);
    }
  }));

  // ---------- stavy procesu ----------
  const ST = { novy: ['nový', 10, 120, 100, 44, 'b', ''], pripraven: ['připraven', 190, 90, 130, 44, 'fW', 'čeká na procesor'], bezi: ['probíhající', 400, 90, 130, 44, 'fA', 'má procesor'], konec: ['ukončen', 600, 90, 110, 44, 'b', ''], ceka: ['čekající', 190, 200, 130, 50, 'fD', 'na zdroj / událost'], zablok: ['zablokován', 400, 200, 130, 50, 'fE', 'pozastaven (zmrazen)'] };
  const TR = { novy: [['pripraven', 'zařadit ke zpracování']], pripraven: [['bezi', 'přidělit procesor']], bezi: [['pripraven', 'odebrat procesor'], ['ceka', 'čeká na zdroj / událost'], ['zablok', 'pozastavit (zablokovat)'], ['konec', 'dokončit']], ceka: [['pripraven', 'zdroj uvolněn']], zablok: [['pripraven', 'probudit']], konec: [] };
  const TL = { 'novy>pripraven': [110, 142, 190, 120], 'pripraven>bezi': [320, 104, 400, 104], 'bezi>pripraven': [400, 122, 320, 122], 'bezi>konec': [530, 112, 600, 112], 'bezi>ceka': [430, 134, 320, 214], 'ceka>pripraven': [250, 200, 250, 134], 'bezi>zablok': [500, 134, 500, 200], 'zablok>pripraven': [400, 236, 300, 134] };
  WG.reg('procesy', root => WG.app(root, {
    state: { s: 'novy', log: ['nový'] },
    top: ui => `${WG.lbl('Co se stane:')}${TR[ui.s].map(([t, l]) => WG.btn('go', l, false, `data-t="${t}"`)).join('') || '<span class="mu">proces skončil</span>'}${WG.btn('reset', 'od začátku')}`,
    act: (ui, a, d) => { if (a === 'go') { ui.s = d.t; ui.log.push(ST[d.t][0]); } if (a === 'reset') { ui.s = 'novy'; ui.log = ['nový']; } },
    view: ui => {
      const o = Object.entries(TL).map(([k, [x1, y1, x2, y2]]) => line(x1, y1, x2, y2, k.startsWith(ui.s + '>') ? 'lA' : 'ln', 'end')).join('')
        + Object.entries(ST).map(([k, [n, x, y, w, h, cls, sb]]) => box(x, y, w, h, k === ui.s ? 'fA' : cls, n, sb)).join('');
      return WG.svg(svg(720, 290, rect(160, 40, 400, 230, 'pd') + text(172, 60, 'spuštěné uživatelské procesy', 'sm mu') + o, 720)) + `<div class="qw-kv"><span>dosavadní cesta</span><span>${ui.log.join(' → ')}</span></div>` + WG.note(ui.s === 'konec' ? 'Proces ukončil činnost a bude uvolněn z paměti.' : 'Červeně jsou přechody, které z aktuálního stavu vedou dál; volíš je tlačítky nahoře. Návrat z čekání i zablokování vede vždy přes stav „připraven“.');
    }
  }));

  // ---------- MIN a MAX ----------
  WG.reg('minmax', root => WG.app(root, {
    state: { v: '4, 9, -2, 7, 0', kb: true },
    top: ui => `${WG.lbl('Čísla:')}${WG.txt('v', ui.v, '', 26)}${WG.btn('src', 'klávesnice (0 = konec)', ui.kb, 'data-k="1"')}${WG.btn('src', 'pole (všechny prvky)', !ui.kb, 'data-k="0"')}`,
    act: (ui, a, d) => { if (a === 'src') { ui.kb = d.k === '1'; ui.step = 0; } },
    input: ui => { ui.step = 0; },
    steps: ui => {
      let v = ints(ui.v); if (ui.kb) { const z = v.indexOf(0); if (z >= 0) v = v.slice(0, z); }
      if (!v.length || v.some(isNaN) || v.length > 12) return [{ title: '', view: WG.note('Zadej 1 až 12 celých čísel (u klávesnice první nenulové; 0 ukončí zadávání).', 'bad') }];
      let mx = v[0], mn = v[0]; const tab = (i, mxn, mnn) => WG.tbl(['prvek', ...v.map((x, k) => (k === i ? `<b>${x}</b>` : x))], [['MAX', ...v.map((_, k) => (k < i ? '' : k === i ? mxn : ''))], ['MIN', ...v.map((_, k) => (k === i ? mnn : ''))]]);
      const S = [{ title: `Příprava: MAX = MIN = první prvek (${v[0]})`, what: ui.kb ? `Přečteme první číslo X = ${v[0]} z klávesnice a nastavíme MAX := X; MIN := X.` : `I := 1; MAX := P[1] = ${v[0]}; MIN := P[1] = ${v[0]}.`, why: 'Počáteční MAX a MIN musí být skutečný prvek dat, ne pevná konstanta – jinak by nefungovaly pro libovolná čísla (třeba samá záporná).', change: `MAX = ${mx}, MIN = ${mn}`, view: `<div class="qw-big">MAX = ${mx} · MIN = ${mn}</div>` + `<div class="qw-row">${v.map((x, k) => WG.c(x, k === 0 ? 'd1' : 'dd')).join('')}</div>` }];
      for (let i = 1; i < v.length; i++) {
        const x = v[i], a = x > mx, b = x < mn; if (a) mx = x; if (b) mn = x;
        S.push({ title: `Prvek ${x}`, what: `Selekce 1: ${x} > MAX? ${a ? 'ano → MAX := ' + x : 'ne'}. Selekce 2: ${x} < MIN? ${b ? 'ano → MIN := ' + x : 'ne'}. Pak posun na další prvek.`, why: 'Tělo cyklu jsou dvě nezávislé selekce a posun; algoritmus je stejný pro pole i pro soubor.', change: `MAX = ${mx}, MIN = ${mn}`, view: `<div class="qw-big">MAX = ${mx} · MIN = ${mn}</div><div class="qw-row">${v.map((y, k) => WG.c(y, k === i ? 'df' : k < i ? 'd1' : 'dd')).join('')}</div>` });
      }
      S.push({ title: 'Konec cyklu', what: ui.kb ? 'Přečtená nula ukončí cyklus a do výsledku se nezapočítá.' : 'Prošli jsme všechny prvky pole (I > 100 v původním zadání).', why: 'Datová struktura určuje strukturu programu: pole → cyklus s pevným počtem opakování, soubor → cyklus do EOF.', change: `Výstup: <b>MAX = ${mx}, MIN = ${mn}</b>`, view: `<div class="qw-big">MAX = ${mx} · MIN = ${mn}</div>` });
      return S;
    }
  }));
})();
