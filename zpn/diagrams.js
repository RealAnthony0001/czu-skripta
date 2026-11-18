// Diagramy předmětu Základy právních nauk (SVG, skládané přes helpery DG z assets/dg.js)
const ZPN = (() => {
  const { svg, text, rect, line, path, box } = DG;

  // 1) soukromé × veřejné právo: vztah rovných × vztah nadřízenosti
  const publicPrivate = () => svg(760, 250,
    text(190, 24, 'SOUKROMÉ PRÁVO', 'c bd tD') + text(570, 24, 'VEŘEJNÉ PRÁVO', 'c bd tA') + line(380, 10, 380, 240, 'ln ds') +
    box(30, 95, 130, 50, 'fD', 'Osoba A', 'FO / PO') + box(220, 95, 130, 50, 'fD', 'Osoba B', 'FO / PO') +
    line(160, 120, 220, 120, 'lD', 'both') + text(190, 85, 'rovnost', 'c sm tD') +
    text(190, 185, 'vztah vzniká projevem vůle (smlouva)', 'c sm mu') + text(190, 205, '„co není zakázáno, je dovoleno“', 'c sm mu') + text(190, 225, 'převážně dispozitivní normy', 'c sm mu') +
    box(490, 50, 160, 50, 'fA', 'Orgán veřejné moci', 'soud, úřad') + box(490, 150, 160, 50, 'b', 'Osoba', 'FO / PO') +
    line(570, 100, 570, 150, 'lA', 'end') + text(582, 130, 'nadřízenost (subordinace)', 'sm tA') +
    text(570, 225, 'orgán smí jen to, co mu dovolí zákon (legalita)', 'c sm mu') + text(570, 243, 'převážně kogentní normy', 'c sm mu'));

  // 2) absolutní (erga omnes) × relativní (inter partes) právo
  const absRel = () => {
    let o = text(190, 20, 'ABSOLUTNÍ – vůči všem (erga omnes)', 'c bd tD') + text(570, 20, 'RELATIVNÍ – mezi stranami (inter partes)', 'c bd tA') + line(380, 10, 380, 240, 'ln ds');
    o += box(130, 103, 120, 44, 'fD', 'Vlastník');
    for (const a of [-150, -90, -30, 30, 90, 150]) {
      const r = a * Math.PI / 180, dx = Math.cos(r), dy = Math.sin(r), tx = 190 + 150 * dx, ty = 125 + 82 * dy;
      o += line(190 + 70 * dx, 125 + 30 * dy, tx - 40 * dx, ty - 16 * dy, 'ln ds', 'end') + rect(tx - 35, ty - 13, 70, 26, 'b') + text(tx, ty + 4, 'kdokoli', 'c sm');
    }
    o += text(190, 240, 'všichni ostatní musí vlastníka nerušit', 'c sm mu');
    o += box(420, 100, 120, 50, 'fA', 'Věřitel') + box(620, 100, 120, 50, 'b', 'Dlužník') + line(540, 125, 620, 125, 'lA', 'end') +
      text(580, 90, 'pohledávka', 'c sm tA') + text(580, 175, 'konkrétní dlužník má povinnost', 'c sm mu') + text(580, 193, 'dát, konat, zdržet se nebo strpět', 'c sm mu') +
      text(580, 240, 'např. kupní cena, nájemné, náhrada škody', 'c sm mu');
    return svg(760, 250, o);
  };

  // 3) struktura normy na příkladu nálezu
  const normDiagram = () => svg(760, 235,
    text(30, 30, 'JESTLIŽE', 'sm tD') + text(370, 30, 'PAK', 'sm tE') +
    box(20, 38, 330, 56, 'fD', 'Kdo najde ztracenou věc,') + box(360, 38, 380, 56, 'fE', 'je povinen ji vydat vlastníkovi.') +
    text(185, 118, 'HYPOTÉZA', 'c bd tD') + text(185, 136, 'adresát a podmínky: nálezce, nalezení věci', 'c sm mu') +
    text(550, 118, 'DISPOZICE', 'c bd tE') + text(550, 136, 'pravidlo chování: příkaz vydat věc', 'c sm mu') +
    text(210, 162, 'NEBUDE-LI', 'sm tW') + box(200, 170, 360, 52, 'pd', 'SANKCE – v ustanovení chybí', 'plyne z jiných norem: náhrada újmy, úrok z prodlení…'));

  // 4) platnost × účinnost na časové ose
  const validityTimeline = () => svg(760, 230,
    line(30, 120, 735, 120, 'ln', 'end') +
    rect(80, 66, 570, 30, 'fD') + text(365, 86, 'PLATNOST – norma je součástí právního řádu', 'c bd') +
    rect(380, 144, 270, 30, 'fA') + text(515, 164, 'ÚČINNOST – norma se uplatňuje', 'c bd') +
    line(80, 112, 80, 128, 'lD') + text(80, 46, 'vyhlášení ve Sbírce', 'c sm bd') +
    line(380, 112, 380, 128, 'lA') + text(380, 198, 'den určený v předpisu,', 'c sm bd') + text(380, 214, 'jinak 15. den po vyhlášení', 'c sm mu') +
    line(650, 112, 650, 128, 'ln') + text(650, 46, 'zrušení (derogace)', 'c sm bd') +
    text(230, 140, 'už platí, ale ještě se jí není nutné řídit', 'c sm mu'));

  // 5) dělba státní moci a brzdy a protiváhy
  const powersDiagram = () => {
    const col = [[30, 'fD', 'ZÁKONODÁRNÁ', 'Parlament', 'Poslanecká sněmovna · Senát'], [280, 'fE', 'VÝKONNÁ', 'Prezident · vláda', 'státní zastupitelství'], [530, 'fA', 'SOUDNÍ', 'Ústavní soud · soudy', 'nezávislé, vázané zákonem']];
    let o = box(290, 8, 180, 46, 'b', 'Lid', 'vykonává státní moc (čl. 2)');
    for (const [x, c, h, a, b] of col) o += line(380, 54, x + 100, 86, 'ln ds', 'end') + text(x + 100, 104, h, 'c sm mu') + box(x, 110, 200, 64, c, a, b);
    const checks = ['vláda odpovídá Poslanecké sněmovně (čl. 68)', 'prezident jmenuje vládu a může rozpustit Sněmovnu', 'soudce Ústavního soudu jmenuje prezident se souhlasem Senátu', 'Ústavní soud ruší zákony v rozporu s ústavním pořádkem'];
    o += text(30, 212, 'BRZDY A PROTIVÁHY', 'sm bd tW');
    checks.forEach((s, i) => { o += text(30 + (i % 2) * 365, 238 + Math.floor(i / 2) * 24, '→ ' + s, 'sm'); });
    return svg(760, 290, o);
  };

  // 6) právní vztah: předpoklady + prvky (subjekt, objekt, obsah) na kupní smlouvě
  const relationDiagram = () => svg(760, 270,
    text(105, 24, '2 PŘEDPOKLADY', 'c sm mu') + box(20, 40, 170, 50, 'b', 'Právní norma', 'např. občanský zákoník') + box(20, 150, 170, 50, 'b', 'Právní skutečnost', 'např. kupní smlouva') +
    line(190, 65, 248, 105, 'ln', 'end') + line(190, 175, 248, 150, 'ln', 'end') +
    rect(250, 20, 490, 240, 'pd') + text(495, 42, 'PRÁVNÍ VZTAH – 3 prvky', 'c bd') +
    box(270, 62, 150, 50, 'fD', 'Subjekt', 'prodávající') + box(570, 62, 150, 50, 'fD', 'Subjekt', 'kupující') +
    line(420, 76, 570, 76, 'lA', 'end') + text(495, 70, 'převést vlastnictví', 'c sm') +
    line(570, 100, 420, 100, 'lA', 'end') + text(495, 118, 'zaplatit kupní cenu', 'c sm') +
    text(495, 146, 'OBSAH: práva a povinnosti', 'c sm bd tA') +
    box(420, 190, 150, 50, 'fE', 'Objekt', 'nemovitost') + line(345, 112, 430, 190, 'ln ds') + line(645, 112, 560, 190, 'ln ds'));

  // 7) právní skutečnosti jako matice vůle × soulad s právem
  const factsDiagram = () => svg(760, 290,
    text(330, 42, 'V SOULADU S PRÁVEM', 'c sm bd tD') + text(600, 42, 'V ROZPORU S PRÁVEM', 'c sm bd tA') +
    text(20, 96, 'Závislé na vůli', 'bd') + text(20, 114, '(subjektivní)', 'sm mu') +
    text(20, 196, 'Nezávislé na vůli', 'bd') + text(20, 214, '(objektivní)', 'sm mu') +
    box(200, 60, 260, 80, 'fD', 'Právní jednání', 'smlouva, výpověď, závěť') + box(470, 60, 260, 80, 'fA', 'Protiprávní jednání', 'trestný čin, přestupek, porušení smlouvy') +
    box(200, 160, 260, 80, 'fD', 'Právní událost', 'narození, smrt, uplynutí času') + box(470, 160, 260, 80, 'fA', 'Protiprávní stav', 'živelní pohroma, pracovní úraz') +
    text(465, 272, '+ konstitutivní rozhodnutí soudu či jiného orgánu (zakládá, mění, ruší vztah)', 'c sm mu'));

  // 8) zdánlivé × neplatné × platné jednání – rozhodovací postup
  const defectsDiagram = () => svg(760, 330,
    box(20, 18, 300, 58, 'b', 'Má jednání náležitosti pro vznik?', 'vůle, vážnost, určitost, srozumitelnost') +
    line(320, 47, 418, 47, 'ln', 'end') + text(368, 40, 'NE', 'c sm tW') + box(420, 18, 320, 58, 'fW', 'Zdánlivé jednání', 'jako by nebylo – nepřihlíží se (§ 554)') +
    line(170, 76, 170, 118, 'ln', 'end') + text(180, 102, 'ANO', 'sm mu') +
    box(20, 120, 300, 58, 'b', 'Trpí vadou platnosti?', 'svéprávnost, forma, omyl, tíseň, předmět…') +
    line(320, 149, 418, 149, 'ln', 'end') + text(368, 142, 'NE', 'c sm tD') + box(420, 120, 320, 58, 'fD', 'Platné jednání', 'spíše platné než neplatné (§ 574)') +
    line(170, 178, 170, 220, 'ln', 'end') + text(180, 204, 'ANO', 'sm mu') +
    box(20, 222, 300, 58, 'b', 'Zjevný rozpor s dobrými mravy', 'či zákonem a veřejným pořádkem? (§ 588)') +
    path('M320,240 L360,240 L360,232 L418,232', 'ln', 'end') + text(368, 225, 'ANO', 'c sm tA') + box(420, 206, 320, 52, 'fA', 'Absolutní neplatnost', 'namítne kdokoli, soud i bez návrhu, bez lhůty') +
    path('M320,262 L360,262 L360,294 L418,294', 'ln', 'end') + text(368, 312, 'NE', 'c sm tE') + box(420, 268, 320, 52, 'fE', 'Relativní neplatnost', 'dovolá se jen chráněná osoba, v promlčecí době'));

  // 9) kalendář k příkladu: lhůta 8 dnů od 21. 10. 2024, 28. 10. svátek
  const calendarDiagram = () => {
    const x0 = 30, y0 = 58, w = 44, h = 34, first = (new Date(2024, 9, 1).getDay() + 6) % 7; // pondělí = 0
    let o = text(x0 + 3.5 * w, 24, 'Říjen 2024', 'c bd') + ['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne'].map((d, i) => text(x0 + i * w + w / 2, y0 - 8, d, 'c sm mu')).join('');
    for (let d = 1; d <= 31; d++) {
      const k = first + d - 1, x = x0 + (k % 7) * w, y = y0 + Math.floor(k / 7) * h;
      const cls = d === 29 ? 'fA' : d === 28 ? 'fW' : d >= 21 && d < 28 ? 'fD' : 'b';
      o += rect(x + 1, y + 1, w - 2, h - 2, cls) + text(x + w / 2, y + h / 2 + 5, d, `c mo${k % 7 > 4 && cls === 'b' ? ' mu' : ''}`);
    }
    const lx = 370;
    return svg(760, 290, o +
      rect(lx, 70, 18, 18, 'fD') + text(lx + 28, 84, '1.–7. den lhůty: 21.–27. 10.', '') +
      rect(lx, 110, 18, 18, 'fW') + text(lx + 28, 124, '8. den 28. 10. – státní svátek', '') +
      rect(lx, 150, 18, 18, 'fA') + text(lx + 28, 164, 'konec lhůty: úterý 29. 10. (§ 607)', 'bd') +
      text(lx, 210, 'Padne-li poslední den na sobotu, neděli', 'sm mu') + text(lx, 228, 'nebo svátek, posouvá se na nejbližší', 'sm mu') + text(lx, 246, 'následující pracovní den.', 'sm mu'));
  };

  // 10) promlčení × prekluze: co zbude po uplynutí doby
  const promlceniDiagram = () => svg(760, 260,
    text(20, 52, 'Promlčení', 'bd tD') + rect(150, 30, 300, 36, 'fD') + text(300, 53, 'lze vymáhat u soudu', 'c bd') +
    rect(450, 30, 290, 36, 'pd') + text(595, 53, 'právo trvá – dlužník může namítnout', 'c sm') +
    text(595, 86, 'naturální obligace · soud jen na námitku', 'c sm mu') +
    text(20, 152, 'Prekluze', 'bd tA') + rect(150, 130, 300, 36, 'fA') + text(300, 153, 'propadná lhůta', 'c bd') +
    line(450, 120, 450, 176, 'lA') + text(595, 153, 'právo zaniklo', 'c bd tA') + text(595, 186, 'soud přihlédne sám', 'c sm mu') +
    line(150, 210, 740, 210, 'ln', 'end') + text(150, 230, 'vznik práva', 'sm mu') + text(450, 230, 'uplynutí doby / lhůty', 'c sm mu') +
    text(20, 252, 'Plnění po uplynutí: promlčení → nelze žádat zpět · prekluze → bezdůvodné obohacení, vrací se', 'sm'));

  // 11) struktura NOZ v poměru počtu paragrafů
  const nozBar = () => {
    const parts = [[1, 654, '1. Obecná část', 'fD'], [655, 975, '2. Rodinné', 'fE'], [976, 1474, '3. Věcná', 'fA'], [1475, 1720, 'Dědické', 'fA'], [1721, 3014, '4. Relativní majetková práva', 'fW'], [3015, 3081, '5.', 'b']];
    const X = p => 30 + (p - 1) / 3081 * 700;
    let o = path(`M${X(976)},64 v-8 H${X(1721)} v8`) + text((X(976) + X(1721)) / 2, 46, 'absolutní majetková práva (§ 976–1720)', 'c sm tA');
    parts.forEach(([a, b, l, c], i) => {
      const x = X(a), w = X(b + 1) - x;
      o += rect(x, 70, w, 50, c) + (w > 50 ? text(x + w / 2, 100, l, 'c sm bd') : '') + text(x + w / 2, 140 + (i % 2) * 16, `§ ${a}–${b}`, 'c sm mu');
    });
    return svg(760, 200, o + text(X(3015) + 10, 188, '5. společná, přechodná a závěrečná', 'e sm mu') + text(30, 188, 'celkem 3081 paragrafů', 'sm mu'));
  };

  // 12) pořadí pravidel v soukromém právu
  const rulesOrder = () => svg(760, 250,
    rect(20, 20, 720, 220, 'fA') + text(380, 46, 'Kogentní normy, dobré mravy, veřejný pořádek, postavení osob', 'c bd') + text(380, 64, 'platí vždy – od nich se odchýlit nelze', 'c sm mu') +
    box(60, 100, 280, 100, 'fD', '1. Dohoda stran', 'autonomie vůle – má přednost') + box(420, 100, 280, 100, 'b', '2. Dispozitivní zákon', 'použije se, není-li dohoda') +
    line(340, 150, 420, 150, 'ln', 'end') + text(380, 140, 'chybí-li', 'c sm mu'));

  // 13) legislativní proces a život zákona po vyhlášení
  const legislativeProcess = () => {
    const rows = [
      ['fD', 'Iniciativa', 'čl. 41 Ústavy', ['poslanec, skupina poslanců, Senát, vláda, zastupitelstvo kraje', 'návrh se podává Poslanecké sněmovně']],
      ['fD', 'Poslanecká sněmovna', 'tři čtení', ['schváleno většinou přítomných (ústavní zákon: 3/5 všech poslanců)', 'zamítnutý návrh = konec procesu']],
      ['fD', 'Senát', '30 dnů', ['schválí, nebo se do 30 dnů neusnese → zákon je přijat', 'zamítne / vrátí s pozměňovacími návrhy → zpět do PS, ta může setrvat 101 hlasy']],
      ['fW', 'Prezident', '15 dnů', ['podepíše, nebo zákon vrátí (veto; neplatí pro ústavní zákony)', 'PS veto přehlasuje většinou všech poslanců (101), jinak zákon neprojde']],
      ['fA', 'Sbírka zákonů', 'vyhlášení', ['podepíše prezident, předseda PS a předseda vlády', 'zákon se vyhlásí uveřejněním ve Sbírce zákonů a mezinárodních smluv']],
      ['b', 'Platnost', 'dnem vyhlášení', ['zákon je součástí právního řádu, ještě se jím není nutné řídit']],
      ['b', 'Účinnost', 'den určený v zákoně', ['jinak 15. den po vyhlášení; od té chvíle se podle zákona musí postupovat']],
      ['b', 'Uplatňování a změny', 'trvání zákona', ['úřady a soudy zákon aplikují; novela či nový zákon ho mění nebo ruší (derogace)', 'Ústavní soud ho může na návrh zrušit pro rozpor s ústavním pořádkem (nález)']]
    ];
    let o = '', y = 20;
    rows.forEach(([c, h, sub, notes], i) => {
      if (i === 5) { o += line(20, y + 8, 740, y + 8, 'ln ds') + text(740, y + 4, 'PO VYHLÁŠENÍ', 'e sm mu'); y += 24; }
      o += box(20, y, 210, 46, c, h, sub);
      notes.forEach((n, k) => { o += text(250, y + (notes.length > 1 ? 19 + k * 17 : 27), n, k ? 'sm mu' : 'sm'); });
      if (i < rows.length - 1) o += line(125, y + 46, 125, y + 60 + (i === 4 ? 24 : 0), 'ln', 'end');
      y += 60;
    });
    return svg(760, y - 6, o);
  };

  // 13) stránka zákona (občanský zákoník) s popisky
  const lawPage = () => {
    const L = (y, s, c) => text(225, y, s, c);
    const tag = (y, h, x) => line(432, y - 4, 462, y - 4, 'ln') + text(470, y, h, 'bd') + text(470, y + 16, x, 'sm mu');
    return svg(760, 430,
      rect(20, 10, 410, 410, 'b') + rect(36, 214, 378, 104, 'fW') +
      text(414, 38, 'č. 89/2012 Sb.', 'e sm') + L(62, 'ZÁKON', 'c bd') + L(82, 'ze dne 3. února 2012', 'c sm') + L(104, 'občanský zákoník', 'c bd') +
      L(130, 'Parlament se usnesl na tomto zákoně České republiky:', 'c sm mu') +
      L(162, 'ČÁST PRVNÍ – [název části]', 'c bd') + L(182, 'HLAVA I – [název hlavy]', 'c sm bd') + L(200, 'Díl 1 – [název dílu]', 'c sm') +
      L(234, '§ 605', 'c bd') + text(52, 256, '(1) Lhůta nebo doba určená podle dnů počíná dnem, …', 'sm') + text(52, 276, '(2) Konec lhůty nebo doby určené podle týdnů, měsíců …', 'sm') + L(304, '§ 606 · § 607 · § 608 …', 'c sm') +
      L(340, '⋮', 'c mu') + L(362, '§ 3081', 'c bd') + L(380, 'Tento zákon nabývá účinnosti dnem 1. ledna 2014.', 'c sm') + L(406, 'prezident · předseda Sněmovny · předseda vlády', 'c sm mu') +
      tag(38, 'Číslo a rok ve Sbírce', '89/2012 Sb. – podle toho se cituje') + tag(90, 'Druh, datum a název', 'zákon ze dne …, název předpisu') +
      tag(130, 'Úvodní věta', 'kdo zákon přijal') + tag(172, 'Členění: část → hlava → díl', 'jen u rozsáhlých zákonů') +
      tag(226, 'Paragraf (§)', 'základní číslovaná jednotka') + tag(270, 'Odstavec (odst.)', 'číslo v závorce na začátku') +
      tag(312, 'Průběžné číslování', '§ jdou dál napříč částmi, OZ až § 3081') + tag(366, 'Účinnost (v závěru)', 'jinak 15. den po vyhlášení') + tag(408, 'Podpisy', 'tři ústavní činitelé'));
  };

  // 14) citace ustanovení
  const citation = () => {
    const part = (x, w, c, t, h, s) => box(x, 20, w, 44, c, t) + text(x + w / 2, 88, h, 'c bd') + (s ? text(x + w / 2, 106, s, 'c sm mu') : '');
    return svg(760, 170,
      part(20, 76, 'fD', '§ 5', 'paragraf') + part(106, 110, 'fW', 'odst. 1', 'odstavec') + part(226, 110, 'fE', 'písm. d)', 'písmeno') +
      part(346, 240, 'fA', 'zákona č. 252/1997 Sb.', 'který zákon', 'číslo / rok vyhlášení, Sb.') + part(596, 144, 'b', 'o zemědělství', 'název zákona') +
      line(30, 140, 730, 140, 'ln', 'end') + text(380, 160, 'čte se od nejmenší jednotky k předpisu, v němž leží', 'c sm mu'));
  };

  // 14) uzavření smlouvy: jednání → oferta → akceptace → smlouva, varianty přijetí
  const kontrakt = () => svg(760, 262,
    box(20, 30, 150, 56, 'b', 'Jednání', '§ 1728–1730') + box(225, 30, 150, 56, 'fW', 'Oferta (nabídka)', '§ 1732–1733') +
    box(430, 30, 140, 56, 'fA', 'Akceptace', '§ 1734–1735') + box(615, 30, 125, 56, 'fD', 'Smlouva', 'uzavřena (§ 1725)') +
    line(170, 58, 225, 58, 'ln', 'end') + line(375, 58, 430, 58, 'ln', 'end') + line(570, 58, 615, 58, 'ln', 'end') +
    text(98, 106, 'poctivost, informace, důvěrnost', 'c sm mu') +
    line(500, 86, 500, 120, 'ln') + line(120, 120, 620, 120, 'ln') + text(512, 108, 'jak může přijetí vypadat', 'sm mu') +
    line(120, 120, 120, 152, 'ln', 'end') + line(360, 120, 360, 152, 'ln', 'end') + line(620, 120, 620, 152, 'ln', 'end') +
    box(20, 152, 200, 56, 'fE', 'S dodatkem, výhradou', '= odmítnutí + nová nabídka') +
    box(250, 152, 220, 56, 'b', 'S nepodstatnou odchylkou', 'platí, pokud oferent neodmítne') +
    box(500, 152, 240, 56, 'b', 'Konkludentně (§ 1744)', 'plněním podle nabídky') +
    text(380, 238, 'Zvláštní způsoby: dražba (příklep, § 1771) · veřejná soutěž (§ 1772) · veřejná nabídka (§ 1780)', 'c sm mu'));

  // 15) koupě nemovitosti krok za krokem
  const koupeNemovitosti = () => {
    const st = [
      ['b', '1 Prověření', ['výpis z katastru', 'zástava, břemena,', 'plomba, nájemce']],
      ['fW', '2 Smlouva', ['písemná forma', 'podpisy na jedné', 'listině, ověřené']],
      ['fE', '3 Úschova', ['cena do úschovy', 'advokát/notář/banka', 'podle smlouvy']],
      ['fA', '4 Návrh', ['formulář KÚ', 'poplatek 2 000 Kč', 'i datovou schránkou']],
      ['fA', '5 Rozhodnutí', ['KÚ povolí vklad', 'účinky zpětně ke', 'dni podání návrhu']],
      ['fD', '6 Vlastník', ['kupující je', 'vlastníkem', 'cena se uvolní']]
    ];
    let o = '';
    st.forEach(([c, h, d], i) => {
      const x = 15 + i * 123;
      o += box(x, 20, 105, 40, c, h) + d.map((t, k) => text(x + 52, 82 + k * 16, t, 'c sm mu')).join('');
      if (i < st.length - 1) o += line(x + 105, 40, x + 123, 40, 'ln', 'end');
    });
    return svg(760, 150, o + text(380, 142, 'Vlastnictví nemovitosti vzniká až zápisem (vkladem) do katastru – ne podpisem smlouvy.', 'c sm bd'));
  };

  // ---- Dědictví ----
  const predpokladyDedeni = () => {
    const st = [['b', '1 Smrt zůstavitele', 'či prohlášení za mrtvého'], ['b', '2 Pozůstalost', 'aktiva i pasiva'], ['b', '3 Způsobilý dědic', 'FO, PO, stát (odúmrť)'], ['b', '4 Dědický titul', 'smlouva · závěť · zákon']];
    let o = '';
    st.forEach(([c, h, s], i) => { const x = 10 + i * 149; o += box(x, 30, 140, 56, c, h, s); o += line(x + 140, 58, x + 149, 58, 'ln', 'end'); });
    o += box(606, 30, 144, 56, 'fD', 'Dědic dědí', 'od smrti zůstavitele');
    o += text(380, 18, 'VŠECHNY ČTYŘI PŘEDPOKLADY MUSÍ BÝT SPLNĚNY ZÁROVEŇ', 'c sm mu');
    o += box(160, 112, 300, 50, 'fA', 'Dědická nezpůsobilost', 'úmyslný TČ proti zůstaviteli · čin proti poslední vůli') + line(310, 112, 310, 88, 'lA', 'end') + text(320, 104, 'vylučuje', 'sm tA');
    o += box(480, 112, 265, 50, 'fW', 'Dědic může dědictví odmítnout', 'do 1 měsíce od vyrozumění soudem');
    return svg(760, 176, o);
  };
  const dedickeTridy = () => {
    const R = [
      ['1.', '§ 1635', 'děti + manžel', 'každý stejným dílem; za nedědící dítě jeho děti'],
      ['2.', '§ 1636', 'manžel, rodiče, spolužijící*', 'stejným dílem, manžel vždy nejméně ½'],
      ['3.', '§ 1637', 'sourozenci, spolužijící*', 'stejným dílem; za nedědícího sourozence jeho děti'],
      ['4.', '§ 1638', 'prarodiče', 'stejným dílem'],
      ['5.', '§ 1639', 'prarodiče rodičů', 'otcova strana ½, matčina strana ½'],
      ['6.', '§ 1640', 'děti dětí sourozenců, děti prarodičů', 'každý stejným dílem; za nedědící dítě prarodičů jeho děti']
    ];
    let o = text(20, 22, 'TŘÍDA', 'sm bd mu') + text(125, 22, 'KDO DĚDÍ', 'sm bd mu') + text(400, 22, 'JAK SE DĚLÍ', 'sm bd mu');
    R.forEach(([n, p, who, how], i) => {
      const y = 32 + i * 44;
      o += box(20, y, 90, 34, i === 0 ? 'fD' : i === 1 ? 'fW' : 'b', n + ' třída', p) + box(120, y, 270, 34, 'b', who) + text(400, y + 22, how, 'sm');
    });
    o += text(20, 314, 'Nedědí-li nikdo ze třídy, nastupuje další – bližší třída vylučuje vzdálenější. Nedědí-li nikdo, připadne pozůstalost státu (odúmrť).', 'sm bd');
    o += text(20, 334, '* spolužijící = žil se zůstavitelem nejméně 1 rok před smrtí ve společné domácnosti a pečoval o ni nebo byl odkázán výživou na zůstavitele', 'sm mu');
    return svg(760, 346, o);
  };
  // pruhový graf podílů: parts = [[popisek, čitatel, jmenovatel, třída], …]
  const podily = (title, parts) => {
    let x = 20, o = text(20, 22, title, 'sm bd');
    parts.forEach(([l, n, d, c]) => {
      const w = 720 * n / d;
      o += rect(x, 34, w, 44, c) + text(x + w / 2, 54, `${n}/${d}`, 'c bd') + text(x + w / 2, 70, l, 'c sm');
      x += w;
    });
    return svg(760, 92, o);
  };

  // ---- Rodinné právo ----
  const sjmVyporadani = () => svg(760, 268,
    line(20, 70, 740, 70, 'ln', 'end') +
    line(70, 58, 70, 82, 'lA') + text(70, 46, 'zánik SJM', 'c sm bd') + text(20, 100, 'rozvod (PM), smrt,', 'sm mu') + text(20, 116, 'zrušení, zúžení', 'sm mu') +
    rect(90, 56, 380, 28, 'fD') + text(280, 75, '3 roky od právní moci rozsudku o rozvodu', 'c bd') +
    line(470, 58, 470, 82, 'lA') + text(470, 46, 'uplynutí 3 let', 'c sm bd') +
    box(150, 130, 150, 56, 'fD', 'a) dohoda manželů', 'o vypořádání SJM') + box(315, 130, 160, 56, 'fD', 'b) rozhodnutí soudu', 'na návrh manžela') +
    rect(490, 110, 250, 128, 'fA') + text(615, 130, 'c) domněnka § 741 (nevyvratitelná)', 'c sm bd') +
    text(500, 154, '• movité věci tomu, kdo je 3 roky', 'sm') + text(512, 170, 'účelně držel a užíval', 'sm') +
    text(500, 192, '• ostatní věci: podílové spoluvlastnictví ½', 'sm') + text(500, 214, '• práva, dluhy, pohledávky: oběma', 'sm') + text(512, 230, 'společně, stejným dílem', 'sm') +
    text(312, 214, 'po uplynutí 3 let se a), b) promlčí', 'c sm mu') +
    text(20, 260, 'd) při smrti jednoho z manželů rozhodne o vypořádání SJM soud v dědickém řízení', 'sm mu'));
  const sjmRezimy = () => svg(760, 210,
    box(280, 14, 200, 50, 'fD', 'Společné jmění manželů', 'vzniká sňatkem, končí zánikem') +
    line(380, 64, 380, 84, 'ln') + line(130, 84, 630, 84, 'ln') +
    line(130, 84, 130, 100, 'ln', 'end') + line(380, 84, 380, 100, 'ln', 'end') + line(630, 84, 630, 100, 'ln', 'end') +
    box(30, 100, 200, 50, 'b', 'Zákonný režim', 'vzniká ze zákona sňatkem') + box(280, 100, 200, 50, 'fW', 'Smluvený režim', 'manželé si ho upraví smlouvou') +
    box(530, 100, 200, 50, 'fA', 'Režim založený soudem', 'na návrh manžela') +
    text(630, 172, 'zrušení SJM · zúžení SJM', 'c sm') + text(630, 190, 'režim oddělených jmění', 'c sm') +
    text(130, 172, 'majetek, dluhy, příjmy,', 'c sm mu') + text(130, 190, 'zisk z výlučného majetku', 'c sm mu'));

  // ---- Podnikání ----
  const zivnostiStrom = () => svg(760, 236,
    box(280, 12, 200, 46, 'fD', 'Živnosti', 'zákon č. 455/1991 Sb.') +
    line(380, 58, 380, 74, 'ln') + line(200, 74, 610, 74, 'ln') + line(200, 74, 200, 90, 'ln', 'end') + line(610, 74, 610, 90, 'ln', 'end') +
    box(80, 90, 240, 46, 'b', 'OHLAŠOVACÍ', 'vznik dnem ohlášení') + box(490, 90, 240, 46, 'fA', 'KONCESOVANÉ – příloha č. 3', 'vznik právní mocí koncese') +
    line(200, 136, 200, 150, 'ln') + line(60, 150, 340, 150, 'ln') +
    line(60, 150, 60, 164, 'ln', 'end') + line(200, 150, 200, 164, 'ln', 'end') + line(340, 150, 340, 164, 'ln', 'end') +
    box(10, 164, 110, 46, 'fW', 'Řemeslné', 'příloha č. 1') + box(145, 164, 110, 46, 'fW', 'Vázané', 'příloha č. 2') + box(280, 164, 120, 46, 'fD', 'Volné', 'příloha č. 4') +
    text(130, 228, 'odborná způsobilost ano', 'c sm tW') + text(340, 228, 'bez odborné způsobilosti', 'c sm tD') +
    text(610, 158, 'odborná způsobilost + povolení', 'c sm') + text(610, 176, 'státu (stanovisko orgánu do 30 dnů)', 'c sm') + text(610, 200, 'např. taxislužba, zbraně, ostraha', 'c sm mu'));
  const zalozeniVznik = () => svg(760, 210,
    line(20, 80, 740, 80, 'ln', 'end') +
    line(80, 68, 80, 92, 'lD') + box(15, 14, 160, 46, 'fD', 'ZALOŽENÍ', 'společenská smlouva') +
    rect(80, 76, 400, 8, 'fW') + text(290, 66, 'do 6 měsíců podat návrh na zápis', 'c sm bd') +
    line(480, 68, 480, 92, 'lA') + box(405, 14, 150, 46, 'fA', 'VZNIK', 'zápis do OR') +
    text(80, 118, 'kapitálová společnost: veřejná listina', 'sm') + text(80, 136, '(notářský zápis); jeden zakladatel =', 'sm') + text(80, 154, 'zakladatelská listina', 'sm') +
    text(480, 118, 'společnost je PO od zápisu;', 'sm') + text(480, 136, 'do té doby jen smluvní vztah', 'sm') + text(480, 154, 'mezi zakladateli', 'sm') +
    text(20, 196, 'Návrh nepodán do 6 měsíců → stejné účinky jako odstoupení od smlouvy. Zánik: zrušení (s likvidací / bez) → výmaz z OR.', 'sm mu'));
  const zivnostUrady = () => svg(760, 210,
    box(10, 20, 260, 52, 'fA', 'Ministerstvo průmyslu a obchodu', 'působnost Živnostenského úřadu ČR') +
    box(10, 90, 260, 52, 'fW', 'Krajský živnostenský úřad', 'řídí, koordinuje, kontroluje') +
    box(10, 160, 260, 46, 'fD', 'Obecní živnostenský úřad', 'ohlášení, kontroly, CRM') +
    line(130, 160, 130, 142, 'ln', 'end') + line(130, 90, 130, 72, 'ln', 'end') +
    text(140, 154, 'odvolání', 'sm mu') + text(140, 84, 'odvolání', 'sm mu') +
    text(288, 44, 'správce živnostenského rejstříku; koncepce; odvolání proti krajským ŽÚ', 'sm') +
    text(288, 114, 'rozhoduje o odvolání proti obecním ŽÚ; může nařídit kontrolu', 'sm') +
    text(288, 180, 'provozuje rejstřík; centrální registrační místo (daně, sociální', 'sm') + text(288, 198, 'a zdravotní pojištění, volná pracovní místa)', 'sm'));
  const formyPodnikani = () => {
    const R = [['OSVČ', 'ne', 'celým svým majetkem', '—'], ['v.o.s.', 'ano', 'všichni společníci neomezeně', 'není stanoven'], ['k.s.', 'ano', 'komplementáři neomezeně, komanditisté do nesplaceného vkladu', 'není stanoven'], ['s.r.o.', 'ano', 'společnost majetkem, společníci omezeně', 'vklad min. 1 Kč'], ['a.s.', 'ano', 'společnost svým majetkem', '2 000 000 Kč / 80 000 EUR'], ['družstvo', 'ano', 'družstvo svým majetkem', 'není stanoven']];
    let o = text(20, 20, 'FORMA', 'sm bd mu') + text(110, 20, 'PO', 'sm bd mu') + text(150, 20, 'RUČENÍ ZA DLUHY', 'sm bd mu') + text(560, 20, 'MIN. ZÁKLADNÍ KAPITÁL', 'sm bd mu');
    R.forEach(([f, po, r, k], i) => {
      const y = 30 + i * 38, c = i < 3 ? 'fA' : 'fD';
      o += box(20, y, 80, 30, c, f) + text(118, y + 20, po, 'c sm') + text(150, y + 20, r, 'sm') + text(560, y + 20, k, 'sm bd');
    });
    o += text(20, 266, 'Osobní společnosti a OSVČ (červeně): ručí se osobně. Kapitálové (modře): za dluhy ručí společnost svým majetkem.', 'sm');
    return svg(760, 278, o);
  };

  // ---- Pracovní právo ----
  const zavislaPrace = () => svg(760, 262,
    box(300, 92, 160, 60, 'fD', 'ZÁVISLÁ PRÁCE', '§ 2 zákoníku práce') +
    text(10, 22, 'ZNAKY (§ 2 odst. 1)', 'sm bd tD') +
    box(10, 32, 250, 40, 'b', 'nadřízenost × podřízenost') + box(10, 82, 250, 40, 'b', 'výlučně osobně', 'jménem zaměstnavatele') + box(10, 132, 250, 40, 'b', 'podle pokynů zaměstnavatele') +
    line(260, 52, 300, 110, 'ln', 'end') + line(260, 102, 300, 122, 'ln', 'end') + line(260, 152, 300, 134, 'ln', 'end') +
    text(750, 22, 'PODMÍNKY (§ 2 odst. 2)', 'e sm bd tW') +
    box(500, 32, 250, 40, 'b', 'za mzdu, plat, odměnu') + box(500, 82, 250, 40, 'b', 'na náklady zaměstnavatele', 'a na jeho odpovědnost') + box(500, 132, 250, 40, 'b', 'v pracovní době', 'nebo jinak dohodnuté') + box(500, 182, 250, 40, 'b', 'na pracovišti zaměstnavatele', 'nebo dohodnutém místě') +
    line(500, 52, 460, 110, 'ln', 'end') + line(500, 102, 460, 120, 'ln', 'end') + line(500, 152, 460, 132, 'ln', 'end') + line(500, 202, 460, 144, 'ln', 'end') +
    text(380, 238, 'jen v základním pracovněprávním vztahu (§ 3)', 'c sm bd') + text(380, 256, 'práce „na IČO“ (švarcsystém) není pracovněprávní vztah', 'c sm tA'));
  const pracVztahy = () => svg(760, 196,
    box(250, 12, 260, 46, 'fD', 'Základní pracovněprávní vztahy', '§ 3 ZP') +
    line(380, 58, 380, 72, 'ln') + line(190, 72, 570, 72, 'ln') + line(190, 72, 190, 86, 'ln', 'end') + line(570, 72, 570, 86, 'ln', 'end') +
    box(80, 86, 220, 46, 'b', 'Pracovní poměr', 'vzniká (§ 33):') + box(440, 86, 260, 46, 'b', 'Dohody o pracích mimo PP', '') +
    box(20, 146, 150, 40, 'fW', 'pracovní smlouvou') + box(190, 146, 120, 40, 'fW', 'jmenováním') +
    box(420, 146, 140, 40, 'fE', 'DPP', 'provedení práce') + box(580, 146, 140, 40, 'fE', 'DPČ', 'pracovní činnosti') +
    line(150, 132, 95, 146, 'ln', 'end') + line(230, 132, 250, 146, 'ln', 'end') + line(530, 132, 490, 146, 'ln', 'end') + line(610, 132, 650, 146, 'ln', 'end'));

  return { predpokladyDedeni, dedickeTridy, podily, sjmVyporadani, sjmRezimy, zivnostiStrom, zalozeniVznik, zivnostUrady, formyPodnikani, zavislaPrace, pracVztahy, kontrakt, koupeNemovitosti, lawPage, citation, legislativeProcess, publicPrivate, absRel, normDiagram, validityTimeline, powersDiagram, relationDiagram, factsDiagram, defectsDiagram, calendarDiagram, promlceniDiagram, nozBar, rulesOrder };
})();
