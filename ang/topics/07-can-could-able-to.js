registerTopic({
  id: 'can-could-able-to', group: 'gram', order: 7, icon: '💪', title: 'can, could and be able to', src: 'podklady', where: 'Lekce 4 (s. 36–37) + Grammar reference (s. 167)',
  summary: 'Jak vyjádřit schopnost v přítomnosti, minulosti a budoucnosti: <i>can</i>, <i>could</i>, <i>be able to</i> a <i>will be able to</i>; kdy <i>could</i> nestačí.',
  vocab: [
    { w: 'ability', x: 'schopnost – něco umím nebo mohu udělat' },
    { w: 'can / can’t', x: 'umím / neumím; mohu / nemohu (přítomnost)' },
    { w: 'could / couldn’t', x: 'uměl jsem / mohl jsem (minulost)' },
    { w: 'be able to', x: 'být schopen; použitelné ve všech časech i po <i>to</i> / <i>-ing</i> tvarech' },
    { w: 'manage to', x: 'zvládnout, podařit se (jedna konkrétní obtížná situace)' }
  ],
  key: [
    '<b>can</b> = schopnost teď: <i>He can speak French very well.</i>',
    '<b>could / was able to</b> = schopnost v minulosti.',
    '<b>will be able to</b> = schopnost v budoucnosti (ne <i>will can</i>).',
    '<b>be able to</b> se použije tam, kde <i>can</i> nelze: po <i>to</i> nebo ve tvaru <i>-ing</i>.',
    'Pro <b>jednu konkrétní obtížnou situaci</b> v minulosti nepoužíváme <i>could</i>, ale <i>was able to</i> nebo <i>managed to</i>.'
  ],
  sections: [
    { title: 'Použití (Use)', blocks: [
      { t: 'svg', title: 'Schopnost v přítomnosti, minulosti a budoucnosti', x: ANG.abilityTime(), cap: 'Každé období má svůj tvar; <i>can</i> se pro budoucnost nahrazuje frází <i>will be able to</i>.' },
      { t: 'ol', items: [
        'O <b>schopnostech, které lidé mají teď</b>, obvykle použijeme <b>can</b>: <i>He can speak French very well.</i> · <i>I can’t remember a lot about my school days.</i>',
        '<b>Be able to</b> a <b>can</b> mají někdy stejný význam: <i>You can / will be able to integrate this into your life fairly easily.</i>',
        'O <b>schopnostech v budoucnosti</b> použijeme <b>will be able to</b>: <i>You will be able to improve your memory with these exercises.</i>',
        'O <b>schopnostech v minulosti</b> použijeme <b>could</b> a <b>was able to</b>: <i>I could / was able to learn things a lot faster when I was younger.</i> · <i>I couldn’t remember my mobile phone number.</i>'
      ] },
      { t: 'warn', x: 'Když mluvíme o <b>jedné konkrétní situaci</b> v minulosti, která byla výzvou nebo obtížná, <i>could</i> nepoužíváme. Místo toho řekneme: <i>It was a hard test but she <b>managed to</b> pass it.</i> (zvládla to).' }
    ] },
    { title: 'Tvoření (Form)', blocks: [
      { t: 'grid', head: ['Tvar', 'Pravidlo', 'Příklad'], rows: [
        ['<b>can, can’t, could, couldn’t</b>', 'nemají zvláštní tvar pro 3. osobu; za nimi stojí základní tvar', 'They can sing very well. · I can’t speak French. · Could you do the homework?'],
        ['<b>be able to</b>', 'použijeme ho, když je potřeba základní tvar nebo tvar <i>-ing</i>: <i>to</i> + <i>be able to</i>', 'I’d like to be able to swim better. · Being able to type is a useful skill. · Will you be able to do this work yourself?']
      ] },
      { t: 'versus', title: 'can × be able to', cols: [
        { h: 'can / could', items: ['přítomnost: <i>I can remember the name of my first teacher.</i>', 'minulost: <i>I could learn faster when I was younger.</i>', 'bez zvláštního tvaru pro 3. osobu'] },
        { h: 'be able to', items: ['budoucnost: <i>will be able to</i>', 'po <i>to</i>: <i>I’d like to be able to swim</i>', 'jako podmět: <i>Being able to type is a useful skill</i>'] }
      ], x: '<i>Can</i> a <i>could</i> jsou modální slovesa a nemají všechny tvary – nemají infinitiv, budoucí čas ani tvar na <i>-ing</i>. Proto tam, kde ho potřebuješ, vypomůže <i>be able to</i>: „chtěl bych umět plavat“ = <i>I’d like to be able to swim</i>.' },
      { t: 'ex', x: 'Cvičení z lekce: <i>The world’s changing so fast. We all need <b>to be able to</b> learn new things.</i> – po <i>need to</i> už nemůže stát <i>can</i>.' }
    ] }
  ],
  mistakes: [
    'Použít <i>will can</i>: ✗ You will can improve → ✓ You <b>will be able to</b> improve.',
    'Použít <i>to</i> po <i>can</i>: ✗ He can to speak → ✓ He can speak.',
    'Přidat <i>-s</i> ve 3. osobě: ✗ He cans speak → ✓ He can speak.',
    'Použít <i>could</i> pro jednu konkrétní zvládnutou situaci: ✗ She could pass the test (poprvé a těsně) → ✓ She <b>managed to</b> pass the test.',
    'Dát <i>can</i> za <i>need to</i> nebo <i>would like to</i>: místo toho <i>to be able to</i>.'
  ],
  qa: [
    { q: 'Jaký tvar použiješ pro schopnost v přítomnosti?', a: '<b>can</b> (nebo <i>be able to</i>): <i>He can speak French very well.</i>' },
    { q: 'Jaký tvar použiješ pro schopnost v minulosti?', a: '<b>could</b> nebo <b>was able to</b>: <i>I could learn things a lot faster when I was younger.</i>' },
    { q: 'Jak vyjádříš schopnost v budoucnosti?', a: '<b>will be able to</b>: <i>You will be able to improve your memory.</i>' },
    { q: 'Kdy se nepoužívá <i>could</i> v minulosti?', a: 'Při <b>jedné konkrétní situaci</b>, která byla obtížná: použij <i>managed to</i> nebo <i>was able to</i>.' },
    { q: 'Kdy musí být <i>be able to</i> místo <i>can</i>?', a: 'Když potřebuješ základní tvar nebo tvar <i>-ing</i>: <i>I’d like to be able to swim. Being able to type is useful.</i>' }
  ]
});
