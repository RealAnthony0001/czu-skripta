registerTopic({
  id: 'should-have', group: 'gram', order: 20, icon: '🤦', title: 'should have / shouldn’t have', src: 'podklady', where: 'Lekce 10 (s. 102–103) + Grammar reference (s. 170)',
  summary: 'Kritika a lítost nad minulými činy: <i>should have</i> + past participle (měl jsem / měl bys udělat) a <i>shouldn’t have</i> + past participle (neměl jsem udělat).',
  vocab: [
    { w: 'criticism', x: 'kritika – říkáme, že někdo jednal špatně' },
    { w: 'regret', x: 'lítost – litujeme vlastního jednání' },
    { w: 'should have + past participle', x: 'měl(a) jsem / měl(a) bys udělat (ale neudělal(a))' },
    { w: 'shouldn’t have + past participle', x: 'neměl(a) jsem / neměl(a) bys udělat (ale udělal(a))' }
  ],
  key: [
    '<b>should / shouldn’t have + past participle</b> vyjadřuje <b>kritiku</b> (cizí jednání) a <b>lítost</b> (vlastní jednání) v minulosti.',
    'Když si nejsme jisti, přidáváme <b>perhaps, maybe, I guess, I suppose</b>.',
    'Tvar odpovídá <b>třetímu kondicionálu</b>: modální sloveso + <i>have</i> + příčestí.',
    '<b>should have</b> = bylo to správné udělat (neudělal) · <b>shouldn’t have</b> = nebylo správné to udělat (udělal).'
  ],
  sections: [
    { title: 'Použití (Use)', blocks: [
      { t: 'ol', items: [
        '<i>Should / shouldn’t have</i> používáme, když chceme vyjádřit <b>kritiku a lítost</b> nad situacemi v minulosti. Když si nejsme jisti, často použijeme slova jako <i>perhaps, maybe, I guess, I suppose</i>.',
        'Tvoříme je stejně jako <b>třetí kondicionál</b>: <i>should / shouldn’t</i> + past participle hlavního slovesa. (viz téma 19)'
      ] },
      { t: 'svg', title: 'Kritika × lítost', x: ANG.shouldHave(), cap: 'Pořadí je stejné jako ve třetím kondicionálu: modální sloveso + have + past participle.' },
      { t: 'ex', x: 'Příběh z lekce 10 (Dan půjčil od kamaráda Kumara peníze na zálohu domu):<br><b>Dan:</b> I guess I <b>should have waited</b> another year before buying the house. <i>(lítost)</i><br><b>Kumar:</b> Some of my friends say I <b>shouldn’t have lent</b> him the money. <i>(kritika)</i>' },
      { t: 'versus', title: 'Lítost × kritika', cols: [
        { h: 'lítost – o sobě', items: ['I guess I <b>should have waited</b> another year.', 'If I had thought about it, I <b>shouldn’t have done</b> a Sociology degree.'] },
        { h: 'kritika – o druhých', items: ['He <b>should have come</b> to me if he needed money.', 'Some of my friends say I <b>shouldn’t have lent</b> him the money.'] }
      ], x: 'Tvar je v obou případech stejný, mění se jen osoba. Když mluvím o sobě, vyjadřuji <b>lítost</b> („škoda, že jsem to neudělal / neměl jsem to dělat“). Když mluvím o někom jiném, je to <b>kritika</b> („měl to udělat jinak“). Slova jako <i>I guess</i> nebo <i>maybe</i> zjemňují tvrzení, když si nejsem jistý.' }
    ] },
    { title: 'Tvoření (Form)', blocks: [
      { t: 'grid', head: ['Tvar', 'Pravidlo', 'Příklad'], rows: [
        ['Kladná', '<b>should have</b> + past participle', 'He should have come to me if he needed money. · Maybe Dan should have borrowed a smaller amount.'],
        ['Záporná', '<b>shouldn’t have</b> + past participle', 'I shouldn’t have done a Sociology degree. · Dan shouldn’t have asked his friend for so much money.']
      ] },
      { t: 'tip', x: 'Při cvičení si u každé věty polož otázku: „Co bylo správné udělat, ale neudělal?“ → <i>should have</i>. „Co udělal, ale neměl?“ → <i>shouldn’t have</i>.' }
    ] }
  ],
  mistakes: [
    'Zapomenout příčestí: ✗ should have wait → ✓ should have <b>waited</b>.',
    'Vynechat <i>have</i>: ✗ He should come to me (= teď) → ✓ He should <b>have come</b> (= v minulosti).',
    'Použít <i>should have</i> pro něco, co se ještě může stát – míří vždy do minulosti.',
    'Zaměnit kritiku a lítost podle osoby: u <i>I</i> jde o lítost, u <i>he / they / my friends</i> o kritiku.'
  ],
  qa: [
    { q: 'K čemu slouží <i>should / shouldn’t have</i>?', a: 'K vyjádření <b>kritiky a lítosti</b> nad minulými situacemi.' },
    { q: 'Jak se tvoří?', a: '<b>should / shouldn’t + have + past participle</b>.' },
    { q: 'Co říkáme, když si nejsme jisti?', a: 'Používáme <i>perhaps, maybe, I guess, I suppose</i>.' },
    { q: 'Jaký je rozdíl mezi <i>I should have waited</i> a <i>He should have come</i>?', a: 'První je <b>lítost</b> (o sobě), druhé <b>kritika</b> (o jiném člověku).' },
    { q: 'Se kterým tématem má stejnou stavbu?', a: 'Stejnou stavbu má <b>third conditional</b> (modální sloveso + have + past participle).' }
  ]
});
