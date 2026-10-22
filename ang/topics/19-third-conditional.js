registerTopic({
  id: 'third-conditional', order: 19, icon: '⏪', title: 'The third conditional', src: 'podklady', where: 'Lekce 10 (s. 100–101) + Grammar reference (s. 170)',
  summary: 'Podmínkové věty o nereálné minulosti – co by se bylo stalo, kdyby bylo všechno jinak: <i>if</i> + past perfect, <i>would have</i> + past participle.',
  vocab: [
    { w: 'third conditional', x: 'třetí kondicionál: představa jiné minulosti, než jaká byla' },
    { w: 'would have + past participle', x: 'bych byl (byla) udělal(a) – představovaný výsledek v minulosti' },
    { w: 'past perfect', x: 'předminulý čas <i>had + past participle</i> – v if-clause' },
    { w: 'criticism / regret', x: 'kritika / lítost – použití <i>should have</i> (téma 20)' }
  ],
  key: [
    '<b>If + past perfect, would have + past participle</b>: <i>If he’d had more money, he’d have bought the house.</i>',
    'Představujeme si <b>jinou minulost</b>, než jaká byla (<i>ve skutečnosti neměl dost peněz</i>).',
    '<b>If-clause</b> může být první i druhá část věty.',
    'Místo <i>would have</i> lze použít <b>should have / shouldn’t have</b> (kritika, lítost).',
    'Záporně může být <b>jedna nebo obě</b> části věty.'
  ],
  sections: [
    { title: 'Použití (Use)', blocks: [
      { t: 'ol', items: [
        'Third conditional používáme k tomu, abychom si <b>představili jinou minulost, než jaká byla ve skutečnosti</b>: <i>If he’d had more money, he’d have bought the house.</i> (Ve skutečnosti neměl dost peněz na koupi domu.)',
        'Místo <i>would have</i> můžeme použít i jiná modální slovesa. Chceme-li <b>kritizovat</b> naše minulé činy nebo činy jiných, použijeme <b>should / shouldn’t have</b>: <i>He should have come to me if he needed money.</i> (kritika) · <i>If I had thought about it, I shouldn’t have done a Sociology degree.</i> (lítost)'
      ] },
      { t: 'svg', title: 'Stavba třetího kondicionálu', x: ANG.third(), cap: 'If-clause může stát na začátku nebo na konci; stojí-li první, píšeme čárku.' }
    ] },
    { title: 'Tvoření (Form)', blocks: [
      { t: 'grid', head: ['Typ věty', 'Pravidlo', 'Příklad'], rows: [
        ['Kladná', '<b>If + past perfect + would have + past participle</b>; if-clause může být první nebo druhá', 'If you’d asked me, I would have helped you. · I would have helped you if you’d asked me.'],
        ['Záporná', 'jedna nebo obě části mohou být záporné', 'If she hadn’t fallen, she would have won the race. · She wouldn’t have lost the race if she hadn’t fallen.'],
        ['Otázka', 'změň pořadí slov', 'Would you have got the job if you hadn’t lied?']
      ] },
      { t: 'versus', title: 'Second × third conditional', cols: [
        { h: 'second – nereálné teď / v budoucnu', items: ['If I <b>had</b> the time, I<b>’d have</b> a holiday.', 'if + past simple, <i>would</i> + základní tvar'] },
        { h: 'third – nereálné v minulosti', items: ['If he<b>’d had</b> more money, he<b>’d have bought</b> the house.', 'if + past perfect, <i>would have</i> + past participle'] }
      ], x: 'Rozdíl je v tom, <b>kam</b> představa míří. Druhý kondicionál si představuje jinou přítomnost nebo budoucnost („kdybych měl čas, měl bych dovolenou“). Třetí kondicionál se vrací do minulosti, která už je uzavřená, takže se nedá změnit („kdyby měl víc peněz, byl by ten dům koupil“, ale nekoupil). Proto je v něm každé sloveso o jeden čas „dál“: past simple → past perfect, <i>would</i> → <i>would have</i>.' },
      { t: 'tip', x: 'Zkrácený zápis: <i>he’d had</i> = <i>he had had</i> (<i>’d</i> = <i>had</i>) · <i>he’d have bought</i> = <i>he would have bought</i> (<i>’d</i> = <i>would</i>).' }
    ] }
  ],
  mistakes: [
    'Dát <i>would have</i> do if-clause: ✗ If he would have had money → ✓ If he <b>had had</b> money.',
    'Použít past simple místo past perfect: ✗ If he had more money, he’d have bought → ✓ If he <b>’d had</b> more money…',
    'Zaměnit <i>’d</i> = <i>had</i> a <i>’d</i> = <i>would</i> ve zkrácené podobě.',
    'Zapomenout příčestí: ✗ would have buy → ✓ would have <b>bought</b>.'
  ],
  qa: [
    { q: 'Jaká je stavba third conditional?', a: '<b>If + past perfect, would have + past participle.</b>' },
    { q: 'O čem mluví third conditional?', a: 'O <b>jiné minulosti, než jaká byla</b> – nereálná minulost.' },
    { q: 'Co můžeš použít místo <i>would have</i>?', a: '<i>Should / shouldn’t have</i> (kritika a lítost) a jiná modální slovesa.' },
    { q: 'Jak se tvoří otázka?', a: 'Změnou pořadí slov: <i>Would you have got the job if you hadn’t lied?</i>' },
    { q: 'Může být záporná jen jedna část věty?', a: 'Ano – záporná může být jedna nebo obě části věty.' }
  ]
});
