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

  // ---------- T11 Operační systém ----------
  // 30) multitasking: kooperativní × preemptivní
  const multitaskDiagram = () => {
    const x0 = 150, kv = 56, col = ['fA', 'fD', 'fW'], nm = ['A', 'B', 'C'];
    let o = text(10, 50, 'Kooperativní', 'bd tA') + text(10, 68, 'procesy se vzdávají samy', 'sm mu') +
      rect(x0, 30, 400, 44, 'fA') + text(x0 + 200, 57, 'A – drží procesor, dokud se sám nevzdá', 'c bd') +
      rect(x0 + 400, 30, 150, 44, 'pd') + text(x0 + 475, 49, 'B a C čekají', 'c sm') + text(x0 + 475, 64, '(A se zasekl → stojí vše)', 'c sm mu') +
      text(10, 150, 'Preemptivní', 'bd tA') + text(10, 168, 'přerušuje operační systém', 'sm mu');
    for (let i = 0; i < 10; i++) o += rect(x0 + i * kv, 130, kv, 44, col[i % 3]) + text(x0 + i * kv + kv / 2, 157, nm[i % 3], 'c bd');
    for (let i = 1; i < 10; i++) o += line(x0 + i * kv, 180, x0 + i * kv, 194, 'lW');
    o += text(x0 + 3 * kv, 212, '↑ uplynulo časové kvantum → OS procesor odebere a přidělí dalšímu procesu', 'sm tW') +
      path(`M${x0},120 v-8 h${kv} v8`) + text(x0 + kv / 2, 106, 'kvantum', 'c sm mu') +
      line(x0, 235, x0 + 560, 235, 'ln', 'end') + text(x0 + 560, 252, 'čas', 'e sm mu');
    return svg(720, 262, o);
  };

  // 31) virtuální paměť: stránky → rámy / disk
  const virtMemDiagram = () => {
    const py = i => 50 + i * 52, map = [2, 0, 'disk', 3];
    let o = text(95, 28, 'virtuální paměť procesu', 'c bd tA') + text(95, 42, 'stránky (např. 4 kB)', 'c sm mu') +
      text(395, 28, 'fyzická paměť', 'c bd tA') + text(395, 42, 'rámy stejné velikosti', 'c sm mu');
    for (let i = 0; i < 4; i++) {
      o += box(30, py(i), 130, 40, map[i] === 'disk' ? 'fW' : 'fD', 'stránka ' + i) +
        (i === 1 ? '' : '') + (map[i] === 'disk' ? '' : '') +
        (typeof map[i] === 'number' ? line(160, py(i) + 20, 330, py(map[i]) + 20, 'lA', 'end') : line(160, py(i) + 20, 330, 292, 'lW ds', 'end'));
      o += i === 1 ? box(330, py(i), 130, 40, 'pd', 'rám 1', 'jiný proces') : box(330, py(i), 130, 40, typeof map.indexOf(i) === 'number' && map.indexOf(i) >= 0 ? 'fA' : 'b', 'rám ' + i, 'stránka ' + map.indexOf(i));
    }
    o += box(330, 270, 130, 44, 'fW', 'pevný disk', 'odložená stránka 2') +
      text(500, 120, 'OS stránkám přiděluje a odebírá rámy;', 'sm') + text(500, 138, 'na chybějící stránku čeká proces,', 'sm') + text(500, 156, 'než ji OS načte z disku zpět.', 'sm') +
      text(500, 196, 'Virtuální paměť smí být', 'sm mu') + text(500, 212, 'násobně větší než fyzická.', 'sm mu');
    return svg(720, 330, o);
  };

  // 32) binární semafor a kritická oblast
  const semaphoreDiagram = () => svg(720, 230,
    box(10, 20, 100, 36, 'fD', 'proces P1') + box(10, 80, 100, 36, 'fE', 'proces P2') + box(10, 140, 100, 36, 'fE', 'proces P3') +
    rect(280, 20, 190, 156, 'pd') + text(375, 40, 'kritická oblast', 'c sm mu') + box(305, 60, 140, 50, 'fA', 'P1 uvnitř', 'tiskárna, sdílená data') +
    line(110, 38, 280, 80, 'lA', 'end') + text(190, 52, 'wait(S) ✔', 'c sm tA') +
    path('M110,98 H200', 'lW ds') + text(205, 102, 'wait(S) ✘ → čeká', 'sm tW') + path('M110,158 H200', 'lW ds') + text(205, 162, 'čeká ve frontě', 'sm tW') +
    box(520, 40, 180, 44, 'fW', 'semafor S = 0', 'zavřeno (1 = otevřeno)') +
    line(470, 85, 520, 70, 'lA', 'end') + text(610, 112, 'P1 odchází: signal(S)', 'c sm') + text(610, 130, 'S = 1 → probudí P2', 'c sm') +
    text(375, 210, 'test a uzavření S musí být jedna nedělitelná instrukce (TST)', 'c sm mu'));

  // ---------- T12 Algoritmy ----------
  // 33) růst složitosti
  const complexityDiagram = () => {
    const X0 = 60, Y0 = 250, W = 400, H = 220, NMAX = 10, YMAX = 100, sx = n => X0 + n / NMAX * W, sy = v => Y0 - Math.min(v, YMAX) / YMAX * H;
    const curve = (f, cls) => {
      let d = '', last = null;
      for (let n = 1; n <= NMAX + 1e-9; n += 0.25) { const v = f(n); if (v > YMAX) { const nn = n - 0.25, a = f(nn); const t = (YMAX - a) / (v - a); d += `L${sx(nn + t * 0.25)},${sy(YMAX)}`; last = 1; break; } d += (d ? 'L' : 'M') + `${sx(n)},${sy(v)}`; }
      return path(d, cls);
    };
    let o = line(X0, Y0, X0 + W + 10, Y0, 'ln', 'end') + line(X0, Y0, X0, 14, 'ln', 'end') + text(X0 + W + 16, Y0 + 4, 'n', 'sm mu') + text(X0 + 8, 20, 'počet operací', 'sm mu');
    for (let n = 2; n <= 10; n += 2) o += line(sx(n), Y0, sx(n), Y0 + 4, 'ln') + text(sx(n), Y0 + 17, n, 'c sm mu');
    o += line(X0, sy(100), X0 + W, sy(100), 'ln ds') + text(X0 - 6, sy(100) + 4, '100', 'e sm mu') + text(X0 - 6, sy(50) + 4, '50', 'e sm mu') + text(X0 - 6, Y0 + 4, '0', 'e sm mu') +
      curve(n => Math.pow(2, n), 'lA') + curve(n => n * n, 'lW') + curve(n => n * Math.log2(n), 'lD') + curve(n => n, 'ln') + curve(n => Math.log2(n), 'ln ds');
    const lg = [['lA', '2ⁿ exponenciální', 'tA'], ['lW', 'n² kvadratická', 'tW'], ['lD', 'n · log n linearitmická', 'tD'], ['ln', 'n lineární', 'mu'], ['ln ds', 'log n logaritmická', 'mu']];
    lg.forEach(([c, t, tc], i) => { o += line(500, 40 + i * 26, 530, 40 + i * 26, c) + text(540, 44 + i * 26, t, 'sm ' + tc); });
    o += text(500, 190, 'pro n = 10:', 'sm bd') + text(500, 208, '3,3 · 10 · 33 · 100 · 1 024', 'sm mo') + text(500, 226, 'n! = 3 628 800', 'sm mo tA');
    return svg(720, 275, o);
  };

  // 34) vývojový diagram a plošný strukturogram: MOD A, B
  const modFlowDiagram = () => {
    const cx = 130, dia = (cy, w, h, label) => path(`M${cx},${cy - h / 2} L${cx + w / 2},${cy} L${cx},${cy + h / 2} L${cx - w / 2},${cy} Z`, 'fW') + text(cx, cy + 4, label, 'c sm');
    let o = text(cx, 10, 'vývojový diagram', 'c sm bd tA') +
      box(cx - 55, 20, 110, 26, 'fD', 'začátek') + line(cx, 46, cx, 58, 'ln', 'end') +
      box(cx - 60, 58, 120, 28, 'fA', 'čti(A), čti(B)') + line(cx, 86, cx, 98, 'ln', 'end') +
      box(cx - 60, 98, 120, 28, 'fA', 'MOD := A') + line(cx, 126, cx, 140, 'ln') +
      `<circle cx="${cx}" cy="146" r="6" class="b"/>` + line(cx, 152, cx, 164, 'ln', 'end') +
      dia(190, 150, 50, 'MOD ≥ B ?') + text(cx + 82, 184, 'ano', 'sm mu') + line(cx + 75, 190, cx + 110, 190, 'ln', 'end') +
      box(cx + 110, 174, 130, 32, 'fA', 'MOD := MOD − B') + path(`M${cx + 175},174 V146 H${cx + 6}`, 'ln', 'end') +
      text(cx + 4, 224, 'ne', 'sm mu') + line(cx, 215, cx, 240, 'ln', 'end') +
      box(cx - 60, 240, 120, 28, 'fA', 'piš(MOD)') + line(cx, 268, cx, 282, 'ln', 'end') + box(cx - 55, 282, 110, 26, 'fD', 'konec');
    const sx = 440, w = 240;
    o += text(sx + w / 2, 10, 'plošný strukturogram', 'c sm bd tA') +
      rect(sx, 20, w, 30, 'fA') + text(sx + w / 2, 40, 'čti(A); čti(B)', 'c sm') +
      rect(sx, 50, w, 30, 'fA') + text(sx + w / 2, 70, 'MOD := A', 'c sm') +
      rect(sx, 80, w, 30, 'fW') + text(sx + w / 2, 100, 'dokud MOD ≥ B opakuj', 'c sm bd') +
      rect(sx, 110, 24, 34, 'fW') + rect(sx + 24, 110, w - 24, 34, 'fA') + text(sx + 24 + (w - 24) / 2, 132, 'MOD := MOD − B', 'c sm') +
      rect(sx, 144, w, 30, 'fA') + text(sx + w / 2, 164, 'piš(MOD)', 'c sm') +
      text(sx, 206, 'Test A = 17, B = 5:', 'sm bd') + text(sx, 226, 'MOD: 17 → 12 → 7 → 2', 'sm mo') + text(sx, 246, '2 < 5 → cyklus končí, výsledek 2', 'sm mu') +
      text(sx, 276, 'Strukturogram nemá šipky: pořadí', 'sm mu') + text(sx, 292, 'se čte shora dolů, zanoření = vnoření.', 'sm mu');
    return svg(720, 316, o);
  };

  // ---------- T13 Programování ----------
  // 35) kompilátor × interpret × virtuální stroj
  const translateDiagram = () => {
    const row = (y, name, sub, parts) => text(10, y + 20, name, 'bd tA') + text(10, y + 38, sub, 'sm mu') + parts;
    return svg(720, 280,
      row(10, 'Kompilátor', 'přeloží vše jednou',
        box(150, 10, 110, 40, 'b', 'zdrojový kód') + line(260, 30, 300, 30, 'ln', 'end') + box(300, 10, 100, 40, 'fA', 'kompilátor') + line(400, 30, 440, 30, 'ln', 'end') +
        box(440, 10, 110, 40, 'fD', 'spustitelný kód', '(.exe)') + line(550, 30, 590, 30, 'ln', 'end') + box(590, 10, 110, 40, 'fE', 'počítač', 'běží bez překladu')) +
      row(100, 'Interpret', 'po částech, hned provede',
        box(150, 100, 110, 40, 'b', 'zdrojový kód') + line(260, 120, 300, 120, 'ln', 'end') + box(300, 100, 100, 40, 'fA', 'interpret') + line(400, 120, 440, 120, 'ln', 'end') +
        box(440, 100, 110, 40, 'fD', 'příkaz → akce', 'jeden po druhém') + line(550, 120, 590, 120, 'ln', 'end') + box(590, 100, 110, 40, 'fE', 'počítač', 'překlad vždy znovu') +
        path('M450,100 q-60,-24 -140,0', 'lW ds', 'end') + text(380, 80, 'opakuje se', 'c sm tW')) +
      row(190, 'Virtuální stroj', 'Java: Byte Code',
        box(150, 190, 100, 40, 'b', 'zdrojový kód') + line(250, 210, 275, 210, 'ln', 'end') + box(275, 190, 90, 40, 'fA', 'překladač') + line(365, 210, 390, 210, 'ln', 'end') +
        box(390, 190, 100, 40, 'fD', 'Byte Code') + line(490, 210, 515, 210, 'ln', 'end') + box(515, 190, 70, 40, 'fW', 'JVM') +
        line(585, 200, 610, 184, 'ln', 'end') + line(585, 210, 610, 210, 'ln', 'end') + line(585, 220, 610, 236, 'ln', 'end') +
        box(610, 172, 90, 24, 'fE', 'Windows') + box(610, 198, 90, 24, 'fE', 'Linux') + box(610, 224, 90, 24, 'fE', 'Mac OS')) +
      text(360, 270, 'JVM je mezi aplikací a operačním systémem – stejný Byte Code běží na každé platformě', 'c sm mu'));
  };

  // 36) tři komponenty aplikace a obsluha události
  const tiersDiagram = () => svg(720, 298,
    box(60, 10, 240, 30, 'b', 'Uživatel') + line(180, 40, 180, 58, 'ln', 'both') +
    box(60, 58, 240, 52, 'fE', 'Prezentační logika', 'uživatelské rozhraní (okna, formuláře)') + line(180, 110, 180, 128, 'ln', 'both') +
    box(60, 128, 240, 52, 'fA', 'Aplikační logika', 'business logika, obchodní služby') + line(180, 180, 180, 198, 'ln', 'both') +
    box(60, 198, 240, 52, 'fD', 'Logika přístupu k datům', 'datové služby, správa dat') + line(180, 250, 180, 264, 'ln', 'both') +
    box(60, 264, 240, 26, 'b', 'databáze, soubory') +
    text(500, 20, 'Program řízený událostmi', 'c bd tA') +
    box(390, 40, 220, 44, 'fW', 'událost', 'Click, MouseMove, klávesa, časovač') + line(500, 84, 500, 112, 'ln', 'end') +
    box(390, 112, 220, 44, 'fA', 'obslužný podprogram', 'připojený k události') + line(500, 156, 500, 184, 'ln', 'end') +
    box(390, 184, 220, 44, 'fD', 'vykoná se činnost', 'jinak program jen čeká') +
    text(500, 252, 'program může událost vyvolat i sám', 'c sm mu') +
    path('M610,206 H650 V62 H612', 'lW ds', 'end'));

  // ---------- T14 Statické datové struktury ----------
  // 37) pole v paměti
  const arrayDiagram = () => {
    const vals = [7, 12, -3, 0, 45, 8], x0 = 130, w = 80, base = 100, sz = 2;
    let o = text(10, 54, 'adresa', 'bd') + text(10, 98, 'obsah', 'bd') + text(10, 144, 'index', 'bd') + text(10, 164, '(C++ od 0)', 'sm mu');
    vals.forEach((v, i) => {
      o += text(x0 + i * w + w / 2, 54, base + i * sz, 'c mo sm mu') + box(x0 + i * w, 64, w, 44, i === 2 ? 'fA' : 'b', String(v).replace('-', '−')) +
        text(x0 + i * w + w / 2, 138, 'A[' + i + ']', 'c mo' + (i === 2 ? ' tA bd' : ''));
    });
    return svg(720, 220, o + path(`M${x0},116 v6 h${vals.length * w} v-6`) + text(x0 + vals.length * w / 2, 186, 'int A[6];  – 6 prvků stejného typu, přímý přístup přes index', 'c sm') +
      text(x0 + vals.length * w / 2, 206, `adresa A[i] = ${base} + i · ${sz} (int = ${sz} B)  →  A[2] leží na ${base + 2 * sz}`, 'c sm mu'));
  };

  // 38) množina jako řetězec bitů
  const setDiagram = () => {
    const A = [2, 3, 5], B = [3, 5, 8], bits = s => [...Array(8)].map((_, i) => (s.includes(i + 1) ? '1' : '0')).join('');
    const rows = [['A', A], ['B', B], ['A ∪ B  (OR)', A.concat(B.filter(x => !A.includes(x))).sort((a, b) => a - b)], ['A ∩ B  (AND)', A.filter(x => B.includes(x))], ['A \\ B  (A AND NOT B)', A.filter(x => !B.includes(x))]];
    let o = '';
    for (let i = 1; i <= 8; i++) o += text(260 + (i - 1) * 34 + 17, 18, i, 'c sm mu');
    rows.forEach(([n, s], r) => {
      const y = 28 + r * 44, b = bits(s);
      o += text(10, y + 23, n, r > 1 ? 'bd' : 'mo bd') + cells(260, y, b, [...b].map(c => (c === '1' ? (r > 1 ? 'fA' : 'fD') : 'b')), 34, 34) + text(550, y + 23, '= {' + s.join(', ') + '}', 'mo');
    });
    return svg(720, 255, o + text(260, 250, 'bázový typ 1…8: každý prvek = jeden bit (1 = přítomen)', 'sm mu'));
  };

  // 39) záznam a objekt
  const recordDiagram = () => {
    const f = (x, y, w, name, type, val, cls) => rect(x, y, w, 56, cls) + text(x + w / 2, y + 18, name, 'c bd mo sm') + text(x + w / 2, y + 34, type, 'c sm mu') + text(x + w / 2, y + 49, val, 'c sm');
    return svg(720, 250,
      text(10, 18, 'Záznam (struct) – položky různých typů, přístup tečkou', 'bd tA') +
      f(10, 30, 150, 'KodZbozi', 'int', '1025', 'fA') + f(160, 30, 190, 'NazevZbozi', 'string', '„Pocitac“', 'fD') + f(350, 30, 160, 'CenaZbozi', 'float', '19990,5', 'fW') + f(510, 30, 200, 'VcetneDPH', 'bool', 'true', 'fE') +
      text(10, 112, 'Zbozi.KodZbozi = 1025;   Zbozi.NazevZbozi = "Pocitac";', 'sm mo') +
      text(10, 148, 'Objekt (třída) = záznam + metody (podprogramy)', 'bd tA') +
      f(10, 160, 170, 'CenaZbozi', 'float', '19990,5', 'fW') + f(180, 160, 170, 'SazbaDPH', 'float', '0,21', 'fW') +
      rect(350, 160, 360, 56, 'pd') + text(530, 182, 'DPH()  – metoda', 'c bd mo sm') + text(530, 200, 'return CenaZbozi * SazbaDPH;', 'c sm mo') +
      text(10, 238, 'Zbozi.DPH()  – volání metody; Zbozi je instance třídy TypZbozi', 'sm mo'));
  };

  // ---------- T15 Dynamické datové struktury ----------
  // 40) rekurze: R_Faktorial(4)
  const recursionDiagram = () => {
    const fact = n => (n <= 1 ? 1 : n * fact(n - 1)), by = i => 12 + i * 66;
    let o = '';
    for (let i = 0; i <= 4; i++) {
      const n = 4 - i;
      o += box(250, by(i), 220, 38, i === 4 ? 'fW' : 'fA', `R_Faktorial(${n})`, i === 4 ? 'N = 0 → konec rekurze, vrací 1' : `čeká na R_Faktorial(${n - 1})`);
      if (i < 4) o += line(300, by(i) + 38, 300, by(i + 1), 'lA', 'end') + text(292, by(i) + 38 + 18, `volá ${n} · R(${n - 1})`, 'e sm') +
        line(420, by(i + 1), 420, by(i) + 38, 'lD', 'end') + text(428, by(i) + 38 + 18, `vrací ${fact(n)}`, 'sm tD bd');
    }
    return svg(720, 330, o + text(10, 40, 'volání ↓', 'sm tA bd') + text(10, 58, 'zásobník volání roste', 'sm mu') + text(500, 250, 'návrat ↑', 'sm tD bd') + text(500, 268, 'hodnoty se násobí při návratu', 'sm mu') +
      text(10, 306, '4! = 4 · 3 · 2 · 1 = 24', 'sm mo bd'));
  };

  // 41) binární strom
  const treeDiagram = () => {
    const node = (cx, y, v) => rect(cx - 36, y, 72, 34, 'fA') + text(cx, y + 21, v, 'c bd mo') + rect(cx - 36, y + 34, 36, 18, 'b') + rect(cx, y + 34, 36, 18, 'b') + text(cx - 18, y + 47, 'L', 'c sm mu') + text(cx + 18, y + 47, 'P', 'c sm mu');
    const nul = (cx, y) => text(cx, y, 'NULL', 'c sm mu mo');
    return svg(720, 270,
      node(200, 10, '8') + text(250, 22, '← Kořen (nemá předchůdce)', 'sm tA') +
      line(182, 62, 110, 100, 'ln', 'end') + line(218, 62, 290, 100, 'ln', 'end') +
      node(110, 100, '3') + node(290, 100, '10') +
      line(92, 152, 50, 190, 'ln', 'end') + line(128, 152, 170, 190, 'ln', 'end') + line(308, 152, 350, 190, 'ln', 'end') +
      node(50, 190, '1') + node(170, 190, '6') + node(350, 190, '14') +
      nul(272, 178) + path('M272,152 V166', 'ln', 'end') +
      text(50, 262, 'list', 'c sm tD') + text(170, 262, 'list', 'c sm tD') + text(350, 262, 'list', 'c sm tD') +
      text(430, 70, 'uzel = Info + ukazatel Levy (L)', 'sm') + text(430, 86, '+ ukazatel Pravy (P)', 'sm') +
      text(430, 108, 'hrany stromu jsou ukazatele', 'sm mu') + text(430, 130, 'chybějící syn = NULL', 'sm mu') +
      text(430, 160, 'list = uzel bez synů (oba NULL)', 'sm mu') + text(430, 190, 'z kořene vede do každého uzlu', 'sm mu') + text(430, 208, 'jediná cesta, žádné cykly', 'sm mu'));
  };

  // 42) ohodnocený orientovaný graf a jeho reprezentace ukazateli
  const graphDiagram = () => {
    const N = { U1: [50, 130], U2: [180, 45], U3: [180, 215], U4: [310, 130] }, r = 20;
    const E = [['U1', 'U2', 4], ['U1', 'U3', 2], ['U2', 'U4', 5], ['U3', 'U2', 1], ['U3', 'U4', 8]];
    let o = '';
    E.forEach(([a, b, w]) => {
      const [x1, y1] = N[a], [x2, y2] = N[b], d = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / d, uy = (y2 - y1) / d;
      o += line(x1 + ux * r, y1 + uy * r, x2 - ux * (r + 3), y2 - uy * (r + 3), 'lA', 'end') + text((x1 + x2) / 2 + (a === 'U3' && b === 'U2' ? 10 : -4) , (y1 + y2) / 2 - (a === 'U3' && b === 'U2' ? 0 : 6), w, 'c sm bd tW');
    });
    Object.entries(N).forEach(([k, [x, y]]) => { o += `<circle cx="${x}" cy="${y}" r="${r}" class="fD"/>` + text(x, y + 4, k, 'c bd sm'); });
    o += text(180, 262, 'orientovaný ohodnocený graf', 'c sm mu') + text(500, 18, 'v paměti: seznam uzlů, každý má seznam hran', 'c sm bd');
    Object.keys(N).forEach((k, i) => {
      const y = 36 + i * 56, es = E.filter(e => e[0] === k);
      o += box(400, y, 54, 34, 'fD', k);
      let px = 454;
      if (i < 3) o += line(427, y + 34, 427, y + 56, 'ln', 'end');
      if (!es.length) o += line(px, y + 17, px + 24, y + 17, 'ln', 'end') + text(px + 28, y + 21, 'NULL', 'sm mu mo');
      es.forEach(([, b, w]) => { o += line(px, y + 17, px + 20, y + 17, 'ln', 'end') + box(px + 20, y, 70, 34, 'fW', '→ ' + b, 'váha ' + w); px += 90; });
      if (es.length) o += line(px, y + 17, px + 20, y + 17, 'ln', 'end') + text(px + 24, y + 21, 'NULL', 'sm mu mo');
    });
    return svg(720, 275, o);
  };

  // ---------- T16 Speciální datové struktury ----------
  // 43) cyklická fronta (max = 5)
  const circQueueDiagram = () => {
    const max = 5, df = (kf, zf) => (kf - zf + max + 1) % max, X = 170;
    const states = [
      ['po vložení A, B, C', { 1: 'A', 2: 'B', 3: 'C' }, 1, 3],
      ['po vyjmutí A', { 2: 'B', 3: 'C' }, 2, 3],
      ['po vložení D, E', { 2: 'B', 3: 'C', 4: 'D', 0: 'E' }, 2, 0]
    ];
    let o = '';
    for (let i = 0; i < max; i++) o += text(X + i * 56 + 28, 16, i, 'c sm mu mo');
    states.forEach(([name, items, zf, kf], r) => {
      const y = 26 + r * 96;
      o += text(10, y + 24, name, 'sm bd');
      for (let i = 0; i < max; i++) o += items[i] ? box(X + i * 56, y, 56, 38, 'fE', items[i]) : rect(X + i * 56, y, 56, 38, 'pd');
      o += line(X + zf * 56 + 28, y + 62, X + zf * 56 + 28, y + 42, 'lD', 'end') + text(X + zf * 56 + 28, y + 76, 'ZF = ' + zf, 'c sm tD') +
        line(X + kf * 56 + 28, y + 62, X + kf * 56 + 28, y + 42, 'lW', 'end') + text(X + kf * 56 + 28, y + 76, 'KF = ' + kf, 'c sm tW') +
        text(490, y + 24, `DF = (${kf} − ${zf} + ${max} + 1) % ${max} = ${df(kf, zf)}`, 'sm mo');
    });
    return svg(720, 330, o + text(10, 322, 'indexy 0…4 · ZF = začátek, KF = konec · KF = (KF + 1) % max zalamuje konec na začátek pole', 'sm mu'));
  };

  // 44) hash tabulka s kolizí
  const hashDiagram = () => {
    const m = 7, h = k => [...k].reduce((a, c) => a + c.charCodeAt(0) - 64, 0) % m;
    const keys = ['NOVAK', 'SVOBODA', 'KRAL', 'HORAK', 'BLAHA', 'NEMEC'];
    let o = text(10, 18, 'klíč k', 'sm mu') + text(250, 18, 'h(k) = (součet pořadí písmen) mod 7', 'c sm mu') + text(560, 18, 'tabulka (7 řádků)', 'c sm mu');
    keys.forEach((k, i) => {
      const y = 30 + i * 40, t = h(k), ty = 30 + t * 38;
      o += box(10, y, 110, 30, k === 'KRAL' ? 'fW' : 'fE', k) + path(`M120,${y + 15} C250,${y + 15} 330,${ty + 17} 458,${ty + 17}`, k === 'KRAL' ? 'lW' : 'lA', 'end') +
        text(270, y + 11 - (i % 2) * 0, 'h = ' + t, 'c sm mo mu');
    });
    for (let t = 0; t < m; t++) {
      const owner = keys.filter(k => h(k) === t);
      o += rect(460, 30 + t * 38, 220, 34, owner.length ? (owner.length > 1 ? 'fW' : 'fA') : 'pd') + text(672, 30 + t * 38 + 22, t, 'e sm mu mo') +
        (owner.length ? text(570, 30 + t * 38 + 22, owner[0] + (owner.length > 1 ? '  ⚠' : ''), 'c bd sm') : text(570, 30 + t * 38 + 22, 'volno', 'c sm mu'));
    }
    return svg(720, 300, o + text(10, 292, 'NOVAK a KRAL: h = 0 pro oba → kolize (synonyma)', 'sm tW'));
  };

  // 45) sekvenční soubor a soubor s přímým přístupem
  const fileDiagram = () => {
    const blk = (x, y, w, t, c) => box(x, y, w, 36, c, t);
    let o = text(10, 18, 'Sekvenční soubor', 'bd tA') + blk(10, 28, 60, 'PNS', 'fW') + blk(70, 28, 50, 'ZS', 'fW');
    ['blok 1', 'blok 2', 'blok 3', 'blok 4'].forEach((t, i) => { o += blk(120 + i * 100, 28, 100, t, 'fA'); });
    o += blk(520, 28, 60, 'KS', 'fW') + text(600, 52, '← konec souboru', 'sm mu') +
      path('M470,88 V70', 'lD', 'end') + text(470, 104, 'čtecí hlava', 'c sm tD') +
      text(10, 98, 'PNS – návěští souboru, ZS – značka souboru, KS – blok konce souboru', 'sm mu') +
      text(10, 124, 'k bloku 4 se dostanu jen přes bloky 1–3 (postupné čtení)', 'sm');
    o += text(10, 166, 'Soubor s přímým přístupem', 'bd tA') +
      box(10, 180, 90, 34, 'fE', 'klíč k') + line(100, 197, 150, 197, 'ln', 'end') + box(150, 180, 120, 34, 'fW', 'f(k) / index') + line(270, 197, 320, 197, 'ln', 'end') +
      box(320, 180, 110, 34, 'fD', 'adresa bloku') + line(430, 197, 480, 197, 'ln', 'end') + box(480, 180, 110, 34, 'fA', 'záznam') +
      text(10, 240, 'adresovaný: adr = f(k)  ·  indexovaný: adresa se najde v tabulce indexů', 'sm mu') +
      text(10, 258, 'operace: OPEN, READ, WRITE, REWRITE, DELETE, CLOSE', 'sm mu');
    return svg(720, 270, o);
  };

  // 46) soubory × databáze
  const dbmsDiagram = () => svg(720, 280,
    text(170, 18, 'Tradiční pohled: soubory', 'c bd tA') +
    box(10, 40, 100, 34, 'fE', 'aplikace 1') + line(110, 57, 150, 57, 'ln', 'end') + box(150, 40, 130, 34, 'b', 'soubor 1', 'zákazník + adresa') +
    box(10, 110, 100, 34, 'fE', 'aplikace 2') + line(110, 127, 150, 127, 'ln', 'end') + box(150, 110, 130, 34, 'b', 'soubor 2', 'zákazník + adresa') +
    box(10, 180, 100, 34, 'fE', 'aplikace 3') + line(110, 197, 150, 197, 'ln', 'end') + box(150, 180, 130, 34, 'b', 'soubor 3', 'zákazník + faktura') +
    text(170, 248, 'redundance · hrozí nekonzistence · pevné dotazy', 'c sm tW') +
    text(530, 18, 'Databázový pohled', 'c bd tA') +
    box(410, 40, 90, 34, 'fE', 'aplikace 1') + box(410, 110, 90, 34, 'fE', 'aplikace 2') + box(410, 180, 90, 34, 'fE', 'aplikace 3') +
    line(500, 57, 540, 110, 'ln', 'end') + line(500, 127, 540, 127, 'ln', 'end') + line(500, 197, 540, 144, 'ln', 'end') +
    box(540, 90, 70, 74, 'fA', 'SŘBD') + line(610, 127, 640, 127, 'ln', 'both') + box(640, 90, 70, 74, 'fD', 'databáze', 'integrovaná') +
    text(560, 248, 'jednou uložená data · práva · souběžný přístup', 'c sm tD'));

  // ---------- T17 Technické vybavení I ----------
  // 47) pevný disk: plotna, stopa, sektor, cylindr
  const hddDiagram = () => {
    const cx = 150, cy = 140, pol = (r, a) => [cx + r * Math.cos(a * Math.PI / 180), cy + r * Math.sin(a * Math.PI / 180)];
    let o = text(cx, 14, 'plotna shora', 'c sm bd tA');
    [40, 65, 90, 115].forEach(r => { o += `<circle cx="${cx}" cy="${cy}" r="${r}" class="pd"/>`; });
    o += `<circle cx="${cx}" cy="${cy}" r="102" style="fill:none;stroke:var(--def);stroke-opacity:.28;stroke-width:23"/>`;
    const [a1, a2] = pol(115, -25), [b1, b2] = pol(90, -25), [c1, c2] = pol(115, 5), [d1, d2] = pol(90, 5);
    o += path(`M${a1},${a2} A115,115 0 0 1 ${c1},${c2} L${d1},${d2} A90,90 0 0 0 ${b1},${b2} Z`, 'fA') + `<circle cx="${cx}" cy="${cy}" r="14" class="b"/>` +
      text(cx + 150, 40, 'sektor (512 B)', 'sm tA') + line(cx + 148, 44, pol(102, -10)[0] + 2, pol(102, -10)[1] - 2, 'lA', 'end') +
      text(cx + 150, 124, 'stopa (soustředný prstenec)', 'sm tD') + line(cx + 148, 128, pol(102, 60)[0] + 2, pol(102, 60)[1] - 2, 'lD', 'end');
    const sx = 470;
    o += text(sx + 100, 14, 'řez: 2 plotny = 4 strany', 'c sm bd tA') + rect(sx + 8, 30, 8, 196, 'b') + text(sx + 12, 244, 'vřeteno', 'c sm mu') +
      rect(sx + 16, 70, 150, 12, 'fW') + rect(sx + 16, 150, 150, 12, 'fW') + text(sx + 90, 66, 'plotna 1', 'c sm mu') + text(sx + 90, 146, 'plotna 2', 'c sm mu') +
      rect(sx + 124, 50, 28, 126, 'pd') + text(sx + 138, 196, 'cylindr', 'c sm tD bd') + rect(sx + 176, 52, 8, 124, 'fE') + text(sx + 180, 214, 'rameno s hlavami', 'c sm mu');
    [58, 84, 138, 164].forEach(y => { o += rect(sx + 130, y, 16, 8, 'fE') + line(sx + 146, y + 4, sx + 176, y + 4, 'ln'); });
    return svg(720, 262, o);
  };

  // 48) čtení optického disku: pevnina / jamka → bity
  const opticalDiagram = () => {
    const st = 'LLPPPLLLPL', w = 56, x0 = 70, bits = [...st].map((c, i) => (c !== (i ? st[i - 1] : 'L') ? '1' : '0')).join('');
    let d = `M${x0},96`, o = '';
    [...st].forEach((c, i) => { const y = c === 'L' ? 96 : 126, prev = i ? (st[i - 1] === 'L' ? 96 : 126) : 96; d += `L${x0 + i * w},${y}`; d += `L${x0 + (i + 1) * w},${y}`; });
    d += `L${x0 + st.length * w},160 L${x0},160 Z`;
    o += path(d, 'fW');
    [...st].forEach((c, i) => { o += text(x0 + i * w + w / 2, c === 'L' ? 86 : 116, c === 'L' ? 'pevnina' : 'jamka', 'c sm' + (c === 'L' ? ' tA' : ' tW')); });
    o += cells(x0, 176, bits, [...bits].map(b => (b === '1' ? 'fA' : 'b')), w, 34) + text(10, 198, 'bity', 'bd') +
      text(x0 + 2 * w, 24, 'laser + senzor', 'c sm bd tD') + line(x0 + 2 * w - 16, 34, x0 + 2 * w - 16, 70, 'lD', 'end') + line(x0 + 2 * w + 16, 70, x0 + 2 * w + 16, 34, 'lD', 'end') +
      text(x0 + 2 * w + 36, 56, 'odraz', 'sm tD') +
      text(x0, 238, 'změna odraženého světla (pevnina ↔ jamka) = 1 · beze změny = 0', 'sm') +
      text(x0, 256, 'jamky jsou vyraženy do jediné spirálové stopy dlouhé 5,77 km', 'sm mu');
    return svg(720, 268, o);
  };

  // ---------- T18 Technické vybavení II ----------
  // 49) LCD: cesta světla
  const lcdDiagram = () => {
    const bs = [['Podsvícení', 'diody LED', 'fW'], ['Polarizační filtr 1', 'řídí směr světla', 'fA'], ['Tekuté krystaly', 'natáčejí světlo', 'fD'], ['Polarizační filtr 2', 'řídí množství světla', 'fA'], ['Bod obrazovky', '3 buňky R, G, B', 'fE']];
    let o = '';
    bs.forEach(([t, s, c], i) => { const x = 10 + i * 142; o += box(x, 40, 120, 64, c, t, s) + (i < 4 ? line(x + 120, 72, x + 142, 72, 'lW', 'end') : ''); });
    o += text(360, 24, 'světlo prochází vrstvami zleva doprava', 'c sm mu');
    ['R', 'G', 'B'].forEach((c, i) => { o += box(600 + i * 34, 124, 30, 30, ['fA', 'fD', 'fD'][i], c); });
    o += text(360, 190, 'čím víc světla druhý filtr propustí, tím je bod světlejší', 'c sm') + text(360, 212, 'barvu dává kombinace tří buněk (stejně jako u CRT: RGB)', 'c sm mu');
    return svg(720, 225, o);
  };

  // 50) laserová tiskárna
  const laserDiagram = () => {
    const cx = 330, cy = 134, r = 64;
    return svg(720, 300,
      box(20, 20, 120, 40, 'fW', 'laser', 'modulovaný paprsek') + line(140, 44, cx - 50, cy - 40, 'lW ds', 'end') + text(300, 52, '① paprsek vybíjí náboj na válci', 'sm tW') +
      `<circle cx="${cx}" cy="${cy}" r="${r}" class="fA"/>` + text(cx, cy - 2, 'válec', 'c bd') + text(cx, cy + 16, 'nabitý povrch', 'c sm mu') +
      box(100, 148, 120, 44, 'fE', 'toner', 'ulpí na vybitém') + line(220, 166, cx - 56, cy + 36, 'lA', 'end') + text(100, 142, '② toner na válec', 'sm tA') +
      rect(20, 204, 680, 8, 'b') + text(26, 198, 'papír', 'sm mu') + line(570, 208, 700, 208, 'ln', 'end') +
      `<circle cx="${cx}" cy="242" r="28" class="fD"/>` + text(cx, 246, 'přenos', 'c sm') + text(cx - 38, 244, '③ toner se přenese na papír', 'e sm tD') +
      `<circle cx="520" cy="190" r="14" class="fW"/><circle cx="520" cy="226" r="14" class="fW"/>` + text(520, 262, '④ fixace – vyhřívací válečky', 'c sm tW') +
      text(610, 60, 'Elektrostatický princip:', 'c sm bd') + text(610, 78, 'toner drží jen tam,', 'c sm') + text(610, 94, 'kde laser náboj vybil.', 'c sm'));
  };

  // 51) hub × switch
  const switchDiagram = () => {
    const pc = (x, y, t, c = 'b') => box(x, y, 50, 30, c, t);
    const panel = (ox, name, sw) => {
      let o = text(ox + 170, 18, name, 'c bd tA') + box(ox + 120, 100, 100, 44, sw ? 'fA' : 'fW', sw ? 'switch' : 'hub');
      const nodes = [[10, 40, 'A', 'fE'], [10, 190, 'B', 'fD'], [290, 40, 'C', 'b'], [290, 190, 'D', 'b']];
      nodes.forEach(([x, y, t, c]) => { o += pc(ox + x, y, t, c); });
      o += line(ox + 60, 70, ox + 120, 112, 'lA', 'end');
      o += line(ox + 120, 132, ox + 60, 198, 'lA', 'end');
      o += sw ? line(ox + 220, 112, ox + 290, 62, 'ln ds') + line(ox + 220, 132, ox + 290, 200, 'ln ds') : line(ox + 220, 112, ox + 290, 62, 'lA', 'end') + line(ox + 220, 132, ox + 290, 200, 'lA', 'end');
      o += text(ox + 170, 250, sw ? 'jen na port s příjemcem B (tabulka MAC adres)' : 'na všechny ostatní porty (B, C, D)', 'c sm ' + (sw ? 'tD' : 'tW'));
      return o;
    };
    return svg(720, 268, panel(0, 'Hub (opakovač)', false) + panel(370, 'Switch (přepínač)', true));
  };

  // 52) Wi-Fi: ad-hoc, infrastructure, WDS
  const wifiDiagram = () => {
    const pc = (x, y, t) => box(x, y, 44, 28, 'b', t), ap = (x, y, t = 'AP') => box(x, y, 50, 30, 'fA', t);
    return svg(720, 250,
      text(110, 18, 'Ad-hoc', 'c bd tA') + text(110, 34, 'přímé spojení', 'c sm mu') +
      pc(88, 50, 'PC') + pc(20, 150, 'PC') + pc(156, 150, 'PC') + line(100, 78, 50, 150, 'lA', 'both') + line(120, 78, 170, 150, 'lA', 'both') + line(64, 164, 156, 164, 'lA', 'both') +
      text(110, 214, 'komunikují přímo, SSID', 'c sm mu') + text(110, 230, 'dosah několik metrů', 'c sm mu') +
      text(360, 18, 'Infrastructure', 'c bd tA') + text(360, 34, 'do hvězdy přes AP', 'c sm mu') +
      ap(335, 100) + pc(250, 50, 'PC') + pc(436, 50, 'PC') + pc(343, 170, 'PC') +
      line(294, 78, 340, 106, 'lW ds', 'both') + line(436, 78, 380, 106, 'lW ds', 'both') + line(365, 130, 365, 170, 'lW ds', 'both') +
      text(360, 214, 'AP vysílá SSID,', 'c sm mu') + text(360, 230, 'klienti si AP vyberou', 'c sm mu') +
      text(610, 18, 'WDS link', 'c bd tA') + text(610, 34, 'spojení dvou sítí', 'c sm mu') +
      ap(530, 100) + ap(640, 100) + line(580, 115, 640, 115, 'lA', 'both') + text(610, 104, 'WDS', 'c sm tA') +
      pc(535, 50, 'PC') + pc(645, 50, 'PC') + pc(535, 170, 'PC') + pc(645, 170, 'PC') +
      line(557, 78, 557, 100, 'ln') + line(667, 78, 667, 100, 'ln') + line(557, 130, 557, 170, 'ln') + line(667, 130, 667, 170, 'ln') +
      text(610, 214, 'dva AP propojí dvě', 'c sm mu') + text(610, 230, 'sítě (drátové či bezdrátové)', 'c sm mu'));
  };

  return { soustavyMap, groupingDiagram, byteDiagram, setsDiagram, consequenceDiagram, textDiagram, utfDiagram, wheelDiagram, shiftDiagram, ieeeDiagram, cubeDiagram, hammingGrid, vnDiagram, cycleDiagram, addrDiagram, osLayersDiagram, procStatesDiagram, deadlockDiagram, controlDiagram, maskDiagram, matrixDiagram, pointerDiagram, listDiagram, stackQueueDiagram, pipelineDiagram, busDiagram, colorDiagram, topologyDiagram, lifecycleDiagram, multitaskDiagram, virtMemDiagram, semaphoreDiagram, complexityDiagram, modFlowDiagram, translateDiagram, tiersDiagram, arrayDiagram, setDiagram, recordDiagram, recursionDiagram, treeDiagram, graphDiagram, circQueueDiagram, hashDiagram, fileDiagram, dbmsDiagram, hddDiagram, opticalDiagram, lcdDiagram, laserDiagram, switchDiagram, wifiDiagram };
})();
