// Diagramy předmětu TŘOS / Základy řízení (SVG, skládané přes helpery DG z assets/dg.js)
const TROS = (() => {
  const { svg, text, rect, line, path, box } = DG;

  // smyčka vlastní zpětné vazby nad boxem (x = levý okraj smyčky, y = horní hrana boxu)
  const loop = (x, y, label) => path(`M${x},${y} v-28 h80 v28`, 'ln', 'end') + text(x + 40, y - 36, label, 'c sm mu');

  // 1) ovládání – nejjednodušší informační působení (bez kontroly výsledku)
  const ovladani = () => svg(720, 190,
    box(70, 65, 200, 60, 'fD', 'Ovládající systém', 'subjekt') + box(450, 65, 200, 60, 'fA', 'Ovládaný systém', 'objekt') +
    line(8, 95, 70, 95, 'ln', 'end') + text(38, 76, 'vstupní', 'c sm mu') + text(38, 88, 'informace', 'c sm mu') +
    line(270, 95, 450, 95, 'lA', 'end') + text(360, 85, 'ovládací příkazy', 'c sm') +
    line(650, 95, 712, 95, 'ln', 'end') + text(681, 76, 'cílové', 'c sm mu') + text(681, 88, 'chování', 'c sm mu') +
    loop(130, 65, 'vlastní zpětná vazba (program subjektu)') +
    text(360, 160, 'Subjekt jen vydá příkaz – výsledek nekontroluje (žádná přímá zpětná vazba).', 'c sm mu'));

  // 2) řízení – ovládání + kontrola (přímá zpětná vazba)
  const rizeni = () => svg(720, 235,
    box(70, 65, 200, 60, 'fD', 'Subjekt řízení', 'SŘ') + box(450, 65, 200, 60, 'fA', 'Objekt řízení', 'OŘ') +
    line(8, 95, 70, 95, 'ln', 'end') + text(38, 76, 'vstupní', 'c sm mu') + text(38, 88, 'informace', 'c sm mu') +
    line(270, 95, 450, 95, 'lA', 'end') + text(360, 85, 'řídící příkazy', 'c sm') +
    line(650, 95, 712, 95, 'ln', 'end') + text(681, 76, 'výsledné', 'c sm mu') + text(681, 88, 'chování', 'c sm mu') +
    loop(130, 65, 'vlastní zpětná vazba SŘ') + loop(510, 65, 'vlastní zpětná vazba OŘ') +
    path('M550,125 v42 h-380 v-42', 'lW', 'end') +
    text(360, 187, 'KONTROLA = přímá zpětná vazba', 'c bd tW') +
    text(360, 205, 'informace o splnění příkazu, zjištění odchylek od cílového chování', 'c sm mu'));

  // 3) regulace – mezi subjekt a objekt vložen regulátor
  const regulace = () => svg(720, 235,
    box(30, 70, 170, 60, 'fD', 'Subjekt řízení', 'SŘ') + box(275, 70, 170, 60, 'fW', 'Regulační systém', 'regulátor') + box(520, 70, 170, 60, 'fA', 'Řízený systém', 'OŘ') +
    line(200, 100, 275, 100, 'lA', 'end') + text(238, 90, 'cílové stavy', 'c sm') +
    line(445, 100, 520, 100, 'lW', 'end') + text(482, 90, 'regulace', 'c sm') +
    path('M605,130 v36 h-215 v-36', 'ln', 'end') + text(498, 184, 'sledování odchylek (zpětná vazba)', 'c sm mu') +
    path('M330,70 v-32 h-130 v32', 'ln ds', 'end') + text(265, 28, 'kontrola nastavení, kalibrace', 'c sm mu') +
    text(115, 150, 'program: jak zajistit', 'c sm mu') + text(115, 163, 'cílové chování', 'c sm mu') +
    text(360, 220, 'Typicky technika: termostat, ventilace, zastavení linky při poruše.', 'c sm mu'));

  // 4) cyklus řízení – stádia I → RO → RE → K
  const cyklus = () => svg(720, 140,
    box(20, 18, 140, 58, 'fD', 'I', 'informace') + box(200, 18, 140, 58, 'fE', 'RO', 'rozhodování') + box(380, 18, 140, 58, 'fA', 'RE', 'realizace') + box(560, 18, 140, 58, 'fW', 'K', 'kontrola') +
    line(160, 47, 200, 47, 'ln', 'end') + line(340, 47, 380, 47, 'ln', 'end') + line(520, 47, 560, 47, 'ln', 'end') +
    path('M630,76 v28 h-540 v-28', 'lW', 'end') + text(360, 123, 'zjištěná odchylka → nová informace (cyklus se opakuje)', 'c sm mu'));

  // 5) matice fáze × stádium (kódy 11–33)
  const matice = () => {
    const cols = ['Plánování', 'Organizování', 'Operativní řízení'], rows = [['Informace', '(I)'], ['Rozhodování', '(RO)'], ['Realizace', 'a kontrola (RE, K)']];
    const cell = [
      [['11', 'informace o trhu, konkurenci,', 'zdrojích → návrhy variant'], ['21', 'získání informací o zdrojích,', 'jejich lokalizaci a termínech'], ['31', 'plánování směn, úkoly', 'pro směny (JOP)']],
      [['12', 'výběr nejvhodnější varianty', '→ schválení plánu'], ['22', 'výběr z variant → rozhodnutí', 'o přidělení zdrojů'], ['32', 'řešení odchylek od plánu', '(rozhodnutí)']],
      [['13', 'prověření informací o trhu,', 'kontrolní propočty; plán oznámit'], ['23', 'kontrola před zahájením,', 'pak přiřazování zdrojů'], ['33', 'kontrola výroby a služeb: kvalita,', 'termíny, množství, náklady']]
    ];
    const cls = ['fD', 'fE', 'fW'];
    let o = '';
    cols.forEach((c, j) => { o += box(112 + j * 210, 6, 206, 32, cls[j], c); });
    rows.forEach((r, i) => {
      o += box(4, 44 + i * 84, 104, 80, 'b', r[0], r[1]);
      cell[i].forEach(([k, a, b], j) => {
        const x = 112 + j * 210, y = 44 + i * 84;
        o += rect(x, y, 206, 80, 'b') + text(x + 10, y + 20, k, 'bd tA') + text(x + 10, y + 42, a, 'sm') + text(x + 10, y + 58, b, 'sm');
      });
    });
    return svg(740, 300, o, 740);
  };

  // 6) matice 3×3 subsystémů 1. řádu; mode: 'prvky' (osy prvky × vazby) | 'oblasti' (oblasti × procesy); sub = popisky buněk
  const NAMES = { PS2: 'Pracovní', MOS: 'Marketingově-obchodní', ŘSS: 'Řídící', EES: 'Ekologicko-ergonomický', OSS: 'Organizační', EIS: 'Ekonomicko-informační', PS1: 'Produkční', TS1: 'Technologický', TS2: 'Technický' };
  const GRID = [['PS2', 'MOS', 'ŘSS'], ['EES', 'OSS', 'EIS'], ['PS1', 'TS1', 'TS2']];
  const klass = c => ['PS1', 'OSS', 'ŘSS'].includes(c) ? 'fA' : ['PS2', 'MOS', 'EES'].includes(c) ? 'fW' : 'fD';
  const osGrid = (mode = 'prvky', sub = {}) => {
    const x0 = 118, w = 172, h = 70, g = 6, y0 = mode === 'oblasti' ? 44 : 8;
    let o = '';
    GRID.forEach((row, i) => row.forEach((c, j) => { o += box(x0 + j * (w + g), y0 + i * (h + g), w, h, klass(c), c, sub[c] ?? NAMES[c]); }));
    const lab = (x, y, a, b, cls = 'sm mu') => text(x, y, a, cls) + (b ? text(x, y + 14, b, cls) : '');
    const cy = i => y0 + i * (h + g) + h / 2 - 5;
    if (mode === 'oblasti') {
      ['Realizační', 'Organizační', 'Informační a'].forEach((a, j) => { o += lab(x0 + j * (w + g) + w / 2, 14, a, ['procesy', 'procesy', 'rozhodovací procesy'][j], 'c sm bd'); });
      ['proces přímého', 'proces nepřímého', 'proces produkčního'].forEach((a, i) => { o += lab(112, cy(i), a, 'řízení', 'e sm bd'); });
      ['Obchodně-řídící', 'Organizačně-ekonom.', 'Produkčně-technická'].forEach((a, i) => { o += lab(x0 + 3 * (w + g) + 4, cy(i), a, 'oblast', 'sm bd'); });
    } else {
      ['lidské prvky (L)', 'smíšené prvky (SP)', 'hmotné prvky (HP)'].forEach((a, i) => { o += text(112, cy(i) + 10, a, 'e sm bd'); });
      ['hmotně-energetické', 'smíšené', 'informační'].forEach((a, j) => { o += lab(x0 + j * (w + g) + w / 2, y0 + 3 * (h + g) + 12, a, 'vazby', 'c sm bd'); });
    }
    return svg(780, mode === 'oblasti' ? 290 : 280, o, 780);
  };
  const subsystemy = () => osGrid('prvky');
  const oblasti = () => osGrid('oblasti');
  const kompetenceGrid = () => osGrid('prvky', { ŘSS: 'K = 0,200 (úroveň 1)', MOS: 'K = 0,100 (úroveň 2)', EIS: 'K = 0,100 (úroveň 2)', OSS: 'K = 0,200 (úroveň 3)', EES: 'K = 0,100 (úroveň 4)', TS1: 'K = 0,100 (úroveň 4)', PS2: 'K = 0,067 (úroveň 5)', PS1: 'K = 0,067 (úroveň 5)', TS2: 'K = 0,067 (úroveň 5)' });

  // 7) stabilita subsystémů vs. hierarchie
  const stabilita = () => {
    const tier = (y, cells, l1, l2, l3) => text(8, y + 18, l1, 'sm bd') + text(8, y + 34, l2, 'sm mu') + text(8, y + 50, l3, 'sm mu') +
      cells.map(([i, c]) => box(250 + i * 100, y, 92, 54, ['PS1', 'OSS', 'ŘSS'].includes(c) ? 'fA' : 'b', c)).join('');
    return svg(760, 270,
      tier(10, [[2, 'ŘSS']], 'nízká stabilita', 'minimum investic', 'rychlá reakce na změny') +
      tier(90, [[1, 'MOS'], [2, 'OSS'], [3, 'EIS']], 'střední stabilita', 'střední investice', 'střední reakce na změny') +
      tier(170, [[0, 'PS2'], [1, 'EES'], [2, 'PS1'], [3, 'TS1'], [4, 'TS2']], 'vysoká stabilita', 'vysoké investice', 'pomalá reakce na změny') +
      text(380, 250, '↑ roste hierarchie subsystému · ↓ roste stabilita (červeně = hlavní diagonála)', 'c sm mu'), 760);
  };

  // 8) systém a jeho okolí
  const systemOkoli = () => svg(720, 250,
    `<ellipse cx="360" cy="125" rx="345" ry="115" class="b"/><ellipse cx="360" cy="125" rx="215" ry="82" class="fD"/>` +
    text(360, 24, 'širší okolí (nepodstatné)', 'c sm mu') + text(360, 60, 'užší okolí (vždy podstatné)', 'c sm bd tD') +
    box(280, 100, 160, 50, 'fA', 'SYSTÉM', 'S = { A, R }') +
    line(10, 125, 280, 125, 'lA', 'end') + text(70, 112, 'vstupy', 'c sm') + text(70, 140, '(akce)', 'c sm mu') +
    line(440, 125, 710, 125, 'lA', 'end') + text(650, 112, 'výstupy', 'c sm') + text(650, 140, '(reakce)', 'c sm mu') +
    text(360, 172, 'kalendář – časové intervaly akcí/reakcí', 'c sm mu') + text(360, 188, 'repertoár – množina možných akcí/reakcí', 'c sm mu'));

  // 9) agregace × desagregace
  const agregace = () => {
    const sm = (x, y, t, c = 'b', w = 54) => box(x, y, w, 34, c, t);
    return svg(720, 170,
      text(120, 18, 'původní stav (4 prvky)', 'c sm mu') + sm(40, 32, 'A1') + sm(110, 32, 'A2') + sm(40, 90, 'A3') + sm(110, 90, 'A4') +
      line(94, 49, 110, 49, 'ln') + line(67, 66, 67, 90, 'ln') + line(137, 66, 137, 90, 'ln') + line(94, 107, 110, 107, 'ln') +
      line(215, 70, 485, 70, 'lA', 'end') + text(350, 62, 'AGREGACE – slučování prvků', 'c bd tA') +
      line(485, 100, 215, 100, 'lD', 'end') + text(350, 118, 'DESAGREGACE – dělení prvků', 'c bd tD') +
      text(590, 18, 'nový stav (3 prvky)', 'c sm mu') + sm(500, 32, 'A1 + A2', 'fA', 124) + sm(500, 90, 'A3') + sm(570, 90, 'A4') +
      line(562, 66, 527, 90, 'ln') + line(562, 66, 597, 90, 'ln') +
      text(360, 156, 'agregace = nižší rozlišovací úroveň · desagregace = vyšší rozlišovací úroveň', 'c sm mu'));
  };

  // 10) organizační stupně podniku (4 stupně + JOP)
  const orgStupne = () => {
    const bw = 62, bx = i => 112 + i * 70; // 8 provozů
    let o = box(bx(3) + 35 - 40, 6, 110, 34, 'fA', 'PODNIK', 'OS1');
    const div = [bx(1) + 35, bx(5) + 35], zav = [bx(0) + 35, bx(2) + 35, bx(4) + 35, bx(6) + 35];
    div.forEach((x, d) => { o += box(x - 45, 70, 90, 34, 'fE', `Divize ${d + 1}`, 'OS2'); o += path(`M${bx(3) + 70},40 v14 H${x} V70`, 'ln'); });
    zav.forEach((x, z) => {
      const dx = div[Math.floor(z / 2)];
      o += box(x - 40, 134, 80, 34, 'fD', `Závod ${z + 1}`, 'OS3') + path(`M${dx},104 v12 H${x} V134`, 'ln');
      [0, 1].forEach(k => { const px = bx(z * 2 + k) + bw / 2; o += box(px - bw / 2, 198, bw, 34, 'fW', `Provoz ${z * 2 + k + 1}`, 'OS4') + path(`M${x},168 v12 H${px} V198`, 'ln'); });
    });
    o += text(8, 26, 'OS1 podnik', 'sm bd') + text(8, 92, 'OS2 divize', 'sm bd') + text(8, 156, 'OS3 závod', 'sm bd') + text(8, 220, 'OS4 provoz', 'sm bd') +
      text(360, 258, 'Pod provozem leží JOP (jednotky organizace práce) – nejmenší OJ, ale už ne samostatný organizační stupeň.', 'c sm mu');
    return svg(720, 270, o);
  };

  // 11) Eisenhowerova matice
  const eisenhower = () => {
    const q = (x, y, cls, h, a, b, c) => rect(x, y, 270, 116, cls) + text(x + 135, y + 24, h, 'c bd') + text(x + 135, y + 48, a, 'c sm') + text(x + 135, y + 66, b, 'c sm') + text(x + 135, y + 92, c, 'c sm mu');
    return svg(720, 310,
      text(285, 22, 'NALÉHAVÉ', 'c bd') + text(555, 22, 'NENALÉHAVÉ', 'c bd') +
      text(142, 100, 'DŮLEŽITÉ', 'e bd') + text(142, 220, 'NEDŮLEŽITÉ', 'e bd') +
      q(150, 34, 'fA', 'I. Řeš sám a hned', 'krize, termíny, hořící úkoly', '(seminárka za 5 hodin)', 'zde se má trávit co nejméně času') +
      q(420, 34, 'fD', 'II. Řeš sám později – plánuj', 'příprava, stáž, životopis, vize', 'prevence krizí (I.)', 'na tyto úkoly se soustřeď') +
      q(150, 156, 'fW', 'III. Deleguj', 'telefonát, záskok za kolegu,', 'drobné nutné nákupy', 'jen se tváří jako „I.“') +
      q(420, 156, 'b', 'IV. Eliminuj', 'úklid, zbytečná pošta,', 'prokrastinace', 'odmítni, vyhoď'));
  };

  // 12) styly řízení – orientace na úkol × orientace na lidi
  const stylyGrid = () => svg(720, 330,
    rect(120, 20, 280, 130, 'fW') + rect(400, 20, 280, 130, 'fD') + rect(120, 150, 280, 130, 'b') + rect(400, 150, 280, 130, 'fA') +
    text(260, 50, 'A – sousedský / liberální', 'c bd') + text(260, 70, '„spolek zahrádkářů“', 'c sm mu') + text(260, 94, 'lidé důležitější než úkol,', 'c sm') + text(260, 110, 'volnost, vyhýbá se konfliktům', 'c sm') +
    text(540, 50, 'D – demokratický / týmový', 'c bd') + text(540, 70, '„kooperující“', 'c sm mu') + text(540, 94, 'zájem o úkol i o lidi,', 'c sm') + text(540, 110, 'rozhoduje po poradě / tým', 'c sm') +
    text(260, 196, 'B – lhostejný / byrokratický', 'c bd') + text(260, 216, '„nezájem“', 'c sm mu') + text(260, 240, 'jen předává příkazy shora', 'c sm') + text(260, 256, 'a kontroluje je', 'c sm') +
    text(540, 196, 'C – autokratický', 'c bd') + text(540, 216, '„armáda“', 'c sm mu') + text(540, 240, 'úkol a disciplína, příkazy,', 'c sm') + text(540, 256, 'přísná kontrola, „cukr a bič“', 'c sm') +
    `<ellipse cx="400" cy="150" rx="62" ry="26" class="fE"/>` + text(400, 154, 'kompromisní', 'c sm bd') +
    text(112, 90, 'vysoká', 'e sm mu') + text(112, 220, 'nízká', 'e sm mu') + text(60, 155, 'orientace', 'c sm bd') + text(60, 170, 'na lidi (Y)', 'c sm bd') +
    text(260, 300, 'nízká', 'c sm mu') + text(540, 300, 'vysoká', 'c sm mu') + text(400, 320, 'orientace na úkol / výkon (X)', 'c sm bd'));

  // 13) komunikační proces
  const komunikace = () => svg(720, 210,
    box(10, 70, 150, 56, 'fD', 'Komunikátor', 'kdo (vysílá)') + box(285, 70, 150, 56, 'fW', 'Sdělení', 'co + jakým médiem') + box(560, 70, 150, 56, 'fA', 'Komunikant', 'komu (přijímá)') +
    line(160, 98, 285, 98, 'lA', 'end') + text(222, 88, 'kódování', 'c sm') + line(435, 98, 560, 98, 'lA', 'end') + text(497, 88, 'dekódování', 'c sm') +
    line(360, 20, 360, 70, 'ln ds', 'end') + text(360, 14, 'rušení, bariéry, šum', 'c sm mu') +
    path('M635,126 v40 h-555 v-40', 'lW', 'end') + text(360, 184, 'zpětná vazba (ověření, jak bylo sdělení pochopeno)', 'c sm bd tW'));

  // 14) směry komunikace v organizaci
  const smery = () => svg(720, 250,
    box(260, 10, 200, 44, 'fA', 'Vedení', 'vyšší stupeň') + box(260, 100, 200, 44, 'fE', 'Střední management') + box(260, 190, 200, 44, 'fD', 'Výkonní pracovníci', 'nižší stupeň') +
    line(330, 54, 330, 100, 'lA', 'end') + line(330, 144, 330, 190, 'lA', 'end') + text(320, 78, 'sestupná', 'e sm bd') + text(320, 168, 'příkazy, instrukce, delegování', 'e sm mu') +
    line(390, 190, 390, 144, 'lD', 'end') + line(390, 100, 390, 54, 'lD', 'end') + text(400, 78, 'vzestupná', 'sm bd') + text(400, 168, 'nápady, informace, stížnosti', 'sm mu') +
    line(260, 122, 130, 122, 'lW', 'both') + text(195, 112, 'horizontální', 'c sm bd') + text(195, 140, 'koordinace OJ', 'c sm mu') +
    line(470, 36, 600, 206, 'ln ds', 'both') + text(555, 120, 'diagonální (neformální)', 'sm bd'));

  // 15) spolehlivost – sériové a paralelní spojení (příklad ze skript)
  const spolehlivost = () => {
    const b = (x, y, t) => box(x, y, 84, 36, 'b', t);
    return svg(800, 270,
      b(30, 117, 'A1  0,95') +
      line(114, 135, 170, 135, 'ln') + line(170, 90, 170, 180, 'ln') + line(170, 90, 200, 90, 'ln') + line(170, 180, 200, 180, 'ln') +
      b(200, 72, 'B1  0,92') + b(200, 162, 'B2  0,87') + line(284, 90, 314, 90, 'ln') + line(284, 180, 314, 180, 'ln') + line(314, 90, 314, 180, 'ln') + line(314, 135, 350, 135, 'ln') +
      line(350, 30, 350, 210, 'ln') + [30, 90, 150, 210].map(y => line(350, y, 380, y, 'ln') + line(464, y, 494, y, 'ln')).join('') + line(494, 30, 494, 210, 'ln') + line(494, 135, 530, 135, 'ln', 'end') +
      b(380, 12, 'C1  0,86') + b(380, 72, 'C2  0,85') + b(380, 132, 'C3  0,80') + b(380, 192, 'C4  0,81') +
      text(545, 100, 'série:  p = p₁ · p₂ · p₃', 'sm bd') + text(545, 124, 'paralela: p = 1 − ∏(1 − pᵢ)', 'sm bd') +
      text(545, 156, 'p₂ = 1 − 0,08·0,13 = 0,9896', 'sm') + text(545, 174, 'p₃ = 1 − 0,14·0,15·0,20·0,19 = 0,9992', 'sm') +
      text(545, 198, 'p = 0,95 · 0,9896 · 0,9992 ≈ 0,939', 'sm bd tA'), 800);
  };

  // 16) motivační proces
  const motivace = () => svg(720, 300,
    box(10, 110, 170, 70, 'fW', 'Stimuly ŘP', 'hmotné · sociální · morální') +
    rect(255, 100, 210, 90, 'fD') + text(360, 122, 'Motivovaná osobnost', 'c bd') + text(360, 140, 'determinanty chování:', 'c sm mu') + text(360, 158, 'potřeby, motivy, postoje, hodnoty,', 'c sm') + text(360, 174, 'charakter, temperament, schopnosti', 'c sm') +
    box(540, 110, 170, 70, 'fA', 'Motivované chování', 'výkon / setrvání') +
    line(180, 145, 255, 145, 'lA', 'end') + line(465, 145, 540, 145, 'lA', 'end') +
        box(90, 10, 200, 44, 'b', 'Osobnost ŘP', 'odbornost, vstřícnost, charakter') + box(430, 10, 200, 44, 'b', 'Situace', 'příznivá × nepříznivá') +
    line(190, 54, 190, 110, 'ln ds', 'end') + line(530, 54, 440, 98, 'ln ds', 'end') +
    box(255, 240, 210, 44, 'b', 'Prostředí', 'skupina · podnik · společnost') + line(360, 240, 360, 192, 'ln ds', 'end'));

  // 17) sekvenční funkce (po sobě) × paralelní funkce (v každém kroku) – podle matice ze slajdu
  const sekvParal = () => {
    const seq = [['1 Plánování', 'cíle a postup'], ['2 Organizování', 'zdroje a podmínky'], ['3 Výběr lidí', 'a jejich rozmístění'], ['4 Vedení lidí', 'úkoly, motivace'], ['5 Kontrola', 'plán × skutečnost']];
    const par = [['Analýza problémů', 'fD'], ['Rozhodování', 'fE'], ['Realizace (implementace) a koordinace', 'fW']];
    let o = text(16, 22, 'SEKVENČNÍ FUNKCE – jedna po druhé', 'bd');
    seq.forEach(([a, b], i) => { o += box(16 + i * 142, 34, 120, 52, i === 4 ? 'fA' : 'b', a, b) + (i < 4 ? line(136 + i * 142, 60, 158 + i * 142, 60, 'ln', 'end') : ''); });
    o += path('M644,86 v20 h-572 v-20', 'lW', 'end') + text(360, 122, 'kontrola vyhodnotí výsledek a případně upraví plán → cyklus znovu', 'c sm mu');
    o += text(16, 156, 'PARALELNÍ FUNKCE – probíhají průběžně, v každém z pěti kroků', 'bd');
    par.forEach(([a, c], i) => { o += rect(16, 168 + i * 34, 688, 26, c) + text(360, 186 + i * 34, a, 'c bd'); });
    return svg(720, 276, o);
  };

  // 18) Mintzbergových 10 rolí ve 3 skupinách (3 + 3 + 4)
  const mintzberg = () => {
    const g = [
      ['Interpersonální (3)', 'práce s lidmi', 'fD', [['představitel organizace', 'figurehead'], ['vůdce', 'leader'], ['spojovací článek', 'liaison']]],
      ['Informační (3)', 'práce s informacemi', 'fW', [['monitor', 'sbírá informace'], ['šiřitel', 'disseminator – dovnitř'], ['mluvčí', 'spokesperson – navenek']]],
      ['Rozhodovací (4)', 'volba a jednání', 'fA', [['podnikatel', 'entrepreneur'], ['řešitel problémů', 'disturbance-handler'], ['alokátor zdrojů', 'resource-allocator'], ['vyjednavač', 'negotiator']]]
    ];
    let o = '';
    g.forEach(([h, s, c, roles], j) => {
      const x = 10 + j * 240;
      o += box(x, 10, 220, 48, c, h, s);
      roles.forEach(([a, b], i) => { o += line(x + 110, i ? 64 + i * 48 : 58, x + 110, 72 + i * 48, 'ln') + box(x, 72 + i * 48, 220, 40, 'b', a, b); });
    });
    return svg(720, 268, o);
  };

  // 19) koncepce 7 S (McKinsey) – šest S propojených navzájem, uprostřed sdílené hodnoty
  const sedmS = () => {
    const s = ['Strategie', 'Systémy', 'Struktura', 'Styl', 'Schopnosti', 'Spolupráce'];
    const pt = s.map((_, i) => { const a = (-90 + i * 60) * Math.PI / 180; return [Math.round(360 + 250 * Math.cos(a)), Math.round(150 + 108 * Math.sin(a))]; });
    let o = '';
    pt.forEach(([x1, y1], i) => pt.slice(i + 1).forEach(([x2, y2]) => { o += line(x1, y1, x2, y2, 'ln ds'); }));
    pt.forEach(([x, y]) => { o += line(x, y, 360, 150, 'ln'); });
    pt.forEach(([x, y], i) => { o += box(x - 66, y - 20, 132, 40, 'fD', s[i]); });
    o += `<ellipse cx="360" cy="150" rx="92" ry="32" class="fA"/>` + text(360, 147, 'Sdílené hodnoty', 'c bd') + text(360, 163, 'podniková kultura', 'c sm mu');
    return svg(720, 284, o);
  };

  // ===== diagramy nahrazující tabulky =====
  const lines = (x, y, w, h, cls, ls) => rect(x, y, w, h, cls) + ls.map((t, i) => text(x + w / 2, y + 16 + i * 14, t, i ? 'c sm' : 'c sm bd')).join('');
  const sb = (t, s) => `${t}<tspan dy="3" font-size="10">${s}</tspan>`;   // dolní index v SVG textu (jen na konci řetězce)
  const arr = (x1, y1, x2, y2, c = 'ln') => line(x1, y1, x2, y2, c, 'end');

  // 1) druhy vazeb mezi prvky systému
  const vazby = () => {
    const nd = (x, y, t) => `<circle cx="${x}" cy="${y}" r="16" class="b"/>` + text(x, y + 5, t, 'c bd');
    const P = [
      ['přímá', 'S', 'ij', 'otevřená, sériová', o => nd(o + 50, 50, 'Ai') + nd(o + 170, 50, 'Aj') + arr(o + 67, 50, o + 152, 50, 'lA')],
      ['nepřímá', 'S', 'ik', 'otevřená, sériová (přes Aj)', o => nd(o + 30, 50, 'Ai') + nd(o + 120, 50, 'Aj') + nd(o + 210, 50, 'Ak') + arr(o + 47, 50, o + 102, 50, 'lA') + arr(o + 137, 50, o + 192, 50, 'lA')],
      ['rozvodná', 'P', 'ijk', 'otevřená, paralelní: jeden prvek vysílá do dvou', o => nd(o + 40, 50, 'Ai') + nd(o + 190, 20, 'Aj') + nd(o + 190, 80, 'Ak') + arr(o + 56, 44, o + 174, 24, 'lA') + arr(o + 56, 56, o + 174, 76, 'lA')],
      ['svodná', 'P', 'ijk', 'otevřená, paralelní: dva prvky vstupují do jednoho', o => nd(o + 40, 20, 'Ai') + nd(o + 40, 80, 'Aj') + nd(o + 190, 50, 'Ak') + arr(o + 56, 24, o + 174, 44, 'lA') + arr(o + 56, 76, o + 174, 56, 'lA')],
      ['vlastní zpětná', 'Z', 'jj', 'uzavřená: prvek působí sám na sebe', o => nd(o + 120, 62, 'Aj') + path(`M${o + 106},${48} C${o + 70},${0} ${o + 170},${0} ${o + 134},${48}`, 'lD', 'end')],
      ['přímá zpětná', 'Z', 'ji', 'uzavřená: výstup Aj se vrací na vstup Ai', o => nd(o + 50, 55, 'Ai') + nd(o + 190, 55, 'Aj') + arr(o + 67, 55, o + 172, 55, 'lA') + path(`M${o + 190},${72} C${o + 190},${112} ${o + 50},${112} ${o + 50},${73}`, 'lD', 'end')]
    ];
    return svg(760, 330, P.map(([n, l, i, d, g], k) => { const o = 10 + (k % 3) * 250, y = Math.floor(k / 3) * 165; return `<g transform="translate(0,${y})">${g(o)}<text x="${o + 120}" y="125" class="c bd">${n} (${l}<tspan dy="3" font-size="10">${i}</tspan><tspan dy="-3">)</tspan></text>${text(o + 120, 143, d, 'c sm mu')}</g>`; }).join(''), 760);
  };

  // 2) typologie systémů – kde leží podnik
  const typologie = () => {
    const R = [['vztah k objektům', [['abstraktní', 0], ['reálné', 1]]], ['vztah k okolí', [['uzavřené', 0], ['otevřené', 0], ['relativně izolované', 1]]], ['podrobnost zkoumání', [['absolutní', 0], ['redukované', 1]]], ['faktor času', [['prospektivní', 1], ['retrospektivní', 1]]],
      ['složitost', [['jednoduché', 0], ['složité', 0], ['velmi složité', 1]]], ['typ chování', [['deterministické', 0], ['stochastické', 1]]], ['vztah ke změnám', [['neadaptivní', 0], ['adaptivní', 1]]], ['vztah k tvorbě cílů', [['bez cílového chování', 0], ['s cílovým chováním', 1]]]];
    return svg(760, 330, R.map(([n, o], i) => { const y = 8 + i * 38; return text(10, y + 20, n, 'sm bd') + o.map(([t, s], k) => rect(180 + k * 190, y, 184, 30, s ? 'fA' : 'b') + text(180 + k * 190 + 92, y + 19, t, s ? 'c sm bd' : 'c sm')).join(''); }).join('') + text(750, 322, 'červeně = jak je to u podniku', 'e sm tA'), 760);
  };

  // 3) fáze procesu řízení × podílející se subsystémy
  const fazeSub = () => {
    const C = ['ŘSS', 'EIS', 'TS2', 'OSS', 'PS1', 'MOS', 'PS2'], cw = 86, x0 = 130;
    const R = [['Plánování', 'fA', { ŘSS: ['subjekt,', 'cíle OS'], EIS: ['ekonomické,', 'tržní a org.', 'informace'], TS2: ['technické', 'informace'] }], ['Organizování', 'fD', { ŘSS: ['koordinátor,', 'schvaluje'], OSS: ['navrhne zdroje', 'a OJ'], PS1: ['produkce', 'v OJ'] }], ['Operativní řízení', 'fW', { ŘSS: ['přímé', 'řízení'], MOS: ['každodenní', 'obchodní', 'činnost'], PS2: ['fyzická práce', 'a spolupráce'] }]];
    return svg(760, 250, C.map((c, i) => text(x0 + i * cw + cw / 2, 20, c, 'c bd')).join('') + R.map(([n, cls, m], r) => { const y = 34 + r * 70; return text(10, y + 38, n, 'bd') + C.map((c, i) => (m[c] ? rect(x0 + i * cw + 3, y, cw - 6, 62, cls) + m[c].map((t, k) => text(x0 + i * cw + cw / 2, y + 18 + k * 14, t, 'c sm')).join('') : rect(x0 + i * cw + 3, y, cw - 6, 62, 'pd'))).join(''); }).join(''), 760);
  };

  // 4) rozlišovací úrovně jako vnořené celky
  const uroveni = () => {
    const L = [['1. úroveň: podnik jako celek (OS)', ''], ['2. úroveň: subsystémy 1. řádu', 'PS1, OSS, ŘSS …'], ['3. úroveň: subsystémy 2. řádu', 'subsystém produktu P1, organizační stupeň OS2'], ['4. úroveň: subsystémy 3. řádu (prvky OS)', 'hmotný prvek HP, organizační jednotka OJ, ŘP'], ['5. úroveň', 'soubor JOP – JOPn,m, fyzická spolupráce na pracovišti']];
    return svg(760, 330, L.map(([t, s], i) => rect(8 + i * 26, 6 + i * 44, 744 - i * 52, 318 - i * 58, i % 2 ? 'b' : 'pd') + text(20 + i * 26, 24 + i * 44, t, 'sm bd') + (s ? text(20 + i * 26, 40 + i * 44, s, 'sm mu') : '')).join(''), 760);
  };

  // 5) typy organizačních struktur – schémata
  const orgTypy = () => {
    const nd = (x, y, w, t, cls = 'b') => lines(x - w / 2, y, w, 26, cls, [t]).replace(/y="(\d+)" class="c sm bd"/, (m, v) => `y="${+v - 0}" class="c sm bd"`);
    const top = (x, t) => nd(x, 28, 100, t, 'fA');
    return svg(760, 235,
      text(125, 16, 'podnikových funkcí', 'c bd') + top(125, 'podnik') + ['výroba', 'obchod', 'služby', 'účtárna', 'štáb'].map((t, i) => nd(28 + i * 46, 118, 44, t, 'fD').replace(/class="c sm bd"/, 'class="c bd" style="font-size:9px"') + line(125, 54, 28 + i * 46, 118, 'ln')).join('') +
      text(385, 16, 'výrobků (produktová)', 'c bd') + top(385, 'podnik') + ['produkt A', 'produkt B', 'produkt C', 'servis'].map((t, i) => nd(310 + i * 52, 118, 50, t, 'fW').replace(/class="c sm bd"/, 'class="c bd" style="font-size:9px"') + line(385, 54, 310 + i * 52, 118, 'ln')).join('') +
      text(640, 16, 'území (územní)', 'c bd') + top(640, 'podnik') + nd(640, 90, 100, 'region', 'fD') + line(640, 54, 640, 90, 'ln') + nd(590, 150, 80, 'oblast 1', 'fW') + nd(690, 150, 80, 'oblast 2', 'fW') + line(640, 116, 590, 150, 'ln') + line(640, 116, 690, 150, 'ln') + nd(590, 200, 80, 'farma', 'b') + nd(690, 200, 80, 'farma', 'b') + line(590, 176, 590, 200, 'ln') + line(690, 176, 690, 200, 'ln'), 760);
  };

  // 6) typy řídících struktur – schémata
  const ridiciStruktury = () => {
    const nd = (x, y, w, t, cls = 'b') => rect(x - w / 2, y, w, 24, cls) + text(x, y + 16, t, 'c sm bd'), ln = (x1, y1, x2, y2, c = 'ln') => line(x1, y1, x2, y2, c);
    const n2 = (x, y, w, a, b, cls = 'b') => rect(x - w / 2, y, w, 34, cls) + text(x, y + 14, a, 'c sm bd') + text(x, y + 27, b, 'c sm bd');
    const T = (x, t, y = 14) => text(x, y, t, 'c bd');
    return svg(760, 420,
      // liniová × štábní
      T(125, 'liniové × štábní') + nd(105, 28, 100, 'GŘ', 'fA') + nd(105, 78, 100, 'ředitel závodu', 'fD') + nd(105, 128, 100, 'vedoucí provozu', 'fD') + nd(105, 178, 100, 'výkonní pracovníci', 'b') + ln(105, 52, 105, 78) + ln(105, 102, 105, 128) + ln(105, 152, 105, 178) +
      n2(205, 62, 70, 'štáb', 'radí', 'fW') + ln(155, 40, 175, 62, 'ds') +
      // funkcionální
      T(400, 'funkcionální') + nd(400, 28, 120, 'vedení podniku', 'fA') + ['výroby', 'ekonomiky', 'obchodu'].map((t, i) => n2(320 + i * 80, 86, 76, 'ředitel', t, 'fD') + ln(400, 52, 320 + i * 80, 86) + n2(320 + i * 80, 146, 76, 'vedoucí', 'oddělení', 'b') + ln(320 + i * 80, 120, 320 + i * 80, 146)).join('') +
      // divizionální
      T(650, 'divizionální') + nd(650, 28, 120, 'vedení podniku', 'fA') + [0, 1].map(i => n2(600 + i * 100, 86, 92, 'ředitel', 'divize ' + (i + 1), 'fD') + ln(650, 52, 600 + i * 100, 86) + n2(600 + i * 100, 140, 92, 'výroba, prodej,', 'finance', 'b') + ln(600 + i * 100, 120, 600 + i * 100, 140)).join('') +
      // projektová
      T(190, 'projektová (pružná)', 222) + nd(190, 238, 190, 'vedení, představenstvo, štáb', 'fA') + ['vývoj', 'výroba', 'servis', 'obchod'].map((t, i) => nd(70 + i * 80, 288, 74, t, 'fD') + ln(190, 262, 70 + i * 80, 288)).join('') + ['P1', 'P2', 'Pn'].map((t, i) => rect(30, 322 + i * 26, 320, 20, 'pd') + text(40, 336 + i * 26, 'projekt ' + t, 'sm bd tW')).join('') + text(190, 410, 'vedoucí projektů berou pracovníky z útvarů', 'c sm mu') +
      // procesní
      T(560, 'procesní', 222) + nd(560, 238, 170, 'sponzor procesu (vedení)', 'fA') + nd(560, 288, 150, 'koordinátor procesu', 'fD') + ln(560, 262, 560, 288) + [0, 1, 2].map(i => nd(465 + i * 95, 338, 88, 'vlastník ' + (i + 1), 'fW') + ln(560, 312, 465 + i * 95, 338)).join('') + text(560, 386, 'vlastníci podprocesů', 'c sm mu'), 760);
  };

  // 7) charakter informací podle úrovně řízení
  const infoUrovne = () => {
    const R = [['zdroj', 'externí', 'interní'], ['rozsah', 'velmi široký, nespecifikovaný', 'úzce specifikovaný'], ['podrobnost', 'integrované veličiny', 'podrobné údaje'], ['časovost', 'budoucnost', 'současnost, minulost'], ['včasnost', 'nejsou urgentní', 'urgentní'], ['četnost', 'málo četné (rok)', 'četné (denně)'], ['přesnost', 'nízká, aproximace, kvalitativní', 'přesné, kvantitativní']];
    return svg(760, 300, text(10, 20, 'strategická úroveň (TOP)', 'bd tA') + text(750, 20, 'operativní (nižší) úroveň', 'e bd tD') + text(380, 20, 'taktická = mezi tím', 'c sm mu') + R.map(([n, a, b], i) => { const y = 38 + i * 36; return rect(8, y, 220, 28, 'fA') + text(118, y + 19, a, 'c sm bd') + rect(532, y, 220, 28, 'fD') + text(642, y + 19, b, 'c sm bd') + arr(232, y + 14, 528, y + 14, 'ln') + text(380, y + 10, n, 'c sm mu'); }).join(''), 760);
  };

  // 8) přikazování – koučování – delegování
  const delegovani = () => {
    const C = [['Přikazování', 'fA', 'přesně určí co, jak, kdy a s kým', ['úkol', 'vše rozhodnuto', '„nediskutuj a splň“', 'kontrola'], 'vypjatá situace, časová tíseň'],
      ['Koučování', 'fW', 'otázkami vede k vlastnímu programu', ['úkol', 'otázka', 'odpověď', 'odsouhlasené řešení', 'realizace', 'kontrola'], 'zaučování, vyšší způsob vedení'],
      ['Delegování', 'fD', 'předá úkol, pravomoc a zdroje', ['úkol', 'zadání', 'pravomoc a zdroje', 'vlastní program', 'realizace', 'kontrola'], 'standardní situace s kvalitním podřízeným']];
    return svg(760, 335, arr(10, 14, 750, 14, 'lA') + text(380, 10, 'samostatnost podřízeného roste', 'c sm mu') + C.map(([t, c, d, st, k], i) => { const x = 10 + i * 250; return rect(x, 26, 240, 52, c) + text(x + 120, 46, t, 'c bd') + text(x + 120, 64, 'ŘP ' + d, 'c sm') + st.map((s2, k2) => rect(x + 40, 88 + k2 * 30, 160, 20, 'b') + text(x + 120, 102 + k2 * 30, s2, 'c sm') + (k2 ? arr(x + 120, 88 + k2 * 30 - 10, x + 120, 88 + k2 * 30 - 1, 'ln') : '')).join('') + text(x + 120, 290, 'kdy:', 'c sm bd') + text(x + 120, 306, k.length > 34 ? k.slice(0, k.lastIndexOf(' ', 34)) : k, 'c sm mu') + (k.length > 34 ? text(x + 120, 320, k.slice(k.lastIndexOf(' ', 34) + 1), 'c sm mu') : ''); }).join(''), 760);
  };

  // 9) komunikace podle počtu účastníků
  const komunikaceUcastnici = () => {
    const n = (x, y) => `<circle cx="${x}" cy="${y}" r="12" class="fD"/>`;
    return svg(760, 190,
      n(70, 60) + path('M60,50 C20,10 120,10 80,50', 'lA', 'end') + text(70, 110, 'intrapersonální', 'c bd') + text(70, 128, 'vnitřní komunikace', 'c sm mu') + text(70, 143, 'jednoho člověka', 'c sm mu') +
      n(230, 60) + n(330, 60) + arr(244, 56, 316, 56, 'lA') + arr(316, 66, 244, 66, 'lA') + text(280, 110, 'interpersonální', 'c bd') + text(280, 128, 'mezi dvěma', 'c sm mu') + text(280, 143, 'a více lidmi', 'c sm mu') +
      [[470, 30], [540, 30], [470, 90], [540, 90]].map(([x, y]) => n(x, y)).join('') + arr(484, 30, 526, 30, 'lA') + arr(470, 44, 470, 76, 'lA') + arr(540, 44, 540, 76, 'lA') + arr(526, 90, 484, 90, 'lA') + arr(482, 38, 530, 82, 'lA') + text(505, 125, 'skupinová', 'c bd') + text(505, 143, 'porady, týmové řešení', 'c sm mu') + text(505, 158, '(i přes internet)', 'c sm mu') +
      n(640, 60) + [[705, 20], [715, 60], [705, 100]].map(([x, y]) => n(x, y) + arr(654, 60, x - 14, y, 'lW')).join('') + text(680, 125, 'masová', 'c bd') + text(680, 143, 'jednosměrná k velkému', 'c sm mu') + text(680, 158, 'počtu osob (TV, tisk)', 'c sm mu'), 760);
  };

  // 10) čtyři generace plánování času
  const generace = () => {
    const G = [['I.', 'poznámky a upomínky', 'zaznamenání úkolů'], ['II.', 'kalendáře a diáře', 'systematické plánování'], ['III.', 'prioritizace úkolů', 'důležitost a naléhavost (Eisenhower)'], ['IV.', 'osobní řízení a rovnováha', 'rovnováha práce a osobního života']];
    return svg(760, 240, G.map(([n, t, s], i) => rect(10 + i * 185, 160 - i * 40, 175, 75 + i * 40, ['b', 'fD', 'fW', 'fA'][i]) + text(22 + i * 185, 180 - i * 40, n + ' generace', 'sm bd') + text(22 + i * 185, 197 - i * 40, t, 'sm') + text(22 + i * 185, 213 - i * 40, s.length > 26 ? s.slice(0, s.lastIndexOf(' ', 26)) : s, 'sm mu') + (s.length > 26 ? text(22 + i * 185, 228 - i * 40, s.slice(s.lastIndexOf(' ', 26) + 1), 'sm mu') : '')).join('') + arr(10, 20, 740, 20, 'lA') + text(375, 14, 'od zapisování úkolů k osobnímu řízení', 'c sm mu'), 760);
  };

  // 11) Fayolovy skupiny činností → dnešní subsystémy OS
  const fayolMapa = () => {
    const L = [['Technické', 'výroba, těžba', [0, 1, 2]], ['Obchodní', 'nákup, prodej, směna', [3]], ['Finanční', 'opatřování a využití kapitálu', [4]], ['Účetní', 'výkazy, kalkulace, inventarizace', [4]], ['Ochranné', 'ochrana vlastnictví a osobnosti', [5]], ['Správní = řízení', 'předvídání, organizování, přikazování, koordinace, kontrola', [6, 7]]];
    const Rr = ['PS1', 'TS1', 'TS2', 'MOS', 'EIS', 'ŘSS – MJS', 'ŘSS', 'OSS'];
    return svg(760, 330, L.map(([n, s, t], i) => { const y = 8 + i * 52; return rect(10, y, 330, 44, 'b') + text(20, y + 18, n, 'sm bd') + text(20, y + 34, s, 'sm mu') + t.map(k => line(340, y + 22, 520, 14 + k * 38 + 14, 'lA')).join(''); }).join('') + Rr.map((t, k) => rect(520, 14 + k * 38, 110, 28, 'fD') + text(575, 14 + k * 38 + 19, t, 'c sm bd')).join('') + text(645, 150, '← dnešní pojetí', 'sm mu') + text(10, 326, 'Fayolova skupina činností podniku', 'sm mu') + text(575, 326, 'subsystém OS', 'c sm mu'), 760);
  };

  return { sekvParal, mintzberg, sedmS, ovladani, rizeni, regulace, cyklus, matice, subsystemy, oblasti, kompetenceGrid, stabilita, systemOkoli, agregace, orgStupne, eisenhower, stylyGrid, komunikace, smery, spolehlivost, motivace, vazby, typologie, fazeSub, uroveni, orgTypy, ridiciStruktury, infoUrovne, delegovani, komunikaceUcastnici, generace, fayolMapa };
})();
