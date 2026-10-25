// Widgety UPP (blok { t: 'widget', name }) – čísla a data: soustavy, ieee, hamming, rgb, text, dopln, slozitost, masky, adresace.
// Krokování staví na WG.app (assets/wg.js); výpočty jsou čisté funkce, příklady v textu témat slouží jako předvolby.
(() => {
  const D = '0123456789ABCDEF', sub = (s, b) => `${s}<sub>${b}</sub>`;
  const bin = (v, n) => (v >>> 0).toString(2).padStart(n, '0').slice(-n);
  const cells = (s, cls = () => '') => [...s].map((c, i) => WG.c(c, cls(i, c))).join('');

  // ---------- převod mezi soustavami ----------
  const parse = (s, b) => {
    s = s.trim().toUpperCase().replace(/\s/g, '');
    if (!s) return { err: 'Zadej číslo.' };
    if (s.length > 12) return { err: 'Nejvýše 12 cifer.' };
    let v = 0; for (const c of s) { const d = D.indexOf(c); if (d < 0 || d >= b) return { err: `Cifra „${c}“ nepatří do soustavy se základem ${b}.` }; v = v * b + d; }
    return { v, s };
  };
  WG.reg('soustavy', root => WG.app(root, {
    state: { x: 'FF', a: 16, b: 2 },
    top: ui => `${WG.lbl('Číslo:')}${WG.txt('x', ui.x, '', 14)}${WG.lbl('ze základu')}${WG.sel('a', [...Array(15)].map((_, i) => [i + 2, i + 2]), ui.a)}${WG.lbl('do základu')}${WG.sel('b', [...Array(15)].map((_, i) => [i + 2, i + 2]), ui.b)}
      ${WG.btn('sw', '⇄ prohodit')}<div class="qw-row" style="width:100%">${WG.lbl('Příklady:')}${[['110010101', 2, 16], ['FF', 16, 2], ['2D', 16, 10], ['1234', 10, 2], ['755', 8, 2], ['101101', 2, 8]].map(([x, a, b]) => WG.btn('pre', `${x}₍${a}₎ → ${b}`, false, `data-x="${x}" data-a="${a}" data-b="${b}"`)).join('')}</div>`,
    act: (ui, a, d) => { if (a === 'sw') { const p = parse(ui.x, ui.a); if (!p.err) { ui.x = p.v.toString(ui.b).toUpperCase(); [ui.a, ui.b] = [ui.b, ui.a]; } } if (a === 'pre') { ui.x = d.x; ui.a = +d.a; ui.b = +d.b; } ui.step = 0; },
    input: ui => { ui.step = 0; ui.a = +ui.a; ui.b = +ui.b; },
    steps: ui => {
      const p = parse(ui.x, +ui.a), A = +ui.a, B = +ui.b;
      if (p.err) return [{ title: '', view: WG.note(p.err, 'bad') }];
      const v = p.v, S = [{ title: `Zadání: ${p.s}₍${A}₎ → soustava o základu ${B}`, what: `Číslo ${sub(p.s, A)} zapsané v soustavě o základu ${A} (cifry ${D.slice(0, A)}) převedeme do soustavy o základu ${B}.`, why: 'Nejobecnější cesta vede přes desítkovou soustavu: z libovolné soustavy do desítkové a z desítkové do cílové.', change: `Hotové číslo bude mít cifry ${D.slice(0, B)}.`, view: `<div class="qw-big">${sub(p.s, A)} → ${sub('?', B)}</div>` }];
      if (A !== 10) {
        const ds = [...p.s], terms = ds.map((c, i) => [c, D.indexOf(c), ds.length - 1 - i]);
        S.push({ title: `Do desítkové: rozvoj podle mocnin ${A}`, what: `Každou cifru vynásobíme mocninou základu ${A} podle jejího místa (zprava od nuly) a výsledky sečteme.`, why: 'Poziční zápis znamená právě součet cifra · základ^místo.', change: `${sub(p.s, A)} = ${terms.map(([, d, k]) => `${d}·${A}<sup>${k}</sup>`).join(' + ')} = <b>${v}</b>${sub('', 10)}`,
          view: WG.tbl(['cifra', 'hodnota', 'místo', `mocnina ${A}<sup>místo</sup>`, 'součin'], terms.map(([c, d, k]) => [c, d, k, A ** k, d * A ** k]).concat([{ cls: 'ok', cells: ['', '', '', 'součet', v] }])) });
      }
      if (B !== 10) {
        const rows = []; let k = 0; while (B ** (k + 1) <= v) k++;
        let rem = v; const digs = [];
        for (let i = k; i >= 0; i--) { const q = Math.floor(rem / B ** i); rows.push([`${B}<sup>${i}</sup> = ${B ** i}`, rem, q, rem - q * B ** i]); digs.push(D[q]); rem -= q * B ** i; }
        S.push({ title: `Z desítkové do soustavy ${B}: odečítání mocnin`, what: `Hledáme nejvyšší mocninu ${B}, která se vejde do ${v}, zjistíme, kolikrát se vejde (to je cifra), odečteme a pokračujeme zbytkem s nižší mocninou.`, why: 'Cifry jsou počty jednotlivých mocnin základu, ze kterých se číslo skládá.', change: `Cifry shora dolů: <b>${digs.join('')}</b>`,
          view: WG.tbl(['mocnina', 'zbývá', 'kolikrát se vejde = cifra', 'zbytek'], rows) });
      }
      const pw = [8, 16].includes(A) && B === 2 ? A : [8, 16].includes(B) && A === 2 ? B : 0;
      if (pw && A !== B) {
        const g = pw === 8 ? 3 : 4;
        if (A === 2) { const bs = p.s.padStart(Math.ceil(p.s.length / g) * g, '0'), gr = bs.match(new RegExp(`.{${g}}`, 'g'));
          S.push({ title: `Zkratka: skupiny po ${g} bitech`, what: `Dvojkový zápis rozdělíme od pravé strany na skupiny po ${g} bitech (zleva doplníme nuly) a každou skupinu přepíšeme jednou cifrou soustavy ${B}.`, why: `${B} = 2<sup>${g}</sup>, takže jedna cifra odpovídá přesně ${g} bitům – nemusíme počítat přes desítkovou.`, change: `Výsledek: <b>${gr.map(x => D[parseInt(x, 2)]).join('')}</b>`, view: WG.tbl(['bity', ...gr], [['cifra', ...gr.map(x => D[parseInt(x, 2)])]]) }); }
        else { const bs = [...p.s].map(c => bin(D.indexOf(c), g));
          S.push({ title: `Zkratka: každá cifra = ${g} bitů`, what: `Každou cifru soustavy ${A} přepíšeme na ${g} bitů a skupiny spojíme.`, why: `${A} = 2<sup>${g}</sup>, takže cifra a ${g}bitová skupina si přesně odpovídají.`, change: `Výsledek: <b>${bs.join('').replace(/^0+(?=.)/, '')}</b> (bez nevýznamných nul zleva)`, view: WG.tbl(['cifra', ...[...p.s]], [['bity', ...bs]]) }); }
      }
      S.push({ title: 'Výsledek', what: `${sub(p.s, A)} = ${sub(v, 10)} = <b>${sub(v.toString(B).toUpperCase(), B)}</b>`, why: 'Kontrola: stejnou hodnotu musí dát obě cesty, přímá zkratka i převod přes desítkovou soustavu.', change: `Cílový zápis: ${v.toString(B).toUpperCase()}`, view: `<div class="qw-big">${sub(p.s, A)} = ${sub(v.toString(B).toUpperCase(), B)}</div>` });
      return S;
    }
  }));

  // ---------- IEEE 754 (single) ----------
  const f32bits = x => { const d = new DataView(new ArrayBuffer(4)); d.setFloat32(0, x); return d.getUint32(0).toString(2).padStart(32, '0'); };
  const bitsF32 = b => { const d = new DataView(new ArrayBuffer(4)); d.setUint32(0, parseInt(b, 2)); return d.getFloat32(0); };
  const num = s => { s = s.trim().replace(',', '.').toLowerCase(); return s === 'inf' || s === '∞' ? Infinity : s === '-inf' || s === '-∞' ? -Infinity : s === 'nan' ? NaN : s === '' || isNaN(+s) ? undefined : +s; };
  WG.reg('ieee', root => WG.app(root, {
    state: { x: '-6,5', bits: f32bits(-6.5), hex: '' },
    top: ui => `${WG.lbl('Číslo:')}${WG.txt('x', ui.x, 'např. −13,625', 14)}${WG.lbl('nebo hex:')}${WG.txt('hex', ui.hex, 'C0D00000', 10)}<div class="qw-row" style="width:100%">${WG.lbl('Příklady:')}${['-6,5', '1', '10', '2,5', '-13,625', '0,1', '0', 'inf'].map(x => WG.btn('pre', x, false, `data-x="${x}"`)).join('')}${WG.btn('pre', 'C0F00000', false, 'data-hex="C0F00000"')}</div>`,
    act: (ui, a, d) => { if (a === 'pre') { if (d.hex) { ui.hex = d.hex; ui.bits = parseInt(d.hex, 16).toString(2).padStart(32, '0'); ui.x = String(bitsF32(ui.bits)).replace('.', ','); } else { ui.x = d.x; ui.bits = f32bits(num(d.x)); ui.hex = ''; } } if (a === 'bit') { const i = +d.i; ui.bits = ui.bits.slice(0, i) + (ui.bits[i] === '1' ? '0' : '1') + ui.bits.slice(i + 1); ui.x = String(bitsF32(ui.bits)).replace('.', ','); ui.hex = ''; } },
    input: (ui, k) => { if (k === 'x') { const v = num(ui.x); if (v !== undefined) ui.bits = f32bits(v); } if (k === 'hex' && /^[0-9a-f]{1,8}$/i.test(ui.hex.trim())) { ui.bits = parseInt(ui.hex.trim(), 16).toString(2).padStart(32, '0'); ui.x = String(bitsF32(ui.bits)).replace('.', ','); } },
    view: ui => {
      const b = ui.bits, s = +b[0], e = parseInt(b.slice(1, 9), 2), m = b.slice(9), mb = m.replace(/0+$/, ''), val = bitsF32(b), exact = (() => { const v = num(ui.x); return v === undefined || Math.fround(v) === v || isNaN(v); })();
      const hex = parseInt(b, 2).toString(16).toUpperCase().padStart(8, '0'), sg = s ? '−' : '+';
      let kind, calc;
      if (e === 255) { kind = m.includes('1') ? 'NaN (nedefinováno)' : `${sg}∞ (nekonečno)`; calc = 'exponent e′ je samé jedničky: mantisa 0 → ±∞, mantisa nenulová → NaN'; }
      else if (e === 0) { kind = m.includes('1') ? 'denormalizované číslo' : `${sg}0 (nula)`; calc = m.includes('1') ? `exponent e′ je samé nuly: číslo má tvar ${sg}0,m · 2<sup>−126</sup>` : 'e′ i mantisa jsou nuly'; }
      else { kind = 'normalizované číslo'; calc = `e = e′ − 127 = ${e} − 127 = <b>${e - 127}</b> · x = ${sg}1,${mb || '0'} · 2<sup>${e - 127}</sup>`; }
      const bitc = (i, cl) => `<button class="qw-b ${b[i] === '1' ? 'on' : ''}" data-act="bit" data-i="${i}" title="přepnout bit ${i}">${b[i]}</button>`;
      return `<div class="qw-row" style="gap:2px;align-items:flex-end"><div><div class="lbl">znaménko</div>${bitc(0)}</div><div style="margin-left:10px"><div class="lbl">exponent e′ (8 bitů)</div>${[...Array(8)].map((_, i) => bitc(1 + i)).join('')}</div></div>
        <div style="margin-top:6px"><div class="lbl">mantisa m (23 bitů)</div>${[...Array(23)].map((_, i) => bitc(9 + i)).join('')}</div>
        <div class="qw-kv"><span>hexadecimálně</span><span>${hex}</span><span>druh</span><span>${kind}</span><span>exponent e′</span><span>${b.slice(1, 9)}₍₂₎ = ${e}</span><span>výpočet</span><span>${calc}</span><span>hodnota</span><span>${isNaN(val) ? 'NaN' : String(val).replace('.', ',')}</span></div>
        ${exact ? '' : WG.note(`Číslo ${ui.x} nelze v 32 bitech zapsat přesně, uloží se nejbližší reprezentovatelné: ${String(val).replace('.', ',')}.`, 'warn')}
        ${e > 0 && e < 255 ? WG.note(`Kódování ručně: ${sg}${(Math.abs(val)).toString(2).replace(/\.?0+$/, '').replace('.', ',')}₍₂₎ → normalizace 1,${mb || '0'} · 2<sup>${e - 127}</sup> → e′ = ${e - 127} + 127 = ${e} = ${b.slice(1, 9)}₍₂₎ → mantisa = ${mb || '0'} doplněná nulami do 23 bitů.`) : ''}
        <p class="mu" style="font-size:13px">Klikáním na bity číslo upravuješ a vidíš, co uložená hodnota znamená.</p>`;
    }
  }));

  // ---------- Hammingův kód SEC ----------
  const ptab = (n, bits, labels, cls) => `<div class="qw-cv"><table><tr><th>pozice</th>${[...Array(n)].map((_, i) => `<th>${i + 1}</th>`).join('')}</tr><tr><th>${'bit'}</th>${labels.map(l => `<th>${l}</th>`).join('')}</tr><tr><th>hodnota</th>${[...bits].map((c, i) => `<td class="${cls(i + 1) || ''}">${c}</td>`).join('')}</tr></table></div>`;
  WG.reg('hamming', root => WG.app(root, {
    state: { m: 4, d: '1011', e: 0 },
    top: ui => `${WG.lbl('Datové bity m =')}${[4, 8].map(m => WG.btn('m', m, ui.m === m, `data-m="${m}"`)).join('')}${WG.lbl('data:')}${WG.txt('d', ui.d, '', ui.m + 2)}${WG.lbl('chyba na pozici:')}${WG.sel('e', [[0, 'žádná'], ...[...Array(ui.m + (ui.m === 4 ? 3 : 4))].map((_, i) => [i + 1, i + 1])], ui.e)}`,
    act: (ui, a, d) => { if (a === 'm') { ui.m = +d.m; ui.d = ui.m === 4 ? '1011' : '10110101'; ui.e = 0; ui.step = 0; } },
    input: ui => { ui.step = 0; ui.e = +ui.e; },
    steps: ui => {
      const m = ui.m, k = m === 4 ? 3 : 4, n = m + k, d = ui.d.trim();
      if (!new RegExp(`^[01]{${m}}$`).test(d)) return [{ title: '', view: WG.note(`Zadej přesně ${m} datových bitů (0/1).`, 'bad') }];
      const isP = p => (p & (p - 1)) === 0, lab = [], code = [];
      let di = 0; for (let p = 1; p <= n; p++) { if (isP(p)) { lab.push(`p<sub>${Math.log2(p) + 1}</sub>`); code[p] = 0; } else { lab.push(`d<sub>${di + 1}</sub>`); code[p] = +d[di++]; } }
      const cov = i => [...Array(n)].map((_, x) => x + 1).filter(p => p & (1 << i));
      const S = [{ title: 'Pozice a role bitů', what: `Pozice očíslujeme 1 až ${n}. Na mocniny dvojky (${[...Array(k)].map((_, i) => 1 << i).join(', ')}) patří paritní bity p, na ostatní pozice datové bity d<sub>1</sub>…d<sub>${m}</sub> postupně.`, why: `Podmínka počtu paritních bitů: m + k + 1 ≤ 2<sup>k</sup> → ${m} + ${k} + 1 = ${m + k + 1} ≤ ${2 ** k}.`, change: `Slovo má ${n} bitů.`, view: ptab(n, code.slice(1).join(''), lab, p => (isP(p) ? 'hi' : '')) }];
      for (let i = 0; i < k; i++) {
        const c = cov(i).filter(p => !isP(p)), v = c.reduce((s, p) => s ^ code[p], 0); code[1 << i] = v;
        S.push({ title: `Paritní bit p${i + 1} (pozice ${1 << i})`, what: `p<sub>${i + 1}</sub> pokrývá pozice, jejichž binární zápis má ${i + 1}. bit zprava jedničkový: ${cov(i).join(', ')}. Datové bity z nich: ${c.map(p => `pozice ${p} (${code[p]})`).join(', ')}.`, why: 'Sudá parita: paritní bit doplní počet jedniček v pokryté skupině na sudý, tedy je to XOR datových bitů.', change: `p<sub>${i + 1}</sub> = ${c.map(p => code[p]).join(' ⊕ ')} = <b>${v}</b>`, view: ptab(n, code.slice(1).map((x, j) => (j + 1 > (1 << i) && isP(j + 1) ? 0 : x)).join(''), lab, p => (cov(i).includes(p) ? (p === 1 << i ? 'ok' : 'hi') : '')) });
      }
      const sent = code.slice(1).join('');
      S.push({ title: 'Kódové slovo', what: `Dosadíme paritní bity: <b>${sent}</b> (pozice 1 až ${n}).`, why: 'Slovo má d<sub>min</sub> = 3, takže jednu chybu umí opravit.', change: `Odesíláme ${sent}.`, view: ptab(n, sent, lab, p => (isP(p) ? 'ok' : '')) });
      const rec = [...sent].map((c, i) => (i + 1 === ui.e ? 1 - +c : +c)).join('');
      S.push({ title: ui.e ? `Přenos: chyba na pozici ${ui.e}` : 'Přenos bez chyby', what: ui.e ? `Přenosem se převrátil bit na pozici ${ui.e}. Přijato: <b>${rec}</b>.` : 'Přenos proběhl bez chyby, přijato je totéž.', why: 'Chybu zadáváš nahoře („chyba na pozici“), aby sis zkusil, jak ji kód najde.', change: ui.e ? 'Přijaté slovo se liší na jedné pozici.' : 'Beze změny.', view: ptab(n, rec, lab, p => (p === ui.e ? 'no' : '')) });
      const sy = [...Array(k)].map((_, i) => cov(i).reduce((s, p) => s ^ +rec[p - 1], 0)), pos = sy.reduce((s, x, i) => s + (x << i), 0);
      S.push({ title: 'Kontrola: syndrom', what: `Pro každé i spočteme XOR všech pozic, které p<sub>i</sub> pokrývá (včetně p<sub>i</sub>): ${sy.map((x, i) => `s<sub>${i + 1}</sub> = ${x}`).join(', ')}.`, why: 'Je-li skupina v pořádku, vyjde 0. Syndrom s<sub>k</sub>…s<sub>1</sub> je binárně číslo chybné pozice.', change: pos ? `Syndrom ${[...sy].reverse().join('')}₍₂₎ = <b>${pos}</b> → chyba na pozici ${pos}.` : 'Syndrom je 000… → bez chyby.', view: ptab(n, rec, lab, p => sy.some((x, i) => x && cov(i).includes(p) && p === 1 << i) ? 'hi' : '') });
      const fixed = [...rec].map((c, i) => (i + 1 === pos ? 1 - +c : +c)).join('');
      S.push({ title: pos ? `Oprava pozice ${pos}` : 'Nic se neopravuje', what: pos ? `Bit na pozici ${pos} převrátíme zpět: <b>${fixed}</b>.` : 'Přijaté slovo je správné.', why: 'Syndrom přímo ukazuje, který bit je chybný, proto ho stačí převrátit.', change: fixed === sent ? 'Opravené slovo je shodné s odeslaným ✓' : 'Opravené slovo se liší od odeslaného (chyb bylo víc, než SEC zvládne).', view: ptab(n, fixed, lab, p => (p === pos ? 'ok' : '')) + (ui.e && fixed === sent ? WG.note('Chyba byla nalezena a opravena.', 'ok') : '') });
      return S;
    }
  }));

  // ---------- RGB ----------
  WG.reg('rgb', root => WG.app(root, {
    state: { r: 255, g: 255, b: 0 },
    top: () => `${WG.lbl('Předvolby:')}${[['červená', 255, 0, 0], ['zelená', 0, 255, 0], ['modrá', 0, 0, 255], ['žlutá', 255, 255, 0], ['bílá', 255, 255, 255], ['černá', 0, 0, 0], ['šedá', 128, 128, 128], ['tmavší žlutá', 204, 204, 51]].map(([l, r, g, b]) => WG.btn('pre', l, false, `data-r="${r}" data-g="${g}" data-b="${b}"`)).join('')}`,
    act: (ui, a, d) => { ui.r = +d.r; ui.g = +d.g; ui.b = +d.b; },
    view: ui => {
      const hx = v => v.toString(16).toUpperCase().padStart(2, '0'), col = `rgb(${ui.r},${ui.g},${ui.b})`;
      const row = (k, l, c) => `<div class="qw-row">${WG.lbl(l)}${WG.rng(k, ui[k], 0, 255)}<b class="mo">${ui[k]}</b> <span class="mu mo">= ${hx(ui[k])}₍₁₆₎ ≈ ${Math.round(ui[k] / 2.55)} %</span></div>`;
      return `<div class="qw-split"><div>${row('r', 'R')}${row('g', 'G')}${row('b', 'B')}<div class="qw-kv"><span>hex RGB</span><span class="qw-big">${hx(ui.r)}${hx(ui.g)}${hx(ui.b)}</span><span>počet barev</span><span>256³ = 16 777 216 (24 bitů, 8 bitů na složku)</span></div></div><div><div class="qw-sw" style="background:${col}"></div><p class="mu" style="font-size:13px">Aditivní míchání: složky světla se sčítají, nulové složky = černá, plné = bílá, stejné hodnoty = odstíny šedé.</p></div></div>`;
    }
  }));

  // ---------- text → bajty ----------
  WG.reg('text', root => WG.app(root, {
    state: { t: 'AHOJ Čau', enc: 'utf8' },
    top: ui => `${WG.lbl('Text:')}${WG.txt('t', ui.t, '', 22)}${WG.lbl('kódování:')}${WG.btn('enc', 'ASCII (7 bitů)', ui.enc === 'ascii', 'data-e="ascii"')}${WG.btn('enc', 'UTF-8', ui.enc === 'utf8', 'data-e="utf8"')}`,
    act: (ui, a, d) => { ui.enc = d.e; },
    view: ui => {
      const ch = [...ui.t].slice(0, 24), enc = new TextEncoder();
      if (!ch.length) return WG.note('Napiš nějaký text.');
      const rows = ch.map(c => { const cp = c.codePointAt(0), by = [...enc.encode(c)], ok = ui.enc === 'utf8' || cp < 128;
        return { cls: ok ? '' : 'no', cells: [c === ' ' ? '␣' : c, cp, ui.enc === 'ascii' ? (ok ? bin(cp, 7) : '— mimo ASCII') : by.map(x => bin(x, 8)).join(' '), ui.enc === 'ascii' ? (ok ? 1 : '–') : by.length] }; });
      const total = ui.enc === 'utf8' ? rows.reduce((s, r) => s + r.cells[3], 0) : rows.filter(r => r.cls === '').length;
      return WG.tbl(['znak', 'kód (dek.)', ui.enc === 'ascii' ? 'binárně (7 bitů)' : 'UTF-8 – bajty', 'bajtů'], rows) + WG.note(ui.enc === 'ascii' ? 'ASCII zná jen kódy 0–127; znaky s diakritikou do něj nejdou zapsat (červené řádky).' : `Znaky ASCII zabírají v UTF-8 jeden bajt, ostatní 2 až 4. Celkem ${total} bajtů pro ${ch.length} znaků.`);
    }
  }));

  // ---------- doplňkový kód: sčítání a odčítání ----------
  WG.reg('dopln', root => WG.app(root, {
    state: { n: 8, x: 100, y: 50, op: '+' },
    top: ui => `${WG.lbl('Bitů:')}${[4, 8].map(n => WG.btn('n', n, ui.n === n, `data-n="${n}"`)).join('')}${WG.lbl('x =')}${WG.num('x', ui.x, -128, 127)}${WG.sel('op', [['+', '+'], ['−', '−']], ui.op)}${WG.lbl('y =')}${WG.num('y', ui.y, -128, 127)}<span class="mu mo">rozsah ${-(2 ** (ui.n - 1))} … ${2 ** (ui.n - 1) - 1}</span>`,
    act: (ui, a, d) => { if (a === 'n') { ui.n = +d.n; ui.x = ui.n === 4 ? 5 : 100; ui.y = ui.n === 4 ? 3 : 50; ui.step = 0; } },
    input: ui => { ui.step = 0; },
    steps: ui => {
      const n = ui.n, lo = -(2 ** (n - 1)), hi = 2 ** (n - 1) - 1, x = Math.trunc(ui.x), y = Math.trunc(ui.y);
      if (!(x >= lo && x <= hi && y >= lo && y <= hi)) return [{ title: '', view: WG.note(`Operandy musí ležet v rozsahu ${lo} … ${hi}.`, 'bad') }];
      const code = v => bin(((v % 2 ** n) + 2 ** n) % 2 ** n, n), sy = ui.op === '+' ? y : -y, a = code(x), b = code(sy);
      const sg = c => (c[0] === '1' ? parseInt(c, 2) - 2 ** n : parseInt(c, 2));
      const c = Array(n + 1).fill(0), s = Array(n).fill(0);
      for (let i = n - 1; i >= 0; i--) { const t = +a[i] + +b[i] + c[i + 1]; s[i] = t & 1; c[i] = t >> 1; }
      const sum = s.join(''), v = c[0] ^ c[1], res = sg(sum), real = ui.op === '+' ? x + y : x - y;
      return [
        { title: 'Zakódování operandů', what: `Kladné číslo se zapíše dvojkově, záporné jako doplňkový kód (invertovat bity a přičíst 1, tj. 2<sup>${n}</sup> − |x|). ${ui.op === '−' ? `Odčítání x − y počítáme jako x + (−y), proto kódujeme číslo ${sy}.` : ''}`, why: 'V doplňkovém kódu se sčítá stejně pro kladná i záporná čísla, bez speciálních případů.', change: `x = ${x} → ${a} · ${ui.op === '−' ? `−y = ${sy}` : `y = ${y}`} → ${b}`, view: `<div class="qw-kv"><span>x = ${x}</span><span>${cells(a, i => (i === 0 ? 'd1' : 'd0'))}</span><span>${ui.op === '−' ? `−y = ${sy}` : `y = ${y}`}</span><span>${cells(b, i => (i === 0 ? 'd1' : 'd0'))}</span></div><p class="mu" style="font-size:13px">Zvýrazněný je nejvyšší (znaménkový) bit.</p>` },
        { title: 'Sčítání po bitech s přenosy', what: 'Od nejnižšího bitu sčítáme x<sub>i</sub> + y<sub>i</sub> + přenos; výsledek je bit součtu, přetečení přes 1 jde jako přenos do vyššího řádu.', why: `Přenos z nejvyššího bitu (c<sub>n</sub>) se zahodí; pro příznak přetečení potřebujeme c<sub>n</sub> a c<sub>n−1</sub> (přenos do nejvyššího bitu).`, change: `Součet S = <b>${sum}</b>, c<sub>n</sub> = ${c[0]}, c<sub>n−1</sub> = ${c[1]}`,
          view: `<div class="qw-cv"><table><tr><th>přenos</th>${c.map((x, i) => `<td class="${i < 2 ? 'hi' : ''}">${x}</td>`).join('')}</tr><tr><th>x</th><td></td>${[...a].map(x => `<td>${x}</td>`).join('')}</tr><tr><th>${ui.op === '−' ? '−y' : 'y'}</th><td></td>${[...b].map(x => `<td>${x}</td>`).join('')}</tr><tr><th>S</th><td></td>${s.map(x => `<td class="ok">${x}</td>`).join('')}</tr></table></div>` },
        { title: `Příznak přetečení v = c<sub>n</sub> ⊕ c<sub>n−1</sub> = ${v}`, what: `v = ${c[0]} ⊕ ${c[1]} = <b>${v}</b>${v ? ' → výsledek se do daného počtu bitů nevešel.' : ' → výsledek je správný.'}`, why: 'Přetečení nastane, když se sečtou dvě čísla stejného znaménka a výsledek má znaménko opačné – to přesně odhalí rozdíl přenosů do a z nejvyššího bitu.', change: v ? 'Výsledek je nepoužitelný.' : 'Výsledek lze přečíst.', view: WG.note(v ? `Přetečení: skutečný součet ${real} leží mimo rozsah ${lo} … ${hi}.` : `Bez přetečení: ${real} leží v rozsahu ${lo} … ${hi}.`, v ? 'bad' : 'ok') },
        { title: 'Výsledek', what: `S = ${sum} → ${v ? 'přetečení' : `<b>${res}</b>`}. Zpětné čtení: je-li nejvyšší bit 1, číslo je záporné (S − 2<sup>${n}</sup>).`, why: 'Kontrola proti přímému výpočtu.', change: `${x} ${ui.op} ${y} = ${real}${v ? ' (v ' + n + ' bitech nelze zapsat; vyšel by ' + res + ')' : ''}`, view: `<div class="qw-big">${cells(sum, i => (i === 0 ? 'd1' : 'd0'))} = ${v ? '⚠' : res}</div>` }
      ];
    }
  }));

  // ---------- růst složitosti ----------
  WG.reg('slozitost', root => WG.app(root, {
    state: { n: 10 },
    top: ui => `${WG.lbl('n =')}${WG.rng('n', ui.n, 1, 25)}<b class="mo">${ui.n}</b>`,
    view: ui => {
      const n = ui.n, f = x => (x >= 1e9 ? x.toExponential(2).replace('e+', ' · 10^') : x % 1 ? x.toFixed(1).replace('.', ',') : String(x)), fac = [...Array(n)].reduce((a, _, i) => a * (i + 1), 1);
      const R = [['log₂ n', Math.log2(n)], ['n', n], ['n · log₂ n', n * Math.log2(n)], ['n²', n ** 2], ['n³', n ** 3], ['2<sup>n</sup>', 2 ** n], ['n!', fac]];
      const mx = Math.log10(2 * 1.6e25);
      return WG.tbl(['f(n)', 'hodnota pro n = ' + n, 'řád (log₁₀)'], R.map(([l, v]) => [l, f(v), `<div style="height:12px;background:var(--accent);width:${Math.max(2, Math.min(100, Math.log10(Math.max(v, 1.01)) / mx * 100))}%"></div>`]))
        + WG.note('Délka sloupce odpovídá řádu (log₁₀ hodnoty): log n a n rostou pomalu, 2<sup>n</sup> a n! se od určitého n vymknou kontrole – takové algoritmy jsou prakticky nepoužitelné.');
    }
  }));

  // ---------- masky a logické instrukce ----------
  const GOAL = { zero: { l: 'vynulovat bity 0, 2, 5', r: '10110111', m: '01011011', op: 'AND' }, set: { l: 'nastavit bity 1 a 4 na 1', r: '00010011', m: '01001000', op: 'OR' }, neg: { l: 'znegovat bity 4–7', r: '11000101', m: '00001111', op: 'XOR' } };
  WG.reg('masky', root => WG.app(root, {
    state: { r: '10110111', m: '01011011', op: 'AND' },
    top: ui => `${WG.lbl('Cíl:')}${Object.entries(GOAL).map(([k, g]) => WG.btn('g', g.l, false, `data-k="${k}"`)).join('')}${WG.lbl('operace OP M, R:')}${['AND', 'OR', 'XOR'].map(o => WG.btn('op', o, ui.op === o, `data-o="${o}"`)).join('')}`,
    act: (ui, a, d) => {
      if (a === 'g') Object.assign(ui, GOAL[d.k]);
      if (a === 'op') ui.op = d.o;
      if (a === 'r') ui.r = ui.r.slice(0, +d.i) + (ui.r[+d.i] === '1' ? '0' : '1') + ui.r.slice(+d.i + 1);
      if (a === 'm') ui.m = ui.m.slice(0, +d.i) + (ui.m[+d.i] === '1' ? '0' : '1') + ui.m.slice(+d.i + 1);
      if (a === 'use') ui.r = ui.res;
    },
    view: ui => {
      const f = { AND: (a, b) => a & b, OR: (a, b) => a | b, XOR: (a, b) => a ^ b }[ui.op];
      ui.res = [...ui.r].map((c, i) => f(+c, +ui.m[i])).join('');
      const row = (k, l, v) => `<tr><th>${l}</th>${[...v].map((c, i) => `<td>${k ? `<button class="qw-b ${c === '1' ? 'on' : ''}" data-act="${k}" data-i="${i}">${c}</button>` : `<b class="${ui.res[i] !== ui.r[i] ? 'hi' : ''}">${c}</b>`}</td>`).join('')}</tr>`;
      const why = { AND: 'x ∧ 0 = 0, x ∧ 1 = x → maska s nulami vynuluje vybrané bity', OR: 'x ∨ 1 = 1, x ∨ 0 = x → maska s jedničkami nastaví vybrané bity na 1', XOR: 'x ⊕ 1 = ¬x, x ⊕ 0 = x → maska s jedničkami znegujevybrané bity' }[ui.op].replace('znegujevybrané', 'znegují vybrané');
      return `<div class="qw-cv"><table><tr><th>bit č.</th>${[...Array(8)].map((_, i) => `<th>${i}</th>`).join('')}</tr>${row('r', 'R (původní)', ui.r)}${row('m', 'maska M', ui.m)}${row('', `${ui.op} M, R → R`, ui.res)}</table></div>
        <div class="qw-row" style="margin-top:8px">${WG.btn('use', 'výsledek jako nové R')}<span class="mu">bity se číslují zleva od nuly; klikem přepneš bit v R nebo v masce</span></div>${WG.note(why)}`;
    }
  }));

  // ---------- způsoby adresace ----------
  WG.reg('adresace', root => WG.app(root, {
    state: { a: 'direct', ind: 1 },
    top: ui => `${WG.lbl('Adresace:')}${[['imm', 'bezprostřední'], ['direct', 'přímá'], ['indirect', 'nepřímá'], ['index', 's posuvem']].map(([k, l]) => WG.btn('a', l, ui.a === k, `data-k="${k}"`)).join('')}${ui.a === 'index' ? `${WG.lbl('IND =')}${WG.sel('ind', [0, 1, 2].map(i => [i, i]), ui.ind)}` : ''}`,
    act: (ui, a, d) => { if (a === 'a') { ui.a = d.k; ui.step = 0; } },
    input: ui => { ui.step = 0; ui.ind = +ui.ind; },
    steps: ui => {
      const MEM = { 100: 102, 101: 40, 102: 101 }, X = 100, mem = (hi, ptr) => WG.tbl(['adresa', 'obsah'], Object.entries(MEM).map(([a, v]) => ({ cls: +a === hi ? 'cur' : '', cells: [a, v] })));
      const S = [{ title: `Zadání: X = ${X}`, what: 'Operand instrukce je X = 100. Paměť: adresa 100 → 102, adresa 101 → 40, adresa 102 → 101. Výsledek se uloží do střadače S.', why: 'Způsob adresace říká, jak se z pole operandu stane skutečná hodnota.', change: '–', view: mem(0) }];
      if (ui.a === 'imm') S.push({ title: 'Bezprostřední adresace: X → S', what: `Hodnota je přímo v instrukci, nic se nečte z paměti. S = <b>${X}</b>.`, why: 'Nejrychlejší, ale hodnota je pevná součást instrukce.', change: `S = ${X}`, view: mem(0) });
      if (ui.a === 'direct') S.push({ title: 'Přímá adresace: ⟨X⟩ → S', what: `X je adresa; přečteme obsah paměti na adrese ${X}: <b>${MEM[X]}</b>.`, why: 'Jedno čtení paměti.', change: `S = ${MEM[X]}`, view: mem(X) });
      if (ui.a === 'indirect') { S.push({ title: `Nepřímá adresace: 1. čtení ⟨${X}⟩`, what: `Na adrese ${X} je číslo ${MEM[X]} – to ale ještě není operand, je to adresa operandu.`, why: 'U nepřímé adresace je v paměti teprve adresa.', change: `adresa operandu = ${MEM[X]}`, view: mem(X) }); S.push({ title: `2. čtení ⟨${MEM[X]}⟩`, what: `Na adrese ${MEM[X]} je operand <b>${MEM[MEM[X]]}</b>.`, why: 'Dvě čtení paměti: ⟨⟨X⟩⟩.', change: `S = ${MEM[MEM[X]]}`, view: mem(MEM[X]) }); }
      if (ui.a === 'index') { const ad = X + ui.ind; S.push({ title: `S posuvem: adresa = X + ⟨R⟩ = ${X} + ${ui.ind} = ${ad}`, what: `K obsahu indexového registru (IND = ${ui.ind}) přičteme X a dostaneme adresu ${ad}.`, why: 'Hodí se pro procházení polí: X je počátek, registr mění posuv.', change: `adresa = ${ad}`, view: mem(ad) }); S.push({ title: `Čtení ⟨${ad}⟩`, what: MEM[ad] !== undefined ? `Obsah adresy ${ad} je <b>${MEM[ad]}</b>.` : `Na adrese ${ad} paměť v tomto příkladu nic neukazuje (ukázková paměť má adresy 100–102).`, why: 'Jedno čtení paměti po výpočtu adresy.', change: MEM[ad] !== undefined ? `S = ${MEM[ad]}` : 'mimo ukázkovou paměť', view: mem(ad) }); }
      return S;
    }
  }));
})();
