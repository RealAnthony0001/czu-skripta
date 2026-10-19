// Diagramy předmětu MLG (SVG, skládané přes helpery DG z assets/dg.js)
const MLG = (() => {
  const { svg, text, rect, line, path, box, cells } = DG;

  // 1) tautologie / splnitelná / kontradikce
  const vennFormule = () => svg(720, 260,
    rect(10, 10, 700, 240, 'b') + text(24, 30, 'všechny formule', 'sm mu') +
    `<ellipse cx="250" cy="128" rx="235" ry="88" class="fD"/><ellipse cx="350" cy="128" rx="100" ry="52" class="fA"/><ellipse cx="610" cy="128" rx="85" ry="55" class="fW"/>` +
    text(140, 113, 'splnitelná', 'c bd tD') + text(140, 132, 'aspoň jedna 1', 'c sm') + text(140, 150, 'např. A ∧ B', 'c sm mo') +
    text(350, 121, 'tautologie', 'c bd tA') + text(350, 139, 'samé 1', 'c sm') + text(350, 157, 'např. A ∨ ¬A', 'c sm mo') +
    text(610, 121, 'kontradikce', 'c bd tW') + text(610, 139, 'samé 0', 'c sm') + text(610, 157, 'např. A ∧ ¬A', 'c sm mo') +
    text(250, 238, 'tautologie je i splnitelná · kontradikce splnitelná není', 'c sm mu'));

  // 2) logický důsledek = inkluze množin ohodnocení
  const dusledek = () => svg(720, 250,
    `<ellipse cx="360" cy="115" rx="320" ry="100" class="fD"/><ellipse cx="290" cy="120" rx="160" ry="62" class="fA"/>` +
    text(520, 70, 'ohodnocení, kde platí ψ', 'c bd tD') +
    text(290, 115, 'ohodnocení, kde platí ϕ', 'c bd tA') + text(290, 133, '(řádky tabulky s 1 u ϕ)', 'c sm') +
    text(360, 240, 'ϕ ⊨ ψ ⇔ vnitřní kruh leží celý uvnitř vnějšího – žádný řádek „ϕ = 1, ψ = 0“', 'c sm mu'));

  // 3) postup převodu do DNT
  const dntPostup = () => {
    const w = 165, g = 25, y = 30, h = 90, steps = [
      ['① odstranit ⇒, ⇔', 'A⇒B → ¬A ∨ B', 'fE'], ['② zatáhnout negace', 'De Morgan, ¬¬A → A', 'fA'],
      ['③ roznásobit', 'A∧(B∨C) → AB ∨ AC', 'fD'], ['④ zjednodušit', 'A∧¬A → 0, A∨A → A', 'fW']];
    return svg(760, 160, steps.map(([a, b, c], i) => box(10 + i * (w + g), y, w, h, c, a, b) + (i < 3 ? line(10 + i * (w + g) + w, y + h / 2, 10 + (i + 1) * (w + g), y + h / 2, 'ln', 'end') : '')).join('') +
      text(380, 148, 'výsledek: disjunkce konjunkcí literálů (DNT)', 'c sm mu'));
  };

  // 4) od tabulky k ÚDNT: A B ϕ: 11→1, 10→1, 01→0, 00→1
  const tabulkaUdnt = () => {
    const rows = [['1', '1', '1'], ['1', '0', '1'], ['0', '1', '0'], ['0', '0', '1']], terms = ['A ∧ B', 'A ∧ ¬B', '', '¬A ∧ ¬B'], x0 = 40, y0 = 50, h = 40;
    let o = ['A', 'B', 'ϕ'].map((s, i) => text(x0 + i * 40 + 20, y0 - 10, s, 'c bd mu')).join('');
    rows.forEach((r, j) => {
      const on = r[2] === '1', y = y0 + j * h;
      o += cells(x0, y, r.join(''), [on ? 'b' : 'pd', on ? 'b' : 'pd', on ? 'fA' : 'pd'], 40, 34);
      if (on) o += line(x0 + 125, y + 17, 270, y + 17, 'lA', 'end') + box(275, y, 150, 34, 'fD', terms[j]);
      else o += text(285, y + 22, 'řádek s 0 se vynechá', 'sm mu');
    });
    return svg(720, 230, o + text(460, 44, 'spoj všechny disjunkcí', 'sm mu') + path('M430,67 h16 V167 h-16', 'ln') + text(458, 125, '∨  =  ÚDNT', 'bd tA') + text(150, 220, '1 → proměnná, 0 → její negace', 'c sm mu'));
  };

  // 7) pravidla negace
  const negace = () => {
    const rows = [['¬(A ∧ B)', '¬A ∨ ¬B'], ['¬(A ∨ B)', '¬A ∧ ¬B'], ['¬(A ⇒ B)', 'A ∧ ¬B'], ['¬(∀x) φ(x)', '(∃x) ¬φ(x)'], ['¬(∃x) φ(x)', '(∀x) ¬φ(x)']];
    return svg(720, 280, rows.map(([a, b], i) => { const y = 14 + i * 52, q = i > 2; return box(40, y, 270, 38, q ? 'fE' : 'fD', a) + line(310, y + 19, 410, y + 19, 'ln', 'both') + text(360, y + 13, '≡', 'c bd') + box(410, y, 270, 38, q ? 'fE' : 'fD', b); }).join(''));
  };

  return { vennFormule, dusledek, dntPostup, tabulkaUdnt, negace };
})();
