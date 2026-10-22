registerTopic({
  id: 'past-continuous', order: 13, icon: '🌧️', title: 'Past continuous', src: 'podklady', where: 'Lekce 7 (s. 68–69) + Grammar reference (s. 165)',
  summary: 'Minulý průběhový čas (<i>was / were + -ing</i>): pozadí příběhu, děj probíhající v určitou dobu v minulosti a dva děje současně.',
  vocab: [
    { w: 'past continuous', x: 'minulý průběhový čas: <i>was / were + -ing</i>' },
    { w: 'background', x: 'pozadí příběhu – situace, na níž se odehrává hlavní děj' },
    { w: 'in progress', x: 'probíhající – děj, který právě trvá' },
    { w: 'at the same time', x: 'současně – dva děje probíhají zároveň' }
  ],
  key: [
    '<b>was / were + -ing</b>: <i>He was studying. We were wearing security badges.</i>',
    '<b>Pozadí příběhu</b> (často spolu s past simple): <i>It was raining so I offered him a lift.</i>',
    '<b>Děj v průběhu</b> v určitou chvíli v minulosti: <i>We were living in Paris at the time.</i>',
    '<b>Dva děje současně</b>: <i>While he was taking acting lessons, he was also working part-time.</i>'
  ],
  sections: [
    { title: 'Použití (Use)', blocks: [
      { t: 'ol', items: [
        '<b>Pozadí příběhu.</b> Past continuous často používáme společně s past simple: <i>It was raining so I offered him a lift.</i> · <i>She was working as a model when she got her first part in a film.</i>',
        '<b>Děj v průběhu v určitou dobu v minulosti:</b> <i>We were living in Paris at the time.</i> · <i>By the age of four, he was singing in a band with his brothers.</i>',
        '<b>Dva nebo více dějů, které probíhaly současně:</b> <i>While he was taking acting lessons, he was also working part-time.</i>'
      ] },
      { t: 'svg', title: 'Pozadí × událost; dvě činnosti zároveň', x: ANG.pastContTime(), cap: 'Průběhový děj je dlouhý (pozadí), past simple je krátká událost, která do něj „vstoupí“.' },
      { t: 'versus', title: 'past continuous × past simple', cols: [
        { h: 'past continuous – pozadí, děj v průběhu', items: ['It <b>was raining</b>…', 'She <b>was working</b> as a model…'] },
        { h: 'past simple – hlavní událost', items: ['…so I <b>offered</b> him a lift.', '…when she <b>got</b> her first part in a film.'] }
      ], x: 'Představ si film: past continuous popisuje <b>scenérii</b> (pršelo, pracovala jako modelka), past simple <b>to, co se v ní stalo</b> (nabídl jsem odvoz, dostala roli). Past continuous je dlouhý děj, past simple krátký moment uprostřed něj.' }
    ] },
    { title: 'Tvoření (Form)', blocks: [
      { t: 'grid', head: ['Typ věty', 'Pravidlo', 'Příklad'], rows: [
        ['Kladná', '<b>was / were</b> + sloveso s koncovkou <b>-ing</b>', 'He was studying. · We were wearing security badges.'],
        ['Záporná', '<b>wasn’t</b> (was not) a <b>weren’t</b> (were not)', 'He wasn’t studying. · They weren’t wearing security badges.'],
        ['Otázka', 'změň pořadí slov', 'Was he studying? · What were you doing?'],
        ['Krátká odpověď', '<b>was / wasn’t / were / weren’t</b>', 'Was he studying? Yes, he was. / No, he wasn’t. · Were they working? Yes, they were. / No, they weren’t.']
      ] },
      { t: 'tip', x: 'Tvar je stejný jako u present continuous, jen sloveso <i>be</i> je v minulém čase: <i>am / is / are</i> → <b>was / were</b>.' }
    ] }
  ],
  mistakes: [
    'Použít <i>was</i> s <i>we / you / they</i>: ✗ We was living → ✓ We <b>were</b> living.',
    'Zapomenout koncovku <i>-ing</i>: ✗ It was rain → ✓ It was raining.',
    'Použít past continuous pro krátkou událost: ✗ I was offering him a lift (když šlo o jedno gesto) → ✓ I offered him a lift.',
    'Zaměnit pozadí a událost: dlouhý děj = past continuous, krátká událost = past simple.'
  ],
  qa: [
    { q: 'Jak se tvoří past continuous?', a: '<b>was / were + sloveso-ing</b>: <i>He was studying. We were wearing security badges.</i>' },
    { q: 'Kdy se používá past continuous s past simple?', a: 'Past continuous je <b>pozadí</b> (<i>It was raining</i>), past simple <b>událost</b> (<i>I offered him a lift</i>).' },
    { q: 'Jak vyjádříš dva současné děje v minulosti?', a: 'Past continuous u obou: <i>While he was taking acting lessons, he was also working part-time.</i>' },
    { q: 'Jak se tvoří záporná věta?', a: '<b>wasn’t / weren’t</b> + -ing: <i>They weren’t wearing security badges.</i>' }
  ]
});
