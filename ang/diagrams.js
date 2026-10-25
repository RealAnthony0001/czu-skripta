// Diagramy předmětu ANG (SVG, skládané přes helpery DG z assets/dg.js)
const ANG = (() => {
  const { svg, text, rect, line, path, box } = DG;
  const strip = s => s.replace(/<[^>]+>/g, '');
  const tw = (s, k = 7.4) => Math.ceil(strip(s).length * k) + 22;
  // víceřádkový text: každý řádek pod sebou
  const ml = (x, y, lines, cls = 'c sm', dy = 14) => lines.map((s, i) => text(x, y + i * dy, s, cls)).join('');

  // vzorec větné stavby: řádky { n: 'popisek|druhý řádek', p: [[text, třída, podtext?], …], sep: '+' | ',' | '', ex: 'příklad' }
  const formRows = (rows, note = '') => {
    const LW = 118, gap = 26, pad = 10;
    let y = pad, o = '', W = 400;
    const laid = rows.map(r => {
      const h = r.p.some(q => q[2]) ? 42 : 34, g = r.sep === '' ? 8 : gap;
      const ws = r.p.map(([l, , s = '']) => Math.max(tw(l), s ? Math.ceil(strip(s).length * 6.4) + 20 : 0, 40));
      const tot = ws.reduce((a, b) => a + b, 0) + g * (ws.length - 1);
      W = Math.max(W, pad + LW + tot + pad, r.ex ? pad + LW + Math.ceil(strip(r.ex).length * 5.9) + pad : 0);
      return { r, h, g, ws };
    });
    laid.forEach(({ r, h, g, ws }) => {
      const lab = r.n.split('|');
      o += ml(pad, y + h / 2 - (lab.length - 1) * 7 + 4, lab, 'bd sm');
      let x = pad + LW;
      r.p.forEach(([l, c, s = ''], i) => {
        o += box(x, y, ws[i], h, c, l, s);
        const sg = r.sep ?? '+';
        if (i < ws.length - 1 && sg) o += text(x + ws[i] + g / 2, y + h / 2 + 5, sg, 'c bd mu');
        x += ws[i] + g;
      });
      y += h;
      if (r.ex) { o += text(pad + LW, y + 15, r.ex, 'sm mu'); y += 15; }
      y += 14;
    });
    if (note) { o += text(W / 2, y + 4, note, 'c sm mu'); y += 18; }
    return svg(W, y + pad - 4, o, Math.max(W, 420));
  };

  // dvě krabice vedle sebe se šipkou: a, b = { h, c, t: [řádky] }
  const contrast = (a, b, mid = '') => {
    const w = 300, h = 76, y = 34;
    return svg(720, 130,
      text(10 + w / 2, 22, a.h, 'c bd mu') + text(710 - w / 2, 22, b.h, 'c bd mu') +
      rect(10, y, w, h, a.c || 'b') + ml(10 + w / 2, y + 32, a.t, 'c', 19) +
      rect(410, y, w, h, b.c || 'b') + ml(710 - w / 2, y + 32, b.t, 'c', 19) +
      line(318, y + h / 2, 402, y + h / 2, 'ln', 'end') + (mid ? text(360, y + h / 2 - 8, mid, 'c sm mu') : ''));
  };

  // osa času: vodorovná čára se šipkou do budoucnosti a svislou čárou „teď“
  const axis = (x1, x2, y, now, top, bot) =>
    line(x1, y, x2, y, 'ln', 'end') + line(now, top, now, bot, 'ln ds') + text(now, top - 4, 'teď', 'c sm bd mu');


  // sloupce s nadpisem a řádky textu: cols = [{ h, c, t: [řádky] }]; šířku řádků hlídá render (≈ 6,4 px na znak)
  const groups = (cols, note = '') => {
    const n = cols.length, g = 12, w = Math.floor((720 - 16 - g * (n - 1)) / n), rows = Math.max(...cols.map(c => c.t.length));
    const h = 38 + rows * 18 + 8;
    return svg(720, h + (note ? 26 : 8), cols.map((c, i) => {
      const x = 8 + i * (w + g);
      return rect(x, 6, w, h, c.c || 'b') + text(x + w / 2, 28, c.h, 'c bd') + ml(x + w / 2, 52, c.t, 'c sm', 18);
    }).join('') + (note ? text(360, h + 22, note, 'c sm mu') : ''));
  };

  // 1) přehled osmi časových forem na ose času
  const tenseMap = () => {
    const cols = [
      ['minulost', 'fE', [['past simple', 'I saw the film a few days ago.'], ['past continuous', 'We were living in Paris.'], ['present perfect', "I've finished the report."]]],
      ['přítomnost', 'fD', [['present simple', 'She works as a life coach.'], ['present continuous', "I'm taking an MBA course."]]],
      ['budoucnost', 'fW', [['will', "I'll take an umbrella."], ['going to', "I'm going to visit my sister."], ['present continuous for future', "We're meeting at 3.30 on Thursday."]]]
    ];
    const w = 228, g = 12;
    return svg(720, 230, cols.map(([h, c, items], k) => {
      const x = 8 + k * (w + g);
      return text(x + w / 2, 20, h, 'c bd mu') + items.map(([n, ex], i) => rect(x, 32 + i * 62, w, 54, c) + text(x + w / 2, 32 + i * 62 + 22, n, 'c bd') + text(x + w / 2, 32 + i * 62 + 40, ex, 'c sm mu')).join('');
    }).join('') + line(8, 224, 712, 224, 'ln', 'end'));
  };

  // 2) tvoření přítomných časů
  const presentForms = () => formRows([
    { n: 'Present simple|kladná', p: [['I / you / we / they', 'fD'], ['base form', 'fW', 'work']], ex: 'I work long hours.' },
    { n: 'Present simple|kladná, 3. osoba', p: [['he / she / it', 'fD'], ['verb + s', 'fW', 'works, watches']], ex: 'He watches a lot of TV.' },
    { n: 'Present simple|záporná', p: [['subject', 'fD'], ["don't / doesn't", 'fA'], ['base form', 'fW']], ex: "You don't do much exercise. · It doesn't take long." },
    { n: 'Present continuous|kladná', p: [['subject', 'fD'], ['am / is / are', 'fA'], ['verb + -ing', 'fW']], ex: 'I am working. · He is working.' },
    { n: 'Present continuous|záporná', p: [['subject', 'fD'], ['am / is / are', 'fA'], ['not', 'fE'], ['verb + -ing', 'fW']], ex: "I'm not studying any more today. · You aren't working." }
  ]);

  // 3) otázky v přítomných časech
  const questionForms = () => formRows([
    { n: 'Present simple|ano/ne otázka', p: [['Do / Does', 'fA'], ['subject', 'fD'], ['base form', 'fW']], ex: 'Do you have many hobbies? · Does he work long hours?' },
    { n: 'Present simple|s tázacím slovem', p: [['question word', 'fE'], ['do / does', 'fA'], ['subject', 'fD'], ['base form', 'fW']], ex: 'Where do you live? · How often do you cycle to work?' },
    { n: 'Present continuous', p: [['(question word)', 'fE'], ['am / is / are', 'fA'], ['subject', 'fD'], ['verb + -ing', 'fW']], ex: 'Are you trying to find a new job? · What is he doing now?' },
    { n: 'Otázka na podmět', p: [['Who / Which + noun', 'fE'], ['verb', 'fW', 'bez do/does, pořadí jako ve větě']], sep: '', ex: 'Who likes doing adventure sports? · Which machine isn\'t working today?' }
  ]);

  // 4) will × going to × present continuous × might – míra jistoty
  const futureScale = () => {
    const items = [
      ['may / might / could', 'b', 'možnost, není jisté', ['I might come to', 'the meeting.']],
      ['will (\'ll)', 'fD', 'předpověď, rozhodnutí teď', ["Er… OK, I'll come", 'to the meeting.']],
      ['going to', 'fA', 'záměr, už rozhodnuto', ["I'm going to come", 'to the meeting.']],
      ['present continuous', 'fW', 'domluvený plán, jisté', ["I'm coming to", 'the meeting.']]
    ], w = 162, g = 16;
    return svg(720, 190, items.map(([h, c, s, ex], i) => {
      const x = 8 + i * (w + g);
      return box(x, 14, w, 54, c, h, s) + ml(x + w / 2, 92, ex, 'c sm mu');
    }).join('') + line(20, 150, 700, 150, 'lA', 'end') + text(360, 172, 'čím víc doprava, tím jistější a pevněji domluvené', 'c sm mu'));
  };

  // 5) present continuous pro budoucnost
  const presContFutureForm = () => formRows([
    { n: 'Plán v budoucnu', p: [['am / is / are + verb-ing', 'fW'], ['časový údaj', 'fE', 'on Thursday, tomorrow, at 3.30']], ex: "We're meeting at 3.30 on Thursday. (je to v diáři)" },
    { n: 'Záporná', p: [['subject', 'fD'], ['am / is / are not', 'fA'], ['verb + -ing', 'fW']], ex: "I'm not seeing him on Friday. (není to naplánované)" },
    { n: 'Otázka', p: [['question word', 'fE'], ['am / is / are', 'fA'], ['subject', 'fD'], ['verb + -ing', 'fW']], ex: 'What time are you arriving? (jaký je plán)' }
  ]);

  // 6) slovesné vzorce: to + základní tvar × -ing
  const patternsToIng = () => {
    const cols = [
      ['to + základní tvar', 'fD', ['would like, want, plan,', 'need, hope, offer']],
      ['sloveso + -ing', 'fA', ['enjoy, mind, suggest,', 'insist on']],
      ['obě formy, stejný význam', 'fW', ['begin, start, like,', 'love, prefer']],
      ['obě formy, jiný význam', 'fE', ['stop, try, remember']]
    ], w = 170, g = 16;
    const rules = [
      ['po předložce', '→ -ing', 'by serving'],
      ['podmět věty', '→ -ing', 'Asking is a compliment.'],
      ['účel (proč)', '→ to + základ', 'to celebrate'],
      ['It is + adjektivum', '→ to + základ', 'It is polite to compliment'],
      ['po modálním slovesu', '→ základ bez to', 'You must go']
    ];
    return svg(740, 270,
      cols.map(([h, c, it], i) => { const x = 6 + i * (w + g); return rect(x, 10, w, 80, c) + text(x + w / 2, 32, h, 'c bd') + ml(x + w / 2, 54, it, 'c sm'); }).join('') +
      text(370, 118, 'další pravidla', 'c sm bd mu') +
      rules.map(([a, b, ex], i) => { const x = 6 + i * 146; return rect(x, 130, 138, 110, 'b') + text(x + 69, 154, a, 'c sm bd') + text(x + 69, 176, b, 'c bd tA') + text(x + 69, 206, ex, 'c sm mu'); }).join('') +
      text(370, 262, 'stop / try / remember: význam se mění podle toho, co následuje', 'c sm mu'));
  };

  // 7) kvantifikátory: počitatelná × nepočitatelná
  const quantVenn = () => svg(740, 250,
    rect(8, 28, 230, 190, 'fD') + text(123, 50, 'počitatelná (pizza → pizzas)', 'c bd tD') +
    ml(123, 78, ['many', 'a few', '(very) few', 'too many', 'how many'], 'c', 26) +
    rect(252, 28, 236, 190, 'b') + text(370, 50, 'obě skupiny', 'c bd') +
    ml(370, 78, ['a lot of / lots of', '(not) enough', 'any / no / none', 'too (+ adjektivum)'], 'c', 26) +
    rect(502, 28, 230, 190, 'fE') + text(617, 50, 'nepočitatelná (food → ✗ foods)', 'c bd tE') +
    ml(617, 78, ['much', 'a little', '(very) little', 'too much', 'how much'], 'c', 26) +
    text(370, 242, 'many, much: hlavně v záporu, otázkách a po too · a few / a little = malé množství, (very) few / little = méně, než bychom chtěli', 'c sm mu'), 740);

  // 8) can – could – be able to na ose
  const abilityTime = () => svg(740, 250,
    line(20, 130, 720, 130, 'ln', 'end') +
    box(24, 22, 230, 60, 'fE', 'could / was able to', 'schopnost v minulosti') + text(139, 100, 'I could learn faster when I was younger.', 'c sm mu') +
    box(285, 22, 230, 60, 'fD', 'can / am able to', 'schopnost teď') + text(400, 100, 'He can speak French very well.', 'c sm mu') +
    box(546, 22, 180, 60, 'fW', 'will be able to', 'schopnost v budoucnu') + text(636, 100, 'You will be able to improve…', 'c sm mu') +
    text(139, 160, 'minulost', 'c sm bd mu') + text(400, 160, 'přítomnost', 'c sm bd mu') + text(636, 160, 'budoucnost', 'c sm bd mu') +
    rect(24, 184, 692, 52, 'pd') + text(370, 206, 'jedna konkrétní situace v minulosti (obtížná, ale zvládnutá): ne could', 'c sm') +
    text(370, 224, 'It was a hard test but she managed to pass it.', 'c sm bd tD'));

  // 9) komparativ a superlativ – sloupce nákladů a velikosti
  const compBars = () => {
    const bar = (x, y, w, c, lab, val, tag) => rect(x, y, w, 24, c) + text(x - 8, y + 17, lab, 'e sm') + text(x + w + 8, y + 17, val, 'sm mo') + (tag ? text(x + w + 62, y + 17, tag, 'sm bd tA') : '');
    return svg(740, 318,
      text(175, 18, 'Cost of living', 'c bd mu') +
      bar(90, 30, 130, 'fE', 'Moscow', '$$$$$', 'the most expensive') + bar(90, 62, 104, 'fW', 'Beijing', '$$$$', '') + bar(90, 94, 78, 'fD', 'Mexico City', '$$$', 'the least expensive') +
      text(570, 18, 'Population (million)', 'c bd mu') +
      bar(470, 30, 80, 'fE', 'Moscow', '10.4', '') + bar(470, 62, 140, 'fA', 'Mexico City', '19.2', 'the largest') + bar(470, 94, 125, 'fW', 'Beijing', '17.4', '') +
      text(370, 152, 'Beijing is more expensive than Mexico City · Beijing is larger than Moscow', 'c sm mu') +
      [['cheap', 'cheaper', 'the cheapest'], ['expensive', 'more expensive', 'the most expensive'], ['good', 'better', 'the best']].map((r, i) => {
        const y = 190 + i * 42; return rect(60, y, 140, 32, 'b') + text(130, y + 21, r[0], 'c') + line(200, y + 16, 232, y + 16, 'ln', 'end') + rect(232, y, 200, 32, 'fD') + text(332, y + 21, r[1], 'c bd') + line(432, y + 16, 464, y + 16, 'ln', 'end') + rect(464, y, 220, 32, 'fA') + text(574, y + 21, r[2], 'c bd');
      }).join('') +
      text(130, 182, 'základ', 'c sm mu') + text(332, 182, 'komparativ (2 věci)', 'c sm mu') + text(574, 182, 'superlativ (3+ věcí)', 'c sm mu'));
  };

  // 10) present perfect × past simple na ose času
  const ppTime = () => {
    const now = 470;
    return svg(740, 300,
      axis(30, 720, 280, now, 18, 270) +
      text(10, 40, 'Present perfect – neukončené', 'bd sm') + rect(240, 52, now - 240, 16, 'fD') + line(now, 60, 640, 60, 'ln ds', 'end') +
      text(240, 46, 'since 2008', 'c sm bd tD') + text((240 + now) / 2, 90, 'for five years', 'c sm bd tD') + text(560, 82, 'stále platí', 'c sm mu') +
      text(10, 124, 'Past simple – ukončené, určitá doba', 'bd sm') + rect(174, 134, 14, 14, 'fE') + text(181, 170, 'in 2006 · last year · two days ago', 'c sm bd tE') + line(194, 141, 440, 141, 'ln ds') + text(330, 132, 'už skončilo', 'c sm mu') +
      text(10, 204, 'Present perfect – zkušenost, výsledek', 'bd sm') + path(`M110,222 V232 H${now} V222`, 'lW') + text(290, 250, '? někdy před teď (neurčitá doba)', 'c sm bd tW') + text(290, 264, 'ever · never · already · yet · just · recently', 'c sm mu'));
  };

  // 11) present perfect simple – tvoření
  const ppForms = () => formRows([
    { n: 'Kladná', p: [['subject', 'fD'], ['have / has', 'fA'], ['past participle', 'fW']], ex: "He has worked here for five years. · I've been to Italy." },
    { n: 'Záporná', p: [['subject', 'fD'], ["haven't / hasn't", 'fA'], ['past participle', 'fW']], ex: "I haven't seen this before. · He hasn't done this before." },
    { n: 'Otázka', p: [['(question word)', 'fE'], ['have / has', 'fA'], ['subject', 'fD'], ['past participle', 'fW']], ex: 'Has he ever won an Oscar? · Where have you been?' },
    { n: 'Krátká odpověď', p: [['Yes, subject', 'fD'], ['have / has', 'fA']], sep: '', ex: "Have they seen the report? Yes, they have. / No, they haven't." }
  ]);

  // 12) used to – dříve × dnes
  const usedToContrast = () => contrast(
    { h: 'dřív (už neplatí)', c: 'fE', t: ['Marcus used to earn', '£500,000 a year.'] },
    { h: 'dnes (present simple)', c: 'fD', t: ['Now he earns', '£60,000.'] }, 'used to');

  // 13) used to – tvoření
  const usedToForm = () => formRows([
    { n: 'Kladná', p: [['subject', 'fD'], ['used to', 'fA'], ['base form', 'fW']], ex: 'I used to buy the newspaper every day.' },
    { n: 'Záporná', p: [['subject', 'fD'], ["didn't", 'fA'], ['use to', 'fA'], ['base form', 'fW']], ex: "We didn't use to read free newspapers. (ne: didn't used to)" },
    { n: 'Otázka', p: [['(question word)', 'fE'], ['did', 'fA'], ['subject', 'fD'], ['use to', 'fA'], ['base form', 'fW']], ex: 'What did you use to do in your previous job?' }
  ], 'v záporu a otázce se používá did + use to (ne used to)');

  // 14) modální slovesa povinnosti: kladná × záporná
  const obligationMatrix = () => {
    const cols = [
      ['must', 'fA', 'nejsilnější nutnost', "mustn't", 'zákaz, nesmíš', 'fA'],
      ['have to / need to', 'fD', 'běžná nutnost', "don't have to / needn't", 'není nutné (též don\'t need to)', 'fW'],
      ['should', 'fE', 'rada, doporučení', "shouldn't", 'není dobrý nápad', 'b']
    ], w = 226, g = 12;
    return svg(740, 230, cols.map(([a, ca, sa, b, sb, cb], i) => {
      const x = 8 + i * (w + g);
      return box(x, 30, w, 54, ca, a, sa) + line(x + w / 2, 84, x + w / 2, 126, 'ln', 'end') + box(x, 128, w, 54, cb, b, sb);
    }).join('') + text(8, 20, 'kladná (nutnost → rada)', 'sm bd mu') + text(8, 202, 'záporná', 'sm bd mu') +
      text(370, 222, "mustn't ≠ don't have to: zákaz × není to nutné", 'c sm bd tA'));
  };

  // 15) povinnost v minulosti
  const pastObligation = () => {
    const rows = [
      ['must / have to / need to', 'had to / needed to', 'bylo nutné', 'fD'],
      ["don't have to / don't need to", "didn't have to / didn't need to", 'nebylo nutné', 'fW'],
      ["mustn't / can't (nesmí se)", "wasn't / weren't allowed to", 'nebylo dovoleno', 'fA'],
      ['must, should', 'had to / needed to', 'bez vlastního tvaru', 'b']
    ];
    return svg(740, 250, text(155, 20, 'přítomnost', 'c bd mu') + text(580, 20, 'minulost', 'c bd mu') + rows.map(([a, b, n, c], i) => {
      const y = 30 + i * 52;
      return rect(10, y, 290, 40, 'b') + text(155, y + 25, a, 'c') + line(300, y + 20, 430, y + 20, 'ln', 'end') + text(365, y + 14, n, 'c sm mu') + rect(430, y, 300, 40, c) + text(580, y + 25, b, 'c bd');
    }).join(''));
  };

  // 16) make / let / allow
  const makeLetAllow = () => {
    const it = [
      ['let / allow', 'fD', 'dovolit', 'He lets his staff vote.'],
      ["don't allow", 'fE', 'nedovolit', "They don't allow staff to use the internet."],
      ['make (someone)', 'fA', 'přinutit', 'They made all their staff work at the weekend.'],
      ["don't make", 'fW', 'nenutit', "We don't make our staff work overtime."]
    ], w = 350, h = 62;
    return svg(740, 170, it.map(([a, c, cz, ex], i) => {
      const x = 8 + (i % 2) * (w + 14), y = 8 + Math.floor(i / 2) * (h + 12);
      return rect(x, y, w, h, c) + text(x + 12, y + 24, a, 'bd') + text(x + w - 12, y + 24, cz, 'e sm mu') + text(x + 12, y + 46, ex, 'sm');
    }).join(''));
  };

  // 17) past continuous na ose
  const pastContTime = () => svg(740, 220,
    axis(20, 720, 200, 640, 16, 208) +
    text(10, 34, 'pozadí + událost', 'bd sm') + rect(120, 50, 400, 26, 'fD') + text(320, 68, 'was raining', 'c bd') +
    line(400, 40, 400, 90, 'lA') + text(400, 32, 'I offered him a lift (past simple)', 'c sm bd tA') +
    text(10, 124, 'dvě činnosti současně', 'bd sm') + rect(120, 138, 400, 22, 'fD') + text(320, 154, 'was taking acting lessons', 'c sm') + rect(120, 164, 400, 22, 'fW') + text(320, 180, 'was also working part-time', 'c sm'));

  // 18) minulé časy – tvoření
  const pastForms = () => formRows([
    { n: 'Past simple|kladná', p: [['subject', 'fD'], ['verb + -ed', 'fW', 'nebo nepravidelné']], ex: 'I worked in a jazz club. · He became a professional player.' },
    { n: 'Past simple|záporná', p: [['subject', 'fD'], ["didn't", 'fA'], ['base form', 'fW']], ex: "We didn't understand the question. (be: wasn't / weren't)" },
    { n: 'Past continuous', p: [['subject', 'fD'], ['was / were', 'fA'], ['verb + -ing', 'fW']], ex: 'He was studying. · We were wearing security badges.' },
    { n: 'Past perfect', p: [['subject', 'fD'], ['had', 'fA'], ['past participle', 'fW']], ex: "She hadn't worked as a waitress before. · Had the film started?" }
  ]);

  // 19) minulé časy na ose
  const pastTime = () => svg(740, 250,
    axis(20, 720, 232, 650, 16, 240) +
    text(10, 36, 'dřívější × pozdější', 'bd sm') + rect(190, 46, 14, 14, 'fW') + rect(420, 46, 14, 14, 'fE') + line(206, 53, 416, 53, 'ln', 'end') +
    text(197, 82, 'had turned 30', 'c sm bd tW') + text(197, 98, '(past perfect)', 'c sm mu') + text(427, 82, 'got fired', 'c sm bd tE') + text(427, 98, '(past simple)', 'c sm mu') +
    text(10, 140, 'činnost v průběhu', 'bd sm') + rect(190, 152, 300, 24, 'fD') + text(340, 169, 'were joking around', 'c sm bd') + line(490, 144, 490, 186, 'lA') +
    text(490, 140, 'came up with the plan', 'c sm bd tA') + text(340, 198, '(past continuous)', 'c sm mu') + text(490, 202, '(past simple)', 'c sm mu'));

  // 20) nultý a první kondicionál
  const cond01 = () => formRows([
    { n: 'Zero conditional|obecná pravda', p: [['If / unless + present simple', 'fD', 'příčina'], ['present simple', 'fW', 'následek']], sep: ',', ex: 'If I go shopping, I use recyclable plastic bags.' },
    { n: 'First conditional|možnost v budoucnu', p: [['If / unless + present simple', 'fD', 'podmínka'], ['will / won\'t + base form', 'fW', 'výsledek']], sep: ',', ex: "If you cycle to work, it'll save you money." },
    { n: 'First conditional|s jiným modálním', p: [['If + present simple', 'fD'], ['can / may / might / could / should…', 'fA']], sep: ',', ex: 'If you replace your old light bulbs, it can reduce your electricity bills.' }
  ]);

  // 21) druhý kondicionál
  const cond2 = () => formRows([
    { n: 'Second conditional', p: [['If + past simple', 'fD', 'nereálná podmínka'], ['would / wouldn\'t + base form', 'fW', 'představovaný výsledek']], sep: ',', ex: "If I had the time, I'd have a long holiday. (ve skutečnosti ho nemám)" },
    { n: 'S jiným modálním', p: [['If + past simple', 'fD'], ['could / might + base form', 'fA']], sep: ',', ex: 'If you cycled to work, you might get fit.' },
    { n: 'Sloveso be', p: [['If I / he / she / it', 'fD'], ['were', 'fE', 've formální angličtině']], sep: '', ex: 'If I were the mayor, I would ban cars in the city centre.' }
  ]);

  // 22) trpný rod: z činného do trpného
  const passiveTransform = () => {
    const x = [14, 262, 510], w = 216;
    return svg(740, 230,
      text(370, 18, 'činný rod (active)', 'c bd mu') +
      box(x[0], 28, w, 44, 'fD', 'Many people', 'podmět (kdo)') + box(x[1], 28, w, 44, 'fW', 'read', 'sloveso') + box(x[2], 28, w, 44, 'fA', 'mobile novels', 'předmět (co)') +
      line(x[0] + w / 2, 72, x[2] + w / 2, 142, 'ln ds', 'end') + line(x[2] + w / 2, 72, x[0] + w / 2, 142, 'ln ds', 'end') + line(x[1] + w / 2, 72, x[1] + w / 2, 142, 'ln ds', 'end') +
      box(x[0], 142, w, 44, 'fA', 'Mobile novels', 'nový podmět') + box(x[1], 142, w, 44, 'fW', 'are read', 'be + past participle') + box(x[2], 142, w, 44, 'fD', 'by many people', 'by + původce (volitelný)') +
      text(370, 212, 'trpný rod (passive): zajímá nás děj, ne ten, kdo ho dělá', 'c sm mu'));
  };

  // 23) trpný rod – kdy použít
  const activePassive = () => svg(740, 250,
    rect(8, 10, 360, 232, 'fD') + text(188, 34, 'passive (trpný rod)', 'c bd tD') +
    ml(188, 62, ['zajímá nás děj, ne původce', 'nevíme / nechceme říct, kdo to udělal', 'formální styl: e-maily, zprávy, články,', 'návody, odborné texty', 'častější v psaném než v mluveném'], 'c sm', 20) +
    text(188, 190, 'Privacy is threatened.', 'c sm bd') + text(188, 210, 'Use … needs to be controlled.', 'c sm mu') +
    rect(380, 10, 352, 232, 'fW') + text(556, 34, 'active (činný rod)', 'c bd tW') +
    ml(556, 62, ['neformální styl: e-maily a dopisy,', 'textovky, poznámky, reklamy, příběhy', 'chceme znít přirozeně a osobně', 'často lze použít obojí (záleží na stylu)'], 'c sm', 20) +
    text(556, 190, 'Social networking sites threaten our privacy.', 'c sm bd'));

  // 24) třetí kondicionál
  const third = () => formRows([
    { n: 'Third conditional', p: [['If + past perfect', 'fD', 'had + past participle'], ['would have + past participle', 'fW', 'představovaný výsledek v minulosti']], sep: ',', ex: "If he'd had more money, he'd have bought the house." },
    { n: 'Záporná', p: [["If she hadn't fallen", 'fD'], ['she would have won', 'fW']], sep: ',', ex: "or: She wouldn't have lost the race if she hadn't fallen." },
    { n: 'Otázka', p: [['Would', 'fA'], ['you', 'fD'], ['have got the job', 'fW'], ["if you hadn't lied?", 'fD']], sep: '', ex: 'změna pořadí slov v hlavní větě' }
  ]);

  // 25) should have
  const shouldHave = () => formRows([
    { n: 'Kladná', p: [['subject', 'fD'], ['should have', 'fA'], ['past participle', 'fW']], ex: 'He should have come to me if he needed money. (kritika)' },
    { n: 'Záporná', p: [['subject', 'fD'], ["shouldn't have", 'fA'], ['past participle', 'fW']], ex: "I shouldn't have done a Sociology degree. (lítost)" }
  ], 'kritika cizího jednání × lítost nad vlastním jednáním v minulosti');

  // 26) vztažná zájmena
  const relPron = () => {
    const it = [['who / that', 'osoby', 'the woman who took the photos', 'fD'], ['which / that', 'věci', 'a kind of activity which you do', 'fA'], ['where', 'místa', 'the café where we first met', 'fW'], ['when', 'čas', 'Trust is when you believe…', 'fE'], ['whose', 'přivlastnění', 'my wife, whose parents come from Poland', 'b']];
    const w = 138, g = 9;
    return svg(740, 210, it.map(([a, b, ex, c], i) => {
      const x = 6 + i * (w + g);
      return rect(x, 10, w, 112, c) + text(x + w / 2, 36, a, 'c bd') + text(x + w / 2, 56, b, 'c sm mu') + ml(x + w / 2, 82, ex.match(/.{1,22}(\s|$)/g).map(s => s.trim()), 'c sm', 14);
    }).join('') +
      rect(6, 136, 354, 62, 'b') + text(183, 156, 'defining – bez čárek', 'c bd') + text(183, 176, 'That’s the house where I grew up.', 'c sm mu') + text(183, 191, 'říká, o kterého/kterou jde; jde vynechat who/which/that', 'c sm mu') +
      rect(372, 136, 362, 62, 'b') + text(553, 156, 'non-defining – s čárkami', 'c bd') + text(553, 176, 'David, who I’ve known since I was a kid, is…', 'c sm mu') + text(553, 191, 'jen doplňující informace; nelze that', 'c sm mu'));
  };

  // 27) present perfect continuous – tvoření
  const ppcForm = () => formRows([
    { n: 'Kladná', p: [['subject', 'fD'], ['have / has', 'fA'], ['been', 'fE'], ['verb + -ing', 'fW']], ex: 'He has been living here since 2008.' },
    { n: 'Záporná', p: [['subject', 'fD'], ["haven't / hasn't", 'fA'], ['been', 'fE'], ['verb + -ing', 'fW']], ex: "I haven't been feeling well lately." },
    { n: 'Otázka', p: [['(question word)', 'fE'], ['have / has', 'fA'], ['subject', 'fD'], ['been + verb-ing', 'fW']], ex: 'Have you been talking too loudly? · What have you been eating?' }
  ]);

  // 28) present perfect continuous – činnost a její důsledek
  const ppcContrast = () => contrast(
    { h: 'činnost (nedávná)', c: 'fD', t: ["You've been running,", "haven't you?"] },
    { h: 'výsledek teď', c: 'fW', t: ["You're out of breath."] }, 'proto');

  // 29) nepřímá řeč – změny časů
  const reportedTenses = () => {
    const rows = [['present simple', 'present simple / past simple'], ['present continuous', 'present continuous / past continuous'], ['past simple', 'past simple / past perfect'], ['present perfect', 'present perfect / past perfect'], ['past perfect', 'past perfect'], ['will, can, must / have to', 'would, could, had to']];
    return svg(740, 280, text(190, 20, 'přímá řeč', 'c bd mu') + text(560, 20, 'nepřímá řeč', 'c bd mu') + rows.map(([a, b], i) => {
      const y = 30 + i * 38;
      return rect(10, y, 360 - 90, 30, i === 5 ? 'fW' : 'fD') + text(145, y + 20, a, 'c') + line(280, y + 15, 340, y + 15, 'ln', 'end') + rect(340, y, 392, 30, i === 5 ? 'fW' : 'fA') + text(536, y + 20, b, 'c bd');
    }).join('') + text(370, 272, "might, would, should se nemění · 'I'm arriving' → she said she was arriving", 'c sm mu'));
  };

  // 30) nepřímá řeč – časové a místní výrazy
  const reportedTime = () => {
    const rows = [['tomorrow', 'the following day'], ['yesterday', 'the day before'], ['next week', 'the following week'], ['last week', 'the previous week'], ['here / this', 'there / that']];
    return svg(740, 130, rows.map(([a, b], i) => {
      const x = 8 + i * 146;
      return rect(x, 10, 138, 38, 'fD') + text(x + 69, 34, a, 'c bd') + line(x + 69, 48, x + 69, 72, 'ln', 'end') + rect(x, 72, 138, 48, 'fA') + ml(x + 69, 92, b.match(/.{1,16}(\s|$)/g).map(s => s.trim()), 'c sm bd', 16);
    }).join(''));
  };

  // 31) nepřímé otázky – slovosled
  const embedded = () => formRows([
    { n: 'Přímá otázka', p: [['Where', 'fE'], ['do', 'fA'], ['they', 'fD'], ['live?', 'fW']], sep: '', ex: 'otázkové pořadí: pomocné sloveso před podmětem' },
    { n: 'Nepřímá otázka', p: [['Could you tell me', 'b'], ['where', 'fE'], ['they', 'fD'], ['live?', 'fW']], sep: '', ex: 'běžné pořadí slov: bez do/does, podmět před slovesem' },
    { n: 'Přímá (ano/ne)', p: [['Are', 'fA'], ['they', 'fD'], ['planning to get married?', 'fW']], sep: '', ex: '' },
    { n: 'Nepřímá (ano/ne)', p: [['Do you know', 'b'], ['if', 'fE', 'bez tázacího slova'], ["they're", 'fD'], ['planning to get married?', 'fW']], sep: '', ex: 'u otázek bez tázacího slova se použije if' }
  ]);

  // --- Lekce 1: Quality time
  const l1Interests = () => groups([
    { h: 'Mám rád / zajímám se', c: 'fD', t: ['I’m into skiing.', 'I’m keen on photography.', 'I enjoy / like cycling.'] },
    { h: 'Trávím tím čas', c: 'fW', t: ['I spend a lot of time', 'doing puzzles.', 'One of my interests is yoga.'] },
    { h: 'Tvar -ing: tři role', c: 'fE', t: ['are reading → sloveso', 'surprising → příd. jméno', 'Watching TV… → podst. jm.'] }
  ]);
  const suggestForms = () => formRows([
    { n: 'What about|How about', p: [['What / How about', 'fA'], ['verb + -ing', 'fW']], ex: 'What about delaying the launch date by a month?' },
    { n: "Let's", p: [["Let's", 'fA'], ['base form', 'fW']], ex: "Let's add adverts to the site." },
    { n: 'We could', p: [['We could', 'fA'], ['base form', 'fW']], ex: 'We could get a contractor to do the work.' },
    { n: "Why don't we", p: [["Why don't we", 'fA'], ['base form', 'fW']], ex: "Why don't we look at some more options?" }
  ]);

  // --- Lekce 2: Globetrotters
  const l2Compound = () => groups([
    { h: 'Dohromady', c: 'fD', t: ['honeymoon', 'seafood', 'airport', 'bathrobe'] },
    { h: 'S pomlčkou', c: 'fW', t: ['check-in', 'three-star hotel', 'ten-minute walk', '24-hour room service'] },
    { h: 'Zvlášť', c: 'fE', t: ['hotel guest', 'room service', 'power shower', 'flat screen TV'] }
  ]);
  const l2Disagree = () => formRows([
    { n: '1 Zaváhání', p: [["Well, erm, I'm not sure.", 'fD']], sep: '' },
    { n: '2 Otázka', p: [['Yes, but what if it takes ten hours instead of three?', 'fW']], sep: '' },
    { n: '3 Částečný souhlas', p: [["That's true, but productivity is important, too.", 'fE']], sep: '' },
    { n: '4 Alternativa', p: [['How about setting a limit?', 'fD']], sep: '' },
    { n: '5 Přímo', p: [["I'm sorry, but I think this rule could cost us more money.", 'fA']], sep: '' }
  ]);

  // --- Lekce 3: Be my guest
  const l3Food = () => groups([
    { h: 'Jak se vaří', c: 'fD', t: ['boiled, fried, baked', 'grilled, roast', 'steamed, smoked', 'stewed'] },
    { h: 'Chuť a konzistence', c: 'fW', t: ['salty, sweet, spicy', 'delicious, tasty', 'rich, oily', 'chewy, tender, tough'] },
    { h: 'Na stole', c: 'fE', t: ['knife and fork', 'salt and pepper', 'oil and vinegar', 'chopsticks, serviette', 'plate, spoon, glass'] }
  ]);
  const l3Refusal = () => formRows([
    { n: '3 Zaváhání', p: [['Oh…', 'fD']], sep: '' },
    { n: '5 Pozitivně', p: [['It sounds great.', 'fW']], sep: '' },
    { n: '2 + 1 Omluva a důvod', p: [["I'm so sorry, but I have to study.", 'fA']], sep: '' },
    { n: '6 Poděkování', p: [['Thanks for thinking of me.', 'fE']], sep: '' },
    { n: '4 Alternativa', p: [['Perhaps we can meet up another time?', 'fD']], sep: '' }
  ]);

  // --- Lekce 4: Learning curve
  const l4Skills = () => groups([
    { h: 'be a …', c: 'fD', t: ['team worker / player', 'logical thinker'] },
    { h: 'have …', c: 'fW', t: ['common sense', 'a sense of humour', 'an outgoing personality', 'good attention to detail'] },
    { h: 'have good … skills', c: 'fE', t: ['problem-solving', 'writing', 'customer care', 'decision-making'] },
    { h: 'be able to …', c: 'b', t: ['work on own initiative', 'think on your feet', 'meet deadlines', 'work well under pressure'] }
  ]);
  const l4Build = () => formRows([
    { n: 'Návrh', p: [['What if we', 'fD'], ['Could we', 'fD'], ["Let's", 'fD'], ["Why don't we", 'fD']], sep: '', ex: '+ nápad (…learn to ride a motorbike?)' },
    { n: 'Navázání', p: [["Yes, I'll go along with that, and…", 'fW']], sep: '' },
    { n: 'Navázání', p: [['Great idea! And we could…', 'fW']], sep: '' },
    { n: 'Navázání', p: [['Sounds good to me. And…', 'fW']], sep: '' },
    { n: 'Navázání', p: [['Fantastic! And what we could do is…', 'fW']], sep: '' }
  ]);

  // --- Lekce 5: Getting on
  const l5Compliments = () => groups([
    { h: 'Přijmout nebo oplatit', c: 'fD', t: ['Thanks a lot.', 'I like yours, too.'] },
    { h: 'Zlehčit, sdílet, vysvětlit', c: 'fW', t: ['Nothing special.', 'Ivan helped me a lot.', 'It was a birthday present.'] },
    { h: 'Zpochybnit nebo žertovat', c: 'fE', t: ['Do you mean that?', "I'm fabulous, aren't I?"] }
  ]);

  // --- Lekce 6: Rule of thumb
  const l6Advice = () => groups([
    { h: 'Jemně', c: 'fD', t: ['Maybe you could…', 'You might want to…', 'What you could do is…'] },
    { h: 'Středně', c: 'fW', t: ["It'd be better to…"] },
    { h: 'Důrazněji', c: 'fA', t: ['You should…', "No, don't do that…"] }
  ], '→ čím víc doprava, tím důrazněji');

  // --- Lekce 7: Tell us a story
  const l7Story = () => groups([
    { h: 'Vypravěč', c: 'fD', t: ['Did I tell you about', 'the time when…?', "I'll never forget the time…"] },
    { h: 'Posluchač', c: 'fW', t: ['No. What happened?', 'Really? / You’re kidding!', 'So, what happened next?'] },
    { h: 'Navázání', c: 'fE', t: ['That reminds me', 'of the time when…', 'A similar thing happened…'] }
  ]);
  const l7Linkers = () => groups([
    { h: 'Čas', c: 'fD', t: ['At the time', 'When I woke up', 'In the end'] },
    { h: 'Příčina a důsledek', c: 'fW', t: ['because', 'so'] },
    { h: 'Kontrast, postoj', c: 'fE', t: ['but', 'although', 'Luckily / Unfortunately'] }
  ]);

  // --- Lekce 8: Green chic
  const l8Collocations = () => groups([
    { h: 'energy-efficient', c: 'fD', t: ['appliance', 'dishwasher', 'air conditioning unit'] },
    { h: 'eco-friendly', c: 'fW', t: ['cleaning products', 'detergent', 'washing-up liquid'] },
    { h: 'reusable', c: 'fE', t: ['shopping bag', 'container', 'glass bottle'] },
    { h: 'refillable', c: 'b', t: ['ink cartridge', 'water bottle', 'marker pens'] }
  ]);
  const l8Steps = () => formRows([
    { n: '1 Identify', p: [["We've got a little problem with…", 'fD']], sep: '' },
    { n: '2 Brainstorm', p: [['So, what if we do a little experiment?', 'fW']], sep: '' },
    { n: '3 Decide', p: [['I like that idea. It’s a start.', 'fE']], sep: '' }
  ]);

  // --- Lekce 9: IT generation
  const l9Phone = () => groups([
    { h: 'Začátek', c: 'fD', t: ['pick up', 'phone someone up', 'ring up'] },
    { h: 'Uprostřed', c: 'fW', t: ['hold on', 'put through', 'put on hold', 'get back to'] },
    { h: 'Konec', c: 'fE', t: ['phone back', 'hang up'] }
  ]);
  const l9Requests = () => formRows([
    { n: 'Blízcí a cizí|krátká žádost', p: [['A caffè latte, please.', 'fD'], ['Can I use yours?', 'fD']], sep: '' },
    { n: 'Střední vzdálenost|delší žádost', p: [['Would it be OK to use the Canon projector…?', 'fW']], sep: '' },
    { n: 'Střední vzdálenost|delší žádost', p: [['Do you think you could send me those pdf files?', 'fW']], sep: '' }
  ]);

  // --- Lekce 10: Right and wrong
  const l10MakeDo = () => groups([
    { h: 'make', c: 'fD', t: ['a mistake', 'a noise', 'a complaint', 'an excuse', 'a mess', 'a suggestion', 'a decision', 'a lot of money'] },
    { h: 'do', c: 'fW', t: ['something wrong', 'a good job', 'some work', 'the best you can', 'the shopping', 'business with someone', 'some housework', 'your duty'] }
  ]);
  const l10Sorry = () => formRows([
    { n: '1 Lítost', p: [["I'm sorry.", 'fD']], sep: '' },
    { n: '2 Odpuštění', p: [['Please accept our apologies.', 'fD']], sep: '' },
    { n: '3 Vysvětlení', p: [['The traffic was terrible.', 'fW']], sep: '' },
    { n: '4 Převzetí viny', p: [["It's my mistake.", 'fA']], sep: '' },
    { n: '5 Odmítnutí viny', p: [["It isn't my fault.", 'fA']], sep: '' },
    { n: '6 Starost o druhého', p: [["I hope I didn't upset you.", 'fE']], sep: '' },
    { n: '7 Náprava', p: [["I'll pay for the damage.", 'fE']], sep: '' }
  ]);

  // --- Lekce 11: Working together
  const l11Email = () => formRows([
    { n: 'Oslovení', p: [['Dear Ms McDonald,', 'fD']], sep: '' },
    { n: 'Důvod', p: [['I am writing to confirm…', 'fW']], sep: '' },
    { n: 'Žádost', p: [['Could you please… · We would really appreciate it if…', 'fA']], sep: '' },
    { n: 'Nabídka pomoci', p: [['Please do not hesitate to contact me should you…', 'fE']], sep: '' },
    { n: 'Závěr', p: [['We look forward to hearing from you. Best regards,', 'fD']], sep: '' }
  ]);
  const l11Network = () => groups([
    { h: 'Seznámit se', c: 'fD', t: ["I don't think we've met.", 'Tell me about yourself.'] },
    { h: 'Vyměnit novinky', c: 'fW', t: ['I hear she’s expecting.', 'Congratulations!'] },
    { h: 'Nabídnout pomoc', c: 'fE', t: ['Perhaps you could help me…', 'Let me introduce you to…'] }
  ]);

  // --- Lekce 12: Trial and error
  const l12Trades = () => groups([
    { h: 'Instalace a opravy', c: 'fD', t: ['electrician: lights', 'plumber: leaking taps', 'gas engineer: gas heating'] },
    { h: 'Stavba a dřevo', c: 'fW', t: ['builder: knock down a wall', 'carpenter: replace doors', 'decorator: repaint a home'] },
    { h: 'Ostatní', c: 'fE', t: ['gardener: prune trees', 'mechanic: motorbike won’t start'] }
  ]);
  const l12Steps = () => formRows([
    { n: '1 Zeptat se', p: [['What seems to be the problem?', 'fD']], sep: '' },
    { n: '2 Empatie', p: [["Oh dear, I'm sorry to hear that.", 'fW']], sep: '' },
    { n: '3 Omluva', p: [['We’re really very sorry about this.', 'fE']], sep: '' },
    { n: '4 Vysvětlit', p: [["If you look at our website, I think you'll find…", 'fD']], sep: '' },
    { n: '5 Napravit', p: [["I'll see what I can do. I'll pass on your complaint.", 'fA']], sep: '' }
  ]);

  // --- Review 1–12: souhrny lekcí
  const rev13 = () => groups([
    { h: 'Lekce 1', c: 'fD', t: ['What about + -ing', 'Let’s + base form', 'Time stealers'] },
    { h: 'Lekce 2', c: 'fW', t: ['compound nouns', 'Absolutely. / That’s true.', 'Yes, but is it cheaper?'] },
    { h: 'Lekce 3', c: 'fE', t: ['grilled, tender, spicy', 'I insist. / It’s on me.', 'I’ll have to pass on that.'] }
  ]);
  const rev46 = () => groups([
    { h: 'Lekce 4', c: 'fD', t: ['soft skills', 'Yes…, and…', 'be able to'] },
    { h: 'Lekce 5', c: 'fW', t: ['small talk', 'Nice to meet you.', 'compliments'] },
    { h: 'Lekce 6', c: 'fE', t: ['Dear Ms… / Yours sincerely', 'You might want to…', 'It’d be better to…'] }
  ]);
  const rev79 = () => groups([
    { h: 'Lekce 7', c: 'fD', t: ['fun × funny', 'Did I tell you about…?', 'linkers'] },
    { h: 'Lekce 8', c: 'fW', t: ['reusable, disposable', 'We’ve got a little problem', 'work out / deal with'] },
    { h: 'Lekce 9', c: 'fE', t: ['put through, hang up', 'Do you mind if…?', 'I’m afraid not.'] }
  ]);
  const rev1012 = () => groups([
    { h: 'Lekce 10', c: 'fD', t: ['make × do', 'be to blame', 'Not to worry.'] },
    { h: 'Lekce 11', c: 'fW', t: ['formal e-mail', 'networking', 'team-building'] },
    { h: 'Lekce 12', c: 'fE', t: ['ripped off, refund', 'What seems to be the problem?', 'I’ll pass on your complaint.'] }
  ]);

  // ===== stavba vět nahrazující tabulky Typ věty | Pravidlo =====
  const willForm = () => formRows([
    { n: 'Kladná', p: [['will / ’ll', 'fD'], ['základní tvar', 'fW']], ex: 'I’ll see you on Friday.' },
    { n: 'Záporná', p: [['won’t (will not)', 'fD'], ['základní tvar', 'fW']], ex: 'He won’t be here for at least half an hour.' },
    { n: 'Otázka', p: [['(tázací slovo)', 'b'], ['will', 'fD'], ['podmět', 'b'], ['základní tvar', 'fW']], sep: '', ex: 'What time will he get here?' },
    { n: 'Krátká odpověď', p: [['Yes, … will', 'fD'], ['No, … won’t', 'fE']], sep: ',', ex: 'Will it work? Yes, it will. / No, it won’t.' }
  ], 'žádná zvláštní forma pro 3. osobu');
  const goingToForm = () => formRows([
    { n: 'Kladná', p: [['be (am / is / are)', 'fD'], ['going to', 'fW'], ['základní tvar', 'fA']], ex: 'They’re going to reorganize the office.' },
    { n: 'Záporná', p: [['be + not', 'fD'], ['going to', 'fW'], ['základní tvar', 'fA']], ex: 'We’re not going to clean up.' },
    { n: 'Otázka', p: [['(tázací slovo)', 'b'], ['be', 'fD'], ['podmět', 'b'], ['going to + základní tvar', 'fW']], sep: '', ex: 'Are you going to employ an assistant?' },
    { n: 'Krátká odpověď', p: [['Yes, … be', 'fD'], ['No, … be + not', 'fE']], sep: ',', ex: 'Is he going to come? Yes, he is. / No, he isn’t.' }
  ]);
  const canForm = () => formRows([
    { n: 'can / could', p: [['can, can’t, could, couldn’t', 'fD'], ['základní tvar', 'fW']], ex: 'They can sing very well. · I can’t speak French.' },
    { n: 'po to', p: [['to', 'b'], ['be able to', 'fA'], ['základní tvar', 'fW']], sep: '', ex: 'I’d like to be able to swim better.' },
    { n: 'tvar -ing', p: [['Being able to', 'fA'], ['základní tvar', 'fW']], sep: '', ex: 'Being able to type is a useful skill.' },
    { n: 'budoucnost', p: [['will', 'fD'], ['be able to', 'fA'], ['základní tvar', 'fW']], ex: 'Will you be able to do this work yourself?' }
  ], 'be able to se použije tam, kde je potřeba základní tvar nebo -ing');
  const compForm = () => formRows([
    { n: 'Krátká', p: [['adjektivum + -er', 'fD', 'komparativ'], ['the + adjektivum + -est', 'fA', 'superlativ']], sep: '', ex: 'cheaper than · the cheapest' },
    { n: 'Dlouhá', p: [['more / less + adjektivum', 'fD', 'komparativ'], ['the most / the least + adjektivum', 'fA', 'superlativ']], sep: '', ex: 'more expensive than · the most expensive' },
    { n: 'good', p: [['good', 'b'], ['better', 'fD'], ['best', 'fA']], sep: '→' }, { n: 'bad', p: [['bad', 'b'], ['worse', 'fD'], ['worst', 'fA']], sep: '→' },
    { n: 'far', p: [['far', 'b'], ['further', 'fD'], ['furthest', 'fA']], sep: '→' }, { n: 'much / many', p: [['much / many', 'b'], ['more', 'fD'], ['most', 'fA']], sep: '→' }
  ]);
  const modalsForm = () => formRows([
    { n: 'Kladná|modální', p: [['can / must / should', 'fD'], ['základní tvar', 'fW']], ex: 'She should agree to that.' },
    { n: 'Kladná|polomodální', p: [['have to / need to (+ s)', 'fE'], ['základní tvar', 'fW']], ex: 'He has to tell his customers about it right away.' },
    { n: 'Záporná|modální', p: [['can / must / should + not', 'fD'], ['základní tvar', 'fW']], ex: 'We cannot agree to that. · I mustn’t forget.' },
    { n: 'Záporná|polomodální', p: [['don’t / doesn’t', 'fE'], ['have to / need to', 'fE']], ex: 'You don’t have to report it.' },
    { n: 'Otázka|modální', p: [['can / must / should', 'fD'], ['podmět', 'b'], ['základní tvar', 'fW']], sep: '', ex: 'Can I wear jeans?' },
    { n: 'Otázka|polomodální', p: [['do / does', 'fE'], ['podmět', 'b'], ['have to / need to', 'fE']], sep: '', ex: 'Do I have to attend the meeting?' }
  ]);
  const pastSimpleForm = () => formRows([
    { n: 'Kladná', p: [['základní tvar + -ed', 'fD'], ['nepravidelná: 2. tvar', 'fW'], ['be: was / were', 'fA']], sep: '/', ex: 'He became a professional player in 2001.' },
    { n: 'Záporná', p: [['didn’t', 'fD'], ['základní tvar', 'fW']], ex: 'We didn’t understand the question.' },
    { n: 'Záporná (be)', p: [['wasn’t / weren’t', 'fA']], ex: 'He wasn’t good at sports at school.' },
    { n: 'Otázka', p: [['Did', 'fD'], ['podmět', 'b'], ['základní tvar', 'fW']], sep: '', ex: 'When did he win a gold medal?' },
    { n: 'Otázka (be)', p: [['Was / Were', 'fA'], ['podmět', 'b']], sep: '', ex: 'Was he good at sports at school?' },
    { n: 'Krátká odpověď', p: [['Yes, … did / was / were', 'fD'], ['No, … didn’t / wasn’t / weren’t', 'fE']], sep: ',', ex: 'Did you get my email? Yes, I did. / No, I didn’t.' }
  ]);
  const pastPerfectForm = () => formRows([
    { n: 'Kladná', p: [['had', 'fD'], ['past participle', 'fW']], ex: 'In ten years it had grown into a $2 billion company.' },
    { n: 'Záporná', p: [['hadn’t (had not)', 'fD'], ['past participle', 'fW']], ex: 'She hadn’t worked as a waitress before.' },
    { n: 'Otázka', p: [['Had', 'fD'], ['podmět', 'b'], ['past participle', 'fW']], sep: '', ex: 'Had the film already started?' },
    { n: 'Krátká odpověď', p: [['Yes, … had', 'fD'], ['No, … hadn’t', 'fE']], sep: ',', ex: 'Had she recognized him from TV? Yes, she had. / No, she hadn’t.' }
  ]);

  return { rev13, rev46, rev79, rev1012, l12Trades, l12Steps, l11Email, l11Network, l10MakeDo, l10Sorry, l9Phone, l9Requests, l8Collocations, l8Steps, l7Story, l7Linkers, l6Advice, l5Compliments, l4Skills, l4Build, l3Food, l3Refusal, l2Compound, l2Disagree, l1Interests, suggestForms, groups, tenseMap, presentForms, questionForms, futureScale, presContFutureForm, patternsToIng, quantVenn, abilityTime, compBars, ppTime, ppForms, usedToContrast, usedToForm, obligationMatrix, pastObligation, makeLetAllow, pastContTime, pastForms, pastTime, cond01, cond2, passiveTransform, activePassive, third, shouldHave, relPron, ppcForm, ppcContrast, reportedTenses, reportedTime, embedded, willForm, goingToForm, canForm, compForm, modalsForm, pastSimpleForm, pastPerfectForm };
})();
