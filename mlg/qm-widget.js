// Interaktivní průvodce Quine–McCluskeyho algoritmem (blok { t: 'widget', name: 'qm' }, viz app.js)
// simulate() je čistá funkce: vrátí seznam kroků (každý se snímkem stavu); render() jen vykresluje snímek a zvýraznění.
(() => {
  const NM = 'ABCDE', ROM = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
  const PHASES = ['Zadání', 'Kódy', 'Slučování', 'Prvočleny', 'Pokrytí', 'Výsledek'];
  const PRESETS = [
    { id: 'p1', label: 'Příklad 1 · jedno řešení', nv: 3, ones: [1, 2, 3, 5, 7] },
    { id: 'p2', label: 'Příklad 2 · dvě řešení', nv: 3, ones: [0, 2, 3, 4, 5, 7] },
    { id: 'p3', label: 'Příklad 3 · pět proměnných', nv: 5, ones: [1, 3, 17, 19, 21, 28, 29] }
  ];
  const n1 = c => [...c].filter(x => x === '1').length;
  const nlit = c => [...c].filter(x => x !== '-').length;
  const termOf = c => { const l = [...c].map((x, i) => (x === '-' ? '' : NM[i] + (x === '0' ? '′' : ''))).filter(Boolean); return l.length ? l.join('∧') : '1'; };
  const chs = (c, diff = -1) => [...c].map((x, i) => `<i class="qw-c ${x === '-' ? 'dd' : 'd' + x}${i === diff ? ' df' : ''}">${x === '-' ? '−' : x}</i>`).join('');
  const hdr = nv => [...Array(nv)].map((_, i) => `<i class="qw-c hd">${NM[i]}</i>`).join('');
  const lst = a => a.join(', ');
  const diffPos = (a, b) => { const d = []; for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) d.push(i); return d.length === 1 && a[d[0]] !== '-' && b[d[0]] !== '-' ? d[0] : -1; };
  const matches = (code, v, nv) => [...code].every((c, i) => c === '-' || c === v.toString(2).padStart(nv, '0')[i]);

  // nejmenší pokrytí zbylých sloupců podle počtu literálů; všechna stejně dobrá řešení
  function minCovers(primes, E, uncovered) {
    if (!uncovered.length) return { alts: [[]], exact: true };
    const cand = primes.map((_, i) => i).filter(i => !E.includes(i) && primes[i].set.some(m => uncovered.includes(m)));
    if (cand.length > 18) { // shortcut: příliš mnoho kandidátů pro úplné prohledání – hladově, nemusí být minimální
      const left = new Set(uncovered), pick = [];
      while (left.size) { const i = cand.filter(i => primes[i].set.some(m => left.has(m))).sort((x, y) => primes[y].set.filter(m => left.has(m)).length / (primes[y].lits || 1) - primes[x].set.filter(m => left.has(m)).length / (primes[x].lits || 1))[0]; pick.push(i); primes[i].set.forEach(m => left.delete(m)); }
      return { alts: [pick], exact: false };
    }
    let best = [], bl = Infinity;
    for (let mask = 1; mask < 1 << cand.length; mask++) {
      const ch = cand.filter((_, k) => (mask >> k) & 1);
      if (!uncovered.every(m => ch.some(i => primes[i].set.includes(m)))) continue;
      const l = ch.reduce((s, i) => s + primes[i].lits, 0);
      if (l < bl) { bl = l; best = [ch]; } else if (l === bl) best.push(ch);
    }
    return { alts: best.slice(0, 8), exact: true };
  }

  function simulate(nv, ones) {
    const n = ones.length, steps = [], model = { levels: [], grouped: false };
    const push = s => steps.push({ ...s, snap: structuredClone(model) });
    const colName = r => (r === 0 ? 'kódy z tabulky' : `po ${r}. slučování`);
    const base = { nv, n, ones };
    if (!n) return { ...base, steps: [{ ph: 0, type: 'empty', title: 'Prázdná funkce', what: 'V tabulce není žádná jednička, formule je <b>kontradikce</b> (vždy 0). Není co minimalizovat.', why: 'Minimalizujeme disjunkci úplných konjunkcí – bez konjunkcí zbývá jen konstanta 0.', change: 'Zaškrtni v tabulce aspoň jednu jedničku.', snap: model }], primes: [], alts: [[]], exact: true };

    // --- zadání a kódy ---
    const items0 = ones.map((v, i) => ({ code: v.toString(2).padStart(nv, '0'), set: [i + 1], used: false, prime: false }));
    const terms = items0.map(x => termOf(x.code));
    push({ ph: 0, type: 'intro', title: 'Zadání: úplný disjunktivní tvar (ÚDNT)',
      what: `Každý řádek tabulky s hodnotou 1 dá jednu <b>úplnou konjunkci</b> (obsahuje všechny proměnné ${NM.slice(0, nv).split('').join(', ')}, každou přímo, nebo negovanou). Formule je jejich disjunkce – celkem <b>${n}</b> ${n === 1 ? 'člen' : n < 5 ? 'členy' : 'členů'}.`,
      why: 'Algoritmus začíná v ÚDNT, protože všechny členy jsou stejně dlouhé – dají se porovnávat pozici po pozici a hned je vidět, v čem se liší.',
      change: `Zatím se nic nemění. Formule má <b>${n * nv}</b> literálů (${n} × ${nv}) – to chceme zkrátit.` });
    model.levels[0] = { items: items0 };
    push({ ph: 1, type: 'encode', title: 'Zakódování konjunkcí',
      what: 'Každou konjunkci zapíšeme řetězcem: proměnná bez negace → <b>1</b>, negovaná proměnná → <b>0</b>. Pořadí znaků odpovídá pořadí proměnných. Duplicitní členy bychom vynechali (v tomto zadání žádný není).',
      why: 'Dvě konjunkce se liší v té proměnné, ve které se liší jejich kódy. Porovnávat krátké řetězce je mnohem snazší než porovnávat formule.',
      change: `Vznikl sloupec <b>${n}</b> kódů. Čísla vlevo jsou jen štítky konjunkcí – budeme je potřebovat u tabulky pokrytí.` });
    model.grouped = true;
    push({ ph: 1, type: 'group', title: 'Seskupení podle počtu jedniček',
      what: 'Kódy přeskupíme do skupin podle toho, kolik mají jedniček. Skupina 0 = žádná jednička, skupina 1 = jedna jednička atd.',
      why: 'Dva kódy, které se liší v <b>právě jedné</b> pozici, se liší počtem jedniček přesně o 1. Stačí tedy porovnávat <b>sousední skupiny</b> – dvojice z jiných skupin se sloučit nemohou, takže je ani nezkoušíme.',
      change: 'Kódy jsou ve stejném sloupci, jen přeuspořádané do skupin.' });

    // --- kola slučování ---
    const order = items => [...items].sort((a, b) => n1(a.code) - n1(b.code) || (a.code < b.code ? -1 : 1));
    let r = 0;
    for (;;) {
      const cur = order(model.levels[r].items), next = [];
      model.levels[r + 1] = { items: next };
      const pairs = [];
      for (const a of cur) for (const b of cur) if (n1(b.code) === n1(a.code) + 1 && diffPos(a.code, b.code) >= 0) pairs.push([a, b]);
      if (pairs.length) push({ ph: 2, type: 'roundStart', r, title: `${r + 1}. kolo slučování`,
        what: pairs.length
          ? `Ve sloupci „${colName(r)}“ hledáme dvojice ze sousedních skupin, které se liší v <b>právě jedné</b> pozici${r ? ' a mají pomlčky na stejných místech' : ''}. Nalezeno <b>${pairs.length}</b> ${pairs.length === 1 ? 'dvojice' : pairs.length < 5 ? 'dvojice' : 'dvojic'}; zpracujeme je jednu po druhé.`
          : `Ve sloupci „${colName(r)}“ hledáme dvojice ze sousedních skupin, které se liší v právě jedné pozici. <b>Žádná takováto dvojice neexistuje.</b>`,
        why: 'Taková dvojice jsou dvě konjunkce lišící se jedinou proměnnou, kterou lze vypustit. Dvojice lišící se ve dvou a více pozicích sloučit nejde – výsledek by už nebyl ekvivalentní původní formuli.',
        change: 'Zatím beze změny.', hlLevel: r });
      for (const [a, b] of pairs) {
        const pos = diffPos(a.code, b.code), code = a.code.slice(0, pos) + '-' + a.code.slice(pos + 1), V = NM[pos];
        const ra = model.levels[r].items.find(x => x.code === a.code), rb = model.levels[r].items.find(x => x.code === b.code);
        ra.used = rb.used = true;
        let res = next.find(x => x.code === code), dup = !!res;
        if (!res) { res = { code, set: [...new Set([...a.set, ...b.set])].sort((x, y) => x - y), used: false, prime: false }; next.push(res); }
        const X = termOf(code);
        push({ ph: 2, type: 'merge', r, title: `Slučujeme ${a.code} a ${b.code}`, hl: { a: a.code, b: b.code, res: code, pos, dup }, a: a.code, b: b.code, res: code,
          what: `Kódy <b>${a.code}</b> (${termOf(a.code)}) a <b>${b.code}</b> (${termOf(b.code)}) se liší <b>jen u proměnné ${V}</b>: první má ${V}${a.code[pos] === '0' ? '′' : ''}, druhý ${V}${b.code[pos] === '0' ? '′' : ''}. Na ${V} proto nezáleží – v kódu ji nahradí pomlčka a vznikne <b>${code}</b> = ${X}.`,
          why: X === '1' ? `Platí ${V} ∨ ${V}′ ≡ 1 – ať je ${V} pravda, nebo ne, výsledek je vždy pravda.` : `Je to zákon (${X}∧${V}) ∨ (${X}∧${V}′) ≡ ${X}∧(${V}∨${V}′) ≡ ${X}: ať je ${V} pravda, nebo ne, platí totéž, takže ji z konjunkce vypustíme.`,
          change: `Oba zdrojové kódy dostaly <b>✓</b> – jsou „spotřebované“ (kód <b>${code}</b> je pokrývá a je kratší). ` + (dup ? `Kód ${code} už v novém sloupci je (vznikl z jiné dvojice a pokrývá stejné konjunkce ${lst(res.set)}), proto ho podruhé nepřidáváme.` : `V novém sloupci přibyl kód <b>${code}</b> pokrývající konjunkce ${lst(res.set)}.`) });
      }
      const left = model.levels[r].items.filter(x => !x.used);
      left.forEach(x => (x.prime = true));
      const lastLevel = !next.length;
      if (lastLevel) model.levels.pop();
      push({ ph: 2, type: 'roundEnd', r, title: `Konec ${r + 1}. kola`, hl: { primes: left.map(x => x.code) },
        what: left.length ? `Kódy bez ✓ (<b>${lst(left.map(x => `${x.code} = ${termOf(x.code)}`))}</b>) se s žádným jiným nesloučily.` : 'Každý kód dostal ✓ – všechny se sloučily do kratších.',
        why: left.length ? 'Kód, který nejde sloučit, už nelze zkrátit – je to <b>prvočlen</b> (nejkratší možný zápis pro tu část formule). Mohl by být součástí minimálního tvaru.' : 'Prvočleny tedy budou až v dalších kolech.',
        change: (left.length ? `Označeno jako prvočleny: ${lst(left.map(x => x.code))}. ` : '') + (lastLevel ? 'Nic nového nevzniklo – slučování <b>končí</b>.' : `Nové kódy (${next.length}) tvoří vstup ${r + 2}. kola.`) });
      if (lastLevel) break;
      r++;
    }

    // --- prvočleny, pokrytí ---
    const primes = model.levels.flatMap(l => l.items).filter(x => x.prime).map(x => ({ ...x, term: termOf(x.code), lits: nlit(x.code) }));
    const allCols = ones.map((_, i) => i + 1);
    const byCol = m => primes.map((p, i) => (p.set.includes(m) ? i : -1)).filter(i => i >= 0);
    const single = allCols.filter(m => byCol(m).length === 1);
    const E = [...new Set(single.map(m => byCol(m)[0]))].sort((x, y) => x - y);
    const covered = [...new Set(E.flatMap(i => primes[i].set))].sort((x, y) => x - y), uncovered = allCols.filter(m => !covered.includes(m));
    const { alts: extra, exact } = minCovers(primes, E, uncovered);
    const alts = extra.map(s => [...E, ...s].sort((x, y) => x - y));
    const pname = i => `<b>${primes[i].code}</b> (${primes[i].term})`;

    push({ ph: 3, type: 'primes', title: 'Prvočleny', hl: {},
      what: `Slučování skončilo. Kódy, které zůstaly bez ✓, jsou <b>prvočleny</b>: ${lst(primes.map((p, i) => pname(i)))}.`,
      why: 'Minimální tvar se skládá jen z prvočlenů – každý delší (nezkrácený) člen by šel ještě zjednodušit. Teď už jen potřebujeme zjistit, <b>které prvočleny stačí</b>, aby formule zůstala stejná.',
      change: `Máme ${primes.length} ${primes.length === 1 ? 'prvočlen' : primes.length < 5 ? 'prvočleny' : 'prvočlenů'}; každý pokrývá některé z původních konjunkcí.` });
    push({ ph: 4, type: 'cover', title: 'Tabulka pokrytí',
      what: `Řádky jsou prvočleny, sloupce původní konjunkce 1…${n}. Znak <b>×</b> značí, že prvočlen konjunkci <b>pokrývá</b> – jeho kód se s kódem konjunkce shoduje na všech místech kromě pomlček. Najeď myší na buňku a uvidíš řádek i sloupec.`,
      why: 'Vybraná sada prvočlenů musí pokrýt <b>každý sloupec</b>. Kdyby některý zůstal nepokrytý, výsledná formule by pro příslušný řádek původní tabulky nebyla pravdivá, i když původní pravdivá byla.',
      change: 'Přibyla tabulka pokrytí; zatím není nic vybráno.' });
    push({ ph: 4, type: 'essential', title: 'Nezbytné prvočleny', pick: E,
      what: E.length ? `Ve sloupcích <b>${lst(single)}</b> je jediný ×. Konjunkci ${single[0]} pokrývá už jen ${pname(byCol(single[0])[0])}, a ten proto musíme vzít. Nezbytné prvočleny: ${lst(E.map(pname))}.` : 'Žádný sloupec nemá jediný × – každou konjunkci pokrývají aspoň dva prvočleny, takže <b>žádný prvočlen není nezbytný</b>.',
      why: E.length ? 'Kdybychom nezbytný prvočlen vynechali, zůstala by některá konjunkce nepokrytá. Je proto ve <b>všech</b> správných řešeních.' : 'Bez nezbytných prvočlenů musíme prozkoumat kombinace a vybrat nejlevnější.',
      change: E.length ? `Vybráno: ${lst(E.map(i => primes[i].code))}. Pokryté sloupce: ${lst(covered)}. ` + (uncovered.length ? `Zbývá pokrýt: <b>${lst(uncovered)}</b>.` : '<b>Všechny sloupce jsou pokryté</b> – další výběr není potřeba.') : 'Zatím nic vybráno.' });
    if (uncovered.length) push({ ph: 4, type: 'choose', title: 'Doplnění pokrytí',
      what: `Zbývá pokrýt sloupce <b>${lst(uncovered)}</b>. Hledáme sadu dalších prvočlenů, která je pokryje s <b>co nejméně literály</b>.${alts.length > 1 ? ` Nejlepších řešení je <b>${alts.length}</b> – přepínej je tlačítky níže.` : ''}${exact ? '' : ' (Kandidátů je mnoho, použit hladový výběr – nemusí být úplně minimální.)'}`,
      why: 'Délku výsledné formule určuje počet literálů. Různé kombinace mohou mít <b>stejný</b> počet literálů – pak jsou všechny správné a stačí uvést jednu (nebo všechny).',
      change: `Zvolené řešení přidá: ${lst(alts[0].filter(i => !E.includes(i)).map(i => primes[i].code))}.` });
    push({ ph: 5, type: 'result', title: 'Výsledek – minimální disjunktivní tvar',
      what: 'Minimální tvar je disjunkce vybraných prvočlenů.', why: 'Každá původní konjunkce je pokrytá, žádný prvočlen navíc – formule je ekvivalentní původní a nejkratší možná.',
      change: `Z <b>${n * nv}</b> literálů zbylo <b>${alts[0].reduce((s, i) => s + primes[i].lits, 0)}</b>.` });
    return { ...base, steps, primes, alts, exact, E, uncovered, single };
  }

  // --- vykreslení ---
  function mount(root) {
    const ui = { preset: 'p1', nv: 3, bits: null, step: 0, alt: 0, edit: false };
    const setFn = (nv, ones) => { ui.nv = nv; ui.bits = Array.from({ length: 2 ** nv }, (_, v) => ones.includes(v)); };
    setFn(3, PRESETS[0].ones);
    let sim;
    const rebuild = () => { sim = simulate(ui.nv, ui.bits.map((x, v) => (x ? v : -1)).filter(v => v >= 0)); ui.step = 0; ui.alt = 0; };
    rebuild();

    const itemHTML = (it, lvl, s, grouped) => {
      const hl = s.hl || {}, isRes = hl.res === it.code && s.type === 'merge' && s.r + 1 === lvl;
      const on = s.type === 'merge' && s.r === lvl;
      const cls = ['qw-it', it.used ? 'used' : '', it.prime ? 'prime' : '', on && hl.a === it.code ? 'ha' : '', on && hl.b === it.code ? 'hb' : '', isRes ? 'hr' : '', hl.primes && s.r === lvl && hl.primes.includes(it.code) ? 'hp' : ''].filter(Boolean).join(' ');
      const diff = on && (hl.a === it.code || hl.b === it.code) ? hl.pos : -1;
      return `<div class="${cls}"><span class="qw-cd">${chs(it.code, diff)}</span><span class="qw-mk">${it.used ? '✓' : it.prime ? 'prvočlen' : ''}</span><span class="qw-sub"><span class="qw-no">{${lst(it.set)}}</span> ${termOf(it.code)}</span></div>`;
    };
    const columns = (s, upto) => {
      const lv = s.snap.levels, g = s.snap.grouped;
      return `<div class="qw-cols">${lv.slice(0, upto ?? lv.length).map((L, k) => {
        const its = g ? [...L.items].sort((a, b) => n1(a.code) - n1(b.code) || (a.code < b.code ? -1 : 1)) : L.items;
        let last = -1, body = '';
        for (const it of its) { const o = n1(it.code); if (g && o !== last) { body += `<div class="qw-gh">${o} ${o === 1 ? 'jednička' : o > 1 && o < 5 ? 'jedničky' : 'jedniček'}</div>`; last = o; } body += itemHTML(it, k, s, g); }
        return `<div class="qw-col"><div class="qw-ct">${k === 0 ? 'Kolo 0' : k + '. kolo'} <span>${k === 0 ? 'kódy z tabulky' : 'po slučování'}</span></div><div class="qw-hd"><span class="qw-cd">${hdr(sim.nv)}</span></div>${body}</div>`;
      }).join('')}</div>`;
    };
    const calc = s => {
      const { a, b, res, pos, dup } = s.hl && s.type === 'merge' ? { ...s.hl } : {};
      if (!a) return '';
      return `<div class="qw-calc"><div class="qw-cr"><span class="l a">první</span><span class="qw-cd">${chs(a, pos)}</span><span class="qw-tm">${termOf(a)}</span></div><div class="qw-cr"><span class="l b">druhý</span><span class="qw-cd">${chs(b, pos)}</span><span class="qw-tm">${termOf(b)}</span></div>
      <div class="qw-cr dif"><span class="l">rozdíl</span><span class="qw-cd">${[...a].map((_, i) => `<i class="qw-c ${i === pos ? 'df' : 'same'}">${i === pos ? '▲' : '·'}</i>`).join('')}</span><span class="qw-tm">liší se jen u ${NM[pos]} → vypadne</span></div>
      <div class="qw-cr res"><span class="l r">výsledek</span><span class="qw-cd">${chs(res, pos)}</span><span class="qw-tm">${termOf(res)}${dup ? ' <em>(už existuje)</em>' : ''}</span></div></div>`;
    };
    const coverTable = (s, mode) => {
      const rows = sim.primes, n = sim.n;
      const chosen = mode === 'cover' ? [] : mode === 'essential' ? sim.E : (sim.alts[ui.alt] || []);
      const cov = new Set(chosen.flatMap(i => rows[i].set)), single = mode === 'essential' ? sim.single : [];
      return `<div class="qw-cv"><table><tr><th>prvočlen</th>${Array.from({ length: n }, (_, k) => `<th data-c="${k + 1}" class="${cov.has(k + 1) ? 'cv' : ''}${single.includes(k + 1) ? ' sg' : ''}">${k + 1}</th>`).join('')}<th>lit.</th></tr>
      ${rows.map((p, i) => `<tr data-r="${i}" class="${chosen.includes(i) ? 'pick' : ''}"><td class="pn"><span class="qw-cd">${chs(p.code)}</span> <span class="qw-tm">${p.term}</span></td>${Array.from({ length: n }, (_, k) => `<td data-c="${k + 1}" class="${p.set.includes(k + 1) ? 'x' : ''}${cov.has(k + 1) ? ' cv' : ''}${single.includes(k + 1) ? ' sg' : ''}">${p.set.includes(k + 1) ? '×' : ''}</td>`).join('')}<td class="lt">${p.lits}</td></tr>`).join('')}</table></div>`;
    };
    const altBtns = () => sim.alts.length > 1 ? `<div class="qw-alts"><span class="lbl">Minimální řešení:</span>${sim.alts.map((a, i) => `<button data-act="alt" data-i="${i}" class="${i === ui.alt ? 'on' : ''}">${ROM[i]}: ${a.map(j => sim.primes[j].term).join(' ∨ ')}</button>`).join('')}</div>` : '';

    const view = s => {
      switch (s.type) {
        case 'empty': return '';
        case 'intro': case 'encode': {
          const enc = s.type === 'encode', rows = sim.ones.map((v, i) => [i + 1, v.toString(2).padStart(sim.nv, '0')]);
          return `<div class="qw-fm"><span class="lbl">ϕ =</span> ${rows.map(([, c]) => `<span class="qw-t">${termOf(c)}</span>`).join('<span class="qw-or">∨</span>')}</div>
          <div class="qw-cols"><div class="qw-col"><div class="qw-ct">Řádky tabulky s 1 <span>${enc ? '→ kódy' : ''}</span></div><div class="qw-hd"><span class="qw-cd">${hdr(sim.nv)}</span></div>
          ${rows.map(([k, c]) => `<div class="qw-it ${enc ? 'hr' : ''}"><span class="qw-cd">${enc ? chs(c) : '<i class="qw-c dd">?</i>'.repeat(sim.nv)}</span><span class="qw-mk"></span><span class="qw-sub"><span class="qw-no">č. ${k}</span> ${[...c].map((x, i) => NM[i] + (x === '0' ? '′' : '')).join('∧')}</span></div>`).join('')}</div></div>`;
        }
        case 'group': case 'roundStart': return columns(s);
        case 'merge': return calc(s) + columns(s);
        case 'roundEnd': return columns(s);
        case 'primes': return columns(s) + `<div class="qw-pl">${sim.primes.map(p => `<div class="qw-pc"><span class="qw-cd">${chs(p.code)}</span><b>${p.term}</b><span class="mu">pokrývá ${lst(p.set)} · ${p.lits} lit.</span></div>`).join('')}</div>`;
        case 'cover': return coverTable(s, 'cover');
        case 'essential': return coverTable(s, 'essential');
        case 'choose': return coverTable(s, 'choose') + altBtns();
        case 'result': {
          const alt = sim.alts[ui.alt] || [], f = alt.map(i => sim.primes[i].term), L = alt.reduce((x, i) => x + sim.primes[i].lits, 0);
          const ok = Array.from({ length: 2 ** sim.nv }, (_, v) => alt.some(i => matches(sim.primes[i].code, v, sim.nv)) === sim.ones.includes(v)).every(Boolean);
          return `<div class="qw-res">${f.map(t => `<span class="qw-t big">${t}</span>`).join('<span class="qw-or">∨</span>') || '0'}</div>
          <div class="qw-stat"><div><b>${sim.n * sim.nv}</b><span>literálů na začátku</span></div><div class="arrow">→</div><div><b>${L}</b><span>literálů nyní</span></div><div class="chk ${ok ? 'ok' : 'bad'}">${ok ? '✓ ověřeno: formule má stejnou pravdivostní tabulku' : '✗ nesouhlasí s tabulkou'}</div></div>${altBtns()}${sim.exact ? '' : '<p class="cap">Hladový výběr – řešení nemusí být minimální.</p>'}`
            + coverTable(s, 'result');
        }
      }
    };
    const editor = () => `<div class="qw-ed"><div class="qw-row"><span class="lbl">Počet proměnných:</span>${[2, 3, 4, 5].map(k => `<button data-act="nv" data-k="${k}" class="${ui.nv === k ? 'on' : ''}">${k}</button>`).join('')}<button data-act="clear">vynulovat</button><button data-act="rand">náhodně</button></div>
      <div class="qw-cells">${ui.bits.map((x, v) => `<button data-act="bit" data-v="${v}" class="qw-cell ${x ? 'on' : ''}"><span>${v.toString(2).padStart(ui.nv, '0')}</span><b>${x ? 1 : 0}</b></button>`).join('')}</div>
      <p class="cap">Každá buňka je jeden řádek pravdivostní tabulky (kód = hodnoty ${NM.slice(0, ui.nv).split('').join(', ')}). Klikem přepneš hodnotu ϕ; zadání se hned přepočítá.</p></div>`;

    const render = () => {
      const s = sim.steps[ui.step], last = sim.steps.length - 1;
      const nextEnd = sim.steps.findIndex((x, i) => i > ui.step && x.type === 'roundEnd');
      root.innerHTML = `<div class="qw-top"><span class="lbl">Zadání:</span>${PRESETS.map(p => `<button data-act="preset" data-id="${p.id}" class="${ui.preset === p.id ? 'on' : ''}">${p.label}</button>`).join('')}<button data-act="edit" class="${ui.preset === 'own' ? 'on' : ''}">✎ Vlastní zadání</button></div>
      ${ui.edit || ui.preset === 'own' ? editor() : ''}
      <div class="qw-ph">${PHASES.map((p, k) => { const first = sim.steps.findIndex(x => x.ph === k); return first < 0 ? '' : `<button data-act="go" data-i="${first}" class="${s.ph === k ? 'on' : ''} ${k < s.ph ? 'dn' : ''}"><i>${k + 1}</i>${p}</button>`; }).join('')}</div>
      <div class="qw-nav"><button data-act="prev" ${ui.step ? '' : 'disabled'}>◀ Zpět</button>
        <div class="qw-dots">${sim.steps.map((x, i) => `<button data-act="go" data-i="${i}" title="${x.title.replace(/"/g, '')}" class="ph${x.ph} ${i === ui.step ? 'cur' : i < ui.step ? 'dn' : ''}"></button>`).join('')}</div>
        <button data-act="skip" style="${s.ph === 2 && nextEnd > 0 && s.type !== 'roundEnd' ? '' : 'visibility:hidden'}">⏭ Dokončit kolo</button><button data-act="next" class="on" ${ui.step < last ? '' : 'disabled'}>Další ▶</button></div>
      <div class="qw-body"><div class="qw-view">${view(s)}</div>
        <div class="qw-ex"><div class="qw-st">Krok ${ui.step + 1} / ${sim.steps.length} · ${PHASES[s.ph]}</div><h4>${s.title}</h4>
          <div class="qw-p"><span>Co se děje</span><p>${s.what}</p></div><div class="qw-p"><span>Proč</span><p>${s.why}</p></div><div class="qw-p ch"><span>Co se změnilo</span><p>${s.change}</p></div></div></div>
      <div class="qw-leg"><span><i class="qw-c d1">1</i> proměnná</span><span><i class="qw-c d0">0</i> negace</span><span><i class="qw-c dd">−</i> nezáleží</span><span class="ha">první kód</span><span class="hb">druhý kód</span><span class="hr">výsledek</span><span class="hp">prvočlen</span><span>✓ spotřebovaný kód</span> <span class="hint">Tip: šipky ← → na klávesnici.</span></div>`;
    };
    const go = i => { ui.step = Math.max(0, Math.min(sim.steps.length - 1, i)); render(); };
    root.tabIndex = 0; root.classList.add('qw');
    root.addEventListener('keydown', e => { if (e.key === 'ArrowRight') { e.preventDefault(); go(ui.step + 1); } if (e.key === 'ArrowLeft') { e.preventDefault(); go(ui.step - 1); } });
    root.addEventListener('mouseover', e => {
      const t = e.target.closest('.qw-cv td, .qw-cv th'); root.querySelectorAll('.qw-cv .hv').forEach(x => x.classList.remove('hv'));
      if (!t) return; const c = t.dataset.c; if (c) root.querySelectorAll(`.qw-cv [data-c="${c}"]`).forEach(x => x.classList.add('hv')); t.closest('tr')?.classList.add('hv');
    });
    root.addEventListener('click', e => {
      const b = e.target.closest('[data-act]'); if (!b) return; const a = b.dataset.act;
      if (a === 'next') return go(ui.step + 1);
      if (a === 'prev') return go(ui.step - 1);
      if (a === 'go') return go(+b.dataset.i);
      if (a === 'skip') return go(sim.steps.findIndex((x, i) => i > ui.step && x.type === 'roundEnd'));
      if (a === 'alt') { ui.alt = +b.dataset.i; return render(); }
      if (a === 'preset') { const p = PRESETS.find(x => x.id === b.dataset.id); ui.preset = p.id; ui.edit = false; setFn(p.nv, p.ones); rebuild(); return render(); }
      if (a === 'edit') { ui.preset = 'own'; ui.edit = true; return render(); }
      if (a === 'nv') { ui.preset = 'own'; setFn(+b.dataset.k, []); ui.bits[1] = true; ui.bits[ui.bits.length - 2] = true; rebuild(); return render(); }
      if (a === 'clear') { ui.bits = ui.bits.map(() => false); rebuild(); return render(); }
      if (a === 'rand') { ui.bits = ui.bits.map(() => Math.random() < .5); rebuild(); return render(); }
      if (a === 'bit') { ui.bits[+b.dataset.v] = !ui.bits[+b.dataset.v]; rebuild(); return render(); }
    });
    render();
  }
  window.WIDGETS = window.WIDGETS || {};
  window.WIDGETS.qm = mount;
  window.WIDGETS.qm.simulate = simulate;
})();
