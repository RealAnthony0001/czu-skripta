// Diagramy předmětu B-UPP (SVG, skládané přes helpery DG z assets/dg.js)
const UPP = (() => {
  const { svg, text, rect, line, path, box, cells } = DG;

  // 1) mapa převodů mezi soustavami
  const soustavyMap = () => svg(760, 230,
    box(10, 90, 130, 50, 'fE', 'Desítková', 'Z = 10') + box(340, 90, 110, 50, 'fA', 'Dvojková', 'Z = 2') +
    box(610, 15, 140, 50, 'fD', 'Osmičková', 'Z = 8') + box(610, 165, 140, 50, 'fD', 'Šestnáctková', 'Z = 16') +
    line(140, 105, 340, 105, 'ln', 'end') + text(240, 97, 'odečítání mocnin', 'c sm mu') +
    line(340, 125, 140, 125, 'ln', 'end') + text(240, 145, 'rozvoj: součet cifer × mocniny', 'c sm mu') +
    line(450, 100, 610, 45, 'ln', 'both') + text(500, 62, 'po 3 bitech', 'c sm mu') +
    line(450, 130, 610, 185, 'ln', 'both') + text(500, 178, 'po 4 bitech', 'c sm mu') +
    line(680, 65, 680, 165, 'ln ds', 'both') + text(672, 120, 'přes dvojkovou', 'e sm mu'));

  // skupiny bitů zprava: x0,y0 počátek, bits (už doplněné nulami), size = 3|4, pad = počet doplněných nul vlevo, digits = výsledné cifry
  const grouping = (y0, bits, size, pad, digits, title) => {
    const w = 30, gap = 14, x0 = 60, n = bits.length / size;
    let o = text(x0, y0 - 10, title, 'sm mu');
    for (let g = 0; g < n; g++) {
      const gx = x0 + g * (size * w + gap);
      const cls = [...Array(size)].map((_, i) => (g * size + i < pad ? 'pd' : 'b'));
      o += cells(gx, y0, bits.slice(g * size, (g + 1) * size), cls, w);
      o += line(gx + size * w / 2, y0 + 34, gx + size * w / 2, y0 + 52, 'ln', 'end') + box(gx + size * w / 2 - 17, y0 + 54, 34, 30, 'fA', digits[g]);
    }
    return o;
  };
  const groupingDiagram = () => svg(760, 250,
    grouping(30, '000110010101', 4, 3, '195', 'Dvojková → šestnáctková: po čtveřicích zprava, vlevo doplnit nuly (čárkované)') +
    grouping(160, '110010101', 3, 0, '625', 'Dvojková → osmičková: po trojicích zprava'));

  // 3) bit → půlbyte → byte
  const byteDiagram = () => {
    const x0 = 60, w = 50;
    return svg(720, 200,
      path(`M${x0},46 v-8 h${8 * w} v8`) + text(x0 + 4 * w, 28, '1 byte (B) = 8 bitů = 256 stavů', 'c bd') +
      cells(x0, 52, '01000001', ['fD', 'fD', 'fD', 'fD', 'fE', 'fE', 'fE', 'fE'], w, 44) +
      path(`M${x0},106 v8 h${4 * w - 6} v-8`) + path(`M${x0 + 4 * w + 6},106 v8 h${4 * w - 6} v-8`) +
      text(x0 + 2 * w, 134, 'půlbyte (4 bity)', 'c sm mu') + text(x0 + 6 * w, 134, 'půlbyte (4 bity)', 'c sm mu') +
      box(x0 + 2 * w - 20, 146, 40, 34, 'fD', '4') + box(x0 + 6 * w - 20, 146, 40, 34, 'fE', '1') +
      text(x0 + 8 * w + 20, 72, 'jedna hex cifra na půlbyte', 'sm mu') + text(x0 + 8 * w + 20, 100, '= (41)<tspan dy="3" font-size="9">16</tspan><tspan dy="-3"> = 65 = „A“ (ASCII)</tspan>', 'bd'));
  };

  // 4) tautologie / splnitelná / kontradikce
  const setsDiagram = () => svg(720, 260,
    rect(10, 10, 700, 240, 'b') + text(24, 30, 'všechny formule', 'sm mu') +
    `<ellipse cx="250" cy="128" rx="235" ry="88" class="fD"/><ellipse cx="370" cy="133" rx="100" ry="55" class="fA"/><ellipse cx="610" cy="128" rx="85" ry="55" class="fW"/>` +
    text(140, 113, 'splnitelná', 'c bd tD') + text(140, 132, 'aspoň jednou 1', 'c sm') + text(140, 150, 'např. p ∧ q', 'c sm mo') +
    text(370, 126, 'tautologie', 'c bd tA') + text(370, 144, 'vždy 1', 'c sm') + text(370, 162, 'např. p ∨ ¬p', 'c sm mo') +
    text(610, 121, 'kontradikce', 'c bd tW') + text(610, 139, 'vždy 0', 'c sm') + text(610, 157, 'např. p ∧ ¬p', 'c sm mo') +
    text(250, 238, 'tautologie je i splnitelná · kontradikce není splnitelná', 'c sm mu'));

  // 5) logický důsledek jako množinová inkluze
  const consequenceDiagram = () => svg(720, 250,
    `<ellipse cx="360" cy="115" rx="320" ry="100" class="fD"/><ellipse cx="290" cy="120" rx="160" ry="62" class="fA"/>` +
    text(520, 70, 'ohodnocení, kde platí závěr d', 'c bd tD') +
    text(290, 115, 'ohodnocení, kde platí', 'c bd tA') + text(290, 133, 'všechny premisy v1 … vn', 'c bd tA') +
    text(360, 240, 'P ⊨ d ⇔ vnitřní kruh leží celý uvnitř vnějšího (žádný řádek tabulky „premisy 1, d = 0“)', 'c sm mu'));

  // 6) text → číslo → bajty
  const textDiagram = () => {
    const ch = 'AHOJ', xs = i => 200 + i * 125;
    let o = text(10, 40, 'znak', 'bd') + text(10, 117, 'kód (číslo)', 'bd') + text(10, 192, 'uloženo v paměti', 'bd') +
      text(10, 80, '↓ kódovací tabulka', 'sm mu') + text(10, 155, '↓ převod do dvojkové', 'sm mu');
    [...ch].forEach((c, i) => {
      const v = c.charCodeAt(0);
      o += box(xs(i), 15, 105, 40, 'fE', c) + line(xs(i) + 52, 55, xs(i) + 52, 92, 'ln', 'end') + box(xs(i), 95, 105, 40, 'b', String(v)) +
        line(xs(i) + 52, 135, xs(i) + 52, 168, 'ln', 'end') + rect(xs(i), 170, 105, 40, 'fA') + text(xs(i) + 52, 195, v.toString(2).padStart(8, '0'), 'c mo bd');
    });
    return svg(720, 225, o);
  };

  // 7) velikost znaku v UTF-8 / UTF-16 / UTF-32
  const utfDiagram = () => {
    const chars = ['A', 'č', '€', '😀'], rows = [['UTF-8', [1, 2, 3, 4], 'fD'], ['UTF-16', [2, 2, 2, 4], 'fE'], ['UTF-32', [4, 4, 4, 4], 'fA']];
    let o = '';
    chars.forEach((c, i) => { o += text(170 + i * 140 + 45, 30, c, 'c bd'); });
    rows.forEach(([n, v, cls], r) => {
      const y = 50 + r * 50;
      o += text(10, y + 20, n, 'bd');
      v.forEach((k, i) => { for (let j = 0; j < k; j++) o += rect(170 + i * 140 + j * 24, y, 21, 28, cls); });
    });
    return svg(720, 215, o + text(170, 205, 'každý čtvereček = 1 bajt', 'sm mu'));
  };

  // 8) 4bitový doplňkový kód na kruhu
  const wheelDiagram = () => {
    const cx = 220, cy = 215, pt = (k, r) => { const a = (-90 + k * 22.5) * Math.PI / 180; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; };
    let o = `<circle cx="${cx}" cy="${cy}" r="150" class="ln"/>`;
    for (let k = 0; k < 16; k++) {
      const neg = k >= 8, [x, y] = pt(k, 150), [bx, by] = pt(k, 116), [vx, vy] = pt(k, 182);
      o += `<circle cx="${x}" cy="${y}" r="7" class="${neg ? 'fA' : 'fD'}"/>` + text(bx, by + 4, k.toString(2).padStart(4, '0'), 'c mo sm') +
        text(vx, vy + 5, (neg ? '−' + (16 - k) : k) + '', `c bd ${neg ? 'tA' : 'tD'}`);
    }
    const [lx1, ly1] = pt(7.5, 40), [lx2, ly2] = pt(7.5, 200);
    o += line(lx1, ly1, lx2, ly2, 'lW ds') + text(lx2 + 6, 432, 'přeplnění: 7 + 1 = −8', 'sm tW') +
      text(cx, cy - 8, '4 bity', 'c bd') + text(cx, cy + 12, '−8 … +7', 'c sm mu') +
      text(10, 20, 'kladná (0 vpředu)', 'sm tD') + text(10, 38, 'záporná (1 vpředu)', 'sm tA');
    return svg(440, 440, o, 440);
  };

  // 9) aritmetický posun vpravo: −20 div 4
  const shiftDiagram = () => {
    const x0 = 160, w = 36, a = '11101100', r = '11111011';
    let o = text(10, 75, 'X = −20', 'bd') + text(10, 195, 'X div 4 = −5', 'bd') + cells(x0, 50, a, ['b', 'b', 'b', 'b', 'b', 'b', 'fW', 'fW'], w) + cells(x0, 170, r, ['fA', 'fA', 'b', 'b', 'b', 'b', 'b', 'b'], w);
    for (let i = 0; i < 6; i++) o += line(x0 + i * w + 18, 84, x0 + (i + 2) * w + 18, 170, 'ln', 'end');
    o += line(x0 + 18, 84, x0 + 18, 170, 'lA ds', 'end') + line(x0 + 18, 84, x0 + w + 18, 170, 'lA ds', 'end');
    return svg(720, 235, o + text(x0 + 8 * w + 12, 72, '← 2 odsunuté bity = zbytek (mod)', 'sm tW') + text(x0 + 8 * w + 12, 192, '← 2 bity zleva = kopie znaménka', 'sm tA') +
      text(x0 + 8 * w + 12, 132, 'posun o k = 2 míst vpravo', 'sm mu'));
  };

  // 10) IEEE 754 single
  const ieeeDiagram = () => {
    const u = 21.5, x0 = 16, ws = u, we = 8 * u, wm = 23 * u, xe = x0 + ws, xm = xe + we;
    return svg(720, 225,
      text(x0 + ws / 2, 48, '31', 'c sm mu') + text(xe + we / 2, 48, '30 … 23', 'c sm mu') + text(xm + wm / 2, 48, '22 … 0', 'c sm mu') +
      box(x0, 56, ws, 44, 'fW', '±') + box(xe, 56, we, 44, 'fE', 'exponent e′', '8 bitů') + box(xm, 56, wm, 44, 'fD', 'mantisa m′', '23 bitů') +
      text(360, 128, 'příklad −6,5 = −1,101 · 2², e′ = 2 + 127 = 129', 'c sm mu') +
      box(x0, 138, ws, 36, 'b', '1') + box(xe, 138, we, 36, 'b', '10000001') + box(xm, 138, wm, 36, 'b', '101 0000 0000 0000 0000 0000') +
      text(360, 208, 'x = (−1)^s · (1 + m) · 2^(e′ − 127)', 'c bd mo'));
  };

  // 11) krychle Hammingových vzdáleností
  const cubeDiagram = () => {
    const P = (x, y, z) => [200 + 150 * x + 90 * z, 270 - 150 * y - 70 * z], code = new Set(['000', '011', '101', '110']);
    const vs = []; for (let x = 0; x < 2; x++) for (let y = 0; y < 2; y++) for (let z = 0; z < 2; z++) vs.push([x, y, z]);
    let o = '';
    vs.forEach(a => vs.forEach(b => { if (a < b && a.filter((v, i) => v !== b[i]).length === 1) { const [x1, y1] = P(...a), [x2, y2] = P(...b); o += line(x1, y1, x2, y2); } }));
    vs.forEach(v => { const [x, y] = P(...v), k = v.join(''); o += `<circle cx="${x}" cy="${y}" r="19" class="${code.has(k) ? 'fA' : 'b'}"/>` + text(x, y + 4, k, 'c mo sm'); });
    return svg(720, 320, o +
      `<circle cx="520" cy="60" r="9" class="fA"/>` + text(540, 64, 'kódové slovo (sudá parita)', 'sm') + `<circle cx="520" cy="92" r="9" class="b"/>` + text(540, 96, 'není kódové slovo', 'sm') +
      text(510, 140, 'hrana krychle = vzdálenost 1', 'sm mu') + text(510, 160, 'kódová slova leží vždy ≥ 2 hrany', 'sm mu') + text(510, 180, 'od sebe → dmin = 2', 'sm mu') +
      text(510, 212, 'např. d(000, 011) = 2', 'sm mo'));
  };

  // 12) které pozice pokrývá který paritní bit
  const hammingGrid = () => {
    const x0 = 150, w = 70, names = ['p₁', 'p₂', 'd₁', 'p₃', 'd₂', 'd₃', 'd₄'];
    let o = text(10, 40, 'pozice', 'bd') + text(10, 78, 'binárně', 'sm mu') + text(10, 108, 'bit', 'bd');
    names.forEach((n, i) => {
      const p = i + 1;
      o += text(x0 + i * w + w / 2, 40, p, 'c bd') + text(x0 + i * w + w / 2, 78, p.toString(2).padStart(3, '0'), 'c mo sm mu') + box(x0 + i * w + 4, 88, w - 8, 30, n[0] === 'p' ? 'fA' : 'b', n);
    });
    [0, 1, 2].forEach(k => {
      const y = 135 + k * 38;
      o += text(10, y + 23, `p${'₁₂₃'[k]} kontroluje`, 'bd');
      for (let i = 0; i < 7; i++) {
        const hit = ((i + 1) >> k) & 1;
        o += rect(x0 + i * w + 4, y, w - 8, 30, hit ? (i + 1 === 1 << k ? 'fA' : 'fD') : 'pd') + (hit ? text(x0 + i * w + w / 2, y + 20, '●', 'c') : '');
      }
    });
    return svg(720, 280, o + text(360, 272, 'pozice i patří pod p_k, když má její binární zápis jedničku na k-tém místě zprava', 'c sm mu'));
  };

  // 13) von Neumannovo schéma
  const vnDiagram = () => svg(760, 355,
    rect(190, 15, 380, 175, 'b') + text(204, 34, 'PROCESOR', 'sm mu bd') +
    box(210, 50, 130, 120, 'fE', 'Řadič', 'dekóduje, řídí') + rect(420, 50, 130, 120, 'fD') + text(485, 78, 'ALU a registry', 'c bd') +
    text(485, 104, 'IP · RI · S', 'c sm mo') + text(485, 122, 'IND · Flag', 'c sm mo') + text(485, 148, 'počítá', 'c sm mu') +
    line(340, 85, 420, 85, 'ln ds', 'end') + text(380, 78, 'řízení', 'c sm mu') + line(420, 135, 340, 135, 'ln', 'end') + text(380, 152, 'stav', 'c sm mu') +
    box(190, 250, 380, 70, 'fA', 'Operační paměť', 'program + data') + line(380, 190, 380, 250, 'ln', 'both') + text(392, 224, 'instrukce, data', 'sm mu') +
    box(10, 250, 140, 70, 'b', 'Vstupní zařízení') + line(150, 285, 190, 285, 'ln', 'end') +
    box(610, 250, 140, 70, 'b', 'Výstupní zařízení') + line(570, 285, 610, 285, 'ln', 'end') +
    line(20, 345, 60, 345, 'ln', 'end') + text(68, 349, 'datový tok', 'sm mu') + line(170, 345, 210, 345, 'ln ds', 'end') + text(218, 349, 'řídicí signál', 'sm mu'));

  // 14) instrukční cyklus
  const cycleDiagram = () => {
    const col = (x, title, items) => rect(x, 25, 320, 190, 'b') + text(x + 14, 50, title, 'bd tA') + items.map((s, i) => text(x + 14, 78 + i * 26, `${i + 1}. ${s}`, 'sm')).join('');
    return svg(720, 300,
      col(15, 'Výběrová fáze', ['IP → adresní sběrnice, příkaz čtení', 'paměť pošle obsah buňky', 'instrukce se uloží do RI', 'IP = IP + 1']) +
      col(385, 'Prováděcí fáze', ['dekódování instrukce v RI', 'případně + obsah IND k operandu', 'čtení vstupních operandů z HP', 'ALU provede, výsledek → S', 'S → adresa výstupního operandu']) +
      line(335, 120, 385, 120, 'lA', 'end') + path('M545,215 v40 h-370 v-40', 'lA', 'end') + text(360, 278, 'další instrukce – adresu drží IP', 'c sm mu'));
  };

  // 15) způsoby adresace nad paměťovou tabulkou 100→102, 101→40, 102→101
  const addrDiagram = () => {
    const mem = [[100, 102], [101, 40], [102, 101]];
    const panel = (i, name, formula, xTxt, hits, result, extra = '') => {
      const px = 10 + (i % 2) * 360, py = 10 + (i >> 1) * 200, ry = j => py + 52 + j * 36;
      let o = rect(px, py, 340, 185, 'b') + text(px + 12, py + 22, name, 'bd tA') + text(px + 328, py + 22, formula, 'e sm mo mu');
      mem.forEach(([a, c], j) => { const on = hits.includes(j); o += rect(px + 140, ry(j), 40, 30, 'b') + text(px + 160, ry(j) + 20, a, 'c mo sm') + rect(px + 180, ry(j), 60, 30, on ? 'fA' : 'b') + text(px + 210, ry(j) + 20, c, 'c mo bd'); });
      o += box(px + 12, py + 88, 80, 36, 'fE', xTxt) + box(px + 275, py + 88, 55, 36, 'fD', 'S = ' + result);
      if (!hits.length) return o + path(`M${px + 52},${py + 124} V${py + 170} H${px + 302} V${py + 124}`, 'lA', 'end') + text(px + 12, py + 42, 'hodnota je přímo v instrukci, paměť se nečte', 'sm mu');
      o += line(px + 92, py + 106, px + 140, ry(hits[0]) + 15, 'lA', 'end');
      if (hits.length > 1) o += path(`M${px + 240},${ry(hits[0]) + 15} h14 V${ry(hits[1]) + 15} h-14`, 'lA', 'end');
      return o + line(px + 240, ry(hits[hits.length - 1]) + (hits.length > 1 ? 24 : 15), px + 275, py + (hits.length > 1 ? 124 : 106), 'lA', 'end') + extra;
    };
    return svg(720, 410,
      panel(0, 'bezprostřední', 'X → S', 'X = 100', [], '100') + panel(1, 'přímá', '⟨X⟩ → S', 'X = 100', [0], '102') +
      panel(2, 'nepřímá', '⟨⟨X⟩⟩ → S', 'X = 100', [0, 2], '101') +
      panel(3, 'indexová (s posuvem)', '⟨X + ⟨IND⟩⟩ → S', 'X = 100', [1], '40', text(382, 358, 'IND = 1:', 'sm mu') + text(382, 374, '100 + 1 = 101', 'sm mu')));
  };

  return { soustavyMap, groupingDiagram, byteDiagram, setsDiagram, consequenceDiagram, textDiagram, utfDiagram, wheelDiagram, shiftDiagram, ieeeDiagram, cubeDiagram, hammingGrid, vnDiagram, cycleDiagram, addrDiagram };
})();
