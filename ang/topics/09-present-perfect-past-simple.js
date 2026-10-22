registerTopic({
  id: 'present-perfect-past-simple', order: 9, icon: '⏳', title: 'Present perfect and past simple', src: 'podklady', where: 'Lekce 5 (s. 46–47) + Grammar reference (s. 161, 163–164)',
  summary: 'Present perfect simple (výsledek, neukončený děj, zkušenost; <i>for, since, already, yet, ever, never, just</i>) a jeho rozdíl proti past simple (ukončený děj v určité době).',
  vocab: [
    { w: 'present perfect', x: 'předpřítomný čas: <i>have / has + past participle</i>; spojuje minulost a přítomnost' },
    { w: 'past participle', x: 'příčestí minulé: 3. tvar slovesa (<i>worked, seen, been</i>)' },
    { w: 'for / since', x: '<i>for</i> + délka doby (for five years); <i>since</i> + bod v čase (since 2008)' },
    { w: 'definite / indefinite time', x: 'určitá doba (yesterday, in 2006) × neurčitá doba (někdy, ever, recently)' },
    { w: 'already / yet / just', x: 'už / ještě (ne)… / právě teď' }
  ],
  key: [
    '<b>Present perfect</b> = <b>have / has + past participle</b>; mluví o <b>minulosti a přítomnosti zároveň</b>.',
    'Tři použití: <b>výsledek v přítomnosti</b> · <b>neukončený děj</b> (since, for) · <b>zkušenost</b> (ever, never).',
    '<b>Past simple</b> = ukončený děj v <b>určité době</b> (yesterday, in 2006, last year, two days ago).',
    '<b>For</b> = jak dlouho (for five years), <b>since</b> = od kdy (since 2008).',
    '<b>Already, yet, just, ever, never, recently</b> patří k present perfect; s určitým časem se present perfect <b>nepoužívá</b>.'
  ],
  sections: [
    { title: 'Present perfect simple – použití', blocks: [
      { t: 'p', x: 'Present perfect používáme, když mluvíme o <b>minulosti a přítomnosti dohromady</b>. Má tři hlavní použití.' },
      { t: 'ol', items: [
        '<b>Výsledek v přítomnosti</b> – minulá událost, která je důležitá teď: <i>I’ve finished the report.</i> (Můžeš ho mít teď.) Často tak říkáme novinky: <i>He’s just got a new job.</i>',
        '<b>Neukončený děj</b> – děj nebo stav, který začal v minulosti a stále trvá: <i>She’s worked as a journalist for a long time.</i> · <i>He’s played professionally since 2001.</i>',
        '<b>Zkušenost</b> – ukončené děje v neurčité době v minulosti: <i>I love that film. I’ve seen it three times.</i> · <i>She has won several business awards.</i> · <i>Have you ever been to Paris?</i> · <i>I’ve never seen that before.</i>'
      ] },
      { t: 'svg', title: 'Tři použití present perfect a past simple na ose času', x: ANG.ppTime(), cap: 'Present perfect sahá do přítomnosti („teď“); past simple zůstává v minulosti.' },
      { t: 'versus', title: 'for × since', cols: [
        { h: 'for + délka období', items: ['She’s lived here <b>for five years</b>.', 'Odpovídá na „jak dlouho“.'] },
        { h: 'since + bod v čase', items: ['He’s worked here <b>since 2008</b>.', 'Odpovídá na „od kdy“.'] }
      ], x: 'Pro obě slova platí, že děj trvá až do současnosti, proto je přítomný předpřítomný čas. <i>For</i> udává, <b>jak dlouho</b> děj trvá (pět let), <i>since</i> udává <b>okamžik, kdy začal</b> (rok 2008).' },
      { t: 'p', x: '<b>Already, yet</b> a <b>not yet</b> popisují „nedokončený čas“: <i>already</i> vyjadřuje překvapení, že se něco stalo dřív, než se čekalo (<i>She’s only 28 but she’s already written three novels.</i>); <i>not yet</i> říká, že se něco, co se očekává, zatím nestalo (<i>He hasn’t found the right business partner yet.</i>).' }
    ] },
    { title: 'Tvoření (Form)', blocks: [
      { t: 'svg', title: 'Stavba present perfect', x: ANG.ppForms(), cap: 'Nepravidelná slovesa mají zvláštní tvar příčestí – viz seznam nepravidelných sloves (téma 25).' },
      { t: 'grid', head: ['Typ věty', 'Pravidlo', 'Příklad'], rows: [
        ['Kladná', '<b>have / has</b> + past participle', 'He/She/It <b>has worked</b> here for five years. · I/You/We/They <b>have been</b> to Italy.'],
        ['Záporná', '<b>haven’t / hasn’t</b> + past participle', 'I/You/We/They <b>haven’t seen</b> this before. · He/She/It <b>hasn’t done</b> this before.'],
        ['Otázka', 'změň pořadí slov', 'Has he/she/it ever won an Oscar? · Where have you been?'],
        ['Krátká odpověď', '<b>has / have</b> nebo <b>hasn’t / haven’t</b>', 'Have they seen the report? Yes, they have. / No, they haven’t.']
      ] }
    ] },
    { title: 'Past simple × present perfect simple', blocks: [
      { t: 'p', x: 'Oba časy popisují děje, které začaly nebo skončily v minulosti. Který z nich zvolíš, záleží na tom, zda mluvíme o <b>určité, nebo neurčité době</b> a zda je děj <b>ukončený, nebo neukončený</b>.' },
      { t: 'grid', head: ['', 'Present perfect', 'Past simple'], rows: [
        ['Neurčitá × určitá doba', '<b>Have you seen</b> a good film recently? · We’ve already met. · Has the meeting finished yet? · Have you ever been to India? · I’ve never read any of his books. · I’ve just bought a new car.', '<b>Did you see</b> a film yesterday? · We met at the conference last year. · The meeting finished an hour ago. · I went to India in 2006. · She read the book last month. · The show started at 7.30.'],
        ['Neukončené × ukončené děje', 'She’s been an actress since she was 18. (stále je herečka) · I’ve had this car for five years. (stále ho mám)', 'She was an actress during the 90s. (už není) · I had that car for five years but then I got a new one. (už ho nemám)']
      ] },
      { t: 'ul', items: [
        'S <b>recently, already, yet, ever, never, just</b> a se <b>for</b> a <b>since</b> používáme present perfect.',
        'S časovými výrazy <b>yesterday, ago, last night / week / month</b> a podobně používáme past simple.'
      ] },
      { t: 'warn', x: 'Britští mluvčí používají present perfect o něco častěji než američtí. Američané někdy použijí past simple tam, kde britská angličtina vyžaduje present perfect: <b>BrE:</b> <i>Have you done it yet? I’ve already done it.</i> · <b>AmE:</b> <i>Did you do it yet? I already did it.</i> Obě varianty používají <i>yet, already</i> a <i>just</i>. U <i>just</i> s minulým časem (děj před chvilkou) se past simple používá v obou: <i>Did you just call me?</i> Britové používají <i>just</i> s present perfect pro novinky: <i>I’ve just passed my driving test!</i>; Američané to mohou říct i minulým časem: <i>I just passed my driving test!</i>' },
      { t: 'tip', x: 'Jednoduché pravidlo: pokud věta obsahuje konkrétní čas (<i>yesterday, in 2006, two days ago, last year</i>), patří do past simple. Když čas nevíme nebo není důležitý a spojuje se s přítomností (<i>ever, never, yet, already, since</i>), patří do present perfect.' }
    ] }
  ],
  mistakes: [
    'Použít present perfect s určitým časem: ✗ I’ve seen him yesterday → ✓ I <b>saw</b> him yesterday.',
    'Zaměnit <i>for</i> a <i>since</i>: <i>for five years</i>, ale <i>since 2008</i>.',
    'Zapomenout příčestí: ✗ I have see it → ✓ I have <b>seen</b> it.',
    'Zaměnit <i>has</i> a <i>have</i>: ✗ He have worked → ✓ He <b>has</b> worked.',
    'Použít past simple pro neukončený děj: ✗ I lived here for five years (a stále tu bydlím) → ✓ I’ve lived here for five years.'
  ],
  qa: [
    { q: 'Jak se tvoří present perfect?', a: '<b>have / has</b> + past participle: <i>He has worked here for five years.</i>' },
    { q: 'Tři hlavní použití present perfect?', a: '1) <b>výsledek</b> v přítomnosti, 2) <b>neukončený děj</b> (for, since), 3) <b>zkušenost</b> (ever, never).' },
    { q: 'Jaký je rozdíl mezi <i>for</i> a <i>since</i>?', a: '<i>For</i> + délka doby (for five years); <i>since</i> + bod v čase (since 2008).' },
    { q: 'Který čas použiješ s <i>yesterday, ago, last year</i>?', a: '<b>Past simple</b>: <i>I went to India in 2006.</i>' },
    { q: 'Co vyjadřují <i>already</i> a <i>not yet</i>?', a: '<i>Already</i> – překvapení, že se něco stalo dřív; <i>not yet</i> – očekávaná věc se zatím nestala.' },
    { q: 'Jaký je rozdíl mezi <i>She’s been an actress since she was 18</i> a <i>She was an actress during the 90s</i>?', a: 'První: stále je herečka (neukončené). Druhé: už není (ukončené).' },
    { q: 'Jak se liší britská a americká angličtina u <i>yet / already</i>?', a: 'BrE: <i>Have you done it yet?</i>; AmE někdy past simple: <i>Did you do it yet?</i>' }
  ]
});
