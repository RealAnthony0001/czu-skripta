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

  // 16) vrstvy: uživatel – aplikace – OS – ovladač – hardware
  const osLayersDiagram = () => {
    const bx = 130, bw = 300, layers = [['Uživatel', 'b', ''], ['Aplikace', 'fE', 'textový editor, prohlížeč, hra …'], ['Operační systém', 'fA', 'procesor · paměť · soubory · procesy · bezpečnost'], ['Ovladač zařízení', 'fW', 'driver / firmware'], ['Hardware', 'fD', 'procesor, paměť, disky, periferie']];
    const names = ['uživatelské rozhraní', 'aplikační rozhraní (API)', 'ovladače zařízení', ''];
    let o = '';
    layers.forEach(([t, c, s], i) => {
      const y = 12 + i * 70;
      o += box(bx, y, bw, 44, c, t, s);
      if (i < 4) o += line(bx + bw / 2, y + 44, bx + bw / 2, y + 70, 'ln', 'both') + (names[i] ? text(bx + bw / 2 + 14, y + 61, names[i], 'sm mu') : '');
    });
    return svg(720, 350, o + path(`M${bx + bw + 14},${12 + 70 + 3} h8 v${44 + 70 * 2 - 6 - 2} h-8`, 'ln') + text(bx + bw + 34, 12 + 70 + 70 + 24, 'vše mezi aplikací a hardwarem zajišťuje OS', 'sm mu'));
  };

  // 17) stavy procesu
  const procStatesDiagram = () => svg(720, 290,
    rect(160, 40, 400, 230, 'pd') + text(172, 60, 'spuštěné uživatelské procesy', 'sm mu') +
    box(10, 120, 100, 44, 'b', 'nový') +
    box(190, 90, 130, 44, 'fW', 'připraven', 'čeká na procesor') + box(400, 90, 130, 44, 'fA', 'probíhající', 'má procesor') +
    box(600, 90, 110, 44, 'b', 'ukončen') +
    box(190, 200, 130, 50, 'fD', 'čekající', 'na zdroj / událost') + box(400, 200, 130, 50, 'fE', 'zablokován', 'pozastaven (zmrazen)') +
    line(110, 142, 190, 120, 'ln', 'end') + line(320, 104, 400, 104, 'lA', 'end') + line(400, 122, 320, 122, 'lA', 'end') +
    line(530, 112, 600, 112, 'ln', 'end') +
    line(430, 134, 320, 214, 'lD', 'end') + line(250, 200, 250, 134, 'lD', 'end') +
    line(500, 134, 500, 200, 'lW', 'end') + line(400, 236, 300, 134, 'lW', 'end') +
    text(360, 80, 'přidělení procesoru', 'c sm mu') + text(360, 138, 'odebrání', 'c sm mu') + text(256, 172, 'zdroj uvolněn', 'sm mu'));

  // 18) uváznutí
  const deadlockDiagram = () => svg(720, 250,
    box(110, 15, 120, 44, 'fD', 'proces P1') + box(490, 15, 120, 44, 'fD', 'proces P2') +
    box(110, 180, 120, 44, 'fA', 'zdroj A') + box(490, 180, 120, 44, 'fA', 'zdroj B') +
    line(170, 180, 170, 59, 'lA', 'end') + text(160, 125, 'drží', 'e sm mu') +
    line(550, 180, 550, 59, 'lA', 'end') + text(540, 125, 'drží', 'e sm mu') +
    line(230, 40, 490, 196, 'lW ds', 'end') + text(292, 66, 'P1 chce B', 'sm tW') +
    line(490, 40, 230, 196, 'lW ds', 'end') + text(428, 66, 'P2 chce A', 'e sm tW') +
    text(360, 242, 'oba čekají (přerušované šipky) → cyklické čekání, žádný proces nepokračuje', 'c sm mu'));

  // 19) sekvence, selekce, iterace (vývojový diagram)
  const controlDiagram = () => {
    const dia = (cx, cy, w, h, label) => path(`M${cx},${cy - h / 2} L${cx + w / 2},${cy} L${cx},${cy + h / 2} L${cx - w / 2},${cy} Z`, 'fW') + text(cx, cy + 4, label, 'c sm');
    const merge = (cx, cy) => `<circle cx="${cx}" cy="${cy}" r="6" class="b"/>`;
    // sekvence
    const seq = text(105, 24, 'sekvence', 'c bd tA') + box(45, 40, 120, 34, 'fA', 'Akce 1') + box(45, 100, 120, 34, 'fA', 'Akce 2') + box(45, 160, 120, 34, 'fA', 'Akce 3') +
      line(105, 74, 105, 100, 'ln', 'end') + line(105, 134, 105, 160, 'ln', 'end');
    // selekce
    const sel = text(360, 24, 'selekce', 'c bd tA') + dia(360, 62, 120, 50, 'podmínka') +
      box(255, 120, 90, 34, 'fA', 'Akce 1') + box(375, 120, 90, 34, 'fA', 'Akce 2') +
      path('M300,62 H280 V120', 'ln', 'end') + text(275, 56, 'ano', 'e sm mu') + path('M420,62 H440 V120', 'ln', 'end') + text(445, 56, 'ne', 'sm mu') +
      path('M300,154 V185 H354', 'ln') + path('M420,154 V185 H366', 'ln') + merge(360, 185) + line(360, 191, 360, 215, 'ln', 'end');
    // iterace
    const it = text(615, 24, 'iterace', 'c bd tA') + merge(615, 48) + line(615, 54, 615, 70, 'ln', 'end') + dia(615, 100, 130, 50, 'podmínka') +
      line(615, 125, 615, 150, 'ln', 'end') + text(623, 143, 'ano', 'sm mu') + box(565, 150, 100, 34, 'fA', 'Akce') +
      path('M565,167 H520 V48 H609', 'ln', 'end') + path('M680,100 H710', 'ln', 'end') + text(698, 92, 'ne', 'c sm mu');
    return svg(720, 230, seq + sel + it);
  };

  // 20) postupné použití masek na 8bitovém registru
  const maskDiagram = () => {
    const steps = [['A', '01010101', null, 'výchozí obsah'], ['OR M,A', '11010101', '11000000', 'nastavit bity 0, 1'], ['AND N,A', '11000101', '11001111', 'nulovat bity 2, 3'], ['XOR O,A', '11001010', '00001111', 'negovat bity 4–7']];
    let o = text(190, 22, 'maska', 'c sm mu') + text(450, 22, 'obsah A po operaci', 'c sm mu');
    steps.forEach(([lab, res, mask, note], i) => {
      const y = 36 + i * 54, prev = i ? steps[i - 1][1] : res;
      o += text(10, y + 22, lab, 'bd mo') + (mask ? cells(100, y, mask, [...mask].map(b => (b === '1' ? 'fW' : 'b')), 22, 34) : '') +
        (mask ? line(284, y + 17, 330, y + 17, 'ln', 'end') : '') +
        cells(340, y, res, [...res].map((b, k) => (i && b !== prev[k] ? 'fA' : 'b')), 28, 34) + text(576, y + 22, note, 'sm mu');
    });
    return svg(720, 262, o + text(360, 252, 'zvýrazněné bity se změnily · OR = nastavit 1 · AND = nulovat · XOR = negovat', 'c sm mu'));
  };

  // 21) čtvercová matice 5×5 s diagonálami
  const matrixDiagram = () => {
    const N = 5, w = 46, x0 = 70, y0 = 46;
    let o = text(x0 + N * w / 2, 20, 'J (sloupec)', 'c sm mu') + text(30, y0 + N * w / 2, 'I', 'c sm mu');
    for (let i = 1; i <= N; i++) {
      o += text(x0 - 12, y0 + (i - 1) * w + w / 2 + 5, i, 'e sm mu') + text(x0 + (i - 1) * w + w / 2, y0 - 6, i, 'c sm mu');
      for (let j = 1; j <= N; j++) {
        const hd = i === j, vd = i === N - j + 1, cls = hd && vd ? 'fW' : hd ? 'fA' : vd ? 'fD' : 'b';
        o += rect(x0 + (j - 1) * w, y0 + (i - 1) * w, w, w, cls) + text(x0 + (j - 1) * w + w / 2, y0 + (i - 1) * w + w / 2 + 5, `a${i}${j}`, 'c sm mo');
      }
    }
    const tx = x0 + N * w + 30;
    return svg(720, 300, o +
      rect(tx, 56, 14, 14, 'fA') + text(tx + 22, 68, 'hlavní diagonála: I = J', 'sm') + text(tx + 22, 86, 'nad ní I < J (vpravo nahoře)', 'sm mu') + text(tx + 22, 102, 'pod ní I > J (vlevo dole)', 'sm mu') +
      rect(tx, 132, 14, 14, 'fD') + text(tx + 22, 144, 'vedlejší diagonála: I = N − J + 1', 'sm') + text(tx + 22, 162, 'nad ní I < N − J + 1 (vlevo nahoře)', 'sm mu') + text(tx + 22, 178, 'pod ní I > N − J + 1 (vpravo dole)', 'sm mu') +
      rect(tx, 206, 14, 14, 'fW') + text(tx + 22, 218, 'průsečík (jen pro liché N)', 'sm') + text(tx, 262, 'N = 5, prvek a_ij: i = řádek, j = sloupec', 'sm mu'));
  };

  // 22) ukazatel U → 102 → −33
  const pointerDiagram = () => svg(720, 200,
    text(70, 26, 'adresa', 'c sm mu') + text(150, 26, 'obsah', 'c sm mu') +
    rect(30, 36, 80, 40, 'b') + text(70, 62, '239', 'c mo bd') + rect(110, 36, 80, 40, 'fA') + text(150, 62, '102', 'c mo bd') + text(245, 62, 'U (ukazatel na int)', 'sm') +
    rect(30, 116, 80, 40, 'b') + text(70, 142, '102', 'c mo bd') + rect(110, 116, 80, 40, 'fD') + text(150, 142, '−33', 'c mo bd') + text(245, 142, 'hodnota typu int', 'sm') +
    path('M190,56 H222 V136 H196', 'lA', 'end') +
    text(470, 62, 'U → 102 → −33', 'bd mo') + text(470, 92, 'U  =  adresa (102)', 'sm') + text(470, 112, '*U  =  hodnota na adrese (−33)', 'sm') + text(470, 132, 'NULL = ukazatel nikam neukazuje', 'sm mu') + text(470, 172, 'U = new int;  *U = −33;  delete U;', 'sm mo mu'));

  // 23) jednosměrný seznam a vložení za aktuální
  const listDiagram = () => {
    const xs = [60, 190, 320, 450], nodeAt = (x, y, cls = 'fA', lab = ['Info', 'Dalsi']) => rect(x, y, 70, 38, cls) + rect(x + 70, y, 34, 38, cls) + text(x + 35, y + 24, lab[0], 'c sm') + text(x + 87, y + 24, '', 'c sm');
    let o = '';
    xs.forEach((x, i) => { o += nodeAt(x, 70) + (i < 3 ? line(x + 87, 89, xs[i + 1], 89, i === 1 ? 'ln ds' : 'ln', 'end') : ''); });
    o += line(xs[3] + 87, 89, 590, 89, 'ln', 'end') + box(590, 71, 60, 36, 'b', 'NULL') +
      box(10, 8, 80, 30, 'fD', 'Seznam') + line(50, 38, 100, 70, 'lD', 'end') +
      box(220, 8, 80, 30, 'fW', 'Aktual') + line(260, 38, 260, 70, 'lW', 'end');
    // nový prvek
    o += nodeAt(235, 180, 'fE') + text(270, 236, 'Novy', 'c bd tE') +
      line(322, 199, 345, 108, 'lA', 'end') + text(348, 160, '① Novy→Dalsi = Aktual→Dalsi', 'sm tA') +
      line(277, 108, 270, 180, 'lA', 'end') + text(60, 160, '② Aktual→Dalsi = Novy', 'sm tA') +
      text(300, 62, 'původní odkaz', 'sm mu');
    return svg(720, 250, o);
  };

  // 24) zásobník (LIFO) a fronta (FIFO)
  const stackQueueDiagram = () => {
    let o = text(120, 16, 'Zásobník – LIFO', 'c bd tA') + text(540, 16, 'Fronta – FIFO', 'c bd tA');
    const items = ['P3', 'P2', 'P1'];
    for (let k = 0; k < 5; k++) {
      const y = 60 + k * 38, full = k >= 2;
      o += rect(70, y, 100, 34, full ? 'fA' : 'pd') + (full ? text(120, y + 22, items[k - 2], 'c mo bd') : '');
    }
    o += text(180, 244, 'dno', 'sm mu') + line(228, 114, 174, 114, 'lD', 'end') + text(234, 118, 'SP → první volná položka', 'sm tD') +
      line(95, 30, 95, 58, 'lW', 'end') + text(88, 48, 'PUSH', 'e sm tW') + line(145, 58, 145, 30, 'lW', 'end') + text(152, 48, 'POP', 'sm tW');
    for (let k = 0; k < 6; k++) {
      const x = 380 + k * 56, full = k < 4;
      o += rect(x, 100, 52, 40, full ? 'fE' : 'pd') + (full ? text(x + 26, 125, 'P' + (k + 1), 'c mo bd') : '');
    }
    o += line(406, 80, 406, 98, 'lD', 'end') + text(406, 72, 'začátek (ZF)', 'c sm tD') + line(574, 80, 574, 98, 'lD', 'end') + text(574, 72, 'konec (KF)', 'c sm tD') +
      line(406, 144, 406, 176, 'lW', 'end') + text(406, 194, 'vyjmutí', 'c sm tW') +
      line(630, 176, 630, 144, 'lW', 'end') + text(630, 194, 'vložení', 'c sm tW');
    return svg(720, 262, o);
  };

  // 25) klasické, proudové a superskalární zpracování 6 instrukcí
  const pipelineDiagram = () => {
    const ph = [['výběr', 'fA'], ['dekód. 1', 'fE'], ['dekód. 2', 'fW'], ['provedení', 'fD'], ['uložení', 'b']];
    const cw = 20, x0 = 80, rh = 12;
    let o = ph.map(([n, c], i) => rect(80 + i * 130, 6, 14, 14, c) + text(100 + i * 130, 18, n, 'sm')).join('');
    const model = (title, y, start, total) => {
      let g = text(10, y + 10, title, 'sm bd tA');
      for (let i = 0; i < 6; i++) {
        g += text(x0 - 6, y + 26 + i * (rh + 1) + 10, 'i' + (i + 1), 'e sm mu');
        ph.forEach(([, c], p) => { g += rect(x0 + (start(i) + p) * cw, y + 26 + i * (rh + 1), cw - 1, rh, c); });
      }
      return g;
    };
    return svg(720, 372, o + model('klasicky: 6 · 5 = 30 cyklů', 36, i => 5 * i, 30) + model('pipeline: 6 + 4 = 10 cyklů', 150, i => i, 10) + model('superskalární (2 najednou): 3 + 4 = 7 cyklů', 264, i => i >> 1, 7));
  };

  // 26) sběrnicová architektura osobního počítače
  const busDiagram = () => {
    const bottom = ['PCI / PCIe sloty', 'USB, FireWire', 'HDD, CD / DVD', 'zvuk, síť, modem', 'BIOS (ROM)'];
    let o = box(290, 8, 140, 42, 'fA', 'Procesor (CPU)', 'L1 cache') + line(360, 50, 360, 92, 'lA', 'both') + text(372, 76, 'procesorová sběrnice', 'sm tA') +
      box(265, 92, 190, 52, 'fE', 'Severní můstek', 'paměťový řadič') +
      box(15, 92, 150, 52, 'fD', 'Operační paměť', 'DRAM') + line(165, 118, 265, 118, 'ln', 'both') + text(215, 108, 'paměťová', 'c sm mu') + text(215, 136, 'sběrnice', 'c sm mu') +
      box(555, 92, 150, 52, 'fD', 'Grafická karta', 'AGP / PCI Express') + line(455, 118, 555, 118, 'ln', 'both') + text(505, 110, 'AGP / PCIe', 'c sm mu') +
      line(360, 144, 360, 184, 'ln', 'both') + text(372, 168, 'sběrnice mezi můstky', 'sm mu') +
      box(265, 184, 190, 52, 'fW', 'Jižní můstek', 'pomalejší periferie') + line(360, 236, 360, 262, 'ln') + line(75, 262, 645, 262, 'ln');
    bottom.forEach((t, i) => { const cx = 75 + i * 142.5; o += line(cx, 262, cx, 280, 'ln', 'end') + box(cx - 62, 280, 124, 40, 'b', t); });
    return svg(720, 332, o);
  };

  // 27) aditivní RGB a subtraktivní CMY
  const colorDiagram = () => {
    const circ = (cx, cy, c, bl) => `<circle cx="${cx}" cy="${cy}" r="52" style="fill:${c};mix-blend-mode:${bl}"/>`;
    return svg(720, 250,
      `<rect x="20" y="20" width="320" height="200" rx="8" style="fill:#000"/>` +
      circ(150, 100, '#ff0000', 'screen') + circ(210, 100, '#00ff00', 'screen') + circ(180, 150, '#0000ff', 'screen') +
      `<text x="132" y="86" style="fill:#fff;font-weight:700;text-anchor:middle">R</text><text x="228" y="86" style="fill:#000;font-weight:700;text-anchor:middle">G</text><text x="180" y="176" style="fill:#fff;font-weight:700;text-anchor:middle">B</text>` +
      `<text x="180" y="124" style="fill:#000;font-weight:700;text-anchor:middle">bílá</text>` +
      text(260, 40, 'RGB – aditivní', 'sm') + text(320, 214, 'světlo', 'e sm mu') +
      `<rect x="380" y="20" width="320" height="200" rx="8" style="fill:#fff"/>` +
      circ(510, 100, '#00ffff', 'multiply') + circ(570, 100, '#ff00ff', 'multiply') + circ(540, 150, '#ffff00', 'multiply') +
      `<text x="492" y="86" style="fill:#000;font-weight:700;text-anchor:middle">C</text><text x="588" y="86" style="fill:#000;font-weight:700;text-anchor:middle">M</text><text x="540" y="180" style="fill:#000;font-weight:700;text-anchor:middle">Y</text>` +
      `<text x="540" y="124" style="fill:#fff;font-weight:700;text-anchor:middle">≈ černá</text>` +
      `<text x="640" y="40" style="fill:#000;font-size:11px;text-anchor:middle">CMY – subtraktivní</text><text x="690" y="214" style="fill:#555;font-size:11px;text-anchor:end">pigment</text>`);
  };

  // 28) topologie sítě
  const topologyDiagram = () => {
    const pc = (x, y) => box(x, y, 40, 28, 'b', 'PC');
    let bus = text(110, 22, 'sběrnice', 'c bd tA') + line(20, 100, 200, 100, 'lA') + rect(14, 92, 8, 16, 'fW') + rect(198, 92, 8, 16, 'fW') + text(110, 196, 'terminátory na obou koncích (žlutě)', 'c sm mu');
    [40, 90, 140].forEach(x => { bus += line(x + 20, 72, x + 20, 128, 'ln') + pc(x, 44) + pc(x, 128); });
    const nodes = [[320, 40], [400, 40], [255, 100], [425, 100], [320, 160], [400, 160]];
    const star = text(360, 22, 'hvězda', 'c bd tA') + nodes.map(([x, y]) => line(360, 114, x + 20, y + 14, 'ln')).join('') + box(305, 94, 110, 40, 'fE', 'switch / hub') + nodes.map(([x, y]) => pc(x, y)).join('');
    const tree = text(580, 22, 'strom', 'c bd tA') + box(540, 40, 80, 30, 'fE', 'switch') +
      [[520, 112], [640, 112]].map(([x, y]) => line(580, 70, x + 20, y, 'ln') + box(x - 20, y, 80, 30, 'fE', 'switch') + [[x - 30, 180], [x + 30, 180]].map(([px, py]) => line(x + 20, y + 30, px + 20, py, 'ln') + pc(px, py)).join('')).join('');
    return svg(720, 220, bus + star + tree);
  };

  // 29) vodopád × agilní vývoj
  const lifecycleDiagram = () => {
    const ph = ['Analýza', 'Návrh', 'Implementace', 'Testování, zavedení', 'Provoz a údržba'];
    let o = text(180, 20, 'Vodopád (tradiční)', 'c bd tA');
    ph.forEach((t, i) => { o += box(10 + i * 62, 34 + i * 48, 150, 38, i === 0 ? 'fA' : 'b', t) + (i < 4 ? path(`M${160 + i * 62 - 20},${72 + i * 48} v10 h${62 - 20}  v${10}`, 'ln', 'end').replace(/v10  v10/, 'v10') : ''); });
    o += text(540, 20, 'Agilní (iterace / sprint)', 'c bd tA') +
      box(380, 44, 110, 34, 'b', 'Nultá iterace') + line(490, 61, 520, 61, 'ln', 'end') +
      box(520, 44, 170, 34, 'fA', 'Analýza změny') + line(605, 78, 605, 108, 'ln', 'end') +
      box(520, 108, 170, 34, 'fW', 'Implementace') + line(605, 142, 605, 172, 'ln', 'end') +
      box(520, 172, 170, 34, 'fD', 'Předvedení klientovi') +
      path('M520,189 H505 V61 H519', 'lD ds') + text(494, 170, 'není hotovo → další iterace', 'e sm tD') + text(494, 186, '(body 2–4 = jeden sprint)', 'e sm mu') +
      box(520, 236, 170, 34, 'b', 'Údržba a rozvoj') + line(605, 206, 605, 236, 'ln', 'end') + text(630, 226, 'hotovo', 'sm mu');
    return svg(720, 290, o);
  };

  return { soustavyMap, groupingDiagram, byteDiagram, setsDiagram, consequenceDiagram, textDiagram, utfDiagram, wheelDiagram, shiftDiagram, ieeeDiagram, cubeDiagram, hammingGrid, vnDiagram, cycleDiagram, addrDiagram, osLayersDiagram, procStatesDiagram, deadlockDiagram, controlDiagram, maskDiagram, matrixDiagram, pointerDiagram, listDiagram, stackQueueDiagram, pipelineDiagram, busDiagram, colorDiagram, topologyDiagram, lifecycleDiagram };
})();
