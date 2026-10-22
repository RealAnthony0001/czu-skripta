registerTopic({
  id: 'used-to', order: 10, icon: '📼', title: 'used to', src: 'podklady', where: 'Lekce 5 (s. 48–49) + Grammar reference (s. 164)',
  summary: 'Jak mluvit o minulých zvycích a stavech, které už neplatí (<i>used to</i>), jak ho tvořit v zápor a otázce a čím se nahrazuje u současných zvyků.',
  vocab: [
    { w: 'used to', x: 'dříve jsem (býval) – minulý zvyk nebo stav, který už neplatí' },
    { w: 'past habit', x: 'minulý zvyk – něco, co jsme dělali pravidelně' },
    { w: 'past state', x: 'minulý stav – něco, co dříve platilo (<i>He used to be a football player.</i>)' },
    { w: 'present habit', x: 'současný zvyk – vyjadřujeme present simple + příslovce četnosti' }
  ],
  key: [
    '<b>used to + základní tvar</b> = minulé zvyky a stavy, které <b>už neplatí</b>.',
    'Srovnáváme minulost s přítomností: <i>Marcus used to earn £500,000 a year but now he earns £60,000.</i>',
    'V <b>záporu a otázce</b> je <b>didn’t / did + use to</b> (ne used to).',
    'Často stačí <b>past simple</b> místo <i>used to</i> v záporu a otázce.',
    'Pro <b>současné zvyky</b> se <i>used to</i> nepoužívá – použij present simple s příslovcem četnosti.'
  ],
  sections: [
    { title: 'Použití (Use)', blocks: [
      { t: 'ol', items: [
        'Používáme <i>used to</i>, když mluvíme o věcech, které jsme dělali <b>v minulosti, ale už je nedělám</b>, a o <b>minulých stavech, které už neplatí</b>: <i>He used to spend weekends skiing in the Alps.</i> · <i>I didn’t use to enjoy my work but I do now.</i>',
        'Používáme <i>used to</i>, když chceme <b>srovnat minulost s přítomností</b>: <i>Marcus used to earn £500,000 a year but now he earns £60,000.</i>',
        'V záporu a otázce často použijeme jen <b>past simple</b>: <i>He didn’t like sports very much when he was younger.</i> · <i>Which sports did you play when you were at school?</i>'
      ] },
      { t: 'svg', title: 'Dřív × dnes', x: ANG.usedToContrast(), cap: 'Použití: minulé stavy a zvyky, které už neplatí.' },
      { t: 'versus', title: 'Minulý zvyk × současný zvyk', cols: [
        { h: 'minulý zvyk – used to', items: ['I used to buy the newspaper every day.', 'He used to be a football player.'] },
        { h: 'současný zvyk – present simple + příslovce', items: ['Marcus <b>is normally</b> at home for only six months of the year.', 'I <b>often watch</b> my favourite TV programme on Sunday nights.'] }
      ], x: '<i>Used to</i> existuje <b>jen pro minulost</b>. Když mluvíš o tom, co děláš pravidelně dnes, použij present simple s příslovcem četnosti (<i>usually, normally, often</i>).' }
    ] },
    { title: 'Tvoření (Form)', blocks: [
      { t: 'svg', title: 'Stavba used to', x: ANG.usedToForm(), cap: '' },
      { t: 'grid', head: ['Typ věty', 'Pravidlo', 'Příklad'], rows: [
        ['Kladná', '<b>used to</b> + základní tvar slovesa', 'I used to buy the newspaper every day. · He used to be a football player.'],
        ['Záporná', '<b>didn’t + use to</b> + základní tvar', 'We didn’t use to read free newspapers. · She didn’t use to have much money.'],
        ['Otázka ano/ne', '<b>did + podmět + use to</b> + základní tvar', 'Did he use to work as a waiter? · Did they use to make solar panels?'],
        ['Otázka s tázacím slovem', 'tázací slovo + <b>did</b> + podmět + <b>use to</b> + základ', 'What did you use to do in your previous job? · How much did he use to earn?'],
        ['Krátká odpověď', '<b>did / didn’t</b>', 'Did he use to like cities? Yes, he did. / No, he didn’t.']
      ] },
      { t: 'warn', x: 'V <b>záporu a otázkách</b> použij <b>základní tvar</b> <i>use to</i> (ne <i>used to</i>): <i>She <b>didn’t use to</b> travel much, but she does now.</i> (ne: <i>didn’t used to</i>) · <i>Did you <b>use to</b> travel a lot for work?</i> (ne: <i>did you used to</i>).' }
    ] }
  ],
  mistakes: [
    'Dát <i>used</i> i po <i>did / didn’t</i>: ✗ She didn’t used to travel → ✓ She didn’t <b>use</b> to travel.',
    'Použít <i>used to</i> pro současný zvyk: ✗ I used to go every day (dnes) → ✓ I usually go every day.',
    'Zapomenout základní tvar za <i>used to</i>: ✗ used to buying → ✓ used to buy.',
    'Použít <i>used to</i> pro děj, který se v minulosti stal jednou: <i>used to</i> je jen pro zvyky a stavy.'
  ],
  qa: [
    { q: 'K čemu slouží <i>used to</i>?', a: 'K vyjádření <b>minulých zvyků a stavů, které už neplatí</b>, a ke srovnání minulosti s přítomností.' },
    { q: 'Jak se tvoří záporná věta s <i>used to</i>?', a: '<b>didn’t use to</b> + základní tvar: <i>We didn’t use to read free newspapers.</i>' },
    { q: 'Jak se tvoří otázka s <i>used to</i>?', a: '<b>Did</b> + podmět + <b>use to</b>: <i>Did he use to work as a waiter?</i>' },
    { q: 'Co použiješ pro současné zvyky?', a: 'Present simple s příslovcem četnosti (<i>usually, normally, often</i>).' },
    { q: 'Co můžeš v záporu a otázce použít místo <i>used to</i>?', a: 'Past simple: <i>He didn’t like sports very much when he was younger.</i>' }
  ]
});
