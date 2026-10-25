// Widget 'tt': pravdivostní tabulka zadané formule (volitelně druhé formule → ekvivalence a logický důsledek), ÚDNT a ÚKNT.
// Sdílí ho MLG (⇒ ⇔, 1 nahoře) a UPP (→ ↔, 0 nahoře); blok { t: 'widget', name: 'tt', f, g, sym: 'upp', desc: true }.
(() => {
  const OPS = { '¬': 'not', '!': 'not', '~': 'not', '∧': 'and', '&': 'and', '∨': 'or', '|': 'or', '⇒': 'imp', '→': 'imp', '⇔': 'iff', '↔': 'iff', '⊕': 'xor', '↑': 'nand', '↓': 'nor' };
  const PREC = { iff: 1, imp: 2, or: 3, nor: 3, xor: 3, and: 4, nand: 4 };
  const FN = { and: (a, b) => a & b, or: (a, b) => a | b, imp: (a, b) => +(!a || b), iff: (a, b) => +(a === b), xor: (a, b) => a ^ b, nand: (a, b) => 1 - (a & b), nor: (a, b) => 1 - (a | b) };
  const SYM = { not: '¬', and: '∧', or: '∨', xor: '⊕', nand: '↑', nor: '↓' };

  function parse(s) {
    const t = []; for (const ch of s.replace(/<->|<=>/g, '⇔').replace(/->|=>/g, '⇒')) { if (/\s/.test(ch)) continue; if (/[()A-Za-z01]/.test(ch) || OPS[ch]) t.push(ch); else throw Error(`Neznámý znak „${ch}“`); }
    if (!t.length) throw Error('Zadej formuli');
    let i = 0;
    const prim = () => {
      const c = t[i++];
      if (c === undefined) throw Error('Formule je neúplná');
      if (c === '(') { const e = expr(1); if (t[i++] !== ')') throw Error('Chybí zavírací závorka'); return e; }
      if (OPS[c] === 'not') return { op: 'not', a: prim() };
      if (/[A-Za-z]/.test(c)) return { v: c };
      if (c === '0' || c === '1') return { k: +c };
      throw Error(`Neočekávaný znak „${c}“`);
    };
    const expr = min => {
      let l = prim();
      for (;;) { const o = OPS[t[i]]; if (!o || o === 'not' || PREC[o] < min) return l; i++; l = { op: o, a: l, b: expr(o === 'imp' ? PREC[o] : PREC[o] + 1) }; }
    };
    const e = expr(1);
    if (i < t.length) throw Error(t[i] === ')' ? 'Přebývá zavírací závorka' : `Neočekávaný znak „${t[i]}“`);
    return e;
  }
  const vars = (n, s = new Set()) => { if (n.v) s.add(n.v); if (n.a) vars(n.a, s); if (n.b) vars(n.b, s); return s; };
  const ev = (n, env) => n.v ? env[n.v] : n.k !== undefined ? n.k : n.op === 'not' ? 1 - ev(n.a, env) : FN[n.op](ev(n.a, env), ev(n.b, env));
  const show = (n, sym, top = true) => {
    if (n.v) return n.v; if (n.k !== undefined) return String(n.k);
    if (n.op === 'not') return '¬' + show(n.a, sym, false);
    const o = n.op === 'imp' ? sym.imp : n.op === 'iff' ? sym.iff : SYM[n.op], s = `${show(n.a, sym, false)} ${o} ${show(n.b, sym, false)}`;
    return top ? s : `(${s})`;
  };
  const subs = (n, out = []) => { if (n.a) subs(n.a, out); if (n.b) subs(n.b, out); if (n.op) out.push(n); return out; };

  const PRESETS = {
    mlg: ['A ⇒ (¬B ⇒ A)', '(A ⇒ B) ⇔ (¬B ⇒ ¬A)', 'A ∧ ¬A', '¬(A ∧ B) ⇔ (¬A ∨ ¬B)', '(A ∨ ¬B) ∧ C'],
    upp: ['a → (b → a)', '¬(a ∧ b) ↔ (¬a ∨ ¬b)', 'a ∧ ¬a', 'a ⊕ b', '(a ∨ ¬b) ∧ c']
  };

  function mount(root, b) {
    const desc = b.desc ?? b.sym !== 'upp', sym = b.sym === 'upp' ? { imp: '→', iff: '↔' } : { imp: '⇒', iff: '⇔' };
    const pre = b.presets || PRESETS[b.sym === 'upp' ? 'upp' : 'mlg'];
    const lit = (v, x) => (x ? v : '¬' + v);
    const calc = ui => {
      let A, B = null;
      try { A = parse(ui.f); } catch (e) { return { err: 'ϕ: ' + e.message }; }
      if (ui.g.trim()) try { B = parse(ui.g); } catch (e) { return { err: 'ψ: ' + e.message }; }
      const V = [...new Set([...vars(A), ...(B ? vars(B) : [])])].sort();
      if (V.length > 5) return { err: 'Nejvýše 5 proměnných (tabulka by měla přes 32 řádků).' };
      const k = V.length, rows = [];
      for (let r = 0; r < 1 << k; r++) {
        const env = {}; V.forEach((v, j) => { const bit = (r >> (k - 1 - j)) & 1; env[v] = desc ? 1 - bit : bit; });
        rows.push({ env, a: ev(A, env), b: B ? ev(B, env) : null, subs: subs(A).map(n => ev(n, env)) });
      }
      return { A, B, V, rows };
    };
    const ui = WG.app(root, {
      state: { f: b.f || pre[0], g: b.g || '', cur: 'f' },
      top: ui => `${WG.lbl('ϕ =')}${WG.txt('f', ui.f, 'např. A ⇒ (¬B ⇒ A)', 26)} ${WG.lbl('ψ =')}${WG.txt('g', ui.g, 'volitelně 2. formule', 20)}
        <div class="qw-row" style="width:100%">${WG.lbl('Vložit:')}${['¬', '∧', '∨', sym.imp, sym.iff, '⊕', '↑', '↓', '(', ')'].map(s => WG.btn('ins', s, false, `data-s="${s}"`)).join('')}${WG.btn('clr', 'Smazat ψ')}</div>
        <div class="qw-row" style="width:100%">${WG.lbl('Příklady:')}${pre.map((p, i) => WG.btn('pre', p, false, `data-i="${i}"`)).join('')}</div>`,
      act: (ui, a, d) => {
        if (a === 'ins') ui[ui.cur] = (ui[ui.cur] + ' ' + d.s).trim() + ' ';
        if (a === 'pre') { ui.f = pre[+d.i]; ui.g = ''; ui.cur = 'f'; }
        if (a === 'clr') ui.g = '';
      },
      view: ui => {
        const c = calc(ui);
        if (c.err) return WG.note(c.err, 'bad');
        const { A, B, V, rows } = c, sA = subs(A), cols = sA.length > 1 && sA.length <= 7 ? sA : sA.slice(-1);
        const ones = rows.filter(r => r.a).length, n = rows.length;
        const bad = B ? rows.findIndex(r => r.a && !r.b) : -1, badR = B ? rows.findIndex(r => r.b && !r.a) : -1, diff = B ? rows.findIndex(r => r.a !== r.b) : -1;
        const head = [...V, ...cols.map((n, i) => (i === cols.length - 1 ? `<span class="hi">${show(n, sym)}</span>` : show(n, sym))), ...(B ? [`ψ = ${show(B, sym)}`] : [])];
        const body = rows.map((r, i) => {
          const sv = r.subs.slice(sA.length - cols.length);
          return `<tr class="${B && bad === i ? 'no' : ''}">${V.map(v => `<td>${r.env[v]}</td>`).join('')}${sv.map((x, j) => `<td class="${j === sv.length - 1 ? 'hi' : ''}">${x}</td>`).join('')}${B ? `<td>${r.b}</td>` : ''}</tr>`;
        }).join('');
        const kind = ones === n ? '<b>tautologie</b> (ve všech řádcích 1)' : ones === 0 ? '<b>kontradikce</b> (ve všech řádcích 0, nesplnitelná)' : `<b>splnitelná, ale ne tautologie</b> (1 je v ${ones} z ${n} řádků)`;
        const udnt = ones ? rows.filter(r => r.a).map(r => '(' + V.map(v => lit(v, r.env[v])).join(' ∧ ') + ')').join(' ∨ ') : '0 (kontradikce)';
        const uknt = ones < n ? rows.filter(r => !r.a).map(r => '(' + V.map(v => lit(v, 1 - r.env[v])).join(' ∨ ') + ')').join(' ∧ ') : '1 (tautologie)';
        const rowTxt = i => V.map(v => `${v} = ${rows[i].env[v]}`).join(', ');
        const cmp = B ? `${WG.note(diff < 0 ? `ϕ a ψ jsou <b>ekvivalentní</b> (ϕ ≡ ψ) – mají stejný sloupec ve všech řádcích.` : `ϕ a ψ <b>nejsou ekvivalentní</b> – liší se např. v řádku ${rowTxt(diff)}.`, diff < 0 ? 'ok' : 'bad')}
          ${WG.note(`${bad < 0 ? 'ψ <b>je logickým důsledkem</b> ϕ (ϕ ⊨ ψ): kdykoli platí ϕ, platí i ψ.' : `ψ <b>není důsledkem</b> ϕ – protipříklad: ${rowTxt(bad)} (ϕ = 1, ψ = 0).`}<br>${badR < 0 ? 'ϕ <b>je logickým důsledkem</b> ψ (ψ ⊨ ϕ).' : `ϕ <b>není důsledkem</b> ψ – protipříklad: ${rowTxt(badR)}.`}`, bad < 0 ? 'ok' : 'warn')}` : '';
        return `<div class="qw-fm"><span class="lbl">Přečteno jako:</span> <span class="qw-t">${show(A, sym)}</span></div>${WG.tbl(head, [], '').replace('</table>', body + '</table>')}
          ${WG.note(`ϕ je ${kind}.`)}${cmp}
          <div class="qw-kv"><span>ÚDNT</span><span>${udnt}</span><span>ÚKNT</span><span>${uknt}</span></div>`;
      }
    });
    root.addEventListener('focusin', e => { const k = e.target.dataset?.in; if (k === 'f' || k === 'g') ui.cur = k; });
  }
  WG.reg('tt', mount);
})();
