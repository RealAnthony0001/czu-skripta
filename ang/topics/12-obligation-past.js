registerTopic({
  id: 'obligation-past', group: 'gram', order: 12, icon: '📜', title: 'Obligation in the past', src: 'podklady', where: 'Lekce 6 (s. 58–59) + Grammar reference (s. 168)',
  summary: 'Jak vyjádřit povinnost a povolení v minulosti: <i>had to, needed to, didn’t have to, didn’t need to, wasn’t / weren’t allowed to</i> a slovesa <i>make, let, allow</i>.',
  vocab: [
    { w: 'had to', x: 'musel jsem (minulý tvar od <i>have to</i>)' },
    { w: 'needed to', x: 'bylo potřeba (minulý tvar od <i>need to</i>)' },
    { w: 'didn’t have to', x: 'nemusel jsem – nebylo to nutné' },
    { w: 'wasn’t allowed to', x: 'nesměl jsem – nebylo to dovoleno' },
    { w: 'make / let / allow', x: 'přinutit / nechat, dovolit / dovolit' }
  ],
  key: [
    '<b>must</b> a <b>should</b> <b>nemají minulý tvar</b>. Použij <b>had to</b> a <b>needed to</b>.',
    '<b>had to / needed to</b> = bylo to nutné.',
    '<b>didn’t have to / didn’t need to</b> = nebylo to nutné.',
    '<b>wasn’t / weren’t allowed to</b> = nebylo to dovoleno.',
    '<b>let / allow</b> = dovolit · <b>make (someone)</b> = přinutit · <b>don’t make</b> = nenutit.'
  ],
  sections: [
    { title: 'Had to, needed to, didn’t have to', blocks: [
      { t: 'p', x: 'Modální slovesa povinnosti <i>must</i> a <i>should</i> nemají minulé tvary. Místo nich používáme minulé tvary <i>have to</i> a <i>need to</i>.' },
      { t: 'svg', title: 'Z přítomnosti do minulosti', x: ANG.pastObligation(), cap: 'Nutnost: <i>had to</i> / <i>needed to</i>. Zákaz: <i>wasn’t / weren’t allowed to</i>.' },
      { t: 'ol', items: [
        '<b>had to / needed to</b> – když bylo něco v minulosti nutné: <i>I had to wear a uniform in my last job.</i> · <i>We needed to work until 10 p.m. yesterday.</i>',
        '<b>didn’t have to / didn’t need to</b> – když něco v minulosti nebylo nutné: <i>She didn’t have to give a presentation in the end.</i> · <i>We didn’t need to keep a record of the hours we worked.</i>',
        '<b>wasn’t / weren’t allowed to</b> – když něco v minulosti nebylo dovoleno: <i>Nobody was allowed to make personal phone calls.</i>'
      ] },
      { t: 'tip', x: 'Naučit se tři věty: <b>I had to</b> (musel jsem), <b>I didn’t have to</b> (nemusel jsem), <b>I wasn’t allowed to</b> (nesměl jsem). V učebnici je trénuješ na tématu „Those were the days“ – jak se dříve pracovalo (<i>Men had to wear … to the office. A secretary had to … and give the boss his hat and coat.</i>).' }
    ] },
    { title: 'make / let / allow', blocks: [
      { t: 'svg', title: 'Čtyři významy', x: ANG.makeLetAllow(), cap: '' },
      { t: 'ol', items: [
        '<b>let / allow</b> používáme, když máme <b>povolení</b> něco dělat: <i>He allows his staff to vote on most major decisions.</i> = <i>He lets his staff vote on most major decisions.</i>',
        '<b>not allow</b> používáme, když povolení nemáme: <i>They don’t allow staff to use the internet.</i>',
        '<b>make (someone)</b> používáme, když někoho <b>do něčeho nutíme</b>: <i>They made all their staff work at the weekend.</i>',
        '<b>not make (someone)</b> používáme, když někoho do ničeho nenutíme: <i>We don’t make our staff work overtime.</i>'
      ] },
      { t: 'versus', title: 'let / allow × make', cols: [
        { h: 'let / allow', items: ['He <b>lets</b> his staff vote…', 'He <b>allows</b> his staff <b>to</b> vote…', 'let + osoba + základní tvar · allow + osoba + <i>to</i> + základní tvar'] },
        { h: 'make', items: ['They <b>made</b> all their staff work at the weekend.', 'make + osoba + základní tvar (bez <i>to</i>)'] }
      ], x: '<i>Let</i> a <i>allow</i> znamenají totéž (dovolit), ale <i>let</i> se pojí se základním tvarem přímo (<i>let him vote</i>), kdežto <i>allow</i> si vyžaduje <i>to</i> (<i>allow him to vote</i>). <i>Make</i> je opak: ten, kdo mluví, někoho k něčemu nutí – a zaměstnanci nemají na výběr.' }
    ] }
  ],
  mistakes: [
    'Použít minulý tvar od <i>must</i>: neexistuje, použij <i>had to</i>.',
    'Zaměnit <i>didn’t have to</i> a <i>wasn’t allowed to</i>: nebylo to nutné × nebylo to dovoleno.',
    'Dát <i>-ed</i> na sloveso po <i>had to</i>: ✗ I had to worked → ✓ I had to work.',
    'Zaměnit <i>make</i> a <i>let</i>: <i>make</i> = přinutit, <i>let</i> = dovolit.'
  ],
  qa: [
    { q: 'Jaký je minulý tvar od <i>must</i> a <i>should</i>?', a: 'Neexistuje – použijeme minulé tvary <i>have to</i> a <i>need to</i>: <i>had to</i>, <i>needed to</i>.' },
    { q: 'Jak řekneš, že něco v minulosti nebylo nutné?', a: '<i>didn’t have to / didn’t need to</i>: <i>She didn’t have to give a presentation in the end.</i>' },
    { q: 'Jak řekneš, že něco v minulosti nebylo dovoleno?', a: '<i>wasn’t / weren’t allowed to</i>: <i>Nobody was allowed to make personal phone calls.</i>' },
    { q: 'Jaký je rozdíl mezi <i>make</i> a <i>let</i>?', a: '<i>Make</i> = přinutit někoho něco udělat. <i>Let / allow</i> = dovolit.' },
    { q: 'Jak řekneš, že někoho nenutíš?', a: '<i>We don’t make our staff work overtime.</i>' }
  ]
});
