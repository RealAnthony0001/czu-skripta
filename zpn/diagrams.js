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

  return { legislativeProcess, publicPrivate, absRel, normDiagram, validityTimeline, powersDiagram, relationDiagram, factsDiagram, defectsDiagram, calendarDiagram, promlceniDiagram, nozBar, rulesOrder };
})();
