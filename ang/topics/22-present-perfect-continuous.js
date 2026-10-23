registerTopic({
  id: 'present-perfect-continuous', group: 'gram', order: 22, icon: '🏃', title: 'Present perfect continuous', src: 'podklady', where: 'Lekce 11 (s. 114–115) + Grammar reference (s. 162)',
  summary: 'Předpřítomný průběhový čas (<i>have / has been + -ing</i>): neukončené činnosti s <i>for / since</i>, vysvětlení současných důsledků činnosti, příslovce a srovnání s present perfect simple.',
  vocab: [
    { w: 'present perfect continuous', x: 'předpřítomný čas průběhový: <i>have / has been + -ing</i>' },
    { w: 'unfinished activity', x: 'neukončená činnost – začala v minulosti a trvá' },
    { w: 'active verb', x: 'sloveso činnosti (learn, run, study)' },
    { w: 'state verb', x: 'sloveso stavu (be, know, have, like)' },
    { w: 'lately / recently', x: 'v poslední době, nedávno' }
  ],
  key: [
    '<b>have / has + been + sloveso-ing</b>: <i>He has been living here since 2008.</i>',
    '<b>Neukončené činnosti</b> s <b>for</b> a <b>since</b>: <i>How long have you been learning to play the piano? – For a few years now.</i>',
    '<b>Současné důsledky činnosti:</b> <i>You’ve been running, haven’t you? You’re out of breath.</i>',
    'S <b>činnostními</b> slovesy (<i>learn, run, study</i>) → continuous; se <b>stavovými</b> (<i>be, know, have, like</i>) obvykle present perfect simple.',
    '<b>always, only, never, ever, still, just</b> stojí mezi pomocným a významovým slovesem; <b>lately, recently</b> na začátku nebo na konci.'
  ],
  sections: [
    { title: 'Použití (Use)', blocks: [
      { t: 'ol', items: [
        '<b>Neukončené činnosti</b> s <i>for</i> a <i>since</i>: A: <i>How long have you been learning to play the piano?</i> B: <i>For a few years now.</i>',
        '<b>Vysvětlení současných důsledků činnosti:</b> <i>You’ve been running, haven’t you? You’re out of breath.</i> · <i>He’s tired because he’s been working a lot lately.</i>',
        '<b>Příslovce</b> <i>lately, recently, always, only, never, ever, still, just</i> s present perfect continuous. Příslovce <i>always, only, never, ever, still, just</i> se vkládají <b>mezi pomocné a významové sloveso</b>. <i>Lately</i> a <i>recently</i> stojí obvykle <b>na začátku nebo na konci</b> věty.'
      ] },
      { t: 'ex', x: 'I’ve <b>just</b> been talking to the supplier.<br>We’ve <b>only</b> been working on this project for a few months.<br>I’ve been travelling a lot for work <b>lately</b>.<br><b>Recently</b>, he’s been working very hard.' },
      { t: 'svg', title: 'Činnost a její důsledek', x: ANG.ppcContrast(), cap: 'Continuous ukazuje na <b>činnost</b>, která měla vliv na přítomnost.' }
    ] },
    { title: 'Tvoření (Form)', blocks: [
      { t: 'svg', title: 'Stavba present perfect continuous', x: ANG.ppcForm(), cap: '' },
      { t: 'grid', head: ['Typ věty', 'Pravidlo', 'Příklad'], rows: [
        ['Kladná', '<b>have / has + been + verb-ing</b>', 'I/You/We/They <b>have been living</b> here for three years. · He/She/It <b>has been living</b> here since 2008.'],
        ['Záporná', '<b>have / has + not + been + verb-ing</b>', 'I/You/We/They <b>haven’t been feeling</b> well lately. · He/She/It <b>hasn’t been feeling</b> well lately.'],
        ['Otázka', 'změň pořadí slov', '<b>Have</b> I/you/we/they <b>been talking</b> too loudly? · <b>Has</b> he/she/it <b>been working</b> today? · What <b>have</b> you <b>been eating</b>?'],
        ['Krátká odpověď', '<b>has / have</b> nebo <b>hasn’t / haven’t</b>', 'Have they been working hard? Yes, they have. / No, they haven’t.']
      ] }
    ] },
    { title: 'Present perfect simple × present perfect continuous', blocks: [
      { t: 'p', x: 'Present perfect continuous používáme s <b>činnostními</b> slovesy (např. <i>learn, run, study</i>). Se <b>stavovými</b> slovesy (např. <i>be, know, have, like</i>) obvykle používáme <b>present perfect simple</b>:' },
      { t: 'ex', x: 'I <b>have had</b> my flat for ten years now. (ne: have been having)<br>We <b>have known</b> each other since we were at primary school.' },
      { t: 'p', x: 'Když mluvíme o <b>neukončených činnostech</b>, mají oba časy <b>stejný význam</b>:' },
      { t: 'grid', head: ['Present perfect simple', 'Present perfect continuous'], rows: [
        ['I’ve worked here for two years.', 'I’ve been working here for two years.'],
        ['How long have you lived in Rome?', 'How long have you been living in Rome?']
      ] },
      { t: 'versus', title: 'U nedávných činností může být rozdíl', cols: [
        { h: 'continuous – trvá, pravděpodobně neskončilo', items: ['He’s been <b>travelling</b> a lot for work lately. (situace pokračuje dnes)', 'We’ve been <b>packing</b> all morning. (činnost asi není dokončená)'] },
        { h: 'simple – zkušenost, dokončeno', items: ['He’s <b>travelled</b> to a lot of countries. (životní zkušenosti, dokončené činnosti)', 'We’ve <b>bought</b> some new furniture. (hotová věc)'] }
      ], x: 'Průběhový tvar zdůrazňuje <b>činnost samotnou</b> a to, že trvá nebo trvala delší dobu – ještě nemusela skončit. Jednoduchý tvar zdůrazňuje <b>výsledek nebo hotovou věc</b>. Proto „balili jsme celé dopoledne“ znamená, že balení třeba ještě pokračuje, kdežto „koupili jsme nový nábytek“ je hotová věc.' }
    ] }
  ],
  mistakes: [
    'Zapomenout <i>been</i>: ✗ He has living here → ✓ He has <b>been</b> living here.',
    'Použít continuous se stavovým slovesem: ✗ I have been having my flat for ten years → ✓ I <b>have had</b> my flat for ten years.',
    'Použít past simple pro neukončenou činnost: ✗ I worked here for two years (a stále tu pracuji) → ✓ I’ve been working here for two years.',
    'Dát příslovce <i>just, only</i> na špatné místo: patří mezi <i>have</i> a <i>been</i> (<i>I’ve just been talking</i>).'
  ],
  qa: [
    { q: 'Jak se tvoří present perfect continuous?', a: '<b>have / has + been + sloveso-ing</b>.' },
    { q: 'Kdy ho používáme?', a: 'Pro <b>neukončené činnosti</b> (s <i>for</i> a <i>since</i>) a k vysvětlení <b>současných důsledků</b> činnosti.' },
    { q: 'Co použiješ se stavovými slovesy (<i>be, know, have, like</i>)?', a: 'Obvykle <b>present perfect simple</b>: <i>I have had my flat for ten years now.</i>' },
    { q: 'Kam patří <i>just, only, never, ever, still</i>?', a: 'Mezi pomocné a významové sloveso: <i>I’ve just been talking to the supplier.</i>' },
    { q: 'Kam patří <i>lately</i> a <i>recently</i>?', a: 'Obvykle na začátek nebo na konec věty.' },
    { q: 'Jaký je rozdíl mezi <i>We’ve been packing all morning</i> a <i>We’ve bought some new furniture</i>?', a: 'První je činnost, která asi není dokončená; druhé je dokončená činnost.' }
  ]
});
