// Diagramy předmětu MLG (SVG, skládané přes helpery DG z assets/dg.js)
const MLG = (() => {
  const { svg, text, rect, line, path, box, cells } = DG;

  // 0) stavba formule (A ∧ ¬B) ⇒ (C ∨ A) jako strom
  const formuleStrom = () => {
    const n = (x, y, s, c) => box(x - 30, y, 60, 34, c, s), e = (x1, y1, x2, y2) => line(x1, y1 + 34, x2, y2, 'ln');
    return svg(720, 295,
      e(360, 20, 200, 90) + e(360, 20, 520, 90) + e(200, 90, 130, 160) + e(200, 90, 270, 160) + e(270, 160, 270, 220) + e(520, 90, 450, 160) + e(520, 90, 590, 160) +
      n(360, 20, '⇒', 'fA') + n(200, 90, '∧', 'fD') + n(520, 90, '∨', 'fD') + n(130, 160, 'A', 'b') + n(270, 160, '¬', 'fW') + n(270, 220, 'B', 'b') + n(450, 160, 'C', 'b') + n(590, 160, 'A', 'b') +
      text(40, 40, 'kořen = hlavní spojka', 'sm mu') + text(40, 58, '(vyhodnotí se jako poslední)', 'sm mu') + text(650, 238, 'listy = proměnné', 'e sm mu') +
      text(10, 285, '(A ∧ ¬B) ⇒ (C ∨ A) – formule se skládá zdola nahoru, hodnota se počítá od listů ke kořeni', 'sm mu'));
  };

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

  // ===== množiny, relace, grafy, automaty =====
  const circ = (x, y, r, cls = 'b') => `<circle cx="${x}" cy="${y}" r="${r}" class="${cls}"/>`;
  // graf: V = { id: [x, y, třída?, popisek?] }, E = [[a, b, váha, { cls, bend, lo, at, dir }]] (lo = odsazení popisku, at = poloha popisku 0–1); dir = šipky; r = poloměr vrcholu
  const graf = (V, E, { dir = false, r = 15 } = {}) => {
    const ed = E.map(([a, b, w = '', o = {}]) => {
      const [x1, y1] = V[a], [x2, y2] = V[b], cls = o.cls || 'ln', bend = o.bend || 0, d = o.dir ?? dir;
      const L = Math.hypot(x2 - x1, y2 - y1), nx = -(y2 - y1) / L, ny = (x2 - x1) / L;
      const cx = (x1 + x2) / 2 + nx * bend * 2, cy = (y1 + y2) / 2 + ny * bend * 2;
      const cut = (x, y, tx, ty, k) => { const l = Math.hypot(tx - x, ty - y); return [x + (tx - x) / l * k, y + (ty - y) / l * k]; };
      const [sx, sy] = cut(x1, y1, cx, cy, r), [ex, ey] = cut(x2, y2, cx, cy, r + (d ? 2 : 0));
      const lo = o.lo ?? 11, at = o.at ?? 0.5, lx = x1 + (x2 - x1) * at + nx * (bend + lo), ly = y1 + (y2 - y1) * at + ny * (bend + lo) + 4;
      return path(bend ? `M${sx},${sy} Q${cx},${cy} ${ex},${ey}` : `M${sx},${sy} L${ex},${ey}`, cls, d ? 'end' : '') + (w !== '' ? text(lx.toFixed(1), ly.toFixed(1), w, 'c sm bd' + (cls === 'lA' ? ' tA' : '')) : '');
    }).join('');
    return ed + Object.entries(V).map(([id, [x, y, c = 'b', lb = id]]) => circ(x, y, r, c) + text(x, y + 5, lb, 'c bd')).join('');
  };
  // smyčka nad/pod vrcholem (ang ve stupních, 0 = nahoru), s popiskem
  const loop = (x, y, w = '', ang = 0, r = 15, cls = 'ln') => {
    const a = (ang - 90) * Math.PI / 180, p = d => [x + Math.cos(a + d) * r, y + Math.sin(a + d) * r], q = d => [x + Math.cos(a + d) * (r + 30), y + Math.sin(a + d) * (r + 30)];
    const [s1, s2] = p(-0.45), [e1, e2] = p(0.45), [c1, c2] = q(-0.6), [d1, d2] = q(0.6), [t1, t2] = [x + Math.cos(a) * (r + 34), y + Math.sin(a) * (r + 34)];
    return path(`M${s1},${s2} C${c1},${c2} ${d1},${d2} ${e1},${e2}`, cls, 'end') + (w ? text(t1.toFixed(1), (t2 + 4).toFixed(1), w, 'c sm bd') : '');
  };

  // 9) tři množiny s počty v oblastech (restaurace: polévka, hlavní jídlo, zákusek)
  const venn3 = (names = ['polévka', 'hlavní jídlo', 'zákusek'], n = { A: 3, B: 5, C: 1, AB: 4, AC: 0, BC: 3, ABC: 10, O: 2 }) => {
    const P = { A: [290, 105], B: [400, 105], C: [345, 190] }, R = 82, at = (x, y, v, c = '') => text(x, y, v, 'c bd ' + c);
    return svg(720, 300, rect(150, 10, 420, 280, 'pd') + text(560, 30, 'U', 'e sm mu') +
      `<circle cx="290" cy="105" r="${R}" class="fD" style="fill-opacity:.35"/><circle cx="400" cy="105" r="${R}" class="fA" style="fill-opacity:.35"/><circle cx="345" cy="190" r="${R}" class="fW" style="fill-opacity:.35"/>` +
      text(215, 40, names[0], 'c bd tD') + text(478, 40, names[1], 'c bd tA') + text(345, 285, names[2], 'c bd tW') +
      at(250, 95, n.A) + at(440, 95, n.B) + at(345, 240, n.C) + at(345, 80, n.AB) + at(295, 170, n.AC) + at(395, 170, n.BC) + at(345, 138, n.ABC, 'tA') + at(185, 260, n.O) +
      text(600, 120, 'čti zevnitř ven:', 'sm mu') + text(600, 140, '1. průnik všech tří', 'sm mu') + text(600, 158, '2. dvojice bez třetí', 'sm mu') + text(600, 176, '3. „jen jedna“', 'sm mu') + text(600, 194, '4. mimo všechny', 'sm mu'));
  };

  // 10) číselné obory do sebe vnořené
  const ciselneObory = () => {
    const L = [['ℂ komplexní', 'i, 2 − 3i', 'fE'], ['ℝ reálné', '√2, π  (iracionální 𝕀 = ℝ ∖ ℚ)', 'fW'], ['ℚ racionální', '½, −0,25', 'fD'], ['ℤ celá', '−3, −1', 'fA'], ['ℕ přirozená', '0, 1, 2, 3, …', 'b']];
    return svg(720, 270, L.map(([h, x, c], i) => rect(10 + i * 40, 10 + i * 34, 700 - i * 80, 220 - i * 44, c) + text(22 + i * 40, 32 + i * 34, h, 'bd') + text(698 - i * 40, 32 + i * 34, x, 'e sm mo')).join('') +
      text(360, 258, 'ℕ ⊊ ℤ ⊊ ℚ ⊊ ℝ ⊊ ℂ   (0 patří do ℕ)', 'c sm mu'));
  };

  // 11) komplexní číslo v Gaussově rovině
  const komplexniRovina = () => {
    const o = [300, 150], k = 22, P = (a, b) => [o[0] + a * k, o[1] - b * k], [x1, y1] = P(4, -3), [x2, y2] = P(3 * Math.sqrt(3), 3);
    return svg(720, 290, line(60, 150, 560, 150, 'ln', 'end') + line(300, 280, 300, 12, 'ln', 'end') + text(565, 155, 'Re', 'sm mu') + text(308, 20, 'Im', 'sm mu') +
      line(x1, 150, x1, y1, 'ds ln') + line(300, y1, x1, y1, 'ds ln') + line(300, 150, x1, y1, 'lD') + circ(x1, y1, 5, 'fD') + text(x1 + 10, y1 + 18, 'z = 4 − 3i', 'bd tD') + text(330, 200, '|z| = 5', 'e sm tD') +
      text(x1, 168, '4', 'c sm') + text(292, y1 + 4, '−3', 'e sm') +
      line(300, 150, x2, y2, 'lA') + circ(x2, y2, 5, 'fA') + text(x2 + 10, y2 - 6, 'w = 3√3 + 3i = 6(cos π/6 + i sin π/6)', 'bd tA') + path('M345,150 A45,45 0 0,0 339,127', 'lA') + text(352, 146, 'φ = π/6', 'sm tA') +
      text(610, 220, '|a + bi| = √(a² + b²)', 'c sm mo') + text(610, 240, 'i² = −1', 'c sm mo'));
  };

  // 12) vlastnosti relací na třech prvcích
  const relaceVlastnosti = () => {
    const tri = x0 => ({ 1: [x0 + 30, 140], 2: [x0 + 140, 140], 3: [x0 + 85, 60] });
    const p = (i, name, E, loops = []) => { const V = tri(10 + i * 180); return graf(V, E, { dir: true }) + loops.map(v => loop(V[v][0], V[v][1], '', v === '3' ? 0 : 180)).join('') + text(95 + i * 180, 200, name, 'c bd'); };
    return svg(730, 215,
      p(0, 'reflexivní', [['1', '2']], ['1', '2', '3']) + text(95, 20, 'u každého prvku smyčka', 'c sm mu') +
      p(1, 'symetrická', [['1', '2', '', { bend: 6 }], ['2', '1', '', { bend: 6 }], ['2', '3', '', { bend: 6 }], ['3', '2', '', { bend: 6 }]]) + text(275, 20, 'každá šipka i zpět', 'c sm mu') +
      p(2, 'antisymetrická', [['1', '2'], ['2', '3'], ['3', '1']]) + text(455, 20, 'nikdy obě šipky mezi různými', 'c sm mu') +
      p(3, 'tranzitivní', [['1', '2'], ['2', '3'], ['1', '3', '', { cls: 'lA' }]]) + text(635, 20, 'a→b, b→c  ⇒  a→c', 'c sm mu'));
  };

  // 14) Hasseho diagram (jídla) – menší dole, nakreslené jen bezprostřední následnosti
  const hasseJidla = () => {
    const N = { HK: [360, 250, 'Hrachová kaše'], SM: [220, 180, 'Šišky s mákem'], S: [500, 180, 'Segedín'], JK: [110, 105, 'Jahodové knedlíky'], R: [360, 105, 'Rajská'], RBS: [360, 30, 'Řízek s br. salátem'] };
    const E = [['HK', 'SM'], ['HK', 'S'], ['SM', 'JK'], ['SM', 'R'], ['S', 'R'], ['R', 'RBS']];
    return svg(720, 280, E.map(([a, b]) => line(N[a][0], N[a][1] - 14, N[b][0], N[b][1] + 14, 'ln')).join('') +
      Object.values(N).map(([x, y, s]) => box(x - 78, y - 14, 156, 28, 'b', s)).join('') +
      text(620, 60, 'nahoře „největší“', 'c sm mu') + text(620, 255, 'dole „nejmenší“', 'c sm mu') + line(620, 235, 620, 75, 'ds ln', 'end'));
  };

  // 15) zobrazení: není zobrazení / prosté / na / bijekce
  const zobrazeniTypy = () => {
    const p = (i, name, A, B, M, c) => {
      const x0 = 12 + i * 180, ya = k => 70 + k * 40 - (A.length - 3) * 20, yb = k => 70 + k * 40 - (B.length - 3) * 20;
      return `<ellipse cx="${x0 + 35}" cy="110" rx="24" ry="${A.length * 18 + 4}" class="pd"/><ellipse cx="${x0 + 135}" cy="110" rx="24" ry="${B.length * 18 + 4}" class="pd"/>` +
        M.map(([a, b]) => line(x0 + 45, ya(a), x0 + 125, yb(b), c, 'end')).join('') +
        A.map((s, k) => text(x0 + 35, ya(k) + 5, s, 'c bd')).join('') + B.map((s, k) => text(x0 + 135, yb(k) + 5, s, 'c bd')).join('') +
        text(x0 + 85, 200, name, 'c bd') + text(x0 + 35, 26, 'A', 'c sm mu') + text(x0 + 135, 26, 'B', 'c sm mu');
    };
    return svg(730, 240,
      p(0, 'není zobrazení', ['a', 'b', 'c'], ['1', '2', '3'], [[0, 0], [0, 1], [1, 2]], 'lW') + text(97, 222, 'a má dva obrazy', 'c sm mu') +
      p(1, 'prosté, ne na', ['a', 'b', 'c'], ['1', '2', '3', '4'], [[0, 0], [1, 1], [2, 3]], 'lD') + text(277, 222, 'na 3 nic nevede', 'c sm mu') +
      p(2, 'na, ne prosté', ['a', 'b', 'c'], ['1', '2'], [[0, 0], [1, 0], [2, 1]], 'lD') + text(457, 222, 'a, b mají stejný obraz', 'c sm mu') +
      p(3, 'bijekce', ['a', 'b', 'c'], ['1', '2', '3'], [[0, 1], [1, 2], [2, 0]], 'lA') + text(637, 222, 'prosté i na: páry 1 : 1', 'c sm mu'));
  };

  // 16) sled, tah, cesta (graf z přednášky: a b c / d e f)
  const sledTahCesta = () => {
    const E0 = [['a', 'b', 'e1'], ['b', 'c', 'e2'], ['a', 'd', 'e3'], ['b', 'e', 'e4'], ['c', 'f', 'e5'], ['d', 'e', 'e6'], ['e', 'f', 'e7']];
    const p = (i, name, hl, seq, note) => {
      const x0 = 30 + i * 240, V = { a: [x0, 40], b: [x0 + 80, 40], c: [x0 + 160, 40], d: [x0, 130], e: [x0 + 80, 130], f: [x0 + 160, 130] };
      return graf(V, E0.map(([a, b, w]) => [a, b, w, { cls: hl.includes(w) ? 'lA' : 'ln', lo: a === 'a' && b === 'd' || a === 'c' ? -12 : 11 }]), { r: 13 }) +
        text(x0 + 80, 185, name, 'c bd') + text(x0 + 80, 205, seq, 'c sm mo') + text(x0 + 80, 223, note, 'c sm mu');
    };
    return svg(730, 235, p(0, 'sled', ['e1', 'e4', 'e2'], 'a b e b c', 'opakuje hranu e4 i vrchol b') + p(1, 'tah', ['e1', 'e2', 'e5', 'e7', 'e4'], 'a b c f e b', 'hrany různé, vrchol b 2×') + p(2, 'cesta', ['e3', 'e6', 'e4', 'e2', 'e5'], 'a d e b c f', 'ani vrcholy se neopakují'));
  };

  // 18) domeček s křížem – otevřený Eulerovský tah (čísla = pořadí hran)
  const eulerDomecek = () => {
    const V = { A: [240, 230, 'fA'], B: [400, 230, 'fA'], C: [400, 110, 'b'], D: [240, 110, 'b'], E: [320, 30, 'b'] };
    const tah = [['A', 'D'], ['D', 'E'], ['E', 'C'], ['C', 'D'], ['D', 'B'], ['B', 'C'], ['C', 'A'], ['A', 'B']];
    return svg(720, 270, graf(V, tah.map(([a, b], i) => [a, b, String(i + 1), { cls: 'lD', at: a + b === 'DB' || a + b === 'CA' ? 0.25 : 0.5 }]), { r: 15 }) +
      text(240, 262, 'deg 3 (start)', 'c sm tA') + text(400, 262, 'deg 3 (konec)', 'c sm tA') + text(180, 115, 'deg 4', 'e sm mu') + text(460, 115, 'deg 4', 'sm mu') + text(345, 26, 'deg 2', 'sm mu') +
      text(560, 150, 'právě 2 liché vrcholy', 'c sm bd') + text(560, 170, '→ otevřený tah z jednoho do druhého', 'c sm mu'));
  };

  // 19) kostry K4: 16 koster, dva typy
  const kostryK4 = () => {
    const sq = x0 => ({ 1: [x0, 40], 2: [x0 + 100, 40], 3: [x0 + 100, 140], 4: [x0, 140] });
    const all = [['1', '2'], ['2', '3'], ['3', '4'], ['4', '1'], ['1', '3'], ['2', '4']];
    return svg(720, 210, graf(sq(40), all) + text(90, 190, 'K₄ (6 hran)', 'c bd') +
      graf(sq(290), all.map(e => [...e, '', { cls: e.includes('1') ? 'lA' : 'ds ln' }])) + text(340, 190, 'hvězda – 4 kostry', 'c bd tA') +
      graf(sq(540), all.map(e => [...e, '', { cls: ['12', '23', '34'].includes(e.join('')) ? 'lD' : 'ds ln' }])) + text(590, 190, 'cesta – 12 koster', 'c bd tD'));
  };

  // ohodnocený graf ze slajdu Dijkstrova algoritmu (mřížka 3 × 3)
  const GV = { f: [70, 40], g: [210, 40], h: [350, 40], c: [70, 150], d: [210, 150], e: [350, 150], s: [70, 260], a: [210, 260], b: [350, 260] };
  const GE = [['f', 'g', 3], ['g', 'h', 4], ['f', 'c', 1], ['c', 'g', 7], ['g', 'd', 8], ['d', 'h', 11], ['h', 'e', 10], ['c', 'd', 2], ['d', 'e', 3], ['c', 's', 8], ['s', 'd', 5], ['d', 'a', 2], ['a', 'e', 6], ['e', 'b', 3], ['s', 'a', 2], ['a', 'b', 9]];

  const lo = ([a, b]) => (['cg', 'dh', 'sd', 'ae'].includes(a + b) ? -12 : ['fc', 'cs', 'ge', 'he', 'gd', 'da', 'eb', 'hd'].includes(a + b) ? -11 : 11);

  // 22) strom výrazu a tři notace
  const EXPR = ['+', ['·', ['x'], ['+', ['x'], ['2']]], [':', ['−', ['x'], ['3']], ['5']]]; // x · (x + 2) + (x − 3) : 5

  // 23) rovinné a nerovinné grafy
  const rovinne = () => {
    const pent = (cx, i) => [cx + 70 * Math.sin(i * 2 * Math.PI / 5), 115 - 70 * Math.cos(i * 2 * Math.PI / 5)];
    const K5 = Object.fromEntries([0, 1, 2, 3, 4].map(i => [i, [...pent(370, i).map(v => +v.toFixed(1)), 'fW', '']]));
    const K33 = { a: [540, 50, 'fD', ''], b: [610, 50, 'fD', ''], c: [680, 50, 'fD', ''], x: [540, 180, 'fE', ''], y: [610, 180, 'fE', ''], z: [680, 180, 'fE', ''] };
    return svg(730, 240,
      graf({ 1: [120, 40, 'b', ''], 2: [40, 180, 'b', ''], 3: [200, 180, 'b', ''], 4: [120, 130, 'b', ''] }, [['1', '2'], ['2', '3'], ['3', '1'], ['4', '1'], ['4', '2'], ['4', '3']], { r: 9 }) + text(120, 225, 'K₄ – rovinný (bez křížení)', 'c bd') +
      graf(K5, [0, 1, 2, 3, 4].flatMap(i => [0, 1, 2, 3, 4].filter(j => j > i).map(j => [i, j])), { r: 9 }) + text(370, 225, 'K₅ – nerovinný', 'c bd tW') +
      graf(K33, ['a', 'b', 'c'].flatMap(u => ['x', 'y', 'z'].map(v => [u, v])), { r: 9 }) + text(610, 225, 'K₃,₃ – nerovinný', 'c bd tD'));
  };

  // 24) maximální tok (tok/kapacita) a minimální řez
  const TOK = { V: { S: [60, 150, 'fA'], B: [230, 60], A: [230, 240], D: [480, 60], C: [480, 240], T: [650, 150, 'fA'] },
    E: [['S', 'B', 4, { lo: -12 }], ['S', 'A', 7], ['B', 'D', 2], ['B', 'C', 4, { at: 0.25 }], ['A', 'D', 2, { at: 0.7 }], ['A', 'C', 3, { lo: -12 }], ['D', 'T', 2], ['C', 'T', 8, { lo: -12 }]],
    paths: ['SBDT', 'SBCT', 'SACT', 'SADBCT'] }; // cesty zvětšování z řešeného příkladu

  // 25) kritická cesta projektu (ze slajdu Sítě a projekty)
  const KC = { V: { S: [40, 160], B: [170, 95], C: [170, 225], D: [320, 30], E: [320, 160], F: [320, 290], G: [470, 95], H: [470, 225], T: [610, 160] },
    E: [['S', 'D', 10, -26, -12], ['S', 'B', 4], ['S', 'C', 4, 0, -12], ['S', 'F', 19, 26], ['B', 'D', 7], ['B', 'C', 6, 0, -10], ['B', 'E', 12], ['D', 'E', 3, 0, -10], ['D', 'G', 9], ['D', 'T', 21, -26, -12], ['C', 'E', 5, 0, -12],
      ['C', 'F', 5], ['E', 'G', 5, 0, -12], ['E', 'H', 13], ['E', 'F', 3, 0, -10], ['G', 'H', 7, 0, -10], ['G', 'T', 11], ['F', 'H', 12, 0, -12], ['F', 'T', 21, 26], ['H', 'T', 18, 0, -12]] };

  // 27) minimální automat po faktorizaci (příklad ze slajdu)
  const automatMin = () => svg(720, 300,
    graf({ I: [130, 150, 'b', '1,2'], II: [330, 55, 'fA', '3'], III: [330, 225, 'b', '4,5'], IV: [560, 150, 'fA', '6'] },
      [['I', 'II', 'b'], ['II', 'IV', 'a'], ['II', 'III', 'b', { at: 0.3, lo: -10 }], ['III', 'I', 'a'], ['IV', 'I', 'b', { at: 0.25, lo: -12 }]], { dir: true, r: 22 }) +
    circ(330, 55, 27, 'pd') + circ(560, 150, 27, 'pd') + line(50, 150, 106, 150, 'ln', 'end') + loop(130, 150, 'a', 0, 22) + loop(330, 225, 'b', 180, 22) + loop(560, 150, 'a', 0, 22) +
    text(650, 260, 'stavy 1 ∼ 2 a 4 ∼ 5', 'c sm mu') + text(650, 280, 'se sloučily → 4 stavy', 'c sm mu'));

  // 20) podgraf, faktor a kostra téhož grafu
  const podgrafy = () => {
    const P = [[85, 50], [150, 105], [120, 180], [50, 180], [20, 105]], E = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [1, 3]];
    const panel = (i, title, sub, vs, es) => {
      const ox = 8 + i * 182, V = Object.fromEntries(P.map(([x, y], k) => [k, [ox + x, y + 20, vs.includes(k) ? 'b' : 'pd', 'abcde'[k]]]));
      return graf(V, E.map(([a, b], j) => [a, b, '', { cls: !es ? 'ln' : es.includes(j) ? 'lA' : 'ds ln' }]), { r: 13 }) + text(ox + 85, 16, title, 'c bd') + sub.map((t, k) => text(ox + 85, 232 + k * 16, t, 'c sm mu')).join('');
    };
    const all = [0, 1, 2, 3, 4];
    return svg(740, 275, panel(0, 'graf G', ['5 vrcholů, 6 hran'], all, null) + panel(1, 'podgraf', ['vynecháme vrchol e', 'i jeho hrany'], [0, 1, 2, 3], [0, 1, 2, 5]) +
      panel(2, 'faktor', ['všechny vrcholy, jen hrany', 'ab, cd, de (nesouvislý)'], all, [0, 2, 3]) + panel(3, 'kostra', ['všechny vrcholy, strom:', '4 = n − 1 hran'], all, [0, 1, 2, 3]), 740);
  };

  // 8) množinové operace – čtyři Vennovy diagramy
  const mnozinoveOperace = () => {
    const C = (cx, r = 42) => `M${cx - r},80 a${r},${r} 0 1,0 ${2 * r},0 a${r},${r} 0 1,0 ${-2 * r},0`;
    const panel = (i, name, fill) => {
      const x0 = 10 + i * 180, a = x0 + 65, b = x0 + 115, id = 'mo' + i;
      return `<clipPath id="${id}a"><path d="${C(a)}"/></clipPath><clipPath id="${id}b"><path d="${C(b)}"/></clipPath>` + rect(x0, 20, 170, 120, 'pd') +
        fill(a, b, id, x0) + path(C(a), 'ln') + path(C(b), 'ln') + text(a - 18, 52, 'A', 'c bd') + text(b + 18, 52, 'B', 'c bd') + text(x0 + 160, 36, 'U', 'e sm mu') + text(x0 + 85, 165, name, 'c bd');
    };
    return svg(730, 180,
      panel(0, 'A ∩ B  průnik', (a, b, id) => `<path d="${C(b)}" class="fA" clip-path="url(#${id}a)"/>`) +
      panel(1, 'A ∪ B  sjednocení', (a, b) => `<path d="${C(a)} ${C(b)}" class="fA" fill-rule="nonzero"/>`) +
      panel(2, 'A ∖ B  rozdíl', (a, b, id) => `<path d="${C(a)} ${C(b)}" class="fA" fill-rule="evenodd" clip-path="url(#${id}a)"/>`) +
      panel(3, 'A′  doplněk v U', (a, b, id, x0) => `<path d="M${x0},20 h170 v120 h-170z ${C(a)}" class="fA" fill-rule="evenodd"/>`));
  };

  // 13) třídy ekvivalence (Dana, Karel, Petra, Hana, Radim, Vladimír)
  const tridyEkvivalence = () => svg(720, 190,
    rect(30, 30, 200, 120, 'pd') + rect(260, 30, 280, 120, 'pd') + rect(570, 30, 120, 120, 'pd') +
    graf({ D: [80, 110, 'fD'], H: [180, 110, 'fD'], K: [300, 120, 'fA'], P: [400, 70, 'fA'], R: [500, 120, 'fA'], V: [630, 95, 'fW'] }, [['D', 'H'], ['K', 'P'], ['P', 'R'], ['K', 'R']], { r: 17 }) +
    text(130, 52, '{Dana, Hana}', 'c sm bd') + text(400, 140, '{Karel, Petra, Radim}', 'c sm bd') + text(630, 52, '{Vladimír}', 'c sm bd') +
    text(360, 180, 'čára = dvojice v obou směrech; smyčky (reflexivitu) nekreslíme · třídy se nepřekrývají a pokryjí celou množinu', 'c sm mu'));

  // 17) Havlova–Hakimiho redukce skóre (5,4,3,3,3,2)
  const skoreRedukce = (d0 = [5, 4, 3, 3, 3, 2]) => {
    let d = [...d0], o = '', y = 14;
    for (let s = 0; ; s++) {
      d.sort((a, b) => b - a);
      const k = d[0], cls = d.map((_, i) => (i === 0 && k > 0 ? 'fA' : i <= k && k > 0 ? 'fD' : 'b'));
      o += text(20, y + 22, s ? `${s}.` : 'skóre', 'sm mu') + cells(80, y, d.join(''), cls, 36, 30) + (k > 0 ? text(80 + d.length * 36 + 16, y + 20, `odeber ${k}, dalším ${k} odečti 1`, 'sm mu') : text(80 + d.length * 36 + 16, y + 20, d.every(x => x === 0) ? '✓ samé nuly → graf existuje' : '✗ graf neexistuje', 'sm bd tA'));
      if (k === 0 || d.some(x => x < 0)) break;
      d = d.slice(1).map((x, i) => (i < k ? x - 1 : x)); y += 40;
    }
    return svg(720, y + 46, o);
  };

  const kruskal = E => { const p = {}, f = x => (p[x] ?? x) === x ? x : (p[x] = f(p[x])), T = []; [...E].sort((a, b) => a[2] - b[2]).forEach(e => { const a = f(e[0]), b = f(e[1]); if (a !== b) { p[a] = b; T.push(e); } }); return T; };

  const dijkstra = (E, s) => { const V = [...new Set(E.flatMap(e => [e[0], e[1]]))], d = Object.fromEntries(V.map(v => [v, Infinity])), pr = {}, done = []; d[s] = 0;
    while (done.length < V.length) { const u = V.filter(v => !done.includes(v)).reduce((m, v) => (d[v] < d[m] ? v : m)); done.push(u);
      E.forEach(([a, b, w]) => { const v = a === u ? b : b === u ? a : null; if (v && !done.includes(v) && d[u] + w < d[v]) { d[v] = d[u] + w; pr[v] = u; } }); }
    return { d, pr, done }; };

  // 20) minimální kostra (Kruskal)
  const kostraKruskal = () => {
    const T = kruskal(GE), on = e => T.includes(e);
    return svg(720, 300, graf(GV, GE.map(e => [e[0], e[1], e[2], { cls: on(e) ? 'lA' : 'ds ln', lo: lo(e) }])) +
      text(430, 30, 'Kruskal: hrany od nejlehčí', 'bd') + T.map((e, i) => text(430, 54 + i * 21, `${i + 1}. ${e[0]}–${e[1]}  (${e[2]})`, 'sm mo')).join('') +
      text(430, 54 + T.length * 21 + 8, `součet = ${T.reduce((s, e) => s + e[2], 0)}, hran ${T.length} = n − 1`, 'bd tA') + text(430, 54 + T.length * 21 + 28, 'další hrany by uzavřely kružnici', 'sm mu'));
  };

  // 21) Dijkstra ze s: vzdálenosti u vrcholů + strom nejkratších cest
  const dijkstraStrom = () => {
    const { d, pr, done } = dijkstra(GE, 's'), on = ([a, b]) => pr[a] === b || pr[b] === a;
    const V = Object.fromEntries(Object.entries(GV).map(([k, [x, y]]) => [k, [x, y, k === 's' ? 'fA' : 'fD']]));
    return svg(720, 300, graf(V, GE.map(e => [e[0], e[1], e[2], { cls: on(e) ? 'lA' : 'ds ln', lo: lo(e) }])) +
      Object.entries(GV).map(([k, [x, y]]) => text(x - 18, y - 14, d[k], 'e sm bd tA')).join('') +
      text(430, 30, 'pořadí uzavírání vrcholů', 'bd') + done.map((v, i) => text(430, 54 + i * 21, `${i + 1}. ${v}   vzdálenost ${d[v]}${pr[v] ? `, přes ${pr[v]}` : ''}`, 'sm mo')).join('') +
      text(430, 54 + done.length * 21 + 10, 'červeně: strom nejkratších cest', 'sm tA'));
  };

  // 22) strom výrazu a tři notace
  const vyrazStrom = () => {
    const T = ['+', ['·', ['x'], ['+', ['x'], ['2']]], [':', ['−', ['x'], ['3']], ['5']]];
    const pre = t => [t[0], ...(t[1] ? [pre(t[1]), pre(t[2])] : [])].join(' '), post = t => [...(t[1] ? [post(t[1]), post(t[2])] : []), t[0]].join(' ');
    let o = '';
    const draw = (t, x, y, dx) => { if (t[1]) { [[t[1], x - dx], [t[2], x + dx]].forEach(([c, cx]) => { o += line(x, y + 14, cx, y + 56, 'ln'); draw(c, cx, y + 70, dx / 2); }); } o += circ(x, y, 14, t[1] ? 'fD' : 'b') + text(x, y + 5, t[0], 'c bd'); };
    draw(T, 190, 30, 100);
    return svg(720, 260, o + text(420, 40, 'infix (inorder)', 'sm mu') + text(420, 60, 'x · (x + 2) + (x − 3) : 5', 'mo') + text(420, 95, 'prefix (preorder): uzel, levý, pravý', 'sm mu') + text(420, 115, pre(T), 'mo tA') +
      text(420, 150, 'postfix (postorder): levý, pravý, uzel', 'sm mu') + text(420, 170, post(T), 'mo tD') + text(420, 210, 'infix potřebuje závorky, prefix a postfix ne', 'sm mu'));
  };

  // 24) maximální tok (tok/kapacita) a minimální řez
  const tokSit = () => {
    const V = { S: [60, 150, 'fA'], B: [230, 60], A: [230, 240], D: [480, 60], C: [480, 240], T: [650, 150, 'fA'] };
    const cut = ['SB', 'AD', 'AC'];
    const E = [['S', 'B', '4/4', { lo: -12 }], ['S', 'A', '5/7'], ['B', 'D', '0/2'], ['B', 'C', '4/4', { at: 0.25 }], ['A', 'D', '2/2', { at: 0.7 }], ['A', 'C', '3/3', { lo: -12 }], ['D', 'T', '2/2'], ['C', 'T', '7/8', { lo: -12 }]]
      .map(([a, b, w, o = {}]) => [a, b, w, { ...o, cls: cut.includes(a + b) ? 'lA' : 'ln' }]);
    return svg(720, 300, path('M150,20 C180,130 330,150 330,290', 'lW ds') + text(140, 290, 'minimální řez {S, A}', 'sm bd tW') +
      graf(V, E, { dir: true, r: 16 }) + text(360, 20, 'popisek hrany = tok / kapacita', 'c sm mu') + text(600, 290, '|f| = 4 + 5 = 9', 'c bd tA'));
  };

  // 25) kritická cesta projektu (ze slajdu Sítě a projekty)
  const kritickaCesta = () => {
    const V = { S: [40, 160], B: [170, 95], C: [170, 225], D: [320, 30], E: [320, 160], F: [320, 290], G: [470, 95], H: [470, 225], T: [610, 160] };
    const E = [['S', 'D', 10, -26, -12], ['S', 'B', 4], ['S', 'C', 4, 0, -12], ['S', 'F', 19, 26], ['B', 'D', 7], ['B', 'C', 6, 0, -10], ['B', 'E', 12], ['D', 'E', 3, 0, -10], ['D', 'G', 9], ['D', 'T', 21, -26, -12], ['C', 'E', 5, 0, -12],
      ['C', 'F', 5], ['E', 'G', 5, 0, -12], ['E', 'H', 13], ['E', 'F', 3, 0, -10], ['G', 'H', 7, 0, -10], ['G', 'T', 11], ['F', 'H', 12, 0, -12], ['F', 'T', 21, 26], ['H', 'T', 18, 0, -12]];
    const t = { S: 0 };
    for (let k = 0; k < 9; k++) E.forEach(([a, b, w]) => { if (t[a] !== undefined) t[b] = Math.max(t[b] ?? 0, t[a] + w); });
    const crit = ([a, b, w]) => { const back = { T: 0 }; for (let k = 0; k < 9; k++) E.forEach(([x, y, z]) => { if (back[y] !== undefined) back[x] = Math.max(back[x] ?? 0, back[y] + z); }); return t[a] + w + back[b] === t.T; };
    const VV = Object.fromEntries(Object.entries(V).map(([k, [x, y]]) => [k, [x, y, 'b']]));
    return svg(720, 360, graf(VV, E.map(e => [e[0], e[1], e[2], { cls: crit(e) ? 'lA' : 'ln', bend: e[3] || 0, lo: e[4] }]), { dir: true }) +
      text(360, 345, 'nejdřívější začátky (nejdelší cesta ze S): ' + Object.keys(V).map(k => `${k} ${t[k]}`).join(' · '), 'c sm tD') + text(700, 310, `kritická délka ${t.T}`, 'e bd tA'));
  };

  // 26) konečný automat: lichý počet a (Σ = {a, b})
  const automatLiche = () => svg(720, 290, graf({ 1: [170, 110], 2: [430, 110, 'fA'], 3: [300, 230] },
    [['1', '2', 'a', { bend: 18 }], ['2', '1', 'a', { bend: 18 }], ['1', '3', 'b'], ['2', '3', 'b', { lo: -12 }]], { dir: true, r: 20 }) +
    circ(430, 110, 25, 'pd') + line(100, 110, 148, 110, 'ln', 'end') + text(96, 104, 'start', 'e sm mu') + loop(300, 230, 'a, b', 180, 20) +
    text(560, 100, 'stav 2 = přijímající', 'c sm tA') + text(560, 120, '(dvojitý kruh)', 'c sm mu') + text(560, 230, 'stav 3 = „past“', 'c sm mu'));

  // 28) obarvení grafu: příklady s nejmenším počtem barev
  const barveniPriklady = () => {
    const ring = (n, r, cx, cy) => Array.from({ length: n }, (_, i) => [cx + r * Math.sin(2 * Math.PI * i / n), cy - r * Math.cos(2 * Math.PI * i / n)]);
    const panel = (cx, title, sub, pts, edges, cols) => graf(Object.fromEntries(pts.map(([x, y], i) => [i, [x, y, cols[i], String(i + 1)]])), edges.map(e => [e[0], e[1], '', { cls: 'ln' }]), { r: 14 }) + text(cx, 24, title, 'c bd') + text(cx, 232, sub, 'c sm mu');
    const c5 = ring(5, 62, 130, 120), k4 = ring(4, 62, 380, 120), k33 = [[560, 70], [560, 120], [560, 170], [680, 70], [680, 120], [680, 170]];
    return svg(740, 250, panel(130, 'C₅: χ = 3', 'lichá kružnice – dvě barvy nestačí', c5, [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]], ['fA', 'fD', 'fA', 'fD', 'fW']) +
      panel(380, 'K₄: χ = 4', 'každý vrchol sousedí se všemi', k4, [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]], ['fA', 'fD', 'fW', 'fE']) +
      panel(620, 'K₃,₃: χ = 2', 'dvě skupiny – barva podle skupiny', k33, [0, 1, 2].flatMap(a => [3, 4, 5].map(c => [a, c])), ['fA', 'fA', 'fA', 'fD', 'fD', 'fD']), 740);
  };

  return { formuleStrom, vennFormule, dusledek, dntPostup, tabulkaUdnt, negace,
    graf, circ, loop, GV, GE, lo, TOK, KC, EXPR, venn3, ciselneObory, komplexniRovina, relaceVlastnosti, hasseJidla, zobrazeniTypy, podgrafy,
    sledTahCesta, eulerDomecek, kostryK4, rovinne, automatMin, mnozinoveOperace, tridyEkvivalence, skoreRedukce, kostraKruskal, dijkstraStrom, vyrazStrom, tokSit, kritickaCesta, automatLiche, barveniPriklady };
})();
