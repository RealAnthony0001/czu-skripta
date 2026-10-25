registerTopic({
  id: 'zero-first-conditional', group: 'gram', order: 15, icon: '🔀', title: 'Zero and first conditionals', src: 'podklady', where: 'Lekce 8 (s. 78–79) + Grammar reference (s. 169)',
  summary: 'Podmínkové věty o skutečných situacích: zero conditional (obecné pravdy: <i>if</i> + present simple, present simple) a first conditional (možnost v budoucnosti: <i>if</i> + present simple, <i>will</i>).',
  vocab: [
    { w: 'conditional sentence', x: 'podmínková věta – má dvě nebo více vět spojených slovem <i>if</i>' },
    { w: 'if-clause', x: 'vedlejší věta s <i>if</i>: obsahuje podmínku' },
    { w: 'main clause', x: 'hlavní věta: obsahuje následek nebo výsledek' },
    { w: 'unless', x: 'pokud ne, jestliže ne (= if … not)' },
    { w: 'zero conditional', x: 'nultý kondicionál: obecně platné věci' },
    { w: 'first conditional', x: 'první kondicionál: reálná možnost v budoucnosti' }
  ],
  key: [
    '<b>Zero:</b> <b>if / unless + present simple, present simple</b> – obecná pravda: <i>If I go shopping, I use recyclable plastic bags.</i>',
    '<b>First:</b> <b>if / unless + present simple, will / won’t + základní tvar</b> – reálná možnost: <i>If you cycle to work, it’ll save you money.</i>',
    '<b>If-clause</b> může být první i druhá; když je <b>na začátku, píšeme čárku</b>.',
    'V <b>zero conditional</b> lze <i>if</i> nahradit <i>when / whenever</i>.',
    'V <b>first conditional</b> lze místo <i>will</i> použít <b>may / might / can / could</b> (možnost) nebo <b>should / need to / have to</b> (rada).'
  ],
  sections: [
    { title: 'Podmínkové věty – úvod', blocks: [
      { t: 'p', x: 'Podmínkové věty mají dvě nebo víc vět spojených slovem <i>if</i>. Používáme je ve dvou druzích situací:' },
      { t: 'ol', items: [
        '<b>Normální situace</b>, kde používáme normální slovesné tvary: <i>If we charge for parking, more employees will cycle to work.</i> · <i>Life is more interesting if you have a lot of friends.</i> · <i>If it’s not the right size, bring it back.</i> · <i>If you’re going to buy a new car, you should get a fuel-efficient one.</i>',
        '<b>Imaginární nebo nereálné situace</b>, kde normální slovesné tvary <b>nepoužíváme</b>: <i>If I had a problem, my boss would help me.</i> · <i>If I were you, I’d tell the truth.</i> (viz second conditional, téma 16)'
      ] },
      { t: 'def', term: 'Čárka', x: 'If-clause může stát na začátku nebo na konci věty.', items: ['stojí-li <b>na začátku, píšeme mezi obě věty čárku</b>: <i>If you do some exercise, you’ll feel better.</i>', 'stojí-li na konci, čárka není: <i>You’ll feel better if you do some exercise.</i>'] }
    ] },
    { title: 'The zero conditional', blocks: [
      { t: 'def', term: 'Použití', x: 'Zero conditional používáme o <b>situacích a událostech, které obecně platí</b>.', items: ['if-clause říká příčinu, druhá část následek', 'místo <i>if</i> můžeme v hlavní větě použít <i>when</i> nebo <i>whenever</i>'] },
      { t: 'ex', x: 'Employees tend to be happier <b>if / when</b> they are able to contribute their ideas to plans.' },
      { t: 'svg', title: 'Stavba zero a first conditional', x: ANG.cond01(), cap: 'Obě věty používají present simple; v hlavní větě first conditional stojí <i>will</i>.' },
      { t: 'grid', head: ['Zero conditional', 'Příklad'], rows: [
        ['<b>If / unless + present simple, present simple</b>', 'If I go shopping, I use recyclable plastic bags. · I use recyclable plastic bags if I go shopping. · Unless someone is in the room, I switch off the lights.']
      ] }
    ] },
    { title: 'The first conditional', blocks: [
      { t: 'ol', items: [
        'First conditional používáme o <b>možnosti v budoucnosti</b>. If-clause obsahuje podmínku, druhá část výsledek: <i>If you take more exercise, you’ll feel fitter.</i> · <i>You’ll save money if you use energy-efficient light bulbs.</i>',
        'V podmínkových větách můžeme místo <i>will</i> použít jiná modální slovesa: <b>may / might / can / could</b> – něco, co je jen možným výsledkem: <i>If you replace your old light bulbs for low energy ones, it <b>can</b> reduce your electricity bills.</i> · <b>should, need to, have to</b> – rada nebo silné doporučení: <i>We <b>need to</b> replace these old light bulbs if we want to reduce our electricity bills.</i> · <i>If you use a lot of electricity, you <b>should</b> consider using renewable sources of energy.</i>'
      ] },
      { t: 'grid', head: ['Typ', 'Pravidlo', 'Příklad'], rows: [
        ['First conditional', '<b>if / unless + present simple, will / won’t (do)</b>', 'If you cycle to work, it’ll save you money. · If the price is too high, she won’t buy it. · I’ll take the job unless I get a better offer.'],
        ['Podobné podmínky', '<b>if / unless +</b> slovesné tvary, které jsou normální pro danou situaci', 'If you need any help, you can ask me. · If it’s too expensive, we shouldn’t buy it. · If shoppers don’t have a carrier bag, they have to pay for one.']
      ] },
      { t: 'versus', title: 'Zero × first conditional', cols: [
        { h: 'zero conditional', items: ['If I <b>go</b> shopping, I <b>use</b> recyclable bags.', 'present simple + present simple', 'obecně: vždycky, když…'] },
        { h: 'first conditional', items: ['If you <b>cycle</b> to work, it <b>will save</b> you money.', 'present simple + <i>will</i>', 'konkrétní možnost v budoucnosti'] }
      ], x: 'Obě věty vypadají podobně, ale vyjadřují něco jiného. Zero conditional je <b>návyk nebo pravda</b>: kdykoli jdu nakupovat, beru si tašku. First conditional je <b>konkrétní příslib nebo předpověď</b>: kdybys jezdil do práce na kole, ušetří ti to peníze. Rozdíl je v hlavní větě – present simple × <i>will</i>.' },
      { t: 'warn', x: 'V if-clause <b>není</b> <i>will</i>: ✗ If you will cycle … → ✓ If you <b>cycle</b> … . <i>Will</i> patří jen do hlavní věty.' }
    ] }
  ],
  mistakes: [
    'Dát <i>will</i> do věty s <i>if</i>: ✗ If it will rain, I’ll stay → ✓ If it <b>rains</b>, I’ll stay.',
    'Zapomenout čárku, když věta začíná <i>if</i>-clause: <i>If you do some exercise, you’ll feel better.</i>',
    'Zaměnit zero a first conditional: obecná pravda (present + present) × budoucí možnost (present + will).'
  ],
  qa: [
    { q: 'Jaká je stavba zero conditional?', a: '<b>if / unless + present simple, present simple</b> – obecně platné věci.' },
    { q: 'Jaká je stavba first conditional?', a: '<b>if / unless + present simple, will / won’t + základní tvar</b> – možnost v budoucnosti.' },
    { q: 'Co můžeme dát místo <i>if</i> v zero conditional?', a: '<i>When</i> nebo <i>whenever</i>.' },
    { q: 'Co můžeme dát místo <i>will</i> v first conditional?', a: '<i>May / might / can / could</i> (možnost) nebo <i>should, need to, have to</i> (rada).' },
    { q: 'Kdy píšeme čárku?', a: 'Když <b>if-clause stojí na začátku</b> věty.' },
    { q: 'Co znamená <i>unless</i>?', a: 'Pokud ne, jestliže ne (= if … not): <i>I’ll take the job unless I get a better offer.</i>' }
  ]
});
